import { ReaderNav } from "./ReaderNav";
import { ReaderPoem } from "./ReaderPoem";
import type { Poem } from "../models/readingModel";
import { useState } from "react";
import { WorkshopPanel } from "./WorkshopPanel";
import { TranslationReader } from "./TranslationReader";

type Props = {
  poemIds: string[];
  poemsById: Record<string, Poem>;
  currentPoem: Poem | null;
  currentId?: string;
  selectPoem: (id: string) => void;
};

export function ReaderLayout({
  poemIds,
  poemsById,
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
            poemIds={poemIds}
            poemsById={poemsById}
            currentId={currentId}
            onSelect={(id) => {
              selectPoem(id);
              setIsNavOpen(false);
            }}
          />
        </aside>

       {currentPoem?.kind === "poem" && (
          <ReaderPoem poem={currentPoem} />
        )}

        {currentPoem?.kind === "translation" && (
          <TranslationReader poem={currentPoem} />
        )}

        {currentPoem && (
          <WorkshopPanel poemTitle={currentPoem.title} />
        )}
      </div>

      <button
        className="mobile-nav-toggle"
        onClick={() => setIsNavOpen((open) => !open)}
      >
        {isNavOpen ? "CLOSE" : "CONTENTS"}
      </button>
    </>
  );
}
