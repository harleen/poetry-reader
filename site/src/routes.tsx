import { Routes, Route } from "react-router-dom";
import { Reader } from "./reader/Reader";
import { ExplorePage } from "./explore/ExplorePage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Reader />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/poem/:id" element={<Reader />} />
    </Routes>
  );
}
