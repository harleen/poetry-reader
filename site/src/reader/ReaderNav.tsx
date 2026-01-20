import type { Poem } from "../../../models/readingModel";

type Props = {
  poems: Poem[];
  currentId?: string;
  onSelect: (id: string) => void;
};

export function ReaderNav({ poems, currentId, onSelect }: Props) {
  return (
    <nav>
      <h3>Poems</h3>
      <ul className="reader-nav-list">
        {poems.map((poem) => (
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
    </nav>
  );
}
