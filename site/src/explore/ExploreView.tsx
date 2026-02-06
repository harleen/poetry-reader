import { useMemo, useState, type ComponentType } from "react";
import type { ReadingModel } from "../models/readingModel";
import type { MotifIndex } from "../models/motifModel";

import { MotifsSection } from "./MotifsSection";
import { MotifResults } from "./MotifResults";
import type { MotifResultsProps } from "./MotifResults";
import { ExploreTexture } from "./ExploreTexture";

import "./explore.css";
import { Link } from "react-router-dom";

const baseTerms = ["the", "words", "we", "carry", "there", "found", "light", "day", 
    "life", "hand", "eyes", "night", "heart", "love", "world", "dream", "away", "voice", 
    "long", "mind", "time"];

function buildTextureTerms(
  motifTerms: string[],
  fallbackTerms: string[],
  minMotifs = 6,
  targetCount = 40
): string[] {
  const source =
    motifTerms.length >= minMotifs
      ? motifTerms
      : fallbackTerms;

  const result: string[] = [];
  while (result.length < targetCount) {
    result.push(...source);
  }

  return result.slice(0, targetCount);
}

type Props = {
  readingModel: ReadingModel;
  motifStats: MotifIndex;
  onSelectPoem?: (id: string) => void;
  MotifResultsComponent?: ComponentType<MotifResultsProps>;
};

export function ExploreView({
  readingModel,
  motifStats,
  onSelectPoem,
  MotifResultsComponent = MotifResults,
}: Props) {

  const [activeMotif, setActiveMotif] = useState<string | null>(null);

  const motifs = useMemo(() => motifStats.terms, [motifStats]);

  const textureTerms = useMemo(() => {
    const motifTerms = motifStats.terms.map((t) => t.term);
    return buildTextureTerms(motifTerms, baseTerms);
  }, [motifStats]);

  const repeatedTexture = Array(120).fill(textureTerms).flat();

  return (
    <main className="explore">
      {/* Texture (quiet, vertical) */}
      <ExploreTexture
        terms={repeatedTexture}
      />

      <header className="explore-header">
          <Link className="reader-back-link" to="/">
            ← Back to Home
          </Link>
        </header>
      <div className="explore-separator" />

      <div className="explore-card explore-content">
        {/* Motif selector */}
        <MotifsSection
            motifs={motifs}
            activeMotif={activeMotif}
            onSelect={setActiveMotif}
        />
      </div>

      <div className="explore-separator" />

      {/* Results */}
      <div className="explore-card explore-content">
        <MotifResultsComponent
            readingModel={readingModel}
            motifStats={motifStats}
            activeMotif={activeMotif}
            onSelectPoem={onSelectPoem}
        />
      </div>
    </main>
  );
}
