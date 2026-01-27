export type SearchPoem = {
    id: string;
    title: string;
    text: string;
};
export type SearchIndex = {
    poems: SearchPoem[];
};
