import * as path from "path";
import * as fs from "fs";
import * as matter from "gray-matter";
import { TranslationMeta } from "../../site/src/models/readingModel";

export type ParsedTranslationPoem = {
  title: string;

  original: {
    content: string;
    meta?: TranslationMeta;
  };

  translation: {
    content: string;
    meta?: TranslationMeta;
  };

  notes?: {
    content: string;
    meta?: TranslationMeta;
  };
};

function parseMarkdownFile<TMeta = Record<string, any>>(
  filePath: string,
  fallbackTitle?: string
): {
  title?: string;
  content: string;
  frontmatter?: TMeta;
} {
  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = matter(raw);
  const content = parsed.content.trimStart();

  let title: string | undefined;

  const lines = content.split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    if (trimmed.startsWith("# ")) {
      title = trimmed.replace(/^#\s+/, "").trim();
      break;
    }

    title = trimmed;
    break;
  }

  if (!title) {
    title = fallbackTitle;
  }

  return {
    title,
    content,
    frontmatter:
      parsed.data && typeof parsed.data === "object"
        ? (parsed.data as TMeta)
        : undefined,
  };
}

export function parseTranslationFolder(
  folderPath: string
): ParsedTranslationPoem {
  const originalPath = path.join(folderPath, "original.md");
  const translationPath = path.join(folderPath, "translation.md");
  const notesPath = path.join(folderPath, "notes.md");

  if (!fs.existsSync(originalPath)) {
    throw new Error(`Missing original.md in ${folderPath}`);
  }

  if (!fs.existsSync(translationPath)) {
    throw new Error(`Missing translation.md in ${folderPath}`);
  }

  const originalParsed = parseMarkdownFile(
    originalPath,
    path.basename(folderPath)
  );

  const translationParsed = parseMarkdownFile(
    translationPath,
    originalParsed.title
  );

  const title =
    translationParsed.title ??
    originalParsed.title ??
    path.basename(folderPath);

  const parsed: ParsedTranslationPoem = {
    title,

    original: {
      content: originalParsed.content,
      meta: originalParsed.frontmatter,
    },

    translation: {
      content: translationParsed.content,
      meta: translationParsed.frontmatter,
    },
  };

  if (fs.existsSync(notesPath)) {
    const notesParsed = parseMarkdownFile(notesPath);

    parsed.notes = {
      content: notesParsed.content,
      meta: notesParsed.frontmatter,
    };
  }

  return parsed;
}
