// ============================
// Layer 1: Raw manifests
// ============================
// These interfaces mirror the YAML manifests exactly.
// They are build-time inputs and should not be used
// directly by the reader UI.

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
  poems: string[]; // Paths relative to poems repo root
}

// ============================
// Layer 2: Domain models
// ============================
// These represent the canonical reading model
// consumed by the reader UI.

export interface Poem {
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
}

export interface Section {
  id: string;
  title: string;
  poems: Poem[];
}

export interface ReadingModel {
  /**
   * Poems grouped into curated sections.
   */
  sections: Section[];

  /**
   * Linearized poem order for next/previous navigation.
   * Order is derived from section order + poem order.
   */
  linearPoems: Poem[];
}