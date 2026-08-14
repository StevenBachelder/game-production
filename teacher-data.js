/* =========================================================================
   TEACHERS

   21 people from the INN University staff directory, plus 9 spare slots.
   The list is sorted by surname automatically — the order here doesn't
   matter, and you can add people at the end.

     name     as you want it shown
     surname  used for the alphabetical ordering. Set it explicitly so that
              double-barrelled and multi-word names sort correctly.
     role     one short line, e.g. "Professor" or "Førsteamanuensis"
     photo    a file in assets/img/teachers/, e.g. "vibeto.jpg".
              Leave empty to show initials instead. Square, ~600x600.
     url      their official INN University profile page
     about    a short summary in your own words (2–3 sentences)
     note     a short message from them to the students

   PLEASE CHECK THE SPELLINGS. The names below were derived from the web
   addresses, so accents and middle names may be missing — for example the
   directory lists Steven as "Steven Monroe Bachelder". Diacritics in Håvard
   and Ørjan are my best guess.
   ========================================================================= */

const TEACHERS = [

  { id: 1,  name: "Steven Bachelder",     surname: "Bachelder",     role: "", photo: "",
    url: "https://www.inn.no/finn-en-ansatt/steven-bachelder.html",     about: "", note: "" },

  { id: 2,  name: "Gunhild Lien",         surname: "Lien",          role: "", photo: "",
    url: "https://www.inn.no/finn-en-ansatt/gunhild-lien.html",         about: "", note: "" },

  { id: 3,  name: "Ole Haga",             surname: "Haga",          role: "", photo: "",
    url: "https://www.inn.no/finn-en-ansatt/ole-haga.html",             about: "", note: "" },

  { id: 4,  name: "Esperanza Johnson",    surname: "Johnson",       role: "", photo: "",
    url: "https://www.inn.no/finn-en-ansatt/esperanza-johnson.html",    about: "", note: "" },

  { id: 5,  name: "Håvard Vibeto",        surname: "Vibeto",        role: "", photo: "",
    url: "https://www.inn.no/finn-en-ansatt/havard-vibeto.html",        about: "", note: "" },

  { id: 6,  name: "Ole Allen",            surname: "Allen",         role: "", photo: "",
    url: "https://www.inn.no/finn-en-ansatt/ole-allen.html",            about: "", note: "" },

  { id: 7,  name: "Meisam Taheri",        surname: "Taheri",        role: "", photo: "",
    url: "https://www.inn.no/finn-en-ansatt/meisam-taheri.html",        about: "", note: "" },

  { id: 8,  name: "Sophie Mobbs",         surname: "Mobbs",         role: "", photo: "",
    url: "https://www.inn.no/finn-en-ansatt/sophie-mobbs.html",         about: "", note: "" },

  { id: 9,  name: "Simon Andreasen",      surname: "Andreasen",     role: "", photo: "",
    url: "https://www.inn.no/finn-en-ansatt/simon-andreasen.html",      about: "", note: "" },

  { id: 10, name: "Fred Froehlich",       surname: "Froehlich",     role: "", photo: "",
    url: "https://www.inn.no/finn-en-ansatt/fred-froehlich.html",       about: "", note: "" },

  { id: 11, name: "Christopher McNeill",  surname: "McNeill",       role: "", photo: "",
    url: "https://www.inn.no/finn-en-ansatt/christopher-mcneill.html",  about: "", note: "" },

  { id: 12, name: "Sanu Mana",            surname: "Mana",          role: "", photo: "",
    url: "https://www.inn.no/finn-en-ansatt/sanu-mana.html",            about: "", note: "" },

  { id: 13, name: "Ørjan Svendsen",       surname: "Svendsen",      role: "", photo: "",
    url: "https://www.inn.no/finn-en-ansatt/orjan-svendsen.html",       about: "", note: "" },

  { id: 14, name: "Dime Gjorgjievski",    surname: "Gjorgjievski",  role: "", photo: "",
    url: "https://www.inn.no/finn-en-ansatt/dime-gjorgjievski.html",    about: "", note: "" },

  { id: 15, name: "Ole Flaten",           surname: "Flaten",        role: "", photo: "",
    url: "https://www.inn.no/finn-en-ansatt/ole-flaten.html",           about: "", note: "" },

  { id: 16, name: "Jason Kao",            surname: "Kao",           role: "", photo: "",
    url: "https://www.inn.no/finn-en-ansatt/jason-kao.html",            about: "", note: "" },

  { id: 17, name: "Dag Nylund",           surname: "Nylund",        role: "", photo: "",
    url: "https://www.inn.no/finn-en-ansatt/dag-nylund.html",           about: "", note: "" },

  { id: 18, name: "Ove Olsen",            surname: "Olsen",         role: "", photo: "",
    url: "https://www.inn.no/finn-en-ansatt/ove-olsen.html",            about: "", note: "" },

  { id: 19, name: "Kevin Tan",            surname: "Tan",           role: "", photo: "",
    url: "https://www.inn.no/finn-en-ansatt/kevin-tan.html",            about: "", note: "" },

  { id: 20, name: "Jimi Tornberg",        surname: "Tornberg",      role: "", photo: "",
    url: "https://www.inn.no/finn-en-ansatt/jimi-tornberg.html",        about: "", note: "" },

  { id: 21, name: "Frank Veenstra",       surname: "Veenstra",      role: "", photo: "",
    url: "https://www.inn.no/finn-en-ansatt/frank-veenstra.html",       about: "", note: "" },

  /* ---- spare slots. Replace name and surname as people are confirmed. ---- */
  { id: 22, name: "Teacher 22", surname: "\uFFFF22", role: "", photo: "", url: "", about: "", note: "" },
  { id: 23, name: "Teacher 23", surname: "\uFFFF23", role: "", photo: "", url: "", about: "", note: "" },
  { id: 24, name: "Teacher 24", surname: "\uFFFF24", role: "", photo: "", url: "", about: "", note: "" },
  { id: 25, name: "Teacher 25", surname: "\uFFFF25", role: "", photo: "", url: "", about: "", note: "" },
  { id: 26, name: "Teacher 26", surname: "\uFFFF26", role: "", photo: "", url: "", about: "", note: "" },
  { id: 27, name: "Teacher 27", surname: "\uFFFF27", role: "", photo: "", url: "", about: "", note: "" },
  { id: 28, name: "Teacher 28", surname: "\uFFFF28", role: "", photo: "", url: "", about: "", note: "" },
  { id: 29, name: "Teacher 29", surname: "\uFFFF29", role: "", photo: "", url: "", about: "", note: "" },
  { id: 30, name: "Teacher 30", surname: "\uFFFF30", role: "", photo: "", url: "", about: "", note: "" },

];

/* Alphabetical by surname, Norwegian collation so Æ, Ø and Å sort last.
   Unnamed slots keep to the end. */
TEACHERS.sort(function (a, b) {
  return String(a.surname).localeCompare(String(b.surname), "nb");
});
