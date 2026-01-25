import { MotifsSection } from "./MotifsSection";
import { MotifResults } from "./MotifResults";
import type { MotifTerm } from "../models/motifModel";
import { ExploreTexture } from "./ExploreTexture";
import type { Poem, ReadingModel } from "../models/readingModel";
import "./explore.css";
import "./texture.css";
import "../reader/readerlink.css"
import { useState } from "react";
import { Link } from "react-router-dom";


type MotifStats = {
  terms: MotifTerm[];
  texture: { term: string }[];
};

type Props = {
  readingModel: ReadingModel;
  motifStats: MotifStats;
};

// later this will come from texture stats
const baseTerms = [
  "the",
  "words",
  "we",
  "carry",
  "there",
  "found",
  "light",
  "day",
  "life",
  "hand",
  "eyes",
  "night",
  "heart",
  "love",
  "world",
  "dream",
  "away",
  "voice",
  "long",
  "mind",
  "time",
];

export function ExplorePage({ readingModel, motifStats }: Props) {

  const textureTerms = (motifStats.texture as { term: string }[]).map(t => t.term);
  if (textureTerms.length === 0) {
    textureTerms.push(...baseTerms);
  }

  // create the field density here
  const repeatedTexture = Array(120).fill(textureTerms).flat();

  const [activeMotif, setActiveMotif] = useState<string | null>(null);

  const motif = motifStats.terms.find(m => m.term === activeMotif) ?? null;

  const poems = motif
  ? motif.poemIds
      .map(id => readingModel.poemsById[id])
      .filter((p): p is Poem => Boolean(p))
      .map(p => ({
        id: p.id,
        title: p.title,
      }))
  : [];

  return (
    <main className="explore-root">

        <ExploreTexture terms={repeatedTexture} />

        <header className="explore-header">
          <Link className="reader-back-link" to="/">
            ← Back to Reader
          </Link>
        </header>

        <div className="explore-separator" />

        <div className="explore-card explore-content">
            {/* Motifs live freely */}
            <MotifsSection
            motifs={motifStats.terms}
            activeMotif={activeMotif}
            onSelect={setActiveMotif}
            />
        </div>

        <div className="explore-separator" />

        <div className="explore-card explore-content">
            <MotifResults
                poems={poems}
                activeMotif={activeMotif}
            />
        </div>

    </main>
  );
}