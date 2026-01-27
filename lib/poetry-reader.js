import gr, { useState as pn, useMemo as fi } from "react";
import { Link as hn, useParams as yr } from "react-router-dom";
function xr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var bn = { exports: {} }, nn = {};
var Rt;
function pi() {
  if (Rt) return nn;
  Rt = 1;
  var e = gr, n = /* @__PURE__ */ Symbol.for("react.element"), t = /* @__PURE__ */ Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(a, u, c) {
    var s, f = {}, d = null, p = null;
    c !== void 0 && (d = "" + c), u.key !== void 0 && (d = "" + u.key), u.ref !== void 0 && (p = u.ref);
    for (s in u) r.call(u, s) && !l.hasOwnProperty(s) && (f[s] = u[s]);
    if (a && a.defaultProps) for (s in u = a.defaultProps, u) f[s] === void 0 && (f[s] = u[s]);
    return { $$typeof: n, type: a, key: d, ref: p, props: f, _owner: i.current };
  }
  return nn.Fragment = t, nn.jsx = o, nn.jsxs = o, nn;
}
var tn = {};
var _t;
function hi() {
  return _t || (_t = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = gr, n = /* @__PURE__ */ Symbol.for("react.element"), t = /* @__PURE__ */ Symbol.for("react.portal"), r = /* @__PURE__ */ Symbol.for("react.fragment"), i = /* @__PURE__ */ Symbol.for("react.strict_mode"), l = /* @__PURE__ */ Symbol.for("react.profiler"), o = /* @__PURE__ */ Symbol.for("react.provider"), a = /* @__PURE__ */ Symbol.for("react.context"), u = /* @__PURE__ */ Symbol.for("react.forward_ref"), c = /* @__PURE__ */ Symbol.for("react.suspense"), s = /* @__PURE__ */ Symbol.for("react.suspense_list"), f = /* @__PURE__ */ Symbol.for("react.memo"), d = /* @__PURE__ */ Symbol.for("react.lazy"), p = /* @__PURE__ */ Symbol.for("react.offscreen"), v = Symbol.iterator, I = "@@iterator";
    function R(h) {
      if (h === null || typeof h != "object")
        return null;
      var b = v && h[v] || h[I];
      return typeof b == "function" ? b : null;
    }
    var k = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(h) {
      {
        for (var b = arguments.length, T = new Array(b > 1 ? b - 1 : 0), L = 1; L < b; L++)
          T[L - 1] = arguments[L];
        P("error", h, T);
      }
    }
    function P(h, b, T) {
      {
        var L = k.ReactDebugCurrentFrame, X = L.getStackAddendum();
        X !== "" && (b += "%s", T = T.concat([X]));
        var G = T.map(function(U) {
          return String(U);
        });
        G.unshift("Warning: " + b), Function.prototype.apply.call(console[h], console, G);
      }
    }
    var J = !1, K = !1, x = !1, V = !1, Q = !1, H;
    H = /* @__PURE__ */ Symbol.for("react.module.reference");
    function W(h) {
      return !!(typeof h == "string" || typeof h == "function" || h === r || h === l || Q || h === i || h === c || h === s || V || h === p || J || K || x || typeof h == "object" && h !== null && (h.$$typeof === d || h.$$typeof === f || h.$$typeof === o || h.$$typeof === a || h.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      h.$$typeof === H || h.getModuleId !== void 0));
    }
    function N(h, b, T) {
      var L = h.displayName;
      if (L)
        return L;
      var X = b.displayName || b.name || "";
      return X !== "" ? T + "(" + X + ")" : T;
    }
    function A(h) {
      return h.displayName || "Context";
    }
    function B(h) {
      if (h == null)
        return null;
      if (typeof h.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
        return h.displayName || h.name || null;
      if (typeof h == "string")
        return h;
      switch (h) {
        case r:
          return "Fragment";
        case t:
          return "Portal";
        case l:
          return "Profiler";
        case i:
          return "StrictMode";
        case c:
          return "Suspense";
        case s:
          return "SuspenseList";
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case a:
            var b = h;
            return A(b) + ".Consumer";
          case o:
            var T = h;
            return A(T._context) + ".Provider";
          case u:
            return N(h, h.render, "ForwardRef");
          case f:
            var L = h.displayName || null;
            return L !== null ? L : B(h.type) || "Memo";
          case d: {
            var X = h, G = X._payload, U = X._init;
            try {
              return B(U(G));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var O = Object.assign, C = 0, q, ne, se, we, m, ce, Se;
    function g() {
    }
    g.__reactDisabledLog = !0;
    function me() {
      {
        if (C === 0) {
          q = console.log, ne = console.info, se = console.warn, we = console.error, m = console.group, ce = console.groupCollapsed, Se = console.groupEnd;
          var h = {
            configurable: !0,
            enumerable: !0,
            value: g,
            writable: !0
          };
          Object.defineProperties(console, {
            info: h,
            log: h,
            warn: h,
            error: h,
            group: h,
            groupCollapsed: h,
            groupEnd: h
          });
        }
        C++;
      }
    }
    function Ae() {
      {
        if (C--, C === 0) {
          var h = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: O({}, h, {
              value: q
            }),
            info: O({}, h, {
              value: ne
            }),
            warn: O({}, h, {
              value: se
            }),
            error: O({}, h, {
              value: we
            }),
            group: O({}, h, {
              value: m
            }),
            groupCollapsed: O({}, h, {
              value: ce
            }),
            groupEnd: O({}, h, {
              value: Se
            })
          });
        }
        C < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var te = k.ReactCurrentDispatcher, Oe;
    function ge(h, b, T) {
      {
        if (Oe === void 0)
          try {
            throw Error();
          } catch (X) {
            var L = X.stack.trim().match(/\n( *(at )?)/);
            Oe = L && L[1] || "";
          }
        return `
` + Oe + h;
      }
    }
    var Te = !1, Ce;
    {
      var qe = typeof WeakMap == "function" ? WeakMap : Map;
      Ce = new qe();
    }
    function gn(h, b) {
      if (!h || Te)
        return "";
      {
        var T = Ce.get(h);
        if (T !== void 0)
          return T;
      }
      var L;
      Te = !0;
      var X = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var G;
      G = te.current, te.current = null, me();
      try {
        if (b) {
          var U = function() {
            throw Error();
          };
          if (Object.defineProperty(U.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(U, []);
            } catch (fe) {
              L = fe;
            }
            Reflect.construct(h, [], U);
          } else {
            try {
              U.call();
            } catch (fe) {
              L = fe;
            }
            h.call(U.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (fe) {
            L = fe;
          }
          h();
        }
      } catch (fe) {
        if (fe && L && typeof fe.stack == "string") {
          for (var M = fe.stack.split(`
`), ue = L.stack.split(`
`), re = M.length - 1, ie = ue.length - 1; re >= 1 && ie >= 0 && M[re] !== ue[ie]; )
            ie--;
          for (; re >= 1 && ie >= 0; re--, ie--)
            if (M[re] !== ue[ie]) {
              if (re !== 1 || ie !== 1)
                do
                  if (re--, ie--, ie < 0 || M[re] !== ue[ie]) {
                    var Ee = `
` + M[re].replace(" at new ", " at ");
                    return h.displayName && Ee.includes("<anonymous>") && (Ee = Ee.replace("<anonymous>", h.displayName)), typeof h == "function" && Ce.set(h, Ee), Ee;
                  }
                while (re >= 1 && ie >= 0);
              break;
            }
        }
      } finally {
        Te = !1, te.current = G, Ae(), Error.prepareStackTrace = X;
      }
      var We = h ? h.displayName || h.name : "", Ve = We ? ge(We) : "";
      return typeof h == "function" && Ce.set(h, Ve), Ve;
    }
    function _n(h, b, T) {
      return gn(h, !1);
    }
    function An(h) {
      var b = h.prototype;
      return !!(b && b.isReactComponent);
    }
    function Fe(h, b, T) {
      if (h == null)
        return "";
      if (typeof h == "function")
        return gn(h, An(h));
      if (typeof h == "string")
        return ge(h);
      switch (h) {
        case c:
          return ge("Suspense");
        case s:
          return ge("SuspenseList");
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case u:
            return _n(h.render);
          case f:
            return Fe(h.type, b, T);
          case d: {
            var L = h, X = L._payload, G = L._init;
            try {
              return Fe(G(X), b, T);
            } catch {
            }
          }
        }
      return "";
    }
    var je = Object.prototype.hasOwnProperty, Ze = {}, yn = k.ReactDebugCurrentFrame;
    function Me(h) {
      if (h) {
        var b = h._owner, T = Fe(h.type, h._source, b ? b.type : null);
        yn.setExtraStackFrame(T);
      } else
        yn.setExtraStackFrame(null);
    }
    function xn(h, b, T, L, X) {
      {
        var G = Function.call.bind(je);
        for (var U in h)
          if (G(h, U)) {
            var M = void 0;
            try {
              if (typeof h[U] != "function") {
                var ue = Error((L || "React class") + ": " + T + " type `" + U + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[U] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ue.name = "Invariant Violation", ue;
              }
              M = h[U](b, U, L, T, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (re) {
              M = re;
            }
            M && !(M instanceof Error) && (Me(X), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", L || "React class", T, U, typeof M), Me(null)), M instanceof Error && !(M.message in Ze) && (Ze[M.message] = !0, Me(X), _("Failed %s type: %s", T, M.message), Me(null));
          }
      }
    }
    var On = Array.isArray;
    function en(h) {
      return On(h);
    }
    function Nn(h) {
      {
        var b = typeof Symbol == "function" && Symbol.toStringTag, T = b && h[Symbol.toStringTag] || h.constructor.name || "Object";
        return T;
      }
    }
    function jn(h) {
      try {
        return kn(h), !1;
      } catch {
        return !0;
      }
    }
    function kn(h) {
      return "" + h;
    }
    function y(h) {
      if (jn(h))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Nn(h)), kn(h);
    }
    var E = k.ReactCurrentOwner, D = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, F, Y;
    function ye(h) {
      if (je.call(h, "ref")) {
        var b = Object.getOwnPropertyDescriptor(h, "ref").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return h.ref !== void 0;
    }
    function Ne(h) {
      if (je.call(h, "key")) {
        var b = Object.getOwnPropertyDescriptor(h, "key").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return h.key !== void 0;
    }
    function Ie(h, b) {
      typeof h.ref == "string" && E.current;
    }
    function Be(h, b) {
      {
        var T = function() {
          F || (F = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        T.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: T,
          configurable: !0
        });
      }
    }
    function Ue(h, b) {
      {
        var T = function() {
          Y || (Y = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        T.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: T,
          configurable: !0
        });
      }
    }
    var ae = function(h, b, T, L, X, G, U) {
      var M = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: h,
        key: b,
        ref: T,
        props: U,
        // Record the component responsible for creating this element.
        _owner: G
      };
      return M._store = {}, Object.defineProperty(M._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(M, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: L
      }), Object.defineProperty(M, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: X
      }), Object.freeze && (Object.freeze(M.props), Object.freeze(M)), M;
    };
    function Le(h, b, T, L, X) {
      {
        var G, U = {}, M = null, ue = null;
        T !== void 0 && (y(T), M = "" + T), Ne(b) && (y(b.key), M = "" + b.key), ye(b) && (ue = b.ref, Ie(b, X));
        for (G in b)
          je.call(b, G) && !D.hasOwnProperty(G) && (U[G] = b[G]);
        if (h && h.defaultProps) {
          var re = h.defaultProps;
          for (G in re)
            U[G] === void 0 && (U[G] = re[G]);
        }
        if (M || ue) {
          var ie = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          M && Be(U, ie), ue && Ue(U, ie);
        }
        return ae(h, M, ue, X, L, E.current, U);
      }
    }
    var xe = k.ReactCurrentOwner, St = k.ReactDebugCurrentFrame;
    function $e(h) {
      if (h) {
        var b = h._owner, T = Fe(h.type, h._source, b ? b.type : null);
        St.setExtraStackFrame(T);
      } else
        St.setExtraStackFrame(null);
    }
    var Ln;
    Ln = !1;
    function Dn(h) {
      return typeof h == "object" && h !== null && h.$$typeof === n;
    }
    function Et() {
      {
        if (xe.current) {
          var h = B(xe.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
    }
    function ni(h) {
      return "";
    }
    var vt = {};
    function ti(h) {
      {
        var b = Et();
        if (!b) {
          var T = typeof h == "string" ? h : h.displayName || h.name;
          T && (b = `

Check the top-level render call using <` + T + ">.");
        }
        return b;
      }
    }
    function Ct(h, b) {
      {
        if (!h._store || h._store.validated || h.key != null)
          return;
        h._store.validated = !0;
        var T = ti(b);
        if (vt[T])
          return;
        vt[T] = !0;
        var L = "";
        h && h._owner && h._owner !== xe.current && (L = " It was passed a child from " + B(h._owner.type) + "."), $e(h), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', T, L), $e(null);
      }
    }
    function It(h, b) {
      {
        if (typeof h != "object")
          return;
        if (en(h))
          for (var T = 0; T < h.length; T++) {
            var L = h[T];
            Dn(L) && Ct(L, b);
          }
        else if (Dn(h))
          h._store && (h._store.validated = !0);
        else if (h) {
          var X = R(h);
          if (typeof X == "function" && X !== h.entries)
            for (var G = X.call(h), U; !(U = G.next()).done; )
              Dn(U.value) && Ct(U.value, b);
        }
      }
    }
    function ri(h) {
      {
        var b = h.type;
        if (b == null || typeof b == "string")
          return;
        var T;
        if (typeof b == "function")
          T = b.propTypes;
        else if (typeof b == "object" && (b.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        b.$$typeof === f))
          T = b.propTypes;
        else
          return;
        if (T) {
          var L = B(b);
          xn(T, h.props, "prop", L, h);
        } else if (b.PropTypes !== void 0 && !Ln) {
          Ln = !0;
          var X = B(b);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", X || "Unknown");
        }
        typeof b.getDefaultProps == "function" && !b.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ii(h) {
      {
        for (var b = Object.keys(h.props), T = 0; T < b.length; T++) {
          var L = b[T];
          if (L !== "children" && L !== "key") {
            $e(h), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", L), $e(null);
            break;
          }
        }
        h.ref !== null && ($e(h), _("Invalid attribute `ref` supplied to `React.Fragment`."), $e(null));
      }
    }
    var Tt = {};
    function Pt(h, b, T, L, X, G) {
      {
        var U = W(h);
        if (!U) {
          var M = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (M += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ue = ni();
          ue ? M += ue : M += Et();
          var re;
          h === null ? re = "null" : en(h) ? re = "array" : h !== void 0 && h.$$typeof === n ? (re = "<" + (B(h.type) || "Unknown") + " />", M = " Did you accidentally export a JSX literal instead of a component?") : re = typeof h, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", re, M);
        }
        var ie = Le(h, b, T, X, G);
        if (ie == null)
          return ie;
        if (U) {
          var Ee = b.children;
          if (Ee !== void 0)
            if (L)
              if (en(Ee)) {
                for (var We = 0; We < Ee.length; We++)
                  It(Ee[We], h);
                Object.freeze && Object.freeze(Ee);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              It(Ee, h);
        }
        if (je.call(b, "key")) {
          var Ve = B(h), fe = Object.keys(b).filter(function(ci) {
            return ci !== "key";
          }), zn = fe.length > 0 ? "{key: someKey, " + fe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Tt[Ve + zn]) {
            var si = fe.length > 0 ? "{" + fe.join(": ..., ") + ": ...}" : "{}";
            _(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, zn, Ve, si, Ve), Tt[Ve + zn] = !0;
          }
        }
        return h === r ? ii(ie) : ri(ie), ie;
      }
    }
    function li(h, b, T) {
      return Pt(h, b, T, !0);
    }
    function oi(h, b, T) {
      return Pt(h, b, T, !1);
    }
    var ai = oi, ui = li;
    tn.Fragment = r, tn.jsx = ai, tn.jsxs = ui;
  })()), tn;
}
var At;
function di() {
  return At || (At = 1, process.env.NODE_ENV === "production" ? bn.exports = pi() : bn.exports = hi()), bn.exports;
}
var S = di();
function mi(e, n, t) {
  const [r, i] = pn(""), l = fi(() => {
    if (!r.trim())
      return e.map((u) => n[u]).filter(Boolean);
    const o = r.toLowerCase(), a = t.poems.filter(
      (u) => u.title.toLowerCase().includes(o) || u.text.toLowerCase().includes(o)
    ).map((u) => u.id);
    return e.filter((u) => a.includes(u)).map((u) => n[u]).filter(Boolean);
  }, [r, e, n]);
  return {
    query: r,
    setQuery: i,
    results: l,
    isSearching: r.trim().length > 0
  };
}
function gi({
  sections: e,
  poemsById: n,
  searchIndex: t,
  currentId: r,
  onSelect: i,
  showExplore: l = !0
}) {
  const o = e.flatMap((f) => f.poemIds), { query: a, setQuery: u, results: c, isSearching: s } = mi(o, n, t);
  return /* @__PURE__ */ S.jsxs("nav", { children: [
    s && /* @__PURE__ */ S.jsx("h3", { children: "RESULTS" }),
    /* @__PURE__ */ S.jsx(
      "input",
      {
        className: "reader-search",
        type: "search",
        placeholder: "Search…",
        value: a,
        onChange: (f) => u(f.target.value),
        "aria-label": "Search poems"
      }
    ),
    s && /* @__PURE__ */ S.jsx("ul", { className: "reader-nav-list", children: c.map((f) => /* @__PURE__ */ S.jsx("li", { children: /* @__PURE__ */ S.jsx(
      "button",
      {
        className: f.id === r ? "reader-nav-item active" : "reader-nav-item",
        onClick: () => i(f.id),
        children: f.title
      }
    ) }, f.id)) }),
    !s && e.map((f) => /* @__PURE__ */ S.jsxs("div", { className: "reader-nav-section", children: [
      /* @__PURE__ */ S.jsx("h4", { className: "reader-nav-section-title", children: f.title }),
      /* @__PURE__ */ S.jsx("ul", { className: "reader-nav-list", children: f.poemIds.map((d) => {
        const p = n[d];
        return p ? /* @__PURE__ */ S.jsx("li", { children: /* @__PURE__ */ S.jsx(
          "button",
          {
            className: d === r ? "reader-nav-item active" : "reader-nav-item",
            onClick: () => i(d),
            children: p.title
          }
        ) }, d) : null;
      }) })
    ] }, f.id)),
    c.length === 0 && s && /* @__PURE__ */ S.jsx("div", { className: "reader-empty", children: "No poems match this search." }),
    /* @__PURE__ */ S.jsx("div", { className: "reader-nav-footer", children: /* @__PURE__ */ S.jsx("div", { className: "reader-meta", children: l && /* @__PURE__ */ S.jsx(hn, { className: "reader-meta-link", to: "/explore", children: "Explore Patterns in this collection" }) }) })
  ] });
}
function kr({ poem: e }) {
  return e ? /* @__PURE__ */ S.jsx("main", { className: "reader-poem", children: /* @__PURE__ */ S.jsxs("div", { className: "reader-poem-inner", children: [
    /* @__PURE__ */ S.jsx("h1", { children: e.title }),
    /* @__PURE__ */ S.jsx("pre", { children: e.content })
  ] }) }) : null;
}
function yi({ poemTitle: e }) {
  const [n, t] = pn(""), r = n.trim().length > 0, i = e ? `mailto:feedback@yourdomain.com?subject=${encodeURIComponent(
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
function xi(e, n) {
  const t = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (t.padRight ? " " : "") + "," + (t.padLeft === !1 ? "" : " ")
  ).trim();
}
const ki = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, bi = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, wi = {};
function Ot(e, n) {
  return (wi.jsx ? bi : ki).test(e);
}
const Si = /[ \t\n\f\r]/g;
function Ei(e) {
  return typeof e == "object" ? e.type === "text" ? Nt(e.value) : !1 : Nt(e);
}
function Nt(e) {
  return e.replace(Si, "") === "";
}
class dn {
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
dn.prototype.normal = {};
dn.prototype.property = {};
dn.prototype.space = void 0;
function br(e, n) {
  const t = {}, r = {};
  for (const i of e)
    Object.assign(t, i.property), Object.assign(r, i.normal);
  return new dn(t, r, n);
}
function Qn(e) {
  return e.toLowerCase();
}
class de {
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
de.prototype.attribute = "";
de.prototype.booleanish = !1;
de.prototype.boolean = !1;
de.prototype.commaOrSpaceSeparated = !1;
de.prototype.commaSeparated = !1;
de.prototype.defined = !1;
de.prototype.mustUseProperty = !1;
de.prototype.number = !1;
de.prototype.overloadedBoolean = !1;
de.prototype.property = "";
de.prototype.spaceSeparated = !1;
de.prototype.space = void 0;
let vi = 0;
const z = He(), le = He(), Gn = He(), w = He(), Z = He(), Je = He(), ke = He();
function He() {
  return 2 ** ++vi;
}
const Zn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: z,
  booleanish: le,
  commaOrSpaceSeparated: ke,
  commaSeparated: Je,
  number: w,
  overloadedBoolean: Gn,
  spaceSeparated: Z
}, Symbol.toStringTag, { value: "Module" })), Fn = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(Zn)
);
class at extends de {
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
    if (super(n, t), jt(this, "space", i), typeof r == "number")
      for (; ++l < Fn.length; ) {
        const o = Fn[l];
        jt(this, Fn[l], (r & Zn[o]) === Zn[o]);
      }
  }
}
at.prototype.defined = !0;
function jt(e, n, t) {
  t && (e[n] = t);
}
function Qe(e) {
  const n = {}, t = {};
  for (const [r, i] of Object.entries(e.properties)) {
    const l = new at(
      r,
      e.transform(e.attributes || {}, r),
      i,
      e.space
    );
    e.mustUseProperty && e.mustUseProperty.includes(r) && (l.mustUseProperty = !0), n[r] = l, t[Qn(r)] = r, t[Qn(l.attribute)] = r;
  }
  return new dn(n, t, e.space);
}
const wr = Qe({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: le,
    ariaAutoComplete: null,
    ariaBusy: le,
    ariaChecked: le,
    ariaColCount: w,
    ariaColIndex: w,
    ariaColSpan: w,
    ariaControls: Z,
    ariaCurrent: null,
    ariaDescribedBy: Z,
    ariaDetails: null,
    ariaDisabled: le,
    ariaDropEffect: Z,
    ariaErrorMessage: null,
    ariaExpanded: le,
    ariaFlowTo: Z,
    ariaGrabbed: le,
    ariaHasPopup: null,
    ariaHidden: le,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: Z,
    ariaLevel: w,
    ariaLive: null,
    ariaModal: le,
    ariaMultiLine: le,
    ariaMultiSelectable: le,
    ariaOrientation: null,
    ariaOwns: Z,
    ariaPlaceholder: null,
    ariaPosInSet: w,
    ariaPressed: le,
    ariaReadOnly: le,
    ariaRelevant: null,
    ariaRequired: le,
    ariaRoleDescription: Z,
    ariaRowCount: w,
    ariaRowIndex: w,
    ariaRowSpan: w,
    ariaSelected: le,
    ariaSetSize: w,
    ariaSort: null,
    ariaValueMax: w,
    ariaValueMin: w,
    ariaValueNow: w,
    ariaValueText: null,
    role: null
  },
  transform(e, n) {
    return n === "role" ? n : "aria-" + n.slice(4).toLowerCase();
  }
});
function Sr(e, n) {
  return n in e ? e[n] : n;
}
function Er(e, n) {
  return Sr(e, n.toLowerCase());
}
const Ci = Qe({
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
    accept: Je,
    acceptCharset: Z,
    accessKey: Z,
    action: null,
    allow: null,
    allowFullScreen: z,
    allowPaymentRequest: z,
    allowUserMedia: z,
    alt: null,
    as: null,
    async: z,
    autoCapitalize: null,
    autoComplete: Z,
    autoFocus: z,
    autoPlay: z,
    blocking: Z,
    capture: null,
    charSet: null,
    checked: z,
    cite: null,
    className: Z,
    cols: w,
    colSpan: null,
    content: null,
    contentEditable: le,
    controls: z,
    controlsList: Z,
    coords: w | Je,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: z,
    defer: z,
    dir: null,
    dirName: null,
    disabled: z,
    download: Gn,
    draggable: le,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: z,
    formTarget: null,
    headers: Z,
    height: w,
    hidden: Gn,
    high: w,
    href: null,
    hrefLang: null,
    htmlFor: Z,
    httpEquiv: Z,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: z,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: z,
    itemId: null,
    itemProp: Z,
    itemRef: Z,
    itemScope: z,
    itemType: Z,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: z,
    low: w,
    manifest: null,
    max: null,
    maxLength: w,
    media: null,
    method: null,
    min: null,
    minLength: w,
    multiple: z,
    muted: z,
    name: null,
    nonce: null,
    noModule: z,
    noValidate: z,
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
    open: z,
    optimum: w,
    pattern: null,
    ping: Z,
    placeholder: null,
    playsInline: z,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: z,
    referrerPolicy: null,
    rel: Z,
    required: z,
    reversed: z,
    rows: w,
    rowSpan: w,
    sandbox: Z,
    scope: null,
    scoped: z,
    seamless: z,
    selected: z,
    shadowRootClonable: z,
    shadowRootDelegatesFocus: z,
    shadowRootMode: null,
    shape: null,
    size: w,
    sizes: null,
    slot: null,
    span: w,
    spellCheck: le,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: w,
    step: null,
    style: null,
    tabIndex: w,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: z,
    useMap: null,
    value: le,
    width: w,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: Z,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: w,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: w,
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
    compact: z,
    // Lists. Use CSS to reduce space between items instead
    declare: z,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: w,
    // `<img>` and `<object>`
    leftMargin: w,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: w,
    // `<body>`
    marginWidth: w,
    // `<body>`
    noResize: z,
    // `<frame>`
    noHref: z,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: z,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: z,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: w,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: le,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: w,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: w,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: z,
    disableRemotePlayback: z,
    prefix: null,
    property: null,
    results: w,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: Er
}), Ii = Qe({
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
    about: ke,
    accentHeight: w,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: w,
    amplitude: w,
    arabicForm: null,
    ascent: w,
    attributeName: null,
    attributeType: null,
    azimuth: w,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: w,
    by: null,
    calcMode: null,
    capHeight: w,
    className: Z,
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
    descent: w,
    diffuseConstant: w,
    direction: null,
    display: null,
    dur: null,
    divisor: w,
    dominantBaseline: null,
    download: z,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: w,
    enableBackground: null,
    end: null,
    event: null,
    exponent: w,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: w,
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
    g1: Je,
    g2: Je,
    glyphName: Je,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: w,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: w,
    horizOriginX: w,
    horizOriginY: w,
    id: null,
    ideographic: w,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: w,
    k: w,
    k1: w,
    k2: w,
    k3: w,
    k4: w,
    kernelMatrix: ke,
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
    limitingConeAngle: w,
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
    mediaSize: w,
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
    overlinePosition: w,
    overlineThickness: w,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: w,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: Z,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: w,
    pointsAtY: w,
    pointsAtZ: w,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: ke,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: ke,
    rev: ke,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: ke,
    requiredFeatures: ke,
    requiredFonts: ke,
    requiredFormats: ke,
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
    specularConstant: w,
    specularExponent: w,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: w,
    strikethroughThickness: w,
    string: null,
    stroke: null,
    strokeDashArray: ke,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: w,
    strokeOpacity: w,
    strokeWidth: null,
    style: null,
    surfaceScale: w,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: ke,
    tabIndex: w,
    tableValues: null,
    target: null,
    targetX: w,
    targetY: w,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: ke,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: w,
    underlineThickness: w,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: w,
    values: null,
    vAlphabetic: w,
    vMathematical: w,
    vectorEffect: null,
    vHanging: w,
    vIdeographic: w,
    version: null,
    vertAdvY: w,
    vertOriginX: w,
    vertOriginY: w,
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
    xHeight: w,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: Sr
}), vr = Qe({
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
}), Cr = Qe({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: Er
}), Ir = Qe({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(e, n) {
    return "xml:" + n.slice(3).toLowerCase();
  }
}), Ti = {
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
}, Pi = /[A-Z]/g, Lt = /-[a-z]/g, Ri = /^data[-\w.:]+$/i;
function _i(e, n) {
  const t = Qn(n);
  let r = n, i = de;
  if (t in e.normal)
    return e.property[e.normal[t]];
  if (t.length > 4 && t.slice(0, 4) === "data" && Ri.test(n)) {
    if (n.charAt(4) === "-") {
      const l = n.slice(5).replace(Lt, Oi);
      r = "data" + l.charAt(0).toUpperCase() + l.slice(1);
    } else {
      const l = n.slice(4);
      if (!Lt.test(l)) {
        let o = l.replace(Pi, Ai);
        o.charAt(0) !== "-" && (o = "-" + o), n = "data" + o;
      }
    }
    i = at;
  }
  return new i(r, n);
}
function Ai(e) {
  return "-" + e.toLowerCase();
}
function Oi(e) {
  return e.charAt(1).toUpperCase();
}
const Ni = br([wr, Ci, vr, Cr, Ir], "html"), ut = br([wr, Ii, vr, Cr, Ir], "svg");
function ji(e) {
  return e.join(" ").trim();
}
var Ye = {}, Mn, Dt;
function Li() {
  if (Dt) return Mn;
  Dt = 1;
  var e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, n = /\n/g, t = /^\s*/, r = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, i = /^:\s*/, l = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, o = /^[;\s]*/, a = /^\s+|\s+$/g, u = `
`, c = "/", s = "*", f = "", d = "comment", p = "declaration";
  function v(R, k) {
    if (typeof R != "string")
      throw new TypeError("First argument must be a string");
    if (!R) return [];
    k = k || {};
    var _ = 1, P = 1;
    function J(O) {
      var C = O.match(n);
      C && (_ += C.length);
      var q = O.lastIndexOf(u);
      P = ~q ? O.length - q : P + O.length;
    }
    function K() {
      var O = { line: _, column: P };
      return function(C) {
        return C.position = new x(O), H(), C;
      };
    }
    function x(O) {
      this.start = O, this.end = { line: _, column: P }, this.source = k.source;
    }
    x.prototype.content = R;
    function V(O) {
      var C = new Error(
        k.source + ":" + _ + ":" + P + ": " + O
      );
      if (C.reason = O, C.filename = k.source, C.line = _, C.column = P, C.source = R, !k.silent) throw C;
    }
    function Q(O) {
      var C = O.exec(R);
      if (C) {
        var q = C[0];
        return J(q), R = R.slice(q.length), C;
      }
    }
    function H() {
      Q(t);
    }
    function W(O) {
      var C;
      for (O = O || []; C = N(); )
        C !== !1 && O.push(C);
      return O;
    }
    function N() {
      var O = K();
      if (!(c != R.charAt(0) || s != R.charAt(1))) {
        for (var C = 2; f != R.charAt(C) && (s != R.charAt(C) || c != R.charAt(C + 1)); )
          ++C;
        if (C += 2, f === R.charAt(C - 1))
          return V("End of comment missing");
        var q = R.slice(2, C - 2);
        return P += 2, J(q), R = R.slice(C), P += 2, O({
          type: d,
          comment: q
        });
      }
    }
    function A() {
      var O = K(), C = Q(r);
      if (C) {
        if (N(), !Q(i)) return V("property missing ':'");
        var q = Q(l), ne = O({
          type: p,
          property: I(C[0].replace(e, f)),
          value: q ? I(q[0].replace(e, f)) : f
        });
        return Q(o), ne;
      }
    }
    function B() {
      var O = [];
      W(O);
      for (var C; C = A(); )
        C !== !1 && (O.push(C), W(O));
      return O;
    }
    return H(), B();
  }
  function I(R) {
    return R ? R.replace(a, f) : f;
  }
  return Mn = v, Mn;
}
var zt;
function Di() {
  if (zt) return Ye;
  zt = 1;
  var e = Ye && Ye.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(Ye, "__esModule", { value: !0 }), Ye.default = t;
  const n = e(Li());
  function t(r, i) {
    let l = null;
    if (!r || typeof r != "string")
      return l;
    const o = (0, n.default)(r), a = typeof i == "function";
    return o.forEach((u) => {
      if (u.type !== "declaration")
        return;
      const { property: c, value: s } = u;
      a ? i(c, s, u) : s && (l = l || {}, l[c] = s);
    }), l;
  }
  return Ye;
}
var rn = {}, Ft;
function zi() {
  if (Ft) return rn;
  Ft = 1, Object.defineProperty(rn, "__esModule", { value: !0 }), rn.camelCase = void 0;
  var e = /^--[a-zA-Z0-9_-]+$/, n = /-([a-z])/g, t = /^[^-]+$/, r = /^-(webkit|moz|ms|o|khtml)-/, i = /^-(ms)-/, l = function(c) {
    return !c || t.test(c) || e.test(c);
  }, o = function(c, s) {
    return s.toUpperCase();
  }, a = function(c, s) {
    return "".concat(s, "-");
  }, u = function(c, s) {
    return s === void 0 && (s = {}), l(c) ? c : (c = c.toLowerCase(), s.reactCompat ? c = c.replace(i, a) : c = c.replace(r, a), c.replace(n, o));
  };
  return rn.camelCase = u, rn;
}
var ln, Mt;
function Fi() {
  if (Mt) return ln;
  Mt = 1;
  var e = ln && ln.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  }, n = e(Di()), t = zi();
  function r(i, l) {
    var o = {};
    return !i || typeof i != "string" || (0, n.default)(i, function(a, u) {
      a && u && (o[(0, t.camelCase)(a, l)] = u);
    }), o;
  }
  return r.default = r, ln = r, ln;
}
var Mi = Fi();
const Bi = /* @__PURE__ */ xr(Mi), Tr = Pr("end"), st = Pr("start");
function Pr(e) {
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
function Ui(e) {
  const n = st(e), t = Tr(e);
  if (n && t)
    return { start: n, end: t };
}
function un(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? Bt(e.position) : "start" in e || "end" in e ? Bt(e) : "line" in e || "column" in e ? et(e) : "";
}
function et(e) {
  return Ut(e && e.line) + ":" + Ut(e && e.column);
}
function Bt(e) {
  return et(e && e.start) + "-" + et(e && e.end);
}
function Ut(e) {
  return e && typeof e == "number" ? e : 1;
}
class oe extends Error {
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
      const u = r.indexOf(":");
      u === -1 ? l.ruleId = r : (l.source = r.slice(0, u), l.ruleId = r.slice(u + 1));
    }
    if (!l.place && l.ancestors && l.ancestors) {
      const u = l.ancestors[l.ancestors.length - 1];
      u && (l.place = u.position);
    }
    const a = l.place && "start" in l.place ? l.place.start : l.place;
    this.ancestors = l.ancestors || void 0, this.cause = l.cause || void 0, this.column = a ? a.column : void 0, this.fatal = void 0, this.file = "", this.message = i, this.line = a ? a.line : void 0, this.name = un(l.place) || "1:1", this.place = l.place || void 0, this.reason = this.message, this.ruleId = l.ruleId || void 0, this.source = l.source || void 0, this.stack = o && l.cause && typeof l.cause.stack == "string" ? l.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
  }
}
oe.prototype.file = "";
oe.prototype.name = "";
oe.prototype.reason = "";
oe.prototype.message = "";
oe.prototype.stack = "";
oe.prototype.column = void 0;
oe.prototype.line = void 0;
oe.prototype.ancestors = void 0;
oe.prototype.cause = void 0;
oe.prototype.fatal = void 0;
oe.prototype.place = void 0;
oe.prototype.ruleId = void 0;
oe.prototype.source = void 0;
const ct = {}.hasOwnProperty, Vi = /* @__PURE__ */ new Map(), Hi = /[A-Z]/g, qi = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), $i = /* @__PURE__ */ new Set(["td", "th"]), Rr = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function Wi(e, n) {
  if (!n || n.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const t = n.filePath || void 0;
  let r;
  if (n.development) {
    if (typeof n.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    r = el(t, n.jsxDEV);
  } else {
    if (typeof n.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof n.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    r = Zi(t, n.jsx, n.jsxs);
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
    schema: n.space === "svg" ? ut : Ni,
    stylePropertyNameCase: n.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: n.tableCellAlignToStyle !== !1
  }, l = _r(i, e, void 0);
  return l && typeof l != "string" ? l : i.create(
    e,
    i.Fragment,
    { children: l || void 0 },
    void 0
  );
}
function _r(e, n, t) {
  if (n.type === "element")
    return Yi(e, n, t);
  if (n.type === "mdxFlowExpression" || n.type === "mdxTextExpression")
    return Xi(e, n);
  if (n.type === "mdxJsxFlowElement" || n.type === "mdxJsxTextElement")
    return Ki(e, n, t);
  if (n.type === "mdxjsEsm")
    return Ji(e, n);
  if (n.type === "root")
    return Qi(e, n, t);
  if (n.type === "text")
    return Gi(e, n);
}
function Yi(e, n, t) {
  const r = e.schema;
  let i = r;
  n.tagName.toLowerCase() === "svg" && r.space === "html" && (i = ut, e.schema = i), e.ancestors.push(n);
  const l = Or(e, n.tagName, !1), o = nl(e, n);
  let a = pt(e, n);
  return qi.has(n.tagName) && (a = a.filter(function(u) {
    return typeof u == "string" ? !Ei(u) : !0;
  })), Ar(e, o, l, n), ft(o, a), e.ancestors.pop(), e.schema = r, e.create(n, l, o, t);
}
function Xi(e, n) {
  if (n.data && n.data.estree && e.evaluater) {
    const r = n.data.estree.body[0];
    return r.type, /** @type {Child | undefined} */
    e.evaluater.evaluateExpression(r.expression);
  }
  fn(e, n.position);
}
function Ji(e, n) {
  if (n.data && n.data.estree && e.evaluater)
    return (
      /** @type {Child | undefined} */
      e.evaluater.evaluateProgram(n.data.estree)
    );
  fn(e, n.position);
}
function Ki(e, n, t) {
  const r = e.schema;
  let i = r;
  n.name === "svg" && r.space === "html" && (i = ut, e.schema = i), e.ancestors.push(n);
  const l = n.name === null ? e.Fragment : Or(e, n.name, !0), o = tl(e, n), a = pt(e, n);
  return Ar(e, o, l, n), ft(o, a), e.ancestors.pop(), e.schema = r, e.create(n, l, o, t);
}
function Qi(e, n, t) {
  const r = {};
  return ft(r, pt(e, n)), e.create(n, e.Fragment, r, t);
}
function Gi(e, n) {
  return n.value;
}
function Ar(e, n, t, r) {
  typeof t != "string" && t !== e.Fragment && e.passNode && (n.node = r);
}
function ft(e, n) {
  if (n.length > 0) {
    const t = n.length > 1 ? n : n[0];
    t && (e.children = t);
  }
}
function Zi(e, n, t) {
  return r;
  function r(i, l, o, a) {
    const c = Array.isArray(o.children) ? t : n;
    return a ? c(l, o, a) : c(l, o);
  }
}
function el(e, n) {
  return t;
  function t(r, i, l, o) {
    const a = Array.isArray(l.children), u = st(r);
    return n(
      i,
      l,
      o,
      a,
      {
        columnNumber: u ? u.column - 1 : void 0,
        fileName: e,
        lineNumber: u ? u.line : void 0
      },
      void 0
    );
  }
}
function nl(e, n) {
  const t = {};
  let r, i;
  for (i in n.properties)
    if (i !== "children" && ct.call(n.properties, i)) {
      const l = rl(e, i, n.properties[i]);
      if (l) {
        const [o, a] = l;
        e.tableCellAlignToStyle && o === "align" && typeof a == "string" && $i.has(n.tagName) ? r = a : t[o] = a;
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
function tl(e, n) {
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
        fn(e, n.position);
    else {
      const i = r.name;
      let l;
      if (r.value && typeof r.value == "object")
        if (r.value.data && r.value.data.estree && e.evaluater) {
          const a = r.value.data.estree.body[0];
          a.type, l = e.evaluater.evaluateExpression(a.expression);
        } else
          fn(e, n.position);
      else
        l = r.value === null ? !0 : r.value;
      t[i] = /** @type {Props[keyof Props]} */
      l;
    }
  return t;
}
function pt(e, n) {
  const t = [];
  let r = -1;
  const i = e.passKeys ? /* @__PURE__ */ new Map() : Vi;
  for (; ++r < n.children.length; ) {
    const l = n.children[r];
    let o;
    if (e.passKeys) {
      const u = l.type === "element" ? l.tagName : l.type === "mdxJsxFlowElement" || l.type === "mdxJsxTextElement" ? l.name : void 0;
      if (u) {
        const c = i.get(u) || 0;
        o = u + "-" + c, i.set(u, c + 1);
      }
    }
    const a = _r(e, l, o);
    a !== void 0 && t.push(a);
  }
  return t;
}
function rl(e, n, t) {
  const r = _i(e.schema, n);
  if (!(t == null || typeof t == "number" && Number.isNaN(t))) {
    if (Array.isArray(t) && (t = r.commaSeparated ? xi(t) : ji(t)), r.property === "style") {
      let i = typeof t == "object" ? t : il(e, String(t));
      return e.stylePropertyNameCase === "css" && (i = ll(i)), ["style", i];
    }
    return [
      e.elementAttributeNameCase === "react" && r.space ? Ti[r.property] || r.property : r.attribute,
      t
    ];
  }
}
function il(e, n) {
  try {
    return Bi(n, { reactCompat: !0 });
  } catch (t) {
    if (e.ignoreInvalidStyle)
      return {};
    const r = (
      /** @type {Error} */
      t
    ), i = new oe("Cannot parse `style` attribute", {
      ancestors: e.ancestors,
      cause: r,
      ruleId: "style",
      source: "hast-util-to-jsx-runtime"
    });
    throw i.file = e.filePath || void 0, i.url = Rr + "#cannot-parse-style-attribute", i;
  }
}
function Or(e, n, t) {
  let r;
  if (!t)
    r = { type: "Literal", value: n };
  else if (n.includes(".")) {
    const i = n.split(".");
    let l = -1, o;
    for (; ++l < i.length; ) {
      const a = Ot(i[l]) ? { type: "Identifier", name: i[l] } : { type: "Literal", value: i[l] };
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
    r = Ot(n) && !/^[a-z]/.test(n) ? { type: "Identifier", name: n } : { type: "Literal", value: n };
  if (r.type === "Literal") {
    const i = (
      /** @type {string | number} */
      r.value
    );
    return ct.call(e.components, i) ? e.components[i] : i;
  }
  if (e.evaluater)
    return e.evaluater.evaluateExpression(r);
  fn(e);
}
function fn(e, n) {
  const t = new oe(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: e.ancestors,
      place: n,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw t.file = e.filePath || void 0, t.url = Rr + "#cannot-handle-mdx-estrees-without-createevaluater", t;
}
function ll(e) {
  const n = {};
  let t;
  for (t in e)
    ct.call(e, t) && (n[ol(t)] = e[t]);
  return n;
}
function ol(e) {
  let n = e.replace(Hi, al);
  return n.slice(0, 3) === "ms-" && (n = "-" + n), n;
}
function al(e) {
  return "-" + e.toLowerCase();
}
const Bn = {
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
}, ul = {};
function sl(e, n) {
  const t = ul, r = typeof t.includeImageAlt == "boolean" ? t.includeImageAlt : !0, i = typeof t.includeHtml == "boolean" ? t.includeHtml : !0;
  return Nr(e, r, i);
}
function Nr(e, n, t) {
  if (cl(e)) {
    if ("value" in e)
      return e.type === "html" && !t ? "" : e.value;
    if (n && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return Vt(e.children, n, t);
  }
  return Array.isArray(e) ? Vt(e, n, t) : "";
}
function Vt(e, n, t) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = Nr(e[i], n, t);
  return r.join("");
}
function cl(e) {
  return !!(e && typeof e == "object");
}
const Ht = document.createElement("i");
function ht(e) {
  const n = "&" + e + ";";
  Ht.innerHTML = n;
  const t = Ht.textContent;
  return t.charCodeAt(t.length - 1) === 59 && e !== "semi" || t === n ? !1 : t;
}
function _e(e, n, t, r) {
  const i = e.length;
  let l = 0, o;
  if (n < 0 ? n = -n > i ? 0 : i + n : n = n > i ? i : n, t = t > 0 ? t : 0, r.length < 1e4)
    o = Array.from(r), o.unshift(n, t), e.splice(...o);
  else
    for (t && e.splice(n, t); l < r.length; )
      o = r.slice(l, l + 1e4), o.unshift(n, 0), e.splice(...o), l += 1e4, n += 1e4;
}
function ve(e, n) {
  return e.length > 0 ? (_e(e, e.length, 0, n), e) : n;
}
const qt = {}.hasOwnProperty;
function fl(e) {
  const n = {};
  let t = -1;
  for (; ++t < e.length; )
    pl(n, e[t]);
  return n;
}
function pl(e, n) {
  let t;
  for (t in n) {
    const i = (qt.call(e, t) ? e[t] : void 0) || (e[t] = {}), l = n[t];
    let o;
    if (l)
      for (o in l) {
        qt.call(i, o) || (i[o] = []);
        const a = l[o];
        hl(
          // @ts-expect-error Looks like a list.
          i[o],
          Array.isArray(a) ? a : a ? [a] : []
        );
      }
  }
}
function hl(e, n) {
  let t = -1;
  const r = [];
  for (; ++t < n.length; )
    (n[t].add === "after" ? e : r).push(n[t]);
  _e(e, 0, 0, r);
}
function jr(e, n) {
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
function Ke(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const Re = ze(/[A-Za-z]/), be = ze(/[\dA-Za-z]/), dl = ze(/[#-'*+\--9=?A-Z^-~]/);
function nt(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const tt = ze(/\d/), ml = ze(/[\dA-Fa-f]/), gl = ze(/[!-/:-@[-`{-~]/);
function j(e) {
  return e !== null && e < -2;
}
function he(e) {
  return e !== null && (e < 0 || e === 32);
}
function $(e) {
  return e === -2 || e === -1 || e === 32;
}
const yl = ze(new RegExp("\\p{P}|\\p{S}", "u")), xl = ze(/\s/);
function ze(e) {
  return n;
  function n(t) {
    return t !== null && t > -1 && e.test(String.fromCharCode(t));
  }
}
function Ge(e) {
  const n = [];
  let t = -1, r = 0, i = 0;
  for (; ++t < e.length; ) {
    const l = e.charCodeAt(t);
    let o = "";
    if (l === 37 && be(e.charCodeAt(t + 1)) && be(e.charCodeAt(t + 2)))
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
function ee(e, n, t, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let l = 0;
  return o;
  function o(u) {
    return $(u) ? (e.enter(t), a(u)) : n(u);
  }
  function a(u) {
    return $(u) && l++ < i ? (e.consume(u), a) : (e.exit(t), n(u));
  }
}
const kl = {
  tokenize: bl
};
function bl(e) {
  const n = e.attempt(this.parser.constructs.contentInitial, r, i);
  let t;
  return n;
  function r(a) {
    if (a === null) {
      e.consume(a);
      return;
    }
    return e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), ee(e, n, "linePrefix");
  }
  function i(a) {
    return e.enter("paragraph"), l(a);
  }
  function l(a) {
    const u = e.enter("chunkText", {
      contentType: "text",
      previous: t
    });
    return t && (t.next = u), t = u, o(a);
  }
  function o(a) {
    if (a === null) {
      e.exit("chunkText"), e.exit("paragraph"), e.consume(a);
      return;
    }
    return j(a) ? (e.consume(a), e.exit("chunkText"), l) : (e.consume(a), o);
  }
}
const wl = {
  tokenize: Sl
}, $t = {
  tokenize: El
};
function Sl(e) {
  const n = this, t = [];
  let r = 0, i, l, o;
  return a;
  function a(P) {
    if (r < t.length) {
      const J = t[r];
      return n.containerState = J[1], e.attempt(J[0].continuation, u, c)(P);
    }
    return c(P);
  }
  function u(P) {
    if (r++, n.containerState._closeFlow) {
      n.containerState._closeFlow = void 0, i && _();
      const J = n.events.length;
      let K = J, x;
      for (; K--; )
        if (n.events[K][0] === "exit" && n.events[K][1].type === "chunkFlow") {
          x = n.events[K][1].end;
          break;
        }
      k(r);
      let V = J;
      for (; V < n.events.length; )
        n.events[V][1].end = {
          ...x
        }, V++;
      return _e(n.events, K + 1, 0, n.events.slice(J)), n.events.length = V, c(P);
    }
    return a(P);
  }
  function c(P) {
    if (r === t.length) {
      if (!i)
        return d(P);
      if (i.currentConstruct && i.currentConstruct.concrete)
        return v(P);
      n.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return n.containerState = {}, e.check($t, s, f)(P);
  }
  function s(P) {
    return i && _(), k(r), d(P);
  }
  function f(P) {
    return n.parser.lazy[n.now().line] = r !== t.length, o = n.now().offset, v(P);
  }
  function d(P) {
    return n.containerState = {}, e.attempt($t, p, v)(P);
  }
  function p(P) {
    return r++, t.push([n.currentConstruct, n.containerState]), d(P);
  }
  function v(P) {
    if (P === null) {
      i && _(), k(0), e.consume(P);
      return;
    }
    return i = i || n.parser.flow(n.now()), e.enter("chunkFlow", {
      _tokenizer: i,
      contentType: "flow",
      previous: l
    }), I(P);
  }
  function I(P) {
    if (P === null) {
      R(e.exit("chunkFlow"), !0), k(0), e.consume(P);
      return;
    }
    return j(P) ? (e.consume(P), R(e.exit("chunkFlow")), r = 0, n.interrupt = void 0, a) : (e.consume(P), I);
  }
  function R(P, J) {
    const K = n.sliceStream(P);
    if (J && K.push(null), P.previous = l, l && (l.next = P), l = P, i.defineSkip(P.start), i.write(K), n.parser.lazy[P.start.line]) {
      let x = i.events.length;
      for (; x--; )
        if (
          // The token starts before the line ending…
          i.events[x][1].start.offset < o && // …and either is not ended yet…
          (!i.events[x][1].end || // …or ends after it.
          i.events[x][1].end.offset > o)
        )
          return;
      const V = n.events.length;
      let Q = V, H, W;
      for (; Q--; )
        if (n.events[Q][0] === "exit" && n.events[Q][1].type === "chunkFlow") {
          if (H) {
            W = n.events[Q][1].end;
            break;
          }
          H = !0;
        }
      for (k(r), x = V; x < n.events.length; )
        n.events[x][1].end = {
          ...W
        }, x++;
      _e(n.events, Q + 1, 0, n.events.slice(V)), n.events.length = x;
    }
  }
  function k(P) {
    let J = t.length;
    for (; J-- > P; ) {
      const K = t[J];
      n.containerState = K[1], K[0].exit.call(n, e);
    }
    t.length = P;
  }
  function _() {
    i.write([null]), l = void 0, i = void 0, n.containerState._closeFlow = void 0;
  }
}
function El(e, n, t) {
  return ee(e, e.attempt(this.parser.constructs.document, n, t), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function Wt(e) {
  if (e === null || he(e) || xl(e))
    return 1;
  if (yl(e))
    return 2;
}
function dt(e, n, t) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const l = e[i].resolveAll;
    l && !r.includes(l) && (n = l(n, t), r.push(l));
  }
  return n;
}
const rt = {
  name: "attention",
  resolveAll: vl,
  tokenize: Cl
};
function vl(e, n) {
  let t = -1, r, i, l, o, a, u, c, s;
  for (; ++t < e.length; )
    if (e[t][0] === "enter" && e[t][1].type === "attentionSequence" && e[t][1]._close) {
      for (r = t; r--; )
        if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && // If the markers are the same:
        n.sliceSerialize(e[r][1]).charCodeAt(0) === n.sliceSerialize(e[t][1]).charCodeAt(0)) {
          if ((e[r][1]._close || e[t][1]._open) && (e[t][1].end.offset - e[t][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[t][1].end.offset - e[t][1].start.offset) % 3))
            continue;
          u = e[r][1].end.offset - e[r][1].start.offset > 1 && e[t][1].end.offset - e[t][1].start.offset > 1 ? 2 : 1;
          const f = {
            ...e[r][1].end
          }, d = {
            ...e[t][1].start
          };
          Yt(f, -u), Yt(d, u), o = {
            type: u > 1 ? "strongSequence" : "emphasisSequence",
            start: f,
            end: {
              ...e[r][1].end
            }
          }, a = {
            type: u > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...e[t][1].start
            },
            end: d
          }, l = {
            type: u > 1 ? "strongText" : "emphasisText",
            start: {
              ...e[r][1].end
            },
            end: {
              ...e[t][1].start
            }
          }, i = {
            type: u > 1 ? "strong" : "emphasis",
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
          }, c = [], e[r][1].end.offset - e[r][1].start.offset && (c = ve(c, [["enter", e[r][1], n], ["exit", e[r][1], n]])), c = ve(c, [["enter", i, n], ["enter", o, n], ["exit", o, n], ["enter", l, n]]), c = ve(c, dt(n.parser.constructs.insideSpan.null, e.slice(r + 1, t), n)), c = ve(c, [["exit", l, n], ["enter", a, n], ["exit", a, n], ["exit", i, n]]), e[t][1].end.offset - e[t][1].start.offset ? (s = 2, c = ve(c, [["enter", e[t][1], n], ["exit", e[t][1], n]])) : s = 0, _e(e, r - 1, t - r + 3, c), t = r + c.length - s - 2;
          break;
        }
    }
  for (t = -1; ++t < e.length; )
    e[t][1].type === "attentionSequence" && (e[t][1].type = "data");
  return e;
}
function Cl(e, n) {
  const t = this.parser.constructs.attentionMarkers.null, r = this.previous, i = Wt(r);
  let l;
  return o;
  function o(u) {
    return l = u, e.enter("attentionSequence"), a(u);
  }
  function a(u) {
    if (u === l)
      return e.consume(u), a;
    const c = e.exit("attentionSequence"), s = Wt(u), f = !s || s === 2 && i || t.includes(u), d = !i || i === 2 && s || t.includes(r);
    return c._open = !!(l === 42 ? f : f && (i || !d)), c._close = !!(l === 42 ? d : d && (s || !f)), n(u);
  }
}
function Yt(e, n) {
  e.column += n, e.offset += n, e._bufferIndex += n;
}
const Il = {
  name: "autolink",
  tokenize: Tl
};
function Tl(e, n, t) {
  let r = 0;
  return i;
  function i(p) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), l;
  }
  function l(p) {
    return Re(p) ? (e.consume(p), o) : p === 64 ? t(p) : c(p);
  }
  function o(p) {
    return p === 43 || p === 45 || p === 46 || be(p) ? (r = 1, a(p)) : c(p);
  }
  function a(p) {
    return p === 58 ? (e.consume(p), r = 0, u) : (p === 43 || p === 45 || p === 46 || be(p)) && r++ < 32 ? (e.consume(p), a) : (r = 0, c(p));
  }
  function u(p) {
    return p === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.exit("autolink"), n) : p === null || p === 32 || p === 60 || nt(p) ? t(p) : (e.consume(p), u);
  }
  function c(p) {
    return p === 64 ? (e.consume(p), s) : dl(p) ? (e.consume(p), c) : t(p);
  }
  function s(p) {
    return be(p) ? f(p) : t(p);
  }
  function f(p) {
    return p === 46 ? (e.consume(p), r = 0, s) : p === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.exit("autolink"), n) : d(p);
  }
  function d(p) {
    if ((p === 45 || be(p)) && r++ < 63) {
      const v = p === 45 ? d : f;
      return e.consume(p), v;
    }
    return t(p);
  }
}
const Tn = {
  partial: !0,
  tokenize: Pl
};
function Pl(e, n, t) {
  return r;
  function r(l) {
    return $(l) ? ee(e, i, "linePrefix")(l) : i(l);
  }
  function i(l) {
    return l === null || j(l) ? n(l) : t(l);
  }
}
const Lr = {
  continuation: {
    tokenize: _l
  },
  exit: Al,
  name: "blockQuote",
  tokenize: Rl
};
function Rl(e, n, t) {
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
function _l(e, n, t) {
  const r = this;
  return i;
  function i(o) {
    return $(o) ? ee(e, l, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(o) : l(o);
  }
  function l(o) {
    return e.attempt(Lr, n, t)(o);
  }
}
function Al(e) {
  e.exit("blockQuote");
}
const Dr = {
  name: "characterEscape",
  tokenize: Ol
};
function Ol(e, n, t) {
  return r;
  function r(l) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(l), e.exit("escapeMarker"), i;
  }
  function i(l) {
    return gl(l) ? (e.enter("characterEscapeValue"), e.consume(l), e.exit("characterEscapeValue"), e.exit("characterEscape"), n) : t(l);
  }
}
const zr = {
  name: "characterReference",
  tokenize: Nl
};
function Nl(e, n, t) {
  const r = this;
  let i = 0, l, o;
  return a;
  function a(f) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), u;
  }
  function u(f) {
    return f === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(f), e.exit("characterReferenceMarkerNumeric"), c) : (e.enter("characterReferenceValue"), l = 31, o = be, s(f));
  }
  function c(f) {
    return f === 88 || f === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(f), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), l = 6, o = ml, s) : (e.enter("characterReferenceValue"), l = 7, o = tt, s(f));
  }
  function s(f) {
    if (f === 59 && i) {
      const d = e.exit("characterReferenceValue");
      return o === be && !ht(r.sliceSerialize(d)) ? t(f) : (e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), e.exit("characterReference"), n);
    }
    return o(f) && i++ < l ? (e.consume(f), s) : t(f);
  }
}
const Xt = {
  partial: !0,
  tokenize: Ll
}, Jt = {
  concrete: !0,
  name: "codeFenced",
  tokenize: jl
};
function jl(e, n, t) {
  const r = this, i = {
    partial: !0,
    tokenize: K
  };
  let l = 0, o = 0, a;
  return u;
  function u(x) {
    return c(x);
  }
  function c(x) {
    const V = r.events[r.events.length - 1];
    return l = V && V[1].type === "linePrefix" ? V[2].sliceSerialize(V[1], !0).length : 0, a = x, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), s(x);
  }
  function s(x) {
    return x === a ? (o++, e.consume(x), s) : o < 3 ? t(x) : (e.exit("codeFencedFenceSequence"), $(x) ? ee(e, f, "whitespace")(x) : f(x));
  }
  function f(x) {
    return x === null || j(x) ? (e.exit("codeFencedFence"), r.interrupt ? n(x) : e.check(Xt, I, J)(x)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), d(x));
  }
  function d(x) {
    return x === null || j(x) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), f(x)) : $(x) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), ee(e, p, "whitespace")(x)) : x === 96 && x === a ? t(x) : (e.consume(x), d);
  }
  function p(x) {
    return x === null || j(x) ? f(x) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), v(x));
  }
  function v(x) {
    return x === null || j(x) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), f(x)) : x === 96 && x === a ? t(x) : (e.consume(x), v);
  }
  function I(x) {
    return e.attempt(i, J, R)(x);
  }
  function R(x) {
    return e.enter("lineEnding"), e.consume(x), e.exit("lineEnding"), k;
  }
  function k(x) {
    return l > 0 && $(x) ? ee(e, _, "linePrefix", l + 1)(x) : _(x);
  }
  function _(x) {
    return x === null || j(x) ? e.check(Xt, I, J)(x) : (e.enter("codeFlowValue"), P(x));
  }
  function P(x) {
    return x === null || j(x) ? (e.exit("codeFlowValue"), _(x)) : (e.consume(x), P);
  }
  function J(x) {
    return e.exit("codeFenced"), n(x);
  }
  function K(x, V, Q) {
    let H = 0;
    return W;
    function W(C) {
      return x.enter("lineEnding"), x.consume(C), x.exit("lineEnding"), N;
    }
    function N(C) {
      return x.enter("codeFencedFence"), $(C) ? ee(x, A, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(C) : A(C);
    }
    function A(C) {
      return C === a ? (x.enter("codeFencedFenceSequence"), B(C)) : Q(C);
    }
    function B(C) {
      return C === a ? (H++, x.consume(C), B) : H >= o ? (x.exit("codeFencedFenceSequence"), $(C) ? ee(x, O, "whitespace")(C) : O(C)) : Q(C);
    }
    function O(C) {
      return C === null || j(C) ? (x.exit("codeFencedFence"), V(C)) : Q(C);
    }
  }
}
function Ll(e, n, t) {
  const r = this;
  return i;
  function i(o) {
    return o === null ? t(o) : (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), l);
  }
  function l(o) {
    return r.parser.lazy[r.now().line] ? t(o) : n(o);
  }
}
const Un = {
  name: "codeIndented",
  tokenize: zl
}, Dl = {
  partial: !0,
  tokenize: Fl
};
function zl(e, n, t) {
  const r = this;
  return i;
  function i(c) {
    return e.enter("codeIndented"), ee(e, l, "linePrefix", 5)(c);
  }
  function l(c) {
    const s = r.events[r.events.length - 1];
    return s && s[1].type === "linePrefix" && s[2].sliceSerialize(s[1], !0).length >= 4 ? o(c) : t(c);
  }
  function o(c) {
    return c === null ? u(c) : j(c) ? e.attempt(Dl, o, u)(c) : (e.enter("codeFlowValue"), a(c));
  }
  function a(c) {
    return c === null || j(c) ? (e.exit("codeFlowValue"), o(c)) : (e.consume(c), a);
  }
  function u(c) {
    return e.exit("codeIndented"), n(c);
  }
}
function Fl(e, n, t) {
  const r = this;
  return i;
  function i(o) {
    return r.parser.lazy[r.now().line] ? t(o) : j(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), i) : ee(e, l, "linePrefix", 5)(o);
  }
  function l(o) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? n(o) : j(o) ? i(o) : t(o);
  }
}
const Ml = {
  name: "codeText",
  previous: Ul,
  resolve: Bl,
  tokenize: Vl
};
function Bl(e) {
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
function Ul(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function Vl(e, n, t) {
  let r = 0, i, l;
  return o;
  function o(f) {
    return e.enter("codeText"), e.enter("codeTextSequence"), a(f);
  }
  function a(f) {
    return f === 96 ? (e.consume(f), r++, a) : (e.exit("codeTextSequence"), u(f));
  }
  function u(f) {
    return f === null ? t(f) : f === 32 ? (e.enter("space"), e.consume(f), e.exit("space"), u) : f === 96 ? (l = e.enter("codeTextSequence"), i = 0, s(f)) : j(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), u) : (e.enter("codeTextData"), c(f));
  }
  function c(f) {
    return f === null || f === 32 || f === 96 || j(f) ? (e.exit("codeTextData"), u(f)) : (e.consume(f), c);
  }
  function s(f) {
    return f === 96 ? (e.consume(f), i++, s) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), n(f)) : (l.type = "codeTextData", c(f));
  }
}
class Hl {
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
    return r && on(this.left, r), l.reverse();
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
    this.setCursor(Number.POSITIVE_INFINITY), on(this.left, n);
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
    this.setCursor(0), on(this.right, n.reverse());
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
        on(this.right, t.reverse());
      } else {
        const t = this.right.splice(this.left.length + this.right.length - n, Number.POSITIVE_INFINITY);
        on(this.left, t.reverse());
      }
  }
}
function on(e, n) {
  let t = 0;
  if (n.length < 1e4)
    e.push(...n);
  else
    for (; t < n.length; )
      e.push(...n.slice(t, t + 1e4)), t += 1e4;
}
function Fr(e) {
  const n = {};
  let t = -1, r, i, l, o, a, u, c;
  const s = new Hl(e);
  for (; ++t < s.length; ) {
    for (; t in n; )
      t = n[t];
    if (r = s.get(t), t && r[1].type === "chunkFlow" && s.get(t - 1)[1].type === "listItemPrefix" && (u = r[1]._tokenizer.events, l = 0, l < u.length && u[l][1].type === "lineEndingBlank" && (l += 2), l < u.length && u[l][1].type === "content"))
      for (; ++l < u.length && u[l][1].type !== "content"; )
        u[l][1].type === "chunkText" && (u[l][1]._isInFirstContentOfListItem = !0, l++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(n, ql(s, t)), t = n[t], c = !0);
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
  return _e(e, 0, Number.POSITIVE_INFINITY, s.slice(0)), !c;
}
function ql(e, n) {
  const t = e.get(n)[1], r = e.get(n)[2];
  let i = n - 1;
  const l = [];
  let o = t._tokenizer;
  o || (o = r.parser[t.contentType](t.start), t._contentTypeTextTrailing && (o._contentTypeTextTrailing = !0));
  const a = o.events, u = [], c = {};
  let s, f, d = -1, p = t, v = 0, I = 0;
  const R = [I];
  for (; p; ) {
    for (; e.get(++i)[1] !== p; )
      ;
    l.push(i), p._tokenizer || (s = r.sliceStream(p), p.next || s.push(null), f && o.defineSkip(p.start), p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = !0), o.write(s), p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = void 0)), f = p, p = p.next;
  }
  for (p = t; ++d < a.length; )
    // Find a void token that includes a break.
    a[d][0] === "exit" && a[d - 1][0] === "enter" && a[d][1].type === a[d - 1][1].type && a[d][1].start.line !== a[d][1].end.line && (I = d + 1, R.push(I), p._tokenizer = void 0, p.previous = void 0, p = p.next);
  for (o.events = [], p ? (p._tokenizer = void 0, p.previous = void 0) : R.pop(), d = R.length; d--; ) {
    const k = a.slice(R[d], R[d + 1]), _ = l.pop();
    u.push([_, _ + k.length - 1]), e.splice(_, 2, k);
  }
  for (u.reverse(), d = -1; ++d < u.length; )
    c[v + u[d][0]] = v + u[d][1], v += u[d][1] - u[d][0] - 1;
  return c;
}
const $l = {
  resolve: Yl,
  tokenize: Xl
}, Wl = {
  partial: !0,
  tokenize: Jl
};
function Yl(e) {
  return Fr(e), e;
}
function Xl(e, n) {
  let t;
  return r;
  function r(a) {
    return e.enter("content"), t = e.enter("chunkContent", {
      contentType: "content"
    }), i(a);
  }
  function i(a) {
    return a === null ? l(a) : j(a) ? e.check(Wl, o, l)(a) : (e.consume(a), i);
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
function Jl(e, n, t) {
  const r = this;
  return i;
  function i(o) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), ee(e, l, "linePrefix");
  }
  function l(o) {
    if (o === null || j(o))
      return t(o);
    const a = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? n(o) : e.interrupt(r.parser.constructs.flow, t, n)(o);
  }
}
function Mr(e, n, t, r, i, l, o, a, u) {
  const c = u || Number.POSITIVE_INFINITY;
  let s = 0;
  return f;
  function f(k) {
    return k === 60 ? (e.enter(r), e.enter(i), e.enter(l), e.consume(k), e.exit(l), d) : k === null || k === 32 || k === 41 || nt(k) ? t(k) : (e.enter(r), e.enter(o), e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), I(k));
  }
  function d(k) {
    return k === 62 ? (e.enter(l), e.consume(k), e.exit(l), e.exit(i), e.exit(r), n) : (e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), p(k));
  }
  function p(k) {
    return k === 62 ? (e.exit("chunkString"), e.exit(a), d(k)) : k === null || k === 60 || j(k) ? t(k) : (e.consume(k), k === 92 ? v : p);
  }
  function v(k) {
    return k === 60 || k === 62 || k === 92 ? (e.consume(k), p) : p(k);
  }
  function I(k) {
    return !s && (k === null || k === 41 || he(k)) ? (e.exit("chunkString"), e.exit(a), e.exit(o), e.exit(r), n(k)) : s < c && k === 40 ? (e.consume(k), s++, I) : k === 41 ? (e.consume(k), s--, I) : k === null || k === 32 || k === 40 || nt(k) ? t(k) : (e.consume(k), k === 92 ? R : I);
  }
  function R(k) {
    return k === 40 || k === 41 || k === 92 ? (e.consume(k), I) : I(k);
  }
}
function Br(e, n, t, r, i, l) {
  const o = this;
  let a = 0, u;
  return c;
  function c(p) {
    return e.enter(r), e.enter(i), e.consume(p), e.exit(i), e.enter(l), s;
  }
  function s(p) {
    return a > 999 || p === null || p === 91 || p === 93 && !u || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    p === 94 && !a && "_hiddenFootnoteSupport" in o.parser.constructs ? t(p) : p === 93 ? (e.exit(l), e.enter(i), e.consume(p), e.exit(i), e.exit(r), n) : j(p) ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), s) : (e.enter("chunkString", {
      contentType: "string"
    }), f(p));
  }
  function f(p) {
    return p === null || p === 91 || p === 93 || j(p) || a++ > 999 ? (e.exit("chunkString"), s(p)) : (e.consume(p), u || (u = !$(p)), p === 92 ? d : f);
  }
  function d(p) {
    return p === 91 || p === 92 || p === 93 ? (e.consume(p), a++, f) : f(p);
  }
}
function Ur(e, n, t, r, i, l) {
  let o;
  return a;
  function a(d) {
    return d === 34 || d === 39 || d === 40 ? (e.enter(r), e.enter(i), e.consume(d), e.exit(i), o = d === 40 ? 41 : d, u) : t(d);
  }
  function u(d) {
    return d === o ? (e.enter(i), e.consume(d), e.exit(i), e.exit(r), n) : (e.enter(l), c(d));
  }
  function c(d) {
    return d === o ? (e.exit(l), u(o)) : d === null ? t(d) : j(d) ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), ee(e, c, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), s(d));
  }
  function s(d) {
    return d === o || d === null || j(d) ? (e.exit("chunkString"), c(d)) : (e.consume(d), d === 92 ? f : s);
  }
  function f(d) {
    return d === o || d === 92 ? (e.consume(d), s) : s(d);
  }
}
function sn(e, n) {
  let t;
  return r;
  function r(i) {
    return j(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), t = !0, r) : $(i) ? ee(e, r, t ? "linePrefix" : "lineSuffix")(i) : n(i);
  }
}
const Kl = {
  name: "definition",
  tokenize: Gl
}, Ql = {
  partial: !0,
  tokenize: Zl
};
function Gl(e, n, t) {
  const r = this;
  let i;
  return l;
  function l(p) {
    return e.enter("definition"), o(p);
  }
  function o(p) {
    return Br.call(
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
    return i = Ke(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), p === 58 ? (e.enter("definitionMarker"), e.consume(p), e.exit("definitionMarker"), u) : t(p);
  }
  function u(p) {
    return he(p) ? sn(e, c)(p) : c(p);
  }
  function c(p) {
    return Mr(
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
    return e.attempt(Ql, f, f)(p);
  }
  function f(p) {
    return $(p) ? ee(e, d, "whitespace")(p) : d(p);
  }
  function d(p) {
    return p === null || j(p) ? (e.exit("definition"), r.parser.defined.push(i), n(p)) : t(p);
  }
}
function Zl(e, n, t) {
  return r;
  function r(a) {
    return he(a) ? sn(e, i)(a) : t(a);
  }
  function i(a) {
    return Ur(e, l, t, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(a);
  }
  function l(a) {
    return $(a) ? ee(e, o, "whitespace")(a) : o(a);
  }
  function o(a) {
    return a === null || j(a) ? n(a) : t(a);
  }
}
const eo = {
  name: "hardBreakEscape",
  tokenize: no
};
function no(e, n, t) {
  return r;
  function r(l) {
    return e.enter("hardBreakEscape"), e.consume(l), i;
  }
  function i(l) {
    return j(l) ? (e.exit("hardBreakEscape"), n(l)) : t(l);
  }
}
const to = {
  name: "headingAtx",
  resolve: ro,
  tokenize: io
};
function ro(e, n) {
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
  }, _e(e, r, t - r + 1, [["enter", i, n], ["enter", l, n], ["exit", l, n], ["exit", i, n]])), e;
}
function io(e, n, t) {
  let r = 0;
  return i;
  function i(s) {
    return e.enter("atxHeading"), l(s);
  }
  function l(s) {
    return e.enter("atxHeadingSequence"), o(s);
  }
  function o(s) {
    return s === 35 && r++ < 6 ? (e.consume(s), o) : s === null || he(s) ? (e.exit("atxHeadingSequence"), a(s)) : t(s);
  }
  function a(s) {
    return s === 35 ? (e.enter("atxHeadingSequence"), u(s)) : s === null || j(s) ? (e.exit("atxHeading"), n(s)) : $(s) ? ee(e, a, "whitespace")(s) : (e.enter("atxHeadingText"), c(s));
  }
  function u(s) {
    return s === 35 ? (e.consume(s), u) : (e.exit("atxHeadingSequence"), a(s));
  }
  function c(s) {
    return s === null || s === 35 || he(s) ? (e.exit("atxHeadingText"), a(s)) : (e.consume(s), c);
  }
}
const lo = [
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
], Kt = ["pre", "script", "style", "textarea"], oo = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: so,
  tokenize: co
}, ao = {
  partial: !0,
  tokenize: po
}, uo = {
  partial: !0,
  tokenize: fo
};
function so(e) {
  let n = e.length;
  for (; n-- && !(e[n][0] === "enter" && e[n][1].type === "htmlFlow"); )
    ;
  return n > 1 && e[n - 2][1].type === "linePrefix" && (e[n][1].start = e[n - 2][1].start, e[n + 1][1].start = e[n - 2][1].start, e.splice(n - 2, 2)), e;
}
function co(e, n, t) {
  const r = this;
  let i, l, o, a, u;
  return c;
  function c(g) {
    return s(g);
  }
  function s(g) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(g), f;
  }
  function f(g) {
    return g === 33 ? (e.consume(g), d) : g === 47 ? (e.consume(g), l = !0, I) : g === 63 ? (e.consume(g), i = 3, r.interrupt ? n : m) : Re(g) ? (e.consume(g), o = String.fromCharCode(g), R) : t(g);
  }
  function d(g) {
    return g === 45 ? (e.consume(g), i = 2, p) : g === 91 ? (e.consume(g), i = 5, a = 0, v) : Re(g) ? (e.consume(g), i = 4, r.interrupt ? n : m) : t(g);
  }
  function p(g) {
    return g === 45 ? (e.consume(g), r.interrupt ? n : m) : t(g);
  }
  function v(g) {
    const me = "CDATA[";
    return g === me.charCodeAt(a++) ? (e.consume(g), a === me.length ? r.interrupt ? n : A : v) : t(g);
  }
  function I(g) {
    return Re(g) ? (e.consume(g), o = String.fromCharCode(g), R) : t(g);
  }
  function R(g) {
    if (g === null || g === 47 || g === 62 || he(g)) {
      const me = g === 47, Ae = o.toLowerCase();
      return !me && !l && Kt.includes(Ae) ? (i = 1, r.interrupt ? n(g) : A(g)) : lo.includes(o.toLowerCase()) ? (i = 6, me ? (e.consume(g), k) : r.interrupt ? n(g) : A(g)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? t(g) : l ? _(g) : P(g));
    }
    return g === 45 || be(g) ? (e.consume(g), o += String.fromCharCode(g), R) : t(g);
  }
  function k(g) {
    return g === 62 ? (e.consume(g), r.interrupt ? n : A) : t(g);
  }
  function _(g) {
    return $(g) ? (e.consume(g), _) : W(g);
  }
  function P(g) {
    return g === 47 ? (e.consume(g), W) : g === 58 || g === 95 || Re(g) ? (e.consume(g), J) : $(g) ? (e.consume(g), P) : W(g);
  }
  function J(g) {
    return g === 45 || g === 46 || g === 58 || g === 95 || be(g) ? (e.consume(g), J) : K(g);
  }
  function K(g) {
    return g === 61 ? (e.consume(g), x) : $(g) ? (e.consume(g), K) : P(g);
  }
  function x(g) {
    return g === null || g === 60 || g === 61 || g === 62 || g === 96 ? t(g) : g === 34 || g === 39 ? (e.consume(g), u = g, V) : $(g) ? (e.consume(g), x) : Q(g);
  }
  function V(g) {
    return g === u ? (e.consume(g), u = null, H) : g === null || j(g) ? t(g) : (e.consume(g), V);
  }
  function Q(g) {
    return g === null || g === 34 || g === 39 || g === 47 || g === 60 || g === 61 || g === 62 || g === 96 || he(g) ? K(g) : (e.consume(g), Q);
  }
  function H(g) {
    return g === 47 || g === 62 || $(g) ? P(g) : t(g);
  }
  function W(g) {
    return g === 62 ? (e.consume(g), N) : t(g);
  }
  function N(g) {
    return g === null || j(g) ? A(g) : $(g) ? (e.consume(g), N) : t(g);
  }
  function A(g) {
    return g === 45 && i === 2 ? (e.consume(g), q) : g === 60 && i === 1 ? (e.consume(g), ne) : g === 62 && i === 4 ? (e.consume(g), ce) : g === 63 && i === 3 ? (e.consume(g), m) : g === 93 && i === 5 ? (e.consume(g), we) : j(g) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(ao, Se, B)(g)) : g === null || j(g) ? (e.exit("htmlFlowData"), B(g)) : (e.consume(g), A);
  }
  function B(g) {
    return e.check(uo, O, Se)(g);
  }
  function O(g) {
    return e.enter("lineEnding"), e.consume(g), e.exit("lineEnding"), C;
  }
  function C(g) {
    return g === null || j(g) ? B(g) : (e.enter("htmlFlowData"), A(g));
  }
  function q(g) {
    return g === 45 ? (e.consume(g), m) : A(g);
  }
  function ne(g) {
    return g === 47 ? (e.consume(g), o = "", se) : A(g);
  }
  function se(g) {
    if (g === 62) {
      const me = o.toLowerCase();
      return Kt.includes(me) ? (e.consume(g), ce) : A(g);
    }
    return Re(g) && o.length < 8 ? (e.consume(g), o += String.fromCharCode(g), se) : A(g);
  }
  function we(g) {
    return g === 93 ? (e.consume(g), m) : A(g);
  }
  function m(g) {
    return g === 62 ? (e.consume(g), ce) : g === 45 && i === 2 ? (e.consume(g), m) : A(g);
  }
  function ce(g) {
    return g === null || j(g) ? (e.exit("htmlFlowData"), Se(g)) : (e.consume(g), ce);
  }
  function Se(g) {
    return e.exit("htmlFlow"), n(g);
  }
}
function fo(e, n, t) {
  const r = this;
  return i;
  function i(o) {
    return j(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), l) : t(o);
  }
  function l(o) {
    return r.parser.lazy[r.now().line] ? t(o) : n(o);
  }
}
function po(e, n, t) {
  return r;
  function r(i) {
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(Tn, n, t);
  }
}
const ho = {
  name: "htmlText",
  tokenize: mo
};
function mo(e, n, t) {
  const r = this;
  let i, l, o;
  return a;
  function a(m) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(m), u;
  }
  function u(m) {
    return m === 33 ? (e.consume(m), c) : m === 47 ? (e.consume(m), K) : m === 63 ? (e.consume(m), P) : Re(m) ? (e.consume(m), Q) : t(m);
  }
  function c(m) {
    return m === 45 ? (e.consume(m), s) : m === 91 ? (e.consume(m), l = 0, v) : Re(m) ? (e.consume(m), _) : t(m);
  }
  function s(m) {
    return m === 45 ? (e.consume(m), p) : t(m);
  }
  function f(m) {
    return m === null ? t(m) : m === 45 ? (e.consume(m), d) : j(m) ? (o = f, ne(m)) : (e.consume(m), f);
  }
  function d(m) {
    return m === 45 ? (e.consume(m), p) : f(m);
  }
  function p(m) {
    return m === 62 ? q(m) : m === 45 ? d(m) : f(m);
  }
  function v(m) {
    const ce = "CDATA[";
    return m === ce.charCodeAt(l++) ? (e.consume(m), l === ce.length ? I : v) : t(m);
  }
  function I(m) {
    return m === null ? t(m) : m === 93 ? (e.consume(m), R) : j(m) ? (o = I, ne(m)) : (e.consume(m), I);
  }
  function R(m) {
    return m === 93 ? (e.consume(m), k) : I(m);
  }
  function k(m) {
    return m === 62 ? q(m) : m === 93 ? (e.consume(m), k) : I(m);
  }
  function _(m) {
    return m === null || m === 62 ? q(m) : j(m) ? (o = _, ne(m)) : (e.consume(m), _);
  }
  function P(m) {
    return m === null ? t(m) : m === 63 ? (e.consume(m), J) : j(m) ? (o = P, ne(m)) : (e.consume(m), P);
  }
  function J(m) {
    return m === 62 ? q(m) : P(m);
  }
  function K(m) {
    return Re(m) ? (e.consume(m), x) : t(m);
  }
  function x(m) {
    return m === 45 || be(m) ? (e.consume(m), x) : V(m);
  }
  function V(m) {
    return j(m) ? (o = V, ne(m)) : $(m) ? (e.consume(m), V) : q(m);
  }
  function Q(m) {
    return m === 45 || be(m) ? (e.consume(m), Q) : m === 47 || m === 62 || he(m) ? H(m) : t(m);
  }
  function H(m) {
    return m === 47 ? (e.consume(m), q) : m === 58 || m === 95 || Re(m) ? (e.consume(m), W) : j(m) ? (o = H, ne(m)) : $(m) ? (e.consume(m), H) : q(m);
  }
  function W(m) {
    return m === 45 || m === 46 || m === 58 || m === 95 || be(m) ? (e.consume(m), W) : N(m);
  }
  function N(m) {
    return m === 61 ? (e.consume(m), A) : j(m) ? (o = N, ne(m)) : $(m) ? (e.consume(m), N) : H(m);
  }
  function A(m) {
    return m === null || m === 60 || m === 61 || m === 62 || m === 96 ? t(m) : m === 34 || m === 39 ? (e.consume(m), i = m, B) : j(m) ? (o = A, ne(m)) : $(m) ? (e.consume(m), A) : (e.consume(m), O);
  }
  function B(m) {
    return m === i ? (e.consume(m), i = void 0, C) : m === null ? t(m) : j(m) ? (o = B, ne(m)) : (e.consume(m), B);
  }
  function O(m) {
    return m === null || m === 34 || m === 39 || m === 60 || m === 61 || m === 96 ? t(m) : m === 47 || m === 62 || he(m) ? H(m) : (e.consume(m), O);
  }
  function C(m) {
    return m === 47 || m === 62 || he(m) ? H(m) : t(m);
  }
  function q(m) {
    return m === 62 ? (e.consume(m), e.exit("htmlTextData"), e.exit("htmlText"), n) : t(m);
  }
  function ne(m) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(m), e.exit("lineEnding"), se;
  }
  function se(m) {
    return $(m) ? ee(e, we, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(m) : we(m);
  }
  function we(m) {
    return e.enter("htmlTextData"), o(m);
  }
}
const mt = {
  name: "labelEnd",
  resolveAll: ko,
  resolveTo: bo,
  tokenize: wo
}, go = {
  tokenize: So
}, yo = {
  tokenize: Eo
}, xo = {
  tokenize: vo
};
function ko(e) {
  let n = -1;
  const t = [];
  for (; ++n < e.length; ) {
    const r = e[n][1];
    if (t.push(e[n]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
      const i = r.type === "labelImage" ? 4 : 2;
      r.type = "data", n += i;
    }
  }
  return e.length !== t.length && _e(e, 0, e.length, t), e;
}
function bo(e, n) {
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
  const u = {
    type: e[l][1].type === "labelLink" ? "link" : "image",
    start: {
      ...e[l][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  }, c = {
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
  return a = [["enter", u, n], ["enter", c, n]], a = ve(a, e.slice(l + 1, l + r + 3)), a = ve(a, [["enter", s, n]]), a = ve(a, dt(n.parser.constructs.insideSpan.null, e.slice(l + r + 4, o - 3), n)), a = ve(a, [["exit", s, n], e[o - 2], e[o - 1], ["exit", c, n]]), a = ve(a, e.slice(o + 1)), a = ve(a, [["exit", u, n]]), _e(e, l, e.length, a), e;
}
function wo(e, n, t) {
  const r = this;
  let i = r.events.length, l, o;
  for (; i--; )
    if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
      l = r.events[i][1];
      break;
    }
  return a;
  function a(d) {
    return l ? l._inactive ? f(d) : (o = r.parser.defined.includes(Ke(r.sliceSerialize({
      start: l.end,
      end: r.now()
    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(d), e.exit("labelMarker"), e.exit("labelEnd"), u) : t(d);
  }
  function u(d) {
    return d === 40 ? e.attempt(go, s, o ? s : f)(d) : d === 91 ? e.attempt(yo, s, o ? c : f)(d) : o ? s(d) : f(d);
  }
  function c(d) {
    return e.attempt(xo, s, f)(d);
  }
  function s(d) {
    return n(d);
  }
  function f(d) {
    return l._balanced = !0, t(d);
  }
}
function So(e, n, t) {
  return r;
  function r(f) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(f), e.exit("resourceMarker"), i;
  }
  function i(f) {
    return he(f) ? sn(e, l)(f) : l(f);
  }
  function l(f) {
    return f === 41 ? s(f) : Mr(e, o, a, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(f);
  }
  function o(f) {
    return he(f) ? sn(e, u)(f) : s(f);
  }
  function a(f) {
    return t(f);
  }
  function u(f) {
    return f === 34 || f === 39 || f === 40 ? Ur(e, c, t, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(f) : s(f);
  }
  function c(f) {
    return he(f) ? sn(e, s)(f) : s(f);
  }
  function s(f) {
    return f === 41 ? (e.enter("resourceMarker"), e.consume(f), e.exit("resourceMarker"), e.exit("resource"), n) : t(f);
  }
}
function Eo(e, n, t) {
  const r = this;
  return i;
  function i(a) {
    return Br.call(r, e, l, o, "reference", "referenceMarker", "referenceString")(a);
  }
  function l(a) {
    return r.parser.defined.includes(Ke(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? n(a) : t(a);
  }
  function o(a) {
    return t(a);
  }
}
function vo(e, n, t) {
  return r;
  function r(l) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(l), e.exit("referenceMarker"), i;
  }
  function i(l) {
    return l === 93 ? (e.enter("referenceMarker"), e.consume(l), e.exit("referenceMarker"), e.exit("reference"), n) : t(l);
  }
}
const Co = {
  name: "labelStartImage",
  resolveAll: mt.resolveAll,
  tokenize: Io
};
function Io(e, n, t) {
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
const To = {
  name: "labelStartLink",
  resolveAll: mt.resolveAll,
  tokenize: Po
};
function Po(e, n, t) {
  const r = this;
  return i;
  function i(o) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(o), e.exit("labelMarker"), e.exit("labelLink"), l;
  }
  function l(o) {
    return o === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? t(o) : n(o);
  }
}
const Vn = {
  name: "lineEnding",
  tokenize: Ro
};
function Ro(e, n) {
  return t;
  function t(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), ee(e, n, "linePrefix");
  }
}
const vn = {
  name: "thematicBreak",
  tokenize: _o
};
function _o(e, n, t) {
  let r = 0, i;
  return l;
  function l(c) {
    return e.enter("thematicBreak"), o(c);
  }
  function o(c) {
    return i = c, a(c);
  }
  function a(c) {
    return c === i ? (e.enter("thematicBreakSequence"), u(c)) : r >= 3 && (c === null || j(c)) ? (e.exit("thematicBreak"), n(c)) : t(c);
  }
  function u(c) {
    return c === i ? (e.consume(c), r++, u) : (e.exit("thematicBreakSequence"), $(c) ? ee(e, a, "whitespace")(c) : a(c));
  }
}
const pe = {
  continuation: {
    tokenize: jo
  },
  exit: Do,
  name: "list",
  tokenize: No
}, Ao = {
  partial: !0,
  tokenize: zo
}, Oo = {
  partial: !0,
  tokenize: Lo
};
function No(e, n, t) {
  const r = this, i = r.events[r.events.length - 1];
  let l = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, o = 0;
  return a;
  function a(p) {
    const v = r.containerState.type || (p === 42 || p === 43 || p === 45 ? "listUnordered" : "listOrdered");
    if (v === "listUnordered" ? !r.containerState.marker || p === r.containerState.marker : tt(p)) {
      if (r.containerState.type || (r.containerState.type = v, e.enter(v, {
        _container: !0
      })), v === "listUnordered")
        return e.enter("listItemPrefix"), p === 42 || p === 45 ? e.check(vn, t, c)(p) : c(p);
      if (!r.interrupt || p === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), u(p);
    }
    return t(p);
  }
  function u(p) {
    return tt(p) && ++o < 10 ? (e.consume(p), u) : (!r.interrupt || o < 2) && (r.containerState.marker ? p === r.containerState.marker : p === 41 || p === 46) ? (e.exit("listItemValue"), c(p)) : t(p);
  }
  function c(p) {
    return e.enter("listItemMarker"), e.consume(p), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || p, e.check(
      Tn,
      // Can’t be empty when interrupting.
      r.interrupt ? t : s,
      e.attempt(Ao, d, f)
    );
  }
  function s(p) {
    return r.containerState.initialBlankLine = !0, l++, d(p);
  }
  function f(p) {
    return $(p) ? (e.enter("listItemPrefixWhitespace"), e.consume(p), e.exit("listItemPrefixWhitespace"), d) : t(p);
  }
  function d(p) {
    return r.containerState.size = l + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, n(p);
  }
}
function jo(e, n, t) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(Tn, i, l);
  function i(a) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, ee(e, n, "listItemIndent", r.containerState.size + 1)(a);
  }
  function l(a) {
    return r.containerState.furtherBlankLines || !$(a) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, o(a)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(Oo, n, o)(a));
  }
  function o(a) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, ee(e, e.attempt(pe, n, t), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a);
  }
}
function Lo(e, n, t) {
  const r = this;
  return ee(e, i, "listItemIndent", r.containerState.size + 1);
  function i(l) {
    const o = r.events[r.events.length - 1];
    return o && o[1].type === "listItemIndent" && o[2].sliceSerialize(o[1], !0).length === r.containerState.size ? n(l) : t(l);
  }
}
function Do(e) {
  e.exit(this.containerState.type);
}
function zo(e, n, t) {
  const r = this;
  return ee(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function i(l) {
    const o = r.events[r.events.length - 1];
    return !$(l) && o && o[1].type === "listItemPrefixWhitespace" ? n(l) : t(l);
  }
}
const Qt = {
  name: "setextUnderline",
  resolveTo: Fo,
  tokenize: Mo
};
function Fo(e, n) {
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
function Mo(e, n, t) {
  const r = this;
  let i;
  return l;
  function l(c) {
    let s = r.events.length, f;
    for (; s--; )
      if (r.events[s][1].type !== "lineEnding" && r.events[s][1].type !== "linePrefix" && r.events[s][1].type !== "content") {
        f = r.events[s][1].type === "paragraph";
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || f) ? (e.enter("setextHeadingLine"), i = c, o(c)) : t(c);
  }
  function o(c) {
    return e.enter("setextHeadingLineSequence"), a(c);
  }
  function a(c) {
    return c === i ? (e.consume(c), a) : (e.exit("setextHeadingLineSequence"), $(c) ? ee(e, u, "lineSuffix")(c) : u(c));
  }
  function u(c) {
    return c === null || j(c) ? (e.exit("setextHeadingLine"), n(c)) : t(c);
  }
}
const Bo = {
  tokenize: Uo
};
function Uo(e) {
  const n = this, t = e.attempt(
    // Try to parse a blank line.
    Tn,
    r,
    // Try to parse initial flow (essentially, only code).
    e.attempt(this.parser.constructs.flowInitial, i, ee(e, e.attempt(this.parser.constructs.flow, i, e.attempt($l, i)), "linePrefix"))
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
const Vo = {
  resolveAll: Hr()
}, Ho = Vr("string"), qo = Vr("text");
function Vr(e) {
  return {
    resolveAll: Hr(e === "text" ? $o : void 0),
    tokenize: n
  };
  function n(t) {
    const r = this, i = this.parser.constructs[e], l = t.attempt(i, o, a);
    return o;
    function o(s) {
      return c(s) ? l(s) : a(s);
    }
    function a(s) {
      if (s === null) {
        t.consume(s);
        return;
      }
      return t.enter("data"), t.consume(s), u;
    }
    function u(s) {
      return c(s) ? (t.exit("data"), l(s)) : (t.consume(s), u);
    }
    function c(s) {
      if (s === null)
        return !0;
      const f = i[s];
      let d = -1;
      if (f)
        for (; ++d < f.length; ) {
          const p = f[d];
          if (!p.previous || p.previous.call(r, r.previous))
            return !0;
        }
      return !1;
    }
  }
}
function Hr(e) {
  return n;
  function n(t, r) {
    let i = -1, l;
    for (; ++i <= t.length; )
      l === void 0 ? t[i] && t[i][1].type === "data" && (l = i, i++) : (!t[i] || t[i][1].type !== "data") && (i !== l + 2 && (t[l][1].end = t[i - 1][1].end, t.splice(l + 2, i - l - 2), i = l + 2), l = void 0);
    return e ? e(t, r) : t;
  }
}
function $o(e, n) {
  let t = 0;
  for (; ++t <= e.length; )
    if ((t === e.length || e[t][1].type === "lineEnding") && e[t - 1][1].type === "data") {
      const r = e[t - 1][1], i = n.sliceStream(r);
      let l = i.length, o = -1, a = 0, u;
      for (; l--; ) {
        const c = i[l];
        if (typeof c == "string") {
          for (o = c.length; c.charCodeAt(o - 1) === 32; )
            a++, o--;
          if (o) break;
          o = -1;
        } else if (c === -2)
          u = !0, a++;
        else if (c !== -1) {
          l++;
          break;
        }
      }
      if (n._contentTypeTextTrailing && t === e.length && (a = 0), a) {
        const c = {
          type: t === e.length || u || a < 2 ? "lineSuffix" : "hardBreakTrailing",
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
          ...c.start
        }, r.start.offset === r.end.offset ? Object.assign(r, c) : (e.splice(t, 0, ["enter", c, n], ["exit", c, n]), t += 2);
      }
      t++;
    }
  return e;
}
const Wo = {
  42: pe,
  43: pe,
  45: pe,
  48: pe,
  49: pe,
  50: pe,
  51: pe,
  52: pe,
  53: pe,
  54: pe,
  55: pe,
  56: pe,
  57: pe,
  62: Lr
}, Yo = {
  91: Kl
}, Xo = {
  [-2]: Un,
  [-1]: Un,
  32: Un
}, Jo = {
  35: to,
  42: vn,
  45: [Qt, vn],
  60: oo,
  61: Qt,
  95: vn,
  96: Jt,
  126: Jt
}, Ko = {
  38: zr,
  92: Dr
}, Qo = {
  [-5]: Vn,
  [-4]: Vn,
  [-3]: Vn,
  33: Co,
  38: zr,
  42: rt,
  60: [Il, ho],
  91: To,
  92: [eo, Dr],
  93: mt,
  95: rt,
  96: Ml
}, Go = {
  null: [rt, Vo]
}, Zo = {
  null: [42, 95]
}, ea = {
  null: []
}, na = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: Zo,
  contentInitial: Yo,
  disable: ea,
  document: Wo,
  flow: Jo,
  flowInitial: Xo,
  insideSpan: Go,
  string: Ko,
  text: Qo
}, Symbol.toStringTag, { value: "Module" }));
function ta(e, n, t) {
  let r = {
    _bufferIndex: -1,
    _index: 0,
    line: t && t.line || 1,
    column: t && t.column || 1,
    offset: t && t.offset || 0
  };
  const i = {}, l = [];
  let o = [], a = [];
  const u = {
    attempt: V(K),
    check: V(x),
    consume: _,
    enter: P,
    exit: J,
    interrupt: V(x, {
      interrupt: !0
    })
  }, c = {
    code: null,
    containerState: {},
    defineSkip: I,
    events: [],
    now: v,
    parser: e,
    previous: null,
    sliceSerialize: d,
    sliceStream: p,
    write: f
  };
  let s = n.tokenize.call(c, u);
  return n.resolveAll && l.push(n), c;
  function f(N) {
    return o = ve(o, N), R(), o[o.length - 1] !== null ? [] : (Q(n, 0), c.events = dt(l, c.events, c), c.events);
  }
  function d(N, A) {
    return ia(p(N), A);
  }
  function p(N) {
    return ra(o, N);
  }
  function v() {
    const {
      _bufferIndex: N,
      _index: A,
      line: B,
      column: O,
      offset: C
    } = r;
    return {
      _bufferIndex: N,
      _index: A,
      line: B,
      column: O,
      offset: C
    };
  }
  function I(N) {
    i[N.line] = N.column, W();
  }
  function R() {
    let N;
    for (; r._index < o.length; ) {
      const A = o[r._index];
      if (typeof A == "string")
        for (N = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === N && r._bufferIndex < A.length; )
          k(A.charCodeAt(r._bufferIndex));
      else
        k(A);
    }
  }
  function k(N) {
    s = s(N);
  }
  function _(N) {
    j(N) ? (r.line++, r.column = 1, r.offset += N === -3 ? 2 : 1, W()) : N !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    o[r._index].length && (r._bufferIndex = -1, r._index++)), c.previous = N;
  }
  function P(N, A) {
    const B = A || {};
    return B.type = N, B.start = v(), c.events.push(["enter", B, c]), a.push(B), B;
  }
  function J(N) {
    const A = a.pop();
    return A.end = v(), c.events.push(["exit", A, c]), A;
  }
  function K(N, A) {
    Q(N, A.from);
  }
  function x(N, A) {
    A.restore();
  }
  function V(N, A) {
    return B;
    function B(O, C, q) {
      let ne, se, we, m;
      return Array.isArray(O) ? (
        /* c8 ignore next 1 */
        Se(O)
      ) : "tokenize" in O ? (
        // Looks like a construct.
        Se([
          /** @type {Construct} */
          O
        ])
      ) : ce(O);
      function ce(te) {
        return Oe;
        function Oe(ge) {
          const Te = ge !== null && te[ge], Ce = ge !== null && te.null, qe = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(Te) ? Te : Te ? [Te] : [],
            ...Array.isArray(Ce) ? Ce : Ce ? [Ce] : []
          ];
          return Se(qe)(ge);
        }
      }
      function Se(te) {
        return ne = te, se = 0, te.length === 0 ? q : g(te[se]);
      }
      function g(te) {
        return Oe;
        function Oe(ge) {
          return m = H(), we = te, te.partial || (c.currentConstruct = te), te.name && c.parser.constructs.disable.null.includes(te.name) ? Ae() : te.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            A ? Object.assign(Object.create(c), A) : c,
            u,
            me,
            Ae
          )(ge);
        }
      }
      function me(te) {
        return N(we, m), C;
      }
      function Ae(te) {
        return m.restore(), ++se < ne.length ? g(ne[se]) : q;
      }
    }
  }
  function Q(N, A) {
    N.resolveAll && !l.includes(N) && l.push(N), N.resolve && _e(c.events, A, c.events.length - A, N.resolve(c.events.slice(A), c)), N.resolveTo && (c.events = N.resolveTo(c.events, c));
  }
  function H() {
    const N = v(), A = c.previous, B = c.currentConstruct, O = c.events.length, C = Array.from(a);
    return {
      from: O,
      restore: q
    };
    function q() {
      r = N, c.previous = A, c.currentConstruct = B, c.events.length = O, a = C, W();
    }
  }
  function W() {
    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
  }
}
function ra(e, n) {
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
function ia(e, n) {
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
function la(e) {
  const r = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      fl([na, ...(e || {}).extensions || []])
    ),
    content: i(kl),
    defined: [],
    document: i(wl),
    flow: i(Bo),
    lazy: {},
    string: i(Ho),
    text: i(qo)
  };
  return r;
  function i(l) {
    return o;
    function o(a) {
      return ta(r, l, a);
    }
  }
}
function oa(e) {
  for (; !Fr(e); )
    ;
  return e;
}
const Gt = /[\0\t\n\r]/g;
function aa() {
  let e = 1, n = "", t = !0, r;
  return i;
  function i(l, o, a) {
    const u = [];
    let c, s, f, d, p;
    for (l = n + (typeof l == "string" ? l.toString() : new TextDecoder(o || void 0).decode(l)), f = 0, n = "", t && (l.charCodeAt(0) === 65279 && f++, t = void 0); f < l.length; ) {
      if (Gt.lastIndex = f, c = Gt.exec(l), d = c && c.index !== void 0 ? c.index : l.length, p = l.charCodeAt(d), !c) {
        n = l.slice(f);
        break;
      }
      if (p === 10 && f === d && r)
        u.push(-3), r = void 0;
      else
        switch (r && (u.push(-5), r = void 0), f < d && (u.push(l.slice(f, d)), e += d - f), p) {
          case 0: {
            u.push(65533), e++;
            break;
          }
          case 9: {
            for (s = Math.ceil(e / 4) * 4, u.push(-2); e++ < s; ) u.push(-1);
            break;
          }
          case 10: {
            u.push(-4), e = 1;
            break;
          }
          default:
            r = !0, e = 1;
        }
      f = d + 1;
    }
    return a && (r && u.push(-5), n && u.push(n), u.push(null)), u;
  }
}
const ua = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function sa(e) {
  return e.replace(ua, ca);
}
function ca(e, n, t) {
  if (n)
    return n;
  if (t.charCodeAt(0) === 35) {
    const i = t.charCodeAt(1), l = i === 120 || i === 88;
    return jr(t.slice(l ? 2 : 1), l ? 16 : 10);
  }
  return ht(t) || e;
}
const qr = {}.hasOwnProperty;
function fa(e, n, t) {
  return typeof n != "string" && (t = n, n = void 0), pa(t)(oa(la(t).document().write(aa()(e, n, !0))));
}
function pa(e) {
  const n = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: l(Me),
      autolinkProtocol: H,
      autolinkEmail: H,
      atxHeading: l(Fe),
      blockQuote: l(Ce),
      characterEscape: H,
      characterReference: H,
      codeFenced: l(qe),
      codeFencedFenceInfo: o,
      codeFencedFenceMeta: o,
      codeIndented: l(qe, o),
      codeText: l(gn, o),
      codeTextData: H,
      data: H,
      codeFlowValue: H,
      definition: l(_n),
      definitionDestinationString: o,
      definitionLabelString: o,
      definitionTitleString: o,
      emphasis: l(An),
      hardBreakEscape: l(je),
      hardBreakTrailing: l(je),
      htmlFlow: l(Ze, o),
      htmlFlowData: H,
      htmlText: l(Ze, o),
      htmlTextData: H,
      image: l(yn),
      label: o,
      link: l(Me),
      listItem: l(On),
      listItemValue: d,
      listOrdered: l(xn, f),
      listUnordered: l(xn),
      paragraph: l(en),
      reference: g,
      referenceString: o,
      resourceDestinationString: o,
      resourceTitleString: o,
      setextHeading: l(Fe),
      strong: l(Nn),
      thematicBreak: l(kn)
    },
    exit: {
      atxHeading: u(),
      atxHeadingSequence: K,
      autolink: u(),
      autolinkEmail: Te,
      autolinkProtocol: ge,
      blockQuote: u(),
      characterEscapeValue: W,
      characterReferenceMarkerHexadecimal: Ae,
      characterReferenceMarkerNumeric: Ae,
      characterReferenceValue: te,
      characterReference: Oe,
      codeFenced: u(R),
      codeFencedFence: I,
      codeFencedFenceInfo: p,
      codeFencedFenceMeta: v,
      codeFlowValue: W,
      codeIndented: u(k),
      codeText: u(C),
      codeTextData: W,
      data: W,
      definition: u(),
      definitionDestinationString: J,
      definitionLabelString: _,
      definitionTitleString: P,
      emphasis: u(),
      hardBreakEscape: u(A),
      hardBreakTrailing: u(A),
      htmlFlow: u(B),
      htmlFlowData: W,
      htmlText: u(O),
      htmlTextData: W,
      image: u(ne),
      label: we,
      labelText: se,
      lineEnding: N,
      link: u(q),
      listItem: u(),
      listOrdered: u(),
      listUnordered: u(),
      paragraph: u(),
      referenceString: me,
      resourceDestinationString: m,
      resourceTitleString: ce,
      resource: Se,
      setextHeading: u(Q),
      setextHeadingLineSequence: V,
      setextHeadingText: x,
      strong: u(),
      thematicBreak: u()
    }
  };
  $r(n, (e || {}).mdastExtensions || []);
  const t = {};
  return r;
  function r(y) {
    let E = {
      type: "root",
      children: []
    };
    const D = {
      stack: [E],
      tokenStack: [],
      config: n,
      enter: a,
      exit: c,
      buffer: o,
      resume: s,
      data: t
    }, F = [];
    let Y = -1;
    for (; ++Y < y.length; )
      if (y[Y][1].type === "listOrdered" || y[Y][1].type === "listUnordered")
        if (y[Y][0] === "enter")
          F.push(Y);
        else {
          const ye = F.pop();
          Y = i(y, ye, Y);
        }
    for (Y = -1; ++Y < y.length; ) {
      const ye = n[y[Y][0]];
      qr.call(ye, y[Y][1].type) && ye[y[Y][1].type].call(Object.assign({
        sliceSerialize: y[Y][2].sliceSerialize
      }, D), y[Y][1]);
    }
    if (D.tokenStack.length > 0) {
      const ye = D.tokenStack[D.tokenStack.length - 1];
      (ye[1] || Zt).call(D, void 0, ye[0]);
    }
    for (E.position = {
      start: De(y.length > 0 ? y[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: De(y.length > 0 ? y[y.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, Y = -1; ++Y < n.transforms.length; )
      E = n.transforms[Y](E) || E;
    return E;
  }
  function i(y, E, D) {
    let F = E - 1, Y = -1, ye = !1, Ne, Ie, Be, Ue;
    for (; ++F <= D; ) {
      const ae = y[F];
      switch (ae[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          ae[0] === "enter" ? Y++ : Y--, Ue = void 0;
          break;
        }
        case "lineEndingBlank": {
          ae[0] === "enter" && (Ne && !Ue && !Y && !Be && (Be = F), Ue = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          Ue = void 0;
      }
      if (!Y && ae[0] === "enter" && ae[1].type === "listItemPrefix" || Y === -1 && ae[0] === "exit" && (ae[1].type === "listUnordered" || ae[1].type === "listOrdered")) {
        if (Ne) {
          let Le = F;
          for (Ie = void 0; Le--; ) {
            const xe = y[Le];
            if (xe[1].type === "lineEnding" || xe[1].type === "lineEndingBlank") {
              if (xe[0] === "exit") continue;
              Ie && (y[Ie][1].type = "lineEndingBlank", ye = !0), xe[1].type = "lineEnding", Ie = Le;
            } else if (!(xe[1].type === "linePrefix" || xe[1].type === "blockQuotePrefix" || xe[1].type === "blockQuotePrefixWhitespace" || xe[1].type === "blockQuoteMarker" || xe[1].type === "listItemIndent")) break;
          }
          Be && (!Ie || Be < Ie) && (Ne._spread = !0), Ne.end = Object.assign({}, Ie ? y[Ie][1].start : ae[1].end), y.splice(Ie || F, 0, ["exit", Ne, ae[2]]), F++, D++;
        }
        if (ae[1].type === "listItemPrefix") {
          const Le = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, ae[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          Ne = Le, y.splice(F, 0, ["enter", Le, ae[2]]), F++, D++, Be = void 0, Ue = !0;
        }
      }
    }
    return y[E][1]._spread = ye, D;
  }
  function l(y, E) {
    return D;
    function D(F) {
      a.call(this, y(F), F), E && E.call(this, F);
    }
  }
  function o() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function a(y, E, D) {
    this.stack[this.stack.length - 1].children.push(y), this.stack.push(y), this.tokenStack.push([E, D || void 0]), y.position = {
      start: De(E.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function u(y) {
    return E;
    function E(D) {
      y && y.call(this, D), c.call(this, D);
    }
  }
  function c(y, E) {
    const D = this.stack.pop(), F = this.tokenStack.pop();
    if (F)
      F[0].type !== y.type && (E ? E.call(this, y, F[0]) : (F[1] || Zt).call(this, y, F[0]));
    else throw new Error("Cannot close `" + y.type + "` (" + un({
      start: y.start,
      end: y.end
    }) + "): it’s not open");
    D.position.end = De(y.end);
  }
  function s() {
    return sl(this.stack.pop());
  }
  function f() {
    this.data.expectingFirstListItemValue = !0;
  }
  function d(y) {
    if (this.data.expectingFirstListItemValue) {
      const E = this.stack[this.stack.length - 2];
      E.start = Number.parseInt(this.sliceSerialize(y), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function p() {
    const y = this.resume(), E = this.stack[this.stack.length - 1];
    E.lang = y;
  }
  function v() {
    const y = this.resume(), E = this.stack[this.stack.length - 1];
    E.meta = y;
  }
  function I() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function R() {
    const y = this.resume(), E = this.stack[this.stack.length - 1];
    E.value = y.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function k() {
    const y = this.resume(), E = this.stack[this.stack.length - 1];
    E.value = y.replace(/(\r?\n|\r)$/g, "");
  }
  function _(y) {
    const E = this.resume(), D = this.stack[this.stack.length - 1];
    D.label = E, D.identifier = Ke(this.sliceSerialize(y)).toLowerCase();
  }
  function P() {
    const y = this.resume(), E = this.stack[this.stack.length - 1];
    E.title = y;
  }
  function J() {
    const y = this.resume(), E = this.stack[this.stack.length - 1];
    E.url = y;
  }
  function K(y) {
    const E = this.stack[this.stack.length - 1];
    if (!E.depth) {
      const D = this.sliceSerialize(y).length;
      E.depth = D;
    }
  }
  function x() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function V(y) {
    const E = this.stack[this.stack.length - 1];
    E.depth = this.sliceSerialize(y).codePointAt(0) === 61 ? 1 : 2;
  }
  function Q() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function H(y) {
    const D = this.stack[this.stack.length - 1].children;
    let F = D[D.length - 1];
    (!F || F.type !== "text") && (F = jn(), F.position = {
      start: De(y.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, D.push(F)), this.stack.push(F);
  }
  function W(y) {
    const E = this.stack.pop();
    E.value += this.sliceSerialize(y), E.position.end = De(y.end);
  }
  function N(y) {
    const E = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const D = E.children[E.children.length - 1];
      D.position.end = De(y.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && n.canContainEols.includes(E.type) && (H.call(this, y), W.call(this, y));
  }
  function A() {
    this.data.atHardBreak = !0;
  }
  function B() {
    const y = this.resume(), E = this.stack[this.stack.length - 1];
    E.value = y;
  }
  function O() {
    const y = this.resume(), E = this.stack[this.stack.length - 1];
    E.value = y;
  }
  function C() {
    const y = this.resume(), E = this.stack[this.stack.length - 1];
    E.value = y;
  }
  function q() {
    const y = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const E = this.data.referenceType || "shortcut";
      y.type += "Reference", y.referenceType = E, delete y.url, delete y.title;
    } else
      delete y.identifier, delete y.label;
    this.data.referenceType = void 0;
  }
  function ne() {
    const y = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const E = this.data.referenceType || "shortcut";
      y.type += "Reference", y.referenceType = E, delete y.url, delete y.title;
    } else
      delete y.identifier, delete y.label;
    this.data.referenceType = void 0;
  }
  function se(y) {
    const E = this.sliceSerialize(y), D = this.stack[this.stack.length - 2];
    D.label = sa(E), D.identifier = Ke(E).toLowerCase();
  }
  function we() {
    const y = this.stack[this.stack.length - 1], E = this.resume(), D = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, D.type === "link") {
      const F = y.children;
      D.children = F;
    } else
      D.alt = E;
  }
  function m() {
    const y = this.resume(), E = this.stack[this.stack.length - 1];
    E.url = y;
  }
  function ce() {
    const y = this.resume(), E = this.stack[this.stack.length - 1];
    E.title = y;
  }
  function Se() {
    this.data.inReference = void 0;
  }
  function g() {
    this.data.referenceType = "collapsed";
  }
  function me(y) {
    const E = this.resume(), D = this.stack[this.stack.length - 1];
    D.label = E, D.identifier = Ke(this.sliceSerialize(y)).toLowerCase(), this.data.referenceType = "full";
  }
  function Ae(y) {
    this.data.characterReferenceType = y.type;
  }
  function te(y) {
    const E = this.sliceSerialize(y), D = this.data.characterReferenceType;
    let F;
    D ? (F = jr(E, D === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : F = ht(E);
    const Y = this.stack[this.stack.length - 1];
    Y.value += F;
  }
  function Oe(y) {
    const E = this.stack.pop();
    E.position.end = De(y.end);
  }
  function ge(y) {
    W.call(this, y);
    const E = this.stack[this.stack.length - 1];
    E.url = this.sliceSerialize(y);
  }
  function Te(y) {
    W.call(this, y);
    const E = this.stack[this.stack.length - 1];
    E.url = "mailto:" + this.sliceSerialize(y);
  }
  function Ce() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function qe() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function gn() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function _n() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function An() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function Fe() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function je() {
    return {
      type: "break"
    };
  }
  function Ze() {
    return {
      type: "html",
      value: ""
    };
  }
  function yn() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function Me() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function xn(y) {
    return {
      type: "list",
      ordered: y.type === "listOrdered",
      start: null,
      spread: y._spread,
      children: []
    };
  }
  function On(y) {
    return {
      type: "listItem",
      spread: y._spread,
      checked: null,
      children: []
    };
  }
  function en() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function Nn() {
    return {
      type: "strong",
      children: []
    };
  }
  function jn() {
    return {
      type: "text",
      value: ""
    };
  }
  function kn() {
    return {
      type: "thematicBreak"
    };
  }
}
function De(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function $r(e, n) {
  let t = -1;
  for (; ++t < n.length; ) {
    const r = n[t];
    Array.isArray(r) ? $r(e, r) : ha(e, r);
  }
}
function ha(e, n) {
  let t;
  for (t in n)
    if (qr.call(n, t))
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
function Zt(e, n) {
  throw e ? new Error("Cannot close `" + e.type + "` (" + un({
    start: e.start,
    end: e.end
  }) + "): a different token (`" + n.type + "`, " + un({
    start: n.start,
    end: n.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + n.type + "`, " + un({
    start: n.start,
    end: n.end
  }) + ") is still open");
}
function da(e) {
  const n = this;
  n.parser = t;
  function t(r) {
    return fa(r, {
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
function ma(e, n) {
  const t = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(n), !0)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function ga(e, n) {
  const t = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(n, t), [e.applyData(n, t), { type: "text", value: `
` }];
}
function ya(e, n) {
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
function xa(e, n) {
  const t = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function ka(e, n) {
  const t = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function ba(e, n) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(n.identifier).toUpperCase(), i = Ge(r.toLowerCase()), l = e.footnoteOrder.indexOf(r);
  let o, a = e.footnoteCounts.get(r);
  a === void 0 ? (a = 0, e.footnoteOrder.push(r), o = e.footnoteOrder.length) : o = l + 1, a += 1, e.footnoteCounts.set(r, a);
  const u = {
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
  e.patch(n, u);
  const c = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [u]
  };
  return e.patch(n, c), e.applyData(n, c);
}
function wa(e, n) {
  const t = {
    type: "element",
    tagName: "h" + n.depth,
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function Sa(e, n) {
  if (e.options.allowDangerousHtml) {
    const t = { type: "raw", value: n.value };
    return e.patch(n, t), e.applyData(n, t);
  }
}
function Wr(e, n) {
  const t = n.referenceType;
  let r = "]";
  if (t === "collapsed" ? r += "[]" : t === "full" && (r += "[" + (n.label || n.identifier) + "]"), n.type === "imageReference")
    return [{ type: "text", value: "![" + n.alt + r }];
  const i = e.all(n), l = i[0];
  l && l.type === "text" ? l.value = "[" + l.value : i.unshift({ type: "text", value: "[" });
  const o = i[i.length - 1];
  return o && o.type === "text" ? o.value += r : i.push({ type: "text", value: r }), i;
}
function Ea(e, n) {
  const t = String(n.identifier).toUpperCase(), r = e.definitionById.get(t);
  if (!r)
    return Wr(e, n);
  const i = { src: Ge(r.url || ""), alt: n.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const l = { type: "element", tagName: "img", properties: i, children: [] };
  return e.patch(n, l), e.applyData(n, l);
}
function va(e, n) {
  const t = { src: Ge(n.url) };
  n.alt !== null && n.alt !== void 0 && (t.alt = n.alt), n.title !== null && n.title !== void 0 && (t.title = n.title);
  const r = { type: "element", tagName: "img", properties: t, children: [] };
  return e.patch(n, r), e.applyData(n, r);
}
function Ca(e, n) {
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
function Ia(e, n) {
  const t = String(n.identifier).toUpperCase(), r = e.definitionById.get(t);
  if (!r)
    return Wr(e, n);
  const i = { href: Ge(r.url || "") };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const l = {
    type: "element",
    tagName: "a",
    properties: i,
    children: e.all(n)
  };
  return e.patch(n, l), e.applyData(n, l);
}
function Ta(e, n) {
  const t = { href: Ge(n.url) };
  n.title !== null && n.title !== void 0 && (t.title = n.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: t,
    children: e.all(n)
  };
  return e.patch(n, r), e.applyData(n, r);
}
function Pa(e, n, t) {
  const r = e.all(n), i = t ? Ra(t) : Yr(n), l = {}, o = [];
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
  const u = r[r.length - 1];
  u && (i || u.type !== "element" || u.tagName !== "p") && o.push({ type: "text", value: `
` });
  const c = { type: "element", tagName: "li", properties: l, children: o };
  return e.patch(n, c), e.applyData(n, c);
}
function Ra(e) {
  let n = !1;
  if (e.type === "list") {
    n = e.spread || !1;
    const t = e.children;
    let r = -1;
    for (; !n && ++r < t.length; )
      n = Yr(t[r]);
  }
  return n;
}
function Yr(e) {
  const n = e.spread;
  return n ?? e.children.length > 1;
}
function _a(e, n) {
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
function Aa(e, n) {
  const t = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function Oa(e, n) {
  const t = { type: "root", children: e.wrap(e.all(n)) };
  return e.patch(n, t), e.applyData(n, t);
}
function Na(e, n) {
  const t = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function ja(e, n) {
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
    }, a = st(n.children[1]), u = Tr(n.children[n.children.length - 1]);
    a && u && (o.position = { start: a, end: u }), i.push(o);
  }
  const l = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(i, !0)
  };
  return e.patch(n, l), e.applyData(n, l);
}
function La(e, n, t) {
  const r = t ? t.children : void 0, l = (r ? r.indexOf(n) : 1) === 0 ? "th" : "td", o = t && t.type === "table" ? t.align : void 0, a = o ? o.length : n.children.length;
  let u = -1;
  const c = [];
  for (; ++u < a; ) {
    const f = n.children[u], d = {}, p = o ? o[u] : void 0;
    p && (d.align = p);
    let v = { type: "element", tagName: l, properties: d, children: [] };
    f && (v.children = e.all(f), e.patch(f, v), v = e.applyData(f, v)), c.push(v);
  }
  const s = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(c, !0)
  };
  return e.patch(n, s), e.applyData(n, s);
}
function Da(e, n) {
  const t = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
const er = 9, nr = 32;
function za(e) {
  const n = String(e), t = /\r?\n|\r/g;
  let r = t.exec(n), i = 0;
  const l = [];
  for (; r; )
    l.push(
      tr(n.slice(i, r.index), i > 0, !0),
      r[0]
    ), i = r.index + r[0].length, r = t.exec(n);
  return l.push(tr(n.slice(i), i > 0, !1)), l.join("");
}
function tr(e, n, t) {
  let r = 0, i = e.length;
  if (n) {
    let l = e.codePointAt(r);
    for (; l === er || l === nr; )
      r++, l = e.codePointAt(r);
  }
  if (t) {
    let l = e.codePointAt(i - 1);
    for (; l === er || l === nr; )
      i--, l = e.codePointAt(i - 1);
  }
  return i > r ? e.slice(r, i) : "";
}
function Fa(e, n) {
  const t = { type: "text", value: za(String(n.value)) };
  return e.patch(n, t), e.applyData(n, t);
}
function Ma(e, n) {
  const t = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(n, t), e.applyData(n, t);
}
const Ba = {
  blockquote: ma,
  break: ga,
  code: ya,
  delete: xa,
  emphasis: ka,
  footnoteReference: ba,
  heading: wa,
  html: Sa,
  imageReference: Ea,
  image: va,
  inlineCode: Ca,
  linkReference: Ia,
  link: Ta,
  listItem: Pa,
  list: _a,
  paragraph: Aa,
  // @ts-expect-error: root is different, but hard to type.
  root: Oa,
  strong: Na,
  table: ja,
  tableCell: Da,
  tableRow: La,
  text: Fa,
  thematicBreak: Ma,
  toml: wn,
  yaml: wn,
  definition: wn,
  footnoteDefinition: wn
};
function wn() {
}
const Xr = -1, Pn = 0, cn = 1, Cn = 2, gt = 3, yt = 4, xt = 5, kt = 6, Jr = 7, Kr = 8, rr = typeof self == "object" ? self : globalThis, Ua = (e, n) => {
  const t = (i, l) => (e.set(l, i), i), r = (i) => {
    if (e.has(i))
      return e.get(i);
    const [l, o] = n[i];
    switch (l) {
      case Pn:
      case Xr:
        return t(o, i);
      case cn: {
        const a = t([], i);
        for (const u of o)
          a.push(r(u));
        return a;
      }
      case Cn: {
        const a = t({}, i);
        for (const [u, c] of o)
          a[r(u)] = r(c);
        return a;
      }
      case gt:
        return t(new Date(o), i);
      case yt: {
        const { source: a, flags: u } = o;
        return t(new RegExp(a, u), i);
      }
      case xt: {
        const a = t(/* @__PURE__ */ new Map(), i);
        for (const [u, c] of o)
          a.set(r(u), r(c));
        return a;
      }
      case kt: {
        const a = t(/* @__PURE__ */ new Set(), i);
        for (const u of o)
          a.add(r(u));
        return a;
      }
      case Jr: {
        const { name: a, message: u } = o;
        return t(new rr[a](u), i);
      }
      case Kr:
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
    return t(new rr[l](o), i);
  };
  return r;
}, ir = (e) => Ua(/* @__PURE__ */ new Map(), e)(0), Xe = "", { toString: Va } = {}, { keys: Ha } = Object, an = (e) => {
  const n = typeof e;
  if (n !== "object" || !e)
    return [Pn, n];
  const t = Va.call(e).slice(8, -1);
  switch (t) {
    case "Array":
      return [cn, Xe];
    case "Object":
      return [Cn, Xe];
    case "Date":
      return [gt, Xe];
    case "RegExp":
      return [yt, Xe];
    case "Map":
      return [xt, Xe];
    case "Set":
      return [kt, Xe];
    case "DataView":
      return [cn, t];
  }
  return t.includes("Array") ? [cn, t] : t.includes("Error") ? [Jr, t] : [Cn, t];
}, Sn = ([e, n]) => e === Pn && (n === "function" || n === "symbol"), qa = (e, n, t, r) => {
  const i = (o, a) => {
    const u = r.push(o) - 1;
    return t.set(a, u), u;
  }, l = (o) => {
    if (t.has(o))
      return t.get(o);
    let [a, u] = an(o);
    switch (a) {
      case Pn: {
        let s = o;
        switch (u) {
          case "bigint":
            a = Kr, s = o.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + u);
            s = null;
            break;
          case "undefined":
            return i([Xr], o);
        }
        return i([a, s], o);
      }
      case cn: {
        if (u) {
          let d = o;
          return u === "DataView" ? d = new Uint8Array(o.buffer) : u === "ArrayBuffer" && (d = new Uint8Array(o)), i([u, [...d]], o);
        }
        const s = [], f = i([a, s], o);
        for (const d of o)
          s.push(l(d));
        return f;
      }
      case Cn: {
        if (u)
          switch (u) {
            case "BigInt":
              return i([u, o.toString()], o);
            case "Boolean":
            case "Number":
            case "String":
              return i([u, o.valueOf()], o);
          }
        if (n && "toJSON" in o)
          return l(o.toJSON());
        const s = [], f = i([a, s], o);
        for (const d of Ha(o))
          (e || !Sn(an(o[d]))) && s.push([l(d), l(o[d])]);
        return f;
      }
      case gt:
        return i([a, o.toISOString()], o);
      case yt: {
        const { source: s, flags: f } = o;
        return i([a, { source: s, flags: f }], o);
      }
      case xt: {
        const s = [], f = i([a, s], o);
        for (const [d, p] of o)
          (e || !(Sn(an(d)) || Sn(an(p)))) && s.push([l(d), l(p)]);
        return f;
      }
      case kt: {
        const s = [], f = i([a, s], o);
        for (const d of o)
          (e || !Sn(an(d))) && s.push(l(d));
        return f;
      }
    }
    const { message: c } = o;
    return i([a, { name: u, message: c }], o);
  };
  return l;
}, lr = (e, { json: n, lossy: t } = {}) => {
  const r = [];
  return qa(!(n || t), !!n, /* @__PURE__ */ new Map(), r)(e), r;
}, In = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, n) => n && ("json" in n || "lossy" in n) ? ir(lr(e, n)) : structuredClone(e)
) : (e, n) => ir(lr(e, n));
function $a(e, n) {
  const t = [{ type: "text", value: "↩" }];
  return n > 1 && t.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(n) }]
  }), t;
}
function Wa(e, n) {
  return "Back to reference " + (e + 1) + (n > 1 ? "-" + n : "");
}
function Ya(e) {
  const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", t = e.options.footnoteBackContent || $a, r = e.options.footnoteBackLabel || Wa, i = e.options.footnoteLabel || "Footnotes", l = e.options.footnoteLabelTagName || "h2", o = e.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, a = [];
  let u = -1;
  for (; ++u < e.footnoteOrder.length; ) {
    const c = e.footnoteById.get(
      e.footnoteOrder[u]
    );
    if (!c)
      continue;
    const s = e.all(c), f = String(c.identifier).toUpperCase(), d = Ge(f.toLowerCase());
    let p = 0;
    const v = [], I = e.footnoteCounts.get(f);
    for (; I !== void 0 && ++p <= I; ) {
      v.length > 0 && v.push({ type: "text", value: " " });
      let _ = typeof t == "string" ? t : t(u, p);
      typeof _ == "string" && (_ = { type: "text", value: _ }), v.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + n + "fnref-" + d + (p > 1 ? "-" + p : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof r == "string" ? r : r(u, p),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(_) ? _ : [_]
      });
    }
    const R = s[s.length - 1];
    if (R && R.type === "element" && R.tagName === "p") {
      const _ = R.children[R.children.length - 1];
      _ && _.type === "text" ? _.value += " " : R.children.push({ type: "text", value: " " }), R.children.push(...v);
    } else
      s.push(...v);
    const k = {
      type: "element",
      tagName: "li",
      properties: { id: n + "fn-" + d },
      children: e.wrap(s, !0)
    };
    e.patch(c, k), a.push(k);
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
            ...In(o),
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
const Qr = (
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
      return Qa;
    if (typeof e == "function")
      return Rn(e);
    if (typeof e == "object")
      return Array.isArray(e) ? Xa(e) : (
        // Cast because `ReadonlyArray` goes into the above but `isArray`
        // narrows to `Array`.
        Ja(
          /** @type {Props} */
          e
        )
      );
    if (typeof e == "string")
      return Ka(e);
    throw new Error("Expected function, string, or object as test");
  })
);
function Xa(e) {
  const n = [];
  let t = -1;
  for (; ++t < e.length; )
    n[t] = Qr(e[t]);
  return Rn(r);
  function r(...i) {
    let l = -1;
    for (; ++l < n.length; )
      if (n[l].apply(this, i)) return !0;
    return !1;
  }
}
function Ja(e) {
  const n = (
    /** @type {Record<string, unknown>} */
    e
  );
  return Rn(t);
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
function Ka(e) {
  return Rn(n);
  function n(t) {
    return t && t.type === e;
  }
}
function Rn(e) {
  return n;
  function n(t, r, i) {
    return !!(Ga(t) && e.call(
      this,
      t,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function Qa() {
  return !0;
}
function Ga(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const Gr = [], Za = !0, or = !1, eu = "skip";
function nu(e, n, t, r) {
  let i;
  typeof n == "function" && typeof t != "function" ? (r = t, t = n) : i = n;
  const l = Qr(i), o = r ? -1 : 1;
  a(e, void 0, [])();
  function a(u, c, s) {
    const f = (
      /** @type {Record<string, unknown>} */
      u && typeof u == "object" ? u : {}
    );
    if (typeof f.type == "string") {
      const p = (
        // `hast`
        typeof f.tagName == "string" ? f.tagName : (
          // `xast`
          typeof f.name == "string" ? f.name : void 0
        )
      );
      Object.defineProperty(d, "name", {
        value: "node (" + (u.type + (p ? "<" + p + ">" : "")) + ")"
      });
    }
    return d;
    function d() {
      let p = Gr, v, I, R;
      if ((!n || l(u, c, s[s.length - 1] || void 0)) && (p = tu(t(u, s)), p[0] === or))
        return p;
      if ("children" in u && u.children) {
        const k = (
          /** @type {UnistParent} */
          u
        );
        if (k.children && p[0] !== eu)
          for (I = (r ? k.children.length : -1) + o, R = s.concat(k); I > -1 && I < k.children.length; ) {
            const _ = k.children[I];
            if (v = a(_, I, R)(), v[0] === or)
              return v;
            I = typeof v[1] == "number" ? v[1] : I + o;
          }
      }
      return p;
    }
  }
}
function tu(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [Za, e] : e == null ? Gr : [e];
}
function Zr(e, n, t, r) {
  let i, l, o;
  typeof n == "function" && typeof t != "function" ? (l = void 0, o = n, i = t) : (l = n, o = t, i = r), nu(e, l, a, i);
  function a(u, c) {
    const s = c[c.length - 1], f = s ? s.children.indexOf(u) : void 0;
    return o(u, f, s);
  }
}
const it = {}.hasOwnProperty, ru = {};
function iu(e, n) {
  const t = n || ru, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), o = { ...Ba, ...t.handlers }, a = {
    all: c,
    applyData: ou,
    definitionById: r,
    footnoteById: i,
    footnoteCounts: l,
    footnoteOrder: [],
    handlers: o,
    one: u,
    options: t,
    patch: lu,
    wrap: uu
  };
  return Zr(e, function(s) {
    if (s.type === "definition" || s.type === "footnoteDefinition") {
      const f = s.type === "definition" ? r : i, d = String(s.identifier).toUpperCase();
      f.has(d) || f.set(d, s);
    }
  }), a;
  function u(s, f) {
    const d = s.type, p = a.handlers[d];
    if (it.call(a.handlers, d) && p)
      return p(a, s, f);
    if (a.options.passThrough && a.options.passThrough.includes(d)) {
      if ("children" in s) {
        const { children: I, ...R } = s, k = In(R);
        return k.children = a.all(s), k;
      }
      return In(s);
    }
    return (a.options.unknownHandler || au)(a, s, f);
  }
  function c(s) {
    const f = [];
    if ("children" in s) {
      const d = s.children;
      let p = -1;
      for (; ++p < d.length; ) {
        const v = a.one(d[p], s);
        if (v) {
          if (p && d[p - 1].type === "break" && (!Array.isArray(v) && v.type === "text" && (v.value = ar(v.value)), !Array.isArray(v) && v.type === "element")) {
            const I = v.children[0];
            I && I.type === "text" && (I.value = ar(I.value));
          }
          Array.isArray(v) ? f.push(...v) : f.push(v);
        }
      }
    }
    return f;
  }
}
function lu(e, n) {
  e.position && (n.position = Ui(e));
}
function ou(e, n) {
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
    t.type === "element" && l && Object.assign(t.properties, In(l)), "children" in t && t.children && i !== null && i !== void 0 && (t.children = i);
  }
  return t;
}
function au(e, n) {
  const t = n.data || {}, r = "value" in n && !(it.call(t, "hProperties") || it.call(t, "hChildren")) ? { type: "text", value: n.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, r), e.applyData(n, r);
}
function uu(e, n) {
  const t = [];
  let r = -1;
  for (n && t.push({ type: "text", value: `
` }); ++r < e.length; )
    r && t.push({ type: "text", value: `
` }), t.push(e[r]);
  return n && e.length > 0 && t.push({ type: "text", value: `
` }), t;
}
function ar(e) {
  let n = 0, t = e.charCodeAt(n);
  for (; t === 9 || t === 32; )
    n++, t = e.charCodeAt(n);
  return e.slice(n);
}
function ur(e, n) {
  const t = iu(e, n), r = t.one(e, void 0), i = Ya(t), l = Array.isArray(r) ? { type: "root", children: r } : r || { type: "root", children: [] };
  return i && l.children.push({ type: "text", value: `
` }, i), l;
}
function su(e, n) {
  return e && "run" in e ? async function(t, r) {
    const i = (
      /** @type {HastRoot} */
      ur(t, { file: r, ...n })
    );
    await e.run(i, r);
  } : function(t, r) {
    return (
      /** @type {HastRoot} */
      ur(t, { file: r, ...e || n })
    );
  };
}
function sr(e) {
  if (e)
    throw e;
}
var Hn, cr;
function cu() {
  if (cr) return Hn;
  cr = 1;
  var e = Object.prototype.hasOwnProperty, n = Object.prototype.toString, t = Object.defineProperty, r = Object.getOwnPropertyDescriptor, i = function(c) {
    return typeof Array.isArray == "function" ? Array.isArray(c) : n.call(c) === "[object Array]";
  }, l = function(c) {
    if (!c || n.call(c) !== "[object Object]")
      return !1;
    var s = e.call(c, "constructor"), f = c.constructor && c.constructor.prototype && e.call(c.constructor.prototype, "isPrototypeOf");
    if (c.constructor && !s && !f)
      return !1;
    var d;
    for (d in c)
      ;
    return typeof d > "u" || e.call(c, d);
  }, o = function(c, s) {
    t && s.name === "__proto__" ? t(c, s.name, {
      enumerable: !0,
      configurable: !0,
      value: s.newValue,
      writable: !0
    }) : c[s.name] = s.newValue;
  }, a = function(c, s) {
    if (s === "__proto__")
      if (e.call(c, s)) {
        if (r)
          return r(c, s).value;
      } else return;
    return c[s];
  };
  return Hn = function u() {
    var c, s, f, d, p, v, I = arguments[0], R = 1, k = arguments.length, _ = !1;
    for (typeof I == "boolean" && (_ = I, I = arguments[1] || {}, R = 2), (I == null || typeof I != "object" && typeof I != "function") && (I = {}); R < k; ++R)
      if (c = arguments[R], c != null)
        for (s in c)
          f = a(I, s), d = a(c, s), I !== d && (_ && d && (l(d) || (p = i(d))) ? (p ? (p = !1, v = f && i(f) ? f : []) : v = f && l(f) ? f : {}, o(I, { name: s, newValue: u(_, v, d) })) : typeof d < "u" && o(I, { name: s, newValue: d }));
    return I;
  }, Hn;
}
var fu = cu();
const qn = /* @__PURE__ */ xr(fu);
function lt(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const n = Object.getPrototypeOf(e);
  return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function pu() {
  const e = [], n = { run: t, use: r };
  return n;
  function t(...i) {
    let l = -1;
    const o = i.pop();
    if (typeof o != "function")
      throw new TypeError("Expected function as last argument, not " + o);
    a(null, ...i);
    function a(u, ...c) {
      const s = e[++l];
      let f = -1;
      if (u) {
        o(u);
        return;
      }
      for (; ++f < i.length; )
        (c[f] === null || c[f] === void 0) && (c[f] = i[f]);
      i = c, s ? hu(s, a)(...c) : o(null, ...c);
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
function hu(e, n) {
  let t;
  return r;
  function r(...o) {
    const a = e.length > o.length;
    let u;
    a && o.push(i);
    try {
      u = e.apply(this, o);
    } catch (c) {
      const s = (
        /** @type {Error} */
        c
      );
      if (a && t)
        throw s;
      return i(s);
    }
    a || (u && u.then && typeof u.then == "function" ? u.then(l, i) : u instanceof Error ? i(u) : l(u));
  }
  function i(o, ...a) {
    t || (t = !0, n(o, ...a));
  }
  function l(o) {
    i(null, o);
  }
}
const Pe = { basename: du, dirname: mu, extname: gu, join: yu, sep: "/" };
function du(e, n) {
  if (n !== void 0 && typeof n != "string")
    throw new TypeError('"ext" argument must be a string');
  mn(e);
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
function mu(e) {
  if (mn(e), e.length === 0)
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
function gu(e) {
  mn(e);
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
function yu(...e) {
  let n = -1, t;
  for (; ++n < e.length; )
    mn(e[n]), e[n] && (t = t === void 0 ? e[n] : t + "/" + e[n]);
  return t === void 0 ? "." : xu(t);
}
function xu(e) {
  mn(e);
  const n = e.codePointAt(0) === 47;
  let t = ku(e, !n);
  return t.length === 0 && !n && (t = "."), t.length > 0 && e.codePointAt(e.length - 1) === 47 && (t += "/"), n ? "/" + t : t;
}
function ku(e, n) {
  let t = "", r = 0, i = -1, l = 0, o = -1, a, u;
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
            if (u = t.lastIndexOf("/"), u !== t.length - 1) {
              u < 0 ? (t = "", r = 0) : (t = t.slice(0, u), r = t.length - 1 - t.lastIndexOf("/")), i = o, l = 0;
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
function mn(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const bu = { cwd: wu };
function wu() {
  return "/";
}
function ot(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function Su(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!ot(e)) {
    const n = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw n.code = "ERR_INVALID_ARG_TYPE", n;
  }
  if (e.protocol !== "file:") {
    const n = new TypeError("The URL must be of scheme file");
    throw n.code = "ERR_INVALID_URL_SCHEME", n;
  }
  return Eu(e);
}
function Eu(e) {
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
const $n = (
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
class ei {
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
    n ? ot(n) ? t = { path: n } : typeof n == "string" || vu(n) ? t = { value: n } : t = n : t = {}, this.cwd = "cwd" in t ? "" : bu.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let r = -1;
    for (; ++r < $n.length; ) {
      const l = $n[r];
      l in t && t[l] !== void 0 && t[l] !== null && (this[l] = l === "history" ? [...t[l]] : t[l]);
    }
    let i;
    for (i in t)
      $n.includes(i) || (this[i] = t[i]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? Pe.basename(this.path) : void 0;
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
    Yn(n, "basename"), Wn(n, "basename"), this.path = Pe.join(this.dirname || "", n);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? Pe.dirname(this.path) : void 0;
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
    fr(this.basename, "dirname"), this.path = Pe.join(n || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? Pe.extname(this.path) : void 0;
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
    if (Wn(n, "extname"), fr(this.dirname, "extname"), n) {
      if (n.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (n.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = Pe.join(this.dirname, this.stem + (n || ""));
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
    ot(n) && (n = Su(n)), Yn(n, "path"), this.path !== n && this.history.push(n);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? Pe.basename(this.path, this.extname) : void 0;
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
    Yn(n, "stem"), Wn(n, "stem"), this.path = Pe.join(this.dirname || "", n + (this.extname || ""));
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
    const i = new oe(
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
function Wn(e, n) {
  if (e && e.includes(Pe.sep))
    throw new Error(
      "`" + n + "` cannot be a path: did not expect `" + Pe.sep + "`"
    );
}
function Yn(e, n) {
  if (!e)
    throw new Error("`" + n + "` cannot be empty");
}
function fr(e, n) {
  if (!e)
    throw new Error("Setting `" + n + "` requires `path` to be set too");
}
function vu(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const Cu = (
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
), Iu = {}.hasOwnProperty;
class bt extends Cu {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = pu();
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
      new bt()
    );
    let t = -1;
    for (; ++t < this.attachers.length; ) {
      const r = this.attachers[t];
      n.use(...r);
    }
    return n.data(qn(!0, {}, this.namespace)), n;
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
    return typeof n == "string" ? arguments.length === 2 ? (Kn("data", this.frozen), this.namespace[n] = t, this) : Iu.call(this.namespace, n) && this.namespace[n] || void 0 : n ? (Kn("data", this.frozen), this.namespace = n, this) : this.namespace;
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
    const t = En(n), r = this.parser || this.Parser;
    return Xn("parse", r), r(String(t), t);
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
    return this.freeze(), Xn("process", this.parser || this.Parser), Jn("process", this.compiler || this.Compiler), t ? i(void 0, t) : new Promise(i);
    function i(l, o) {
      const a = En(n), u = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        r.parse(a)
      );
      r.run(u, a, function(s, f, d) {
        if (s || !f || !d)
          return c(s);
        const p = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          f
        ), v = r.stringify(p, d);
        Ru(v) ? d.value = v : d.result = v, c(
          s,
          /** @type {VFileWithOutput<CompileResult>} */
          d
        );
      });
      function c(s, f) {
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
    return this.freeze(), Xn("processSync", this.parser || this.Parser), Jn("processSync", this.compiler || this.Compiler), this.process(n, i), hr("processSync", "process", t), r;
    function i(l, o) {
      t = !0, sr(l), r = o;
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
    pr(n), this.freeze();
    const i = this.transformers;
    return !r && typeof t == "function" && (r = t, t = void 0), r ? l(void 0, r) : new Promise(l);
    function l(o, a) {
      const u = En(t);
      i.run(n, u, c);
      function c(s, f, d) {
        const p = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          f || n
        );
        s ? a(s) : o ? o(p) : r(void 0, p, d);
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
    return this.run(n, t, l), hr("runSync", "run", r), i;
    function l(o, a) {
      sr(o), i = a, r = !0;
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
    const r = En(t), i = this.compiler || this.Compiler;
    return Jn("stringify", i), pr(n), i(n, r);
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
    if (Kn("use", this.frozen), n != null) if (typeof n == "function")
      u(n, t);
    else if (typeof n == "object")
      Array.isArray(n) ? a(n) : o(n);
    else
      throw new TypeError("Expected usable value, not `" + n + "`");
    return this;
    function l(c) {
      if (typeof c == "function")
        u(c, []);
      else if (typeof c == "object")
        if (Array.isArray(c)) {
          const [s, ...f] = (
            /** @type {PluginTuple<Array<unknown>>} */
            c
          );
          u(s, f);
        } else
          o(c);
      else
        throw new TypeError("Expected usable value, not `" + c + "`");
    }
    function o(c) {
      if (!("plugins" in c) && !("settings" in c))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      a(c.plugins), c.settings && (i.settings = qn(!0, i.settings, c.settings));
    }
    function a(c) {
      let s = -1;
      if (c != null) if (Array.isArray(c))
        for (; ++s < c.length; ) {
          const f = c[s];
          l(f);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + c + "`");
    }
    function u(c, s) {
      let f = -1, d = -1;
      for (; ++f < r.length; )
        if (r[f][0] === c) {
          d = f;
          break;
        }
      if (d === -1)
        r.push([c, ...s]);
      else if (s.length > 0) {
        let [p, ...v] = s;
        const I = r[d][1];
        lt(I) && lt(p) && (p = qn(!0, I, p)), r[d] = [c, p, ...v];
      }
    }
  }
}
const Tu = new bt().freeze();
function Xn(e, n) {
  if (typeof n != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function Jn(e, n) {
  if (typeof n != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function Kn(e, n) {
  if (n)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function pr(e) {
  if (!lt(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function hr(e, n, t) {
  if (!t)
    throw new Error(
      "`" + e + "` finished async. Use `" + n + "` instead"
    );
}
function En(e) {
  return Pu(e) ? e : new ei(e);
}
function Pu(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function Ru(e) {
  return typeof e == "string" || _u(e);
}
function _u(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const Au = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", dr = [], mr = { allowDangerousHtml: !0 }, Ou = /^(https?|ircs?|mailto|xmpp)$/i, Nu = [
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
function ju(e) {
  const n = Lu(e), t = Du(e);
  return zu(n.runSync(n.parse(t), t), e);
}
function Lu(e) {
  const n = e.rehypePlugins || dr, t = e.remarkPlugins || dr, r = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...mr } : mr;
  return Tu().use(da).use(t).use(su, r).use(n);
}
function Du(e) {
  const n = e.children || "", t = new ei();
  return typeof n == "string" && (t.value = n), t;
}
function zu(e, n) {
  const t = n.allowedElements, r = n.allowElement, i = n.components, l = n.disallowedElements, o = n.skipHtml, a = n.unwrapDisallowed, u = n.urlTransform || Fu;
  for (const s of Nu)
    Object.hasOwn(n, s.from) && ("" + s.from + (s.to ? "use `" + s.to + "` instead" : "remove it") + Au + s.id, void 0);
  return Zr(e, c), Wi(e, {
    Fragment: S.Fragment,
    components: i,
    ignoreInvalidStyle: !0,
    jsx: S.jsx,
    jsxs: S.jsxs,
    passKeys: !0,
    passNode: !0
  });
  function c(s, f, d) {
    if (s.type === "raw" && d && typeof f == "number")
      return o ? d.children.splice(f, 1) : d.children[f] = { type: "text", value: s.value }, f;
    if (s.type === "element") {
      let p;
      for (p in Bn)
        if (Object.hasOwn(Bn, p) && Object.hasOwn(s.properties, p)) {
          const v = s.properties[p], I = Bn[p];
          (I === null || I.includes(s.tagName)) && (s.properties[p] = u(String(v || ""), p, s));
        }
    }
    if (s.type === "element") {
      let p = t ? !t.includes(s.tagName) : l ? l.includes(s.tagName) : !1;
      if (!p && r && typeof f == "number" && (p = !r(s, f, d)), p && d && typeof f == "number")
        return a && s.children ? d.children.splice(f, 1, ...s.children) : d.children.splice(f, 1), f;
    }
  }
}
function Fu(e) {
  const n = e.indexOf(":"), t = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    n === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    i !== -1 && n > i || t !== -1 && n > t || r !== -1 && n > r || // It is a protocol, it should be allowed.
    Ou.test(e.slice(0, n)) ? e : ""
  );
}
function wt({ poem: e }) {
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
      /* @__PURE__ */ S.jsx(ju, { children: e.notes.content })
    ] })
  ] });
}
function Mu({
  title: e,
  description: n,
  poemsById: t,
  sections: r,
  searchIndex: i,
  currentPoem: l,
  currentId: o,
  selectPoem: a,
  showWorkshop: u = !0,
  showExplore: c = !0
}) {
  const [s, f] = pn(!1);
  return /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
    /* @__PURE__ */ S.jsxs("div", { className: "reader", children: [
      (e || n) && /* @__PURE__ */ S.jsxs("header", { className: "reader-header", children: [
        e && /* @__PURE__ */ S.jsx("h1", { className: "reader-title", children: e }),
        n && /* @__PURE__ */ S.jsx("p", { className: "reader-description", children: n })
      ] }),
      /* @__PURE__ */ S.jsx("aside", { className: `reader-nav ${s ? "reader-nav--open" : ""}`, children: /* @__PURE__ */ S.jsx(
        gi,
        {
          poemsById: t,
          sections: r,
          searchIndex: i,
          currentId: o,
          onSelect: (d) => {
            a(d), f(!1);
          },
          showExplore: c
        }
      ) }),
      l?.kind === "poem" && /* @__PURE__ */ S.jsx(kr, { poem: l }),
      l?.kind === "translation" && /* @__PURE__ */ S.jsx(wt, { poem: l }),
      u && l && /* @__PURE__ */ S.jsx(yi, { poemTitle: l.title })
    ] }),
    /* @__PURE__ */ S.jsx(
      "button",
      {
        className: "mobile-nav-toggle",
        onClick: () => f((d) => !d),
        children: s ? "CLOSE" : "CONTENTS"
      }
    )
  ] });
}
function Bu(e) {
  const [n, t] = pn(
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
function Yu({ readingModel: e, searchIndex: n, showWorkshop: t = !0, showExplore: r = !0 }) {
  if (!e)
    throw new Error("Reader requires a readingModel prop");
  if (!n)
    throw new Error("Reader requires a searchIndex prop");
  const {
    currentId: i,
    currentPoem: l,
    selectPoem: o
  } = Bu(e);
  return /* @__PURE__ */ S.jsx(
    Mu,
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
function Xu({ readingModel: e }) {
  const { id: n } = yr();
  if (!n) return null;
  const t = e.poemsById[n];
  return t ? /* @__PURE__ */ S.jsxs("main", { className: "single-poem", children: [
    /* @__PURE__ */ S.jsx("header", { className: "single-poem-header", children: /* @__PURE__ */ S.jsx(hn, { className: "reader-back-link", to: "/explore", children: "← Back to Explore" }) }),
    t.kind === "poem" && /* @__PURE__ */ S.jsx(kr, { poem: t }),
    t.kind === "translation" && /* @__PURE__ */ S.jsx(wt, { poem: t })
  ] }) : null;
}
function Ju({ readingModel: e }) {
  const { id: n } = yr();
  if (!n) return null;
  const t = e.poemsById[n];
  return !t || t.kind !== "translation" ? null : /* @__PURE__ */ S.jsxs("main", { className: "single-poem", children: [
    /* @__PURE__ */ S.jsx("header", { className: "single-poem-header", children: /* @__PURE__ */ S.jsx(hn, { className: "reader-back-link", to: "/explore", children: "← Back to Explore" }) }),
    /* @__PURE__ */ S.jsx(wt, { poem: t })
  ] });
}
function Uu({
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
function Vu({ poems: e, activeMotif: n }) {
  return /* @__PURE__ */ S.jsx("div", { className: "motif-results", children: n ? /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
    /* @__PURE__ */ S.jsxs("h3", { className: "motif-results-heading", children: [
      "Poems for “",
      n,
      "”"
    ] }),
    e.length === 0 ? /* @__PURE__ */ S.jsx("p", { className: "motif-empty", children: "No poems found." }) : /* @__PURE__ */ S.jsx("ul", { className: "motif-poem-list", children: e.map((t) => /* @__PURE__ */ S.jsx("li", { children: /* @__PURE__ */ S.jsx(hn, { to: `/poem/${t.id}`, className: "motif-poem-link", children: t.title }) }, t.id)) })
  ] }) : /* @__PURE__ */ S.jsx("p", { className: "motif-empty", children: "Select a motif to see poems." }) });
}
function Hu({ terms: e }) {
  return /* @__PURE__ */ S.jsx("div", { className: "explore-texture", children: e.map((n, t) => /* @__PURE__ */ S.jsx("span", { className: "texture-word", children: n }, `${n}-${t}`)) });
}
const qu = [
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
function Ku({ readingModel: e, motifStats: n }) {
  const t = n.texture.map((u) => u.term);
  t.length === 0 && t.push(...qu);
  const r = Array(120).fill(t).flat(), [i, l] = pn(null), o = n.terms.find((u) => u.term === i) ?? null, a = o ? o.poemIds.map((u) => e.poemsById[u]).filter((u) => !!u).map((u) => ({
    id: u.id,
    title: u.title
  })) : [];
  return /* @__PURE__ */ S.jsxs("main", { className: "explore-root", children: [
    /* @__PURE__ */ S.jsx(Hu, { terms: r }),
    /* @__PURE__ */ S.jsx("header", { className: "explore-header", children: /* @__PURE__ */ S.jsx(hn, { className: "reader-back-link", to: "/", children: "← Back to Reader" }) }),
    /* @__PURE__ */ S.jsx("div", { className: "explore-separator" }),
    /* @__PURE__ */ S.jsx("div", { className: "explore-card explore-content", children: /* @__PURE__ */ S.jsx(
      Uu,
      {
        motifs: n.terms,
        activeMotif: i,
        onSelect: l
      }
    ) }),
    /* @__PURE__ */ S.jsx("div", { className: "explore-separator" }),
    /* @__PURE__ */ S.jsx("div", { className: "explore-card explore-content", children: /* @__PURE__ */ S.jsx(
      Vu,
      {
        poems: a,
        activeMotif: i
      }
    ) })
  ] });
}
export {
  Ku as ExplorePage,
  Yu as Reader,
  Xu as SinglePoemPage,
  Ju as SingleTranslationPage
};
