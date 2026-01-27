import type { Poem, Section } from "../models/readingModel";
import type { SearchIndex } from "../models/searchModel";
type Props = {
    sections: Section[];
    poemsById: Record<string, Poem>;
    searchIndex: SearchIndex;
    currentId?: string;
    onSelect: (id: string) => void;
};
export declare function ReaderNav({ sections, poemsById, searchIndex, currentId, onSelect, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
