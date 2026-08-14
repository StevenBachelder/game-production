# Game Production — MFA course site

A single-page site for the MFA Game Production course: the course description, the six
teaching forms, the week-by-week structure, the autumn calendar, the Samlinger and the
literature. It is a plain static site — no build step, no dependencies, no framework.

```
index.html                     the page structure
assets/css/styles.css          all styling
assets/js/course-data.js       ← the content. This is the file you edit.
assets/js/main.js              builds the page from course-data.js
assets/downloads/              the slide deck, PDF and PowerPoint
```

---

## Publishing it on GitHub Pages

### Option A — through the GitHub website (no command line)

1. Go to <https://github.com/new> and create a repository. Name it something like
   `game-production`. Set it to **Public** (Pages is free for public repos). Don't add a
   README — this folder already has one.
2. On the new empty repository page, click **uploading an existing file**.
3. Drag in the *contents* of this folder — `index.html`, `README.md`, and the `assets`
   folder. Make sure `index.html` ends up at the top level, not inside a subfolder.
4. Click **Commit changes**.
5. Go to **Settings → Pages**. Under *Build and deployment*, set **Source** to
   "Deploy from a branch", **Branch** to `main` and the folder to `/ (root)`. Save.
6. Wait a minute, then reload the Settings → Pages screen. Your address appears at the
   top: `https://<your-username>.github.io/game-production/`

### Option B — from the command line

```bash
cd path/to/this/folder
git init -b main
git add .
git commit -m "Course site"
git remote add origin https://github.com/<your-username>/game-production.git
git push -u origin main
```

Then do step 5 above to switch Pages on.

### Updating it later

Edit the files, then either drag the changed file into GitHub again, or:

```bash
git add .
git commit -m "Update week 8"
git push
```

The live site updates within a minute or two. If you don't see the change, do a hard
reload (Ctrl/Cmd + Shift + R) — browsers cache CSS and JS aggressively.

### A custom address

If the school has a domain, add it under **Settings → Pages → Custom domain** and create
a CNAME record with your IT department pointing at `<your-username>.github.io`.

---

## Editing the content

Almost everything lives in **`assets/js/course-data.js`**. It is a plain JavaScript object
with comments explaining each field. Change a week there and it updates in the week board,
the calendar and the hero strip at the same time — you never edit the same fact twice.

**To change what a week covers**, find it in the `weeks` list and edit `short` (the one-line
version shown in the board and calendar) and `long` (the full text shown when a week is
opened):

```js
{ n: 8, label: "8", cal: 43, monday: "2026-10-19",
  teach: { short: "Rules & mechanics",
           long:  "Rules, mechanics and affordances. The gears of a game…" },
  group: { short: "Refining the gears",
           long:  "Refining the “gears of the game” in their own game design…" } },
```

**Where the course description doesn't specify a group-work focus** (weeks 13, 14 and week 1
of 2027) the `long` field is `null`, and the page says so rather than inventing something.
Replace the `null` with text when you decide what goes there.

**To move a week**, change its `monday` date. The Tuesday and Wednesday sessions, the
calendar cells and the "next session" note in the top bar are all derived from it.

**To add a reading**, add a name to the right cluster in `literature`, or add a new cluster.
Available `tone` values are `violet`, `teal`, `blue`, `amber` and `plum`.

Colour is meaningful throughout and is worth keeping consistent: **amber is always the
teaching track, teal is always the student group-work track**, violet marks structure, and
plum marks the artistic-practice thread.

---

## Previewing locally before you publish

Opening `index.html` by double-clicking works. If your browser blocks the local scripts,
serve the folder instead:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

---

## Notes

- The page needs JavaScript. The schedule, calendar and reading list are generated from
  `course-data.js`; without it a visitor sees the headings and a note pointing at the PDF.
- Fonts load from Google Fonts. If the school blocks that, the page falls back to system
  faces and still reads fine.
- The four phase names (Enquiry, Green-light, Test, Reflect) are an interpretation of the
  week structure, not language from the original course document. Rename them in `phases`
  if you'd draw the lines differently.
- Samling 4 and its description are marked as a draft, as in the source document.
