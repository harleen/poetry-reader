// src/scripts/buildSearchIndex.cts

import { normalizeText } from "../lib/normalizeText.cts";
import type { Poem } from "../../site/src/models/readingModel";

export type SearchIndex = {
  version: 1;
  poems: {
    id: string;
    title: string;
    text: string;
  }[];
};

export function buildSearchIndex(poems: Poem[]): SearchIndex {
  return {
    version: 1,
    poems: poems.map((poem) => {
      let combinedText = `${poem.title}`;
      if (poem.kind === "poem") {
        combinedText += `\n${poem.content}`;
      } else {
        combinedText += `\n${poem.original.content}\n${poem.translation.content}`;

        if (poem.notes) {
          combinedText += `\n${poem.notes.content}`;
        }
      }

      return {
        id: poem.id,
        title: poem.title,
        text: normalizeText(combinedText),
      };
    }),
  };
}
