import matter from "gray-matter";
import type { PoemMeta } from "../../site/src/models/readingModel";

export type ParsedPoem = {
  title: string;
  content: string;
  meta?: PoemMeta;
};

export function parsePoem(raw: string, relativePath: string): ParsedPoem {
  // -----------------------------------
  // 1. Parse front matter (metadata only)
  // -----------------------------------
  const parsed = matter(raw);
  let text = parsed.content.trimStart();

  const meta: PoemMeta | undefined =
    parsed.data && typeof parsed.data === "object"
      ? {
          form:
            typeof parsed.data.form === "string"
              ? parsed.data.form
              : undefined,

          themes:
            Array.isArray(parsed.data.themes)
              ? parsed.data.themes.filter(
                  (v: unknown): v is string => typeof v === "string"
                )
              : undefined,

          motifs:
            Array.isArray(parsed.data.motifs)
              ? parsed.data.motifs.filter(
                  (v: unknown): v is string => typeof v === "string"
                )
              : undefined,
        }
      : undefined;

  // -----------------------------------
  // 2. Extract title from first H1
  // -----------------------------------
  const lines = text.split("\n");
  let title: string | null = null;
  let titleLineIndex = -1;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.length === 0) continue;

    // H1 case
    if (line.startsWith("# ")) {
      title = line.replace(/^#\s+/, "").trim();
      titleLineIndex = i;
      break;
    }

    // Plain text title case
    title = line;
    titleLineIndex = i;
    break;
  }

  // -----------------------------------
  // 3. Fallback: filename
  // -----------------------------------
  if (!title) {
    title = relativePath
      .replace(/\.[^/.]+$/, "")
      .split(/[\/\\]/)
      .pop()!
      .replace(/[-_]+/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
  }

  // -----------------------------------
  // 4. Remove duplicated title at top of body (comparison-only normalization)
  // -----------------------------------
  let bodyLines =
    titleLineIndex >= 0 ? lines.slice(titleLineIndex + 1) : [...lines];

  // Normalize title ONLY for comparison (keep display title intact)
  const normalizedTitleForCompare = title
    .replace(/\s*\([^)]*\)\s*$/, "") // strip trailing (254), etc.
    .toLowerCase();

  if (bodyLines.length > 0) {
    const normalizedFirstBodyLine = bodyLines[0]
      .trim()
      .replace(/\s*\([^)]*\)\s*$/, "") // strip (254)
      .toLowerCase();

    if (normalizedFirstBodyLine === normalizedTitleForCompare) {
      bodyLines.shift();

      // remove one blank line after duplicated title if present
      if (bodyLines[0]?.trim() === "") {
        bodyLines.shift();
      }
    }
  }

  const body = bodyLines.join("\n");

  return {
    title,                 
    content: body.trimStart(),
    meta,
  };
}