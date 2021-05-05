webpackJsonp([16], {
    599: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r, o = n(0), a = (n.n(o),
        n(330)), i = n(2), u = n(10), s = n(4), c = n(9), l = this && this.__extends || (r = function(t, e) {
            return (r = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function n() {
                this.constructor = t
            }
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
        ), h = this && this.__awaiter || function(t, e, n, r) {
            return new (n || (n = Promise))(function(o, a) {
                function i(t) {
                    try {
                        s(r.next(t))
                    } catch (t) {
                        a(t)
                    }
                }
                function u(t) {
                    try {
                        s(r.throw(t))
                    } catch (t) {
                        a(t)
                    }
                }
                function s(t) {
                    var e;
                    t.done ? o(t.value) : (e = t.value,
                    e instanceof n ? e : new n(function(t) {
                        t(e)
                    }
                    )).then(i, u)
                }
                s((r = r.apply(t, e || [])).next())
            }
            )
        }
        , p = this && this.__generator || function(t, e) {
            var n, r, o, a, i = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return a = {
                next: u(0),
                throw: u(1),
                return: u(2)
            },
            "function" === typeof Symbol && (a[Symbol.iterator] = function() {
                return this
            }
            ),
            a;
            function u(a) {
                return function(u) {
                    return function(a) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; i; )
                            try {
                                if (n = 1,
                                r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r),
                                0) : r.next) && !(o = o.call(r, a[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (a = [2 & a[0], o.value]),
                                a[0]) {
                                case 0:
                                case 1:
                                    o = a;
                                    break;
                                case 4:
                                    return i.label++,
                                    {
                                        value: a[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++,
                                    r = a[1],
                                    a = [0];
                                    continue;
                                case 7:
                                    a = i.ops.pop(),
                                    i.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                        i.label = a[1];
                                        break
                                    }
                                    if (6 === a[0] && i.label < o[1]) {
                                        i.label = o[1],
                                        o = a;
                                        break
                                    }
                                    if (o && i.label < o[2]) {
                                        i.label = o[2],
                                        i.ops.push(a);
                                        break
                                    }
                                    o[2] && i.ops.pop(),
                                    i.trys.pop();
                                    continue
                                }
                                a = e.call(t, i)
                            } catch (t) {
                                a = [6, t],
                                r = 0
                            } finally {
                                n = o = 0
                            }
                        if (5 & a[0])
                            throw a[1];
                        return {
                            value: a[0] ? a[1] : void 0,
                            done: !0
                        }
                    }([a, u])
                }
            }
        }
        , f = Object(a.a)({
            loader: function() {
                return n.e(20).then(n.bind(null, 908))
            }
        }), b = Object(a.a)({
            loader: function() {
                return n.e(23).then(n.bind(null, 914))
            }
        }), d = Object(a.a)({
            loader: function() {
                return n.e(22).then(n.bind(null, 919))
            }
        }), y = Object(a.a)({
            loader: function() {
                return n.e(19).then(n.bind(null, 924))
            }
        }), m = Object(a.a)({
            loader: function() {
                return n.e(24).then(n.bind(null, 933))
            }
        }), g = function(t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return n.state = {
                    gameName: ""
                },
                n
            }
            return l(e, t),
            e.prototype.componentDidMount = function() {
                return h(this, void 0, void 0, function() {
                    var t, e, n, r;
                    return p(this, function(o) {
                        switch (o.label) {
                        case 0:
                            return o.trys.push([0, 2, , 3]),
                            [4, i.a.gAI()];
                        case 1:
                            return t = o.sent(),
                            e = t.c,
                            n = t.d,
                            e < 0 || !n || n.accountID < 1 ? (this.props.history.push("/"),
                            this.props.showLogin(),
                            this.props.unloadingPage(),
                            [2]) : (r = this.props.match.params.game,
                            this.setState({
                                gameName: r.toLowerCase()
                            }),
                            sessionStorage.setItem("GAME_TAB", "skill"),
                            [3, 3]);
                        case 2:
                            return o.sent(),
                            this.props.history.push("/"),
                            this.props.unloadingPage(),
                            this.props.showLogin(),
                            [3, 3];
                        case 3:
                            return [2]
                        }
                    })
                })
            }
            ,
            e.prototype.render = function() {
                var t = this.state.gameName;
                return o.createElement("div", {
                    className: "resizeable"
                }, "dragonking" === t && o.createElement(f, null), "fishhunter" === t && o.createElement(b, null), "theshark" === t && o.createElement(d, null), "sortie" === t && o.createElement(y, null), "ott" === t && o.createElement(m, null))
            }
            ,
            e
        }(o.PureComponent), w = {
            showLogin: u.t,
            unloadingPage: u.D
        };
        e.default = Object(c.b)(function(t) {
            return {}
        }, w)(Object(s.e)(g))
    }
});
