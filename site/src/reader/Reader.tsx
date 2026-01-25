import type { ReadingModel } from "../models/readingModel";
import { ReaderLayout } from "./ReaderLayout";
import { useReaderState } from "./useReaderState";
import "./reader.css";
import type { SearchIndex } from "../models/searchModel";

type ReaderProps = {
  readingModel: ReadingModel;
  searchIndex: SearchIndex;
};

export function Reader({ readingModel, searchIndex }: ReaderProps) {
  const {
    currentId,
    currentPoem,
    selectPoem,
  } = useReaderState(readingModel);

  return (
    <ReaderLayout
      sections={readingModel.sections}
      poemsById={readingModel.poemsById}
      searchIndex={searchIndex}
      currentId={currentId}
      currentPoem={currentPoem}
      selectPoem={selectPoem}
    />
  );
}