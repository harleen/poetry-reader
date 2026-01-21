import * as fs from "fs";
import * as path from "path";

import { buildReadingModel } from "../lib/buildReadingModel.cts";
import { buildSearchIndex } from "./build-search-index.cts";
import { buildMotifStats } from "./build-term-stats.cts";

// Build once
const { readingModel, poems } = buildReadingModel();

// Build derived artifacts
const searchIndex = buildSearchIndex(poems);

// Build term/motif stats
const motifStats = buildMotifStats(poems);

// Output paths
const OUT_DIR = path.resolve("site/src/generated");
const READING_MODEL_FILE = path.join(OUT_DIR, "readingModel.ts");
const SEARCH_INDEX_FILE = path.join(OUT_DIR, "searchIndex.json");
const MOTIF_FILE = path.join(OUT_DIR, "motifStats.json");

// Ensure output directory exists
fs.mkdirSync(OUT_DIR, { recursive: true });

// Write reading model (TS)
fs.writeFileSync(
  READING_MODEL_FILE,
  `export const readingModel = ${JSON.stringify(readingModel, null, 2)};\n`
);

// Write search index (JSON)
fs.writeFileSync(
  SEARCH_INDEX_FILE,
  JSON.stringify(searchIndex, null, 2)
);

// Write term stats (JSON)
fs.writeFileSync(
  MOTIF_FILE,
  JSON.stringify(motifStats, null, 2)
);

console.log("✓ readingModel generated at", READING_MODEL_FILE);
console.log("✓ searchIndex generated at", SEARCH_INDEX_FILE);
console.log("✓ motifStats generated at", MOTIF_FILE);

