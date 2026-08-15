/* =========================================================================
   Builds one teaching-form page from COURSE.forms (course-data.js).
   form.html?id=lectures
   ========================================================================= */
(function () {
  "use strict";
  var el = GP.el, main = document.getElementById("main");

  var id = GP.param("id");
  var idx = -1;
  COURSE.forms.forEach(function (f, i) { if (f.id === id) idx = i; });

  if (idx < 0) {
    var w = el("div", "wrap");
    w.style.padding = "5rem 0";
    w.appendChild(el("h1", "h2", "Teaching form not found"));
    var back = el("a", "btn", "All teaching forms");
    back.href = "index.html#teaching";
    w.appendChild(back);
    main.appendChild(w);
    return;
  }

  var f = COURSE.forms[idx];
  document.title = f.name + " — Game Production";

  var TRACK = {
    teach:   { label: "Teaching component", note: "Tuesday. Input to the whole cohort." },
    group:   { label: "Student group-work", note: "Wednesday. Response to each team's own work." },
    samling: { label: "Samling", note: "Sits above the weekly rhythm." }
  };
  var tr = TRACK[f.track] || TRACK.teach;

  /* ---- header ---------------------------------------------------------- */
  var hero = el("section", "formhead");
  var hw = el("div", "wrap");
  var crumb = el("p", "crumb");
  var c1 = el("a", null, "Teaching"); c1.href = "index.html#teaching";
  crumb.appendChild(c1);
  crumb.appendChild(el("span", null, " / " + tr.label));
  hw.appendChild(crumb);

  hw.appendChild(el("h1", "formhead__t", f.name));
  var tags = el("div", "formhead__tags");
  tags.appendChild(el("span", "pill pill--" + f.track, tr.label));
  tags.appendChild(el("span", "pill pill--ghost", f.when));
  hw.appendChild(tags);
  hw.appendChild(el("p", "formhead__n", f.note));
  hero.appendChild(hw);
  main.appendChild(hero);

  /* ---- body ------------------------------------------------------------ */
  var band = el("section", "band");
  var wrap = el("div", "wrap");
  var cols = el("div", "daygrid");
  var left = el("div", "daygrid__main"), right = el("aside", "daygrid__side");

  function block(title, node) {
    var b = el("section", "dayblock");
    b.appendChild(el("h2", "dayblock__h", title));
    b.appendChild(node);
    return b;
  }
  function paras(list) {
    var d = el("div");
    (list || []).forEach(function (t) { d.appendChild(el("p", "daybody", t)); });
    return d;
  }
  function bullets(list) {
    var ul = el("ul", "ticks");
    (list || []).forEach(function (t) { ul.appendChild(el("li", null, t)); });
    return ul;
  }

  left.appendChild(block("What it is", paras(f.about)));
  if (f.expect && f.expect.length) left.appendChild(block("What to expect", bullets(f.expect)));
  if (f.prepare && f.prepare.length) left.appendChild(block("How to prepare", bullets(f.prepare)));

  /* who is involved — placeholder until filled in */
  var who = el("section", "sidebox");
  who.appendChild(el("h2", "sidebox__h", "Who is involved"));
  var people = (f.people || []).map(GP.teacher).filter(Boolean);
  if (people.length) {
    var ul = el("ul", "who");
    people.forEach(function (t) {
      var li = el("li");
      var a = el("a", "who__a");
      a.href = "teacher.html?id=" + t.id;
      a.appendChild(el("span", "who__av", GP.initials(t.name)));
      var tx = el("span");
      tx.appendChild(el("span", "who__n", t.name));
      if (t.role) tx.appendChild(el("span", "who__r", t.role));
      a.appendChild(tx);
      li.appendChild(a);
      ul.appendChild(li);
    });
    who.appendChild(ul);
  } else {
    who.appendChild(el("p", "empty", "To be confirmed."));
    var hint = el("p", "sidebox__hint",
      "Add teacher numbers to this form's people list in course-data.js and they appear here.");
    who.appendChild(hint);
    var all = el("a", "sidebox__link", "See all teachers");
    all.href = "teachers.html";
    who.appendChild(all);
  }
  right.appendChild(who);

  /* when */
  var when = el("section", "sidebox");
  when.appendChild(el("h2", "sidebox__h", "When"));
  when.appendChild(el("p", "sidebox__big", f.when));
  when.appendChild(el("p", "sidebox__p", tr.note));
  right.appendChild(when);

  /* reading */
  if (f.reading && f.reading.length && typeof READING !== "undefined") {
    var rd = el("section", "sidebox");
    rd.appendChild(el("h2", "sidebox__h", "Reading for this form"));
    var rl = el("ul", "cardread");
    f.reading.forEach(function (rid) {
      var e = READING.filter(function (x) { return x.id === rid; })[0];
      if (!e) return;
      var li = el("li");
      li.appendChild(el("span", "cardread__t", e.apa.replace(/\*/g, "")));
      if (e.access === "open") li.appendChild(el("span", "tag ac ac--open", "Free to read"));
      if (e.url) {
        var a = el("a", "cardread__l", e.access === "open" ? "Read it" : "Find it");
        a.href = e.url; a.target = "_blank"; a.rel = "noopener noreferrer";
        li.appendChild(a);
      }
      rl.appendChild(li);
    });
    rd.appendChild(rl);
    var more = el("a", "sidebox__link", "The full reading list");
    more.href = "reading.html";
    rd.appendChild(more);
    right.appendChild(rd);
  }

  cols.appendChild(left);
  cols.appendChild(right);
  wrap.appendChild(cols);
  band.appendChild(wrap);
  main.appendChild(band);

  /* ---- prev / next ------------------------------------------------------- */
  var nav = el("div", "wrap daynav");
  function link(i, dir) {
    var t = COURSE.forms[i];
    if (!t) return el("span");
    var a = el("a", "daynav__a daynav__a--" + dir);
    a.href = "form.html?id=" + t.id;
    a.appendChild(el("span", "daynav__k", dir === "prev" ? "Previous" : "Next"));
    a.appendChild(el("span", "daynav__t", t.name));
    return a;
  }
  nav.appendChild(link(idx - 1, "prev"));
  nav.appendChild(link(idx + 1, "next"));
  main.appendChild(nav);
})();
