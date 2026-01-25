import type { TranslationPoem } from "../models/readingModel";

export function TranslationReader({ poem }: { poem: TranslationPoem }) {
  return (
    <main className="reader-poem translation-poem">
      <div className="translation-grid">
        <section className="translation-col">
          <h2 className="translation-label">Translation</h2>
          <pre>{poem.translation.content}</pre>
        </section>
        <section className="translation-col">
          <h2 className="translation-label">Original</h2>
          <pre>{poem.original.content}</pre>
        </section>
      </div>

      {poem.notes && (
        <section className="translation-notes">
          <h3>Notes</h3>
          <pre>{poem.notes.content}</pre>
        </section>
      )}
    </main>
  );
}
