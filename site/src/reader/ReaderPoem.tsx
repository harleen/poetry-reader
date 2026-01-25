import type { StandardPoem } from "../models/readingModel";

export function ReaderPoem({ poem }: { poem: StandardPoem | null }) {
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
