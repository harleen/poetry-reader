import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: path.resolve(__dirname, "lib"),
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, "site/src/index.ts"),
      name: "PoetryReader",
      fileName: "poetry-reader",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react-router-dom"],
    },
  },
});