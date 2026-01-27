import type { SearchIndex } from "../models/searchModel";
import type { Poem } from "../models/readingModel";
export declare function usePoemSearch(poemIds: string[], poemsById: Record<string, Poem>, searchIndex: SearchIndex): {
    query: string;
    setQuery: import("react").Dispatch<import("react").SetStateAction<string>>;
    results: Poem[];
    isSearching: boolean;
};
