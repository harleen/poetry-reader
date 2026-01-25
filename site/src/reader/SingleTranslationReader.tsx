import { useParams, Link } from "react-router-dom";
import type { ReadingModel } from "../models/readingModel";
import { TranslationReader } from "../reader/TranslationReader";
import "./reader.css";
import "./readerlink.css";

type Props = {
  readingModel: ReadingModel;
};

export function SingleTranslationPage({ readingModel }: Props) {
  const { id } = useParams<{ id: string }>();
  if (!id) return null;

  const poem = readingModel.poemsById[id];
  if (!poem || poem.kind !== "translation") return null;

  return (
    <main className="single-poem">
      <header className="single-poem-header">
        <Link className="reader-back-link" to="/explore">
          ← Back to Explore
        </Link>
      </header>

      <TranslationReader poem={poem} />
    </main>
  );
}