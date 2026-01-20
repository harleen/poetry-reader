import type { Poem } from "../../../models/readingModel";

export function ReaderPoem({ poem }: { poem: Poem | null }) {
  if (!poem) return null;

  return (
    <main style={{ flex: 1, padding: 24, overflowY: "auto" }}>
      <h1>{poem.title}</h1>
      <pre
        style={{
          whiteSpace: "pre-wrap",
          fontFamily: "inherit",
          lineHeight: 1.6,
        }}
      >
        {poem.content}
      </pre>
    </main>
  );
}
