import { useState } from "react";
import "./reader.css"

export function WorkshopPanel({ poemTitle }: { poemTitle?: string }) {
  const [text, setText] = useState("");

  const canSend = text.trim().length > 0;

  const mailtoHref = poemTitle
    ? `mailto:feedback@yourdomain.com?subject=${encodeURIComponent(
        `Workshop notes: ${poemTitle}`
      )}&body=${encodeURIComponent(text)}`
    : "";

  return (
    <aside className="workshop-panel">
      <h3>WORKSHOP NOTES</h3>

      <p className="workshop-hint">
        Thoughts, questions, or line-level notes.
      </p>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your notes here…"
      />

      <a
        className={`workshop-send ${canSend ? "" : "disabled"}`}
        href={canSend ? mailtoHref : undefined}
        aria-disabled={!canSend}
      >
        Send notes
      </a>
    </aside>
  );
}
