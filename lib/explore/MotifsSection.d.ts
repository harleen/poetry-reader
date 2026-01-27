import type { MotifTerm } from "../models/motifModel";
import "./explore.css";
type Props = {
    motifs: MotifTerm[];
    activeMotif: string | null;
    onSelect: (term: string | null) => void;
};
export declare function MotifsSection({ motifs, activeMotif, onSelect, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
