/* Builds a single session page from ?d=YYYY-MM-DD */
(function () {
  "use strict";
  var el = GP.el, root = document.getElementById("day");

  var date = GP.param("d");
  var s = date ? GP.byDate[date] : null;

  if (!s) {
    var miss = el("section", "band");
    var w = el("div", "wrap");
    w.appendChild(el("p", "eyebrow", "Not a teaching day"));
    w.appendChild(el("h1", "h2", "There is no session on that date"));
    w.appendChild(el("p", "sub", "Teaching runs on Tuesdays and Wednesdays during the course weeks. Pick a coloured day in the calendar to see its details."));
    var back = el("a", "btn", "Go to the calendar");
    back.href = "index.html#calendar";
    w.appendChild(back);
    miss.appendChild(w);
    root.appendChild(miss);
    return;
  }

  var dt = GP.d(s.date);
  var det = GP.details(s.date);
  var text = GP.sessionText(s);
  var time = GP.trackTime(s.track);
  document.title = GP.longDate(dt) + " — Game Production";

  /* ---------- header ---------- */
  var head = el("section", "dayhead");
  var hw = el("div", "wrap");

  var crumbs = el("p", "dayhead__crumbs");
  var cal = el("a", null, "Calendar");
  cal.href = "index.html#calendar";
  crumbs.appendChild(cal);
  crumbs.appendChild(el("span", null, " / "));
  crumbs.appendChild(el("span", null, "Course week " + s.week.n));
  hw.appendChild(crumbs);

  hw.appendChild(el("h1", "dayhead__date", GP.longDate(dt)));

  var tags = el("p", "dayhead__tags");
  var tag = el("span", "tag tag--" + s.track, GP.trackLabel(s.track));
  tags.appendChild(tag);
  if (time) tags.appendChild(el("span", "tag tag--time", time.time));
  tags.appendChild(el("span", "tag tag--plain", "Course week " + s.week.n + " · " + GP.calWeekOf(s.week)));
  if (s.week.samling) tags.appendChild(el("span", "tag tag--samling", "Samling " + s.week.samling));
  if (s.week.exam) tags.appendChild(el("span", "tag tag--exam", "Exam week"));
  if (s.week.phase) tags.appendChild(el("span", "tag tag--phase", s.week.phase.name));
  hw.appendChild(tags);

  hw.appendChild(el("p", "dayhead__title", text && text.short ? text.short : "Session"));
  head.appendChild(hw);
  root.appendChild(head);

  /* ---------- body ---------- */
  var band = el("section", "band");
  var wrap = el("div", "wrap");
  var cols = el("div", "daygrid");

  /* left: what happens */
  var left = el("div", "daygrid__main");

  left.appendChild(block("Description", function (b) {
    if (det.description) {
      b.appendChild(el("p", "daybody", det.description));
    } else if (text && text.long) {
      b.appendChild(el("p", "daybody", text.long));
      b.appendChild(el("p", "fromcourse", "From the course description. Add a description for this session in day-details.js to replace it."));
    } else {
      b.appendChild(empty("No description yet."));
    }
  }));

  left.appendChild(block("Preparations", function (b) {
    if (det.preparations.length) {
      var ul = el("ul", "ticks");
      det.preparations.forEach(function (p) { ul.appendChild(el("li", null, p)); });
      b.appendChild(ul);
    } else {
      b.appendChild(empty("Nothing to prepare in advance yet."));
    }
  }));

  left.appendChild(block("Resources", function (b) {
    var own = det.resources || [];
    var fromTeachers = GP.teacherResourcesFor(s.date);
    if (own.length) b.appendChild(GP.resourceList(own));
    if (fromTeachers.length) {
      b.appendChild(el("p", "reshead", own.length ? "From the teachers on this session" : "Shared by the teachers on this session"));
      b.appendChild(GP.resourceList(fromTeachers, "reslist--by"));
    }
    if (!own.length && !fromTeachers.length) b.appendChild(empty("No readings or links added yet."));
  }));

  cols.appendChild(left);

  /* right: people */
  var side = el("aside", "daygrid__side");
  var pb = el("section", "sidebox");
  pb.appendChild(el("h2", "sidebox__h", "People involved"));
  if (det.people.length) {
    var list = el("ul", "peoplelist");
    det.people.forEach(function (id) {
      var t = GP.teacher(id);
      if (!t) return;
      var li = el("li");
      var a = el("a", "person");
      a.href = "teacher.html?id=" + t.id;
      a.appendChild(GP.avatar(t, "avatar--sm"));
      var txt = el("span", "person__txt");
      txt.appendChild(el("b", null, t.name));
      if (t.role) txt.appendChild(el("span", null, t.role));
      a.appendChild(txt);
      li.appendChild(a);
      list.appendChild(li);
    });
    pb.appendChild(list);
  } else {
    pb.appendChild(empty("Not assigned yet."));
    var all = el("a", "sidebox__link", "See all teachers");
    all.href = "teachers.html";
    pb.appendChild(all);
  }
  side.appendChild(pb);

  if (time) {
    var wb = el("section", "sidebox");
    wb.appendChild(el("h2", "sidebox__h", "When"));
    wb.appendChild(el("p", "sidebox__big", time.time));
    wb.appendChild(el("p", "sidebox__p", time.day + "s. " + time.forms.join(", ") + "."));
    side.appendChild(wb);
  }

  cols.appendChild(side);
  wrap.appendChild(cols);

  /* prev / next */
  var nav = el("nav", "daynav");
  nav.setAttribute("aria-label", "Other sessions");
  var prev = GP.sessions[s.index - 1], next = GP.sessions[s.index + 1];
  nav.appendChild(navLink(prev, "Previous session", "prev"));
  nav.appendChild(navLink(next, "Next session", "next"));
  wrap.appendChild(nav);

  band.appendChild(wrap);
  root.appendChild(band);

  /* ---------- helpers ---------- */
  function block(title, fill) {
    var sec = el("section", "dayblock");
    sec.appendChild(el("h2", "dayblock__h", title));
    fill(sec);
    return sec;
  }
  function empty(msg) { return el("p", "empty", msg); }
  function navLink(target, label, dir) {
    if (!target) return el("span", "daynav__x");
    var a = el("a", "daynav__a daynav__a--" + dir);
    a.href = "day.html?d=" + target.date;
    a.appendChild(el("span", "daynav__k", label));
    var tt = GP.sessionText(target);
    a.appendChild(el("span", "daynav__t", GP.shortDate(GP.d(target.date)) + " · " + (tt && tt.short ? tt.short : "Session")));
    return a;
  }
})();
