import { readingModel } from "../generated/readingModel";
import { ReaderLayout } from "./ReaderLayout";
import { useReaderState } from "./useReaderState";
import "./reader.css";

export function Reader() {
  const readerState = useReaderState(readingModel);

  return <ReaderLayout {...readerState} />;
}
