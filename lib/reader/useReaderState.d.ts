import type { ReadingModel } from "../models/readingModel";
export declare function useReaderState(model: ReadingModel): {
    poems: string[];
    currentPoem: import("../models/readingModel").Poem | null;
    currentId: string | undefined;
    selectPoem: import("react").Dispatch<import("react").SetStateAction<string | undefined>>;
};
