/* =========================================================================
   The contribute page. Nothing is sent anywhere — this only formats what the
   teacher types so they can copy it and send it on.
   ========================================================================= */
(function () {
  "use strict";

  function el(t, c, x) { var n = document.createElement(t); if (c) n.className = c; if (x != null) n.textContent = x; return n; }
  function $(id) { return document.getElementById(id); }
  function val(id) { return ($(id).value || "").trim(); }

  var KINDS = [["link", "Link"], ["pdf", "PDF"], ["slides", "Slides"], ["video", "Video"], ["file", "File"]];

  /* ---- week checkboxes, straight from the course data ------------------- */
  COURSE.weeks.forEach(function (w) {
    var id = "wk-" + w.n;
    var lab = el("label");
    var cb = el("input");
    cb.type = "checkbox"; cb.id = id; cb.value = w.n;
    cb.addEventListener("change", render);
    lab.appendChild(cb);
    lab.appendChild(el("span", null, "Week " + w.label + " — " + w.teach.short));
    $("f-weeks").appendChild(lab);
  });

  /* ---- repeatable resource rows ------------------------------------------ */
  function addRow(pref) {
    var row = el("div", "rrow");

    var label = el("input");
    label.type = "text"; label.placeholder = "What it is called";
    label.className = "r-label";

    var url = el("input");
    url.type = "url"; url.placeholder = "https://… (leave blank if sending a file)";
    url.className = "r-url";

    var kind = el("select");
    kind.className = "r-kind";
    KINDS.forEach(function (k) {
      var o = el("option", null, k[1]); o.value = k[0]; kind.appendChild(o);
    });

    var del = el("button", "del", "\u00d7");
    del.type = "button";
    del.setAttribute("aria-label", "Remove this resource");
    del.addEventListener("click", function () { row.remove(); render(); });

    [label, url, kind].forEach(function (n) { n.addEventListener("input", render); n.addEventListener("change", render); });
    if (pref) { label.value = pref.label || ""; url.value = pref.url || ""; kind.value = pref.kind || "link"; }

    row.appendChild(label); row.appendChild(url); row.appendChild(kind); row.appendChild(del);
    $("f-res").appendChild(row);
    return row;
  }
  $("add-res").addEventListener("click", function () { addRow(); render(); });
  addRow();

  function resources() {
    return Array.prototype.map.call(document.querySelectorAll(".rrow"), function (r) {
      return {
        label: (r.querySelector(".r-label").value || "").trim(),
        url: (r.querySelector(".r-url").value || "").trim(),
        kind: r.querySelector(".r-kind").value
      };
    }).filter(function (r) { return r.label; });
  }

  /* ---- character counters -------------------------------------------------- */
  Array.prototype.forEach.call(document.querySelectorAll(".count"), function (c) {
    var f = $(c.dataset.for);
    function upd() {
      var n = f.value.length, max = Number(f.getAttribute("maxlength"));
      c.textContent = n + " / " + max;
      c.classList.toggle("is-over", n > max * 0.95);
    }
    f.addEventListener("input", upd); upd();
  });

  /* ---- preview + output ------------------------------------------------------ */
  function chosenWeeks() {
    return COURSE.weeks.filter(function (w) {
      var cb = $("wk-" + w.n);
      return cb && cb.checked;
    });
  }

  function render() {
    var name = val("f-name"), role = val("f-role"), inst = val("f-inst"),
        bio = val("f-bio"), note = val("f-note"), desc = val("f-desc"),
        prep = val("f-prep").split("\n").map(function (x) { return x.trim(); }).filter(Boolean),
        res = resources(), wks = chosenWeeks();

    /* --- the visual preview --- */
    var p = $("preview");
    p.textContent = "";
    p.appendChild(el("h2", "sidebox__h", "Your page will read"));
    p.appendChild(el("p", "who__n", name || "Your name"));
    if (role || inst) p.appendChild(el("p", "who__r", [role, inst].filter(Boolean).join(" · ")));
    if (bio) {
      var a = el("a", "extlink", "Profile");
      a.href = bio; a.target = "_blank"; a.rel = "noopener noreferrer";
      p.appendChild(a);
    }
    if (note) {
      p.appendChild(el("p", "reshead", "A note to the students"));
      var bq = el("blockquote", "tnote");
      bq.appendChild(el("p", null, note));
      p.appendChild(bq);
    }
    if (desc) {
      p.appendChild(el("p", "reshead", "The session"));
      p.appendChild(el("p", "daybody", desc));
    }
    if (prep.length) {
      p.appendChild(el("p", "reshead", "Before the session"));
      var ul = el("ul", "ticks");
      prep.forEach(function (x) { ul.appendChild(el("li", null, x)); });
      p.appendChild(ul);
    }
    if (res.length) {
      p.appendChild(el("p", "reshead", "Resources"));
      var rl = el("ul", "reslist");
      res.forEach(function (r) {
        var li = el("li", "res");
        li.appendChild(el("span", "res__k res__k--" + r.kind, r.kind === "link" ? "Link" : r.kind.toUpperCase()));
        li.appendChild(el("span", "res__a", r.label + (r.url ? "" : "  (file to follow)")));
        rl.appendChild(li);
      });
      p.appendChild(rl);
    }
    if (wks.length) {
      p.appendChild(el("p", "reshead", "Sessions"));
      p.appendChild(el("p", "sidebox__p", wks.map(function (w) { return "Week " + w.label; }).join(", ")));
    }

    /* --- the block to copy --- */
    $("out").textContent = plain(name, role, inst, bio, note, desc, prep, res, wks);
  }

  function plain(name, role, inst, bio, note, desc, prep, res, wks) {
    var L = [];
    L.push("GAME PRODUCTION — SESSION DETAILS");
    L.push("");
    L.push("Name:        " + (name || "—"));
    L.push("Job title:   " + (role || "—"));
    L.push("Institution: " + (inst || "—"));
    L.push("Bio link:    " + (bio || "—"));
    L.push("");
    L.push("A NOTE TO THE STUDENTS");
    L.push(note || "—");
    L.push("");
    L.push("THE LECTURE / WORKSHOP");
    L.push(desc || "—");
    L.push("");
    L.push("BEFORE THE SESSION");
    L.push(prep.length ? prep.map(function (x) { return "- " + x; }).join("\n") : "—");
    L.push("");
    L.push("RESOURCES");
    L.push(res.length ? res.map(function (r) {
      return "- [" + r.kind + "] " + r.label + (r.url ? " — " + r.url : " — FILE TO FOLLOW");
    }).join("\n") : "—");
    L.push("");
    L.push("SESSIONS");
    L.push(wks.length ? wks.map(function (w) {
      return "- Week " + w.label + " (" + w.teach.short + ")";
    }).join("\n") : "—");
    return L.join("\n");
  }

  /* ---- copy and download -------------------------------------------------------- */
  function say(msg) {
    $("said").textContent = msg;
    setTimeout(function () { $("said").textContent = ""; }, 2600);
  }
  $("copy").addEventListener("click", function () {
    var text = $("out").textContent;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(
        function () { say("Copied — now paste it into an email."); },
        function () { say("Could not copy. Select the text below instead."); });
    } else {
      var ta = el("textarea"); ta.value = text; document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); say("Copied."); } catch (e) { say("Select the text below to copy."); }
      document.body.removeChild(ta);
    }
  });
  $("download").addEventListener("click", function () {
    var name = (val("f-name") || "session").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    var blob = new Blob([$("out").textContent], { type: "text/plain;charset=utf-8" });
    var a = el("a");
    a.href = URL.createObjectURL(blob);
    a.download = "game-production-" + name + ".txt";
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    URL.revokeObjectURL(a.href);
    say("Downloaded.");
  });

  Array.prototype.forEach.call(document.querySelectorAll("#cform input, #cform textarea"), function (n) {
    n.addEventListener("input", render);
  });
  render();
})();
