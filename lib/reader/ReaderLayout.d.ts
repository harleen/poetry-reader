import type { Poem, Section } from "../models/readingModel";
import type { SearchIndex } from "../models/searchModel";
type Props = {
    poemsById: Record<string, Poem>;
    sections: Section[];
    searchIndex: SearchIndex;
    currentPoem: Poem | null;
    currentId?: string;
    selectPoem: (id: string) => void;
};
export declare function ReaderLayout({ poemsById, sections, searchIndex, currentPoem, currentId, selectPoem, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
