/* @update: 2018-12-24 17:37:37 */
if (!
    function(e, t) {
        function r(e) {
            return function(t) {
                return {}.toString.call(t) == "[object " + e + "]"
            }
        }
        function a() {
            return _++
        }
        function n(e) {
            return e.match(T)[0]
        }
        function s(e) {
            for (e = e.replace(N, "/"), e = e.replace(k, "$1/"); e.match(A);) e = e.replace(A, "/");
            return e
        }
        function o(e) {
            var t = e.length - 1,
                r = e.charCodeAt(t);
            return 35 === r ? e.substring(0, t) : ".js" === e.substring(t - 2) || e.indexOf("?") > 0 || 47 === r ? e: e + ".js"
        }
        function i(e) {
            var t = x.alias;
            return t && w(t[e]) ? t[e] : e
        }
        function c(e) {
            var t, r = x.paths;
            return r && (t = e.match(C)) && w(r[t[1]]) && (e = r[t[1]] + t[2]),
                e
        }
        function u(e) {
            var t = x.vars;
            return t && e.indexOf("{") > -1 && (e = e.replace(V,
                function(e, r) {
                    return w(t[r]) ? t[r] : e
                })),
                e
        }
        function f(e) {
            var t = x.map,
                r = e;
            if (t) for (var a = 0,
                            n = t.length; n > a; a++) {
                var s = t[a];
                if (r = I(s) ? s(e) || e: e.replace(s[0], s[1]), r !== e) break
            }
            return r
        }
        function l(e, t) {
            var r, a = e.charCodeAt(0);
            if (P.test(e)) r = e;
            else if (46 === a) r = (t ? n(t) : x.cwd) + e;
            else if (47 === a) {
                var o = x.cwd.match(D);
                r = o ? o[0] + e.substring(1) : e
            } else r = x.base + e;
            return 0 === r.indexOf("//") && (r = location.protocol + r),
                s(r)
        }
        function d(e, t) {
            if (!e) return "";
            e = i(e),
                e = c(e),
                e = i(e),
                e = u(e),
                e = i(e),
                e = o(e),
                e = i(e);
            var r = l(e, t);
            return r = i(r),
                r = f(r)
        }
        function p(e) {
            return e.hasAttribute ? e.src: e.getAttribute("src", 4)
        }
        function v(e, t) {
            var r;
            try {
                importScripts(e)
            } catch(a) {
                r = a
            }
            t(r)
        }
        function h(e, t, r) {
            var a = X.createElement("script");
            if (r) {
                var n = I(r) ? r(e) : r;
                n && (a.charset = n)
            }
            g(a, t, e),
                a.async = !0,
                a.src = e,
                Z = a,
                et ? J.insertBefore(a, et) : J.appendChild(a),
                Z = null
        }
        function g(e, t, r) {
            function a(r) {
                e.onload = e.onerror = e.onreadystatechange = null,
                x.debug || J.removeChild(e),
                    e = null,
                    t(r)
            }
            var n = "onload" in e;
            n ? (e.onload = a, e.onerror = function() {
                O("error", {
                    uri: r,
                    node: e
                }),
                    a(!0)
            }) : e.onreadystatechange = function() { / loaded | complete / .test(e.readyState) && a()
            }
        }
        function j() {
            if (Z) return Z;
            if (tt && "interactive" === tt.readyState) return tt;
            for (var e = J.getElementsByTagName("script"), t = e.length - 1; t >= 0; t--) {
                var r = e[t];
                if ("interactive" === r.readyState) return tt = r
            }
        }
        function m(e) {
            function t() {
                f = e.charAt(l++)
            }
            function r() {
                return /\s/.test(f)
            }
            function a() {
                return '"' == f || "'" == f
            }
            function n() {
                var r = l,
                    a = f,
                    n = e.indexOf(a, r);
                if ( - 1 == n) l = d;
                else if ("\\" != e.charAt(n - 1)) l = n + 1;
                else for (; d > l;) if (t(), "\\" == f) l++;
                    else if (f == a) break;
                v && (j.push(e.slice(r, l - 1)), v = 0)
            }
            function s() {
                for (l--; d > l;) if (t(), "\\" == f) l++;
                else {
                    if ("/" == f) break;
                    if ("[" == f) for (; d > l;) if (t(), "\\" == f) l++;
                    else if ("]" == f) break
                }
            }
            function o() {
                return /[a-z_$]/i.test(f)
            }
            function i() {
                var t = e.slice(l - 1),
                    r = /^[\w$]+/.exec(t)[0];
                h = {
                    "if": 1,
                    "for": 1,
                    "while": 1,
                    "with": 1
                } [r],
                    p = {
                        "break": 1,
                        "case": 1,
                        "continue": 1,
                        "debugger": 1,
                        "delete": 1,
                        "do": 1,
                        "else": 1,
                        "false": 1,
                        "if": 1,
                        "in": 1,
                        "instanceof": 1,
                        "return": 1,
                        "typeof": 1,
                        "void": 1
                    } [r],
                    v = /^require\s*\(\s*(['"]).+?\1\s*\)/.test(t),
                    v ? (r = /^require\s*\(\s*['"]/.exec(t)[0], l += r.length - 2) : l += /^[\w$]+(?:\s*\.\s*[\w$]+)*/.exec(t)[0].length - 1
            }
            function c() {
                return /\d/.test(f) || "." == f && /\d/.test(e.charAt(l))
            }
            function u() {
                var t, r = e.slice(l - 1);
                t = "." == f ? /^\.\d+(?:E[+-]?\d*)?\s*/i.exec(r)[0] : /^0x[\da-f]*/i.test(r) ? /^0x[\da-f]*\s*/i.exec(r)[0] : /^\d+\.?\d*(?:E[+-]?\d*)?\s*/i.exec(r)[0],
                    l += t.length - 1,
                    p = 0
            }
            if ( - 1 == e.indexOf("require")) return [];
            for (var f, l = 0,
                     d = e.length,
                     p = 1,
                     v = 0,
                     h = 0,
                     g = [], j = []; d > l;) t(),
            r() || (a() ? (n(), p = 1) : "/" == f ? (t(), "/" == f ? (l = e.indexOf("\n", l), -1 == l && (l = e.length)) : "*" == f ? (l = e.indexOf("*/", l), -1 == l ? l = d: l += 2) : p ? (s(), p = 0) : (l--, p = 1)) : o() ? i() : c() ? u() : "(" == f ? (g.push(h), p = 1) : ")" == f ? p = g.pop() : (p = "]" != f, v = 0));
            return j
        }
        function y(e, t) {
            this.uri = e,
                this.dependencies = t || [],
                this.deps = {},
                this.status = 0,
                this._entry = []
        }
        if (!e.seajs) {
            var b = e.seajs = {
                    version: "3.0.0"
                },
                x = b.data = {},
                E = r("Object"),
                w = r("String"),
                B = Array.isArray || r("Array"),
                I = r("Function"),
                _ = 0,
                S = x.events = {};
            b.on = function(e, t) {
                var r = S[e] || (S[e] = []);
                return r.push(t),
                    b
            },
                b.off = function(e, t) {
                    if (!e && !t) return S = x.events = {},
                        b;
                    var r = S[e];
                    if (r) if (t) for (var a = r.length - 1; a >= 0; a--) r[a] === t && r.splice(a, 1);
                    else delete S[e];
                    return b
                };
            var O = b.emit = function(e, t) {
                    var r = S[e];
                    if (r) {
                        r = r.slice();
                        for (var a = 0,
                                 n = r.length; n > a; a++) r[a](t)
                    }
                    return b
                },
                T = /[^?#]*\//,
                N = /\/\.\//g,
                A = /\/[^\/]+\/\.\.\//,
                k = /([^:\/])\/+\//g,
                C = /^([^\/:]+)(\/.+)$/,
                V = /{([^{]+)}/g,
                P = /^\/\/.|:\//,
                D = /^.*?\/\/.*?\//;
            b.resolve = d;
            var q, L, $ = "undefined" == typeof window && "undefined" != typeof importScripts && I(importScripts),
                U = /^(about|blob):/,
                R = !location.href || U.test(location.href) ? "": n(location.href);
            if ($) {
                var M;
                try {
                    var F = Error();
                    throw F
                } catch(G) {
                    M = G.stack.split("\n")
                }
                M.shift();
                for (var H, K = /.*?((?:http|https|file)(?::\/{2}[\w]+)(?:[\/|\.]?)(?:[^\s"]*)).*?/i,
                         Y = /(.*?):\d+:\d+\)?$/; M.length > 0;) {
                    var z = M.shift();
                    if (H = K.exec(z), null != H) break
                }
                var Q;
                if (null != H) var Q = Y.exec(H[1])[1];
                L = Q,
                    q = n(Q || R),
                "" === R && (R = q)
            } else {
                var X = document,
                    W = X.scripts,
                    $ = X.getElementById("seajsnode") || W[W.length - 1];
                L = p($),
                    q = n(L || R)
            }
            if ($) b.request = v;
            else {
                var Z, X = document,
                    J = X.head || X.getElementsByTagName("head")[0] || X.documentElement,
                    et = J.getElementsByTagName("base")[0];
                b.request = h
            }
            var tt, rt, at = b.cache = {},
                nt = {},
                st = {},
                ot = {},
                it = y.STATUS = {
                    FETCHING: 1,
                    SAVED: 2,
                    LOADING: 3,
                    LOADED: 4,
                    EXECUTING: 5,
                    EXECUTED: 6,
                    ERROR: 7
                };
            y.prototype.resolve = function() {
                for (var e = this,
                         t = e.dependencies,
                         r = [], a = 0, n = t.length; n > a; a++) r[a] = y.resolve(t[a], e.uri);
                return r
            },
                y.prototype.pass = function() {
                    for (var e = this,
                             t = e.dependencies.length,
                             r = 0; r < e._entry.length; r++) {
                        for (var a = e._entry[r], n = 0, s = 0; t > s; s++) {
                            var o = e.deps[e.dependencies[s]];
                            o.status < it.LOADED && !a.history.hasOwnProperty(o.uri) && (a.history[o.uri] = !0, n++, o._entry.push(a), o.status === it.LOADING && o.pass())
                        }
                        n > 0 && (a.remain += n - 1, e._entry.shift(), r--)
                    }
                },
                y.prototype.load = function() {
                    var e = this;
                    if (! (e.status >= it.LOADING)) {
                        e.status = it.LOADING;
                        var r = e.resolve();
                        O("load", r);
                        for (var a = 0,
                                 n = r.length; n > a; a++) e.deps[e.dependencies[a]] = y.get(r[a]);
                        if (e.pass(), e._entry.length) return e.onload(),
                            t;
                        var s, o = {};
                        for (a = 0; n > a; a++) s = at[r[a]],
                            s.status < it.FETCHING ? s.fetch(o) : s.status === it.SAVED && s.load();
                        for (var i in o) o.hasOwnProperty(i) && o[i]()
                    }
                },
                y.prototype.onload = function() {
                    var e = this;
                    e.status = it.LOADED;
                    for (var t = 0,
                             r = (e._entry || []).length; r > t; t++) {
                        var a = e._entry[t];
                        0 === --a.remain && a.callback()
                    }
                    delete e._entry
                },
                y.prototype.error = function() {
                    var e = this;
                    e.onload(),
                        e.status = it.ERROR
                },
                y.prototype.exec = function() {
                    function e(t) {
                        var a = r.deps[t] || y.get(e.resolve(t));
                        if (a.status == it.ERROR) throw Error("module was broken: " + a.uri);
                        return a.exec()
                    }
                    var r = this;
                    if (r.status >= it.EXECUTING) return r.exports;
                    if (r.status = it.EXECUTING, r._entry && !r._entry.length && delete r._entry, !r.hasOwnProperty("factory")) return r.non = !0,
                        t;
                    var n = r.uri;
                    e.resolve = function(e) {
                        return y.resolve(e, n)
                    },
                        e.async = function(t, r) {
                            return y.use(t, r, n + "_async_" + a()),
                                e
                        };
                    var s = r.factory,
                        o = I(s) ? s(e, r.exports = {},
                            r) : s;
                    return o === t && (o = r.exports),
                        delete r.factory,
                        r.exports = o,
                        r.status = it.EXECUTED,
                        O("exec", r),
                        r.exports
                },
                y.prototype.fetch = function(e) {
                    function r() {
                        b.request(o.requestUri, o.onRequest, o.charset)
                    }
                    function a(e) {
                        delete nt[i],
                            st[i] = !0,
                        rt && (y.save(s, rt), rt = null);
                        var t, r = ot[i];
                        for (delete ot[i]; t = r.shift();) e === !0 ? t.error() : t.load()
                    }
                    var n = this,
                        s = n.uri;
                    n.status = it.FETCHING;
                    var o = {
                        uri: s
                    };
                    O("fetch", o);
                    var i = o.requestUri || s;
                    return ! i || st.hasOwnProperty(i) ? (n.load(), t) : nt.hasOwnProperty(i) ? (ot[i].push(n), t) : (nt[i] = !0, ot[i] = [n], O("request", o = {
                        uri: s,
                        requestUri: i,
                        onRequest: a,
                        charset: I(x.charset) ? x.charset(i) || "utf-8": x.charset
                    }), o.requested || (e ? e[o.requestUri] = r: r()), t)
                },
                y.resolve = function(e, t) {
                    var r = {
                        id: e,
                        refUri: t
                    };
                    return O("resolve", r),
                    r.uri || b.resolve(r.id, t)
                },
                y.define = function(e, r, a) {
                    var n = arguments.length;
                    1 === n ? (a = e, e = t) : 2 === n && (a = r, B(e) ? (r = e, e = t) : r = t),
                    !B(r) && I(a) && (r = t === m ? [] : m("" + a));
                    var s = {
                        id: e,
                        uri: y.resolve(e),
                        deps: r,
                        factory: a
                    };
                    if (!$ && !s.uri && X.attachEvent && t !== j) {
                        var o = j();
                        o && (s.uri = o.src)
                    }
                    O("define", s),
                        s.uri ? y.save(s.uri, s) : rt = s
                },
                y.save = function(e, t) {
                    var r = y.get(e);
                    r.status < it.SAVED && (r.id = t.id || e, r.dependencies = t.deps || [], r.factory = t.factory, r.status = it.SAVED, O("save", r))
                },
                y.get = function(e, t) {
                    return at[e] || (at[e] = new y(e, t))
                },
                y.use = function(t, r, a) {
                    var n = y.get(a, B(t) ? t: [t]);
                    n._entry.push(n),
                        n.history = {},
                        n.remain = 1,
                        n.callback = function() {
                            for (var t = [], a = n.resolve(), s = 0, o = a.length; o > s; s++) t[s] = at[a[s]].exec();
                            r && r.apply(e, t),
                                delete n.callback,
                                delete n.history,
                                delete n.remain,
                                delete n._entry
                        },
                        n.load()
                },
                b.use = function(e, t) {
                    return y.use(e, t, x.cwd + "_use_" + a()),
                        b
                },
                y.define.cmd = {},
                e.define = y.define,
                b.Module = y,
                x.fetchedList = st,
                x.cid = a,
                b.require = function(e) {
                    var t = y.get(y.resolve(e));
                    return t.status < it.EXECUTING && (t.onload(), t.exec()),
                        t.exports
                },
                x.base = q,
                x.dir = q,
                x.loader = L,
                x.cwd = R,
                x.charset = "utf-8",
                b.config = function(e) {
                    for (var t in e) {
                        var r = e[t],
                            a = x[t];
                        if (a && E(a)) for (var n in r) a[n] = r[n];
                        else B(a) ? r = a.concat(r) : "base" === t && ("/" !== r.slice( - 1) && (r += "/"), r = l(r)),
                            x[t] = r
                    }
                    return O("config", e),
                        b
                }
        }
    } (this), !
    function() {
        function e(e) {
            var t = e.length;
            if (! (2 > t)) {
                j.comboSyntax && (y = j.comboSyntax),
                j.comboMaxLength && (b = j.comboMaxLength),
                j.comboSuffix && (v = j.comboSuffix),
                    p = j.comboExcludes;
                for (var a = [], n = 0; t > n; n++) {
                    var s = e[n];
                    if (!m[s]) {
                        var i = h.get(s);
                        i.status < g && !l(s) && !d(s) && a.push(s)
                    }
                }
                a.length > 1 && o(r(a))
            }
        }
        function t(e) {
            e.requestUri = m[e.uri] || e.uri
        }
        function r(e) {
            return n(a(e))
        }
        function a(e) {
            for (var t = {
                    __KEYS: []
                },
                     r = 0, a = e.length; a > r; r++) for (var n = e[r].replace("://", "__").split("/"), s = t, o = 0, i = n.length; i > o; o++) {
                var c = n[o];
                s[c] || (s[c] = {
                    __KEYS: []
                },
                    s.__KEYS.push(c)),
                    s = s[c]
            }
            return t
        }
        function n(e) {
            for (var t = [], r = e.__KEYS, a = 0, n = r.length; n > a; a++) {
                for (var o = r[a], i = o, c = e[o], u = c.__KEYS; 1 === u.length;) i += "/" + u[0],
                    c = c[u[0]],
                    u = c.__KEYS;
                u.length && t.push([i.replace("__", "://"), s(c)])
            }
            return t
        }
        function s(e) {
            for (var t = [], r = e.__KEYS, a = 0, n = r.length; n > a; a++) {
                var o = r[a],
                    i = s(e[o]),
                    c = i.length;
                if (c) for (var u = 0; c > u; u++) t.push(o + "/" + i[u]);
                else t.push(o)
            }
            return t
        }
        function o(e) {
            for (var t = 0,
                     r = e.length; r > t; t++) for (var a = e[t], n = a[0] + "/", s = u(a[1]), o = 0, c = s.length; c > o; o++) i(n, s[o]);
            return m
        }
        function i(e, t) {
            for (var r = [], a = 0, n = t.length; n > a; a++) r[a] = t[a].replace(/\?.*$/, "");
            var s = e + y[0] + r.join(y[1]);
            v && (s += v);
            var o = s.length > b;
            if (t.length > 1 && o) {
                var u = c(t, b - (e + y[0]).length);
                i(e, u[0]),
                    i(e, u[1])
            } else {
                if (o) throw new Error("The combo url is too long: " + s);
                for (var a = 0,
                         n = t.length; n > a; a++) m[e + t[a]] = s
            }
        }
        function c(e, t) {
            for (var r = y[1], a = e[0], n = 1, s = e.length; s > n; n++) if (a += r + e[n], a.length > t) return [e.splice(0, n), e]
        }
        function u(e) {
            for (var t = [], r = {},
                     a = 0, n = e.length; n > a; a++) {
                var s = e[a],
                    o = f(s);
                o && (r[o] || (r[o] = [])).push(s)
            }
            for (var i in r) r.hasOwnProperty(i) && t.push(r[i]);
            return t
        }
        function f(e) {
            var t = e.lastIndexOf(".");
            return t >= 0 ? e.substring(t) : ""
        }
        function l(e) {
            return p ? p.test ? p.test(e) : p(e) : void 0
        }
        function d(e) {
            var t = j.comboSyntax || ["??", ","],
                r = t[0],
                a = t[1];
            return r && e.indexOf(r) > 0 || a && e.indexOf(a) > 0
        }
        var p, v, h = seajs.Module,
            g = h.STATUS.FETCHING,
            j = seajs.data,
            m = j.comboHash = {},
            y = ["??", ","],
            b = 2e3;
        if (seajs.on("load", e), seajs.on("fetch", t), j.test) {
            var x = seajs.test || (seajs.test = {});
            x.uris2paths = r,
                x.paths2hash = o
        }
        define("seajs/seajs-combo/1.0.1/seajs-combo", [], {})
    } (), !
    function() {
        function e(e) {
            return function(t) {
                return {}.toString.call(t) == "[object " + e + "]"
            }
        }
        function t(e) {
            return "[object Function]" == {}.toString.call(e)
        }
        function r(e, r, n) {
            var s = b.test(e),
                o = j.createElement(s ? "link": "script");
            if (n) {
                var i = t(n) ? n(e) : n;
                i && (o.charset = i)
            }
            a(o, r, s, e),
                s ? (o.rel = "stylesheet", o.href = e) : (o.async = !0, o.src = e),
                h = o,
                y ? m.insertBefore(o, y) : m.appendChild(o),
                h = null
        }
        function a(e, t, r, a) {
            function s() {
                e.onload = e.onerror = e.onreadystatechange = null,
                r || seajs.data.debug || m.removeChild(e),
                    e = null,
                    t()
            }
            var o = "onload" in e;
            return ! r || !x && o ? (o ? (e.onload = s, e.onerror = function() {
                seajs.emit("error", {
                    uri: a,
                    node: e
                }),
                    s()
            }) : e.onreadystatechange = function() { / loaded | complete / .test(e.readyState) && s()
            },
                void 0) : (setTimeout(function() {
                    n(e, t)
                },
                1), void 0)
        }
        function n(e, t) {
            var r, a = e.sheet;
            if (x) a && (r = !0);
            else if (a) try {
                a.cssRules && (r = !0)
            } catch(s) {
                "NS_ERROR_DOM_SECURITY_ERR" === s.name && (r = !0)
            }
            setTimeout(function() {
                    r ? t() : n(e, t)
                },
                20)
        }
        function s(e) {
            return e.match(w)[0]
        }
        function o(e) {
            for (e = e.replace(B, "/"), e = e.replace(_, "$1/"); e.match(I);) e = e.replace(I, "/");
            return e
        }
        function i(e) {
            var t = e.length - 1,
                r = e.charAt(t);
            return "#" === r ? e.substring(0, t) : ".js" === e.substring(t - 2) || e.indexOf("?") > 0 || ".css" === e.substring(t - 3) || "/" === r ? e: e + ".js"
        }
        function c(e) {
            var t = E.alias;
            return t && g(t[e]) ? t[e] : e
        }
        function u(e) {
            var t, r = E.paths;
            return r && (t = e.match(S)) && g(r[t[1]]) && (e = r[t[1]] + t[2]),
                e
        }
        function f(e) {
            var t = E.vars;
            return t && e.indexOf("{") > -1 && (e = e.replace(O,
                function(e, r) {
                    return g(t[r]) ? t[r] : e
                })),
                e
        }
        function l(e) {
            var r = E.map,
                a = e;
            if (r) for (var n = 0,
                            s = r.length; s > n; n++) {
                var o = r[n];
                if (a = t(o) ? o(e) || e: e.replace(o[0], o[1]), a !== e) break
            }
            return a
        }
        function d(e, t) {
            var r, a = e.charAt(0);
            if (T.test(e)) r = e;
            else if ("." === a) r = o((t ? s(t) : E.cwd) + e);
            else if ("/" === a) {
                var n = E.cwd.match(N);
                r = n ? n[0] + e.substring(1) : e
            } else r = E.base + e;
            return 0 === r.indexOf("//") && (r = location.protocol + r),
                r
        }
        function p(e, t) {
            if (!e) return "";
            e = c(e),
                e = u(e),
                e = f(e),
                e = i(e);
            var r = d(e, t);
            return r = l(r)
        }
        function v(e) {
            return e.hasAttribute ? e.src: e.getAttribute("src", 4)
        }
        var h, g = e("String"),
            j = document,
            m = j.head || j.getElementsByTagName("head")[0] || j.documentElement,
            y = m.getElementsByTagName("base")[0],
            b = /\.css(?:\?|$)/i,
            x = +navigator.userAgent.replace(/.*(?:AppleWebKit|AndroidWebKit)\/?(\d+).*/i, "$1") < 536;
        seajs.request = r;
        var E = seajs.data,
            w = /[^?#]*\//,
            B = /\/\.\//g,
            I = /\/[^\/]+\/\.\.\//,
            _ = /([^:\/])\/+\//g,
            S = /^([^\/:]+)(\/.+)$/,
            O = /{([^{]+)}/g,
            T = /^\/\/.|:\//,
            N = /^.*?\/\/.*?\//,
            j = document,
            A = location.href && 0 !== location.href.indexOf("about:") ? s(location.href) : "",
            k = j.scripts,
            C = j.getElementById("seajsnode") || k[k.length - 1];
        s(v(C) || A),
            seajs.resolve = p,
            define("seajs/seajs-css/1.0.4/seajs-css", [], {})
    } (), !
    function() {
        var e = seajs.data,
            t = document;
        seajs.Module.preload = function(t) {
            var r = e.preload,
                a = r.length;
            a ? seajs.Module.use(r,
                function() {
                    r.splice(0, a),
                        seajs.Module.preload(t)
                },
                e.cwd + "_preload_" + e.cid()) : t()
        },
            seajs.use = function(t, r) {
                return seajs.Module.preload(function() {
                    seajs.Module.use(t, r, e.cwd + "_use_" + e.cid())
                }),
                    seajs
            },
            e.preload = function() {
                var e = [],
                    r = location.search.replace(/(seajs-\w+)(&|$)/g, "$1=1$2");
                return r += " " + t.cookie,
                    r.replace(/(seajs-\w+)=1/g,
                        function(t, r) {
                            e.push(r)
                        }),
                    e
            } (),
            define("seajs/seajs-preload/1.0.0/seajs-preload", [], {})
    } (), "undefined" == typeof window.jrBase && (window.jrBase = {}), "undefined" == typeof jrBase.autoSeajsConfig && (jrBase.autoSeajsConfig = !0), jrBase.getProtocol = function() {
    var e = "https:" === window.location.protocol ? "https:": "http:";
    return e
},
    jrBase.autoSeajsConfig) {
    var seajsConfig = {
        base: jrBase.getProtocol() + "//static.360buyimg.com/finance/",
        paths: {
            baseProject: "//static.360buyimg.com/finance/base/biz/1.0.0/js"
        },
        map: [],
        debug: 0,
        comboExcludes: /.css/
    };
    /seajsDebug/.test(location.search) && (seajsConfig.comboExcludes = /.*/),
        seajs.config(seajsConfig)
}
jrBase.userLogIn = !1,
    jrBase.loginCallBack = null,
    jrBase.footerFix = "undefined" != typeof jrBase.footerFix ? jrBase.footerFix: !0,
    jrBase.headerFix = "undefined" != typeof jrBase.headerFix ? jrBase.headerFix: !1,
    jrBase.siteType = "undefined" != typeof jrBase.siteType ? jrBase.siteType: "customer";
var createCookie = function(e, t, r, a) {
        var a = a ? a: "/";
        if (r) {
            var n = new Date;
            n.setTime(n.getTime() + 24 * r * 60 * 60 * 1e3);
            var s = "; expires=" + n.toGMTString()
        } else var s = "";
        document.cookie = e + "=" + t + s + "; path=" + a
    },
    readCookie = function(e) {
        for (var t = e + "=",
                 r = document.cookie.split(";"), a = 0; a < r.length; a++) {
            for (var n = r[a];
                 " " == n.charAt(0);) n = n.substring(1, n.length);
            if (0 == n.indexOf(t)) return n.substring(t.length, n.length)
        }
        return null
    },
    checkLogin = function() {
        function e(e) {
            var t = "";
            switch (e) {
                case "E":
                    t = "\u4f01\u4e1a";
                    break;
                case "P":
                    t = "\u4e2a\u4f53\u5de5\u5546";
                    break;
                case "I":
                    t = "\u4e8b\u4e1a\u5355\u4f4d";
                    break;
                case "C":
                    t = "\u6c11\u529e\u975e\u4f01\u4e1a\u5355\u4f4d";
                    break;
                case "S":
                    t = "\u793e\u4f1a\u56e2\u4f53";
                    break;
                case "F":
                    t = "\u57fa\u91d1\u4f1a";
                    break;
                case "O":
                    t = "\u515a\u653f\u56fd\u5bb6\u673a\u5173";
                    break;
                case "N":
                    t = "\u81ea\u7136\u4eba"
            }
            return t
        }
        var t = jrBase.getProtocol() + "//biz.jd.com/login/queryHeadInfo.do";
        jQuery.ajax({
            url: t,
            dataType: "jsonp",
            success: function(t) {
                if ("0000" == t.code) {
                    var r = "";
                    if ("jdpin" == t.data.loginWay) {
                        var a = "";
                        switch (t.role) {
                            case "M":
                                a = "\uff08\u7ba1\u7406\u5458\uff09";
                                break;
                            case "O":
                                a = "\uff08\u64cd\u4f5c\u5458\uff09"
                        }
                        "undefined" != typeof t.data.realVo ? (r = '<span class="user-info"><span class="account">' + t.jdpin + '<b class="arrow-d"></b>', r += '<div class="acc-info">', "undefined" != typeof t.jdpin && (r += '<div class="a-item"><span class="a-l">\u4eac\u4e1c\u5546\u57ce\u8d26\u53f7\uff1a' + t.jdpin + a + "</span></div>"), r += '<div class="a-item"><span class="a-l">\u4eac\u4e1c\u91d1\u878d\u4f01\u4e1a\u8d26\u53f7\uff1a' + t.data.userInfoVo.userName + "</span></div>", "undefined" != typeof t.data.realVo.merchantName && (r += '<div class="a-item"><span class="a-l">\u4f01\u4e1a\u540d\u79f0\uff1a' + t.data.realVo.merchantName + "(" + e(t.data.realVo.realNameType) + ")</span></div>"), r += '<div class="a-item"><span class="a-l">\u5ba2\u6237ID\uff1a' + t.data.realVo.unifyId + "</span></div>", r += '</div></span><span>&nbsp;&nbsp;<a href="javascript:logout()" class=j-logout>\u9000\u51fa</a></span></span>') : r += '<span class="user-info"><span><span>' + t.data.userInfoVo.jrid + '&nbsp;&nbsp;</span> </span><span><a href="javascript:logout()" class=j-logout>\u9000\u51fa</a></span></span>'
                    } else {
                        var a = "";
                        switch (t.role) {
                            case "M":
                                a = "\uff08\u7ba1\u7406\u5458\uff09";
                                break;
                            case "O":
                                a = "\uff08\u64cd\u4f5c\u5458\uff09"
                        }
                        "undefined" == typeof t.data.realVo || 20 != t.data.realVo.realNameStatus && 30 != t.data.realVo.realNameStatus ? (r = '<span class="user-info"><span class="account">' + t.data.userInfoVo.userName + '<b class="arrow-d"></b>', r += '<div class="acc-info">', r += '<div class="a-item"><span class="a-l">\u4eac\u4e1c\u91d1\u878d\u4f01\u4e1a\u8d26\u53f7\uff1a' + t.data.userInfoVo.userName + a + "</span></div>", "undefined" != typeof t.jdpin && (r += '<div class="a-item"><span class="a-l">\u4eac\u4e1c\u5546\u57ce\u8d26\u53f7\uff1a' + t.jdpin + "</span></div>"), "undefined" != typeof t.data.realVo.merchantName && (r += '<div class="a-item"><span class="a-l">\u4f01\u4e1a\u540d\u79f0\uff1a' + t.data.realVo.merchantName + "(" + e(t.data.realVo.realNameType) + ")</span></div>"), r += '<div class="a-item"><span class="a-l">\u5ba2\u6237ID\uff1a' + t.data.realVo.unifyId + "</span></div>") : (r = '<span class="user-info"><span class="account">' + t.data.realVo.merchantName + '<b class="arrow-d"></b>', r += '<div class="acc-info">', r += '<div class="a-item"><span class="a-l">\u4eac\u4e1c\u91d1\u878d\u4f01\u4e1a\u8d26\u53f7\uff1a' + t.data.userInfoVo.userName + a + "</span></div>", "undefined" != typeof t.jdpin && (r += '<div class="a-item"><span class="a-l">\u4eac\u4e1c\u5546\u57ce\u8d26\u53f7\uff1a' + t.jdpin + "</span></div>"), "undefined" != typeof t.data.realVo.merchantName && (r += '<div class="a-item"><span class="a-l">\u4f01\u4e1a\u540d\u79f0\uff1a' + t.data.realVo.merchantName + "(" + e(t.data.realVo.realNameType) + ")</span></div>"), r += '<div class="a-item"><span class="a-l">\u5ba2\u6237ID\uff1a' + t.data.realVo.unifyId + "</span></div>"),
                            r += '</div></span><span>&nbsp;&nbsp;<a href="javascript:logout()" class=j-logout>\u9000\u51fa</a></span></span>'
                    }
                    jQuery("#loginbar").html(r)
                }
            }
        }),
            jQuery("#loginbar").delegate(".account", "mouseover",
                function() {
                    jQuery(".acc-info").show()
                }),
            jQuery("#loginbar").delegate(".account", "mouseout",
                function() {
                    jQuery(".acc-info").hide()
                })
    };
jrBase.getUserLogin = function(e) {
    var t = jrBase.getProtocol() + "//passport.jd.com/loginservice.aspx?method=Login";
    $.ajax({
        url: t,
        type: "get",
        dataType: "jsonp",
        success: function(t) {
            e({
                isLogin: t.Identity.IsAuthenticated,
                pin: t.Identity.Name,
                unick: t.Identity.Unick
            })
        }
    })
},
    jrBase.getUserInfo = function(e) {
        var t = jrBase.getProtocol() + "//biz.jd.com/login/queryHeadInfo.do";
        $.ajax({
            url: t,
            type: "get",
            dataType: "jsonp",
            success: function(t) {
                "0000" == t.code && "undefined" != typeof t.data.userInfoVo.jrid ? e({
                    isLogin: !0,
                    success: !0,
                    userInfo: t
                }) : e({
                    isLogin: !1,
                    success: !0
                })
            },
            error: function() {
                e({
                    isLogin: !1,
                    success: !1
                })
            }
        })
    },
    jrBase.getUserNotification = function(e) {
        if ("https:" !== jrBase.getProtocol()) {
            var t = "//courier.jr.jd.com/mc/unreadSize";
            $.ajax({
                url: t,
                type: "get",
                dataType: "jsonp",
                success: function(t) {
                    e(t)
                }
            })
        }
    },
    jrBase.parseParameter = function(e) {
        for (var t = 0,
                 r = jrBase.getParameters(e).split("&"), a = {}; t < r.length; t++) {
            var n = r[t].split("=");
            a[n[0]] = n[1]
        }
        return a
    },
    jrBase.getParameters = function(e) {
        if ("undefined" == typeof e) return window.location.search.substring(1);
        if ("string" == $.type(e)) {
            var t = e.indexOf("?");
            return t >= 0 ? e.substring(t + 1) : e
        }
        return ""
    },
    jrBase.getParameter = function(e) {
        var t = window.location.search.substring(1);
        if (t) for (var r = 0,
                        a = t.split("&"); r < a.length; r++) {
            var n = a[r].split("=");
            if (n[0] == e) return n[1]
        }
        return ""
    },
    jrBase.encodeHTML = function(e) {
        return e && "string" == typeof e ? e.replace(/\&/g, "&amp;").replace(/"/g, "&quot;").replace(/\</g, "&lt;").replace(/\>/g, "&gt;").replace(/\u00A0/g, "&nbsp;").replace(/(\u0020|\u000B|\u2028|\u2029|\f)/g, " ") : ""
    },
    jrBase.decodeHTML = function(e) {
        return e && "string" == typeof e ? e.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#39/g, "'").replace(/&nbsp;/g, "\xa0").replace(/&#32/g, " ").replace(/&amp;/g, "&") : ""
    },
    jrBase.zIndex = 2e3,
    jrBase.getZIndex = function() {
        return jrBase.zIndex += 1
    },
    seajs.use(["baseProject/easing", "baseProject/nav", "baseProject/sidebar", "baseProject/headerFix", "baseProject/userCenter"],
        function(e, t, r, a, n) {
            $(document).ready(function() {
                checkLogin(),
                    t(),
                    n(),
                    a(),
                    r()
            })
        });
var entryIds = [],
    entryAssetsIds = ["index"];
void 0 !== jrBase && void 0 !== jrBase.assetsId && entryAssetsIds.toString().match(jrBase.assetsId) && seajs.use("common/unit/grapevine/1.0.0/grapevine",
    function(e) {
        new e
    }),
    seajs.use("//misc.360buyimg.com/jdf/1.0.0/unit/log/1.0.0/log.js");