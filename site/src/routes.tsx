import { Routes, Route } from "react-router-dom";
import { Reader } from "./reader/Reader";
import { ExplorePage } from "./explore/ExplorePage";
import { SinglePoemPage } from "./reader/SinglePoemReader";
import { readingModel } from "./generated/readingModel";
import motifStats from "./generated/motifStats.json";
import rawSearchIndex from "./generated/searchIndex.json";
import type { SearchIndex } from "./models/searchModel";

const searchIndex = rawSearchIndex as SearchIndex;

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Reader readingModel={readingModel} searchIndex={searchIndex}/>} />
      <Route path="/explore" element={<ExplorePage readingModel={readingModel} motifStats={motifStats} />} />
      <Route path="/poem/:id" element={<SinglePoemPage readingModel={readingModel} />} />
    </Routes>
  );
}
