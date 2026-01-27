export interface NavManifest {
    sections: {
        id: string;
        title: string;
    }[];
}
export interface SectionManifest {
    id: string;
    title: string;
    description?: string;
    type?: "standard" | "translation";
    poems: string[];
}
export interface BasePoem {
    kind: "poem" | "translation";
    /**
     * Stable identifier derived from poem path.
     * Must remain consistent across builds as long
     * as the path does not change.
     */
    id: string;
    /**
     * Display title (from frontmatter or filename).
     */
    title: string;
    /**
     * Relative path within the poems repository.
     * Used for traceability and debugging, not rendering.
     */
    path: string;
}
export interface StandardPoem extends BasePoem {
    kind: "poem";
    /**
     * Full poem text with original lineation preserved.
     */
    content: string;
    /**
     * Optional interpretive metadata.
     * Never required; never authoritative.
     */
    meta?: PoemMeta;
}
export type PoemMeta = {
    /**
     * Poetic form or structural lineage.
     * Examples: "Free Verse", "Ghazal", "Prose Poem", "Sonnet-adjacent"
     *
     * Free text by design — form can be hybrid or evolving.
     */
    form?: string;
    /**
     * Abstract conceptual concerns of the poem.
     * Themes describe what the poem thinks about.
     *
     * Examples: ["Existence", "Truth", "Inheritance"]
     */
    themes?: string[];
    /**
     * Recurring concrete images, objects, or figures.
     * Motifs describe how the poem thinks.
     *
     * Examples: ["Canvas", "Numbers", "Henna", "Knife"]
     */
    motifs?: string[];
};
export type TranslationMeta = {
    translator?: string;
    sourceLanguage?: string;
    sourceAuthor?: string;
};
export interface TranslationPoem extends BasePoem {
    kind: "translation";
    original: {
        content: string;
        meta?: TranslationMeta;
    };
    translation: {
        content: string;
        meta?: TranslationMeta;
    };
    notes?: {
        content: string;
        meta?: TranslationMeta;
    };
}
export type Poem = StandardPoem | TranslationPoem;
export interface Section {
    id: string;
    title: string;
    poemIds: string[];
}
export interface ReadingModel {
    /**
     * Poems grouped into curated sections.
     */
    sections: Section[];
    /**
     * Poems indexed by ID for quick lookup.
     */
    poemsById: Record<string, Poem>;
    /**
     * Linear array of poem IDs for next/previous navigation.
     */
    linearOrder: string[];
}
