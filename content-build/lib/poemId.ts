export function makePoemId(relativePath: string): string {
  return relativePath
    .replace(/\.[^/.]+$/, '')
    .replace(/\\/g, '/')
    .toLowerCase()
    .replace(/[^a-z0-9/]+/g, '-')
    .replace(/\//g, '--');
}