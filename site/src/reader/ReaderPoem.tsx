import type { StandardPoem } from "../models/readingModel";
import { ReadAloud } from "./ReadAloud";

function buildSpeakText(poem: StandardPoem) {
  // You can tweak this formatting later (e.g., add pauses, remove punctuation, etc.)
  return `${poem.title}.\n\n${poem.content}`;
}

export function ReaderPoem({ poem }: { poem: StandardPoem | null }) {

  if (!poem) return null;

  return (
    <main className="reader-poem">
      <div className="reader-poem-inner">
        <h1>{poem.title}</h1>
        <ReadAloud text={buildSpeakText(poem)} label="Read Poem" />
        <pre>{poem.content}</pre>
      </div>
    </main>
  );
}