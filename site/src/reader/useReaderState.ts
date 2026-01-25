import { useState } from "react";
import type { ReadingModel } from "../models/readingModel";

export function useReaderState(model: ReadingModel) {
  // Initial selection: first poem id in reading order
  const [currentId, setCurrentId] = useState<string | undefined>(
    model.linearOrder[0]
  );

  // Lookup poem by id 
  const currentPoem =
    currentId ? model.poemsById[currentId] ?? null : null;

  return {
    // For navigation: pass IDs, not poems
    poems: model.linearOrder,

    // For rendering
    currentPoem,
    currentId,

    // Selection
    selectPoem: setCurrentId,
  };
}
