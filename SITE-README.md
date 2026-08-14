# Game Production — MFA course site

A single-page site for the MFA Game Production course: the course description, the six
teaching forms, the week-by-week structure, the autumn calendar, the Samlinger and the
literature. It is a plain static site — no build step, no dependencies, no framework.

```
index.html                     the main course page
day.html                       one teaching session (day.html?d=2026-09-01)
teacher.html                   one teacher      (teacher.html?id=7)
teachers.html                  the grid of all teachers

assets/css/styles.css          all styling

assets/js/course-data.js       ← course structure: weeks, phases, literature
assets/js/day-details.js       ← what happens on each teaching day
assets/js/teacher-data.js      ← the 30 teachers
assets/js/shared.js            helpers used by every page
assets/js/main.js              builds index.html
assets/js/day.js               builds day.html
assets/js/teacher.js           builds teacher.html
assets/js/teachers-page.js     builds teachers.html

assets/img/teachers/           put teacher photographs here
assets/downloads/              the slide deck, PDF and PowerPoint
```

The three files marked with an arrow are the ones you edit. Everything else
reads from them.

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

**To fill in a teaching session**, open `assets/js/day-details.js` and find the date. Every
session of the course is already listed, empty and ready:

```js
"2026-10-19": {
  people: [3, 7],                          // teacher numbers
  description: "What actually happens in the session.",
  preparations: ["Read chapter 4", "Bring your CLD"],
  resources: [{ label: "Fullerton, ch. 4" },
              { label: "Miro board", url: "https://…" }],
},
```

Anything left empty shows as "to be confirmed" on the page, so it is safe to publish the
site half-filled and keep adding as the term is planned. A `resource` without a `url` is
shown as plain text, which suits a book or a handout.

**To fill in a teacher**, open `assets/js/teacher-data.js` and edit that person's entry —
`name`, `role`, `about` and `note` (their short message to the students). For a photograph,
put a square image in `assets/img/teachers/` and write its file name in `photo`, e.g.
`photo: "teacher-04.jpg"`. Until then the page shows the teacher's number in a circle.
Teachers appear on a session automatically once their number is in that day's `people` list,
and each teacher page lists the sessions they are on without you having to repeat anything.

**To add a reading**, add a name to the right cluster in `literature`, or add a new cluster.
Available `tone` values are `violet`, `teal`, `blue`, `amber` and `plum`.

**To change the words in front of week numbers**, edit the `wording` block at the top:
`calWeek` is what appears before a calendar week ("week 51") and `courseWeek` before a
course week ("course 16").

---

## Filling in the teaching days

Students can select any coloured day in the calendar and land on a page for that session.
Those pages read from **`assets/js/day-details.js`**, which already has an empty entry for
all 34 sessions, each labelled with its date and week. Fill one in like this:

```js
"2026-09-15": {
  people: [3, 7],
  description: "How narrative structures produce experience…",
  preparations: [
    "Bring one game and one film that tell a story in different ways.",
  ],
  resources: [
    { label: "Fullerton, Game Design Workshop — chapter 4" },
    { label: "Course Miro board", url: "https://example.com/board" },
  ],
},
```

- `people` takes teacher numbers. Each one becomes a link to that teacher's page, and the
  session appears on their page in return — you only state the connection once.
- `resources` entries without a `url` show as plain text, which suits books and handouts.
- Anything left empty shows as "not yet" rather than breaking, so it is safe to publish a
  half-planned course and fill it in as you go. Where you have written no description, the
  page falls back to the text from the course description.

## Filling in the teachers

**`assets/js/teacher-data.js`** holds 30 entries, named "Teacher 1" to "Teacher 30" until
you replace them. Each has a name, a role, a photograph, a short description and a note to
the students.

For a photograph, put the file in `assets/img/teachers/` and write the file name in the
`photo` field. Square images around 600 x 600 work best. Leave `photo` empty and the page
shows the person's number or initials instead, so it looks finished before the photographs
arrive.

If you need more or fewer than 30 people, add or delete entries — the grid and the
previous/next links adjust. Keep the `id` numbers unique, since that is what `people` in
`day-details.js` points at.

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

- Students can click any coloured day in the calendar to open that session. Hovering marks
  it "Active". Grey days are not teaching days and are not clickable.
- The pages need JavaScript. The schedule, calendar and reading list are generated from
  `course-data.js`; without it a visitor sees the headings and a note pointing at the PDF.
- Fonts load from Google Fonts. If the school blocks that, the page falls back to system
  faces and still reads fine.
- The four phase names (Enquiry, Green-light, Test, Reflect) are an interpretation of the
  week structure, not language from the original course document. Rename them in `phases`
  if you'd draw the lines differently.
- Samling 4 and its description are marked as a draft, as in the source document.
