import type { ReadingModel } from "../models/readingModel";
import type { MotifIndex } from "../models/motifModel";

export interface MotifResultsProps {
  readingModel: ReadingModel;
  activeMotif: string | null;
  motifStats: MotifIndex;
  onSelectPoem?: (id: string) => void;
};

export function MotifResults({
  readingModel,
  activeMotif,
  motifStats,
  onSelectPoem,
}: MotifResultsProps) {
  // 1. Find the motif entry
  const motifEntry = activeMotif
    ? motifStats.terms.find((t) => t.term === activeMotif)
    : null;

  // 2. Resolve poem IDs → poem objects
  const poems =
    motifEntry
      ? motifEntry.poemIds
          .map((id) => readingModel.poemsById[id])
          .filter(Boolean)
      : [];

  return (
    <div className="motif-results">
      {activeMotif ? (
        <>
          <h3 className="motif-results-heading">
            Poems for “{activeMotif}”
          </h3>

          {poems.length === 0 ? (
            <p className="motif-empty">
              No poems found.
            </p>
          ) : (
            <ul className="motif-poem-list">
              {poems.map((poem) => (
                <li key={poem.id}>
                  <button
                    className="motif-poem-link"
                    onClick={() => onSelectPoem?.(poem.id)}
                  >
                    {poem.title}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </>
      ) : (
        <p className="motif-empty">
          Select a motif to see poems.
        </p>
      )}
    </div>
  );
}