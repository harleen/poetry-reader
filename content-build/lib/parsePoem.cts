import * as matter from "gray-matter";
import type { PoemMeta } from "../../models/readingModel";

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
              ? parsed.data.themes.filter((v: unknown): v is string => typeof v === "string")
              : undefined,

          motifs:
            Array.isArray(parsed.data.motifs)
              ? parsed.data.motifs.filter((v): v is string => typeof v === "string")
              : undefined
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
    if (line.startsWith("# ")) {
      title = line.replace(/^#\s+/, "").trim();
      titleLineIndex = i;
      break;
    }
    if (line.length > 0) break;
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
      .replace(/\b\w/g, c => c.toUpperCase());
  }

  // -----------------------------------
  // 4. Remove title heading from content
  // -----------------------------------
  const body =
    titleLineIndex >= 0
      ? lines.filter((_: string, i: number) => i !== titleLineIndex).join("\n")
      : lines.join("\n");

  return {
    title,
    content: body.trimStart(),
    meta,
  };
}
