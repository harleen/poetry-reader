import * as fs from "fs";
import * as path from "path";
import * as yaml from "js-yaml";

const REPO_ROOT = process.cwd();

/**
 * Resolve a content reference to an absolute path.
 * All refs are relative to the repo root.
 */
function resolveRef(ref: string): string {
  return path.resolve(REPO_ROOT, ref);
}

export function fileExists(ref: string): boolean {
  return fs.existsSync(resolveRef(ref));
}

export function readTextFile(ref: string): string {
  const fullPath = resolveRef(ref);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Text file not found: ${ref}`);
  }

  return fs.readFileSync(fullPath, "utf8");
}

export function readYamlFile<T>(ref: string): T {
  const fullPath = resolveRef(ref);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`YAML file not found: ${ref}`);
  }

  try {
    return yaml.load(fs.readFileSync(fullPath, "utf8")) as T;
  } catch (err) {
    throw new Error(`Invalid YAML in ${ref}`);
  }
}
