import Vt, { useState as $e, useMemo as zr } from "react";
import { Link as Ye, useParams as qt } from "react-router-dom";
function Ht(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ge = { exports: {} }, Oe = {};
var Kn;
function Dr() {
  if (Kn) return Oe;
  Kn = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), n = /* @__PURE__ */ Symbol.for("react.fragment");
  function t(r, i, l) {
    var o = null;
    if (l !== void 0 && (o = "" + l), i.key !== void 0 && (o = "" + i.key), "key" in i) {
      l = {};
      for (var a in i)
        a !== "key" && (l[a] = i[a]);
    } else l = i;
    return i = l.ref, {
      $$typeof: e,
      type: r,
      key: o,
      ref: i !== void 0 ? i : null,
      props: l
    };
  }
  return Oe.Fragment = n, Oe.jsx = t, Oe.jsxs = t, Oe;
}
var je = {};
var Zn;
function Fr() {
  return Zn || (Zn = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(m) {
      if (m == null) return null;
      if (typeof m == "function")
        return m.$$typeof === A ? null : m.displayName || m.name || null;
      if (typeof m == "string") return m;
      switch (m) {
        case I:
          return "Fragment";
        case O:
          return "Profiler";
        case k:
          return "StrictMode";
        case x:
          return "Suspense";
        case M:
          return "SuspenseList";
        case V:
          return "Activity";
      }
      if (typeof m == "object")
        switch (typeof m.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), m.$$typeof) {
          case v:
            return "Portal";
          case H:
            return m.displayName || "Context";
          case P:
            return (m._context.displayName || "Context") + ".Consumer";
          case Y:
            var w = m.render;
            return m = m.displayName, m || (m = w.displayName || w.name || "", m = m !== "" ? "ForwardRef(" + m + ")" : "ForwardRef"), m;
          case W:
            return w = m.displayName || null, w !== null ? w : e(m.type) || "Memo";
          case F:
            w = m._payload, m = m._init;
            try {
              return e(m(w));
            } catch {
            }
        }
      return null;
    }
    function n(m) {
      return "" + m;
    }
    function t(m) {
      try {
        n(m);
        var w = !1;
      } catch {
        w = !0;
      }
      if (w) {
        w = console;
        var h = w.error, N = typeof Symbol == "function" && Symbol.toStringTag && m[Symbol.toStringTag] || m.constructor.name || "Object";
        return h.call(
          w,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          N
        ), n(m);
      }
    }
    function r(m) {
      if (m === I) return "<>";
      if (typeof m == "object" && m !== null && m.$$typeof === F)
        return "<...>";
      try {
        var w = e(m);
        return w ? "<" + w + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var m = _.A;
      return m === null ? null : m.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function o(m) {
      if (q.call(m, "key")) {
        var w = Object.getOwnPropertyDescriptor(m, "key").get;
        if (w && w.isReactWarning) return !1;
      }
      return m.key !== void 0;
    }
    function a(m, w) {
      function h() {
        U || (U = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          w
        ));
      }
      h.isReactWarning = !0, Object.defineProperty(m, "key", {
        get: h,
        configurable: !0
      });
    }
    function c() {
      var m = e(this.type);
      return Q[m] || (Q[m] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), m = this.props.ref, m !== void 0 ? m : null;
    }
    function u(m, w, h, N, te, K) {
      var L = h.ref;
      return m = {
        $$typeof: E,
        type: m,
        key: w,
        props: h,
        _owner: N
      }, (L !== void 0 ? L : null) !== null ? Object.defineProperty(m, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(m, "ref", { enumerable: !1, value: null }), m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(m, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(m, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: te
      }), Object.defineProperty(m, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: K
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    }
    function s(m, w, h, N, te, K) {
      var L = w.children;
      if (L !== void 0)
        if (N)
          if (R(L)) {
            for (N = 0; N < L.length; N++)
              f(L[N]);
            Object.freeze && Object.freeze(L);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(L);
      if (q.call(w, "key")) {
        L = e(m);
        var Z = Object.keys(w).filter(function(me) {
          return me !== "key";
        });
        N = 0 < Z.length ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}", d[L + N] || (Z = 0 < Z.length ? "{" + Z.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          N,
          L,
          Z,
          L
        ), d[L + N] = !0);
      }
      if (L = null, h !== void 0 && (t(h), L = "" + h), o(w) && (t(w.key), L = "" + w.key), "key" in w) {
        h = {};
        for (var le in w)
          le !== "key" && (h[le] = w[le]);
      } else h = w;
      return L && a(
        h,
        typeof m == "function" ? m.displayName || m.name || "Unknown" : m
      ), u(
        m,
        L,
        h,
        i(),
        te,
        K
      );
    }
    function f(m) {
      g(m) ? m._store && (m._store.validated = 1) : typeof m == "object" && m !== null && m.$$typeof === F && (m._payload.status === "fulfilled" ? g(m._payload.value) && m._payload.value._store && (m._payload.value._store.validated = 1) : m._store && (m._store.validated = 1));
    }
    function g(m) {
      return typeof m == "object" && m !== null && m.$$typeof === E;
    }
    var p = Vt, E = /* @__PURE__ */ Symbol.for("react.transitional.element"), v = /* @__PURE__ */ Symbol.for("react.portal"), I = /* @__PURE__ */ Symbol.for("react.fragment"), k = /* @__PURE__ */ Symbol.for("react.strict_mode"), O = /* @__PURE__ */ Symbol.for("react.profiler"), P = /* @__PURE__ */ Symbol.for("react.consumer"), H = /* @__PURE__ */ Symbol.for("react.context"), Y = /* @__PURE__ */ Symbol.for("react.forward_ref"), x = /* @__PURE__ */ Symbol.for("react.suspense"), M = /* @__PURE__ */ Symbol.for("react.suspense_list"), W = /* @__PURE__ */ Symbol.for("react.memo"), F = /* @__PURE__ */ Symbol.for("react.lazy"), V = /* @__PURE__ */ Symbol.for("react.activity"), A = /* @__PURE__ */ Symbol.for("react.client.reference"), _ = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = Object.prototype.hasOwnProperty, R = Array.isArray, T = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(m) {
        return m();
      }
    };
    var U, Q = {}, ne = p.react_stack_bottom_frame.bind(
      p,
      l
    )(), ie = T(r(l)), d = {};
    je.Fragment = I, je.jsx = function(m, w, h) {
      var N = 1e4 > _.recentlyCreatedOwnerStacks++;
      return s(
        m,
        w,
        h,
        !1,
        N ? Error("react-stack-top-frame") : ne,
        N ? T(r(m)) : ie
      );
    }, je.jsxs = function(m, w, h) {
      var N = 1e4 > _.recentlyCreatedOwnerStacks++;
      return s(
        m,
        w,
        h,
        !0,
        N ? Error("react-stack-top-frame") : ne,
        N ? T(r(m)) : ie
      );
    };
  })()), je;
}
var et;
function Mr() {
  return et || (et = 1, process.env.NODE_ENV === "production" ? Ge.exports = Dr() : Ge.exports = Fr()), Ge.exports;
}
var S = Mr();
function Br(e, n, t) {
  const [r, i] = $e(""), l = zr(() => {
    if (!r.trim())
      return e.map((c) => n[c]).filter(Boolean);
    const o = r.toLowerCase(), a = t.poems.filter(
      (c) => c.title.toLowerCase().includes(o) || c.text.toLowerCase().includes(o)
    ).map((c) => c.id);
    return e.filter((c) => a.includes(c)).map((c) => n[c]).filter(Boolean);
  }, [r, e, n]);
  return {
    query: r,
    setQuery: i,
    results: l,
    isSearching: r.trim().length > 0
  };
}
function Ur({
  sections: e,
  poemsById: n,
  searchIndex: t,
  currentId: r,
  onSelect: i,
  showExplore: l = !0
}) {
  const o = e.flatMap((f) => f.poemIds), { query: a, setQuery: c, results: u, isSearching: s } = Br(o, n, t);
  return /* @__PURE__ */ S.jsxs("nav", { children: [
    s && /* @__PURE__ */ S.jsx("h3", { children: "RESULTS" }),
    /* @__PURE__ */ S.jsx(
      "input",
      {
        className: "reader-search",
        type: "search",
        placeholder: "Search…",
        value: a,
        onChange: (f) => c(f.target.value),
        "aria-label": "Search poems"
      }
    ),
    s && /* @__PURE__ */ S.jsx("ul", { className: "reader-nav-list", children: u.map((f) => /* @__PURE__ */ S.jsx("li", { children: /* @__PURE__ */ S.jsx(
      "button",
      {
        className: f.id === r ? "reader-nav-item active" : "reader-nav-item",
        onClick: () => i(f.id),
        children: f.title
      }
    ) }, f.id)) }),
    !s && e.map((f) => /* @__PURE__ */ S.jsxs("div", { className: "reader-nav-section", children: [
      /* @__PURE__ */ S.jsx("h4", { className: "reader-nav-section-title", children: f.title }),
      /* @__PURE__ */ S.jsx("ul", { className: "reader-nav-list", children: f.poemIds.map((g) => {
        const p = n[g];
        return p ? /* @__PURE__ */ S.jsx("li", { children: /* @__PURE__ */ S.jsx(
          "button",
          {
            className: g === r ? "reader-nav-item active" : "reader-nav-item",
            onClick: () => i(g),
            children: p.title
          }
        ) }, g) : null;
      }) })
    ] }, f.id)),
    u.length === 0 && s && /* @__PURE__ */ S.jsx("div", { className: "reader-empty", children: "No poems match this search." }),
    /* @__PURE__ */ S.jsx("div", { className: "reader-nav-footer", children: /* @__PURE__ */ S.jsx("div", { className: "reader-meta", children: l && /* @__PURE__ */ S.jsx(Ye, { className: "reader-meta-link", to: "/explore", children: "Explore Patterns in this collection" }) }) })
  ] });
}
function $t({ poem: e }) {
  return e ? /* @__PURE__ */ S.jsx("main", { className: "reader-poem", children: /* @__PURE__ */ S.jsxs("div", { className: "reader-poem-inner", children: [
    /* @__PURE__ */ S.jsx("h1", { children: e.title }),
    /* @__PURE__ */ S.jsx("pre", { children: e.content })
  ] }) }) : null;
}
function Vr({ poemTitle: e }) {
  const [n, t] = $e(""), r = n.trim().length > 0, i = e ? `mailto:feedback@yourdomain.com?subject=${encodeURIComponent(
    `Workshop notes: ${e}`
  )}&body=${encodeURIComponent(n)}` : "";
  return /* @__PURE__ */ S.jsxs("aside", { className: "workshop-panel", children: [
    /* @__PURE__ */ S.jsx("h3", { children: "WORKSHOP NOTES" }),
    /* @__PURE__ */ S.jsx("p", { className: "workshop-hint", children: "Thoughts, questions, or line-level notes." }),
    /* @__PURE__ */ S.jsx(
      "textarea",
      {
        value: n,
        onChange: (l) => t(l.target.value),
        placeholder: "Write your notes here…"
      }
    ),
    /* @__PURE__ */ S.jsx(
      "a",
      {
        className: `workshop-send ${r ? "" : "disabled"}`,
        href: r ? i : void 0,
        "aria-disabled": !r,
        children: "Send notes"
      }
    )
  ] });
}
function qr(e, n) {
  const t = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (t.padRight ? " " : "") + "," + (t.padLeft === !1 ? "" : " ")
  ).trim();
}
const Hr = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, $r = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Yr = {};
function nt(e, n) {
  return (Yr.jsx ? $r : Hr).test(e);
}
const Wr = /[ \t\n\f\r]/g;
function Xr(e) {
  return typeof e == "object" ? e.type === "text" ? tt(e.value) : !1 : tt(e);
}
function tt(e) {
  return e.replace(Wr, "") === "";
}
class We {
  /**
   * @param {SchemaType['property']} property
   *   Property.
   * @param {SchemaType['normal']} normal
   *   Normal.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Schema.
   */
  constructor(n, t, r) {
    this.normal = t, this.property = n, r && (this.space = r);
  }
}
We.prototype.normal = {};
We.prototype.property = {};
We.prototype.space = void 0;
function Yt(e, n) {
  const t = {}, r = {};
  for (const i of e)
    Object.assign(t, i.property), Object.assign(r, i.normal);
  return new We(t, r, n);
}
function Sn(e) {
  return e.toLowerCase();
}
class ue {
  /**
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @returns
   *   Info.
   */
  constructor(n, t) {
    this.attribute = t, this.property = n;
  }
}
ue.prototype.attribute = "";
ue.prototype.booleanish = !1;
ue.prototype.boolean = !1;
ue.prototype.commaOrSpaceSeparated = !1;
ue.prototype.commaSeparated = !1;
ue.prototype.defined = !1;
ue.prototype.mustUseProperty = !1;
ue.prototype.number = !1;
ue.prototype.overloadedBoolean = !1;
ue.prototype.property = "";
ue.prototype.spaceSeparated = !1;
ue.prototype.space = void 0;
let Jr = 0;
const D = Ee(), ee = Ee(), En = Ee(), b = Ee(), J = Ee(), Ie = Ee(), ce = Ee();
function Ee() {
  return 2 ** ++Jr;
}
const Cn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: D,
  booleanish: ee,
  commaOrSpaceSeparated: ce,
  commaSeparated: Ie,
  number: b,
  overloadedBoolean: En,
  spaceSeparated: J
}, Symbol.toStringTag, { value: "Module" })), un = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(Cn)
);
class Nn extends ue {
  /**
   * @constructor
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @param {number | null | undefined} [mask]
   *   Mask.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Info.
   */
  constructor(n, t, r, i) {
    let l = -1;
    if (super(n, t), rt(this, "space", i), typeof r == "number")
      for (; ++l < un.length; ) {
        const o = un[l];
        rt(this, un[l], (r & Cn[o]) === Cn[o]);
      }
  }
}
Nn.prototype.defined = !0;
function rt(e, n, t) {
  t && (e[n] = t);
}
function _e(e) {
  const n = {}, t = {};
  for (const [r, i] of Object.entries(e.properties)) {
    const l = new Nn(
      r,
      e.transform(e.attributes || {}, r),
      i,
      e.space
    );
    e.mustUseProperty && e.mustUseProperty.includes(r) && (l.mustUseProperty = !0), n[r] = l, t[Sn(r)] = r, t[Sn(l.attribute)] = r;
  }
  return new We(n, t, e.space);
}
const Wt = _e({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: ee,
    ariaAutoComplete: null,
    ariaBusy: ee,
    ariaChecked: ee,
    ariaColCount: b,
    ariaColIndex: b,
    ariaColSpan: b,
    ariaControls: J,
    ariaCurrent: null,
    ariaDescribedBy: J,
    ariaDetails: null,
    ariaDisabled: ee,
    ariaDropEffect: J,
    ariaErrorMessage: null,
    ariaExpanded: ee,
    ariaFlowTo: J,
    ariaGrabbed: ee,
    ariaHasPopup: null,
    ariaHidden: ee,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: J,
    ariaLevel: b,
    ariaLive: null,
    ariaModal: ee,
    ariaMultiLine: ee,
    ariaMultiSelectable: ee,
    ariaOrientation: null,
    ariaOwns: J,
    ariaPlaceholder: null,
    ariaPosInSet: b,
    ariaPressed: ee,
    ariaReadOnly: ee,
    ariaRelevant: null,
    ariaRequired: ee,
    ariaRoleDescription: J,
    ariaRowCount: b,
    ariaRowIndex: b,
    ariaRowSpan: b,
    ariaSelected: ee,
    ariaSetSize: b,
    ariaSort: null,
    ariaValueMax: b,
    ariaValueMin: b,
    ariaValueNow: b,
    ariaValueText: null,
    role: null
  },
  transform(e, n) {
    return n === "role" ? n : "aria-" + n.slice(4).toLowerCase();
  }
});
function Xt(e, n) {
  return n in e ? e[n] : n;
}
function Jt(e, n) {
  return Xt(e, n.toLowerCase());
}
const Gr = _e({
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: Ie,
    acceptCharset: J,
    accessKey: J,
    action: null,
    allow: null,
    allowFullScreen: D,
    allowPaymentRequest: D,
    allowUserMedia: D,
    alt: null,
    as: null,
    async: D,
    autoCapitalize: null,
    autoComplete: J,
    autoFocus: D,
    autoPlay: D,
    blocking: J,
    capture: null,
    charSet: null,
    checked: D,
    cite: null,
    className: J,
    cols: b,
    colSpan: null,
    content: null,
    contentEditable: ee,
    controls: D,
    controlsList: J,
    coords: b | Ie,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: D,
    defer: D,
    dir: null,
    dirName: null,
    disabled: D,
    download: En,
    draggable: ee,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: D,
    formTarget: null,
    headers: J,
    height: b,
    hidden: En,
    high: b,
    href: null,
    hrefLang: null,
    htmlFor: J,
    httpEquiv: J,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: D,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: D,
    itemId: null,
    itemProp: J,
    itemRef: J,
    itemScope: D,
    itemType: J,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: D,
    low: b,
    manifest: null,
    max: null,
    maxLength: b,
    media: null,
    method: null,
    min: null,
    minLength: b,
    multiple: D,
    muted: D,
    name: null,
    nonce: null,
    noModule: D,
    noValidate: D,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforeMatch: null,
    onBeforePrint: null,
    onBeforeToggle: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onScrollEnd: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: D,
    optimum: b,
    pattern: null,
    ping: J,
    placeholder: null,
    playsInline: D,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: D,
    referrerPolicy: null,
    rel: J,
    required: D,
    reversed: D,
    rows: b,
    rowSpan: b,
    sandbox: J,
    scope: null,
    scoped: D,
    seamless: D,
    selected: D,
    shadowRootClonable: D,
    shadowRootDelegatesFocus: D,
    shadowRootMode: null,
    shape: null,
    size: b,
    sizes: null,
    slot: null,
    span: b,
    spellCheck: ee,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: b,
    step: null,
    style: null,
    tabIndex: b,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: D,
    useMap: null,
    value: ee,
    width: b,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: J,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: b,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: b,
    // `<body>`
    cellPadding: null,
    // `<table>`
    cellSpacing: null,
    // `<table>`
    char: null,
    // Several table elements. When `align=char`, sets the character to align on
    charOff: null,
    // Several table elements. When `char`, offsets the alignment
    classId: null,
    // `<object>`
    clear: null,
    // `<br>`. Use CSS `clear` instead
    code: null,
    // `<object>`
    codeBase: null,
    // `<object>`
    codeType: null,
    // `<object>`
    color: null,
    // `<font>` and `<hr>`. Use CSS instead
    compact: D,
    // Lists. Use CSS to reduce space between items instead
    declare: D,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: b,
    // `<img>` and `<object>`
    leftMargin: b,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: b,
    // `<body>`
    marginWidth: b,
    // `<body>`
    noResize: D,
    // `<frame>`
    noHref: D,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: D,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: D,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: b,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: ee,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: b,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: b,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: D,
    disableRemotePlayback: D,
    prefix: null,
    property: null,
    results: b,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: Jt
}), Qr = _e({
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    transformOrigin: "transform-origin",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  properties: {
    about: ce,
    accentHeight: b,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: b,
    amplitude: b,
    arabicForm: null,
    ascent: b,
    attributeName: null,
    attributeType: null,
    azimuth: b,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: b,
    by: null,
    calcMode: null,
    capHeight: b,
    className: J,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: b,
    diffuseConstant: b,
    direction: null,
    display: null,
    dur: null,
    divisor: b,
    dominantBaseline: null,
    download: D,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: b,
    enableBackground: null,
    end: null,
    event: null,
    exponent: b,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: b,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: Ie,
    g2: Ie,
    glyphName: Ie,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: b,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: b,
    horizOriginX: b,
    horizOriginY: b,
    id: null,
    ideographic: b,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: b,
    k: b,
    k1: b,
    k2: b,
    k3: b,
    k4: b,
    kernelMatrix: ce,
    kernelUnitLength: null,
    keyPoints: null,
    // SEMI_COLON_SEPARATED
    keySplines: null,
    // SEMI_COLON_SEPARATED
    keyTimes: null,
    // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: b,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: b,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: b,
    overlineThickness: b,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: b,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: J,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: b,
    pointsAtY: b,
    pointsAtZ: b,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: ce,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: ce,
    rev: ce,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: ce,
    requiredFeatures: ce,
    requiredFonts: ce,
    requiredFormats: ce,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: b,
    specularExponent: b,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: b,
    strikethroughThickness: b,
    string: null,
    stroke: null,
    strokeDashArray: ce,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: b,
    strokeOpacity: b,
    strokeWidth: null,
    style: null,
    surfaceScale: b,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: ce,
    tabIndex: b,
    tableValues: null,
    target: null,
    targetX: b,
    targetY: b,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: ce,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: b,
    underlineThickness: b,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: b,
    values: null,
    vAlphabetic: b,
    vMathematical: b,
    vectorEffect: null,
    vHanging: b,
    vIdeographic: b,
    version: null,
    vertAdvY: b,
    vertOriginX: b,
    vertOriginY: b,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: b,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: Xt
}), Gt = _e({
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  },
  space: "xlink",
  transform(e, n) {
    return "xlink:" + n.slice(5).toLowerCase();
  }
}), Qt = _e({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: Jt
}), Kt = _e({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(e, n) {
    return "xml:" + n.slice(3).toLowerCase();
  }
}), Kr = {
  classId: "classID",
  dataType: "datatype",
  itemId: "itemID",
  strokeDashArray: "strokeDasharray",
  strokeDashOffset: "strokeDashoffset",
  strokeLineCap: "strokeLinecap",
  strokeLineJoin: "strokeLinejoin",
  strokeMiterLimit: "strokeMiterlimit",
  typeOf: "typeof",
  xLinkActuate: "xlinkActuate",
  xLinkArcRole: "xlinkArcrole",
  xLinkHref: "xlinkHref",
  xLinkRole: "xlinkRole",
  xLinkShow: "xlinkShow",
  xLinkTitle: "xlinkTitle",
  xLinkType: "xlinkType",
  xmlnsXLink: "xmlnsXlink"
}, Zr = /[A-Z]/g, it = /-[a-z]/g, ei = /^data[-\w.:]+$/i;
function ni(e, n) {
  const t = Sn(n);
  let r = n, i = ue;
  if (t in e.normal)
    return e.property[e.normal[t]];
  if (t.length > 4 && t.slice(0, 4) === "data" && ei.test(n)) {
    if (n.charAt(4) === "-") {
      const l = n.slice(5).replace(it, ri);
      r = "data" + l.charAt(0).toUpperCase() + l.slice(1);
    } else {
      const l = n.slice(4);
      if (!it.test(l)) {
        let o = l.replace(Zr, ti);
        o.charAt(0) !== "-" && (o = "-" + o), n = "data" + o;
      }
    }
    i = Nn;
  }
  return new i(r, n);
}
function ti(e) {
  return "-" + e.toLowerCase();
}
function ri(e) {
  return e.charAt(1).toUpperCase();
}
const ii = Yt([Wt, Gr, Gt, Qt, Kt], "html"), On = Yt([Wt, Qr, Gt, Qt, Kt], "svg");
function li(e) {
  return e.join(" ").trim();
}
var Te = {}, sn, lt;
function oi() {
  if (lt) return sn;
  lt = 1;
  var e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, n = /\n/g, t = /^\s*/, r = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, i = /^:\s*/, l = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, o = /^[;\s]*/, a = /^\s+|\s+$/g, c = `
`, u = "/", s = "*", f = "", g = "comment", p = "declaration";
  function E(I, k) {
    if (typeof I != "string")
      throw new TypeError("First argument must be a string");
    if (!I) return [];
    k = k || {};
    var O = 1, P = 1;
    function H(R) {
      var T = R.match(n);
      T && (O += T.length);
      var U = R.lastIndexOf(c);
      P = ~U ? R.length - U : P + R.length;
    }
    function Y() {
      var R = { line: O, column: P };
      return function(T) {
        return T.position = new x(R), F(), T;
      };
    }
    function x(R) {
      this.start = R, this.end = { line: O, column: P }, this.source = k.source;
    }
    x.prototype.content = I;
    function M(R) {
      var T = new Error(
        k.source + ":" + O + ":" + P + ": " + R
      );
      if (T.reason = R, T.filename = k.source, T.line = O, T.column = P, T.source = I, !k.silent) throw T;
    }
    function W(R) {
      var T = R.exec(I);
      if (T) {
        var U = T[0];
        return H(U), I = I.slice(U.length), T;
      }
    }
    function F() {
      W(t);
    }
    function V(R) {
      var T;
      for (R = R || []; T = A(); )
        T !== !1 && R.push(T);
      return R;
    }
    function A() {
      var R = Y();
      if (!(u != I.charAt(0) || s != I.charAt(1))) {
        for (var T = 2; f != I.charAt(T) && (s != I.charAt(T) || u != I.charAt(T + 1)); )
          ++T;
        if (T += 2, f === I.charAt(T - 1))
          return M("End of comment missing");
        var U = I.slice(2, T - 2);
        return P += 2, H(U), I = I.slice(T), P += 2, R({
          type: g,
          comment: U
        });
      }
    }
    function _() {
      var R = Y(), T = W(r);
      if (T) {
        if (A(), !W(i)) return M("property missing ':'");
        var U = W(l), Q = R({
          type: p,
          property: v(T[0].replace(e, f)),
          value: U ? v(U[0].replace(e, f)) : f
        });
        return W(o), Q;
      }
    }
    function q() {
      var R = [];
      V(R);
      for (var T; T = _(); )
        T !== !1 && (R.push(T), V(R));
      return R;
    }
    return F(), q();
  }
  function v(I) {
    return I ? I.replace(a, f) : f;
  }
  return sn = E, sn;
}
var ot;
function ai() {
  if (ot) return Te;
  ot = 1;
  var e = Te && Te.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(Te, "__esModule", { value: !0 }), Te.default = t;
  const n = e(oi());
  function t(r, i) {
    let l = null;
    if (!r || typeof r != "string")
      return l;
    const o = (0, n.default)(r), a = typeof i == "function";
    return o.forEach((c) => {
      if (c.type !== "declaration")
        return;
      const { property: u, value: s } = c;
      a ? i(u, s, c) : s && (l = l || {}, l[u] = s);
    }), l;
  }
  return Te;
}
var Le = {}, at;
function ui() {
  if (at) return Le;
  at = 1, Object.defineProperty(Le, "__esModule", { value: !0 }), Le.camelCase = void 0;
  var e = /^--[a-zA-Z0-9_-]+$/, n = /-([a-z])/g, t = /^[^-]+$/, r = /^-(webkit|moz|ms|o|khtml)-/, i = /^-(ms)-/, l = function(u) {
    return !u || t.test(u) || e.test(u);
  }, o = function(u, s) {
    return s.toUpperCase();
  }, a = function(u, s) {
    return "".concat(s, "-");
  }, c = function(u, s) {
    return s === void 0 && (s = {}), l(u) ? u : (u = u.toLowerCase(), s.reactCompat ? u = u.replace(i, a) : u = u.replace(r, a), u.replace(n, o));
  };
  return Le.camelCase = c, Le;
}
var ze, ut;
function si() {
  if (ut) return ze;
  ut = 1;
  var e = ze && ze.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  }, n = e(ai()), t = ui();
  function r(i, l) {
    var o = {};
    return !i || typeof i != "string" || (0, n.default)(i, function(a, c) {
      a && c && (o[(0, t.camelCase)(a, l)] = c);
    }), o;
  }
  return r.default = r, ze = r, ze;
}
var ci = si();
const fi = /* @__PURE__ */ Ht(ci), Zt = er("end"), jn = er("start");
function er(e) {
  return n;
  function n(t) {
    const r = t && t.position && t.position[e] || {};
    if (typeof r.line == "number" && r.line > 0 && typeof r.column == "number" && r.column > 0)
      return {
        line: r.line,
        column: r.column,
        offset: typeof r.offset == "number" && r.offset > -1 ? r.offset : void 0
      };
  }
}
function pi(e) {
  const n = jn(e), t = Zt(e);
  if (n && t)
    return { start: n, end: t };
}
function Ue(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? st(e.position) : "start" in e || "end" in e ? st(e) : "line" in e || "column" in e ? Tn(e) : "";
}
function Tn(e) {
  return ct(e && e.line) + ":" + ct(e && e.column);
}
function st(e) {
  return Tn(e && e.start) + "-" + Tn(e && e.end);
}
function ct(e) {
  return e && typeof e == "number" ? e : 1;
}
class re extends Error {
  /**
   * Create a message for `reason`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {Options | null | undefined} [options]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */
  // eslint-disable-next-line complexity
  constructor(n, t, r) {
    super(), typeof t == "string" && (r = t, t = void 0);
    let i = "", l = {}, o = !1;
    if (t && ("line" in t && "column" in t ? l = { place: t } : "start" in t && "end" in t ? l = { place: t } : "type" in t ? l = {
      ancestors: [t],
      place: t.position
    } : l = { ...t }), typeof n == "string" ? i = n : !l.cause && n && (o = !0, i = n.message, l.cause = n), !l.ruleId && !l.source && typeof r == "string") {
      const c = r.indexOf(":");
      c === -1 ? l.ruleId = r : (l.source = r.slice(0, c), l.ruleId = r.slice(c + 1));
    }
    if (!l.place && l.ancestors && l.ancestors) {
      const c = l.ancestors[l.ancestors.length - 1];
      c && (l.place = c.position);
    }
    const a = l.place && "start" in l.place ? l.place.start : l.place;
    this.ancestors = l.ancestors || void 0, this.cause = l.cause || void 0, this.column = a ? a.column : void 0, this.fatal = void 0, this.file = "", this.message = i, this.line = a ? a.line : void 0, this.name = Ue(l.place) || "1:1", this.place = l.place || void 0, this.reason = this.message, this.ruleId = l.ruleId || void 0, this.source = l.source || void 0, this.stack = o && l.cause && typeof l.cause.stack == "string" ? l.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
  }
}
re.prototype.file = "";
re.prototype.name = "";
re.prototype.reason = "";
re.prototype.message = "";
re.prototype.stack = "";
re.prototype.column = void 0;
re.prototype.line = void 0;
re.prototype.ancestors = void 0;
re.prototype.cause = void 0;
re.prototype.fatal = void 0;
re.prototype.place = void 0;
re.prototype.ruleId = void 0;
re.prototype.source = void 0;
const Ln = {}.hasOwnProperty, hi = /* @__PURE__ */ new Map(), mi = /[A-Z]/g, di = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), gi = /* @__PURE__ */ new Set(["td", "th"]), nr = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function yi(e, n) {
  if (!n || n.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const t = n.filePath || void 0;
  let r;
  if (n.development) {
    if (typeof n.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    r = Ti(t, n.jsxDEV);
  } else {
    if (typeof n.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof n.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    r = Ci(t, n.jsx, n.jsxs);
  }
  const i = {
    Fragment: n.Fragment,
    ancestors: [],
    components: n.components || {},
    create: r,
    elementAttributeNameCase: n.elementAttributeNameCase || "react",
    evaluater: n.createEvaluater ? n.createEvaluater() : void 0,
    filePath: t,
    ignoreInvalidStyle: n.ignoreInvalidStyle || !1,
    passKeys: n.passKeys !== !1,
    passNode: n.passNode || !1,
    schema: n.space === "svg" ? On : ii,
    stylePropertyNameCase: n.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: n.tableCellAlignToStyle !== !1
  }, l = tr(i, e, void 0);
  return l && typeof l != "string" ? l : i.create(
    e,
    i.Fragment,
    { children: l || void 0 },
    void 0
  );
}
function tr(e, n, t) {
  if (n.type === "element")
    return xi(e, n, t);
  if (n.type === "mdxFlowExpression" || n.type === "mdxTextExpression")
    return ki(e, n);
  if (n.type === "mdxJsxFlowElement" || n.type === "mdxJsxTextElement")
    return wi(e, n, t);
  if (n.type === "mdxjsEsm")
    return bi(e, n);
  if (n.type === "root")
    return Si(e, n, t);
  if (n.type === "text")
    return Ei(e, n);
}
function xi(e, n, t) {
  const r = e.schema;
  let i = r;
  n.tagName.toLowerCase() === "svg" && r.space === "html" && (i = On, e.schema = i), e.ancestors.push(n);
  const l = ir(e, n.tagName, !1), o = vi(e, n);
  let a = Dn(e, n);
  return di.has(n.tagName) && (a = a.filter(function(c) {
    return typeof c == "string" ? !Xr(c) : !0;
  })), rr(e, o, l, n), zn(o, a), e.ancestors.pop(), e.schema = r, e.create(n, l, o, t);
}
function ki(e, n) {
  if (n.data && n.data.estree && e.evaluater) {
    const r = n.data.estree.body[0];
    return r.type, /** @type {Child | undefined} */
    e.evaluater.evaluateExpression(r.expression);
  }
  He(e, n.position);
}
function bi(e, n) {
  if (n.data && n.data.estree && e.evaluater)
    return (
      /** @type {Child | undefined} */
      e.evaluater.evaluateProgram(n.data.estree)
    );
  He(e, n.position);
}
function wi(e, n, t) {
  const r = e.schema;
  let i = r;
  n.name === "svg" && r.space === "html" && (i = On, e.schema = i), e.ancestors.push(n);
  const l = n.name === null ? e.Fragment : ir(e, n.name, !0), o = Ii(e, n), a = Dn(e, n);
  return rr(e, o, l, n), zn(o, a), e.ancestors.pop(), e.schema = r, e.create(n, l, o, t);
}
function Si(e, n, t) {
  const r = {};
  return zn(r, Dn(e, n)), e.create(n, e.Fragment, r, t);
}
function Ei(e, n) {
  return n.value;
}
function rr(e, n, t, r) {
  typeof t != "string" && t !== e.Fragment && e.passNode && (n.node = r);
}
function zn(e, n) {
  if (n.length > 0) {
    const t = n.length > 1 ? n : n[0];
    t && (e.children = t);
  }
}
function Ci(e, n, t) {
  return r;
  function r(i, l, o, a) {
    const u = Array.isArray(o.children) ? t : n;
    return a ? u(l, o, a) : u(l, o);
  }
}
function Ti(e, n) {
  return t;
  function t(r, i, l, o) {
    const a = Array.isArray(l.children), c = jn(r);
    return n(
      i,
      l,
      o,
      a,
      {
        columnNumber: c ? c.column - 1 : void 0,
        fileName: e,
        lineNumber: c ? c.line : void 0
      },
      void 0
    );
  }
}
function vi(e, n) {
  const t = {};
  let r, i;
  for (i in n.properties)
    if (i !== "children" && Ln.call(n.properties, i)) {
      const l = Pi(e, i, n.properties[i]);
      if (l) {
        const [o, a] = l;
        e.tableCellAlignToStyle && o === "align" && typeof a == "string" && gi.has(n.tagName) ? r = a : t[o] = a;
      }
    }
  if (r) {
    const l = (
      /** @type {Style} */
      t.style || (t.style = {})
    );
    l[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
  }
  return t;
}
function Ii(e, n) {
  const t = {};
  for (const r of n.attributes)
    if (r.type === "mdxJsxExpressionAttribute")
      if (r.data && r.data.estree && e.evaluater) {
        const l = r.data.estree.body[0];
        l.type;
        const o = l.expression;
        o.type;
        const a = o.properties[0];
        a.type, Object.assign(
          t,
          e.evaluater.evaluateExpression(a.argument)
        );
      } else
        He(e, n.position);
    else {
      const i = r.name;
      let l;
      if (r.value && typeof r.value == "object")
        if (r.value.data && r.value.data.estree && e.evaluater) {
          const a = r.value.data.estree.body[0];
          a.type, l = e.evaluater.evaluateExpression(a.expression);
        } else
          He(e, n.position);
      else
        l = r.value === null ? !0 : r.value;
      t[i] = /** @type {Props[keyof Props]} */
      l;
    }
  return t;
}
function Dn(e, n) {
  const t = [];
  let r = -1;
  const i = e.passKeys ? /* @__PURE__ */ new Map() : hi;
  for (; ++r < n.children.length; ) {
    const l = n.children[r];
    let o;
    if (e.passKeys) {
      const c = l.type === "element" ? l.tagName : l.type === "mdxJsxFlowElement" || l.type === "mdxJsxTextElement" ? l.name : void 0;
      if (c) {
        const u = i.get(c) || 0;
        o = c + "-" + u, i.set(c, u + 1);
      }
    }
    const a = tr(e, l, o);
    a !== void 0 && t.push(a);
  }
  return t;
}
function Pi(e, n, t) {
  const r = ni(e.schema, n);
  if (!(t == null || typeof t == "number" && Number.isNaN(t))) {
    if (Array.isArray(t) && (t = r.commaSeparated ? qr(t) : li(t)), r.property === "style") {
      let i = typeof t == "object" ? t : _i(e, String(t));
      return e.stylePropertyNameCase === "css" && (i = Ai(i)), ["style", i];
    }
    return [
      e.elementAttributeNameCase === "react" && r.space ? Kr[r.property] || r.property : r.attribute,
      t
    ];
  }
}
function _i(e, n) {
  try {
    return fi(n, { reactCompat: !0 });
  } catch (t) {
    if (e.ignoreInvalidStyle)
      return {};
    const r = (
      /** @type {Error} */
      t
    ), i = new re("Cannot parse `style` attribute", {
      ancestors: e.ancestors,
      cause: r,
      ruleId: "style",
      source: "hast-util-to-jsx-runtime"
    });
    throw i.file = e.filePath || void 0, i.url = nr + "#cannot-parse-style-attribute", i;
  }
}
function ir(e, n, t) {
  let r;
  if (!t)
    r = { type: "Literal", value: n };
  else if (n.includes(".")) {
    const i = n.split(".");
    let l = -1, o;
    for (; ++l < i.length; ) {
      const a = nt(i[l]) ? { type: "Identifier", name: i[l] } : { type: "Literal", value: i[l] };
      o = o ? {
        type: "MemberExpression",
        object: o,
        property: a,
        computed: !!(l && a.type === "Literal"),
        optional: !1
      } : a;
    }
    r = o;
  } else
    r = nt(n) && !/^[a-z]/.test(n) ? { type: "Identifier", name: n } : { type: "Literal", value: n };
  if (r.type === "Literal") {
    const i = (
      /** @type {string | number} */
      r.value
    );
    return Ln.call(e.components, i) ? e.components[i] : i;
  }
  if (e.evaluater)
    return e.evaluater.evaluateExpression(r);
  He(e);
}
function He(e, n) {
  const t = new re(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: e.ancestors,
      place: n,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw t.file = e.filePath || void 0, t.url = nr + "#cannot-handle-mdx-estrees-without-createevaluater", t;
}
function Ai(e) {
  const n = {};
  let t;
  for (t in e)
    Ln.call(e, t) && (n[Ri(t)] = e[t]);
  return n;
}
function Ri(e) {
  let n = e.replace(mi, Ni);
  return n.slice(0, 3) === "ms-" && (n = "-" + n), n;
}
function Ni(e) {
  return "-" + e.toLowerCase();
}
const cn = {
  action: ["form"],
  cite: ["blockquote", "del", "ins", "q"],
  data: ["object"],
  formAction: ["button", "input"],
  href: ["a", "area", "base", "link"],
  icon: ["menuitem"],
  itemId: null,
  manifest: ["html"],
  ping: ["a", "area"],
  poster: ["video"],
  src: [
    "audio",
    "embed",
    "iframe",
    "img",
    "input",
    "script",
    "source",
    "track",
    "video"
  ]
};
var Qe = { exports: {} }, De = {};
var ft;
function Oi() {
  if (ft) return De;
  ft = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), n = /* @__PURE__ */ Symbol.for("react.fragment");
  function t(r, i, l) {
    var o = null;
    if (l !== void 0 && (o = "" + l), i.key !== void 0 && (o = "" + i.key), "key" in i) {
      l = {};
      for (var a in i)
        a !== "key" && (l[a] = i[a]);
    } else l = i;
    return i = l.ref, {
      $$typeof: e,
      type: r,
      key: o,
      ref: i !== void 0 ? i : null,
      props: l
    };
  }
  return De.Fragment = n, De.jsx = t, De.jsxs = t, De;
}
var Fe = {};
var pt;
function ji() {
  return pt || (pt = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(m) {
      if (m == null) return null;
      if (typeof m == "function")
        return m.$$typeof === A ? null : m.displayName || m.name || null;
      if (typeof m == "string") return m;
      switch (m) {
        case I:
          return "Fragment";
        case O:
          return "Profiler";
        case k:
          return "StrictMode";
        case x:
          return "Suspense";
        case M:
          return "SuspenseList";
        case V:
          return "Activity";
      }
      if (typeof m == "object")
        switch (typeof m.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), m.$$typeof) {
          case v:
            return "Portal";
          case H:
            return m.displayName || "Context";
          case P:
            return (m._context.displayName || "Context") + ".Consumer";
          case Y:
            var w = m.render;
            return m = m.displayName, m || (m = w.displayName || w.name || "", m = m !== "" ? "ForwardRef(" + m + ")" : "ForwardRef"), m;
          case W:
            return w = m.displayName || null, w !== null ? w : e(m.type) || "Memo";
          case F:
            w = m._payload, m = m._init;
            try {
              return e(m(w));
            } catch {
            }
        }
      return null;
    }
    function n(m) {
      return "" + m;
    }
    function t(m) {
      try {
        n(m);
        var w = !1;
      } catch {
        w = !0;
      }
      if (w) {
        w = console;
        var h = w.error, N = typeof Symbol == "function" && Symbol.toStringTag && m[Symbol.toStringTag] || m.constructor.name || "Object";
        return h.call(
          w,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          N
        ), n(m);
      }
    }
    function r(m) {
      if (m === I) return "<>";
      if (typeof m == "object" && m !== null && m.$$typeof === F)
        return "<...>";
      try {
        var w = e(m);
        return w ? "<" + w + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var m = _.A;
      return m === null ? null : m.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function o(m) {
      if (q.call(m, "key")) {
        var w = Object.getOwnPropertyDescriptor(m, "key").get;
        if (w && w.isReactWarning) return !1;
      }
      return m.key !== void 0;
    }
    function a(m, w) {
      function h() {
        U || (U = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          w
        ));
      }
      h.isReactWarning = !0, Object.defineProperty(m, "key", {
        get: h,
        configurable: !0
      });
    }
    function c() {
      var m = e(this.type);
      return Q[m] || (Q[m] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), m = this.props.ref, m !== void 0 ? m : null;
    }
    function u(m, w, h, N, te, K) {
      var L = h.ref;
      return m = {
        $$typeof: E,
        type: m,
        key: w,
        props: h,
        _owner: N
      }, (L !== void 0 ? L : null) !== null ? Object.defineProperty(m, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(m, "ref", { enumerable: !1, value: null }), m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(m, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(m, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: te
      }), Object.defineProperty(m, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: K
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    }
    function s(m, w, h, N, te, K) {
      var L = w.children;
      if (L !== void 0)
        if (N)
          if (R(L)) {
            for (N = 0; N < L.length; N++)
              f(L[N]);
            Object.freeze && Object.freeze(L);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(L);
      if (q.call(w, "key")) {
        L = e(m);
        var Z = Object.keys(w).filter(function(me) {
          return me !== "key";
        });
        N = 0 < Z.length ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}", d[L + N] || (Z = 0 < Z.length ? "{" + Z.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          N,
          L,
          Z,
          L
        ), d[L + N] = !0);
      }
      if (L = null, h !== void 0 && (t(h), L = "" + h), o(w) && (t(w.key), L = "" + w.key), "key" in w) {
        h = {};
        for (var le in w)
          le !== "key" && (h[le] = w[le]);
      } else h = w;
      return L && a(
        h,
        typeof m == "function" ? m.displayName || m.name || "Unknown" : m
      ), u(
        m,
        L,
        h,
        i(),
        te,
        K
      );
    }
    function f(m) {
      g(m) ? m._store && (m._store.validated = 1) : typeof m == "object" && m !== null && m.$$typeof === F && (m._payload.status === "fulfilled" ? g(m._payload.value) && m._payload.value._store && (m._payload.value._store.validated = 1) : m._store && (m._store.validated = 1));
    }
    function g(m) {
      return typeof m == "object" && m !== null && m.$$typeof === E;
    }
    var p = Vt, E = /* @__PURE__ */ Symbol.for("react.transitional.element"), v = /* @__PURE__ */ Symbol.for("react.portal"), I = /* @__PURE__ */ Symbol.for("react.fragment"), k = /* @__PURE__ */ Symbol.for("react.strict_mode"), O = /* @__PURE__ */ Symbol.for("react.profiler"), P = /* @__PURE__ */ Symbol.for("react.consumer"), H = /* @__PURE__ */ Symbol.for("react.context"), Y = /* @__PURE__ */ Symbol.for("react.forward_ref"), x = /* @__PURE__ */ Symbol.for("react.suspense"), M = /* @__PURE__ */ Symbol.for("react.suspense_list"), W = /* @__PURE__ */ Symbol.for("react.memo"), F = /* @__PURE__ */ Symbol.for("react.lazy"), V = /* @__PURE__ */ Symbol.for("react.activity"), A = /* @__PURE__ */ Symbol.for("react.client.reference"), _ = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = Object.prototype.hasOwnProperty, R = Array.isArray, T = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(m) {
        return m();
      }
    };
    var U, Q = {}, ne = p.react_stack_bottom_frame.bind(
      p,
      l
    )(), ie = T(r(l)), d = {};
    Fe.Fragment = I, Fe.jsx = function(m, w, h) {
      var N = 1e4 > _.recentlyCreatedOwnerStacks++;
      return s(
        m,
        w,
        h,
        !1,
        N ? Error("react-stack-top-frame") : ne,
        N ? T(r(m)) : ie
      );
    }, Fe.jsxs = function(m, w, h) {
      var N = 1e4 > _.recentlyCreatedOwnerStacks++;
      return s(
        m,
        w,
        h,
        !0,
        N ? Error("react-stack-top-frame") : ne,
        N ? T(r(m)) : ie
      );
    };
  })()), Fe;
}
var ht;
function Li() {
  return ht || (ht = 1, process.env.NODE_ENV === "production" ? Qe.exports = Oi() : Qe.exports = ji()), Qe.exports;
}
var fn = Li();
const zi = {};
function Di(e, n) {
  const t = zi, r = typeof t.includeImageAlt == "boolean" ? t.includeImageAlt : !0, i = typeof t.includeHtml == "boolean" ? t.includeHtml : !0;
  return lr(e, r, i);
}
function lr(e, n, t) {
  if (Fi(e)) {
    if ("value" in e)
      return e.type === "html" && !t ? "" : e.value;
    if (n && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return mt(e.children, n, t);
  }
  return Array.isArray(e) ? mt(e, n, t) : "";
}
function mt(e, n, t) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = lr(e[i], n, t);
  return r.join("");
}
function Fi(e) {
  return !!(e && typeof e == "object");
}
const dt = document.createElement("i");
function Fn(e) {
  const n = "&" + e + ";";
  dt.innerHTML = n;
  const t = dt.textContent;
  return t.charCodeAt(t.length - 1) === 59 && e !== "semi" || t === n ? !1 : t;
}
function ye(e, n, t, r) {
  const i = e.length;
  let l = 0, o;
  if (n < 0 ? n = -n > i ? 0 : i + n : n = n > i ? i : n, t = t > 0 ? t : 0, r.length < 1e4)
    o = Array.from(r), o.unshift(n, t), e.splice(...o);
  else
    for (t && e.splice(n, t); l < r.length; )
      o = r.slice(l, l + 1e4), o.unshift(n, 0), e.splice(...o), l += 1e4, n += 1e4;
}
function pe(e, n) {
  return e.length > 0 ? (ye(e, e.length, 0, n), e) : n;
}
const gt = {}.hasOwnProperty;
function Mi(e) {
  const n = {};
  let t = -1;
  for (; ++t < e.length; )
    Bi(n, e[t]);
  return n;
}
function Bi(e, n) {
  let t;
  for (t in n) {
    const i = (gt.call(e, t) ? e[t] : void 0) || (e[t] = {}), l = n[t];
    let o;
    if (l)
      for (o in l) {
        gt.call(i, o) || (i[o] = []);
        const a = l[o];
        Ui(
          // @ts-expect-error Looks like a list.
          i[o],
          Array.isArray(a) ? a : a ? [a] : []
        );
      }
  }
}
function Ui(e, n) {
  let t = -1;
  const r = [];
  for (; ++t < n.length; )
    (n[t].add === "after" ? e : r).push(n[t]);
  ye(e, 0, 0, r);
}
function or(e, n) {
  const t = Number.parseInt(e, n);
  return (
    // C0 except for HT, LF, FF, CR, space.
    t < 9 || t === 11 || t > 13 && t < 32 || // Control character (DEL) of C0, and C1 controls.
    t > 126 && t < 160 || // Lone high surrogates and low surrogates.
    t > 55295 && t < 57344 || // Noncharacters.
    t > 64975 && t < 65008 || /* eslint-disable no-bitwise */
    (t & 65535) === 65535 || (t & 65535) === 65534 || /* eslint-enable no-bitwise */
    // Out of range
    t > 1114111 ? "�" : String.fromCodePoint(t)
  );
}
function Pe(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const ge = we(/[A-Za-z]/), fe = we(/[\dA-Za-z]/), Vi = we(/[#-'*+\--9=?A-Z^-~]/);
function vn(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const In = we(/\d/), qi = we(/[\dA-Fa-f]/), Hi = we(/[!-/:-@[-`{-~]/);
function j(e) {
  return e !== null && e < -2;
}
function ae(e) {
  return e !== null && (e < 0 || e === 32);
}
function $(e) {
  return e === -2 || e === -1 || e === 32;
}
const $i = we(new RegExp("\\p{P}|\\p{S}", "u")), Yi = we(/\s/);
function we(e) {
  return n;
  function n(t) {
    return t !== null && t > -1 && e.test(String.fromCharCode(t));
  }
}
function Ae(e) {
  const n = [];
  let t = -1, r = 0, i = 0;
  for (; ++t < e.length; ) {
    const l = e.charCodeAt(t);
    let o = "";
    if (l === 37 && fe(e.charCodeAt(t + 1)) && fe(e.charCodeAt(t + 2)))
      i = 2;
    else if (l < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(l)) || (o = String.fromCharCode(l));
    else if (l > 55295 && l < 57344) {
      const a = e.charCodeAt(t + 1);
      l < 56320 && a > 56319 && a < 57344 ? (o = String.fromCharCode(l, a), i = 1) : o = "�";
    } else
      o = String.fromCharCode(l);
    o && (n.push(e.slice(r, t), encodeURIComponent(o)), r = t + i + 1, o = ""), i && (t += i, i = 0);
  }
  return n.join("") + e.slice(r);
}
function G(e, n, t, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let l = 0;
  return o;
  function o(c) {
    return $(c) ? (e.enter(t), a(c)) : n(c);
  }
  function a(c) {
    return $(c) && l++ < i ? (e.consume(c), a) : (e.exit(t), n(c));
  }
}
const Wi = {
  tokenize: Xi
};
function Xi(e) {
  const n = e.attempt(this.parser.constructs.contentInitial, r, i);
  let t;
  return n;
  function r(a) {
    if (a === null) {
      e.consume(a);
      return;
    }
    return e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), G(e, n, "linePrefix");
  }
  function i(a) {
    return e.enter("paragraph"), l(a);
  }
  function l(a) {
    const c = e.enter("chunkText", {
      contentType: "text",
      previous: t
    });
    return t && (t.next = c), t = c, o(a);
  }
  function o(a) {
    if (a === null) {
      e.exit("chunkText"), e.exit("paragraph"), e.consume(a);
      return;
    }
    return j(a) ? (e.consume(a), e.exit("chunkText"), l) : (e.consume(a), o);
  }
}
const Ji = {
  tokenize: Gi
}, yt = {
  tokenize: Qi
};
function Gi(e) {
  const n = this, t = [];
  let r = 0, i, l, o;
  return a;
  function a(P) {
    if (r < t.length) {
      const H = t[r];
      return n.containerState = H[1], e.attempt(H[0].continuation, c, u)(P);
    }
    return u(P);
  }
  function c(P) {
    if (r++, n.containerState._closeFlow) {
      n.containerState._closeFlow = void 0, i && O();
      const H = n.events.length;
      let Y = H, x;
      for (; Y--; )
        if (n.events[Y][0] === "exit" && n.events[Y][1].type === "chunkFlow") {
          x = n.events[Y][1].end;
          break;
        }
      k(r);
      let M = H;
      for (; M < n.events.length; )
        n.events[M][1].end = {
          ...x
        }, M++;
      return ye(n.events, Y + 1, 0, n.events.slice(H)), n.events.length = M, u(P);
    }
    return a(P);
  }
  function u(P) {
    if (r === t.length) {
      if (!i)
        return g(P);
      if (i.currentConstruct && i.currentConstruct.concrete)
        return E(P);
      n.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return n.containerState = {}, e.check(yt, s, f)(P);
  }
  function s(P) {
    return i && O(), k(r), g(P);
  }
  function f(P) {
    return n.parser.lazy[n.now().line] = r !== t.length, o = n.now().offset, E(P);
  }
  function g(P) {
    return n.containerState = {}, e.attempt(yt, p, E)(P);
  }
  function p(P) {
    return r++, t.push([n.currentConstruct, n.containerState]), g(P);
  }
  function E(P) {
    if (P === null) {
      i && O(), k(0), e.consume(P);
      return;
    }
    return i = i || n.parser.flow(n.now()), e.enter("chunkFlow", {
      _tokenizer: i,
      contentType: "flow",
      previous: l
    }), v(P);
  }
  function v(P) {
    if (P === null) {
      I(e.exit("chunkFlow"), !0), k(0), e.consume(P);
      return;
    }
    return j(P) ? (e.consume(P), I(e.exit("chunkFlow")), r = 0, n.interrupt = void 0, a) : (e.consume(P), v);
  }
  function I(P, H) {
    const Y = n.sliceStream(P);
    if (H && Y.push(null), P.previous = l, l && (l.next = P), l = P, i.defineSkip(P.start), i.write(Y), n.parser.lazy[P.start.line]) {
      let x = i.events.length;
      for (; x--; )
        if (
          // The token starts before the line ending…
          i.events[x][1].start.offset < o && // …and either is not ended yet…
          (!i.events[x][1].end || // …or ends after it.
          i.events[x][1].end.offset > o)
        )
          return;
      const M = n.events.length;
      let W = M, F, V;
      for (; W--; )
        if (n.events[W][0] === "exit" && n.events[W][1].type === "chunkFlow") {
          if (F) {
            V = n.events[W][1].end;
            break;
          }
          F = !0;
        }
      for (k(r), x = M; x < n.events.length; )
        n.events[x][1].end = {
          ...V
        }, x++;
      ye(n.events, W + 1, 0, n.events.slice(M)), n.events.length = x;
    }
  }
  function k(P) {
    let H = t.length;
    for (; H-- > P; ) {
      const Y = t[H];
      n.containerState = Y[1], Y[0].exit.call(n, e);
    }
    t.length = P;
  }
  function O() {
    i.write([null]), l = void 0, i = void 0, n.containerState._closeFlow = void 0;
  }
}
function Qi(e, n, t) {
  return G(e, e.attempt(this.parser.constructs.document, n, t), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function xt(e) {
  if (e === null || ae(e) || Yi(e))
    return 1;
  if ($i(e))
    return 2;
}
function Mn(e, n, t) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const l = e[i].resolveAll;
    l && !r.includes(l) && (n = l(n, t), r.push(l));
  }
  return n;
}
const Pn = {
  name: "attention",
  resolveAll: Ki,
  tokenize: Zi
};
function Ki(e, n) {
  let t = -1, r, i, l, o, a, c, u, s;
  for (; ++t < e.length; )
    if (e[t][0] === "enter" && e[t][1].type === "attentionSequence" && e[t][1]._close) {
      for (r = t; r--; )
        if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && // If the markers are the same:
        n.sliceSerialize(e[r][1]).charCodeAt(0) === n.sliceSerialize(e[t][1]).charCodeAt(0)) {
          if ((e[r][1]._close || e[t][1]._open) && (e[t][1].end.offset - e[t][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[t][1].end.offset - e[t][1].start.offset) % 3))
            continue;
          c = e[r][1].end.offset - e[r][1].start.offset > 1 && e[t][1].end.offset - e[t][1].start.offset > 1 ? 2 : 1;
          const f = {
            ...e[r][1].end
          }, g = {
            ...e[t][1].start
          };
          kt(f, -c), kt(g, c), o = {
            type: c > 1 ? "strongSequence" : "emphasisSequence",
            start: f,
            end: {
              ...e[r][1].end
            }
          }, a = {
            type: c > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...e[t][1].start
            },
            end: g
          }, l = {
            type: c > 1 ? "strongText" : "emphasisText",
            start: {
              ...e[r][1].end
            },
            end: {
              ...e[t][1].start
            }
          }, i = {
            type: c > 1 ? "strong" : "emphasis",
            start: {
              ...o.start
            },
            end: {
              ...a.end
            }
          }, e[r][1].end = {
            ...o.start
          }, e[t][1].start = {
            ...a.end
          }, u = [], e[r][1].end.offset - e[r][1].start.offset && (u = pe(u, [["enter", e[r][1], n], ["exit", e[r][1], n]])), u = pe(u, [["enter", i, n], ["enter", o, n], ["exit", o, n], ["enter", l, n]]), u = pe(u, Mn(n.parser.constructs.insideSpan.null, e.slice(r + 1, t), n)), u = pe(u, [["exit", l, n], ["enter", a, n], ["exit", a, n], ["exit", i, n]]), e[t][1].end.offset - e[t][1].start.offset ? (s = 2, u = pe(u, [["enter", e[t][1], n], ["exit", e[t][1], n]])) : s = 0, ye(e, r - 1, t - r + 3, u), t = r + u.length - s - 2;
          break;
        }
    }
  for (t = -1; ++t < e.length; )
    e[t][1].type === "attentionSequence" && (e[t][1].type = "data");
  return e;
}
function Zi(e, n) {
  const t = this.parser.constructs.attentionMarkers.null, r = this.previous, i = xt(r);
  let l;
  return o;
  function o(c) {
    return l = c, e.enter("attentionSequence"), a(c);
  }
  function a(c) {
    if (c === l)
      return e.consume(c), a;
    const u = e.exit("attentionSequence"), s = xt(c), f = !s || s === 2 && i || t.includes(c), g = !i || i === 2 && s || t.includes(r);
    return u._open = !!(l === 42 ? f : f && (i || !g)), u._close = !!(l === 42 ? g : g && (s || !f)), n(c);
  }
}
function kt(e, n) {
  e.column += n, e.offset += n, e._bufferIndex += n;
}
const el = {
  name: "autolink",
  tokenize: nl
};
function nl(e, n, t) {
  let r = 0;
  return i;
  function i(p) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), l;
  }
  function l(p) {
    return ge(p) ? (e.consume(p), o) : p === 64 ? t(p) : u(p);
  }
  function o(p) {
    return p === 43 || p === 45 || p === 46 || fe(p) ? (r = 1, a(p)) : u(p);
  }
  function a(p) {
    return p === 58 ? (e.consume(p), r = 0, c) : (p === 43 || p === 45 || p === 46 || fe(p)) && r++ < 32 ? (e.consume(p), a) : (r = 0, u(p));
  }
  function c(p) {
    return p === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.exit("autolink"), n) : p === null || p === 32 || p === 60 || vn(p) ? t(p) : (e.consume(p), c);
  }
  function u(p) {
    return p === 64 ? (e.consume(p), s) : Vi(p) ? (e.consume(p), u) : t(p);
  }
  function s(p) {
    return fe(p) ? f(p) : t(p);
  }
  function f(p) {
    return p === 46 ? (e.consume(p), r = 0, s) : p === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.exit("autolink"), n) : g(p);
  }
  function g(p) {
    if ((p === 45 || fe(p)) && r++ < 63) {
      const E = p === 45 ? g : f;
      return e.consume(p), E;
    }
    return t(p);
  }
}
const ln = {
  partial: !0,
  tokenize: tl
};
function tl(e, n, t) {
  return r;
  function r(l) {
    return $(l) ? G(e, i, "linePrefix")(l) : i(l);
  }
  function i(l) {
    return l === null || j(l) ? n(l) : t(l);
  }
}
const ar = {
  continuation: {
    tokenize: il
  },
  exit: ll,
  name: "blockQuote",
  tokenize: rl
};
function rl(e, n, t) {
  const r = this;
  return i;
  function i(o) {
    if (o === 62) {
      const a = r.containerState;
      return a.open || (e.enter("blockQuote", {
        _container: !0
      }), a.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(o), e.exit("blockQuoteMarker"), l;
    }
    return t(o);
  }
  function l(o) {
    return $(o) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(o), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), n) : (e.exit("blockQuotePrefix"), n(o));
  }
}
function il(e, n, t) {
  const r = this;
  return i;
  function i(o) {
    return $(o) ? G(e, l, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(o) : l(o);
  }
  function l(o) {
    return e.attempt(ar, n, t)(o);
  }
}
function ll(e) {
  e.exit("blockQuote");
}
const ur = {
  name: "characterEscape",
  tokenize: ol
};
function ol(e, n, t) {
  return r;
  function r(l) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(l), e.exit("escapeMarker"), i;
  }
  function i(l) {
    return Hi(l) ? (e.enter("characterEscapeValue"), e.consume(l), e.exit("characterEscapeValue"), e.exit("characterEscape"), n) : t(l);
  }
}
const sr = {
  name: "characterReference",
  tokenize: al
};
function al(e, n, t) {
  const r = this;
  let i = 0, l, o;
  return a;
  function a(f) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), c;
  }
  function c(f) {
    return f === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(f), e.exit("characterReferenceMarkerNumeric"), u) : (e.enter("characterReferenceValue"), l = 31, o = fe, s(f));
  }
  function u(f) {
    return f === 88 || f === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(f), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), l = 6, o = qi, s) : (e.enter("characterReferenceValue"), l = 7, o = In, s(f));
  }
  function s(f) {
    if (f === 59 && i) {
      const g = e.exit("characterReferenceValue");
      return o === fe && !Fn(r.sliceSerialize(g)) ? t(f) : (e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), e.exit("characterReference"), n);
    }
    return o(f) && i++ < l ? (e.consume(f), s) : t(f);
  }
}
const bt = {
  partial: !0,
  tokenize: sl
}, wt = {
  concrete: !0,
  name: "codeFenced",
  tokenize: ul
};
function ul(e, n, t) {
  const r = this, i = {
    partial: !0,
    tokenize: Y
  };
  let l = 0, o = 0, a;
  return c;
  function c(x) {
    return u(x);
  }
  function u(x) {
    const M = r.events[r.events.length - 1];
    return l = M && M[1].type === "linePrefix" ? M[2].sliceSerialize(M[1], !0).length : 0, a = x, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), s(x);
  }
  function s(x) {
    return x === a ? (o++, e.consume(x), s) : o < 3 ? t(x) : (e.exit("codeFencedFenceSequence"), $(x) ? G(e, f, "whitespace")(x) : f(x));
  }
  function f(x) {
    return x === null || j(x) ? (e.exit("codeFencedFence"), r.interrupt ? n(x) : e.check(bt, v, H)(x)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), g(x));
  }
  function g(x) {
    return x === null || j(x) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), f(x)) : $(x) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), G(e, p, "whitespace")(x)) : x === 96 && x === a ? t(x) : (e.consume(x), g);
  }
  function p(x) {
    return x === null || j(x) ? f(x) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), E(x));
  }
  function E(x) {
    return x === null || j(x) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), f(x)) : x === 96 && x === a ? t(x) : (e.consume(x), E);
  }
  function v(x) {
    return e.attempt(i, H, I)(x);
  }
  function I(x) {
    return e.enter("lineEnding"), e.consume(x), e.exit("lineEnding"), k;
  }
  function k(x) {
    return l > 0 && $(x) ? G(e, O, "linePrefix", l + 1)(x) : O(x);
  }
  function O(x) {
    return x === null || j(x) ? e.check(bt, v, H)(x) : (e.enter("codeFlowValue"), P(x));
  }
  function P(x) {
    return x === null || j(x) ? (e.exit("codeFlowValue"), O(x)) : (e.consume(x), P);
  }
  function H(x) {
    return e.exit("codeFenced"), n(x);
  }
  function Y(x, M, W) {
    let F = 0;
    return V;
    function V(T) {
      return x.enter("lineEnding"), x.consume(T), x.exit("lineEnding"), A;
    }
    function A(T) {
      return x.enter("codeFencedFence"), $(T) ? G(x, _, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(T) : _(T);
    }
    function _(T) {
      return T === a ? (x.enter("codeFencedFenceSequence"), q(T)) : W(T);
    }
    function q(T) {
      return T === a ? (F++, x.consume(T), q) : F >= o ? (x.exit("codeFencedFenceSequence"), $(T) ? G(x, R, "whitespace")(T) : R(T)) : W(T);
    }
    function R(T) {
      return T === null || j(T) ? (x.exit("codeFencedFence"), M(T)) : W(T);
    }
  }
}
function sl(e, n, t) {
  const r = this;
  return i;
  function i(o) {
    return o === null ? t(o) : (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), l);
  }
  function l(o) {
    return r.parser.lazy[r.now().line] ? t(o) : n(o);
  }
}
const pn = {
  name: "codeIndented",
  tokenize: fl
}, cl = {
  partial: !0,
  tokenize: pl
};
function fl(e, n, t) {
  const r = this;
  return i;
  function i(u) {
    return e.enter("codeIndented"), G(e, l, "linePrefix", 5)(u);
  }
  function l(u) {
    const s = r.events[r.events.length - 1];
    return s && s[1].type === "linePrefix" && s[2].sliceSerialize(s[1], !0).length >= 4 ? o(u) : t(u);
  }
  function o(u) {
    return u === null ? c(u) : j(u) ? e.attempt(cl, o, c)(u) : (e.enter("codeFlowValue"), a(u));
  }
  function a(u) {
    return u === null || j(u) ? (e.exit("codeFlowValue"), o(u)) : (e.consume(u), a);
  }
  function c(u) {
    return e.exit("codeIndented"), n(u);
  }
}
function pl(e, n, t) {
  const r = this;
  return i;
  function i(o) {
    return r.parser.lazy[r.now().line] ? t(o) : j(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), i) : G(e, l, "linePrefix", 5)(o);
  }
  function l(o) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? n(o) : j(o) ? i(o) : t(o);
  }
}
const hl = {
  name: "codeText",
  previous: dl,
  resolve: ml,
  tokenize: gl
};
function ml(e) {
  let n = e.length - 4, t = 3, r, i;
  if ((e[t][1].type === "lineEnding" || e[t][1].type === "space") && (e[n][1].type === "lineEnding" || e[n][1].type === "space")) {
    for (r = t; ++r < n; )
      if (e[r][1].type === "codeTextData") {
        e[t][1].type = "codeTextPadding", e[n][1].type = "codeTextPadding", t += 2, n -= 2;
        break;
      }
  }
  for (r = t - 1, n++; ++r <= n; )
    i === void 0 ? r !== n && e[r][1].type !== "lineEnding" && (i = r) : (r === n || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), n -= r - i - 2, r = i + 2), i = void 0);
  return e;
}
function dl(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function gl(e, n, t) {
  let r = 0, i, l;
  return o;
  function o(f) {
    return e.enter("codeText"), e.enter("codeTextSequence"), a(f);
  }
  function a(f) {
    return f === 96 ? (e.consume(f), r++, a) : (e.exit("codeTextSequence"), c(f));
  }
  function c(f) {
    return f === null ? t(f) : f === 32 ? (e.enter("space"), e.consume(f), e.exit("space"), c) : f === 96 ? (l = e.enter("codeTextSequence"), i = 0, s(f)) : j(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), c) : (e.enter("codeTextData"), u(f));
  }
  function u(f) {
    return f === null || f === 32 || f === 96 || j(f) ? (e.exit("codeTextData"), c(f)) : (e.consume(f), u);
  }
  function s(f) {
    return f === 96 ? (e.consume(f), i++, s) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), n(f)) : (l.type = "codeTextData", u(f));
  }
}
class yl {
  /**
   * @param {ReadonlyArray<T> | null | undefined} [initial]
   *   Initial items (optional).
   * @returns
   *   Splice buffer.
   */
  constructor(n) {
    this.left = n ? [...n] : [], this.right = [];
  }
  /**
   * Array access;
   * does not move the cursor.
   *
   * @param {number} index
   *   Index.
   * @return {T}
   *   Item.
   */
  get(n) {
    if (n < 0 || n >= this.left.length + this.right.length)
      throw new RangeError("Cannot access index `" + n + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
    return n < this.left.length ? this.left[n] : this.right[this.right.length - n + this.left.length - 1];
  }
  /**
   * The length of the splice buffer, one greater than the largest index in the
   * array.
   */
  get length() {
    return this.left.length + this.right.length;
  }
  /**
   * Remove and return `list[0]`;
   * moves the cursor to `0`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  shift() {
    return this.setCursor(0), this.right.pop();
  }
  /**
   * Slice the buffer to get an array;
   * does not move the cursor.
   *
   * @param {number} start
   *   Start.
   * @param {number | null | undefined} [end]
   *   End (optional).
   * @returns {Array<T>}
   *   Array of items.
   */
  slice(n, t) {
    const r = t ?? Number.POSITIVE_INFINITY;
    return r < this.left.length ? this.left.slice(n, r) : n > this.left.length ? this.right.slice(this.right.length - r + this.left.length, this.right.length - n + this.left.length).reverse() : this.left.slice(n).concat(this.right.slice(this.right.length - r + this.left.length).reverse());
  }
  /**
   * Mimics the behavior of Array.prototype.splice() except for the change of
   * interface necessary to avoid segfaults when patching in very large arrays.
   *
   * This operation moves cursor is moved to `start` and results in the cursor
   * placed after any inserted items.
   *
   * @param {number} start
   *   Start;
   *   zero-based index at which to start changing the array;
   *   negative numbers count backwards from the end of the array and values
   *   that are out-of bounds are clamped to the appropriate end of the array.
   * @param {number | null | undefined} [deleteCount=0]
   *   Delete count (default: `0`);
   *   maximum number of elements to delete, starting from start.
   * @param {Array<T> | null | undefined} [items=[]]
   *   Items to include in place of the deleted items (default: `[]`).
   * @return {Array<T>}
   *   Any removed items.
   */
  splice(n, t, r) {
    const i = t || 0;
    this.setCursor(Math.trunc(n));
    const l = this.right.splice(this.right.length - i, Number.POSITIVE_INFINITY);
    return r && Me(this.left, r), l.reverse();
  }
  /**
   * Remove and return the highest-numbered item in the array, so
   * `list[list.length - 1]`;
   * Moves the cursor to `length`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  pop() {
    return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
  }
  /**
   * Inserts a single item to the high-numbered side of the array;
   * moves the cursor to `length`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  push(n) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(n);
  }
  /**
   * Inserts many items to the high-numbered side of the array.
   * Moves the cursor to `length`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  pushMany(n) {
    this.setCursor(Number.POSITIVE_INFINITY), Me(this.left, n);
  }
  /**
   * Inserts a single item to the low-numbered side of the array;
   * Moves the cursor to `0`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  unshift(n) {
    this.setCursor(0), this.right.push(n);
  }
  /**
   * Inserts many items to the low-numbered side of the array;
   * moves the cursor to `0`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  unshiftMany(n) {
    this.setCursor(0), Me(this.right, n.reverse());
  }
  /**
   * Move the cursor to a specific position in the array. Requires
   * time proportional to the distance moved.
   *
   * If `n < 0`, the cursor will end up at the beginning.
   * If `n > length`, the cursor will end up at the end.
   *
   * @param {number} n
   *   Position.
   * @return {undefined}
   *   Nothing.
   */
  setCursor(n) {
    if (!(n === this.left.length || n > this.left.length && this.right.length === 0 || n < 0 && this.left.length === 0))
      if (n < this.left.length) {
        const t = this.left.splice(n, Number.POSITIVE_INFINITY);
        Me(this.right, t.reverse());
      } else {
        const t = this.right.splice(this.left.length + this.right.length - n, Number.POSITIVE_INFINITY);
        Me(this.left, t.reverse());
      }
  }
}
function Me(e, n) {
  let t = 0;
  if (n.length < 1e4)
    e.push(...n);
  else
    for (; t < n.length; )
      e.push(...n.slice(t, t + 1e4)), t += 1e4;
}
function cr(e) {
  const n = {};
  let t = -1, r, i, l, o, a, c, u;
  const s = new yl(e);
  for (; ++t < s.length; ) {
    for (; t in n; )
      t = n[t];
    if (r = s.get(t), t && r[1].type === "chunkFlow" && s.get(t - 1)[1].type === "listItemPrefix" && (c = r[1]._tokenizer.events, l = 0, l < c.length && c[l][1].type === "lineEndingBlank" && (l += 2), l < c.length && c[l][1].type === "content"))
      for (; ++l < c.length && c[l][1].type !== "content"; )
        c[l][1].type === "chunkText" && (c[l][1]._isInFirstContentOfListItem = !0, l++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(n, xl(s, t)), t = n[t], u = !0);
    else if (r[1]._container) {
      for (l = t, i = void 0; l--; )
        if (o = s.get(l), o[1].type === "lineEnding" || o[1].type === "lineEndingBlank")
          o[0] === "enter" && (i && (s.get(i)[1].type = "lineEndingBlank"), o[1].type = "lineEnding", i = l);
        else if (!(o[1].type === "linePrefix" || o[1].type === "listItemIndent")) break;
      i && (r[1].end = {
        ...s.get(i)[1].start
      }, a = s.slice(i, t), a.unshift(r), s.splice(i, t - i + 1, a));
    }
  }
  return ye(e, 0, Number.POSITIVE_INFINITY, s.slice(0)), !u;
}
function xl(e, n) {
  const t = e.get(n)[1], r = e.get(n)[2];
  let i = n - 1;
  const l = [];
  let o = t._tokenizer;
  o || (o = r.parser[t.contentType](t.start), t._contentTypeTextTrailing && (o._contentTypeTextTrailing = !0));
  const a = o.events, c = [], u = {};
  let s, f, g = -1, p = t, E = 0, v = 0;
  const I = [v];
  for (; p; ) {
    for (; e.get(++i)[1] !== p; )
      ;
    l.push(i), p._tokenizer || (s = r.sliceStream(p), p.next || s.push(null), f && o.defineSkip(p.start), p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = !0), o.write(s), p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = void 0)), f = p, p = p.next;
  }
  for (p = t; ++g < a.length; )
    // Find a void token that includes a break.
    a[g][0] === "exit" && a[g - 1][0] === "enter" && a[g][1].type === a[g - 1][1].type && a[g][1].start.line !== a[g][1].end.line && (v = g + 1, I.push(v), p._tokenizer = void 0, p.previous = void 0, p = p.next);
  for (o.events = [], p ? (p._tokenizer = void 0, p.previous = void 0) : I.pop(), g = I.length; g--; ) {
    const k = a.slice(I[g], I[g + 1]), O = l.pop();
    c.push([O, O + k.length - 1]), e.splice(O, 2, k);
  }
  for (c.reverse(), g = -1; ++g < c.length; )
    u[E + c[g][0]] = E + c[g][1], E += c[g][1] - c[g][0] - 1;
  return u;
}
const kl = {
  resolve: wl,
  tokenize: Sl
}, bl = {
  partial: !0,
  tokenize: El
};
function wl(e) {
  return cr(e), e;
}
function Sl(e, n) {
  let t;
  return r;
  function r(a) {
    return e.enter("content"), t = e.enter("chunkContent", {
      contentType: "content"
    }), i(a);
  }
  function i(a) {
    return a === null ? l(a) : j(a) ? e.check(bl, o, l)(a) : (e.consume(a), i);
  }
  function l(a) {
    return e.exit("chunkContent"), e.exit("content"), n(a);
  }
  function o(a) {
    return e.consume(a), e.exit("chunkContent"), t.next = e.enter("chunkContent", {
      contentType: "content",
      previous: t
    }), t = t.next, i;
  }
}
function El(e, n, t) {
  const r = this;
  return i;
  function i(o) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), G(e, l, "linePrefix");
  }
  function l(o) {
    if (o === null || j(o))
      return t(o);
    const a = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? n(o) : e.interrupt(r.parser.constructs.flow, t, n)(o);
  }
}
function fr(e, n, t, r, i, l, o, a, c) {
  const u = c || Number.POSITIVE_INFINITY;
  let s = 0;
  return f;
  function f(k) {
    return k === 60 ? (e.enter(r), e.enter(i), e.enter(l), e.consume(k), e.exit(l), g) : k === null || k === 32 || k === 41 || vn(k) ? t(k) : (e.enter(r), e.enter(o), e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), v(k));
  }
  function g(k) {
    return k === 62 ? (e.enter(l), e.consume(k), e.exit(l), e.exit(i), e.exit(r), n) : (e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), p(k));
  }
  function p(k) {
    return k === 62 ? (e.exit("chunkString"), e.exit(a), g(k)) : k === null || k === 60 || j(k) ? t(k) : (e.consume(k), k === 92 ? E : p);
  }
  function E(k) {
    return k === 60 || k === 62 || k === 92 ? (e.consume(k), p) : p(k);
  }
  function v(k) {
    return !s && (k === null || k === 41 || ae(k)) ? (e.exit("chunkString"), e.exit(a), e.exit(o), e.exit(r), n(k)) : s < u && k === 40 ? (e.consume(k), s++, v) : k === 41 ? (e.consume(k), s--, v) : k === null || k === 32 || k === 40 || vn(k) ? t(k) : (e.consume(k), k === 92 ? I : v);
  }
  function I(k) {
    return k === 40 || k === 41 || k === 92 ? (e.consume(k), v) : v(k);
  }
}
function pr(e, n, t, r, i, l) {
  const o = this;
  let a = 0, c;
  return u;
  function u(p) {
    return e.enter(r), e.enter(i), e.consume(p), e.exit(i), e.enter(l), s;
  }
  function s(p) {
    return a > 999 || p === null || p === 91 || p === 93 && !c || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    p === 94 && !a && "_hiddenFootnoteSupport" in o.parser.constructs ? t(p) : p === 93 ? (e.exit(l), e.enter(i), e.consume(p), e.exit(i), e.exit(r), n) : j(p) ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), s) : (e.enter("chunkString", {
      contentType: "string"
    }), f(p));
  }
  function f(p) {
    return p === null || p === 91 || p === 93 || j(p) || a++ > 999 ? (e.exit("chunkString"), s(p)) : (e.consume(p), c || (c = !$(p)), p === 92 ? g : f);
  }
  function g(p) {
    return p === 91 || p === 92 || p === 93 ? (e.consume(p), a++, f) : f(p);
  }
}
function hr(e, n, t, r, i, l) {
  let o;
  return a;
  function a(g) {
    return g === 34 || g === 39 || g === 40 ? (e.enter(r), e.enter(i), e.consume(g), e.exit(i), o = g === 40 ? 41 : g, c) : t(g);
  }
  function c(g) {
    return g === o ? (e.enter(i), e.consume(g), e.exit(i), e.exit(r), n) : (e.enter(l), u(g));
  }
  function u(g) {
    return g === o ? (e.exit(l), c(o)) : g === null ? t(g) : j(g) ? (e.enter("lineEnding"), e.consume(g), e.exit("lineEnding"), G(e, u, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), s(g));
  }
  function s(g) {
    return g === o || g === null || j(g) ? (e.exit("chunkString"), u(g)) : (e.consume(g), g === 92 ? f : s);
  }
  function f(g) {
    return g === o || g === 92 ? (e.consume(g), s) : s(g);
  }
}
function Ve(e, n) {
  let t;
  return r;
  function r(i) {
    return j(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), t = !0, r) : $(i) ? G(e, r, t ? "linePrefix" : "lineSuffix")(i) : n(i);
  }
}
const Cl = {
  name: "definition",
  tokenize: vl
}, Tl = {
  partial: !0,
  tokenize: Il
};
function vl(e, n, t) {
  const r = this;
  let i;
  return l;
  function l(p) {
    return e.enter("definition"), o(p);
  }
  function o(p) {
    return pr.call(
      r,
      e,
      a,
      // Note: we don’t need to reset the way `markdown-rs` does.
      t,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(p);
  }
  function a(p) {
    return i = Pe(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), p === 58 ? (e.enter("definitionMarker"), e.consume(p), e.exit("definitionMarker"), c) : t(p);
  }
  function c(p) {
    return ae(p) ? Ve(e, u)(p) : u(p);
  }
  function u(p) {
    return fr(
      e,
      s,
      // Note: we don’t need to reset the way `markdown-rs` does.
      t,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(p);
  }
  function s(p) {
    return e.attempt(Tl, f, f)(p);
  }
  function f(p) {
    return $(p) ? G(e, g, "whitespace")(p) : g(p);
  }
  function g(p) {
    return p === null || j(p) ? (e.exit("definition"), r.parser.defined.push(i), n(p)) : t(p);
  }
}
function Il(e, n, t) {
  return r;
  function r(a) {
    return ae(a) ? Ve(e, i)(a) : t(a);
  }
  function i(a) {
    return hr(e, l, t, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(a);
  }
  function l(a) {
    return $(a) ? G(e, o, "whitespace")(a) : o(a);
  }
  function o(a) {
    return a === null || j(a) ? n(a) : t(a);
  }
}
const Pl = {
  name: "hardBreakEscape",
  tokenize: _l
};
function _l(e, n, t) {
  return r;
  function r(l) {
    return e.enter("hardBreakEscape"), e.consume(l), i;
  }
  function i(l) {
    return j(l) ? (e.exit("hardBreakEscape"), n(l)) : t(l);
  }
}
const Al = {
  name: "headingAtx",
  resolve: Rl,
  tokenize: Nl
};
function Rl(e, n) {
  let t = e.length - 2, r = 3, i, l;
  return e[r][1].type === "whitespace" && (r += 2), t - 2 > r && e[t][1].type === "whitespace" && (t -= 2), e[t][1].type === "atxHeadingSequence" && (r === t - 1 || t - 4 > r && e[t - 2][1].type === "whitespace") && (t -= r + 1 === t ? 2 : 4), t > r && (i = {
    type: "atxHeadingText",
    start: e[r][1].start,
    end: e[t][1].end
  }, l = {
    type: "chunkText",
    start: e[r][1].start,
    end: e[t][1].end,
    contentType: "text"
  }, ye(e, r, t - r + 1, [["enter", i, n], ["enter", l, n], ["exit", l, n], ["exit", i, n]])), e;
}
function Nl(e, n, t) {
  let r = 0;
  return i;
  function i(s) {
    return e.enter("atxHeading"), l(s);
  }
  function l(s) {
    return e.enter("atxHeadingSequence"), o(s);
  }
  function o(s) {
    return s === 35 && r++ < 6 ? (e.consume(s), o) : s === null || ae(s) ? (e.exit("atxHeadingSequence"), a(s)) : t(s);
  }
  function a(s) {
    return s === 35 ? (e.enter("atxHeadingSequence"), c(s)) : s === null || j(s) ? (e.exit("atxHeading"), n(s)) : $(s) ? G(e, a, "whitespace")(s) : (e.enter("atxHeadingText"), u(s));
  }
  function c(s) {
    return s === 35 ? (e.consume(s), c) : (e.exit("atxHeadingSequence"), a(s));
  }
  function u(s) {
    return s === null || s === 35 || ae(s) ? (e.exit("atxHeadingText"), a(s)) : (e.consume(s), u);
  }
}
const Ol = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], St = ["pre", "script", "style", "textarea"], jl = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: Dl,
  tokenize: Fl
}, Ll = {
  partial: !0,
  tokenize: Bl
}, zl = {
  partial: !0,
  tokenize: Ml
};
function Dl(e) {
  let n = e.length;
  for (; n-- && !(e[n][0] === "enter" && e[n][1].type === "htmlFlow"); )
    ;
  return n > 1 && e[n - 2][1].type === "linePrefix" && (e[n][1].start = e[n - 2][1].start, e[n + 1][1].start = e[n - 2][1].start, e.splice(n - 2, 2)), e;
}
function Fl(e, n, t) {
  const r = this;
  let i, l, o, a, c;
  return u;
  function u(h) {
    return s(h);
  }
  function s(h) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(h), f;
  }
  function f(h) {
    return h === 33 ? (e.consume(h), g) : h === 47 ? (e.consume(h), l = !0, v) : h === 63 ? (e.consume(h), i = 3, r.interrupt ? n : d) : ge(h) ? (e.consume(h), o = String.fromCharCode(h), I) : t(h);
  }
  function g(h) {
    return h === 45 ? (e.consume(h), i = 2, p) : h === 91 ? (e.consume(h), i = 5, a = 0, E) : ge(h) ? (e.consume(h), i = 4, r.interrupt ? n : d) : t(h);
  }
  function p(h) {
    return h === 45 ? (e.consume(h), r.interrupt ? n : d) : t(h);
  }
  function E(h) {
    const N = "CDATA[";
    return h === N.charCodeAt(a++) ? (e.consume(h), a === N.length ? r.interrupt ? n : _ : E) : t(h);
  }
  function v(h) {
    return ge(h) ? (e.consume(h), o = String.fromCharCode(h), I) : t(h);
  }
  function I(h) {
    if (h === null || h === 47 || h === 62 || ae(h)) {
      const N = h === 47, te = o.toLowerCase();
      return !N && !l && St.includes(te) ? (i = 1, r.interrupt ? n(h) : _(h)) : Ol.includes(o.toLowerCase()) ? (i = 6, N ? (e.consume(h), k) : r.interrupt ? n(h) : _(h)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? t(h) : l ? O(h) : P(h));
    }
    return h === 45 || fe(h) ? (e.consume(h), o += String.fromCharCode(h), I) : t(h);
  }
  function k(h) {
    return h === 62 ? (e.consume(h), r.interrupt ? n : _) : t(h);
  }
  function O(h) {
    return $(h) ? (e.consume(h), O) : V(h);
  }
  function P(h) {
    return h === 47 ? (e.consume(h), V) : h === 58 || h === 95 || ge(h) ? (e.consume(h), H) : $(h) ? (e.consume(h), P) : V(h);
  }
  function H(h) {
    return h === 45 || h === 46 || h === 58 || h === 95 || fe(h) ? (e.consume(h), H) : Y(h);
  }
  function Y(h) {
    return h === 61 ? (e.consume(h), x) : $(h) ? (e.consume(h), Y) : P(h);
  }
  function x(h) {
    return h === null || h === 60 || h === 61 || h === 62 || h === 96 ? t(h) : h === 34 || h === 39 ? (e.consume(h), c = h, M) : $(h) ? (e.consume(h), x) : W(h);
  }
  function M(h) {
    return h === c ? (e.consume(h), c = null, F) : h === null || j(h) ? t(h) : (e.consume(h), M);
  }
  function W(h) {
    return h === null || h === 34 || h === 39 || h === 47 || h === 60 || h === 61 || h === 62 || h === 96 || ae(h) ? Y(h) : (e.consume(h), W);
  }
  function F(h) {
    return h === 47 || h === 62 || $(h) ? P(h) : t(h);
  }
  function V(h) {
    return h === 62 ? (e.consume(h), A) : t(h);
  }
  function A(h) {
    return h === null || j(h) ? _(h) : $(h) ? (e.consume(h), A) : t(h);
  }
  function _(h) {
    return h === 45 && i === 2 ? (e.consume(h), U) : h === 60 && i === 1 ? (e.consume(h), Q) : h === 62 && i === 4 ? (e.consume(h), m) : h === 63 && i === 3 ? (e.consume(h), d) : h === 93 && i === 5 ? (e.consume(h), ie) : j(h) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(Ll, w, q)(h)) : h === null || j(h) ? (e.exit("htmlFlowData"), q(h)) : (e.consume(h), _);
  }
  function q(h) {
    return e.check(zl, R, w)(h);
  }
  function R(h) {
    return e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), T;
  }
  function T(h) {
    return h === null || j(h) ? q(h) : (e.enter("htmlFlowData"), _(h));
  }
  function U(h) {
    return h === 45 ? (e.consume(h), d) : _(h);
  }
  function Q(h) {
    return h === 47 ? (e.consume(h), o = "", ne) : _(h);
  }
  function ne(h) {
    if (h === 62) {
      const N = o.toLowerCase();
      return St.includes(N) ? (e.consume(h), m) : _(h);
    }
    return ge(h) && o.length < 8 ? (e.consume(h), o += String.fromCharCode(h), ne) : _(h);
  }
  function ie(h) {
    return h === 93 ? (e.consume(h), d) : _(h);
  }
  function d(h) {
    return h === 62 ? (e.consume(h), m) : h === 45 && i === 2 ? (e.consume(h), d) : _(h);
  }
  function m(h) {
    return h === null || j(h) ? (e.exit("htmlFlowData"), w(h)) : (e.consume(h), m);
  }
  function w(h) {
    return e.exit("htmlFlow"), n(h);
  }
}
function Ml(e, n, t) {
  const r = this;
  return i;
  function i(o) {
    return j(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), l) : t(o);
  }
  function l(o) {
    return r.parser.lazy[r.now().line] ? t(o) : n(o);
  }
}
function Bl(e, n, t) {
  return r;
  function r(i) {
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(ln, n, t);
  }
}
const Ul = {
  name: "htmlText",
  tokenize: Vl
};
function Vl(e, n, t) {
  const r = this;
  let i, l, o;
  return a;
  function a(d) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(d), c;
  }
  function c(d) {
    return d === 33 ? (e.consume(d), u) : d === 47 ? (e.consume(d), Y) : d === 63 ? (e.consume(d), P) : ge(d) ? (e.consume(d), W) : t(d);
  }
  function u(d) {
    return d === 45 ? (e.consume(d), s) : d === 91 ? (e.consume(d), l = 0, E) : ge(d) ? (e.consume(d), O) : t(d);
  }
  function s(d) {
    return d === 45 ? (e.consume(d), p) : t(d);
  }
  function f(d) {
    return d === null ? t(d) : d === 45 ? (e.consume(d), g) : j(d) ? (o = f, Q(d)) : (e.consume(d), f);
  }
  function g(d) {
    return d === 45 ? (e.consume(d), p) : f(d);
  }
  function p(d) {
    return d === 62 ? U(d) : d === 45 ? g(d) : f(d);
  }
  function E(d) {
    const m = "CDATA[";
    return d === m.charCodeAt(l++) ? (e.consume(d), l === m.length ? v : E) : t(d);
  }
  function v(d) {
    return d === null ? t(d) : d === 93 ? (e.consume(d), I) : j(d) ? (o = v, Q(d)) : (e.consume(d), v);
  }
  function I(d) {
    return d === 93 ? (e.consume(d), k) : v(d);
  }
  function k(d) {
    return d === 62 ? U(d) : d === 93 ? (e.consume(d), k) : v(d);
  }
  function O(d) {
    return d === null || d === 62 ? U(d) : j(d) ? (o = O, Q(d)) : (e.consume(d), O);
  }
  function P(d) {
    return d === null ? t(d) : d === 63 ? (e.consume(d), H) : j(d) ? (o = P, Q(d)) : (e.consume(d), P);
  }
  function H(d) {
    return d === 62 ? U(d) : P(d);
  }
  function Y(d) {
    return ge(d) ? (e.consume(d), x) : t(d);
  }
  function x(d) {
    return d === 45 || fe(d) ? (e.consume(d), x) : M(d);
  }
  function M(d) {
    return j(d) ? (o = M, Q(d)) : $(d) ? (e.consume(d), M) : U(d);
  }
  function W(d) {
    return d === 45 || fe(d) ? (e.consume(d), W) : d === 47 || d === 62 || ae(d) ? F(d) : t(d);
  }
  function F(d) {
    return d === 47 ? (e.consume(d), U) : d === 58 || d === 95 || ge(d) ? (e.consume(d), V) : j(d) ? (o = F, Q(d)) : $(d) ? (e.consume(d), F) : U(d);
  }
  function V(d) {
    return d === 45 || d === 46 || d === 58 || d === 95 || fe(d) ? (e.consume(d), V) : A(d);
  }
  function A(d) {
    return d === 61 ? (e.consume(d), _) : j(d) ? (o = A, Q(d)) : $(d) ? (e.consume(d), A) : F(d);
  }
  function _(d) {
    return d === null || d === 60 || d === 61 || d === 62 || d === 96 ? t(d) : d === 34 || d === 39 ? (e.consume(d), i = d, q) : j(d) ? (o = _, Q(d)) : $(d) ? (e.consume(d), _) : (e.consume(d), R);
  }
  function q(d) {
    return d === i ? (e.consume(d), i = void 0, T) : d === null ? t(d) : j(d) ? (o = q, Q(d)) : (e.consume(d), q);
  }
  function R(d) {
    return d === null || d === 34 || d === 39 || d === 60 || d === 61 || d === 96 ? t(d) : d === 47 || d === 62 || ae(d) ? F(d) : (e.consume(d), R);
  }
  function T(d) {
    return d === 47 || d === 62 || ae(d) ? F(d) : t(d);
  }
  function U(d) {
    return d === 62 ? (e.consume(d), e.exit("htmlTextData"), e.exit("htmlText"), n) : t(d);
  }
  function Q(d) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), ne;
  }
  function ne(d) {
    return $(d) ? G(e, ie, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(d) : ie(d);
  }
  function ie(d) {
    return e.enter("htmlTextData"), o(d);
  }
}
const Bn = {
  name: "labelEnd",
  resolveAll: Yl,
  resolveTo: Wl,
  tokenize: Xl
}, ql = {
  tokenize: Jl
}, Hl = {
  tokenize: Gl
}, $l = {
  tokenize: Ql
};
function Yl(e) {
  let n = -1;
  const t = [];
  for (; ++n < e.length; ) {
    const r = e[n][1];
    if (t.push(e[n]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
      const i = r.type === "labelImage" ? 4 : 2;
      r.type = "data", n += i;
    }
  }
  return e.length !== t.length && ye(e, 0, e.length, t), e;
}
function Wl(e, n) {
  let t = e.length, r = 0, i, l, o, a;
  for (; t--; )
    if (i = e[t][1], l) {
      if (i.type === "link" || i.type === "labelLink" && i._inactive)
        break;
      e[t][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
    } else if (o) {
      if (e[t][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (l = t, i.type !== "labelLink")) {
        r = 2;
        break;
      }
    } else i.type === "labelEnd" && (o = t);
  const c = {
    type: e[l][1].type === "labelLink" ? "link" : "image",
    start: {
      ...e[l][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  }, u = {
    type: "label",
    start: {
      ...e[l][1].start
    },
    end: {
      ...e[o][1].end
    }
  }, s = {
    type: "labelText",
    start: {
      ...e[l + r + 2][1].end
    },
    end: {
      ...e[o - 2][1].start
    }
  };
  return a = [["enter", c, n], ["enter", u, n]], a = pe(a, e.slice(l + 1, l + r + 3)), a = pe(a, [["enter", s, n]]), a = pe(a, Mn(n.parser.constructs.insideSpan.null, e.slice(l + r + 4, o - 3), n)), a = pe(a, [["exit", s, n], e[o - 2], e[o - 1], ["exit", u, n]]), a = pe(a, e.slice(o + 1)), a = pe(a, [["exit", c, n]]), ye(e, l, e.length, a), e;
}
function Xl(e, n, t) {
  const r = this;
  let i = r.events.length, l, o;
  for (; i--; )
    if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
      l = r.events[i][1];
      break;
    }
  return a;
  function a(g) {
    return l ? l._inactive ? f(g) : (o = r.parser.defined.includes(Pe(r.sliceSerialize({
      start: l.end,
      end: r.now()
    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(g), e.exit("labelMarker"), e.exit("labelEnd"), c) : t(g);
  }
  function c(g) {
    return g === 40 ? e.attempt(ql, s, o ? s : f)(g) : g === 91 ? e.attempt(Hl, s, o ? u : f)(g) : o ? s(g) : f(g);
  }
  function u(g) {
    return e.attempt($l, s, f)(g);
  }
  function s(g) {
    return n(g);
  }
  function f(g) {
    return l._balanced = !0, t(g);
  }
}
function Jl(e, n, t) {
  return r;
  function r(f) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(f), e.exit("resourceMarker"), i;
  }
  function i(f) {
    return ae(f) ? Ve(e, l)(f) : l(f);
  }
  function l(f) {
    return f === 41 ? s(f) : fr(e, o, a, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(f);
  }
  function o(f) {
    return ae(f) ? Ve(e, c)(f) : s(f);
  }
  function a(f) {
    return t(f);
  }
  function c(f) {
    return f === 34 || f === 39 || f === 40 ? hr(e, u, t, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(f) : s(f);
  }
  function u(f) {
    return ae(f) ? Ve(e, s)(f) : s(f);
  }
  function s(f) {
    return f === 41 ? (e.enter("resourceMarker"), e.consume(f), e.exit("resourceMarker"), e.exit("resource"), n) : t(f);
  }
}
function Gl(e, n, t) {
  const r = this;
  return i;
  function i(a) {
    return pr.call(r, e, l, o, "reference", "referenceMarker", "referenceString")(a);
  }
  function l(a) {
    return r.parser.defined.includes(Pe(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? n(a) : t(a);
  }
  function o(a) {
    return t(a);
  }
}
function Ql(e, n, t) {
  return r;
  function r(l) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(l), e.exit("referenceMarker"), i;
  }
  function i(l) {
    return l === 93 ? (e.enter("referenceMarker"), e.consume(l), e.exit("referenceMarker"), e.exit("reference"), n) : t(l);
  }
}
const Kl = {
  name: "labelStartImage",
  resolveAll: Bn.resolveAll,
  tokenize: Zl
};
function Zl(e, n, t) {
  const r = this;
  return i;
  function i(a) {
    return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(a), e.exit("labelImageMarker"), l;
  }
  function l(a) {
    return a === 91 ? (e.enter("labelMarker"), e.consume(a), e.exit("labelMarker"), e.exit("labelImage"), o) : t(a);
  }
  function o(a) {
    return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? t(a) : n(a);
  }
}
const eo = {
  name: "labelStartLink",
  resolveAll: Bn.resolveAll,
  tokenize: no
};
function no(e, n, t) {
  const r = this;
  return i;
  function i(o) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(o), e.exit("labelMarker"), e.exit("labelLink"), l;
  }
  function l(o) {
    return o === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? t(o) : n(o);
  }
}
const hn = {
  name: "lineEnding",
  tokenize: to
};
function to(e, n) {
  return t;
  function t(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), G(e, n, "linePrefix");
  }
}
const nn = {
  name: "thematicBreak",
  tokenize: ro
};
function ro(e, n, t) {
  let r = 0, i;
  return l;
  function l(u) {
    return e.enter("thematicBreak"), o(u);
  }
  function o(u) {
    return i = u, a(u);
  }
  function a(u) {
    return u === i ? (e.enter("thematicBreakSequence"), c(u)) : r >= 3 && (u === null || j(u)) ? (e.exit("thematicBreak"), n(u)) : t(u);
  }
  function c(u) {
    return u === i ? (e.consume(u), r++, c) : (e.exit("thematicBreakSequence"), $(u) ? G(e, a, "whitespace")(u) : a(u));
  }
}
const oe = {
  continuation: {
    tokenize: ao
  },
  exit: so,
  name: "list",
  tokenize: oo
}, io = {
  partial: !0,
  tokenize: co
}, lo = {
  partial: !0,
  tokenize: uo
};
function oo(e, n, t) {
  const r = this, i = r.events[r.events.length - 1];
  let l = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, o = 0;
  return a;
  function a(p) {
    const E = r.containerState.type || (p === 42 || p === 43 || p === 45 ? "listUnordered" : "listOrdered");
    if (E === "listUnordered" ? !r.containerState.marker || p === r.containerState.marker : In(p)) {
      if (r.containerState.type || (r.containerState.type = E, e.enter(E, {
        _container: !0
      })), E === "listUnordered")
        return e.enter("listItemPrefix"), p === 42 || p === 45 ? e.check(nn, t, u)(p) : u(p);
      if (!r.interrupt || p === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), c(p);
    }
    return t(p);
  }
  function c(p) {
    return In(p) && ++o < 10 ? (e.consume(p), c) : (!r.interrupt || o < 2) && (r.containerState.marker ? p === r.containerState.marker : p === 41 || p === 46) ? (e.exit("listItemValue"), u(p)) : t(p);
  }
  function u(p) {
    return e.enter("listItemMarker"), e.consume(p), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || p, e.check(
      ln,
      // Can’t be empty when interrupting.
      r.interrupt ? t : s,
      e.attempt(io, g, f)
    );
  }
  function s(p) {
    return r.containerState.initialBlankLine = !0, l++, g(p);
  }
  function f(p) {
    return $(p) ? (e.enter("listItemPrefixWhitespace"), e.consume(p), e.exit("listItemPrefixWhitespace"), g) : t(p);
  }
  function g(p) {
    return r.containerState.size = l + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, n(p);
  }
}
function ao(e, n, t) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(ln, i, l);
  function i(a) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, G(e, n, "listItemIndent", r.containerState.size + 1)(a);
  }
  function l(a) {
    return r.containerState.furtherBlankLines || !$(a) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, o(a)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(lo, n, o)(a));
  }
  function o(a) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, G(e, e.attempt(oe, n, t), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a);
  }
}
function uo(e, n, t) {
  const r = this;
  return G(e, i, "listItemIndent", r.containerState.size + 1);
  function i(l) {
    const o = r.events[r.events.length - 1];
    return o && o[1].type === "listItemIndent" && o[2].sliceSerialize(o[1], !0).length === r.containerState.size ? n(l) : t(l);
  }
}
function so(e) {
  e.exit(this.containerState.type);
}
function co(e, n, t) {
  const r = this;
  return G(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function i(l) {
    const o = r.events[r.events.length - 1];
    return !$(l) && o && o[1].type === "listItemPrefixWhitespace" ? n(l) : t(l);
  }
}
const Et = {
  name: "setextUnderline",
  resolveTo: fo,
  tokenize: po
};
function fo(e, n) {
  let t = e.length, r, i, l;
  for (; t--; )
    if (e[t][0] === "enter") {
      if (e[t][1].type === "content") {
        r = t;
        break;
      }
      e[t][1].type === "paragraph" && (i = t);
    } else
      e[t][1].type === "content" && e.splice(t, 1), !l && e[t][1].type === "definition" && (l = t);
  const o = {
    type: "setextHeading",
    start: {
      ...e[r][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  };
  return e[i][1].type = "setextHeadingText", l ? (e.splice(i, 0, ["enter", o, n]), e.splice(l + 1, 0, ["exit", e[r][1], n]), e[r][1].end = {
    ...e[l][1].end
  }) : e[r][1] = o, e.push(["exit", o, n]), e;
}
function po(e, n, t) {
  const r = this;
  let i;
  return l;
  function l(u) {
    let s = r.events.length, f;
    for (; s--; )
      if (r.events[s][1].type !== "lineEnding" && r.events[s][1].type !== "linePrefix" && r.events[s][1].type !== "content") {
        f = r.events[s][1].type === "paragraph";
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || f) ? (e.enter("setextHeadingLine"), i = u, o(u)) : t(u);
  }
  function o(u) {
    return e.enter("setextHeadingLineSequence"), a(u);
  }
  function a(u) {
    return u === i ? (e.consume(u), a) : (e.exit("setextHeadingLineSequence"), $(u) ? G(e, c, "lineSuffix")(u) : c(u));
  }
  function c(u) {
    return u === null || j(u) ? (e.exit("setextHeadingLine"), n(u)) : t(u);
  }
}
const ho = {
  tokenize: mo
};
function mo(e) {
  const n = this, t = e.attempt(
    // Try to parse a blank line.
    ln,
    r,
    // Try to parse initial flow (essentially, only code).
    e.attempt(this.parser.constructs.flowInitial, i, G(e, e.attempt(this.parser.constructs.flow, i, e.attempt(kl, i)), "linePrefix"))
  );
  return t;
  function r(l) {
    if (l === null) {
      e.consume(l);
      return;
    }
    return e.enter("lineEndingBlank"), e.consume(l), e.exit("lineEndingBlank"), n.currentConstruct = void 0, t;
  }
  function i(l) {
    if (l === null) {
      e.consume(l);
      return;
    }
    return e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), n.currentConstruct = void 0, t;
  }
}
const go = {
  resolveAll: dr()
}, yo = mr("string"), xo = mr("text");
function mr(e) {
  return {
    resolveAll: dr(e === "text" ? ko : void 0),
    tokenize: n
  };
  function n(t) {
    const r = this, i = this.parser.constructs[e], l = t.attempt(i, o, a);
    return o;
    function o(s) {
      return u(s) ? l(s) : a(s);
    }
    function a(s) {
      if (s === null) {
        t.consume(s);
        return;
      }
      return t.enter("data"), t.consume(s), c;
    }
    function c(s) {
      return u(s) ? (t.exit("data"), l(s)) : (t.consume(s), c);
    }
    function u(s) {
      if (s === null)
        return !0;
      const f = i[s];
      let g = -1;
      if (f)
        for (; ++g < f.length; ) {
          const p = f[g];
          if (!p.previous || p.previous.call(r, r.previous))
            return !0;
        }
      return !1;
    }
  }
}
function dr(e) {
  return n;
  function n(t, r) {
    let i = -1, l;
    for (; ++i <= t.length; )
      l === void 0 ? t[i] && t[i][1].type === "data" && (l = i, i++) : (!t[i] || t[i][1].type !== "data") && (i !== l + 2 && (t[l][1].end = t[i - 1][1].end, t.splice(l + 2, i - l - 2), i = l + 2), l = void 0);
    return e ? e(t, r) : t;
  }
}
function ko(e, n) {
  let t = 0;
  for (; ++t <= e.length; )
    if ((t === e.length || e[t][1].type === "lineEnding") && e[t - 1][1].type === "data") {
      const r = e[t - 1][1], i = n.sliceStream(r);
      let l = i.length, o = -1, a = 0, c;
      for (; l--; ) {
        const u = i[l];
        if (typeof u == "string") {
          for (o = u.length; u.charCodeAt(o - 1) === 32; )
            a++, o--;
          if (o) break;
          o = -1;
        } else if (u === -2)
          c = !0, a++;
        else if (u !== -1) {
          l++;
          break;
        }
      }
      if (n._contentTypeTextTrailing && t === e.length && (a = 0), a) {
        const u = {
          type: t === e.length || c || a < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: l ? o : r.start._bufferIndex + o,
            _index: r.start._index + l,
            line: r.end.line,
            column: r.end.column - a,
            offset: r.end.offset - a
          },
          end: {
            ...r.end
          }
        };
        r.end = {
          ...u.start
        }, r.start.offset === r.end.offset ? Object.assign(r, u) : (e.splice(t, 0, ["enter", u, n], ["exit", u, n]), t += 2);
      }
      t++;
    }
  return e;
}
const bo = {
  42: oe,
  43: oe,
  45: oe,
  48: oe,
  49: oe,
  50: oe,
  51: oe,
  52: oe,
  53: oe,
  54: oe,
  55: oe,
  56: oe,
  57: oe,
  62: ar
}, wo = {
  91: Cl
}, So = {
  [-2]: pn,
  [-1]: pn,
  32: pn
}, Eo = {
  35: Al,
  42: nn,
  45: [Et, nn],
  60: jl,
  61: Et,
  95: nn,
  96: wt,
  126: wt
}, Co = {
  38: sr,
  92: ur
}, To = {
  [-5]: hn,
  [-4]: hn,
  [-3]: hn,
  33: Kl,
  38: sr,
  42: Pn,
  60: [el, Ul],
  91: eo,
  92: [Pl, ur],
  93: Bn,
  95: Pn,
  96: hl
}, vo = {
  null: [Pn, go]
}, Io = {
  null: [42, 95]
}, Po = {
  null: []
}, _o = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: Io,
  contentInitial: wo,
  disable: Po,
  document: bo,
  flow: Eo,
  flowInitial: So,
  insideSpan: vo,
  string: Co,
  text: To
}, Symbol.toStringTag, { value: "Module" }));
function Ao(e, n, t) {
  let r = {
    _bufferIndex: -1,
    _index: 0,
    line: t && t.line || 1,
    column: t && t.column || 1,
    offset: t && t.offset || 0
  };
  const i = {}, l = [];
  let o = [], a = [];
  const c = {
    attempt: M(Y),
    check: M(x),
    consume: O,
    enter: P,
    exit: H,
    interrupt: M(x, {
      interrupt: !0
    })
  }, u = {
    code: null,
    containerState: {},
    defineSkip: v,
    events: [],
    now: E,
    parser: e,
    previous: null,
    sliceSerialize: g,
    sliceStream: p,
    write: f
  };
  let s = n.tokenize.call(u, c);
  return n.resolveAll && l.push(n), u;
  function f(A) {
    return o = pe(o, A), I(), o[o.length - 1] !== null ? [] : (W(n, 0), u.events = Mn(l, u.events, u), u.events);
  }
  function g(A, _) {
    return No(p(A), _);
  }
  function p(A) {
    return Ro(o, A);
  }
  function E() {
    const {
      _bufferIndex: A,
      _index: _,
      line: q,
      column: R,
      offset: T
    } = r;
    return {
      _bufferIndex: A,
      _index: _,
      line: q,
      column: R,
      offset: T
    };
  }
  function v(A) {
    i[A.line] = A.column, V();
  }
  function I() {
    let A;
    for (; r._index < o.length; ) {
      const _ = o[r._index];
      if (typeof _ == "string")
        for (A = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === A && r._bufferIndex < _.length; )
          k(_.charCodeAt(r._bufferIndex));
      else
        k(_);
    }
  }
  function k(A) {
    s = s(A);
  }
  function O(A) {
    j(A) ? (r.line++, r.column = 1, r.offset += A === -3 ? 2 : 1, V()) : A !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    o[r._index].length && (r._bufferIndex = -1, r._index++)), u.previous = A;
  }
  function P(A, _) {
    const q = _ || {};
    return q.type = A, q.start = E(), u.events.push(["enter", q, u]), a.push(q), q;
  }
  function H(A) {
    const _ = a.pop();
    return _.end = E(), u.events.push(["exit", _, u]), _;
  }
  function Y(A, _) {
    W(A, _.from);
  }
  function x(A, _) {
    _.restore();
  }
  function M(A, _) {
    return q;
    function q(R, T, U) {
      let Q, ne, ie, d;
      return Array.isArray(R) ? (
        /* c8 ignore next 1 */
        w(R)
      ) : "tokenize" in R ? (
        // Looks like a construct.
        w([
          /** @type {Construct} */
          R
        ])
      ) : m(R);
      function m(K) {
        return L;
        function L(Z) {
          const le = Z !== null && K[Z], me = Z !== null && K.null, Je = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(le) ? le : le ? [le] : [],
            ...Array.isArray(me) ? me : me ? [me] : []
          ];
          return w(Je)(Z);
        }
      }
      function w(K) {
        return Q = K, ne = 0, K.length === 0 ? U : h(K[ne]);
      }
      function h(K) {
        return L;
        function L(Z) {
          return d = F(), ie = K, K.partial || (u.currentConstruct = K), K.name && u.parser.constructs.disable.null.includes(K.name) ? te() : K.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            _ ? Object.assign(Object.create(u), _) : u,
            c,
            N,
            te
          )(Z);
        }
      }
      function N(K) {
        return A(ie, d), T;
      }
      function te(K) {
        return d.restore(), ++ne < Q.length ? h(Q[ne]) : U;
      }
    }
  }
  function W(A, _) {
    A.resolveAll && !l.includes(A) && l.push(A), A.resolve && ye(u.events, _, u.events.length - _, A.resolve(u.events.slice(_), u)), A.resolveTo && (u.events = A.resolveTo(u.events, u));
  }
  function F() {
    const A = E(), _ = u.previous, q = u.currentConstruct, R = u.events.length, T = Array.from(a);
    return {
      from: R,
      restore: U
    };
    function U() {
      r = A, u.previous = _, u.currentConstruct = q, u.events.length = R, a = T, V();
    }
  }
  function V() {
    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
  }
}
function Ro(e, n) {
  const t = n.start._index, r = n.start._bufferIndex, i = n.end._index, l = n.end._bufferIndex;
  let o;
  if (t === i)
    o = [e[t].slice(r, l)];
  else {
    if (o = e.slice(t, i), r > -1) {
      const a = o[0];
      typeof a == "string" ? o[0] = a.slice(r) : o.shift();
    }
    l > 0 && o.push(e[i].slice(0, l));
  }
  return o;
}
function No(e, n) {
  let t = -1;
  const r = [];
  let i;
  for (; ++t < e.length; ) {
    const l = e[t];
    let o;
    if (typeof l == "string")
      o = l;
    else switch (l) {
      case -5: {
        o = "\r";
        break;
      }
      case -4: {
        o = `
`;
        break;
      }
      case -3: {
        o = `\r
`;
        break;
      }
      case -2: {
        o = n ? " " : "	";
        break;
      }
      case -1: {
        if (!n && i) continue;
        o = " ";
        break;
      }
      default:
        o = String.fromCharCode(l);
    }
    i = l === -2, r.push(o);
  }
  return r.join("");
}
function Oo(e) {
  const r = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      Mi([_o, ...(e || {}).extensions || []])
    ),
    content: i(Wi),
    defined: [],
    document: i(Ji),
    flow: i(ho),
    lazy: {},
    string: i(yo),
    text: i(xo)
  };
  return r;
  function i(l) {
    return o;
    function o(a) {
      return Ao(r, l, a);
    }
  }
}
function jo(e) {
  for (; !cr(e); )
    ;
  return e;
}
const Ct = /[\0\t\n\r]/g;
function Lo() {
  let e = 1, n = "", t = !0, r;
  return i;
  function i(l, o, a) {
    const c = [];
    let u, s, f, g, p;
    for (l = n + (typeof l == "string" ? l.toString() : new TextDecoder(o || void 0).decode(l)), f = 0, n = "", t && (l.charCodeAt(0) === 65279 && f++, t = void 0); f < l.length; ) {
      if (Ct.lastIndex = f, u = Ct.exec(l), g = u && u.index !== void 0 ? u.index : l.length, p = l.charCodeAt(g), !u) {
        n = l.slice(f);
        break;
      }
      if (p === 10 && f === g && r)
        c.push(-3), r = void 0;
      else
        switch (r && (c.push(-5), r = void 0), f < g && (c.push(l.slice(f, g)), e += g - f), p) {
          case 0: {
            c.push(65533), e++;
            break;
          }
          case 9: {
            for (s = Math.ceil(e / 4) * 4, c.push(-2); e++ < s; ) c.push(-1);
            break;
          }
          case 10: {
            c.push(-4), e = 1;
            break;
          }
          default:
            r = !0, e = 1;
        }
      f = g + 1;
    }
    return a && (r && c.push(-5), n && c.push(n), c.push(null)), c;
  }
}
const zo = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function Do(e) {
  return e.replace(zo, Fo);
}
function Fo(e, n, t) {
  if (n)
    return n;
  if (t.charCodeAt(0) === 35) {
    const i = t.charCodeAt(1), l = i === 120 || i === 88;
    return or(t.slice(l ? 2 : 1), l ? 16 : 10);
  }
  return Fn(t) || e;
}
const gr = {}.hasOwnProperty;
function Mo(e, n, t) {
  return typeof n != "string" && (t = n, n = void 0), Bo(t)(jo(Oo(t).document().write(Lo()(e, n, !0))));
}
function Bo(e) {
  const n = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: l(Gn),
      autolinkProtocol: F,
      autolinkEmail: F,
      atxHeading: l(Wn),
      blockQuote: l(me),
      characterEscape: F,
      characterReference: F,
      codeFenced: l(Je),
      codeFencedFenceInfo: o,
      codeFencedFenceMeta: o,
      codeIndented: l(Je, o),
      codeText: l(Ir, o),
      codeTextData: F,
      data: F,
      codeFlowValue: F,
      definition: l(Pr),
      definitionDestinationString: o,
      definitionLabelString: o,
      definitionTitleString: o,
      emphasis: l(_r),
      hardBreakEscape: l(Xn),
      hardBreakTrailing: l(Xn),
      htmlFlow: l(Jn, o),
      htmlFlowData: F,
      htmlText: l(Jn, o),
      htmlTextData: F,
      image: l(Ar),
      label: o,
      link: l(Gn),
      listItem: l(Rr),
      listItemValue: g,
      listOrdered: l(Qn, f),
      listUnordered: l(Qn),
      paragraph: l(Nr),
      reference: h,
      referenceString: o,
      resourceDestinationString: o,
      resourceTitleString: o,
      setextHeading: l(Wn),
      strong: l(Or),
      thematicBreak: l(Lr)
    },
    exit: {
      atxHeading: c(),
      atxHeadingSequence: Y,
      autolink: c(),
      autolinkEmail: le,
      autolinkProtocol: Z,
      blockQuote: c(),
      characterEscapeValue: V,
      characterReferenceMarkerHexadecimal: te,
      characterReferenceMarkerNumeric: te,
      characterReferenceValue: K,
      characterReference: L,
      codeFenced: c(I),
      codeFencedFence: v,
      codeFencedFenceInfo: p,
      codeFencedFenceMeta: E,
      codeFlowValue: V,
      codeIndented: c(k),
      codeText: c(T),
      codeTextData: V,
      data: V,
      definition: c(),
      definitionDestinationString: H,
      definitionLabelString: O,
      definitionTitleString: P,
      emphasis: c(),
      hardBreakEscape: c(_),
      hardBreakTrailing: c(_),
      htmlFlow: c(q),
      htmlFlowData: V,
      htmlText: c(R),
      htmlTextData: V,
      image: c(Q),
      label: ie,
      labelText: ne,
      lineEnding: A,
      link: c(U),
      listItem: c(),
      listOrdered: c(),
      listUnordered: c(),
      paragraph: c(),
      referenceString: N,
      resourceDestinationString: d,
      resourceTitleString: m,
      resource: w,
      setextHeading: c(W),
      setextHeadingLineSequence: M,
      setextHeadingText: x,
      strong: c(),
      thematicBreak: c()
    }
  };
  yr(n, (e || {}).mdastExtensions || []);
  const t = {};
  return r;
  function r(y) {
    let C = {
      type: "root",
      children: []
    };
    const z = {
      stack: [C],
      tokenStack: [],
      config: n,
      enter: a,
      exit: u,
      buffer: o,
      resume: s,
      data: t
    }, B = [];
    let X = -1;
    for (; ++X < y.length; )
      if (y[X][1].type === "listOrdered" || y[X][1].type === "listUnordered")
        if (y[X][0] === "enter")
          B.push(X);
        else {
          const he = B.pop();
          X = i(y, he, X);
        }
    for (X = -1; ++X < y.length; ) {
      const he = n[y[X][0]];
      gr.call(he, y[X][1].type) && he[y[X][1].type].call(Object.assign({
        sliceSerialize: y[X][2].sliceSerialize
      }, z), y[X][1]);
    }
    if (z.tokenStack.length > 0) {
      const he = z.tokenStack[z.tokenStack.length - 1];
      (he[1] || Tt).call(z, void 0, he[0]);
    }
    for (C.position = {
      start: be(y.length > 0 ? y[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: be(y.length > 0 ? y[y.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, X = -1; ++X < n.transforms.length; )
      C = n.transforms[X](C) || C;
    return C;
  }
  function i(y, C, z) {
    let B = C - 1, X = -1, he = !1, Se, xe, Re, Ne;
    for (; ++B <= z; ) {
      const se = y[B];
      switch (se[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          se[0] === "enter" ? X++ : X--, Ne = void 0;
          break;
        }
        case "lineEndingBlank": {
          se[0] === "enter" && (Se && !Ne && !X && !Re && (Re = B), Ne = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          Ne = void 0;
      }
      if (!X && se[0] === "enter" && se[1].type === "listItemPrefix" || X === -1 && se[0] === "exit" && (se[1].type === "listUnordered" || se[1].type === "listOrdered")) {
        if (Se) {
          let Ce = B;
          for (xe = void 0; Ce--; ) {
            const ke = y[Ce];
            if (ke[1].type === "lineEnding" || ke[1].type === "lineEndingBlank") {
              if (ke[0] === "exit") continue;
              xe && (y[xe][1].type = "lineEndingBlank", he = !0), ke[1].type = "lineEnding", xe = Ce;
            } else if (!(ke[1].type === "linePrefix" || ke[1].type === "blockQuotePrefix" || ke[1].type === "blockQuotePrefixWhitespace" || ke[1].type === "blockQuoteMarker" || ke[1].type === "listItemIndent")) break;
          }
          Re && (!xe || Re < xe) && (Se._spread = !0), Se.end = Object.assign({}, xe ? y[xe][1].start : se[1].end), y.splice(xe || B, 0, ["exit", Se, se[2]]), B++, z++;
        }
        if (se[1].type === "listItemPrefix") {
          const Ce = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, se[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          Se = Ce, y.splice(B, 0, ["enter", Ce, se[2]]), B++, z++, Re = void 0, Ne = !0;
        }
      }
    }
    return y[C][1]._spread = he, z;
  }
  function l(y, C) {
    return z;
    function z(B) {
      a.call(this, y(B), B), C && C.call(this, B);
    }
  }
  function o() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function a(y, C, z) {
    this.stack[this.stack.length - 1].children.push(y), this.stack.push(y), this.tokenStack.push([C, z || void 0]), y.position = {
      start: be(C.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function c(y) {
    return C;
    function C(z) {
      y && y.call(this, z), u.call(this, z);
    }
  }
  function u(y, C) {
    const z = this.stack.pop(), B = this.tokenStack.pop();
    if (B)
      B[0].type !== y.type && (C ? C.call(this, y, B[0]) : (B[1] || Tt).call(this, y, B[0]));
    else throw new Error("Cannot close `" + y.type + "` (" + Ue({
      start: y.start,
      end: y.end
    }) + "): it’s not open");
    z.position.end = be(y.end);
  }
  function s() {
    return Di(this.stack.pop());
  }
  function f() {
    this.data.expectingFirstListItemValue = !0;
  }
  function g(y) {
    if (this.data.expectingFirstListItemValue) {
      const C = this.stack[this.stack.length - 2];
      C.start = Number.parseInt(this.sliceSerialize(y), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function p() {
    const y = this.resume(), C = this.stack[this.stack.length - 1];
    C.lang = y;
  }
  function E() {
    const y = this.resume(), C = this.stack[this.stack.length - 1];
    C.meta = y;
  }
  function v() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function I() {
    const y = this.resume(), C = this.stack[this.stack.length - 1];
    C.value = y.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function k() {
    const y = this.resume(), C = this.stack[this.stack.length - 1];
    C.value = y.replace(/(\r?\n|\r)$/g, "");
  }
  function O(y) {
    const C = this.resume(), z = this.stack[this.stack.length - 1];
    z.label = C, z.identifier = Pe(this.sliceSerialize(y)).toLowerCase();
  }
  function P() {
    const y = this.resume(), C = this.stack[this.stack.length - 1];
    C.title = y;
  }
  function H() {
    const y = this.resume(), C = this.stack[this.stack.length - 1];
    C.url = y;
  }
  function Y(y) {
    const C = this.stack[this.stack.length - 1];
    if (!C.depth) {
      const z = this.sliceSerialize(y).length;
      C.depth = z;
    }
  }
  function x() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function M(y) {
    const C = this.stack[this.stack.length - 1];
    C.depth = this.sliceSerialize(y).codePointAt(0) === 61 ? 1 : 2;
  }
  function W() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function F(y) {
    const z = this.stack[this.stack.length - 1].children;
    let B = z[z.length - 1];
    (!B || B.type !== "text") && (B = jr(), B.position = {
      start: be(y.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, z.push(B)), this.stack.push(B);
  }
  function V(y) {
    const C = this.stack.pop();
    C.value += this.sliceSerialize(y), C.position.end = be(y.end);
  }
  function A(y) {
    const C = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const z = C.children[C.children.length - 1];
      z.position.end = be(y.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && n.canContainEols.includes(C.type) && (F.call(this, y), V.call(this, y));
  }
  function _() {
    this.data.atHardBreak = !0;
  }
  function q() {
    const y = this.resume(), C = this.stack[this.stack.length - 1];
    C.value = y;
  }
  function R() {
    const y = this.resume(), C = this.stack[this.stack.length - 1];
    C.value = y;
  }
  function T() {
    const y = this.resume(), C = this.stack[this.stack.length - 1];
    C.value = y;
  }
  function U() {
    const y = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const C = this.data.referenceType || "shortcut";
      y.type += "Reference", y.referenceType = C, delete y.url, delete y.title;
    } else
      delete y.identifier, delete y.label;
    this.data.referenceType = void 0;
  }
  function Q() {
    const y = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const C = this.data.referenceType || "shortcut";
      y.type += "Reference", y.referenceType = C, delete y.url, delete y.title;
    } else
      delete y.identifier, delete y.label;
    this.data.referenceType = void 0;
  }
  function ne(y) {
    const C = this.sliceSerialize(y), z = this.stack[this.stack.length - 2];
    z.label = Do(C), z.identifier = Pe(C).toLowerCase();
  }
  function ie() {
    const y = this.stack[this.stack.length - 1], C = this.resume(), z = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, z.type === "link") {
      const B = y.children;
      z.children = B;
    } else
      z.alt = C;
  }
  function d() {
    const y = this.resume(), C = this.stack[this.stack.length - 1];
    C.url = y;
  }
  function m() {
    const y = this.resume(), C = this.stack[this.stack.length - 1];
    C.title = y;
  }
  function w() {
    this.data.inReference = void 0;
  }
  function h() {
    this.data.referenceType = "collapsed";
  }
  function N(y) {
    const C = this.resume(), z = this.stack[this.stack.length - 1];
    z.label = C, z.identifier = Pe(this.sliceSerialize(y)).toLowerCase(), this.data.referenceType = "full";
  }
  function te(y) {
    this.data.characterReferenceType = y.type;
  }
  function K(y) {
    const C = this.sliceSerialize(y), z = this.data.characterReferenceType;
    let B;
    z ? (B = or(C, z === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : B = Fn(C);
    const X = this.stack[this.stack.length - 1];
    X.value += B;
  }
  function L(y) {
    const C = this.stack.pop();
    C.position.end = be(y.end);
  }
  function Z(y) {
    V.call(this, y);
    const C = this.stack[this.stack.length - 1];
    C.url = this.sliceSerialize(y);
  }
  function le(y) {
    V.call(this, y);
    const C = this.stack[this.stack.length - 1];
    C.url = "mailto:" + this.sliceSerialize(y);
  }
  function me() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function Je() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function Ir() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function Pr() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function _r() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function Wn() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function Xn() {
    return {
      type: "break"
    };
  }
  function Jn() {
    return {
      type: "html",
      value: ""
    };
  }
  function Ar() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function Gn() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function Qn(y) {
    return {
      type: "list",
      ordered: y.type === "listOrdered",
      start: null,
      spread: y._spread,
      children: []
    };
  }
  function Rr(y) {
    return {
      type: "listItem",
      spread: y._spread,
      checked: null,
      children: []
    };
  }
  function Nr() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function Or() {
    return {
      type: "strong",
      children: []
    };
  }
  function jr() {
    return {
      type: "text",
      value: ""
    };
  }
  function Lr() {
    return {
      type: "thematicBreak"
    };
  }
}
function be(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function yr(e, n) {
  let t = -1;
  for (; ++t < n.length; ) {
    const r = n[t];
    Array.isArray(r) ? yr(e, r) : Uo(e, r);
  }
}
function Uo(e, n) {
  let t;
  for (t in n)
    if (gr.call(n, t))
      switch (t) {
        case "canContainEols": {
          const r = n[t];
          r && e[t].push(...r);
          break;
        }
        case "transforms": {
          const r = n[t];
          r && e[t].push(...r);
          break;
        }
        case "enter":
        case "exit": {
          const r = n[t];
          r && Object.assign(e[t], r);
          break;
        }
      }
}
function Tt(e, n) {
  throw e ? new Error("Cannot close `" + e.type + "` (" + Ue({
    start: e.start,
    end: e.end
  }) + "): a different token (`" + n.type + "`, " + Ue({
    start: n.start,
    end: n.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + n.type + "`, " + Ue({
    start: n.start,
    end: n.end
  }) + ") is still open");
}
function Vo(e) {
  const n = this;
  n.parser = t;
  function t(r) {
    return Mo(r, {
      ...n.data("settings"),
      ...e,
      // Note: these options are not in the readme.
      // The goal is for them to be set by plugins on `data` instead of being
      // passed by users.
      extensions: n.data("micromarkExtensions") || [],
      mdastExtensions: n.data("fromMarkdownExtensions") || []
    });
  }
}
function qo(e, n) {
  const t = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(n), !0)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function Ho(e, n) {
  const t = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(n, t), [e.applyData(n, t), { type: "text", value: `
` }];
}
function $o(e, n) {
  const t = n.value ? n.value + `
` : "", r = {}, i = n.lang ? n.lang.split(/\s+/) : [];
  i.length > 0 && (r.className = ["language-" + i[0]]);
  let l = {
    type: "element",
    tagName: "code",
    properties: r,
    children: [{ type: "text", value: t }]
  };
  return n.meta && (l.data = { meta: n.meta }), e.patch(n, l), l = e.applyData(n, l), l = { type: "element", tagName: "pre", properties: {}, children: [l] }, e.patch(n, l), l;
}
function Yo(e, n) {
  const t = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function Wo(e, n) {
  const t = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function Xo(e, n) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(n.identifier).toUpperCase(), i = Ae(r.toLowerCase()), l = e.footnoteOrder.indexOf(r);
  let o, a = e.footnoteCounts.get(r);
  a === void 0 ? (a = 0, e.footnoteOrder.push(r), o = e.footnoteOrder.length) : o = l + 1, a += 1, e.footnoteCounts.set(r, a);
  const c = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + t + "fn-" + i,
      id: t + "fnref-" + i + (a > 1 ? "-" + a : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(o) }]
  };
  e.patch(n, c);
  const u = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [c]
  };
  return e.patch(n, u), e.applyData(n, u);
}
function Jo(e, n) {
  const t = {
    type: "element",
    tagName: "h" + n.depth,
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function Go(e, n) {
  if (e.options.allowDangerousHtml) {
    const t = { type: "raw", value: n.value };
    return e.patch(n, t), e.applyData(n, t);
  }
}
function xr(e, n) {
  const t = n.referenceType;
  let r = "]";
  if (t === "collapsed" ? r += "[]" : t === "full" && (r += "[" + (n.label || n.identifier) + "]"), n.type === "imageReference")
    return [{ type: "text", value: "![" + n.alt + r }];
  const i = e.all(n), l = i[0];
  l && l.type === "text" ? l.value = "[" + l.value : i.unshift({ type: "text", value: "[" });
  const o = i[i.length - 1];
  return o && o.type === "text" ? o.value += r : i.push({ type: "text", value: r }), i;
}
function Qo(e, n) {
  const t = String(n.identifier).toUpperCase(), r = e.definitionById.get(t);
  if (!r)
    return xr(e, n);
  const i = { src: Ae(r.url || ""), alt: n.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const l = { type: "element", tagName: "img", properties: i, children: [] };
  return e.patch(n, l), e.applyData(n, l);
}
function Ko(e, n) {
  const t = { src: Ae(n.url) };
  n.alt !== null && n.alt !== void 0 && (t.alt = n.alt), n.title !== null && n.title !== void 0 && (t.title = n.title);
  const r = { type: "element", tagName: "img", properties: t, children: [] };
  return e.patch(n, r), e.applyData(n, r);
}
function Zo(e, n) {
  const t = { type: "text", value: n.value.replace(/\r?\n|\r/g, " ") };
  e.patch(n, t);
  const r = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [t]
  };
  return e.patch(n, r), e.applyData(n, r);
}
function ea(e, n) {
  const t = String(n.identifier).toUpperCase(), r = e.definitionById.get(t);
  if (!r)
    return xr(e, n);
  const i = { href: Ae(r.url || "") };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const l = {
    type: "element",
    tagName: "a",
    properties: i,
    children: e.all(n)
  };
  return e.patch(n, l), e.applyData(n, l);
}
function na(e, n) {
  const t = { href: Ae(n.url) };
  n.title !== null && n.title !== void 0 && (t.title = n.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: t,
    children: e.all(n)
  };
  return e.patch(n, r), e.applyData(n, r);
}
function ta(e, n, t) {
  const r = e.all(n), i = t ? ra(t) : kr(n), l = {}, o = [];
  if (typeof n.checked == "boolean") {
    const s = r[0];
    let f;
    s && s.type === "element" && s.tagName === "p" ? f = s : (f = { type: "element", tagName: "p", properties: {}, children: [] }, r.unshift(f)), f.children.length > 0 && f.children.unshift({ type: "text", value: " " }), f.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: n.checked, disabled: !0 },
      children: []
    }), l.className = ["task-list-item"];
  }
  let a = -1;
  for (; ++a < r.length; ) {
    const s = r[a];
    (i || a !== 0 || s.type !== "element" || s.tagName !== "p") && o.push({ type: "text", value: `
` }), s.type === "element" && s.tagName === "p" && !i ? o.push(...s.children) : o.push(s);
  }
  const c = r[r.length - 1];
  c && (i || c.type !== "element" || c.tagName !== "p") && o.push({ type: "text", value: `
` });
  const u = { type: "element", tagName: "li", properties: l, children: o };
  return e.patch(n, u), e.applyData(n, u);
}
function ra(e) {
  let n = !1;
  if (e.type === "list") {
    n = e.spread || !1;
    const t = e.children;
    let r = -1;
    for (; !n && ++r < t.length; )
      n = kr(t[r]);
  }
  return n;
}
function kr(e) {
  const n = e.spread;
  return n ?? e.children.length > 1;
}
function ia(e, n) {
  const t = {}, r = e.all(n);
  let i = -1;
  for (typeof n.start == "number" && n.start !== 1 && (t.start = n.start); ++i < r.length; ) {
    const o = r[i];
    if (o.type === "element" && o.tagName === "li" && o.properties && Array.isArray(o.properties.className) && o.properties.className.includes("task-list-item")) {
      t.className = ["contains-task-list"];
      break;
    }
  }
  const l = {
    type: "element",
    tagName: n.ordered ? "ol" : "ul",
    properties: t,
    children: e.wrap(r, !0)
  };
  return e.patch(n, l), e.applyData(n, l);
}
function la(e, n) {
  const t = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function oa(e, n) {
  const t = { type: "root", children: e.wrap(e.all(n)) };
  return e.patch(n, t), e.applyData(n, t);
}
function aa(e, n) {
  const t = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function ua(e, n) {
  const t = e.all(n), r = t.shift(), i = [];
  if (r) {
    const o = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: e.wrap([r], !0)
    };
    e.patch(n.children[0], o), i.push(o);
  }
  if (t.length > 0) {
    const o = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: e.wrap(t, !0)
    }, a = jn(n.children[1]), c = Zt(n.children[n.children.length - 1]);
    a && c && (o.position = { start: a, end: c }), i.push(o);
  }
  const l = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(i, !0)
  };
  return e.patch(n, l), e.applyData(n, l);
}
function sa(e, n, t) {
  const r = t ? t.children : void 0, l = (r ? r.indexOf(n) : 1) === 0 ? "th" : "td", o = t && t.type === "table" ? t.align : void 0, a = o ? o.length : n.children.length;
  let c = -1;
  const u = [];
  for (; ++c < a; ) {
    const f = n.children[c], g = {}, p = o ? o[c] : void 0;
    p && (g.align = p);
    let E = { type: "element", tagName: l, properties: g, children: [] };
    f && (E.children = e.all(f), e.patch(f, E), E = e.applyData(f, E)), u.push(E);
  }
  const s = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(u, !0)
  };
  return e.patch(n, s), e.applyData(n, s);
}
function ca(e, n) {
  const t = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
const vt = 9, It = 32;
function fa(e) {
  const n = String(e), t = /\r?\n|\r/g;
  let r = t.exec(n), i = 0;
  const l = [];
  for (; r; )
    l.push(
      Pt(n.slice(i, r.index), i > 0, !0),
      r[0]
    ), i = r.index + r[0].length, r = t.exec(n);
  return l.push(Pt(n.slice(i), i > 0, !1)), l.join("");
}
function Pt(e, n, t) {
  let r = 0, i = e.length;
  if (n) {
    let l = e.codePointAt(r);
    for (; l === vt || l === It; )
      r++, l = e.codePointAt(r);
  }
  if (t) {
    let l = e.codePointAt(i - 1);
    for (; l === vt || l === It; )
      i--, l = e.codePointAt(i - 1);
  }
  return i > r ? e.slice(r, i) : "";
}
function pa(e, n) {
  const t = { type: "text", value: fa(String(n.value)) };
  return e.patch(n, t), e.applyData(n, t);
}
function ha(e, n) {
  const t = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(n, t), e.applyData(n, t);
}
const ma = {
  blockquote: qo,
  break: Ho,
  code: $o,
  delete: Yo,
  emphasis: Wo,
  footnoteReference: Xo,
  heading: Jo,
  html: Go,
  imageReference: Qo,
  image: Ko,
  inlineCode: Zo,
  linkReference: ea,
  link: na,
  listItem: ta,
  list: ia,
  paragraph: la,
  // @ts-expect-error: root is different, but hard to type.
  root: oa,
  strong: aa,
  table: ua,
  tableCell: ca,
  tableRow: sa,
  text: pa,
  thematicBreak: ha,
  toml: Ke,
  yaml: Ke,
  definition: Ke,
  footnoteDefinition: Ke
};
function Ke() {
}
const br = -1, on = 0, qe = 1, tn = 2, Un = 3, Vn = 4, qn = 5, Hn = 6, wr = 7, Sr = 8, _t = typeof self == "object" ? self : globalThis, da = (e, n) => {
  const t = (i, l) => (e.set(l, i), i), r = (i) => {
    if (e.has(i))
      return e.get(i);
    const [l, o] = n[i];
    switch (l) {
      case on:
      case br:
        return t(o, i);
      case qe: {
        const a = t([], i);
        for (const c of o)
          a.push(r(c));
        return a;
      }
      case tn: {
        const a = t({}, i);
        for (const [c, u] of o)
          a[r(c)] = r(u);
        return a;
      }
      case Un:
        return t(new Date(o), i);
      case Vn: {
        const { source: a, flags: c } = o;
        return t(new RegExp(a, c), i);
      }
      case qn: {
        const a = t(/* @__PURE__ */ new Map(), i);
        for (const [c, u] of o)
          a.set(r(c), r(u));
        return a;
      }
      case Hn: {
        const a = t(/* @__PURE__ */ new Set(), i);
        for (const c of o)
          a.add(r(c));
        return a;
      }
      case wr: {
        const { name: a, message: c } = o;
        return t(new _t[a](c), i);
      }
      case Sr:
        return t(BigInt(o), i);
      case "BigInt":
        return t(Object(BigInt(o)), i);
      case "ArrayBuffer":
        return t(new Uint8Array(o).buffer, o);
      case "DataView": {
        const { buffer: a } = new Uint8Array(o);
        return t(new DataView(a), o);
      }
    }
    return t(new _t[l](o), i);
  };
  return r;
}, At = (e) => da(/* @__PURE__ */ new Map(), e)(0), ve = "", { toString: ga } = {}, { keys: ya } = Object, Be = (e) => {
  const n = typeof e;
  if (n !== "object" || !e)
    return [on, n];
  const t = ga.call(e).slice(8, -1);
  switch (t) {
    case "Array":
      return [qe, ve];
    case "Object":
      return [tn, ve];
    case "Date":
      return [Un, ve];
    case "RegExp":
      return [Vn, ve];
    case "Map":
      return [qn, ve];
    case "Set":
      return [Hn, ve];
    case "DataView":
      return [qe, t];
  }
  return t.includes("Array") ? [qe, t] : t.includes("Error") ? [wr, t] : [tn, t];
}, Ze = ([e, n]) => e === on && (n === "function" || n === "symbol"), xa = (e, n, t, r) => {
  const i = (o, a) => {
    const c = r.push(o) - 1;
    return t.set(a, c), c;
  }, l = (o) => {
    if (t.has(o))
      return t.get(o);
    let [a, c] = Be(o);
    switch (a) {
      case on: {
        let s = o;
        switch (c) {
          case "bigint":
            a = Sr, s = o.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + c);
            s = null;
            break;
          case "undefined":
            return i([br], o);
        }
        return i([a, s], o);
      }
      case qe: {
        if (c) {
          let g = o;
          return c === "DataView" ? g = new Uint8Array(o.buffer) : c === "ArrayBuffer" && (g = new Uint8Array(o)), i([c, [...g]], o);
        }
        const s = [], f = i([a, s], o);
        for (const g of o)
          s.push(l(g));
        return f;
      }
      case tn: {
        if (c)
          switch (c) {
            case "BigInt":
              return i([c, o.toString()], o);
            case "Boolean":
            case "Number":
            case "String":
              return i([c, o.valueOf()], o);
          }
        if (n && "toJSON" in o)
          return l(o.toJSON());
        const s = [], f = i([a, s], o);
        for (const g of ya(o))
          (e || !Ze(Be(o[g]))) && s.push([l(g), l(o[g])]);
        return f;
      }
      case Un:
        return i([a, o.toISOString()], o);
      case Vn: {
        const { source: s, flags: f } = o;
        return i([a, { source: s, flags: f }], o);
      }
      case qn: {
        const s = [], f = i([a, s], o);
        for (const [g, p] of o)
          (e || !(Ze(Be(g)) || Ze(Be(p)))) && s.push([l(g), l(p)]);
        return f;
      }
      case Hn: {
        const s = [], f = i([a, s], o);
        for (const g of o)
          (e || !Ze(Be(g))) && s.push(l(g));
        return f;
      }
    }
    const { message: u } = o;
    return i([a, { name: c, message: u }], o);
  };
  return l;
}, Rt = (e, { json: n, lossy: t } = {}) => {
  const r = [];
  return xa(!(n || t), !!n, /* @__PURE__ */ new Map(), r)(e), r;
}, rn = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, n) => n && ("json" in n || "lossy" in n) ? At(Rt(e, n)) : structuredClone(e)
) : (e, n) => At(Rt(e, n));
function ka(e, n) {
  const t = [{ type: "text", value: "↩" }];
  return n > 1 && t.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(n) }]
  }), t;
}
function ba(e, n) {
  return "Back to reference " + (e + 1) + (n > 1 ? "-" + n : "");
}
function wa(e) {
  const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", t = e.options.footnoteBackContent || ka, r = e.options.footnoteBackLabel || ba, i = e.options.footnoteLabel || "Footnotes", l = e.options.footnoteLabelTagName || "h2", o = e.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, a = [];
  let c = -1;
  for (; ++c < e.footnoteOrder.length; ) {
    const u = e.footnoteById.get(
      e.footnoteOrder[c]
    );
    if (!u)
      continue;
    const s = e.all(u), f = String(u.identifier).toUpperCase(), g = Ae(f.toLowerCase());
    let p = 0;
    const E = [], v = e.footnoteCounts.get(f);
    for (; v !== void 0 && ++p <= v; ) {
      E.length > 0 && E.push({ type: "text", value: " " });
      let O = typeof t == "string" ? t : t(c, p);
      typeof O == "string" && (O = { type: "text", value: O }), E.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + n + "fnref-" + g + (p > 1 ? "-" + p : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof r == "string" ? r : r(c, p),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(O) ? O : [O]
      });
    }
    const I = s[s.length - 1];
    if (I && I.type === "element" && I.tagName === "p") {
      const O = I.children[I.children.length - 1];
      O && O.type === "text" ? O.value += " " : I.children.push({ type: "text", value: " " }), I.children.push(...E);
    } else
      s.push(...E);
    const k = {
      type: "element",
      tagName: "li",
      properties: { id: n + "fn-" + g },
      children: e.wrap(s, !0)
    };
    e.patch(u, k), a.push(k);
  }
  if (a.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: l,
          properties: {
            ...rn(o),
            id: "footnote-label"
          },
          children: [{ type: "text", value: i }]
        },
        { type: "text", value: `
` },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: e.wrap(a, !0)
        },
        { type: "text", value: `
` }
      ]
    };
}
const Er = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  (function(e) {
    if (e == null)
      return Ta;
    if (typeof e == "function")
      return an(e);
    if (typeof e == "object")
      return Array.isArray(e) ? Sa(e) : (
        // Cast because `ReadonlyArray` goes into the above but `isArray`
        // narrows to `Array`.
        Ea(
          /** @type {Props} */
          e
        )
      );
    if (typeof e == "string")
      return Ca(e);
    throw new Error("Expected function, string, or object as test");
  })
);
function Sa(e) {
  const n = [];
  let t = -1;
  for (; ++t < e.length; )
    n[t] = Er(e[t]);
  return an(r);
  function r(...i) {
    let l = -1;
    for (; ++l < n.length; )
      if (n[l].apply(this, i)) return !0;
    return !1;
  }
}
function Ea(e) {
  const n = (
    /** @type {Record<string, unknown>} */
    e
  );
  return an(t);
  function t(r) {
    const i = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      r
    );
    let l;
    for (l in e)
      if (i[l] !== n[l]) return !1;
    return !0;
  }
}
function Ca(e) {
  return an(n);
  function n(t) {
    return t && t.type === e;
  }
}
function an(e) {
  return n;
  function n(t, r, i) {
    return !!(va(t) && e.call(
      this,
      t,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function Ta() {
  return !0;
}
function va(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const Cr = [], Ia = !0, Nt = !1, Pa = "skip";
function _a(e, n, t, r) {
  let i;
  typeof n == "function" && typeof t != "function" ? (r = t, t = n) : i = n;
  const l = Er(i), o = r ? -1 : 1;
  a(e, void 0, [])();
  function a(c, u, s) {
    const f = (
      /** @type {Record<string, unknown>} */
      c && typeof c == "object" ? c : {}
    );
    if (typeof f.type == "string") {
      const p = (
        // `hast`
        typeof f.tagName == "string" ? f.tagName : (
          // `xast`
          typeof f.name == "string" ? f.name : void 0
        )
      );
      Object.defineProperty(g, "name", {
        value: "node (" + (c.type + (p ? "<" + p + ">" : "")) + ")"
      });
    }
    return g;
    function g() {
      let p = Cr, E, v, I;
      if ((!n || l(c, u, s[s.length - 1] || void 0)) && (p = Aa(t(c, s)), p[0] === Nt))
        return p;
      if ("children" in c && c.children) {
        const k = (
          /** @type {UnistParent} */
          c
        );
        if (k.children && p[0] !== Pa)
          for (v = (r ? k.children.length : -1) + o, I = s.concat(k); v > -1 && v < k.children.length; ) {
            const O = k.children[v];
            if (E = a(O, v, I)(), E[0] === Nt)
              return E;
            v = typeof E[1] == "number" ? E[1] : v + o;
          }
      }
      return p;
    }
  }
}
function Aa(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [Ia, e] : e == null ? Cr : [e];
}
function Tr(e, n, t, r) {
  let i, l, o;
  typeof n == "function" && typeof t != "function" ? (l = void 0, o = n, i = t) : (l = n, o = t, i = r), _a(e, l, a, i);
  function a(c, u) {
    const s = u[u.length - 1], f = s ? s.children.indexOf(c) : void 0;
    return o(c, f, s);
  }
}
const _n = {}.hasOwnProperty, Ra = {};
function Na(e, n) {
  const t = n || Ra, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), o = { ...ma, ...t.handlers }, a = {
    all: u,
    applyData: ja,
    definitionById: r,
    footnoteById: i,
    footnoteCounts: l,
    footnoteOrder: [],
    handlers: o,
    one: c,
    options: t,
    patch: Oa,
    wrap: za
  };
  return Tr(e, function(s) {
    if (s.type === "definition" || s.type === "footnoteDefinition") {
      const f = s.type === "definition" ? r : i, g = String(s.identifier).toUpperCase();
      f.has(g) || f.set(g, s);
    }
  }), a;
  function c(s, f) {
    const g = s.type, p = a.handlers[g];
    if (_n.call(a.handlers, g) && p)
      return p(a, s, f);
    if (a.options.passThrough && a.options.passThrough.includes(g)) {
      if ("children" in s) {
        const { children: v, ...I } = s, k = rn(I);
        return k.children = a.all(s), k;
      }
      return rn(s);
    }
    return (a.options.unknownHandler || La)(a, s, f);
  }
  function u(s) {
    const f = [];
    if ("children" in s) {
      const g = s.children;
      let p = -1;
      for (; ++p < g.length; ) {
        const E = a.one(g[p], s);
        if (E) {
          if (p && g[p - 1].type === "break" && (!Array.isArray(E) && E.type === "text" && (E.value = Ot(E.value)), !Array.isArray(E) && E.type === "element")) {
            const v = E.children[0];
            v && v.type === "text" && (v.value = Ot(v.value));
          }
          Array.isArray(E) ? f.push(...E) : f.push(E);
        }
      }
    }
    return f;
  }
}
function Oa(e, n) {
  e.position && (n.position = pi(e));
}
function ja(e, n) {
  let t = n;
  if (e && e.data) {
    const r = e.data.hName, i = e.data.hChildren, l = e.data.hProperties;
    if (typeof r == "string")
      if (t.type === "element")
        t.tagName = r;
      else {
        const o = "children" in t ? t.children : [t];
        t = { type: "element", tagName: r, properties: {}, children: o };
      }
    t.type === "element" && l && Object.assign(t.properties, rn(l)), "children" in t && t.children && i !== null && i !== void 0 && (t.children = i);
  }
  return t;
}
function La(e, n) {
  const t = n.data || {}, r = "value" in n && !(_n.call(t, "hProperties") || _n.call(t, "hChildren")) ? { type: "text", value: n.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, r), e.applyData(n, r);
}
function za(e, n) {
  const t = [];
  let r = -1;
  for (n && t.push({ type: "text", value: `
` }); ++r < e.length; )
    r && t.push({ type: "text", value: `
` }), t.push(e[r]);
  return n && e.length > 0 && t.push({ type: "text", value: `
` }), t;
}
function Ot(e) {
  let n = 0, t = e.charCodeAt(n);
  for (; t === 9 || t === 32; )
    n++, t = e.charCodeAt(n);
  return e.slice(n);
}
function jt(e, n) {
  const t = Na(e, n), r = t.one(e, void 0), i = wa(t), l = Array.isArray(r) ? { type: "root", children: r } : r || { type: "root", children: [] };
  return i && l.children.push({ type: "text", value: `
` }, i), l;
}
function Da(e, n) {
  return e && "run" in e ? async function(t, r) {
    const i = (
      /** @type {HastRoot} */
      jt(t, { file: r, ...n })
    );
    await e.run(i, r);
  } : function(t, r) {
    return (
      /** @type {HastRoot} */
      jt(t, { file: r, ...e || n })
    );
  };
}
function Lt(e) {
  if (e)
    throw e;
}
var mn, zt;
function Fa() {
  if (zt) return mn;
  zt = 1;
  var e = Object.prototype.hasOwnProperty, n = Object.prototype.toString, t = Object.defineProperty, r = Object.getOwnPropertyDescriptor, i = function(u) {
    return typeof Array.isArray == "function" ? Array.isArray(u) : n.call(u) === "[object Array]";
  }, l = function(u) {
    if (!u || n.call(u) !== "[object Object]")
      return !1;
    var s = e.call(u, "constructor"), f = u.constructor && u.constructor.prototype && e.call(u.constructor.prototype, "isPrototypeOf");
    if (u.constructor && !s && !f)
      return !1;
    var g;
    for (g in u)
      ;
    return typeof g > "u" || e.call(u, g);
  }, o = function(u, s) {
    t && s.name === "__proto__" ? t(u, s.name, {
      enumerable: !0,
      configurable: !0,
      value: s.newValue,
      writable: !0
    }) : u[s.name] = s.newValue;
  }, a = function(u, s) {
    if (s === "__proto__")
      if (e.call(u, s)) {
        if (r)
          return r(u, s).value;
      } else return;
    return u[s];
  };
  return mn = function c() {
    var u, s, f, g, p, E, v = arguments[0], I = 1, k = arguments.length, O = !1;
    for (typeof v == "boolean" && (O = v, v = arguments[1] || {}, I = 2), (v == null || typeof v != "object" && typeof v != "function") && (v = {}); I < k; ++I)
      if (u = arguments[I], u != null)
        for (s in u)
          f = a(v, s), g = a(u, s), v !== g && (O && g && (l(g) || (p = i(g))) ? (p ? (p = !1, E = f && i(f) ? f : []) : E = f && l(f) ? f : {}, o(v, { name: s, newValue: c(O, E, g) })) : typeof g < "u" && o(v, { name: s, newValue: g }));
    return v;
  }, mn;
}
var Ma = Fa();
const dn = /* @__PURE__ */ Ht(Ma);
function An(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const n = Object.getPrototypeOf(e);
  return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Ba() {
  const e = [], n = { run: t, use: r };
  return n;
  function t(...i) {
    let l = -1;
    const o = i.pop();
    if (typeof o != "function")
      throw new TypeError("Expected function as last argument, not " + o);
    a(null, ...i);
    function a(c, ...u) {
      const s = e[++l];
      let f = -1;
      if (c) {
        o(c);
        return;
      }
      for (; ++f < i.length; )
        (u[f] === null || u[f] === void 0) && (u[f] = i[f]);
      i = u, s ? Ua(s, a)(...u) : o(null, ...u);
    }
  }
  function r(i) {
    if (typeof i != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + i
      );
    return e.push(i), n;
  }
}
function Ua(e, n) {
  let t;
  return r;
  function r(...o) {
    const a = e.length > o.length;
    let c;
    a && o.push(i);
    try {
      c = e.apply(this, o);
    } catch (u) {
      const s = (
        /** @type {Error} */
        u
      );
      if (a && t)
        throw s;
      return i(s);
    }
    a || (c && c.then && typeof c.then == "function" ? c.then(l, i) : c instanceof Error ? i(c) : l(c));
  }
  function i(o, ...a) {
    t || (t = !0, n(o, ...a));
  }
  function l(o) {
    i(null, o);
  }
}
const de = { basename: Va, dirname: qa, extname: Ha, join: $a, sep: "/" };
function Va(e, n) {
  if (n !== void 0 && typeof n != "string")
    throw new TypeError('"ext" argument must be a string');
  Xe(e);
  let t = 0, r = -1, i = e.length, l;
  if (n === void 0 || n.length === 0 || n.length > e.length) {
    for (; i--; )
      if (e.codePointAt(i) === 47) {
        if (l) {
          t = i + 1;
          break;
        }
      } else r < 0 && (l = !0, r = i + 1);
    return r < 0 ? "" : e.slice(t, r);
  }
  if (n === e)
    return "";
  let o = -1, a = n.length - 1;
  for (; i--; )
    if (e.codePointAt(i) === 47) {
      if (l) {
        t = i + 1;
        break;
      }
    } else
      o < 0 && (l = !0, o = i + 1), a > -1 && (e.codePointAt(i) === n.codePointAt(a--) ? a < 0 && (r = i) : (a = -1, r = o));
  return t === r ? r = o : r < 0 && (r = e.length), e.slice(t, r);
}
function qa(e) {
  if (Xe(e), e.length === 0)
    return ".";
  let n = -1, t = e.length, r;
  for (; --t; )
    if (e.codePointAt(t) === 47) {
      if (r) {
        n = t;
        break;
      }
    } else r || (r = !0);
  return n < 0 ? e.codePointAt(0) === 47 ? "/" : "." : n === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, n);
}
function Ha(e) {
  Xe(e);
  let n = e.length, t = -1, r = 0, i = -1, l = 0, o;
  for (; n--; ) {
    const a = e.codePointAt(n);
    if (a === 47) {
      if (o) {
        r = n + 1;
        break;
      }
      continue;
    }
    t < 0 && (o = !0, t = n + 1), a === 46 ? i < 0 ? i = n : l !== 1 && (l = 1) : i > -1 && (l = -1);
  }
  return i < 0 || t < 0 || // We saw a non-dot character immediately before the dot.
  l === 0 || // The (right-most) trimmed path component is exactly `..`.
  l === 1 && i === t - 1 && i === r + 1 ? "" : e.slice(i, t);
}
function $a(...e) {
  let n = -1, t;
  for (; ++n < e.length; )
    Xe(e[n]), e[n] && (t = t === void 0 ? e[n] : t + "/" + e[n]);
  return t === void 0 ? "." : Ya(t);
}
function Ya(e) {
  Xe(e);
  const n = e.codePointAt(0) === 47;
  let t = Wa(e, !n);
  return t.length === 0 && !n && (t = "."), t.length > 0 && e.codePointAt(e.length - 1) === 47 && (t += "/"), n ? "/" + t : t;
}
function Wa(e, n) {
  let t = "", r = 0, i = -1, l = 0, o = -1, a, c;
  for (; ++o <= e.length; ) {
    if (o < e.length)
      a = e.codePointAt(o);
    else {
      if (a === 47)
        break;
      a = 47;
    }
    if (a === 47) {
      if (!(i === o - 1 || l === 1)) if (i !== o - 1 && l === 2) {
        if (t.length < 2 || r !== 2 || t.codePointAt(t.length - 1) !== 46 || t.codePointAt(t.length - 2) !== 46) {
          if (t.length > 2) {
            if (c = t.lastIndexOf("/"), c !== t.length - 1) {
              c < 0 ? (t = "", r = 0) : (t = t.slice(0, c), r = t.length - 1 - t.lastIndexOf("/")), i = o, l = 0;
              continue;
            }
          } else if (t.length > 0) {
            t = "", r = 0, i = o, l = 0;
            continue;
          }
        }
        n && (t = t.length > 0 ? t + "/.." : "..", r = 2);
      } else
        t.length > 0 ? t += "/" + e.slice(i + 1, o) : t = e.slice(i + 1, o), r = o - i - 1;
      i = o, l = 0;
    } else a === 46 && l > -1 ? l++ : l = -1;
  }
  return t;
}
function Xe(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const Xa = { cwd: Ja };
function Ja() {
  return "/";
}
function Rn(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function Ga(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!Rn(e)) {
    const n = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw n.code = "ERR_INVALID_ARG_TYPE", n;
  }
  if (e.protocol !== "file:") {
    const n = new TypeError("The URL must be of scheme file");
    throw n.code = "ERR_INVALID_URL_SCHEME", n;
  }
  return Qa(e);
}
function Qa(e) {
  if (e.hostname !== "") {
    const r = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw r.code = "ERR_INVALID_FILE_URL_HOST", r;
  }
  const n = e.pathname;
  let t = -1;
  for (; ++t < n.length; )
    if (n.codePointAt(t) === 37 && n.codePointAt(t + 1) === 50) {
      const r = n.codePointAt(t + 2);
      if (r === 70 || r === 102) {
        const i = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw i.code = "ERR_INVALID_FILE_URL_PATH", i;
      }
    }
  return decodeURIComponent(n);
}
const gn = (
  /** @type {const} */
  [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
  ]
);
class vr {
  /**
   * Create a new virtual file.
   *
   * `options` is treated as:
   *
   * *   `string` or `Uint8Array` — `{value: options}`
   * *   `URL` — `{path: options}`
   * *   `VFile` — shallow copies its data over to the new file
   * *   `object` — all fields are shallow copied over to the new file
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * You cannot set `dirname` or `extname` without setting either `history`,
   * `path`, `basename`, or `stem` too.
   *
   * @param {Compatible | null | undefined} [value]
   *   File value.
   * @returns
   *   New instance.
   */
  constructor(n) {
    let t;
    n ? Rn(n) ? t = { path: n } : typeof n == "string" || Ka(n) ? t = { value: n } : t = n : t = {}, this.cwd = "cwd" in t ? "" : Xa.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let r = -1;
    for (; ++r < gn.length; ) {
      const l = gn[r];
      l in t && t[l] !== void 0 && t[l] !== null && (this[l] = l === "history" ? [...t[l]] : t[l]);
    }
    let i;
    for (i in t)
      gn.includes(i) || (this[i] = t[i]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? de.basename(this.path) : void 0;
  }
  /**
   * Set basename (including extname) (`'index.min.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} basename
   *   Basename.
   * @returns {undefined}
   *   Nothing.
   */
  set basename(n) {
    xn(n, "basename"), yn(n, "basename"), this.path = de.join(this.dirname || "", n);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? de.dirname(this.path) : void 0;
  }
  /**
   * Set the parent path (example: `'~'`).
   *
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} dirname
   *   Dirname.
   * @returns {undefined}
   *   Nothing.
   */
  set dirname(n) {
    Dt(this.basename, "dirname"), this.path = de.join(n || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? de.extname(this.path) : void 0;
  }
  /**
   * Set the extname (including dot) (example: `'.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} extname
   *   Extname.
   * @returns {undefined}
   *   Nothing.
   */
  set extname(n) {
    if (yn(n, "extname"), Dt(this.dirname, "extname"), n) {
      if (n.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (n.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = de.join(this.dirname, this.stem + (n || ""));
  }
  /**
   * Get the full path (example: `'~/index.min.js'`).
   *
   * @returns {string}
   *   Path.
   */
  get path() {
    return this.history[this.history.length - 1];
  }
  /**
   * Set the full path (example: `'~/index.min.js'`).
   *
   * Cannot be nullified.
   * You can set a file URL (a `URL` object with a `file:` protocol) which will
   * be turned into a path with `url.fileURLToPath`.
   *
   * @param {URL | string} path
   *   Path.
   * @returns {undefined}
   *   Nothing.
   */
  set path(n) {
    Rn(n) && (n = Ga(n)), xn(n, "path"), this.path !== n && this.history.push(n);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? de.basename(this.path, this.extname) : void 0;
  }
  /**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} stem
   *   Stem.
   * @returns {undefined}
   *   Nothing.
   */
  set stem(n) {
    xn(n, "stem"), yn(n, "stem"), this.path = de.join(this.dirname || "", n + (this.extname || ""));
  }
  // Normal prototypal methods.
  /**
   * Create a fatal message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `true` (error; file not usable)
   * and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {never}
   *   Never.
   * @throws {VFileMessage}
   *   Message.
   */
  fail(n, t, r) {
    const i = this.message(n, t, r);
    throw i.fatal = !0, i;
  }
  /**
   * Create an info message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `undefined` (info; change
   * likely not needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  info(n, t, r) {
    const i = this.message(n, t, r);
    return i.fatal = void 0, i;
  }
  /**
   * Create a message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `false` (warning; change may be
   * needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  message(n, t, r) {
    const i = new re(
      // @ts-expect-error: the overloads are fine.
      n,
      t,
      r
    );
    return this.path && (i.name = this.path + ":" + i.name, i.file = this.path), i.fatal = !1, this.messages.push(i), i;
  }
  /**
   * Serialize the file.
   *
   * > **Note**: which encodings are supported depends on the engine.
   * > For info on Node.js, see:
   * > <https://nodejs.org/api/util.html#whatwg-supported-encodings>.
   *
   * @param {string | null | undefined} [encoding='utf8']
   *   Character encoding to understand `value` as when it’s a `Uint8Array`
   *   (default: `'utf-8'`).
   * @returns {string}
   *   Serialized file.
   */
  toString(n) {
    return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(n || void 0).decode(this.value);
  }
}
function yn(e, n) {
  if (e && e.includes(de.sep))
    throw new Error(
      "`" + n + "` cannot be a path: did not expect `" + de.sep + "`"
    );
}
function xn(e, n) {
  if (!e)
    throw new Error("`" + n + "` cannot be empty");
}
function Dt(e, n) {
  if (!e)
    throw new Error("Setting `" + n + "` requires `path` to be set too");
}
function Ka(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const Za = (
  /**
   * @type {new <Parameters extends Array<unknown>, Result>(property: string | symbol) => (...parameters: Parameters) => Result}
   */
  /** @type {unknown} */
  /**
   * @this {Function}
   * @param {string | symbol} property
   * @returns {(...parameters: Array<unknown>) => unknown}
   */
  (function(e) {
    const r = (
      /** @type {Record<string | symbol, Function>} */
      // Prototypes do exist.
      // type-coverage:ignore-next-line
      this.constructor.prototype
    ), i = r[e], l = function() {
      return i.apply(l, arguments);
    };
    return Object.setPrototypeOf(l, r), l;
  })
), eu = {}.hasOwnProperty;
class $n extends Za {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = Ba();
  }
  /**
   * Copy a processor.
   *
   * @deprecated
   *   This is a private internal method and should not be used.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   New *unfrozen* processor ({@linkcode Processor}) that is
   *   configured to work the same as its ancestor.
   *   When the descendant processor is configured in the future it does not
   *   affect the ancestral processor.
   */
  copy() {
    const n = (
      /** @type {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>} */
      new $n()
    );
    let t = -1;
    for (; ++t < this.attachers.length; ) {
      const r = this.attachers[t];
      n.use(...r);
    }
    return n.data(dn(!0, {}, this.namespace)), n;
  }
  /**
   * Configure the processor with info available to all plugins.
   * Information is stored in an object.
   *
   * Typically, options can be given to a specific plugin, but sometimes it
   * makes sense to have information shared with several plugins.
   * For example, a list of HTML elements that are self-closing, which is
   * needed during all phases.
   *
   * > **Note**: setting information cannot occur on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * > **Note**: to register custom data in TypeScript, augment the
   * > {@linkcode Data} interface.
   *
   * @example
   *   This example show how to get and set info:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   const processor = unified().data('alpha', 'bravo')
   *
   *   processor.data('alpha') // => 'bravo'
   *
   *   processor.data() // => {alpha: 'bravo'}
   *
   *   processor.data({charlie: 'delta'})
   *
   *   processor.data() // => {charlie: 'delta'}
   *   ```
   *
   * @template {keyof Data} Key
   *
   * @overload
   * @returns {Data}
   *
   * @overload
   * @param {Data} dataset
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Key} key
   * @returns {Data[Key]}
   *
   * @overload
   * @param {Key} key
   * @param {Data[Key]} value
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @param {Data | Key} [key]
   *   Key to get or set, or entire dataset to set, or nothing to get the
   *   entire dataset (optional).
   * @param {Data[Key]} [value]
   *   Value to set (optional).
   * @returns {unknown}
   *   The current processor when setting, the value at `key` when getting, or
   *   the entire dataset when getting without key.
   */
  data(n, t) {
    return typeof n == "string" ? arguments.length === 2 ? (wn("data", this.frozen), this.namespace[n] = t, this) : eu.call(this.namespace, n) && this.namespace[n] || void 0 : n ? (wn("data", this.frozen), this.namespace = n, this) : this.namespace;
  }
  /**
   * Freeze a processor.
   *
   * Frozen processors are meant to be extended and not to be configured
   * directly.
   *
   * When a processor is frozen it cannot be unfrozen.
   * New processors working the same way can be created by calling the
   * processor.
   *
   * It’s possible to freeze processors explicitly by calling `.freeze()`.
   * Processors freeze automatically when `.parse()`, `.run()`, `.runSync()`,
   * `.stringify()`, `.process()`, or `.processSync()` are called.
   *
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   The current processor.
   */
  freeze() {
    if (this.frozen)
      return this;
    const n = (
      /** @type {Processor} */
      /** @type {unknown} */
      this
    );
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [t, ...r] = this.attachers[this.freezeIndex];
      if (r[0] === !1)
        continue;
      r[0] === !0 && (r[0] = void 0);
      const i = t.call(n, ...r);
      typeof i == "function" && this.transformers.use(i);
    }
    return this.frozen = !0, this.freezeIndex = Number.POSITIVE_INFINITY, this;
  }
  /**
   * Parse text to a syntax tree.
   *
   * > **Note**: `parse` freezes the processor if not already *frozen*.
   *
   * > **Note**: `parse` performs the parse phase, not the run phase or other
   * > phases.
   *
   * @param {Compatible | undefined} [file]
   *   file to parse (optional); typically `string` or `VFile`; any value
   *   accepted as `x` in `new VFile(x)`.
   * @returns {ParseTree extends undefined ? Node : ParseTree}
   *   Syntax tree representing `file`.
   */
  parse(n) {
    this.freeze();
    const t = en(n), r = this.parser || this.Parser;
    return kn("parse", r), r(String(t), t);
  }
  /**
   * Process the given file as configured on the processor.
   *
   * > **Note**: `process` freezes the processor if not already *frozen*.
   *
   * > **Note**: `process` performs the parse, run, and stringify phases.
   *
   * @overload
   * @param {Compatible | undefined} file
   * @param {ProcessCallback<VFileWithOutput<CompileResult>>} done
   * @returns {undefined}
   *
   * @overload
   * @param {Compatible | undefined} [file]
   * @returns {Promise<VFileWithOutput<CompileResult>>}
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`]; any value accepted as
   *   `x` in `new VFile(x)`.
   * @param {ProcessCallback<VFileWithOutput<CompileResult>> | undefined} [done]
   *   Callback (optional).
   * @returns {Promise<VFile> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise a promise, rejected with a fatal error or resolved with the
   *   processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  process(n, t) {
    const r = this;
    return this.freeze(), kn("process", this.parser || this.Parser), bn("process", this.compiler || this.Compiler), t ? i(void 0, t) : new Promise(i);
    function i(l, o) {
      const a = en(n), c = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        r.parse(a)
      );
      r.run(c, a, function(s, f, g) {
        if (s || !f || !g)
          return u(s);
        const p = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          f
        ), E = r.stringify(p, g);
        ru(E) ? g.value = E : g.result = E, u(
          s,
          /** @type {VFileWithOutput<CompileResult>} */
          g
        );
      });
      function u(s, f) {
        s || !f ? o(s) : l ? l(f) : t(void 0, f);
      }
    }
  }
  /**
   * Process the given file as configured on the processor.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `processSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `processSync` performs the parse, run, and stringify phases.
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`; any value accepted as
   *   `x` in `new VFile(x)`.
   * @returns {VFileWithOutput<CompileResult>}
   *   The processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  processSync(n) {
    let t = !1, r;
    return this.freeze(), kn("processSync", this.parser || this.Parser), bn("processSync", this.compiler || this.Compiler), this.process(n, i), Mt("processSync", "process", t), r;
    function i(l, o) {
      t = !0, Lt(l), r = o;
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * > **Note**: `run` freezes the processor if not already *frozen*.
   *
   * > **Note**: `run` performs the run phase, not other phases.
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} file
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} [file]
   * @returns {Promise<TailTree extends undefined ? Node : TailTree>}
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {(
   *   RunCallback<TailTree extends undefined ? Node : TailTree> |
   *   Compatible
   * )} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} [done]
   *   Callback (optional).
   * @returns {Promise<TailTree extends undefined ? Node : TailTree> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise, a promise rejected with a fatal error or resolved with the
   *   transformed tree.
   */
  run(n, t, r) {
    Ft(n), this.freeze();
    const i = this.transformers;
    return !r && typeof t == "function" && (r = t, t = void 0), r ? l(void 0, r) : new Promise(l);
    function l(o, a) {
      const c = en(t);
      i.run(n, c, u);
      function u(s, f, g) {
        const p = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          f || n
        );
        s ? a(s) : o ? o(p) : r(void 0, p, g);
      }
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `runSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `runSync` performs the run phase, not other phases.
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {TailTree extends undefined ? Node : TailTree}
   *   Transformed tree.
   */
  runSync(n, t) {
    let r = !1, i;
    return this.run(n, t, l), Mt("runSync", "run", r), i;
    function l(o, a) {
      Lt(o), i = a, r = !0;
    }
  }
  /**
   * Compile a syntax tree.
   *
   * > **Note**: `stringify` freezes the processor if not already *frozen*.
   *
   * > **Note**: `stringify` performs the stringify phase, not the run phase
   * > or other phases.
   *
   * @param {CompileTree extends undefined ? Node : CompileTree} tree
   *   Tree to compile.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {CompileResult extends undefined ? Value : CompileResult}
   *   Textual representation of the tree (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most compilers
   *   > return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  stringify(n, t) {
    this.freeze();
    const r = en(t), i = this.compiler || this.Compiler;
    return bn("stringify", i), Ft(n), i(n, r);
  }
  /**
   * Configure the processor to use a plugin, a list of usable values, or a
   * preset.
   *
   * If the processor is already using a plugin, the previous plugin
   * configuration is changed based on the options that are passed in.
   * In other words, the plugin is not added a second time.
   *
   * > **Note**: `use` cannot be called on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * @example
   *   There are many ways to pass plugins to `.use()`.
   *   This example gives an overview:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   unified()
   *     // Plugin with options:
   *     .use(pluginA, {x: true, y: true})
   *     // Passing the same plugin again merges configuration (to `{x: true, y: false, z: true}`):
   *     .use(pluginA, {y: false, z: true})
   *     // Plugins:
   *     .use([pluginB, pluginC])
   *     // Two plugins, the second with options:
   *     .use([pluginD, [pluginE, {}]])
   *     // Preset with plugins and settings:
   *     .use({plugins: [pluginF, [pluginG, {}]], settings: {position: false}})
   *     // Settings only:
   *     .use({settings: {position: false}})
   *   ```
   *
   * @template {Array<unknown>} [Parameters=[]]
   * @template {Node | string | undefined} [Input=undefined]
   * @template [Output=Input]
   *
   * @overload
   * @param {Preset | null | undefined} [preset]
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {PluggableList} list
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Plugin<Parameters, Input, Output>} plugin
   * @param {...(Parameters | [boolean])} parameters
   * @returns {UsePlugin<ParseTree, HeadTree, TailTree, CompileTree, CompileResult, Input, Output>}
   *
   * @param {PluggableList | Plugin | Preset | null | undefined} value
   *   Usable value.
   * @param {...unknown} parameters
   *   Parameters, when a plugin is given as a usable value.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   Current processor.
   */
  use(n, ...t) {
    const r = this.attachers, i = this.namespace;
    if (wn("use", this.frozen), n != null) if (typeof n == "function")
      c(n, t);
    else if (typeof n == "object")
      Array.isArray(n) ? a(n) : o(n);
    else
      throw new TypeError("Expected usable value, not `" + n + "`");
    return this;
    function l(u) {
      if (typeof u == "function")
        c(u, []);
      else if (typeof u == "object")
        if (Array.isArray(u)) {
          const [s, ...f] = (
            /** @type {PluginTuple<Array<unknown>>} */
            u
          );
          c(s, f);
        } else
          o(u);
      else
        throw new TypeError("Expected usable value, not `" + u + "`");
    }
    function o(u) {
      if (!("plugins" in u) && !("settings" in u))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      a(u.plugins), u.settings && (i.settings = dn(!0, i.settings, u.settings));
    }
    function a(u) {
      let s = -1;
      if (u != null) if (Array.isArray(u))
        for (; ++s < u.length; ) {
          const f = u[s];
          l(f);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + u + "`");
    }
    function c(u, s) {
      let f = -1, g = -1;
      for (; ++f < r.length; )
        if (r[f][0] === u) {
          g = f;
          break;
        }
      if (g === -1)
        r.push([u, ...s]);
      else if (s.length > 0) {
        let [p, ...E] = s;
        const v = r[g][1];
        An(v) && An(p) && (p = dn(!0, v, p)), r[g] = [u, p, ...E];
      }
    }
  }
}
const nu = new $n().freeze();
function kn(e, n) {
  if (typeof n != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function bn(e, n) {
  if (typeof n != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function wn(e, n) {
  if (n)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function Ft(e) {
  if (!An(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function Mt(e, n, t) {
  if (!t)
    throw new Error(
      "`" + e + "` finished async. Use `" + n + "` instead"
    );
}
function en(e) {
  return tu(e) ? e : new vr(e);
}
function tu(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function ru(e) {
  return typeof e == "string" || iu(e);
}
function iu(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const lu = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", Bt = [], Ut = { allowDangerousHtml: !0 }, ou = /^(https?|ircs?|mailto|xmpp)$/i, au = [
  { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
  { from: "allowDangerousHtml", id: "remove-buggy-html-in-markdown-parser" },
  {
    from: "allowNode",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowElement"
  },
  {
    from: "allowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowedElements"
  },
  { from: "className", id: "remove-classname" },
  {
    from: "disallowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "disallowedElements"
  },
  { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
  { from: "includeElementIndex", id: "#remove-includeelementindex" },
  {
    from: "includeNodeIndex",
    id: "change-includenodeindex-to-includeelementindex"
  },
  { from: "linkTarget", id: "remove-linktarget" },
  { from: "plugins", id: "change-plugins-to-remarkplugins", to: "remarkPlugins" },
  { from: "rawSourcePos", id: "#remove-rawsourcepos" },
  { from: "renderers", id: "change-renderers-to-components", to: "components" },
  { from: "source", id: "change-source-to-children", to: "children" },
  { from: "sourcePos", id: "#remove-sourcepos" },
  { from: "transformImageUri", id: "#add-urltransform", to: "urlTransform" },
  { from: "transformLinkUri", id: "#add-urltransform", to: "urlTransform" }
];
function uu(e) {
  const n = su(e), t = cu(e);
  return fu(n.runSync(n.parse(t), t), e);
}
function su(e) {
  const n = e.rehypePlugins || Bt, t = e.remarkPlugins || Bt, r = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...Ut } : Ut;
  return nu().use(Vo).use(t).use(Da, r).use(n);
}
function cu(e) {
  const n = e.children || "", t = new vr();
  return typeof n == "string" && (t.value = n), t;
}
function fu(e, n) {
  const t = n.allowedElements, r = n.allowElement, i = n.components, l = n.disallowedElements, o = n.skipHtml, a = n.unwrapDisallowed, c = n.urlTransform || pu;
  for (const s of au)
    Object.hasOwn(n, s.from) && ("" + s.from + (s.to ? "use `" + s.to + "` instead" : "remove it") + lu + s.id, void 0);
  return Tr(e, u), yi(e, {
    Fragment: fn.Fragment,
    components: i,
    ignoreInvalidStyle: !0,
    jsx: fn.jsx,
    jsxs: fn.jsxs,
    passKeys: !0,
    passNode: !0
  });
  function u(s, f, g) {
    if (s.type === "raw" && g && typeof f == "number")
      return o ? g.children.splice(f, 1) : g.children[f] = { type: "text", value: s.value }, f;
    if (s.type === "element") {
      let p;
      for (p in cn)
        if (Object.hasOwn(cn, p) && Object.hasOwn(s.properties, p)) {
          const E = s.properties[p], v = cn[p];
          (v === null || v.includes(s.tagName)) && (s.properties[p] = c(String(E || ""), p, s));
        }
    }
    if (s.type === "element") {
      let p = t ? !t.includes(s.tagName) : l ? l.includes(s.tagName) : !1;
      if (!p && r && typeof f == "number" && (p = !r(s, f, g)), p && g && typeof f == "number")
        return a && s.children ? g.children.splice(f, 1, ...s.children) : g.children.splice(f, 1), f;
    }
  }
}
function pu(e) {
  const n = e.indexOf(":"), t = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    n === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    i !== -1 && n > i || t !== -1 && n > t || r !== -1 && n > r || // It is a protocol, it should be allowed.
    ou.test(e.slice(0, n)) ? e : ""
  );
}
function Yn({ poem: e }) {
  return /* @__PURE__ */ S.jsxs("main", { className: "reader-poem translation-poem", children: [
    /* @__PURE__ */ S.jsxs("div", { className: "translation-grid", children: [
      /* @__PURE__ */ S.jsxs("section", { className: "translation-col", children: [
        /* @__PURE__ */ S.jsx("h2", { className: "translation-label", children: "Translation" }),
        /* @__PURE__ */ S.jsx("pre", { children: e.translation.content })
      ] }),
      /* @__PURE__ */ S.jsxs("section", { className: "translation-col", children: [
        /* @__PURE__ */ S.jsx("h2", { className: "translation-label", children: "Original" }),
        /* @__PURE__ */ S.jsx("pre", { children: e.original.content })
      ] })
    ] }),
    e.notes && /* @__PURE__ */ S.jsxs("section", { className: "translation-notes", children: [
      /* @__PURE__ */ S.jsx("h3", { children: "Notes" }),
      /* @__PURE__ */ S.jsx(uu, { children: e.notes.content })
    ] })
  ] });
}
function hu({
  title: e,
  description: n,
  poemsById: t,
  sections: r,
  searchIndex: i,
  currentPoem: l,
  currentId: o,
  selectPoem: a,
  showWorkshop: c = !0,
  showExplore: u = !0
}) {
  const [s, f] = $e(!1);
  return /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
    /* @__PURE__ */ S.jsxs("div", { className: "reader", children: [
      (e || n) && /* @__PURE__ */ S.jsxs("header", { className: "reader-header", children: [
        e && /* @__PURE__ */ S.jsx("h1", { className: "reader-title", children: e }),
        n && /* @__PURE__ */ S.jsx("p", { className: "reader-description", children: n })
      ] }),
      /* @__PURE__ */ S.jsx("aside", { className: `reader-nav ${s ? "reader-nav--open" : ""}`, children: /* @__PURE__ */ S.jsx(
        Ur,
        {
          poemsById: t,
          sections: r,
          searchIndex: i,
          currentId: o,
          onSelect: (g) => {
            a(g), f(!1);
          },
          showExplore: u
        }
      ) }),
      l?.kind === "poem" && /* @__PURE__ */ S.jsx($t, { poem: l }),
      l?.kind === "translation" && /* @__PURE__ */ S.jsx(Yn, { poem: l }),
      c && l && /* @__PURE__ */ S.jsx(Vr, { poemTitle: l.title })
    ] }),
    /* @__PURE__ */ S.jsx(
      "button",
      {
        className: "mobile-nav-toggle",
        onClick: () => f((g) => !g),
        children: s ? "CLOSE" : "CONTENTS"
      }
    )
  ] });
}
function mu(e) {
  const [n, t] = $e(
    e.linearOrder[0]
  ), r = n ? e.poemsById[n] ?? null : null;
  return {
    // For navigation: pass IDs, not poems
    poems: e.linearOrder,
    // For rendering
    currentPoem: r,
    currentId: n,
    // Selection
    selectPoem: t
  };
}
function wu({ readingModel: e, searchIndex: n, showWorkshop: t = !0, showExplore: r = !0 }) {
  if (!e)
    throw new Error("Reader requires a readingModel prop");
  if (!n)
    throw new Error("Reader requires a searchIndex prop");
  const {
    currentId: i,
    currentPoem: l,
    selectPoem: o
  } = mu(e);
  return /* @__PURE__ */ S.jsx(
    hu,
    {
      title: e.title,
      description: e.description,
      sections: e.sections,
      poemsById: e.poemsById,
      searchIndex: n,
      currentId: i,
      currentPoem: l,
      selectPoem: o,
      showWorkshop: t,
      showExplore: r
    }
  );
}
function Su({ readingModel: e }) {
  const { id: n } = qt();
  if (!n) return null;
  const t = e.poemsById[n];
  return t ? /* @__PURE__ */ S.jsxs("main", { className: "single-poem", children: [
    /* @__PURE__ */ S.jsx("header", { className: "single-poem-header", children: /* @__PURE__ */ S.jsx(Ye, { className: "reader-back-link", to: "/explore", children: "← Back to Explore" }) }),
    t.kind === "poem" && /* @__PURE__ */ S.jsx($t, { poem: t }),
    t.kind === "translation" && /* @__PURE__ */ S.jsx(Yn, { poem: t })
  ] }) : null;
}
function Eu({ readingModel: e }) {
  const { id: n } = qt();
  if (!n) return null;
  const t = e.poemsById[n];
  return !t || t.kind !== "translation" ? null : /* @__PURE__ */ S.jsxs("main", { className: "single-poem", children: [
    /* @__PURE__ */ S.jsx("header", { className: "single-poem-header", children: /* @__PURE__ */ S.jsx(Ye, { className: "reader-back-link", to: "/explore", children: "← Back to Explore" }) }),
    /* @__PURE__ */ S.jsx(Yn, { poem: t })
  ] });
}
function du({
  motifs: e,
  activeMotif: n,
  onSelect: t
}) {
  return /* @__PURE__ */ S.jsx("section", { className: "motifs-page", children: /* @__PURE__ */ S.jsxs("div", { className: "motifs-card", children: [
    /* @__PURE__ */ S.jsx("h2", { className: "motifs-heading", children: "R E C U R R I N G" }),
    /* @__PURE__ */ S.jsx("div", { className: "motifs-row", children: e.map((r) => {
      const i = n === r.term;
      return /* @__PURE__ */ S.jsxs(
        "button",
        {
          className: i ? "motif-item motif-item--active" : "motif-item",
          onClick: () => t(i ? null : r.term),
          children: [
            /* @__PURE__ */ S.jsx("span", { className: "motif-term", children: r.term }),
            /* @__PURE__ */ S.jsx("span", { className: "motif-count", children: r.poemCount })
          ]
        },
        r.term
      );
    }) })
  ] }) });
}
function gu({ poems: e, activeMotif: n }) {
  return /* @__PURE__ */ S.jsx("div", { className: "motif-results", children: n ? /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
    /* @__PURE__ */ S.jsxs("h3", { className: "motif-results-heading", children: [
      "Poems for “",
      n,
      "”"
    ] }),
    e.length === 0 ? /* @__PURE__ */ S.jsx("p", { className: "motif-empty", children: "No poems found." }) : /* @__PURE__ */ S.jsx("ul", { className: "motif-poem-list", children: e.map((t) => /* @__PURE__ */ S.jsx("li", { children: /* @__PURE__ */ S.jsx(Ye, { to: `/poem/${t.id}`, className: "motif-poem-link", children: t.title }) }, t.id)) })
  ] }) : /* @__PURE__ */ S.jsx("p", { className: "motif-empty", children: "Select a motif to see poems." }) });
}
function yu({ terms: e }) {
  return /* @__PURE__ */ S.jsx("div", { className: "explore-texture", children: e.map((n, t) => /* @__PURE__ */ S.jsx("span", { className: "texture-word", children: n }, `${n}-${t}`)) });
}
const xu = [
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
function Cu({ readingModel: e, motifStats: n }) {
  const t = n.texture.map((c) => c.term);
  t.length === 0 && t.push(...xu);
  const r = Array(120).fill(t).flat(), [i, l] = $e(null), o = n.terms.find((c) => c.term === i) ?? null, a = o ? o.poemIds.map((c) => e.poemsById[c]).filter((c) => !!c).map((c) => ({
    id: c.id,
    title: c.title
  })) : [];
  return /* @__PURE__ */ S.jsxs("main", { className: "explore-root", children: [
    /* @__PURE__ */ S.jsx(yu, { terms: r }),
    /* @__PURE__ */ S.jsx("header", { className: "explore-header", children: /* @__PURE__ */ S.jsx(Ye, { className: "reader-back-link", to: "/", children: "← Back to Reader" }) }),
    /* @__PURE__ */ S.jsx("div", { className: "explore-separator" }),
    /* @__PURE__ */ S.jsx("div", { className: "explore-card explore-content", children: /* @__PURE__ */ S.jsx(
      du,
      {
        motifs: n.terms,
        activeMotif: i,
        onSelect: l
      }
    ) }),
    /* @__PURE__ */ S.jsx("div", { className: "explore-separator" }),
    /* @__PURE__ */ S.jsx("div", { className: "explore-card explore-content", children: /* @__PURE__ */ S.jsx(
      gu,
      {
        poems: a,
        activeMotif: i
      }
    ) })
  ] });
}
export {
  Cu as ExplorePage,
  wu as Reader,
  Su as SinglePoemPage,
  Eu as SingleTranslationPage
};
