import type { ReadingModel } from "../models/readingModel";
import type { SearchIndex } from "../models/searchModel";
import { ReaderLayout } from "./ReaderLayout";
import { useReaderState } from "./useReaderState";
import "./reader.css";

type ReaderProps = {
  readingModel: ReadingModel;
  searchIndex: SearchIndex;
};

export function Reader({ readingModel, searchIndex }: ReaderProps) {

  if (!readingModel) {
    throw new Error("Reader requires a readingModel prop");
  }
  if (!searchIndex) {
    throw new Error("Reader requires a searchIndex prop");
  }

  const {
    currentId,
    currentPoem,
    selectPoem,
  } = useReaderState(readingModel);

  return (
    <ReaderLayout
      title={readingModel.title}
      description={readingModel.description}
      sections={readingModel.sections}
      poemsById={readingModel.poemsById}
      searchIndex={searchIndex}
      currentId={currentId}
      currentPoem={currentPoem}
      selectPoem={selectPoem}
      showWorkshop={true}
    />
  );
}