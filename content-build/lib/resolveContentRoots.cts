import { fileExists } from './fs.cts';

export interface ContentRoots {
  mode: 'private' | 'demo';
  poemsRoot: string;
  translationsRoot: string;
  curationRoot: string;
}

export function resolveContentRoots(): ContentRoots {
  const hasPrivateContent =
    fileExists("poems") &&
    fileExists("translations") &&
    fileExists("curation");

  if (hasPrivateContent) {
    return {
      mode: "private",
      poemsRoot: "poems",
      translationsRoot: "translations",
      curationRoot: "curation",
    };
  }

  return {
    mode: "demo",
    poemsRoot: "demo/poems",
    translationsRoot: "demo/translations",
    curationRoot: "demo/curation",
  };
}