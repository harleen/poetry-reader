import type { ReadingModel } from "../models/readingModel";
import type { SearchIndex } from "../models/searchModel";
import "./reader.css";
type ReaderProps = {
    readingModel: ReadingModel;
    searchIndex: SearchIndex;
    showWorkshop?: boolean;
};
export declare function Reader({ readingModel, searchIndex, showWorkshop }: ReaderProps): import("react/jsx-runtime").JSX.Element;
export {};
