import { useMemo, useState } from "react";
import type { SearchIndex } from "../models/searchModel";
import type { Poem } from "../models/readingModel";

export function usePoemSearch(
  poemIds: string[],
  poemsById: Record<string, Poem>,
  searchIndex: SearchIndex
) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    // No search → return poems in nav order
    if (!query.trim()) {
      return poemIds
        .map((id) => poemsById[id])
        .filter(Boolean);
    }

    const q = query.toLowerCase();

    const matchingIds = searchIndex.poems
      .filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.text.toLowerCase().includes(q)
      )
      .map((p) => p.id);

    return poemIds
      .filter((id) => matchingIds.includes(id))
      .map((id) => poemsById[id])
      .filter(Boolean);
  }, [query, poemIds, poemsById]);

  return {
    query,
    setQuery,
    results,
    isSearching: query.trim().length > 0,
  };
}
