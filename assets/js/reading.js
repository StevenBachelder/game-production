/* =========================================================================
   Builds the reading page from reading-data.js.
   Content lives in reading-data.js — you should not need to edit this file.
   ========================================================================= */
(function () {
  "use strict";

  var THEMES = {
    play: "Play and culture",
    systems: "Systems and the commons",
    narrative: "Narrative",
    design: "Game design practice",
    aesthetics: "Aesthetics and artistic intention",
    affordance: "Affordances and perception",
    methods: "Research methods and analysis",
    learning: "Learning",
    culture: "Games, culture and society"
  };
  var ACCESS = {
    open:    { label: "Free to read", cls: "ac--open" },
    library: { label: "Via the library", cls: "ac--lib" },
    buy:     { label: "Buy or borrow", cls: "ac--buy" }
  };
  var ROLE = { core: "Core", supporting: "Supporting", further: "Further", context: "Context" };

  function el(t, c, x) { var n = document.createElement(t); if (c) n.className = c; if (x != null) n.textContent = x; return n; }
  function $(id) { return document.getElementById(id); }

  /* *text* becomes italic; everything else stays literal text */
  function apaHtml(str) {
    var frag = document.createDocumentFragment();
    str.split(/(\*[^*]+\*)/).forEach(function (part) {
      if (!part) return;
      if (part.charAt(0) === "*" && part.slice(-1) === "*") frag.appendChild(el("em", null, part.slice(1, -1)));
      else frag.appendChild(document.createTextNode(part));
    });
    return frag;
  }

  var state = { view: "week", freeOnly: false };

  /* ---- header ---------------------------------------------------------- */
  var openCount = READING.filter(function (r) { return r.access === "open"; }).length;
  $("read-intro").textContent =
    "Everything the course draws on, arranged by the week it belongs to. Start with the Core " +
    "texts for the week you are in — the rest is there when a project pulls you towards it.";
  [[String(READING.length), "texts in total"],
   [String(openCount), "free to read with no login"],
   ["3", "levels: core, supporting, further"]
  ].forEach(function (s) {
    var d = el("div"); d.appendChild(el("dt", null, s[0])); d.appendChild(el("dd", null, s[1]));
    $("read-stats").appendChild(d);
  });

  READING_SOURCES.forEach(function (s) {
    var li = el("li");
    var a = el("a", "sources__n", s.name);
    a.href = s.url; a.target = "_blank"; a.rel = "noopener noreferrer";
    li.appendChild(a);
    li.appendChild(el("p", "sources__d", s.note));
    $("read-sources").appendChild(li);
  });

  /* ---- one entry ------------------------------------------------------- */
  function card(entry, role) {
    var li = el("li", "ref");
    if (role) li.classList.add("ref--" + role);

    var tags = el("div", "ref__tags");
    if (role && ROLE[role]) {
      var r = el("span", "tag tag--" + role, ROLE[role]);
      tags.appendChild(r);
    }
    var acc = ACCESS[entry.access] || ACCESS.buy;
    tags.appendChild(el("span", "tag ac " + acc.cls, acc.label));
    li.appendChild(tags);

    var p = el("p", "ref__apa");
    p.appendChild(apaHtml(entry.apa));
    li.appendChild(p);

    if (entry.why) li.appendChild(el("p", "ref__why", entry.why));

    var acts = el("div", "ref__acts");
    if (entry.url) {
      var a = el("a", "ref__link");
      a.href = entry.url; a.target = "_blank"; a.rel = "noopener noreferrer";
      a.textContent = entry.access === "open" ? "Read it" : "Find it";
      acts.appendChild(a);
    }
    var copy = el("button", "ref__copy", "Copy citation");
    copy.type = "button";
    copy.addEventListener("click", function () {
      var plain = entry.apa.replace(/\*/g, "");
      var done = function () { copy.textContent = "Copied"; setTimeout(function () { copy.textContent = "Copy citation"; }, 1600); };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(plain).then(done, function () { copy.textContent = "Press Ctrl+C"; });
      } else {
        var ta = el("textarea"); ta.value = plain; document.body.appendChild(ta);
        ta.select(); try { document.execCommand("copy"); done(); } catch (e) { /* ignore */ }
        document.body.removeChild(ta);
      }
    });
    acts.appendChild(copy);
    li.appendChild(acts);
    return li;
  }

  function pass(entry) { return !state.freeOnly || entry.access === "open"; }

  /* ---- views ------------------------------------------------------------ */
  function byWeek() {
    var out = document.createDocumentFragment(), any = false;

    COURSE.weeks.forEach(function (w) {
      var rows = [];
      READING.forEach(function (e) {
        (e.weeks || []).forEach(function (pair) {
          if (pair[0] === w.n && pass(e)) rows.push({ entry: e, role: e.role === "further" ? "further" : pair[1] });
        });
      });
      var order = { core: 0, supporting: 1, further: 2 };
      rows.sort(function (a, b) { return order[a.role] - order[b.role]; });

      var sec = el("section", "wkread");
      var head = el("div", "wkread__h");
      head.appendChild(el("span", "wkread__n", "Week " + w.label));
      head.appendChild(el("span", "wkread__t", w.teach.short));
      if (w.samling) head.appendChild(el("span", "tag tag--samling", "Samling " + w.samling));
      sec.appendChild(head);

      if (!rows.length) {
        sec.appendChild(el("p", "wkread__none",
          state.freeOnly ? "Nothing free for this week." : "No set reading — consolidation week."));
      } else {
        any = true;
        var ul = el("ul", "refs");
        rows.forEach(function (r) { ul.appendChild(card(r.entry, r.role)); });
        sec.appendChild(ul);
      }
      out.appendChild(sec);
    });

    var ctx = READING.filter(function (e) { return e.role === "context" && pass(e); });
    if (ctx.length) {
      any = true;
      var sec2 = el("section", "wkread");
      var h2 = el("div", "wkread__h");
      h2.appendChild(el("span", "wkread__n wkread__n--wide", "Any week"));
      h2.appendChild(el("span", "wkread__t", "Background, for when a project turns that way"));
      sec2.appendChild(h2);
      var ul2 = el("ul", "refs");
      ctx.forEach(function (e) { ul2.appendChild(card(e, "context")); });
      sec2.appendChild(ul2);
      out.appendChild(sec2);
    }
    return { node: out, any: any };
  }

  function byTheme() {
    var out = document.createDocumentFragment(), any = false;
    Object.keys(THEMES).forEach(function (key) {
      var rows = READING.filter(function (e) { return (e.themes || []).indexOf(key) > -1 && pass(e); });
      if (!rows.length) return;
      any = true;
      var sec = el("section", "wkread");
      var head = el("div", "wkread__h");
      head.appendChild(el("span", "wkread__t", THEMES[key]));
      head.appendChild(el("span", "wkread__c", rows.length + (rows.length === 1 ? " text" : " texts")));
      sec.appendChild(head);
      var ul = el("ul", "refs");
      rows.forEach(function (e) { ul.appendChild(card(e, e.role === "context" ? "context" : null)); });
      sec.appendChild(ul);
      out.appendChild(sec);
    });
    return { node: out, any: any };
  }

  function byAz() {
    var rows = READING.filter(pass).slice().sort(function (a, b) {
      return a.apa.localeCompare(b.apa, "nb");
    });
    var out = document.createDocumentFragment();
    var sec = el("section", "wkread");
    var head = el("div", "wkread__h");
    head.appendChild(el("span", "wkread__t", "All texts, alphabetically"));
    head.appendChild(el("span", "wkread__c", rows.length + " texts"));
    sec.appendChild(head);
    var ul = el("ul", "refs");
    rows.forEach(function (e) { ul.appendChild(card(e, null)); });
    sec.appendChild(ul);
    out.appendChild(sec);
    return { node: out, any: rows.length > 0 };
  }

  function render() {
    var host = $("reading");
    host.textContent = "";
    var res = state.view === "theme" ? byTheme() : state.view === "az" ? byAz() : byWeek();
    host.appendChild(res.node);
    $("read-empty").hidden = res.any;
  }

  Array.prototype.forEach.call(document.querySelectorAll("[data-view]"), function (b) {
    b.addEventListener("click", function () {
      state.view = b.dataset.view;
      Array.prototype.forEach.call(document.querySelectorAll("[data-view]"), function (o) {
        o.classList.toggle("is-on", o === b);
      });
      render();
    });
  });
  $("free-only").addEventListener("change", function (e) {
    state.freeOnly = e.target.checked;
    render();
  });

  render();
})();
