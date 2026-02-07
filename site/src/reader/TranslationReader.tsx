import type { TranslationPoem } from "../models/readingModel";
import ReactMarkdown from "react-markdown";
import { ReadAloud } from "./ReadAloud";

export function TranslationReader({ poem }: { poem: TranslationPoem }) {
   const speakText = `${poem.title}.\n\n${poem.translation.content}`;
  return (
    <main className="reader-poem translation-poem">
      <ReadAloud text={speakText} label="Read translation" />
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
          <ReactMarkdown>
            {poem.notes.content}
          </ReactMarkdown>
        </section>
      )}
    </main>
  );
}
