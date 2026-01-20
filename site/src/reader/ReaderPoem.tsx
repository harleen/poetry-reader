import type { Poem } from "../../../models/readingModel";

export function ReaderPoem({ poem }: { poem: Poem | null }) {
  if (!poem) return null;

  return (
    <main className="reader-poem">
      <div className="reader-poem-inner">
        <h1>{poem.title}</h1>
        <pre>{poem.content}</pre>
      </div>
    </main>
  );
}
