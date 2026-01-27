import se, { useState as b, useMemo as oe } from "react";
import { Link as _, useParams as B } from "react-router-dom";
var g = { exports: {} }, E = {};
var q;
function le() {
  if (q) return E;
  q = 1;
  var t = /* @__PURE__ */ Symbol.for("react.transitional.element"), n = /* @__PURE__ */ Symbol.for("react.fragment");
  function a(o, i, u) {
    var f = null;
    if (u !== void 0 && (f = "" + u), i.key !== void 0 && (f = "" + i.key), "key" in i) {
      u = {};
      for (var p in i)
        p !== "key" && (u[p] = i[p]);
    } else u = i;
    return i = u.ref, {
      $$typeof: t,
      type: o,
      key: f,
      ref: i !== void 0 ? i : null,
      props: u
    };
  }
  return E.Fragment = n, E.jsx = a, E.jsxs = a, E;
}
var R = {};
var U;
function ie() {
  return U || (U = 1, process.env.NODE_ENV !== "production" && (function() {
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
        var c = s.error, d = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return c.call(
          s,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          d
        ), n(e);
      }
    }
    function o(e) {
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
    function i() {
      var e = O.A;
      return e === null ? null : e.getOwner();
    }
    function u() {
      return Error("react-stack-top-frame");
    }
    function f(e) {
      if ($.call(e, "key")) {
        var s = Object.getOwnPropertyDescriptor(e, "key").get;
        if (s && s.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function p(e, s) {
      function c() {
        Y || (Y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          s
        ));
      }
      c.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: c,
        configurable: !0
      });
    }
    function l() {
      var e = t(this.type);
      return L[e] || (L[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function j(e, s, c, d, T, P) {
      var m = c.ref;
      return e = {
        $$typeof: I,
        type: e,
        key: s,
        props: c,
        _owner: d
      }, (m !== void 0 ? m : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: l
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
    function h(e, s, c, d, T, P) {
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
        d = 0 < v.length ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}", W[m + d] || (v = 0 < v.length ? "{" + v.join(": ..., ") + ": ...}" : "{}", console.error(
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
        ), W[m + d] = !0);
      }
      if (m = null, c !== void 0 && (a(c), m = "" + c), f(s) && (a(s.key), m = "" + s.key), "key" in s) {
        c = {};
        for (var A in s)
          A !== "key" && (c[A] = s[A]);
      } else c = s;
      return m && p(
        c,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), j(
        e,
        m,
        c,
        i(),
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
    var k = se, I = /* @__PURE__ */ Symbol.for("react.transitional.element"), V = /* @__PURE__ */ Symbol.for("react.portal"), S = /* @__PURE__ */ Symbol.for("react.fragment"), z = /* @__PURE__ */ Symbol.for("react.strict_mode"), G = /* @__PURE__ */ Symbol.for("react.profiler"), X = /* @__PURE__ */ Symbol.for("react.consumer"), H = /* @__PURE__ */ Symbol.for("react.context"), Q = /* @__PURE__ */ Symbol.for("react.forward_ref"), Z = /* @__PURE__ */ Symbol.for("react.suspense"), K = /* @__PURE__ */ Symbol.for("react.suspense_list"), ee = /* @__PURE__ */ Symbol.for("react.memo"), y = /* @__PURE__ */ Symbol.for("react.lazy"), re = /* @__PURE__ */ Symbol.for("react.activity"), te = /* @__PURE__ */ Symbol.for("react.client.reference"), O = k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = Object.prototype.hasOwnProperty, ne = Array.isArray, w = console.createTask ? console.createTask : function() {
      return null;
    };
    k = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var Y, L = {}, F = k.react_stack_bottom_frame.bind(
      k,
      u
    )(), M = w(o(u)), W = {};
    R.Fragment = S, R.jsx = function(e, s, c) {
      var d = 1e4 > O.recentlyCreatedOwnerStacks++;
      return h(
        e,
        s,
        c,
        !1,
        d ? Error("react-stack-top-frame") : F,
        d ? w(o(e)) : M
      );
    }, R.jsxs = function(e, s, c) {
      var d = 1e4 > O.recentlyCreatedOwnerStacks++;
      return h(
        e,
        s,
        c,
        !0,
        d ? Error("react-stack-top-frame") : F,
        d ? w(o(e)) : M
      );
    };
  })()), R;
}
var D;
function ce() {
  return D || (D = 1, process.env.NODE_ENV === "production" ? g.exports = le() : g.exports = ie()), g.exports;
}
var r = ce();
function ue(t, n, a) {
  const [o, i] = b(""), u = oe(() => {
    if (!o.trim())
      return t.map((l) => n[l]).filter(Boolean);
    const f = o.toLowerCase(), p = a.poems.filter(
      (l) => l.title.toLowerCase().includes(f) || l.text.toLowerCase().includes(f)
    ).map((l) => l.id);
    return t.filter((l) => p.includes(l)).map((l) => n[l]).filter(Boolean);
  }, [o, t, n]);
  return {
    query: o,
    setQuery: i,
    results: u,
    isSearching: o.trim().length > 0
  };
}
function de({
  sections: t,
  poemsById: n,
  searchIndex: a,
  currentId: o,
  onSelect: i
}) {
  const u = t.flatMap((h) => h.poemIds), { query: f, setQuery: p, results: l, isSearching: j } = ue(u, n, a);
  return /* @__PURE__ */ r.jsxs("nav", { children: [
    /* @__PURE__ */ r.jsx("h3", { children: j ? "RESULTS" : "POEMS" }),
    /* @__PURE__ */ r.jsx(
      "input",
      {
        className: "reader-search",
        type: "search",
        placeholder: "Search…",
        value: f,
        onChange: (h) => p(h.target.value),
        "aria-label": "Search poems"
      }
    ),
    j && /* @__PURE__ */ r.jsx("ul", { className: "reader-nav-list", children: l.map((h) => /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsx(
      "button",
      {
        className: h.id === o ? "reader-nav-item active" : "reader-nav-item",
        onClick: () => i(h.id),
        children: h.title
      }
    ) }, h.id)) }),
    !j && t.map((h) => /* @__PURE__ */ r.jsxs("div", { className: "reader-nav-section", children: [
      /* @__PURE__ */ r.jsx("h4", { className: "reader-nav-section-title", children: h.title }),
      /* @__PURE__ */ r.jsx("ul", { className: "reader-nav-list", children: h.poemIds.map((x) => {
        const N = n[x];
        return N ? /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsx(
          "button",
          {
            className: x === o ? "reader-nav-item active" : "reader-nav-item",
            onClick: () => i(x),
            children: N.title
          }
        ) }, x) : null;
      }) })
    ] }, h.id)),
    l.length === 0 && j && /* @__PURE__ */ r.jsx("div", { className: "reader-empty", children: "No poems match this search." }),
    /* @__PURE__ */ r.jsx("div", { className: "reader-nav-footer", children: /* @__PURE__ */ r.jsx(_, { className: "reader-nav-explore", to: "/explore", children: "EXPLORE" }) })
  ] });
}
function J({ poem: t }) {
  return t ? /* @__PURE__ */ r.jsx("main", { className: "reader-poem", children: /* @__PURE__ */ r.jsxs("div", { className: "reader-poem-inner", children: [
    /* @__PURE__ */ r.jsx("h1", { children: t.title }),
    /* @__PURE__ */ r.jsx("pre", { children: t.content })
  ] }) }) : null;
}
function me({ poemTitle: t }) {
  const [n, a] = b(""), o = n.trim().length > 0, i = t ? `mailto:feedback@yourdomain.com?subject=${encodeURIComponent(
    `Workshop notes: ${t}`
  )}&body=${encodeURIComponent(n)}` : "";
  return /* @__PURE__ */ r.jsxs("aside", { className: "workshop-panel", children: [
    /* @__PURE__ */ r.jsx("h3", { children: "WORKSHOP NOTES" }),
    /* @__PURE__ */ r.jsx("p", { className: "workshop-hint", children: "Thoughts, questions, or line-level notes." }),
    /* @__PURE__ */ r.jsx(
      "textarea",
      {
        value: n,
        onChange: (u) => a(u.target.value),
        placeholder: "Write your notes here…"
      }
    ),
    /* @__PURE__ */ r.jsx(
      "a",
      {
        className: `workshop-send ${o ? "" : "disabled"}`,
        href: o ? i : void 0,
        "aria-disabled": !o,
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
  poemsById: t,
  sections: n,
  searchIndex: a,
  currentPoem: o,
  currentId: i,
  selectPoem: u
}) {
  const [f, p] = b(!1);
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("div", { className: "reader", children: [
      /* @__PURE__ */ r.jsx("aside", { className: `reader-nav ${f ? "reader-nav--open" : ""}`, children: /* @__PURE__ */ r.jsx(
        de,
        {
          poemsById: t,
          sections: n,
          searchIndex: a,
          currentId: i,
          onSelect: (l) => {
            u(l), p(!1);
          }
        }
      ) }),
      o?.kind === "poem" && /* @__PURE__ */ r.jsx(J, { poem: o }),
      o?.kind === "translation" && /* @__PURE__ */ r.jsx(C, { poem: o }),
      o && /* @__PURE__ */ r.jsx(me, { poemTitle: o.title })
    ] }),
    /* @__PURE__ */ r.jsx(
      "button",
      {
        className: "mobile-nav-toggle",
        onClick: () => p((l) => !l),
        children: f ? "CLOSE" : "CONTENTS"
      }
    )
  ] });
}
function he(t) {
  const [n, a] = b(
    t.linearOrder[0]
  ), o = n ? t.poemsById[n] ?? null : null;
  return {
    // For navigation: pass IDs, not poems
    poems: t.linearOrder,
    // For rendering
    currentPoem: o,
    currentId: n,
    // Selection
    selectPoem: a
  };
}
function Re({ readingModel: t, searchIndex: n }) {
  if (!t)
    throw new Error("Reader requires a readingModel prop");
  if (!n)
    throw new Error("Reader requires a searchIndex prop");
  const {
    currentId: a,
    currentPoem: o,
    selectPoem: i
  } = he(t);
  return /* @__PURE__ */ r.jsx(
    fe,
    {
      sections: t.sections,
      poemsById: t.poemsById,
      searchIndex: n,
      currentId: a,
      currentPoem: o,
      selectPoem: i
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
    /* @__PURE__ */ r.jsx("div", { className: "motifs-row", children: t.map((o) => {
      const i = n === o.term;
      return /* @__PURE__ */ r.jsxs(
        "button",
        {
          className: i ? "motif-item motif-item--active" : "motif-item",
          onClick: () => a(i ? null : o.term),
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "motif-term", children: o.term }),
            /* @__PURE__ */ r.jsx("span", { className: "motif-count", children: o.poemCount })
          ]
        },
        o.term
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
  const a = n.texture.map((l) => l.term);
  a.length === 0 && a.push(...ve);
  const o = Array(120).fill(a).flat(), [i, u] = b(null), f = n.terms.find((l) => l.term === i) ?? null, p = f ? f.poemIds.map((l) => t.poemsById[l]).filter((l) => !!l).map((l) => ({
    id: l.id,
    title: l.title
  })) : [];
  return /* @__PURE__ */ r.jsxs("main", { className: "explore-root", children: [
    /* @__PURE__ */ r.jsx(je, { terms: o }),
    /* @__PURE__ */ r.jsx("header", { className: "explore-header", children: /* @__PURE__ */ r.jsx(_, { className: "reader-back-link", to: "/explore", children: "← Back to Explore" }) }),
    /* @__PURE__ */ r.jsx("div", { className: "explore-separator" }),
    /* @__PURE__ */ r.jsx("div", { className: "explore-card explore-content", children: /* @__PURE__ */ r.jsx(
      pe,
      {
        motifs: n.terms,
        activeMotif: i,
        onSelect: u
      }
    ) }),
    /* @__PURE__ */ r.jsx("div", { className: "explore-separator" }),
    /* @__PURE__ */ r.jsx("div", { className: "explore-card explore-content", children: /* @__PURE__ */ r.jsx(
      xe,
      {
        poems: p,
        activeMotif: i
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
