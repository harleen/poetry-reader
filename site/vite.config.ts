import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";
import os from "os";

// Path to shared certificate directory
const certDir = path.join(os.homedir(), ".localhost-certs");
const certPath = path.join(certDir, "localhost.pem");
const keyPath = path.join(certDir, "localhost-key.pem");

// Check if certs exist
const hasHttps =
  fs.existsSync(certPath) && fs.existsSync(keyPath);

export default defineConfig({
  // Needed for GitHub Pages / demo site
  base: "/poetry-reader/",

  plugins: [react()],

  // Dev server only
  server: hasHttps
    ? {
        https: {
          cert: fs.readFileSync(certPath),
          key: fs.readFileSync(keyPath),
        },
      }
    : undefined,

  // Library build (used by your private site)
  build: {
    lib: {
      entry: "src/index.ts",
      name: "PoetryReader",
      fileName: "poetry-reader",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react-router-dom"],
    },
  },
});
