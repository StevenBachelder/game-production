/* Builds a single teacher page from ?id=N */
(function () {
  "use strict";
  var el = GP.el, root = document.getElementById("teacher");

  var id = Number(GP.param("id"));
  var t = GP.teacher(id);

  if (!t) {
    var miss = el("section", "band"), w = el("div", "wrap");
    w.appendChild(el("p", "eyebrow", "Not found"));
    w.appendChild(el("h1", "h2", "No teacher with that number"));
    w.appendChild(el("p", "sub", "The course has " + (typeof TEACHERS !== "undefined" ? TEACHERS.length : 0) + " teacher pages."));
    var back = el("a", "btn", "See all teachers");
    back.href = "teachers.html";
    w.appendChild(back);
    miss.appendChild(w); root.appendChild(miss);
    return;
  }

  document.title = t.name + " — Game Production";

  /* ---------- header ---------- */
  var head = el("section", "profhead");
  var hw = el("div", "wrap profhead__in");

  hw.appendChild(GP.avatar(t, "avatar--lg"));

  var meta = el("div", "profhead__meta");
  var crumbs = el("p", "dayhead__crumbs");
  var all = el("a", null, "Teachers");
  all.href = "teachers.html";
  crumbs.appendChild(all);
  meta.appendChild(crumbs);
  meta.appendChild(el("h1", "profhead__name", t.name));
  if (t.role) meta.appendChild(el("p", "profhead__role", t.role));
  if (!t.photo) meta.appendChild(el("p", "profhead__hint", "No photograph yet."));
  if (t.url) meta.appendChild(profileLink(t, "extlink extlink--light"));
  hw.appendChild(meta);

  head.appendChild(hw);
  root.appendChild(head);

  /* ---------- body ---------- */
  var band = el("section", "band");
  var wrap = el("div", "wrap");
  var cols = el("div", "daygrid");
  var left = el("div", "daygrid__main");

  var about = el("section", "dayblock");
  about.appendChild(el("h2", "dayblock__h", "About"));
  if (t.about) about.appendChild(el("p", "daybody", t.about));
  else about.appendChild(el("p", "empty", "A short description will go here."));
  if (t.url) {
    var src = el("p", "dayblock__src");
    src.appendChild(document.createTextNode("Official profile: "));
    src.appendChild(profileLink(t, "extlink"));
    about.appendChild(src);
  }
  left.appendChild(about);

  var note = el("section", "dayblock");
  note.appendChild(el("h2", "dayblock__h", "A note to the students"));
  if (t.note) {
    var q = el("blockquote", "tnote");
    q.appendChild(el("p", null, "\u201C" + t.note + "\u201D"));
    q.appendChild(el("cite", null, t.name));
    note.appendChild(q);
  } else {
    note.appendChild(el("p", "empty", "A short note from " + t.name + " will go here."));
  }
  left.appendChild(note);

  var res = el("section", "dayblock");
  res.appendChild(el("h2", "dayblock__h", "Resources"));
  if (t.resources && t.resources.length) {
    res.appendChild(GP.resourceList(t.resources));
  } else {
    res.appendChild(el("p", "empty", "No links or files shared yet."));
  }
  left.appendChild(res);
  cols.appendChild(left);

  /* right: sessions this person is on */
  var side = el("aside", "daygrid__side");
  var box = el("section", "sidebox");
  box.appendChild(el("h2", "sidebox__h", "Teaching on"));
  var days = GP.daysFor(t.id);
  if (days.length) {
    var ul = el("ul", "dayslist");
    days.forEach(function (s) {
      var li = el("li");
      var a = el("a");
      a.href = "day.html?d=" + s.date;
      var txt = GP.sessionText(s);
      a.appendChild(el("b", null, GP.shortDate(GP.d(s.date))));
      a.appendChild(el("span", null, txt && txt.short ? txt.short : "Session"));
      li.appendChild(a);
      ul.appendChild(li);
    });
    box.appendChild(ul);
  } else {
    box.appendChild(el("p", "empty", "No sessions assigned yet."));
    box.appendChild(el("p", "sidebox__p", "Add this number to the people list of a day in day-details.js and it appears here."));
  }
  side.appendChild(box);
  cols.appendChild(side);
  wrap.appendChild(cols);

  /* prev / next teacher */
  var nav = el("nav", "daynav");
  nav.setAttribute("aria-label", "Other teachers");
  var i = TEACHERS.indexOf(t);
  nav.appendChild(tLink(TEACHERS[i - 1], "Previous", "prev"));
  nav.appendChild(tLink(TEACHERS[i + 1], "Next", "next"));
  wrap.appendChild(nav);

  band.appendChild(wrap);
  root.appendChild(band);

  /* an outbound link to the university profile, opening in a new tab */
  function profileLink(person, cls) {
    var a = el("a", cls);
    a.href = person.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.appendChild(el("span", null, "inn.no profile"));
    var i = el("span", "extlink__i", "\u2197");
    i.setAttribute("aria-hidden", "true");
    a.appendChild(i);
    a.appendChild(el("span", "vh", "(opens the university website in a new tab)"));
    return a;
  }

  function tLink(target, label, dir) {
    if (!target) return el("span", "daynav__x");
    var a = el("a", "daynav__a daynav__a--" + dir);
    a.href = "teacher.html?id=" + target.id;
    a.appendChild(el("span", "daynav__k", label));
    a.appendChild(el("span", "daynav__t", target.name));
    return a;
  }
})();
