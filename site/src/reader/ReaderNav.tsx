import type { Poem } from "../../../models/readingModel";
import { usePoemSearch } from "./usePoemSearch";
import { Link } from "react-router-dom";

type Props = {
  poems: Poem[];
  currentId?: string;
  onSelect: (id: string) => void;
};

export function ReaderNav({ poems, currentId, onSelect }: Props) {
  const { query, setQuery, results, isSearching } =
    usePoemSearch(poems);

  return (
    <nav>
      <h3>{isSearching ? "RESULTS" : "POEMS"}</h3>

      <input
        className="reader-search"
        type="search"
        placeholder="Search…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search poems"
      />

      <ul className="reader-nav-list">
        {results.map((poem) => (
          <li key={poem.id}>
            <button
              className={
                poem.id === currentId
                  ? "reader-nav-item active"
                  : "reader-nav-item"
              }
              onClick={() => onSelect(poem.id)}
            >
              {poem.title}
            </button>
          </li>
        ))}
      </ul>

      {results.length === 0 && isSearching && (
        <div className="reader-empty">
          No poems match this search.
        </div>
      )}

      <div className="reader-nav-footer">
        <Link className="reader-nav-explore" to="/explore">EXPLORE</Link>
      </div>
    </nav>
  );
}
