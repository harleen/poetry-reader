import { readingModel } from "../generated/readingModel";
import { ReaderLayout } from "./ReaderLayout";
import { useReaderState } from "./useReaderState";
import "./reader.css";

export function Reader() {
  const {
    currentId,
    currentPoem,
    selectPoem,
  } = useReaderState(readingModel);

  return (
    <ReaderLayout
      poemIds={readingModel.linearOrder}
      poemsById={readingModel.poemsById}
      currentId={currentId}
      currentPoem={currentPoem}
      selectPoem={selectPoem}
    />
  );
}