import * as fs from "fs";
import * as path from "path";

import { buildReadingModel } from "../lib/buildReadingModel.cts";

const readingModel = buildReadingModel();

const OUT_DIR = path.resolve("site/src/generated");
const OUT_FILE = path.join(OUT_DIR, "readingModel.ts");

fs.mkdirSync(OUT_DIR, { recursive: true });

fs.writeFileSync(
  OUT_FILE,
  `export const readingModel = ${JSON.stringify(readingModel, null, 2)};\n`
);

console.log("✓ readingModel generated at", OUT_FILE);
