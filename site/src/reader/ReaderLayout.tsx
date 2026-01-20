import { ReaderNav } from "./ReaderNav";
import { ReaderPoem } from "./ReaderPoem";
import type { Poem } from "../../../models/readingModel";

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
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <ReaderNav
        poems={poems}
        currentId={currentId}
        onSelect={selectPoem}
      />
      <ReaderPoem poem={currentPoem} />
    </div>
  );
}
