import type { MotifTerm } from "../../../models/motifModel";
import "./explore.css";

type Props = {
  motifs: MotifTerm[];
  activeMotif: string | null;
  onSelect: (term: string | null) => void;
};

export function MotifsSection({
  motifs,
  activeMotif,
  onSelect,
}: Props) {
  return (
    <section className="motifs-page">
      <div className="motifs-card">
        <h2 className="motifs-heading">Motifs</h2>

        <div className="motifs-row">
          {motifs.map((motif) => {
            const isActive = activeMotif === motif.term;

            return (
              <button
                key={motif.term}
                className={
                  isActive
                    ? "motif-item motif-item--active"
                    : "motif-item"
                }
                onClick={() =>
                  onSelect(isActive ? null : motif.term)
                }
              >
                <span className="motif-term">{motif.term}</span>
                <span className="motif-count">
                  {motif.poemCount}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}