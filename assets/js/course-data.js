/* =========================================================================
   COURSE DATA — edit this file to change the site.
   Everything on the page (the week board, the calendar, the teaching forms,
   the Samlinger and the literature) is generated from the object below.
   Change a week here and it updates in every place it appears.
   ========================================================================= */

const COURSE = {

  /* ---- wording ---------------------------------------------------------
     The words used in front of the two week numbers. Change them here and
     they change everywhere on the page.
     ---------------------------------------------------------------------- */
  wording: {
    calWeek: "week",        // before a calendar week number, e.g. "week 51"
    courseWeek: "course"    // before a course week number, e.g. "course 16"
  },

  /* ---- masthead ------------------------------------------------------- */
  programme: "MFA",
  title: "Game Production",
  question: "What is unique to games and game design?",
  standfirst:
    "This course explores what games are and what games can do — the specific nature of game " +
    "design and the unique possibilities of games. It uses game design as a means of enquiry " +
    "and of understanding complex phenomena, through hands-on production aimed at artistic " +
    "expression, intervention and enquiry into complex phenomena in society.",
  year: "2026 – 2027",

  aim:
    "The aim is to explore the capability of games and game production, and to fully explore " +
    "the possibility space. Students work together in production teams for the length of the " +
    "course.",

  /* ---- the kinds of work the course covers ---------------------------- */
  kinds: [
    { name: "Artistic games", note: "Games as an artistic medium and material for expression." },
    { name: "Entertainment games", note: "The craft of designed play and engaging experience." },
    { name: "Serious games", note: "Modelling and examining complex systems and societal challenges." },
    { name: "Games that make claims", note: "Works that state, argue, or re-position players to new vantage points and new perspectives." },
  ],

  /* ---- how the course is taught --------------------------------------- */
  rhythm: [
    { day: "Tuesday", time: "13:00 – 16:00", track: "teach", forms: ["Lectures", "Workshops"],
      note: "Shared theoretical and methodological input for the whole cohort." },
    { day: "Wednesday", time: "09:00 – 12:00", track: "group", forms: ["Consultations", "Supervisions", "Studio visits"],
      note: "Team-by-team response, specialist advice and incremental feedback." },
  ],

  /* ---- the six teaching forms -------------------------------------------
     Each one has its own page at form.html?id=<id>.
       about    paragraphs of explanation
       expect   what happens in the session
       prepare  what a student should do beforehand
       reading  ids from reading-data.js
       people   teacher ids from teacher-data.js. Empty until confirmed.
     ---------------------------------------------------------------------- */
  forms: [
    { id:"lectures", name: "Lectures", when: "Tuesdays 13–16", track: "teach",
      note: "Theory input: game design, game studies, game theory, system dynamics and narratology.",
      about: [
        "The lecture is where the whole cohort meets the week's concepts at the same time. It carries the material that is hard to arrive at by making alone — system dynamics, narratology, ecological psychology, the history of the field.",
        "Lectures are not a summary of the reading. They assume you have met the week's Core text and use the three hours to work through what is difficult in it, and to connect it to what the teams are building."
      ],
      expect: [
        "A three-hour block, usually one topic, often followed by a workshop in the same session.",
        "Questions during rather than after. The cohort is small enough for this to work.",
        "Direct reference to the week's Core reading."
      ],
      prepare: [
        "Read the week's Core text before the lecture, not after.",
        "Bring one thing from your project that the topic might bear on."
      ],
      reading: ["salen2003","meadows2008","murray2017","gibson2015","lantz2023"],
      people: [] },

    { id:"workshops", name: "Workshops", when: "Tuesdays 13–16", track: "teach",
      note: "Hands-on method work: causal loop diagrams, mechanics, world building and pipelines.",
      about: [
        "Workshops turn the week's concept into a method you can use the same afternoon. Causal loop diagrams in week 4, the gears of the game in week 8, pipelines and world building in week 7.",
        "They are deliberately short-cycle: you make something rough, it is looked at, you change it. The output is not meant to survive — the method is."
      ],
      expect: [
        "Making, not listening. Paper, whiteboards, and quick digital prototypes.",
        "Work in your production team, on your own project where possible.",
        "Sharing unfinished work with the room."
      ],
      prepare: [
        "Bring your project in whatever state it is in.",
        "Bring materials — sketchbook, laptop, whatever your team works in."
      ],
      reading: ["fullerton2023","macklin2016","wille2025","meadows2008","zagal2019"],
      people: [] },

    { id:"supervision", name: "Group supervision", when: "Wednesdays 9–12", track: "group",
      note: "Production teams meet supervisors on their ongoing project work.",
      about: [
        "Supervision is the regular conversation between a production team and a supervisor about the work as it actually stands. It is the main place where the course responds to your project rather than to the cohort.",
        "It works best when the team brings a question rather than a status report. The supervisor is not there to approve progress but to help you see what you have made."
      ],
      expect: [
        "The team meets together, not individually.",
        "Roughly 30–45 minutes per team, depending on how many teams are running.",
        "Honest response to the work in front of you, including when it is not working."
      ],
      prepare: [
        "Agree one question as a team before you arrive.",
        "Have something to show, however rough.",
        "Note what changed since last time."
      ],
      reading: ["schon1983","lankoski2017","fullerton2023"],
      people: [] },

    { id:"consultations", name: "Consultations", when: "Wednesdays 9–12", track: "group",
      note: "Targeted specialist input in specific areas, as needed throughout the productions.",
      about: [
        "A consultation is a booked conversation with someone who knows a specific area — a technical pipeline, sound, narrative structure, a particular engine, a research method.",
        "Unlike supervision, consultations are arranged as the production needs them. If your project turns towards something nobody on the team has done before, this is the mechanism for getting help with it."
      ],
      expect: [
        "Arranged on request rather than fixed in the timetable.",
        "One area, one session. Come with a specific problem.",
        "The specialist may not know your project — brief them briefly."
      ],
      prepare: [
        "Write the problem down in two sentences before booking.",
        "Say what you have already tried."
      ],
      reading: ["swink2008","walz2010","gibson2015","hiwiller2019"],
      people: [] },

    { id:"studio-visits", name: "Studio visits", when: "Wednesdays 9–12", track: "group",
      note: "Incremental feedback from specialists across different areas of game design and art.",
      about: [
        "A studio visit brings a specialist to the work rather than the work to a seminar room. Visitors come from across game design and art, and see the production in the place and state it is being made.",
        "The point is incremental feedback from a position outside the project. A visitor who has not watched the work develop notices what the team has stopped being able to see."
      ],
      expect: [
        "The visitor comes to your space; set it up so the work can be encountered.",
        "You may be asked to say very little at first and let the work speak.",
        "Feedback that does not always align with your supervisor's."
      ],
      prepare: [
        "Have the work playable or viewable without a long explanation.",
        "Decide in advance what you want a stranger's eye on."
      ],
      reading: ["sharp2015","clark2022","fernandezvara2019","dewey2005"],
      people: [] },

    { id:"samlinger", name: "Samlinger", when: "Weeks 1, 6, 12 & 15", track: "samling",
      note: "Four intensive gatherings that punctuate and re-frame the course.",
      about: [
        "The Samlinger are the four intensive gatherings that structure the year: week 1 opens the course, week 6 sits before green-lighting, week 12 before play-testing, and week 15 re-frames everything through play itself.",
        "They sit above the weekly rhythm rather than inside it. A Samling is where the cohort steps back from production and looks at what it is doing and why."
      ],
      expect: [
        "Both contact days given over to the gathering.",
        "The whole cohort together, often with visitors.",
        "A change of register — wider, more speculative than a normal week."
      ],
      prepare: [
        "Samling 4 has a reading set around play and affordances; start it early.",
        "Come ready to talk about your project in front of everyone."
      ],
      reading: ["huizinga1949","suttonsmith1997","gibson2015","sicart2014","dekoven2014"],
      people: [] },
  ],

  /* ---- the four phases ------------------------------------------------ */
  phases: [
    { id: "enquiry",    name: "Enquiry",     sub: "Games, systems and society",           from: 1,  to: 5,  tone: "violet",
      note: "Teams begin from a theme or societal challenge and examine it through systems and story before anything is built." },
    { id: "greenlight", name: "Green-light", sub: "Design decisions and production start", from: 6,  to: 9,  tone: "blue",
      note: "The project is pitched and green-lit, and the gears of the game are designed against an artistic intention." },
    { id: "test",       name: "Test",        sub: "Analysis, prototypes and play-testing", from: 10, to: 14, tone: "teal",
      note: "Analysis, peer review and prototypes, then research methods and structured play-testing. Exam in week 14." },
    { id: "reflect",    name: "Reflect",     sub: "Peeling the onion",                     from: 15, to: 17, tone: "amber",
      note: "Samling 4 re-frames the course through play, then the finished experience is read back against the intention." },
  ],

  /* ---- the weeks -------------------------------------------------------
     n       course week number
     label   how the week is written on screen
     cal      calendar week
     calLabel optional override for how the calendar week is written, used
              when the year needs saying (e.g. "01/2027")
     monday  Monday of that week (Tuesday and Wednesday are derived from it)
     samling which Samling falls in this week, if any
     exam    true for the exam week
     teach   the teaching component  { short, long }
     group   the student group-work focus { short, long } — null where the
             course description does not specify one
     -------------------------------------------------------------------- */
  weeks: [
    { n: 1, label: "1", cal: 36, monday: "2026-08-31", samling: 1,
      teach: { short: "Samling 1 · Introduction", long: "Samling 1. Introduction to the course." },
      group: { short: "Samling 1 · Introduction", long: "Samling 1. Introduction." } },

    { n: 2, label: "2", cal: 37, monday: "2026-09-07",
      teach: { short: "Game design & game studies",
               long: "Introduction to game design, game studies, game theory and system dynamics." },
      group: { short: "Themes & societal challenges",
               long: "Exploration of themes or societal challenges that can be represented, examined and/or modelled with game design, or with other forms of participatory media." } },

    { n: 3, label: "3", cal: 38, monday: "2026-09-14",
      teach: { short: "Narrative structure",
               long: "Game design and the creation of experience through the arrangement of narrative structures. Narratology as experience design, through multilayered component structures of sequential and/or spatial arrangement. Myths, structures, patterns and formats." },
      group: { short: "Challenge review · big stories",
               long: "Societal challenge review, representation and enactment. Big stories across time and culture." } },

    { n: 4, label: "4", cal: 39, monday: "2026-09-21",
      teach: { short: "System thinking & design",
               long: "System thinking and system design. Causality of action. Systems as gestalts of underlying patterns, with multiple agentic actors pursuing multiple “win states”." },
      group: { short: "Causal loop diagrams",
               long: "Exploring causal loop diagrams (CLDs), and restructuring simple game ideas into CLDs for review, de-construction and re-construction." } },

    { n: 5, label: "5", cal: 40, monday: "2026-09-28",
      teach: { short: "System dynamics in society",
               long: "System dynamics operating in society. “Tragedy of the commons”, and systemic versus agentic “win-states”." },
      group: { short: "Win states & big stories",
               long: "Societal patterns and challenges, combined with “big stories”. Re-examining player win states from a systemic perspective of short-term and long-term outcomes, in and beyond the space of the game. Using story structures as reflecting or parallel “mirroring structures”." } },

    { n: 6, label: "6", cal: 41, monday: "2026-10-05", samling: 2,
      teach: { short: "Samling 2", long: "Samling 2." },
      group: { short: "Samling 2", long: "Samling 2." } },

    { n: 7, label: "7", cal: 42, monday: "2026-10-12",
      teach: { short: "World building & pipelines",
               long: "World building and game production. Methods and pipelines: GitHub, Unreal, Unity." },
      group: { short: "Project pitch · green-lighting",
               long: "Project planning and project pitch (green-lighting)." } },

    { n: 8, label: "8", cal: 43, monday: "2026-10-19",
      teach: { short: "Rules & mechanics",
               long: "Rules, mechanics and affordances. The gears of a game, and the creation of an agentic experience (game play). The working components of game play, and of other participatory art forms created to structure the actions of others for specific forms of experiential outcome." },
      group: { short: "Refining the gears",
               long: "Refining the “gears of the game” in their own game design: rules, game mechanics and affordances, tuned to produce the desired experiential outcomes for their players and participants." } },

    { n: 9, label: "9", cal: 44, monday: "2026-10-26",
      teach: { short: "Artistic intentionality",
               long: "Artistic intentionality. Managing hierarchies of importance in relation to artistic goals, visions and intentions. Defining the desired experience for the player or participant, and what is important from a position of artistic intention." },
      group: { short: "Artistic intention in context",
               long: "Game play, rules, mechanics and affordances as experiential structures. Artistic intention in relation to context and participant experience." } },

    { n: 10, label: "10", cal: 45, monday: "2026-11-02",
      teach: { short: "Game analysis", long: "Game analysis." },
      group: { short: "Peer-to-peer game reviews", long: "Game reviews: game analysis, peer to peer." } },

    { n: 11, label: "11", cal: 46, monday: "2026-11-09",
      teach: { short: "Review of student works",
               long: "Review of student works, and continuation of weeks 4, 8 and 9." },
      group: { short: "Prototypes & the gears",
               long: "Prototypes, and communication of the “gears of the game”." } },

    { n: 12, label: "12", cal: 47, monday: "2026-11-16", samling: 3,
      teach: { short: "Samling 3", long: "Samling 3." },
      group: { short: "Samling 3", long: "Samling 3." } },

    { n: 13, label: "13", cal: 48, monday: "2026-11-23",
      teach: { short: "Research methods & play-testing I",
               long: "Research methods and play-testing I. Play-throughs and testing I." },
      group: { short: "Play-throughs & testing I", long: null } },

    { n: 14, label: "14", cal: 49, monday: "2026-11-30", exam: true,
      teach: { short: "Research methods & play-testing II",
               long: "Research methods and play-testing II. Play-throughs and testing II. This is the exam week." },
      group: { short: "Play-throughs & testing II", long: null } },

    { n: 15, label: "15", cal: 50, monday: "2026-12-07", samling: 4,
      teach: { short: "Samling 4 · Play & structure",
               long: "Samling 4 — “The phenomena of play and the structure of games”." },
      group: { short: "Samling 4", long: "Samling 4." } },

    { n: 16, label: "16", cal: 51, monday: "2026-12-14",
      teach: { short: "Peeling the onion",
               long: "“Peeling the onion”: reflecting on the multiple layers of production and experience." },
      group: { short: "Layers & artistic intention",
               long: "Reflection on the correlations between the multiple layers of production and the resulting experience, in relation to artistic intentions." } },

    { n: 17, label: "17", cal: 1, calLabel: "01/2027", monday: "2027-01-04",
      teach: { short: "Peeling the onion, continued",
               long: "Continuation of “peeling the onion”: reflecting on the multiple layers of production and experience. How to tell a story / forge / enact / transfer / structure. Review of the “gears of the game”." },
      group: { short: "—", long: null } },
  ],

  /* ---- the break ------------------------------------------------------- */
  breakFrom: "2026-12-21",
  breakTo: "2027-01-03",
  breakNote: "21 December – 3 January is a break (weeks 52–53). Teaching resumes on Tuesday 5 January 2027.",

  /* ---- calendar months to display -------------------------------------- */
  months: [
    { name: "September 2026", year: 2026, month: 8 },
    { name: "October 2026",   year: 2026, month: 9 },
    { name: "November 2026",  year: 2026, month: 10 },
    { name: "December 2026",  year: 2026, month: 11 },
  ],

  /* ---- the Samlinger ---------------------------------------------------- */
  samlinger: [
    { n: 1, week: 1,  note: "Opens the course and the shared frame of enquiry." },
    { n: 2, week: 6,  note: "Sits directly before green-lighting and the production start." },
    { n: 3, week: 12, note: "Sits before the research-methods and play-testing weeks." },
    { n: 4, week: 15, note: "Re-frames the whole course through play as a creative driver.",
      title: "The phenomena of play and the structure of games",
      draft: true,
      points: [
        "Play and game-like structures as creative tools.",
        "Fundamentals of ecological psychology (affordances) and the development of perception through evolution.",
        "Play not as a result of culture but as a central driver in evolution and in culture — and how that relates to working creatively today.",
        "Play versus games; narrative structures compared in linear and non-linear formats.",
        "Narrative as predetermined gestalt (stories, plays, films) versus emergent generative structure — combinations of affordances producing non-predetermined outcomes.",
      ] },
  ],

  /* ---- literature -------------------------------------------------------- */
  literature: [
    { name: "Play & culture", tone: "violet",
      note: "Play as a cultural form, and the frames that hold social interaction together.",
      authors: ["Johan Huizinga", "Brian Sutton-Smith", "Erving Goffman"] },
    { name: "Development & learning", tone: "teal",
      note: "Play in cognitive development — how learning happens through doing.",
      authors: ["Lev Vygotsky", "Jean Piaget"] },
    { name: "Perception & affordance", tone: "blue",
      note: "Direct perception and affordances — the ground under weeks 8 and 15.",
      authors: ["James J. Gibson"] },
    { name: "Game design practice", tone: "amber",
      note: "Method, narrative and iteration: designing play as a working practice.",
      authors: ["Tracy Fullerton", "Janet H. Murray", "Jane McGonigal", "Hwiller"] },
    { name: "Artistic practice & aesthetics", tone: "plum",
      note: "Experience, attention and imagination as the material of artistic work.",
      authors: ["John Dewey", "Maxine Greene", "Torkil Færø"] },
  ],

  litNote: "The reading list is open — further titles will be added as the productions, consultations and studio visits develop.",

  /* ---- downloads ---------------------------------------------------------- */
  downloads: [
    { name: "Course structure (PDF)", file: "assets/downloads/Game_Production_Course_Structure.pdf", kind: "PDF" },
    { name: "Course structure (PowerPoint)", file: "assets/downloads/Game_Production_Course_Structure.pptx", kind: "PPTX" },
  ],
};
