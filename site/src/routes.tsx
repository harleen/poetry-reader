import { Routes, Route, useNavigate } from "react-router-dom";
import { Reader } from "./reader/Reader";
import { SinglePoemPage } from "./reader/SinglePoemReader";
import { readingModel } from "./generated/readingModel";
import motifStats from "./generated/motifStats.json";
import rawSearchIndex from "./generated/searchIndex.json";
import type { SearchIndex } from "./models/searchModel";
import { ExploreView } from "./explore/ExploreView";

const searchIndex = rawSearchIndex as SearchIndex;

function ReaderRoute() {
  const navigate = useNavigate();

  return (
    <Reader
      readingModel={readingModel}
      searchIndex={searchIndex}
      onExplore={() => navigate("/explore")}
    />
  );
}

export function ExplorePage() {
  const navigate = useNavigate();

  return (
    <ExploreView
      readingModel={readingModel}
      motifStats={motifStats}
      onSelectPoem={(id) => navigate(`/poem/${id}`)}
    />
  );
}

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ReaderRoute />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/poem/:id" element={<SinglePoemPage readingModel={readingModel} />} />
    </Routes>
  );
}
