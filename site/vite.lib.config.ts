import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
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