import type { MotifTerm } from "../models/motifModel";
import type { ReadingModel } from "../models/readingModel";
import "./explore.css";
import "./texture.css";
import "../reader/readerlink.css";
type MotifStats = {
    terms: MotifTerm[];
    texture: {
        term: string;
    }[];
};
type Props = {
    readingModel: ReadingModel;
    motifStats: MotifStats;
};
export declare function ExplorePage({ readingModel, motifStats }: Props): import("react/jsx-runtime").JSX.Element;
export {};
