// src/scripts/buildSearchIndex.cts

import { normalizeText } from "../lib/normalizeText.cts";
import type { Poem } from "../../models/readingModel";

export type SearchIndex = {
  version: 1;
  poems: {
    id: string;
    title: string;
    text: string;
    meta?: Poem["meta"];
  }[];
};

export function buildSearchIndex(poems: Poem[]): SearchIndex {
  return {
    version: 1,
    poems: poems.map((poem) => {
      const combinedText = `${poem.title}\n${poem.content}`;

      return {
        id: poem.id,
        title: poem.title,
        text: normalizeText(combinedText),
        meta: poem.meta,
      };
    }),
  };
}
