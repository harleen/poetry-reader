import { ReaderNav } from "./ReaderNav";
import { ReaderPoem } from "./ReaderPoem";
import type { Poem } from "../../../models/readingModel";
import { useState } from "react";

type Props = {
  poems: Poem[];
  currentPoem: Poem | null;
  currentId: string | undefined;
  selectPoem: (id: string) => void;
};

export function ReaderLayout({
  poems,
  currentPoem,
  currentId,
  selectPoem,
}: Props) {
  // Mobile-only nav state
  const [isNavOpen, setIsNavOpen] = useState(false);


  return (
    <>
      <div className="reader">
        <aside className={`reader-nav ${isNavOpen ? "reader-nav--open" : ""}`}>
          <ReaderNav
            poems={poems}
            currentId={currentId}
            onSelect={(id) => {
              selectPoem(id);
              setIsNavOpen(false);
            }}
          />
        </aside>

        <ReaderPoem poem={currentPoem} />
      </div>

      {/* ⬅️ THIS MOVED OUT */}
      <button
        className="mobile-nav-toggle"
        onClick={() => setIsNavOpen((open) => !open)}
      >
        {isNavOpen ? "CLOSE" : "CONTENTS"}
      </button>
    </>
  );
}
