import { ReaderNav } from "./ReaderNav";
import { ReaderPoem } from "./ReaderPoem";
import type { Poem, Section } from "../models/readingModel";
import { useState } from "react";
import { WorkshopPanel } from "./WorkshopPanel";
import { TranslationReader } from "./TranslationReader";
import type { SearchIndex } from "../models/searchModel";

type Props = {
  title?: string;
  description?: string;
  poemsById: Record<string, Poem>;
  sections: Section[];
  searchIndex: SearchIndex;
  currentPoem: Poem | null;
  currentId?: string;
  selectPoem: (id: string) => void;
  showWorkshop?: boolean;
  onExplore?: () => void;
};

export function ReaderLayout({
  title,
  description,
  poemsById,
  sections,
  searchIndex,
  currentPoem,
  currentId,
  selectPoem,
  showWorkshop = true,
  onExplore,
}: Props) {
  // Mobile-only nav state
  const [isNavOpen, setIsNavOpen] = useState(false);


  return (
    <>
      <div className="reader">
        {(title) && (
          <header className="reader-header">
            {title && <h1 className="reader-title">{title}</h1>}
          </header>
        )}

        <button className="mobile-nav-toggle" onClick={() => setIsNavOpen((open) => !open)}>
          CONTENTS
        </button>

        <aside className={`reader-nav ${isNavOpen ? "reader-nav--open" : ""}`}>
          <button className="reader-nav-close" onClick={() => setIsNavOpen(false)}>
            CLOSE
          </button>
          <ReaderNav
            poemsById={poemsById}
            sections={sections}
            searchIndex={searchIndex}
            currentId={currentId}
            description={description}
            onSelect={(id) => {
              selectPoem(id);
              setIsNavOpen(false);
            }}
            onExplore={onExplore}
          />
        </aside>

       {currentPoem?.kind === "poem" && (
          <ReaderPoem poem={currentPoem} />
        )}

        {currentPoem?.kind === "translation" && (
          <TranslationReader poem={currentPoem} />
        )}

        {showWorkshop && currentPoem && (
          <WorkshopPanel poemTitle={currentPoem.title} />
        )}
      </div>
    </>
  );
}
