/* =========================================================================
   Shared helpers for the day and teacher pages.
   Loaded after course-data.js, day-details.js and teacher-data.js.
   ========================================================================= */
var GP = (function () {
  "use strict";

  var DAY = 86400000;
  var MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  var DOW_LONG = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
  var WORD = (typeof COURSE !== "undefined" && COURSE.wording) || { calWeek: "week", courseWeek: "course" };

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function d(isoStr) { return new Date(isoStr + "T00:00:00Z"); }
  function iso(dt) { return dt.toISOString().slice(0, 10); }
  function plus(dt, n) { return new Date(dt.getTime() + n * DAY); }
  function dowIndex(dt) { return (dt.getUTCDay() + 6) % 7; }
  function longDate(dt) {
    return DOW_LONG[dowIndex(dt)] + " " + dt.getUTCDate() + " " + MONTHS[dt.getUTCMonth()] + " " + dt.getUTCFullYear();
  }
  function shortDate(dt) { return dt.getUTCDate() + " " + MONTHS[dt.getUTCMonth()].slice(0, 3); }
  function calWeekOf(w) { return WORD.calWeek + " " + (w.calLabel || w.cal); }

  /* every teaching session, in order */
  var sessions = [];
  if (typeof COURSE !== "undefined") {
    COURSE.weeks.forEach(function (w) {
      var mon = d(w.monday);
      w.phase = COURSE.phases.filter(function (p) { return w.n >= p.from && w.n <= p.to; })[0];
      sessions.push({ date: iso(plus(mon, 1)), week: w, track: "teach" });
      sessions.push({ date: iso(plus(mon, 2)), week: w, track: "group" });
    });
  }
  var byDate = {};
  sessions.forEach(function (s, i) { s.index = i; byDate[s.date] = s; });

  function trackLabel(track) {
    return track === "teach" ? "Teaching component" : "Student group-work focus";
  }
  function trackTime(track) {
    var r = (COURSE.rhythm || []).filter(function (x) { return x.track === track; })[0];
    return r ? { day: r.day, time: r.time, forms: r.forms } : null;
  }
  function sessionText(s) {
    return s.track === "teach" ? s.week.teach : s.week.group;
  }

  function teacher(id) {
    if (typeof TEACHERS === "undefined") return null;
    return TEACHERS.filter(function (t) { return t.id === Number(id); })[0] || null;
  }
  function initials(name) {
    /* placeholder names like "Teacher 12" read better as the number */
    var numbered = /^\s*\D+?\s*(\d+)\s*$/.exec(name);
    if (numbered) return numbered[1];
    return name.split(/\s+/).filter(Boolean).slice(0, 2).map(function (p) {
      return p[0].toUpperCase();
    }).join("");
  }
  /* which sessions a person is listed on */
  function daysFor(id) {
    if (typeof DAY_DETAILS === "undefined") return [];
    return sessions.filter(function (s) {
      var det = DAY_DETAILS[s.date];
      return det && det.people && det.people.indexOf(Number(id)) !== -1;
    });
  }
  function details(date) {
    var det = (typeof DAY_DETAILS !== "undefined" && DAY_DETAILS[date]) || {};
    return {
      people: det.people || [],
      description: det.description || "",
      preparations: det.preparations || [],
      resources: det.resources || []
    };
  }

  var KIND = { link:"Link", pdf:"PDF", slides:"Slides", video:"Video", file:"File" };

  /* one <ul> of resources. Each item: { label, url, kind } */
  function resourceList(items, extraClass) {
    var ul = el("ul", "reslist" + (extraClass ? " " + extraClass : ""));
    (items || []).forEach(function (r) {
      if (!r || !r.label) return;
      var li = el("li", "res");
      var kind = KIND[r.kind] || (r.url ? "Link" : "");
      if (kind) li.appendChild(el("span", "res__k res__k--" + (r.kind || "link"), kind));
      if (r.url) {
        var a = el("a", "res__a", r.label);
        a.href = r.url;
        if (/^https?:/.test(r.url)) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
        li.appendChild(a);
      } else {
        li.appendChild(el("span", "res__a", r.label));
      }
      if (r.by) li.appendChild(el("span", "res__by", r.by));
      ul.appendChild(li);
    });
    return ul;
  }

  /* every resource offered by the teachers listed on a given date */
  function teacherResourcesFor(dateIso) {
    var out = [];
    (details(dateIso).people || []).forEach(function (pid) {
      var t = teacher(pid);
      if (!t || !t.resources) return;
      t.resources.forEach(function (r) {
        out.push({ label: r.label, url: r.url, kind: r.kind, by: t.name });
      });
    });
    return out;
  }

  function param(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  /* a photo, or an initials block when there isn't one yet */
  function avatar(t, cls) {
    if (t.photo) {
      var img = document.createElement("img");
      img.className = "avatar " + (cls || "");
      img.src = "assets/img/teachers/" + t.photo;
      img.alt = t.name;
      img.loading = "lazy";
      img.addEventListener("error", function () {
        img.replaceWith(avatarInitials(t, cls));
      });
      return img;
    }
    return avatarInitials(t, cls);
  }
  function avatarInitials(t, cls) {
    var n = el("span", "avatar avatar--empty " + (cls || ""), initials(t.name));
    n.setAttribute("aria-hidden", "true");
    return n;
  }

  return {
    el: el, d: d, iso: iso, plus: plus, longDate: longDate, shortDate: shortDate,
    calWeekOf: calWeekOf, sessions: sessions, byDate: byDate, trackLabel: trackLabel,
    trackTime: trackTime, sessionText: sessionText, teacher: teacher, daysFor: daysFor,
    details: details, param: param, avatar: avatar, initials: initials, WORD: WORD,
    resourceList: resourceList, teacherResourcesFor: teacherResourcesFor
  };
})();
