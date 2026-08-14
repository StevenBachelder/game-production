/* =========================================================================
   Builds the page from COURSE (assets/js/course-data.js).
   You should not need to edit this file to change course content.
   ========================================================================= */
(function () {
  "use strict";

  var DAY = 86400000;
  var MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  var DOW = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function $(id) { return document.getElementById(id); }
  function d(iso) { return new Date(iso + "T00:00:00Z"); }
  function iso(dt) { return dt.toISOString().slice(0, 10); }
  function plus(dt, n) { return new Date(dt.getTime() + n * DAY); }
  function fmt(dt) { return dt.getUTCDate() + " " + MONTHS[dt.getUTCMonth()].slice(0, 3); }
  function range(a, b) {
    return a.getUTCMonth() === b.getUTCMonth()
      ? a.getUTCDate() + "\u2013" + fmt(b)
      : fmt(a) + "\u2013" + fmt(b);
  }

  /* ---- derived --------------------------------------------------------- */
  COURSE.weeks.forEach(function (w) {
    var mon = d(w.monday);
    w.tueDate = plus(mon, 1);
    w.wedDate = plus(mon, 2);
    w.phase = COURSE.phases.filter(function (p) { return w.n >= p.from && w.n <= p.to; })[0];
  });

  var byDate = {};
  COURSE.weeks.forEach(function (w) {
    byDate[iso(w.tueDate)] = { week: w, track: "teach" };
    byDate[iso(w.wedDate)] = { week: w, track: "group" };
  });

  /* ---- hero ------------------------------------------------------------ */
  $("hero-eyebrow").textContent = COURSE.programme + " · " + COURSE.year;
  $("hero-title").textContent = COURSE.title;
  $("hero-q").textContent = "\u201C" + COURSE.question + "\u201D";
  $("hero-stand").textContent = COURSE.standfirst;
  $("foot-year").textContent = COURSE.year;

  var teachingWeeks = COURSE.weeks.filter(function (w) { return w.n <= 16; }).length;
  [
    [String(teachingWeeks), "teaching weeks, plus week 1 of 2027"],
    [String(COURSE.samlinger.length), "Samlinger (intensive gatherings)"],
    ["2", "contact days every week"]
  ].forEach(function (s) {
    var box = el("div");
    box.appendChild(el("dt", null, s[0]));
    box.appendChild(el("dd", null, s[1]));
    $("hero-stats").appendChild(box);
  });

  var strip = $("hero-strip");
  COURSE.weeks.forEach(function (w) {
    var c = el("span", "strip__c");
    c.dataset.tone = w.phase ? w.phase.tone : "";
    if (w.samling) c.classList.add("is-samling");
    if (w.exam) c.classList.add("is-exam");
    c.title = "Week " + w.label + " · " + w.teach.short;
    strip.appendChild(c);
  });

  /* ---- course ---------------------------------------------------------- */
  $("aim").textContent = COURSE.aim;
  COURSE.kinds.forEach(function (k) {
    var li = el("li");
    li.appendChild(el("b", null, k.name));
    li.appendChild(el("span", null, k.note));
    $("kinds").appendChild(li);
  });

  /* ---- rhythm and forms ------------------------------------------------- */
  COURSE.rhythm.forEach(function (r) {
    var box = el("div", "rhythm__d");
    box.dataset.track = r.track;
    box.appendChild(el("p", "rhythm__day", r.day));
    box.appendChild(el("p", "rhythm__t", r.time));
    var fl = el("div", "rhythm__f");
    r.forms.forEach(function (f) { fl.appendChild(el("span", null, f)); });
    box.appendChild(fl);
    box.appendChild(el("p", "rhythm__n", r.note));
    $("rhythm").appendChild(box);
  });

  COURSE.forms.forEach(function (f) {
    var li = el("li");
    li.dataset.track = f.track;
    li.appendChild(el("span", "dot"));
    li.appendChild(el("b", null, f.name));
    li.appendChild(el("span", "when", f.when));
    li.appendChild(el("span", "note", f.note));
    $("forms").appendChild(li);
  });

  /* ---- week board -------------------------------------------------------- */
  var board = $("board");
  COURSE.phases.forEach(function (p) {
    var sec = el("section", "phase");
    sec.dataset.tone = p.tone;

    var head = el("div", "phase__head");
    head.appendChild(el("span", "phase__name", p.name));
    head.appendChild(el("span", "phase__sub", p.sub));
    var wks = COURSE.weeks.filter(function (w) { return w.n >= p.from && w.n <= p.to; });
    var first = wks[0], last = wks[wks.length - 1];
    head.appendChild(el("span", "phase__wk", "weeks " + first.label + "–" + last.label + " · cal. " + first.cal + "–" + last.cal));
    sec.appendChild(head);
    sec.appendChild(el("p", "phase__note", p.note));

    wks.forEach(function (w) { sec.appendChild(weekRow(w)); });
    board.appendChild(sec);
  });

  function weekRow(w) {
    var wrap = el("article", "wk");
    if (w.samling) wrap.classList.add("is-samling");
    if (w.exam) wrap.classList.add("is-exam");

    var btn = el("button", "wk__btn");
    btn.type = "button";
    btn.setAttribute("aria-expanded", "false");

    var n = el("div", "wk__n");
    n.appendChild(el("b", null, w.label));
    n.appendChild(el("span", null, "cal. " + w.cal));
    n.appendChild(el("span", null, range(w.tueDate, w.wedDate)));
    btn.appendChild(n);

    var t = el("div", "wk__cell");
    t.appendChild(el("span", null, w.teach.short));
    if (w.exam) t.appendChild(el("span", "wk__tag", "Exam week"));
    btn.appendChild(t);

    var g = el("div", "wk__cell wk__cell--group");
    if (w.group && w.group.short && w.group.short !== "—") {
      g.appendChild(el("span", null, w.group.short));
    } else {
      g.classList.add("wk__cell--none");
      g.appendChild(el("span", null, "not specified"));
    }
    btn.appendChild(g);

    var chev = el("span", "wk__chev");
    chev.setAttribute("aria-hidden", "true");
    chev.textContent = "\u25BE";
    btn.appendChild(chev);

    var body = el("div", "wk__body");
    var pair = el("div", "wk__pair");

    var tc = el("div");
    tc.appendChild(el("p", "wk__k", "Teaching component"));
    tc.appendChild(el("p", "wk__p", w.teach.long));
    pair.appendChild(tc);

    var gc = el("div");
    gc.appendChild(el("p", "wk__k wk__k--group", "Student group-work focus"));
    if (w.group && w.group.long) {
      gc.appendChild(el("p", "wk__p", w.group.long));
    } else {
      gc.appendChild(el("p", "wk__p wk__p--none", "Not specified in the course description."));
    }
    pair.appendChild(gc);
    body.appendChild(pair);

    btn.addEventListener("click", function () {
      var open = wrap.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });

    wrap.appendChild(btn);
    wrap.appendChild(body);
    return wrap;
  }

  var allBtn = $("expand-all");
  allBtn.addEventListener("click", function () {
    var open = allBtn.getAttribute("aria-pressed") !== "true";
    allBtn.setAttribute("aria-pressed", open ? "true" : "false");
    allBtn.textContent = open ? "Close all weeks" : "Open all weeks";
    document.querySelectorAll(".wk").forEach(function (w) {
      w.classList.toggle("is-open", open);
      w.querySelector(".wk__btn").setAttribute("aria-expanded", open ? "true" : "false");
    });
  });

  /* ---- calendar ------------------------------------------------------------ */
  var calWeekOf = {};
  COURSE.weeks.forEach(function (w) { calWeekOf[w.monday] = w; });
  var extraWeeks = { "2026-12-21": 52, "2026-12-28": 53 };

  var bFrom = d(COURSE.breakFrom), bTo = d(COURSE.breakTo);

  COURSE.months.forEach(function (m) {
    var mo = el("section", "mo");
    mo.appendChild(el("h3", "mo__name", m.name));
    var grid = el("div", "mo__grid");

    grid.appendChild(el("span", "mo__dow"));
    DOW.forEach(function (dn, i) {
      grid.appendChild(el("span", "mo__dow" + (i > 4 ? " mo__dow--we" : ""), dn));
    });

    var first = new Date(Date.UTC(m.year, m.month, 1));
    var offset = (first.getUTCDay() + 6) % 7;
    var dim = new Date(Date.UTC(m.year, m.month + 1, 0)).getUTCDate();
    var rows = Math.ceil((offset + dim) / 7);
    var start = plus(first, -offset);

    for (var r = 0; r < rows; r++) {
      var monday = plus(start, r * 7);
      var mk = iso(monday);
      var cw = calWeekOf[mk];
      var gut = el("div", "mo__wk");
      var tueIn = plus(monday, 1).getUTCMonth() === m.month;
      var wedIn = plus(monday, 2).getUTCMonth() === m.month;
      if (cw) {
        gut.appendChild(el("span", null, "wk " + cw.cal));
        if (tueIn || wedIn) {
          gut.appendChild(el("small", null, cw.exam ? "course " + cw.n + " · exam" : "course " + cw.n));
        }
      } else if (extraWeeks[mk]) {
        gut.classList.add("is-break");
        gut.appendChild(el("span", null, "wk " + extraWeeks[mk]));
        gut.appendChild(el("small", null, "break"));
      }
      grid.appendChild(gut);

      for (var c = 0; c < 7; c++) {
        var dt = plus(monday, c);
        var inMonth = dt.getUTCMonth() === m.month && dt.getUTCFullYear() === m.year;
        var cell = el("div", "mo__d");
        if (!inMonth) {
          cell.classList.add("is-out");
          grid.appendChild(cell);
          continue;
        }
        var ev = byDate[iso(dt)];
        var isBreak = dt >= bFrom && dt <= bTo;
        if (ev && ev.week.samling) cell.classList.add("is-samling");
        else if (ev && ev.track === "teach") cell.classList.add("is-teach");
        else if (ev && ev.track === "group") cell.classList.add("is-group");
        else if (isBreak) cell.classList.add("is-break");

        cell.appendChild(el("span", "mo__num", String(dt.getUTCDate())));
        if (ev) {
          var lab = ev.track === "teach" ? ev.week.teach.short : (ev.week.group ? ev.week.group.short : "");
          if (lab && lab !== "—") cell.appendChild(el("span", "mo__lab", lab));
        }
        grid.appendChild(cell);
      }
    }
    mo.appendChild(grid);
    $("months").appendChild(mo);
  });

  $("break-note").textContent = COURSE.breakNote;

  /* ---- samlinger -------------------------------------------------------------- */
  COURSE.samlinger.forEach(function (s) {
    var w = COURSE.weeks.filter(function (x) { return x.n === s.week; })[0];
    var li = el("li");
    li.appendChild(el("span", "n", String(s.n)));
    li.appendChild(el("span", "w", "Week " + s.week + " · " + range(w.tueDate, w.wedDate)));
    li.appendChild(el("p", "note", s.note));
    $("samlist").appendChild(li);
  });

  var s4 = COURSE.samlinger.filter(function (s) { return s.points; })[0];
  if (s4) {
    var box = el("div", "sam4");
    box.appendChild(el("p", "sam4__k", "Samling " + s4.n + (s4.draft ? " — draft description" : "")));
    box.appendChild(el("p", "sam4__t", "\u201C" + s4.title + "\u201D"));
    var ul = el("ul", "sam4__l");
    s4.points.forEach(function (p) { ul.appendChild(el("li", null, p)); });
    box.appendChild(ul);
    $("samling-detail").appendChild(box);
  }

  /* ---- literature --------------------------------------------------------------- */
  COURSE.literature.forEach(function (c) {
    var li = el("li");
    li.dataset.tone = c.tone;
    li.appendChild(el("b", null, c.name));
    li.appendChild(el("p", "note", c.note));
    var ul = el("ul");
    c.authors.forEach(function (a) { ul.appendChild(el("li", null, a)); });
    li.appendChild(ul);
    $("lit").appendChild(li);
  });
  $("lit-note").textContent = COURSE.litNote;

  /* ---- downloads ------------------------------------------------------------------ */
  COURSE.downloads.forEach(function (f) {
    var li = el("li");
    var a = el("a");
    a.href = f.file;
    a.appendChild(el("span", "kind", f.kind));
    a.appendChild(el("span", "name", f.name));
    li.appendChild(a);
    $("dl").appendChild(li);
  });

  /* ---- next session chip ------------------------------------------------------------ */
  (function () {
    var now = new Date();
    var today = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
    var next = null;
    COURSE.weeks.forEach(function (w) {
      [[w.tueDate, "teach"], [w.wedDate, "group"]].forEach(function (pair) {
        if (!next && pair[0] >= today) next = { date: pair[0], week: w, track: pair[1] };
      });
    });
    if (!next) return;
    var label = next.track === "teach" ? next.week.teach.short : (next.week.group ? next.week.group.short : "");
    var days = Math.round((next.date - today) / DAY);
    var when = days === 0 ? "today" : days === 1 ? "tomorrow" : DOW[(next.date.getUTCDay() + 6) % 7] + " " + fmt(next.date);
    $("next-session").textContent = "Next: " + when + " · " + label;
  })();

  /* ---- nav highlight + reveal --------------------------------------------------------- */
  var links = Array.prototype.slice.call(document.querySelectorAll(".topbar__nav a"));
  var sections = links.map(function (a) { return document.querySelector(a.getAttribute("href")); }).filter(Boolean);
  if ("IntersectionObserver" in window) {
    var navObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        links.forEach(function (a) {
          a.classList.toggle("is-here", a.getAttribute("href") === "#" + e.target.id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { navObs.observe(s); });

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      var revObs = new IntersectionObserver(function (entries, o) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add("is-in"); o.unobserve(e.target); }
        });
      }, { rootMargin: "0px 0px -8% 0px" });
      document.querySelectorAll(".band .wrap > *").forEach(function (n) {
        n.classList.add("reveal");
        revObs.observe(n);
      });
    }
  }
})();
