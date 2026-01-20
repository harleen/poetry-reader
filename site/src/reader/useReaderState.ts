import { useState } from "react";
import type { ReadingModel } from "../../../models/readingModel";

export function useReaderState(model: ReadingModel) {
  const [currentId, setCurrentId] = useState(
    model.linearPoems[0]?.id
  );

  const currentPoem =
    model.linearPoems.find(p => p.id === currentId) ?? null;

  return {
    poems: model.linearPoems,
    currentPoem,
    currentId,
    selectPoem: setCurrentId,
  };
}
