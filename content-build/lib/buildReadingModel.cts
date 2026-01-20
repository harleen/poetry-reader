import * as path from "path";
import type {
  NavManifest,
  SectionManifest,
  Poem,
  Section,
  ReadingModel,
} from "../../models/readingModel";

import { readYamlFile, readTextFile } from "./fs.cts";
import { resolveContentRoots } from "./resolveContentRoots.cts";
import { parsePoem } from "./parsePoem.cts";
import { makePoemId } from "./poemId.cts";

export function buildReadingModel(): ReadingModel {
  const { poemsRoot, curationRoot } = resolveContentRoots();
  const nav = readYamlFile<NavManifest>(`${curationRoot}/nav.yaml`);
  const sections: Section[] = [];
  const linearPoems: Poem[] = [];

  for (const navSection of nav.sections) {
    const sectionManifest = readYamlFile<SectionManifest>(
      `${curationRoot}/sections/${navSection.id}.yaml`
    );

    const poems = sectionManifest.poems.map((relativePath: string) => {
      const raw = readTextFile(`${poemsRoot}/${relativePath}`);
      const parsed = parsePoem(raw, relativePath);

      const poem: Poem = {
        id: makePoemId(relativePath),
        path: relativePath,
        title: parsed.title,
        content: parsed.content,
        meta: parsed.meta,
      };

      linearPoems.push(poem);
      return poem;
    });

    sections.push({
      id: sectionManifest.id,
      title: sectionManifest.title,
      poems,
    });
  }

  return { sections, linearPoems };
}