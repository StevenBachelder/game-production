/* Builds the grid of all teachers */
(function () {
  "use strict";
  var el = GP.el, root = document.getElementById("teachers");

  var band = el("section", "band");
  var wrap = el("div", "wrap");
  wrap.appendChild(el("p", "eyebrow", "The people"));
  wrap.appendChild(el("h1", "h2", "Teachers"));

  var named = TEACHERS.filter(function (t) { return !/^Teacher \d+$/.test(t.name); }).length;
  wrap.appendChild(el("p", "sub",
    named
      ? named + " of " + TEACHERS.length + " confirmed so far. The rest are placeholders until names are added."
      : "Placeholder pages for the teaching team. Each one is ready for a photograph, a short description and a note to the students."));
  wrap.appendChild(el("p", "sub", "Listed alphabetically by surname."));

  var grid = el("ul", "tgrid");
  TEACHERS.forEach(function (t) {
    var li = el("li");
    var a = el("a", "tcard");
    a.href = "teacher.html?id=" + t.id;
    a.appendChild(GP.avatar(t, "avatar--md"));
    var txt = el("span", "tcard__txt");
    txt.appendChild(el("b", null, t.name));
    txt.appendChild(el("span", "tcard__role", t.role || "Role to be confirmed"));
    var n = GP.daysFor(t.id).length;
    if (n) txt.appendChild(el("span", "tcard__days", n === 1 ? "1 session" : n + " sessions"));
    if (t.url) {
      var badge = el("span", "tcard__ext", "inn.no");
      badge.setAttribute("title", "Has an official university profile");
      txt.appendChild(badge);
    }
    a.appendChild(txt);
    li.appendChild(a);
    grid.appendChild(li);
  });
  wrap.appendChild(grid);

  band.appendChild(wrap);
  root.appendChild(band);
})();
