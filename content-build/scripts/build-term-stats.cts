// content-build/scripts/buildMotifStats.cts

import { normalizeText } from "../lib/normalizeText.cts";
import { STOPWORDS } from "../lib/stopwords.cts";
import type { Poem } from "../../models/readingModel";

type TermStats = {
  totalCount: number;
  poemIds: Set<string>;
  perPoemCount: Map<string, number>;
};

export type MotifStats = {
  version: 1;
  terms: {
    term: string;
    poemIds: string[];
    totalCount: number;
    poemCount: number;
  }[];
  texture: {
    term: string;
    poemCount: number;
  }[];
};

export function buildMotifStats(poems: Poem[]): MotifStats {
    const termMap = new Map<string, TermStats>();

    for (const poem of poems) {
        const normalized = normalizeText(poem.content);
        const words = normalized.split(" ");

        for (const word of words) {
        if (word.length < 3) continue;
        if (STOPWORDS.has(word)) continue;

        if (!termMap.has(word)) {
            termMap.set(word, {
            totalCount: 0,
            poemIds: new Set(),
            perPoemCount: new Map(),
            });
        }

        const stats = termMap.get(word)!;
        stats.totalCount += 1;
        stats.poemIds.add(poem.id);
        stats.perPoemCount.set(
            poem.id,
            (stats.perPoemCount.get(poem.id) ?? 0) + 1
        );
        }
    }

    // ---- selection thresholds (conservative defaults) ----
    const totalPoems = poems.length;
    let MIN_POEM_COUNT: number;
    let MAX_MOTIF_COVERAGE: number;
    let TEXTURE_MIN_COVERAGE: number;

    if (totalPoems <= 4) {
        // Very small corpus: favor motifs, suppress texture
        MIN_POEM_COUNT = 2;
        MAX_MOTIF_COVERAGE = 1.0;   // allow even near-universal motifs
        TEXTURE_MIN_COVERAGE = 1.0; // texture only if literally everywhere
    } else if (totalPoems <= 10) {
        // Small corpus
        MIN_POEM_COUNT = 2;
        MAX_MOTIF_COVERAGE = 0.8;
        TEXTURE_MIN_COVERAGE = 0.9;
    } else {
        // Larger corpus
        MIN_POEM_COUNT = Math.max(2, Math.floor(totalPoems * 0.1));
        MAX_MOTIF_COVERAGE = 0.5;
        TEXTURE_MIN_COVERAGE = 0.7;
    }

    const motifs: MotifStats["terms"] = [];
    const texture: MotifStats["texture"] = [];

    for (const [term, stats] of termMap.entries()) {
        const poemCount = stats.poemIds.size;
        const coverage = poemCount / totalPoems;

        // Texture first (near-universal)
        if (coverage >= TEXTURE_MIN_COVERAGE) {
            texture.push({ term, poemCount });
            continue; // 👈 prevents motif classification
        }

        // Motifs next (selective recurrence)
        if (
            poemCount >= MIN_POEM_COUNT &&
            coverage <= MAX_MOTIF_COVERAGE
        ) {
            motifs.push({
            term,
            poemIds: Array.from(stats.poemIds),
            totalCount: stats.totalCount,
            poemCount,
            });
        }
    }

    return {
        version: 1,
        terms: motifs,
        texture: texture
    };
}
