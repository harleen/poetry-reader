import { useMemo, useState } from "react";
import searchIndex from "../generated/searchIndex.json";
import type { Poem } from "../../../models/readingModel";

export function usePoemSearch(poems: Poem[]) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query.trim()) return poems;

    const q = query.toLowerCase();

    const matchingIds = searchIndex.poems
      .filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.text.toLowerCase().includes(q)
      )
      .map((p) => p.id);

    return poems.filter((poem) => matchingIds.includes(poem.id));
  }, [poems, query]);

  return {
    query,
    setQuery,
    results,
    isSearching: query.trim().length > 0,
  };
}