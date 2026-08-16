/* =========================================================================
   READING LIST

   One entry per text. Everything on the reading page and the reading blocks
   inside the week board is generated from this.

     apa      the full APA 7 reference. Use *asterisks* for italics.
     why      one line: why this text is on the course. Keep it short.
     access   "open"    free to everyone, no login
              "library" through Oria / JSTOR / MIT Press Direct
              "buy"     buy or borrow a copy
     url      best link. Prefer the free one where there is one.
     themes   for the theme filter
     weeks    [[week number, role]] where role is "core" or "supporting".
              [] means the text is not tied to a week — see role below.
     role     "further" for suggested extras, "context" for background
              reading not assigned to any week. Omit for normal entries.
   ========================================================================= */

const READING = [

/* ---- weeks 1-3 ------------------------------------------------------- */
{ id:"lantz2023", apa:"Lantz, F. (2023). *The beauty of games*. MIT Press.",
  why:"The best short answer to what a game is and why it matters.",
  access:"library", themes:["design","aesthetics"], weeks:[[1,"core"]] },

{ id:"sicart2014", apa:"Sicart, M. (2014). *Play matters*. MIT Press.",
  why:"Play as an attitude carried into the world, not an activity fenced off from it.",
  access:"library", url:"https://www.jstor.org/stable/j.ctt9qf90d",
  themes:["play"], weeks:[[1,"supporting"],[15,"supporting"]] },

{ id:"salen2003", apa:"Salen, K., & Zimmerman, E. (2003). *Rules of play: Game design fundamentals*. MIT Press.",
  why:"The shared vocabulary of the field. Your week 8 is named after its subject.",
  access:"library", themes:["design","systems"], weeks:[[2,"core"],[4,"supporting"],[8,"core"]] },

{ id:"samuelson2016", apa:"Samuelson, L. (2016). Game theory in economics and beyond. *Journal of Economic Perspectives, 30*(4), 107\u2013130. https://doi.org/10.1257/jep.30.4.107",
  why:"Game theory proper, clearly explained, and free to everyone.",
  access:"open", url:"https://doi.org/10.1257/jep.30.4.107",
  themes:["systems"], weeks:[[2,"core"]] },

{ id:"karabinus2025", apa:"Karabinus, A., Kocurek, C. A., Mejeur, C., & Vossen, E. (Eds.). (2025). *Historiographies of game studies: What it has been, what it could be*. Punctum Books.",
  why:"What game studies has been and what it could become.",
  access:"open", url:"http://www.jstor.org/stable/jj.31913371",
  themes:["culture"], weeks:[[2,"supporting"]] },

{ id:"murray2017", apa:"Murray, J. H. (2017). *Hamlet on the holodeck: The future of narrative in cyberspace* (Updated ed.). MIT Press. (Original work published 1997)",
  why:"The founding text on what narrative becomes when it is procedural.",
  access:"library", themes:["narrative"], weeks:[[3,"core"]] },

{ id:"jenkins2002", apa:"Jenkins, H., & Squire, K. (2002). The art of contested spaces. In L. King (Ed.), *Game on: The history and culture of videogames* (pp. 64\u201375). Laurence King.",
  why:"Narrative as spatial arrangement \u2014 exactly the week 3 framing.",
  access:"open", url:"https://web.mit.edu/~21fms/People/henry3/contestedspaces.html",
  themes:["narrative","culture"], weeks:[[3,"supporting"]] },

/* ---- weeks 4-5 systems ------------------------------------------------ */
{ id:"meadows2008", apa:"Meadows, D. H. (2008). *Thinking in systems: A primer* (D. Wright, Ed.). Chelsea Green.",
  why:"Stocks, flows, feedback and leverage points. Read before the CLD workshop, not after.",
  access:"buy", themes:["systems"], weeks:[[4,"core"]] },

{ id:"hardin1968", apa:"Hardin, G. (1968). The tragedy of the commons. *Science, 162*(3859), 1243\u20131248. https://doi.org/10.1126/science.162.3859.1243",
  why:"The source text for week 5. Read alongside Ostrom, never alone.",
  access:"library", url:"https://doi.org/10.1126/science.162.3859.1243",
  themes:["systems"], weeks:[[5,"core"]] },

{ id:"ostrom1990", apa:"Ostrom, E. (1990). *Governing the commons: The evolution of institutions for collective action*. Cambridge University Press.",
  why:"Commons often do not collapse. A far better design brief than the trap alone.",
  access:"buy", themes:["systems"], weeks:[[5,"core"]] },

{ id:"bogost2007", apa:"Bogost, I. (2007). *Persuasive games: The expressive power of videogames*. MIT Press.",
  why:"Procedural rhetoric: how a rule system makes an argument.",
  access:"library", themes:["systems","aesthetics"], weeks:[[5,"supporting"],[9,"supporting"]] },

/* ---- weeks 7-8 production and the gears -------------------------------- */
{ id:"macklin2016", apa:"Macklin, C., & Sharp, J. (2016). *Games, design and play: A detailed approach to iterative game design*. Addison-Wesley.",
  why:"Iterative process, from concept through to the pitch.",
  access:"buy", themes:["design","methods"], weeks:[[7,"core"]] },

{ id:"fullerton2023", apa:"Fullerton, T. (2023). *Game design workshop: A playcentric approach to creating innovative games* (5th ed.). CRC Press. (Original work published 2004)",
  why:"A playtesting curriculum in book form. The most useful single volume for weeks 7\u201314.",
  access:"buy", themes:["design","methods"], weeks:[[7,"supporting"],[13,"core"],[14,"core"]] },

{ id:"hiwiller2019", apa:"Hiwiller, Z. (2019). *Players making decisions: Game design essentials and the art of understanding your players* (2nd ed.). New Riders. (Original work published 2015)",
  why:"Prototyping, playtesting and what makes a decision meaningful.",
  access:"buy", themes:["design","methods"], weeks:[[7,"supporting"],[8,"supporting"],[13,"supporting"]] },

{ id:"swink2008", apa:"Swink, S. (2008). *Game feel: A game designer's guide to virtual sensation*. Morgan Kaufmann.",
  why:"What the gears feel like in the hand, treated as measurable design variables.",
  access:"buy", themes:["design","affordance"], weeks:[[8,"core"]] },

{ id:"costikyan2013", apa:"Costikyan, G. (2013). *Uncertainty in games*. MIT Press.",
  why:"Vocabulary for what you are actually tuning when you playtest.",
  access:"library", themes:["design"], weeks:[[8,"supporting"],[13,"supporting"]] },

{ id:"wing2026", apa:"Wing, C. (2026). *Bounce: Balls, walls, and bodies in games and play*. MIT Press. https://doi.org/10.7551/mitpress/15053.001.0001",
  why:"The bouncing ball across sport, animation and code. Free, and very concrete on feel.",
  access:"open", url:"https://direct.mit.edu/books/oa-monograph/6082/BounceBalls-Walls-and-Bodies-in-Games-and-Play",
  themes:["play","affordance"], weeks:[[8,"supporting"],[15,"supporting"]] },

/* ---- week 9 artistic intentionality ------------------------------------ */
{ id:"nguyen2020", apa:"Nguyen, C. T. (2020). *Games: Agency as art*. Oxford University Press.",
  why:"Designers shape not only what players do but what they want while playing.",
  access:"buy", themes:["aesthetics","design"], weeks:[[9,"core"]] },

{ id:"sharp2015", apa:"Sharp, J. (2015). *Works of game: On the aesthetics of games and art*. MIT Press.",
  why:"Games as an art practice, and a worked example of critical analysis.",
  access:"library", url:"https://www.jstor.org/stable/j.ctt17kk8c4",
  themes:["aesthetics"], weeks:[[9,"core"],[10,"supporting"]] },

{ id:"dewey2005", apa:"Dewey, J. (2005). *Art as experience*. Perigee. (Original work published 1934)",
  why:"How an experience becomes *an* experience. The ground under weeks 9 and 16.",
  access:"buy", themes:["aesthetics"], weeks:[[9,"supporting"],[16,"core"]] },

{ id:"greene1995", apa:"Greene, M. (1995). *Releasing the imagination: Essays on education, the arts, and social change*. Jossey-Bass.",
  why:"Imagination as a social and educational force.",
  access:"buy", themes:["aesthetics"], weeks:[[9,"supporting"],[16,"supporting"]] },

{ id:"flanagan2009", apa:"Flanagan, M. (2009). *Critical play: Radical game design*. MIT Press.",
  why:"A history of games made to intervene rather than entertain.",
  access:"library", themes:["aesthetics","culture"], weeks:[[9,"supporting"]] },

{ id:"sicart2013", apa:"Sicart, M. (2013). Moral dilemmas in computer games. *Design Issues, 29*(3), 28\u201337. https://doi.org/10.1162/DESI_a_00219",
  why:"When the artistic intention is an ethical one.",
  access:"library", url:"http://www.jstor.org/stable/24267087",
  themes:["aesthetics"], weeks:[[9,"supporting"]] },

{ id:"isbister2016", apa:"Isbister, K. (2016). *How games move us: Emotion by design*. MIT Press.",
  why:"Emotion as something designed rather than hoped for. Excerpt: pp. 1\u2013133.",
  access:"library", themes:["design","aesthetics"], weeks:[[9,"supporting"],[10,"supporting"]] },

/* ---- weeks 10, 13-14 analysis and method -------------------------------- */
{ id:"lankoski2015", apa:"Lankoski, P., & Bj\u00f6rk, S. (Eds.). (2015). *Game research methods: An overview*. ETC Press.",
  why:"Playtesting, qualitative method and game analysis. Free, so everyone can have it.",
  access:"open", themes:["methods"], weeks:[[10,"core"],[13,"core"],[14,"core"]] },

{ id:"ke2016", apa:"Ke, F. (2016). Designing and integrating purposeful learning in game play: A systematic review. *Educational Technology Research and Development, 64*(2), 219\u2013244. https://doi.org/10.1007/s11423-015-9418-1",
  why:"A model of how a systematic review is built, for projects making a learning claim.",
  access:"library", url:"http://www.jstor.org/stable/24761336",
  themes:["methods","learning"], weeks:[[13,"supporting"]] },

/* ---- week 15 play and affordance ---------------------------------------- */
{ id:"gibson2015", apa:"Gibson, J. J. (2015). *The ecological approach to visual perception* (Classic ed.). Psychology Press. (Original work published 1979)",
  why:"The source text for affordances, and therefore for Samling 4.",
  access:"buy", themes:["affordance","play"], weeks:[[8,"supporting"],[15,"core"]] },

{ id:"suttonsmith1997", apa:"Sutton-Smith, B. (1997). *The ambiguity of play*. Harvard University Press.",
  why:"Seven rhetorics of play, and play as driver rather than product of culture.",
  access:"buy", themes:["play"], weeks:[[15,"core"]] },

{ id:"huizinga1949", apa:"Huizinga, J. (1949). *Homo ludens: A study of the play-element in culture*. Routledge & Kegan Paul. (Original work published 1938)",
  why:"The text the whole conversation is still arguing with.",
  access:"buy", themes:["play","culture"], weeks:[[15,"core"]] },

{ id:"goffman1961", apa:"Goffman, E. (1961). *Encounters: Two studies in the sociology of interaction*. Bobbs-Merrill.",
  why:"The essay you want is \u201cFun in Games\u201d: the frame that holds play together.",
  access:"buy", themes:["play","culture"], weeks:[[15,"supporting"]] },

{ id:"vygotsky1978", apa:"Vygotsky, L. S. (1978). *Mind in society: The development of higher psychological processes* (M. Cole, V. John-Steiner, S. Scribner, & E. Souberman, Eds.). Harvard University Press.",
  why:"Play in development. The 1966 essay on play is more direct and circulates freely.",
  access:"buy", themes:["play","learning"], weeks:[[15,"supporting"]] },

{ id:"piaget1962", apa:"Piaget, J. (1962). *Play, dreams and imitation in childhood* (C. Gattegno & F. M. Hodgson, Trans.). Norton. (Original work published 1945)",
  why:"Symbolic play and the growth of representation.",
  access:"buy", themes:["play","learning"], weeks:[[15,"supporting"]] },

{ id:"upton2015", apa:"Upton, B. (2015). *The aesthetic of play*. MIT Press.",
  why:"Play as constrained anticipation, moment to moment.",
  access:"library", themes:["play","affordance"], weeks:[[8,"supporting"],[15,"supporting"]] },

/* ---- week 16 reflection --------------------------------------------------- */
{ id:"faero2023", apa:"F\u00e6r\u00f8, T. (2023). *Kamerakuren: Slik du takler \u00f8yeblikket, takler du alt* (Fleksibind ed.; T. Gjelsten, Ill.). Arneberg Forlag. (Original work published 2019)",
  why:"Attention and the moment \u2014 the reflective register of the closing weeks.",
  access:"buy", url:"https://www.ark.no/produkt/boker/hobbyboker-og-fritid/kamerakuren-9788202819286",
  themes:["aesthetics"], weeks:[[16,"supporting"]] },

/* ---- the affordances thread ------------------------------------------------ */
{ id:"mcgrenere2000", apa:"McGrenere, J., & Ho, W. (2000). Affordances: Clarifying and evolving a concept. In *Proceedings of Graphics Interface 2000* (pp. 179\u2013186).",
  why:"Gibson and Norman side by side. Start the affordances thread here.",
  access:"open", themes:["affordance"], weeks:[[8,"supporting"],[15,"supporting"]] },

{ id:"norman2013", apa:"Norman, D. A. (2013). *The design of everyday things* (Rev. and expanded ed.). Basic Books. (Original work published 1988)",
  why:"The practical bridge into week 8 \u2014 but read the affordances note before you trust the definition.",
  access:"buy", themes:["affordance","design"], weeks:[[8,"core"]] },

{ id:"norman1999", apa:"Norman, D. A. (1999). Affordance, conventions, and design. *Interactions, 6*(3), 38\u201343. https://doi.org/10.1145/301153.301168",
  why:"Norman's own first correction: real versus perceived affordances.",
  access:"library", themes:["affordance"], weeks:[[8,"supporting"]] },

{ id:"gaver1991", apa:"Gaver, W. W. (1991). Technology affordances. In *Proceedings of the SIGCHI Conference on Human Factors in Computing Systems* (pp. 79\u201384). ACM. https://doi.org/10.1145/108844.108856",
  why:"False, hidden and perceptible affordances \u2014 eight years before Norman's correction.",
  access:"library", themes:["affordance"], weeks:[[8,"supporting"]] },

{ id:"chemero2003", apa:"Chemero, A. (2003). An outline of a theory of affordances. *Ecological Psychology, 15*(2), 181\u2013195. https://doi.org/10.1207/S15326969ECO1502_5",
  why:"Affordances as relations between abilities and situations.",
  access:"library", themes:["affordance"], weeks:[[15,"supporting"]] },

{ id:"stoffregen2003", apa:"Stoffregen, T. A. (2003). Affordances as properties of the animal\u2013environment system. *Ecological Psychology, 15*(2), 115\u2013134.",
  why:"Published alongside Chemero and disagreeing with him. Read as a pair.",
  access:"library", themes:["affordance"], weeks:[[15,"supporting"]] },

{ id:"turvey1992", apa:"Turvey, M. T. (1992). Affordances and prospective control: An outline of the ontology. *Ecological Psychology, 4*(3), 173\u2013187.",
  why:"The dispositional account: affordances complemented by effectivities.",
  access:"library", themes:["affordance"], weeks:[[15,"supporting"]] },

{ id:"withagen2012", apa:"Withagen, R., de Poel, H. J., Ara\u00fajo, D., & Pepping, G.-J. (2012). Affordances can invite behavior: Reconsidering the relationship between affordances and agency. *New Ideas in Psychology, 30*(2), 250\u2013258.",
  why:"Affordances as invitations. The most designer-facing paper in this thread.",
  access:"library", themes:["affordance"], weeks:[[8,"supporting"],[15,"supporting"]] },

{ id:"costall1995", apa:"Costall, A. (1995). Socializing affordances. *Theory & Psychology, 5*(4), 467\u2013481.",
  why:"Canonical affordances: how culture stabilises what a thing is for.",
  access:"library", themes:["affordance","culture"], weeks:[[15,"supporting"]] },

{ id:"heft2001", apa:"Heft, H. (2001). *Ecological psychology in context: James Gibson, Roger Barker, and the legacy of William James's radical empiricism*. Erlbaum.",
  why:"Where Gibson's position actually comes from.",
  access:"buy", themes:["affordance"], weeks:[[15,"supporting"]] },

{ id:"oliver2005", apa:"Oliver, M. (2005). The problem with affordance. *E-Learning and Digital Media, 2*(4), 402\u2013413.",
  why:"The case that the concept, as design uses it, is incoherent.",
  access:"library", themes:["affordance"], weeks:[[15,"supporting"]] },

{ id:"torenvliet2003", apa:"Torenvliet, G. (2003). We can't afford it! The devaluation of a usability term. *Interactions, 10*(4), 12\u201317.",
  why:"How the term was hollowed out in practice.",
  access:"library", themes:["affordance"], weeks:[[15,"supporting"]] },

{ id:"kaptelinin2012", apa:"Kaptelinin, V., & Nardi, B. (2012). Affordances in HCI: Toward a mediated action perspective. In *Proceedings of the SIGCHI Conference on Human Factors in Computing Systems* (pp. 967\u2013976). ACM.",
  why:"An activity-theory route out of the impasse.",
  access:"library", themes:["affordance"], weeks:[[15,"supporting"]] },

{ id:"linderoth2012", apa:"Linderoth, J. (2012). Why gamers don't learn more: An ecological approach to games as learning environments. *Journal of Gaming & Virtual Worlds, 4*(1), 45\u201362. https://doi.org/10.1386/jgvw.4.1.45_1",
  why:"Gibson applied rigorously to gameplay. First given at DiGRA Nordic 2010.",
  access:"library", themes:["affordance","learning"], weeks:[[15,"supporting"]] },

{ id:"mateas2004", apa:"Mateas, M. (2004). A preliminary poetics for interactive drama and games. In N. Wardrip-Fruin & P. Harrigan (Eds.), *First person: New media as story, performance, and game* (pp. 19\u201333). MIT Press.",
  why:"Material and formal affordances \u2014 game studies usage a decade before Linderoth.",
  access:"library", themes:["affordance","narrative"], weeks:[[15,"supporting"]] },


/* ---- ETC Press, open access ------------------------------------------------- */
{ id:"clark2022", apa:"Clark, L., & Kelomees, R. (Eds.). (2022). *[re|dis]connection: Interactive storytelling art*. ETC Press. https://doi.org/10.1184/R1/21565380.v1",
  why:"Artists writing about their own interactive storytelling work \u2014 the week 9 exercise, done by practitioners.",
  access:"open", url:"https://kilthub.cmu.edu/articles/book/_re_dis_connection_Interactive_Storytelling_Art/21565380",
  themes:["narrative","aesthetics"], weeks:[[3,"supporting"],[9,"supporting"]] },

{ id:"dekoven2014", apa:"De Koven, B. (2014). *A playful path*. ETC Press.",
  why:"Playfulness as a disposition rather than an activity. The distilled late work of the author of The Well-Played Game.",
  access:"open", url:"https://kilthub.cmu.edu/articles/journal_contribution/A_Playful_Path/6686705",
  themes:["play"], weeks:[[15,"supporting"]] },

{ id:"lankoski2017", apa:"Lankoski, P., & Holopainen, J. (Eds.). (2017). *Game design research: An introduction to theory & practice*. ETC Press.",
  why:"Research through designing rather than research about games \u2014 which is what an MFA production is.",
  access:"open", url:"https://figshare.com/articles/book/Game_Design_Research_An_Introduction_to_Theory_Practice/6686750",
  themes:["methods","design"], weeks:[[13,"supporting"],[14,"supporting"]] },

{ id:"walz2010", apa:"Walz, S. P. (2010). *Toward a ludic architecture: The space of play and games*. ETC Press.",
  why:"How play and games are architected in space. The closest thing here to a world-building text.",
  access:"open", url:"https://kilthub.cmu.edu/articles/journal_contribution/Toward_a_Ludic_Architecture_The_Space_of_Play_and_Games/6686981",
  themes:["design","play","narrative"], weeks:[[3,"supporting"],[7,"supporting"]] },

{ id:"zagal2019", apa:"Zagal, J. P. (Ed.). (2019). *Game design snacks: Easily digestible game design wisdom*. ETC Press.",
  why:"Short, concrete design lessons, each grounded in a released commercial game.",
  access:"open", url:"https://kilthub.cmu.edu/articles/book/Game_Design_Snacks_Easily_Digestible_Game_Design_Wisdom/8273315",
  themes:["design"], weeks:[[8,"supporting"]] },


/* ---- added after the list was first drafted -------------------------------- */
{ id:"anthropy2014", apa:"Anthropy, A., & Clark, N. (2014). *A game design vocabulary: Exploring the foundational principles behind good game design*. Addison-Wesley Professional.",
  why:"The shared language the rest of the course assumes: verbs, objects, scenes, context.",
  access:"buy", themes:["design"], weeks:[[2,"supporting"],[8,"supporting"]] },

{ id:"goffman1974", apa:"Goffman, E. (1974). *Frame analysis: An essay on the organization of experience*. Harper & Row.",
  why:"The full theory of frames: how you know what activity you are in, and what happens when it breaks.",
  access:"buy", themes:["play","culture"], weeks:[[15,"supporting"]] },

{ id:"goffman1979", apa:"Goffman, E. (1979). *Gender advertisements*. Harper & Row.",
  why:"Frame analysis applied to pictures. A model of how close visual reading is actually done.",
  access:"buy", themes:["culture","methods"], weeks:[[10,"supporting"],[15,"supporting"]] },

{ id:"goffman1981", apa:"Goffman, E. (1981). *Forms of talk*. University of Pennsylvania Press.",
  why:"Footing and participation frameworks \u2014 how speaking positions shift inside a frame.",
  access:"buy", themes:["culture","play"], weeks:[[15,"supporting"]] },

{ id:"harrison2003", apa:"Harrison, C., & Wood, P. (Eds.). (2003). *Art in theory 1900\u20132000: An anthology of changing ideas* (2nd ed.). Blackwell.",
  why:"The standard anthology: what artists themselves have argued about intention across the century.",
  access:"library", themes:["aesthetics"], weeks:[[9,"supporting"]] },

{ id:"wille2025", apa:"Wille, J. I., Andreasen, S. J., & Wille, G. (2025). *How to create a universe*. University of Westminster Press. https://doi.org/10.16997/mpub.13071693",
  why:"Nine chapters of method for building a fictional universe, with exercises and worked examples. Free.",
  access:"open", url:"https://www.fulcrum.org/concern/monographs/td96k575f",
  themes:["narrative","design"], weeks:[[7,"core"]] },

/* ---- context: read when a project turns that way ---------------------------- */
{ id:"gee2007", apa:"Gee, J. P. (2007). *What video games have to teach us about learning and literacy* (2nd ed., rev. and updated). Palgrave Macmillan. (Original work published 2003)",
  why:"The case that good games are already good learning environments.",
  access:"buy", themes:["learning"], weeks:[], role:"context" },

{ id:"mcgonigal2011", apa:"McGonigal, J. (2011). *Reality is broken: Why games make us better and how they can change the world*. Penguin Press.",
  why:"The optimistic case for games as social infrastructure.",
  access:"buy", themes:["culture","learning"], weeks:[], role:"context" },

{ id:"squire2007", apa:"Squire, K. (2007). Games, learning, and society: Building a field. *Educational Technology, 47*(5), 51\u201354.",
  why:"A short field-building statement. Try Oria or ERIC; not in JSTOR.",
  access:"library", themes:["learning"], weeks:[], role:"context" },

{ id:"squire2003", apa:"Squire, K., & Jenkins, H. (2003). Harnessing the power of games in education. *InSight, 3*(1), 5\u201333.",
  why:"An early agenda for games in education.",
  access:"open", themes:["learning"], weeks:[], role:"context" },

{ id:"cassell1998", apa:"Cassell, J., & Jenkins, H. (Eds.). (1998). *From Barbie to Mortal Kombat: Gender and computer games*. MIT Press.",
  why:"The first serious collection on gender and games.",
  access:"library", themes:["culture"], weeks:[], role:"context" },

{ id:"kafai2008", apa:"Kafai, Y. B., Heeter, C., Denner, J., & Sun, J. Y. (Eds.). (2008). *Beyond Barbie and Mortal Kombat: New perspectives on gender and gaming*. MIT Press.",
  why:"The ten-years-on sequel, and a sharper book.",
  access:"library", themes:["culture"], weeks:[], role:"context" },

{ id:"mahar2024", apa:"Mahar, R. J. (2024). *Playing with fire: A history of video game moral panic* [Undergraduate honors thesis, Muhlenberg College]. Muhlenberg College Digital Repository.",
  why:"Moral panic as a recurring shape. Free, and a good model of an undergraduate thesis.",
  access:"open", url:"https://jstor.org/stable/community.37779234",
  themes:["culture"], weeks:[], role:"context" },

{ id:"johnson2025", apa:"Johnson, E. K., & Salter, A. (2025). Game. In *Critical making in the age of AI* (pp. 137\u2013162). Amherst College Press. https://doi.org/10.3998/mpub.14510509",
  why:"Making, and what generative tools do to it. Free.",
  access:"open", url:"https://www.fulcrum.org/concern/monographs/zc77ss95p",
  themes:["culture","design"], weeks:[], role:"context" },

/* ---- further reading, by week ------------------------------------------------ */
{ id:"juul2005", apa:"Juul, J. (2005). *Half-real: Video games between real rules and fictional worlds*. MIT Press.",
  why:"How rules and fiction sit together in one object.",
  access:"library", themes:["design","narrative"], weeks:[[2,"supporting"]], role:"further" },

{ id:"jenkins2004", apa:"Jenkins, H. (2004). Game design as narrative architecture. In N. Wardrip-Fruin & P. Harrigan (Eds.), *First person: New media as story, performance, and game* (pp. 118\u2013130). MIT Press.",
  why:"Narrative as spatial design. Free on Jenkins's MIT page.",
  access:"open", url:"https://web.mit.edu/~21fms/People/henry3/",
  themes:["narrative"], weeks:[[3,"supporting"]], role:"further" },

{ id:"ryan2015", apa:"Ryan, M.-L. (2015). *Narrative as virtual reality 2: Revisiting immersion and interactivity in literature and electronic media* (2nd ed.). Johns Hopkins University Press.",
  why:"Immersion and interactivity, carefully distinguished.",
  access:"library", themes:["narrative"], weeks:[[3,"supporting"]], role:"further" },

{ id:"sterman2000", apa:"Sterman, J. D. (2000). *Business dynamics: Systems thinking and modeling for a complex world*. Irwin/McGraw-Hill.",
  why:"Heavy, but the reference work for teams wanting to model properly.",
  access:"library", themes:["systems"], weeks:[[4,"supporting"]], role:"further" },

{ id:"keith2020", apa:"Keith, C. (2020). *Agile game development: Build, play, repeat* (2nd ed.). Addison-Wesley.",
  why:"Production management for small teams. Check the edition before ordering.",
  access:"buy", themes:["methods","design"], weeks:[[7,"supporting"]], role:"further" },

{ id:"sicart2009", apa:"Sicart, M. (2009). *The ethics of computer games*. MIT Press.",
  why:"The fuller argument behind the 2013 article.",
  access:"library", themes:["aesthetics"], weeks:[[9,"supporting"]], role:"further" },

{ id:"anthropy2012", apa:"Anthropy, A. (2012). *Rise of the videogame zinesters*. Seven Stories Press.",
  why:"A corrective for anyone who assumes scale is a prerequisite for significance.",
  access:"buy", themes:["culture","design"], weeks:[[9,"supporting"]], role:"further" },

{ id:"fernandezvara2019", apa:"Fern\u00e1ndez-Vara, C. (2019). *Introduction to game analysis* (2nd ed.). Routledge.",
  why:"The standard textbook for exactly what week 10 asks you to do.",
  access:"library", themes:["methods"], weeks:[[10,"supporting"]], role:"further" },

{ id:"caillois1961", apa:"Caillois, R. (1961). *Man, play and games* (M. Barash, Trans.). Free Press. (Original work published 1958)",
  why:"The other half of the Huizinga conversation; source of paidia and ludus.",
  access:"buy", themes:["play"], weeks:[[15,"supporting"]], role:"further" },

{ id:"bateson1972", apa:"Bateson, G. (1972). A theory of play and fantasy. In *Steps to an ecology of mind*. Chandler.",
  why:"\u201cThis is play\u201d as a framing message. Pairs with Goffman.",
  access:"library", themes:["play"], weeks:[[15,"supporting"]], role:"further" },

{ id:"schon1983", apa:"Sch\u00f6n, D. A. (1983). *The reflective practitioner: How professionals think in action*. Basic Books.",
  why:"Reflection-in-action as a method \u2014 which is what peeling the onion asks of you.",
  access:"buy", themes:["methods","learning"], weeks:[[16,"supporting"]], role:"further" },

];

/* Places to look for something current rather than canonical. */
const READING_SOURCES = [
  { name:"Game Studies", url:"https://gamestudies.org", note:"The field's main journal. Open access since 2001." },
  { name:"DiGRA Digital Library", url:"https://dl.digra.org", note:"Conference proceedings and Transactions of DiGRA. Open access." },
  { name:"ETC Press", url:"https://press.etc.cmu.edu", note:"Carnegie Mellon. A whole catalogue of free game studies books." },
];
