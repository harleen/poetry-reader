import type { Poem, Section } from "../models/readingModel";
import type { SearchIndex } from "../models/searchModel";
import { usePoemSearch } from "./usePoemSearch";
import { Link } from "react-router-dom";

type Props = {
  sections: Section[];
  poemsById: Record<string, Poem>;
  searchIndex: SearchIndex
  currentId?: string;
  onSelect: (id: string) => void;
};

export function ReaderNav({
  sections,
  poemsById,
  searchIndex,
  currentId,
  onSelect,
}: Props) {
  // Flatten poem ids ONLY for search
  const allPoemIds = sections.flatMap((s) => s.poemIds);

  const { query, setQuery, results, isSearching } =
    usePoemSearch(allPoemIds, poemsById, searchIndex);

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

      {/* SEARCH RESULTS (flat) */}
      {isSearching && (
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
      )}

      {/* SECTIONED NAV (default) */}
      {!isSearching &&
        sections.map((section) => (
          <div key={section.id} className="reader-nav-section">
            <h4 className="reader-nav-section-title">
              {section.title}
            </h4>

            <ul className="reader-nav-list">
              {section.poemIds.map((id) => {
                const poem = poemsById[id];
                if (!poem) return null;

                return (
                  <li key={id}>
                    <button
                      className={
                        id === currentId
                          ? "reader-nav-item active"
                          : "reader-nav-item"
                      }
                      onClick={() => onSelect(id)}
                    >
                      {poem.title}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}

      {results.length === 0 && isSearching && (
        <div className="reader-empty">
          No poems match this search.
        </div>
      )}

      <div className="reader-nav-footer">
        <Link className="reader-nav-explore" to="/explore">
          EXPLORE
        </Link>
      </div>
    </nav>
  );
}
