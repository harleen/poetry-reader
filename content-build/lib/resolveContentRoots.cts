import { fileExists } from './fs.cts';

export interface ContentRoots {
  mode: 'private' | 'demo';
  poemsRoot: string;
  curationRoot: string;
}

export function resolveContentRoots(): ContentRoots {
  const hasPrivateContent =
    fileExists('poems') && fileExists('curation');

  if (hasPrivateContent) {
    return {
      mode: 'private',
      poemsRoot: 'poems',
      curationRoot: 'curation',
    };
  }

  return {
    mode: 'demo',
    poemsRoot: 'demo/poems',
    curationRoot: 'demo/curation',
  };
}