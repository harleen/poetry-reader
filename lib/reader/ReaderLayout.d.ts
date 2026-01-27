import type { Poem, Section } from "../models/readingModel";
import type { SearchIndex } from "../models/searchModel";
type Props = {
    title?: string;
    description?: string;
    poemsById: Record<string, Poem>;
    sections: Section[];
    searchIndex: SearchIndex;
    currentPoem: Poem | null;
    currentId?: string;
    selectPoem: (id: string) => void;
    showWorkshop?: boolean;
};
export declare function ReaderLayout({ title, description, poemsById, sections, searchIndex, currentPoem, currentId, selectPoem, showWorkshop, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
