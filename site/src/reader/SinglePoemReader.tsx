import { useParams, Link } from "react-router-dom";
import type { ReadingModel } from "../models/readingModel";
import { ReaderPoem } from "../reader/ReaderPoem";
import { TranslationReader } from "./TranslationReader";
import "./reader.css";
import "./readerlink.css";

type Props = {
  readingModel: ReadingModel;
};

export function SinglePoemPage({ readingModel }: Props) {
  const { id } = useParams<{ id: string }>();
  if (!id) return null;

  const poem = readingModel.poemsById[id];
  if (!poem) return null;

  return (
    <main className="single-poem">
      <header className="single-poem-header">
       <Link className="reader-back-link" to="/explore">
          ← Back to Explore
        </Link>
      </header>

      {poem.kind === "poem" && <ReaderPoem poem={poem} />}
      {poem.kind === "translation" && (
        <TranslationReader poem={poem} />
      )}
    </main>
  );
}