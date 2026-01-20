# poetry-reader

A simple, poetry-first reading app built with React.

This repository contains the reader **engine only** — the part that displays poems and lets readers move through them one at a time.

Poems themselves and editorial curation live in private folders/repositories and are compiled into the reader at build time. A small demo is included so the reader works out of the box.

If you’d like to use this reader to put your own poems on the web, see **“Adding your own poems”** below for simple setup instructions.

## What it does

- Displays one poem at a time
- Preserves line breaks and spacing
- Uses a quiet, book-like layout
- Supports sections and ordering via simple files
- Builds to a static site (no server required)

---

## Included

- A demo set of poems
- A basic reader layout (navigation + poem view)
- A build step that prepares poems for the reader

---

## Development

```bash
npm install
npm run build:content
npm run dev

---

## Adding your own poems

If you’d like to use this reader to put your own poems on the web, follow the steps below. Example files are included in the `demo/` folder. Refer to those files for concrete examples of poems, sections, and navigation.

HOW IT WORKS

Poem files (.md or .txt)
        |
        v
Section files (YAML)
        |
        v
Navigation file (YAML)
        |
        v
Build step
        |
        v
Static poetry reader


Step 1: Add your poem files
Add your poems as .md or .txt files. 
Line breaks and spacing are preserved exactly as written.
Poems may optionally include front matter for metadata.
The poem’s title is taken from the poem itself.

Step 2: Create section files
Create YAML files that group poems into sections and define their reading order.

Step 3: Create a navigation file
Create a navigation file that lists which sections appear in the reader.

Step 4: Build the reading model
Run: npm run build:content
This prepares your poems for the reader.

Step 5: Run the reader
Run: npm run dev
Your poems will appear in the reader layout.

Step 6: You can add, remove, or reorder poems by editing the YAML files.
No database or server is required.
The reader is intentionally minimal so the poems remain the focus.
