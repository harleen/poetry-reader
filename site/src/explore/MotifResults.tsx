import { Link } from "react-router-dom";

type Props = {
  poems: { id: string; title: string }[];
  activeMotif: string | null;
};

export function MotifResults({ poems, activeMotif }: Props) {
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
                <Link to={`/poem/${poem.id}`} className="motif-poem-link">{poem.title}</Link>
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
