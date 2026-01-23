import { useParams, Link } from "react-router-dom";
import { readingModel } from "../generated/readingModel";
import { ReaderPoem } from "../reader/ReaderPoem";
import "./reader.css";
import "./readerLink.css";

export function SinglePoemPage() {
  const { id } = useParams<{ id: string }>();
  const poem = readingModel.linearPoems.find(p => p.id === id) ?? null;

  return (
    <main className="single-poem">
      <header className="single-poem-header">
        <Link to="/" className="reader-back-link">← Back to Reader</Link>
      </header>

      <ReaderPoem poem={poem} />
    </main>
  );
}
