import { useParams, Link } from "react-router-dom";
import { readingModel } from "../generated/readingModel";
import { TranslationReader } from "../reader/TranslationReader";
import "./reader.css";
import "./readerlink.css";

export function SingleTranslationPage() {
  const { id } = useParams<{ id: string }>();

  if (!id) return null;

  // 🔑 Direct lookup, no searching
  const poem = readingModel.poemsById[id];

  // Guard: must exist and must be a translation
  if (!poem || poem.kind !== "translation") return null;

  return (
    <main className="single-poem">
      <header className="single-poem-header">
        <Link to="/" className="reader-back-link">
          ← Back to Reader
        </Link>
      </header>

      <TranslationReader poem={poem} />
    </main>
  );
}
