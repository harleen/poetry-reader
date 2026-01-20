import type { Poem } from "../../../models/readingModel";

type Props = {
  poems: Poem[];
  currentId?: string;
  onSelect: (id: string) => void;
};

export function ReaderNav({ poems, currentId, onSelect }: Props) {
  return (
    <nav style={{ width: 240, padding: 16, borderRight: "1px solid #ddd" }}>
      <h3>Poems</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {poems.map(poem => (
          <li key={poem.id}>
            <button
              onClick={() => onSelect(poem.id)}
              style={{
                background: poem.id === currentId ? "#eee" : "transparent",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              {poem.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
