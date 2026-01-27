import type {
  NavManifest,
  SectionManifest,
  Poem,
  StandardPoem,
  Section,
  ReadingModel, 
  TranslationPoem
} from "../../site/src/models/readingModel";

import { readYamlFile, readTextFile } from "./fs.ts";
import { resolveContentRoots } from "./resolveContentRoots.ts";
import { parsePoem } from "./parsePoem.ts";
import { makePoemId } from "./poemId.ts";
import { parseTranslationFolder } from "./parseTranslationPoem.ts";
import * as path from "path";

export function buildReadingModel(): {
  readingModel: ReadingModel;
  poems: Poem[];
} {
  const { poemsRoot, translationsRoot, curationRoot } = resolveContentRoots();
  const nav = readYamlFile<NavManifest>(`${curationRoot}/nav.yaml`);
  const sections: Section[] = [];
  const linearOrder: string[] = [];
  const poemsMap: Record<string, Poem> = {};
  const allPoems: Poem[] = [];

  for (const navSection of nav.sections) {
    const sectionManifest = readYamlFile<SectionManifest>(
      `${curationRoot}/sections/${navSection.id}.yaml`
    );

    const sectionType = sectionManifest.type ?? "standard";

    const poems = sectionManifest.poems.map((relativePath: string) => {

      if (sectionType === "translation") {

        const folderPath = path.join(translationsRoot, relativePath);
        const parsed = parseTranslationFolder(folderPath);
        const translatedPoem: TranslationPoem = {
          kind: "translation",
          id: makePoemId(relativePath),
          title: parsed.title,
          path: path.relative(translationsRoot, folderPath),

          original: parsed.original,
          translation: parsed.translation,
          notes: parsed.notes,
        };

        poemsMap[translatedPoem.id] = translatedPoem;
        linearOrder.push(translatedPoem.id);
        allPoems.push(translatedPoem);
        return translatedPoem;

      } else {

        const raw = readTextFile(`${poemsRoot}/${relativePath}`);
        const parsed = parsePoem(raw, relativePath);
        const poem: StandardPoem = {
          kind: "poem",
          id: makePoemId(relativePath),
          path: relativePath,
          title: parsed.title,
          content: parsed.content,
          meta: parsed.meta,
        };

        poemsMap[poem.id] = poem;
        linearOrder.push(poem.id);
        allPoems.push(poem);
        return poem;
      }
    });

    sections.push({
      id: sectionManifest.id,
      title: sectionManifest.title,
      poemIds: poems.map(poem => poem.id),
    });
  }

  return {
    readingModel: { title: nav.title, description: nav.description, sections, linearOrder, poemsById: poemsMap },
    poems: allPoems,
  };
}
