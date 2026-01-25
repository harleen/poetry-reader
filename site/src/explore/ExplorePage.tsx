import { MotifsSection } from "./MotifsSection";
import { MotifResults } from "./MotifResults";
import { readingModel } from "../generated/readingModel";
import { ExploreTexture } from "./ExploreTexture";
import motifStats from "../generated/motifStats.json";
import "./explore.css";
import "./texture.css";
import "../reader/readerlink.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import type { Poem } from "../models/readingModel";

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

export function ExplorePage() {

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