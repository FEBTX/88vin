webpackJsonp([36], {
    1150: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o, a = n(0), r = (n.n(a),
        n(618)), c = n(9), i = n(4), s = n(10), l = n(2), u = n(620), d = n(12), f = n(327), h = this && this.__extends || (o = function(e, t) {
            return (o = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function n() {
                this.constructor = e
            }
            o(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
            new n)
        }
        ), p = this && this.__awaiter || function(e, t, n, o) {
            return new (n || (n = Promise))(function(a, r) {
                function c(e) {
                    try {
                        s(o.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function i(e) {
                    try {
                        s(o.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function s(e) {
                    var t;
                    e.done ? a(e.value) : (t = e.value,
                    t instanceof n ? t : new n(function(e) {
                        e(t)
                    }
                    )).then(c, i)
                }
                s((o = o.apply(e, t || [])).next())
            }
            )
        }
        , m = this && this.__generator || function(e, t) {
            var n, o, a, r, c = {
                label: 0,
                sent: function() {
                    if (1 & a[0])
                        throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return r = {
                next: i(0),
                throw: i(1),
                return: i(2)
            },
            "function" === typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function i(r) {
                return function(i) {
                    return function(r) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; c; )
                            try {
                                if (n = 1,
                                o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o),
                                0) : o.next) && !(a = a.call(o, r[1])).done)
                                    return a;
                                switch (o = 0,
                                a && (r = [2 & r[0], a.value]),
                                r[0]) {
                                case 0:
                                case 1:
                                    a = r;
                                    break;
                                case 4:
                                    return c.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    c.label++,
                                    o = r[1],
                                    r = [0];
                                    continue;
                                case 7:
                                    r = c.ops.pop(),
                                    c.trys.pop();
                                    continue;
                                default:
                                    if (!(a = (a = c.trys).length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                        c = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
                                        c.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && c.label < a[1]) {
                                        c.label = a[1],
                                        a = r;
                                        break
                                    }
                                    if (a && c.label < a[2]) {
                                        c.label = a[2],
                                        c.ops.push(r);
                                        break
                                    }
                                    a[2] && c.ops.pop(),
                                    c.trys.pop();
                                    continue
                                }
                                r = t.call(e, c)
                            } catch (e) {
                                r = [6, e],
                                o = 0
                            } finally {
                                n = a = 0
                            }
                        if (5 & r[0])
                            throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, i])
                }
            }
        }
        , y = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.getListBalance = function() {
                    return p(n, void 0, void 0, function() {
                        var e, t, n, o, a;
                        return m(this, function(r) {
                            switch (r.label) {
                            case 0:
                                this.setState({
                                    showLoading: !0
                                }),
                                r.label = 1;
                            case 1:
                                return r.trys.push([1, 3, , 4]),
                                [4, l.a.getAllBalance()];
                            case 2:
                                return e = r.sent(),
                                console.log(e),
                                this.setState({
                                    showLoading: !1
                                }),
                                t = e.c,
                                n = e.d,
                                t < 0 ? (this.setState({
                                    showLoading: !1
                                }),
                                [2]) : (o = Number(l.i.getCurrency()),
                                this.setState({
                                    data: n,
                                    current: o,
                                    currencyName: window.Config.Moneys[o - 1]
                                }),
                                [3, 4]);
                            case 3:
                                return a = r.sent(),
                                console.error(a),
                                [3, 4];
                            case 4:
                                return this.setState({
                                    showLoading: !1
                                }),
                                [2]
                            }
                        })
                    })
                }
                ,
                n.handleChangeBalance = function(e) {
                    var t = n.state.current;
                    t = t <= 0 ? 1 : t,
                    l.i.saveCurrency(t),
                    window.location.reload()
                }
                ,
                n.handleChoosenMoney = function(e) {
                    n.setState({
                        current: e
                    })
                }
                ,
                n.renderMoneys = function() {
                    for (var e = n.props.intl, t = [], o = n.state, r = o.data, c = o.current, i = 0, s = r; i < s.length; i++) {
                        var l = s[i]
                          , u = c === l.currencyID ? "lgo selected" : "lgo"
                          , f = l.currencyID
                          , h = l.goldBalance;
                        t.push(a.createElement("div", {
                            key: f,
                            className: u,
                            onClick: n.handleChoosenMoney.bind(n, f)
                        }, a.createElement("span", {
                            className: "money"
                        }, d.a.formatNumber(h)), a.createElement("div", {
                            className: "name"
                        }, window.Config.Moneys[f - 1], " ", libs.Util.ReplaceMoney(e.formatMessage({
                            id: "mn20"
                        })))))
                    }
                    return t
                }
                ,
                n.state = {
                    data: [],
                    current: 1,
                    showLoading: !1
                },
                n
            }
            return h(t, e),
            t.prototype.componentDidMount = function() {
                this.getListBalance()
            }
            ,
            t.prototype.render = function() {
                var e = this.props.intl
                  , t = this.state
                  , n = t.current
                  , o = t.showLoading;
                return a.createElement("div", {
                    className: "dropdown-section cash active"
                }, o && a.createElement(f.a, null), a.createElement(r.b, {
                    onClick: this.props.hideProfile
                }), a.createElement("div", null, a.createElement(u.b, {
                    activeIndex: 3
                }), !o && a.createElement("div", {
                    className: "section-lgo"
                }, a.createElement("div", {
                    className: "lgos"
                }, a.createElement("div", {
                    className: "changemoney"
                }, this.renderMoneys())), a.createElement("div", {
                    className: "guide"
                }, libs.Util.ReplaceMoney(e.formatMessage({
                    id: "lb17"
                }, {
                    0: window.Config.Moneys[n - 1],
                    1: window.Config.Moneys[n - 1]
                }))), a.createElement("div", {
                    className: "action"
                }, a.createElement("span", {
                    className: "button button-cancel",
                    id: "btnMessageCancel",
                    onClick: this.props.hideProfile
                }, e.formatMessage({
                    id: "cm02"
                })), a.createElement("span", {
                    className: "button button-accept",
                    id: "btnMessageDone",
                    onClick: this.handleChangeBalance
                }, e.formatMessage({
                    id: "cm03"
                }))))))
            }
            ,
            t
        }(a.PureComponent), b = {
            hideProfile: s.j,
            showProfile: s.w
        };
        t.default = Object(c.b)(function(e) {
            return {}
        }, b)(Object(i.e)(y))
    }
});
