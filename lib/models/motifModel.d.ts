export type MotifTerm = {
    term: string;
    poemIds: string[];
    poemCount: number;
    totalCount: number;
};
export type MotifIndex = {
    version: number;
    terms: MotifTerm[];
};
