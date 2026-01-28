import { fileExists } from './fs.ts';

export interface ContentRoots {
  mode: 'private' | 'demo';
  poemsRoot: string;
  translationsRoot: string;
  curationRoot: string;
}

export function resolveContentRoots(): ContentRoots {
  const hasPrivateContent =
    (fileExists("content/poems") ||
    fileExists("content/translations")) &&
    fileExists("content/curation");

  if (hasPrivateContent) {
    return {
      mode: "private",
      poemsRoot: "content/poems",
      translationsRoot: "content/translations",
      curationRoot: "content/curation",
    };
  }

  return {
    mode: "demo",
    poemsRoot: "demo/poems",
    translationsRoot: "demo/translations",
    curationRoot: "demo/curation",
  };
}