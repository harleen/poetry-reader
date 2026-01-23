import * as fs from "fs";
import { BUILD_PATHS } from "../config/buildPaths.cts";

console.log("🧹 CLEAN: starting");

if (fs.existsSync(BUILD_PATHS.generatedRoot)) {
  console.log("🧹 CLEAN: removing", BUILD_PATHS.generatedRoot);
  fs.rmSync(BUILD_PATHS.generatedRoot, { recursive: true, force: true });
} else {
  console.log("🧹 CLEAN: nothing to remove");
}

console.log("🧹 CLEAN: done");
