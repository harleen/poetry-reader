import se, { useState as b, useMemo as le } from "react";
import { Link as _, useParams as B } from "react-router-dom";
var g = { exports: {} }, E = {};
var U;
function oe() {
  if (U) return E;
  U = 1;
  var t = /* @__PURE__ */ Symbol.for("react.transitional.element"), n = /* @__PURE__ */ Symbol.for("react.fragment");
  function a(l, o, c) {
    var h = null;
    if (c !== void 0 && (h = "" + c), o.key !== void 0 && (h = "" + o.key), "key" in o) {
      c = {};
      for (var p in o)
        p !== "key" && (c[p] = o[p]);
    } else c = o;
    return o = c.ref, {
      $$typeof: t,
      type: l,
      key: h,
      ref: o !== void 0 ? o : null,
      props: c
    };
  }
  return E.Fragment = n, E.jsx = a, E.jsxs = a, E;
}
var R = {};
var D;
function ie() {
  return D || (D = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === te ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case S:
          return "Fragment";
        case G:
          return "Profiler";
        case z:
          return "StrictMode";
        case Z:
          return "Suspense";
        case K:
          return "SuspenseList";
        case re:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case V:
            return "Portal";
          case H:
            return e.displayName || "Context";
          case X:
            return (e._context.displayName || "Context") + ".Consumer";
          case Q:
            var s = e.render;
            return e = e.displayName, e || (e = s.displayName || s.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case ee:
            return s = e.displayName || null, s !== null ? s : t(e.type) || "Memo";
          case y:
            s = e._payload, e = e._init;
            try {
              return t(e(s));
            } catch {
            }
        }
      return null;
    }
    function n(e) {
      return "" + e;
    }
    function a(e) {
      try {
        n(e);
        var s = !1;
      } catch {
        s = !0;
      }
      if (s) {
        s = console;
        var u = s.error, d = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return u.call(
          s,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          d
        ), n(e);
      }
    }
    function l(e) {
      if (e === S) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === y)
        return "<...>";
      try {
        var s = t(e);
        return s ? "<" + s + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var e = w.A;
      return e === null ? null : e.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function h(e) {
      if ($.call(e, "key")) {
        var s = Object.getOwnPropertyDescriptor(e, "key").get;
        if (s && s.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function p(e, s) {
      function u() {
        Y || (Y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          s
        ));
      }
      u.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: u,
        configurable: !0
      });
    }
    function i() {
      var e = t(this.type);
      return L[e] || (L[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function j(e, s, u, d, T, P) {
      var m = u.ref;
      return e = {
        $$typeof: I,
        type: e,
        key: s,
        props: u,
        _owner: d
      }, (m !== void 0 ? m : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: i
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: T
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: P
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function f(e, s, u, d, T, P) {
      var m = s.children;
      if (m !== void 0)
        if (d)
          if (ne(m)) {
            for (d = 0; d < m.length; d++)
              x(m[d]);
            Object.freeze && Object.freeze(m);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else x(m);
      if ($.call(s, "key")) {
        m = t(e);
        var v = Object.keys(s).filter(function(ae) {
          return ae !== "key";
        });
        d = 0 < v.length ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}", q[m + d] || (v = 0 < v.length ? "{" + v.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          d,
          m,
          v,
          m
        ), q[m + d] = !0);
      }
      if (m = null, u !== void 0 && (a(u), m = "" + u), h(s) && (a(s.key), m = "" + s.key), "key" in s) {
        u = {};
        for (var A in s)
          A !== "key" && (u[A] = s[A]);
      } else u = s;
      return m && p(
        u,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), j(
        e,
        m,
        u,
        o(),
        T,
        P
      );
    }
    function x(e) {
      N(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === y && (e._payload.status === "fulfilled" ? N(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function N(e) {
      return typeof e == "object" && e !== null && e.$$typeof === I;
    }
    var k = se, I = /* @__PURE__ */ Symbol.for("react.transitional.element"), V = /* @__PURE__ */ Symbol.for("react.portal"), S = /* @__PURE__ */ Symbol.for("react.fragment"), z = /* @__PURE__ */ Symbol.for("react.strict_mode"), G = /* @__PURE__ */ Symbol.for("react.profiler"), X = /* @__PURE__ */ Symbol.for("react.consumer"), H = /* @__PURE__ */ Symbol.for("react.context"), Q = /* @__PURE__ */ Symbol.for("react.forward_ref"), Z = /* @__PURE__ */ Symbol.for("react.suspense"), K = /* @__PURE__ */ Symbol.for("react.suspense_list"), ee = /* @__PURE__ */ Symbol.for("react.memo"), y = /* @__PURE__ */ Symbol.for("react.lazy"), re = /* @__PURE__ */ Symbol.for("react.activity"), te = /* @__PURE__ */ Symbol.for("react.client.reference"), w = k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = Object.prototype.hasOwnProperty, ne = Array.isArray, O = console.createTask ? console.createTask : function() {
      return null;
    };
    k = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var Y, L = {}, F = k.react_stack_bottom_frame.bind(
      k,
      c
    )(), W = O(l(c)), q = {};
    R.Fragment = S, R.jsx = function(e, s, u) {
      var d = 1e4 > w.recentlyCreatedOwnerStacks++;
      return f(
        e,
        s,
        u,
        !1,
        d ? Error("react-stack-top-frame") : F,
        d ? O(l(e)) : W
      );
    }, R.jsxs = function(e, s, u) {
      var d = 1e4 > w.recentlyCreatedOwnerStacks++;
      return f(
        e,
        s,
        u,
        !0,
        d ? Error("react-stack-top-frame") : F,
        d ? O(l(e)) : W
      );
    };
  })()), R;
}
var M;
function ce() {
  return M || (M = 1, process.env.NODE_ENV === "production" ? g.exports = oe() : g.exports = ie()), g.exports;
}
var r = ce();
function ue(t, n, a) {
  const [l, o] = b(""), c = le(() => {
    if (!l.trim())
      return t.map((i) => n[i]).filter(Boolean);
    const h = l.toLowerCase(), p = a.poems.filter(
      (i) => i.title.toLowerCase().includes(h) || i.text.toLowerCase().includes(h)
    ).map((i) => i.id);
    return t.filter((i) => p.includes(i)).map((i) => n[i]).filter(Boolean);
  }, [l, t, n]);
  return {
    query: l,
    setQuery: o,
    results: c,
    isSearching: l.trim().length > 0
  };
}
function de({
  sections: t,
  poemsById: n,
  searchIndex: a,
  currentId: l,
  onSelect: o
}) {
  const c = t.flatMap((f) => f.poemIds), { query: h, setQuery: p, results: i, isSearching: j } = ue(c, n, a);
  return /* @__PURE__ */ r.jsxs("nav", { children: [
    j && /* @__PURE__ */ r.jsx("h3", { children: "RESULTS" }),
    /* @__PURE__ */ r.jsx(
      "input",
      {
        className: "reader-search",
        type: "search",
        placeholder: "Search…",
        value: h,
        onChange: (f) => p(f.target.value),
        "aria-label": "Search poems"
      }
    ),
    j && /* @__PURE__ */ r.jsx("ul", { className: "reader-nav-list", children: i.map((f) => /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsx(
      "button",
      {
        className: f.id === l ? "reader-nav-item active" : "reader-nav-item",
        onClick: () => o(f.id),
        children: f.title
      }
    ) }, f.id)) }),
    !j && t.map((f) => /* @__PURE__ */ r.jsxs("div", { className: "reader-nav-section", children: [
      /* @__PURE__ */ r.jsx("h4", { className: "reader-nav-section-title", children: f.title }),
      /* @__PURE__ */ r.jsx("ul", { className: "reader-nav-list", children: f.poemIds.map((x) => {
        const N = n[x];
        return N ? /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsx(
          "button",
          {
            className: x === l ? "reader-nav-item active" : "reader-nav-item",
            onClick: () => o(x),
            children: N.title
          }
        ) }, x) : null;
      }) })
    ] }, f.id)),
    i.length === 0 && j && /* @__PURE__ */ r.jsx("div", { className: "reader-empty", children: "No poems match this search." }),
    /* @__PURE__ */ r.jsx("div", { className: "reader-nav-footer", children: /* @__PURE__ */ r.jsx("div", { className: "reader-meta", children: /* @__PURE__ */ r.jsx(_, { className: "reader-meta-link", to: "/explore", children: "Explore Patterns in this collection" }) }) })
  ] });
}
function J({ poem: t }) {
  return t ? /* @__PURE__ */ r.jsx("main", { className: "reader-poem", children: /* @__PURE__ */ r.jsxs("div", { className: "reader-poem-inner", children: [
    /* @__PURE__ */ r.jsx("h1", { children: t.title }),
    /* @__PURE__ */ r.jsx("pre", { children: t.content })
  ] }) }) : null;
}
function me({ poemTitle: t }) {
  const [n, a] = b(""), l = n.trim().length > 0, o = t ? `mailto:feedback@yourdomain.com?subject=${encodeURIComponent(
    `Workshop notes: ${t}`
  )}&body=${encodeURIComponent(n)}` : "";
  return /* @__PURE__ */ r.jsxs("aside", { className: "workshop-panel", children: [
    /* @__PURE__ */ r.jsx("h3", { children: "WORKSHOP NOTES" }),
    /* @__PURE__ */ r.jsx("p", { className: "workshop-hint", children: "Thoughts, questions, or line-level notes." }),
    /* @__PURE__ */ r.jsx(
      "textarea",
      {
        value: n,
        onChange: (c) => a(c.target.value),
        placeholder: "Write your notes here…"
      }
    ),
    /* @__PURE__ */ r.jsx(
      "a",
      {
        className: `workshop-send ${l ? "" : "disabled"}`,
        href: l ? o : void 0,
        "aria-disabled": !l,
        children: "Send notes"
      }
    )
  ] });
}
function C({ poem: t }) {
  return /* @__PURE__ */ r.jsxs("main", { className: "reader-poem translation-poem", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "translation-grid", children: [
      /* @__PURE__ */ r.jsxs("section", { className: "translation-col", children: [
        /* @__PURE__ */ r.jsx("h2", { className: "translation-label", children: "Translation" }),
        /* @__PURE__ */ r.jsx("pre", { children: t.translation.content })
      ] }),
      /* @__PURE__ */ r.jsxs("section", { className: "translation-col", children: [
        /* @__PURE__ */ r.jsx("h2", { className: "translation-label", children: "Original" }),
        /* @__PURE__ */ r.jsx("pre", { children: t.original.content })
      ] })
    ] }),
    t.notes && /* @__PURE__ */ r.jsxs("section", { className: "translation-notes", children: [
      /* @__PURE__ */ r.jsx("h3", { children: "Notes" }),
      /* @__PURE__ */ r.jsx("pre", { children: t.notes.content })
    ] })
  ] });
}
function fe({
  title: t,
  description: n,
  poemsById: a,
  sections: l,
  searchIndex: o,
  currentPoem: c,
  currentId: h,
  selectPoem: p,
  showWorkshop: i = !1
}) {
  const [j, f] = b(!1);
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("div", { className: "reader", children: [
      (t || n) && /* @__PURE__ */ r.jsxs("header", { className: "reader-header", children: [
        t && /* @__PURE__ */ r.jsx("h1", { className: "reader-title", children: t }),
        n && /* @__PURE__ */ r.jsx("p", { className: "reader-description", children: n })
      ] }),
      /* @__PURE__ */ r.jsx("aside", { className: `reader-nav ${j ? "reader-nav--open" : ""}`, children: /* @__PURE__ */ r.jsx(
        de,
        {
          poemsById: a,
          sections: l,
          searchIndex: o,
          currentId: h,
          onSelect: (x) => {
            p(x), f(!1);
          }
        }
      ) }),
      c?.kind === "poem" && /* @__PURE__ */ r.jsx(J, { poem: c }),
      c?.kind === "translation" && /* @__PURE__ */ r.jsx(C, { poem: c }),
      i && c && /* @__PURE__ */ r.jsx(me, { poemTitle: c.title })
    ] }),
    /* @__PURE__ */ r.jsx(
      "button",
      {
        className: "mobile-nav-toggle",
        onClick: () => f((x) => !x),
        children: j ? "CLOSE" : "CONTENTS"
      }
    )
  ] });
}
function he(t) {
  const [n, a] = b(
    t.linearOrder[0]
  ), l = n ? t.poemsById[n] ?? null : null;
  return {
    // For navigation: pass IDs, not poems
    poems: t.linearOrder,
    // For rendering
    currentPoem: l,
    currentId: n,
    // Selection
    selectPoem: a
  };
}
function Re({ readingModel: t, searchIndex: n, showWorkshop: a = !0 }) {
  if (!t)
    throw new Error("Reader requires a readingModel prop");
  if (!n)
    throw new Error("Reader requires a searchIndex prop");
  const {
    currentId: l,
    currentPoem: o,
    selectPoem: c
  } = he(t);
  return /* @__PURE__ */ r.jsx(
    fe,
    {
      title: t.title,
      description: t.description,
      sections: t.sections,
      poemsById: t.poemsById,
      searchIndex: n,
      currentId: l,
      currentPoem: o,
      selectPoem: c,
      showWorkshop: a
    }
  );
}
function be({ readingModel: t }) {
  const { id: n } = B();
  if (!n) return null;
  const a = t.poemsById[n];
  return a ? /* @__PURE__ */ r.jsxs("main", { className: "single-poem", children: [
    /* @__PURE__ */ r.jsx("header", { className: "single-poem-header", children: /* @__PURE__ */ r.jsx(_, { className: "reader-back-link", to: "/explore", children: "← Back to Explore" }) }),
    a.kind === "poem" && /* @__PURE__ */ r.jsx(J, { poem: a }),
    a.kind === "translation" && /* @__PURE__ */ r.jsx(C, { poem: a })
  ] }) : null;
}
function _e({ readingModel: t }) {
  const { id: n } = B();
  if (!n) return null;
  const a = t.poemsById[n];
  return !a || a.kind !== "translation" ? null : /* @__PURE__ */ r.jsxs("main", { className: "single-poem", children: [
    /* @__PURE__ */ r.jsx("header", { className: "single-poem-header", children: /* @__PURE__ */ r.jsx(_, { className: "reader-back-link", to: "/explore", children: "← Back to Explore" }) }),
    /* @__PURE__ */ r.jsx(C, { poem: a })
  ] });
}
function pe({
  motifs: t,
  activeMotif: n,
  onSelect: a
}) {
  return /* @__PURE__ */ r.jsx("section", { className: "motifs-page", children: /* @__PURE__ */ r.jsxs("div", { className: "motifs-card", children: [
    /* @__PURE__ */ r.jsx("h2", { className: "motifs-heading", children: "R E C U R R I N G" }),
    /* @__PURE__ */ r.jsx("div", { className: "motifs-row", children: t.map((l) => {
      const o = n === l.term;
      return /* @__PURE__ */ r.jsxs(
        "button",
        {
          className: o ? "motif-item motif-item--active" : "motif-item",
          onClick: () => a(o ? null : l.term),
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "motif-term", children: l.term }),
            /* @__PURE__ */ r.jsx("span", { className: "motif-count", children: l.poemCount })
          ]
        },
        l.term
      );
    }) })
  ] }) });
}
function xe({ poems: t, activeMotif: n }) {
  return /* @__PURE__ */ r.jsx("div", { className: "motif-results", children: n ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("h3", { className: "motif-results-heading", children: [
      "Poems for “",
      n,
      "”"
    ] }),
    t.length === 0 ? /* @__PURE__ */ r.jsx("p", { className: "motif-empty", children: "No poems found." }) : /* @__PURE__ */ r.jsx("ul", { className: "motif-poem-list", children: t.map((a) => /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsx(_, { to: `/poem/${a.id}`, className: "motif-poem-link", children: a.title }) }, a.id)) })
  ] }) : /* @__PURE__ */ r.jsx("p", { className: "motif-empty", children: "Select a motif to see poems." }) });
}
function je({ terms: t }) {
  return /* @__PURE__ */ r.jsx("div", { className: "explore-texture", children: t.map((n, a) => /* @__PURE__ */ r.jsx("span", { className: "texture-word", children: n }, `${n}-${a}`)) });
}
const ve = [
  "the",
  "words",
  "we",
  "carry",
  "there",
  "found",
  "light",
  "day",
  "life",
  "hand",
  "eyes",
  "night",
  "heart",
  "love",
  "world",
  "dream",
  "away",
  "voice",
  "long",
  "mind",
  "time"
];
function ke({ readingModel: t, motifStats: n }) {
  const a = n.texture.map((i) => i.term);
  a.length === 0 && a.push(...ve);
  const l = Array(120).fill(a).flat(), [o, c] = b(null), h = n.terms.find((i) => i.term === o) ?? null, p = h ? h.poemIds.map((i) => t.poemsById[i]).filter((i) => !!i).map((i) => ({
    id: i.id,
    title: i.title
  })) : [];
  return /* @__PURE__ */ r.jsxs("main", { className: "explore-root", children: [
    /* @__PURE__ */ r.jsx(je, { terms: l }),
    /* @__PURE__ */ r.jsx("header", { className: "explore-header", children: /* @__PURE__ */ r.jsx(_, { className: "reader-back-link", to: "/", children: "← Back to Reader" }) }),
    /* @__PURE__ */ r.jsx("div", { className: "explore-separator" }),
    /* @__PURE__ */ r.jsx("div", { className: "explore-card explore-content", children: /* @__PURE__ */ r.jsx(
      pe,
      {
        motifs: n.terms,
        activeMotif: o,
        onSelect: c
      }
    ) }),
    /* @__PURE__ */ r.jsx("div", { className: "explore-separator" }),
    /* @__PURE__ */ r.jsx("div", { className: "explore-card explore-content", children: /* @__PURE__ */ r.jsx(
      xe,
      {
        poems: p,
        activeMotif: o
      }
    ) })
  ] });
}
export {
  ke as ExplorePage,
  Re as Reader,
  be as SinglePoemPage,
  _e as SingleTranslationPage
};
