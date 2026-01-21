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
    const MIN_POEM_COUNT = totalPoems < 5 ? 2 : Math.max(2, Math.floor(totalPoems * 0.1));
    const MAX_MOTIF_COVERAGE = totalPoems < 5 ? 0.8 : 0.5;
    const TEXTURE_MIN_COVERAGE = totalPoems < 5 ? 0.6 : 0.7;

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
