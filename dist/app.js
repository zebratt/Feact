parcelRequire = (function(e, r, n) {
    var t = 'function' == typeof parcelRequire && parcelRequire,
        i = 'function' == typeof require && require
    function u(n, o) {
        if (!r[n]) {
            if (!e[n]) {
                var f = 'function' == typeof parcelRequire && parcelRequire
                if (!o && f) return f(n, !0)
                if (t) return t(n, !0)
                if (i && 'string' == typeof n) return i(n)
                var c = new Error("Cannot find module '" + n + "'")
                throw ((c.code = 'MODULE_NOT_FOUND'), c)
            }
            a.resolve = function(r) {
                return e[n][1][r] || r
            }
            var l = (r[n] = new u.Module(n))
            e[n][0].call(l.exports, a, l, l.exports)
        }
        return r[n].exports
        function a(e) {
            return u(a.resolve(e))
        }
    }
    ;(u.isParcelRequire = !0),
        (u.Module = function(e) {
            ;(this.id = e), (this.bundle = u), (this.exports = {})
        }),
        (u.modules = e),
        (u.cache = r),
        (u.parent = t)
    for (var o = 0; o < n.length; o++) u(n[o])
    return u
})(
    {
        3: [
            function(require, module, exports) {
                'use strict'
                Object.defineProperty(exports, '__esModule', { value: !0 })
                var e = (function() {
                    function e(e, n) {
                        for (var t = 0; t < n.length; t++) {
                            var r = n[t]
                            ;(r.enumerable = r.enumerable || !1),
                                (r.configurable = !0),
                                'value' in r && (r.writable = !0),
                                Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(n, t, r) {
                        return t && e(n.prototype, t), r && e(n, r), n
                    }
                })()
                function n(e, n) {
                    if (!(e instanceof n)) throw new TypeError('Cannot call a class as a function')
                }
                var t = (function() {
                    function t() {
                        n(this, t)
                    }
                    return (
                        e(t, [
                            {
                                key: 'createElement',
                                value: function(e, n) {
                                    for (var t = arguments.length, r = Array(t > 2 ? t - 2 : 0), a = 2; a < t; a++)
                                        r[a - 2] = arguments[a]
                                    return 'function' == typeof e
                                        ? e.apply(void 0, [n].concat(r))
                                        : { tag: e, attrs: n, children: r }
                                }
                            }
                        ]),
                        t
                    )
                })()
                exports.default = new t()
            },
            {}
        ],
        4: [
            function(require, module, exports) {
                'use strict'
                Object.defineProperty(exports, '__esModule', { value: !0 })
                var e = (function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n]
                            ;(r.enumerable = r.enumerable || !1),
                                (r.configurable = !0),
                                'value' in r && (r.writable = !0),
                                Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                })()
                function t(e, t) {
                    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
                }
                var n = (function() {
                    function n() {
                        t(this, n)
                    }
                    return (
                        e(n, [
                            {
                                key: 'createRealNode',
                                value: function(e) {
                                    var t = document.createElement(e.tag)
                                    if (
                                        (e.attrs &&
                                            Object.keys(e.attrs).map(function(n) {
                                                var r = 'className' === n ? 'class' : n,
                                                    a = e.attrs[n]
                                                t.setAttribute(r, a)
                                            }),
                                        e.children && e.children.length)
                                    )
                                        for (var n = 0; n < e.children.length; n++) {
                                            var r = null
                                            'string' == typeof e.children[n]
                                                ? ((r = document.createElement('span')).innerText = e.children[n])
                                                : (r = this.createRealNode(e.children[n])),
                                                t.appendChild(r)
                                        }
                                    return t
                                }
                            },
                            {
                                key: 'render',
                                value: function(e, t) {
                                    if (!e) throw new Error('element can not be empty!')
                                    if (!t) throw new Error('container can not be empty')
                                    t.appendChild(this.createRealNode(e))
                                }
                            }
                        ]),
                        n
                    )
                })()
                exports.default = new n()
            },
            {}
        ],
        1: [
            function(require, module, exports) {
                'use strict'
                var e = require('./Feact/Feact'),
                    t = r(e),
                    a = require('./Feact/FeactDOM'),
                    l = r(a)
                function r(e) {
                    return e && e.__esModule ? e : { default: e }
                }
                var u = function(e) {
                        for (var a = arguments.length, l = Array(a > 1 ? a - 1 : 0), r = 1; r < a; r++)
                            l[r - 1] = arguments[r]
                        return t.default.createElement(
                            'div',
                            { className: 'header' },
                            t.default.createElement('div', null, 'this is header'),
                            l
                        )
                    },
                    n = function() {
                        return t.default.createElement(
                            'div',
                            { className: 'app' },
                            t.default.createElement(
                                u,
                                null,
                                t.default.createElement('div', null, 'custom header text')
                            ),
                            t.default.createElement('div', null, 'this is App')
                        )
                    }
                l.default.render(t.default.createElement(n, null), document.getElementById('root'))
            },
            { './Feact/Feact': 3, './Feact/FeactDOM': 4 }
        ]
    },
    {},
    [1]
)
//# sourceMappingURL=/app.map
