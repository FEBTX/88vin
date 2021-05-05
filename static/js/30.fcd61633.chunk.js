webpackJsonp([30], {
    1145: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r, a = n(0), s = (n.n(a),
        n(618)), o = n(1), i = n(1146), c = n(626), l = n(9), u = n(10), p = n(327), h = this && this.__extends || (r = function(e, t) {
            return (r = Object.setPrototypeOf || {
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
            r(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
            new n)
        }
        ), d = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.toggleView = function(e) {
                    n.setState({
                        view: e
                    })
                }
                ,
                n.loading = function() {
                    n.setState({
                        showLoading: !0
                    })
                }
                ,
                n.unloading = function() {
                    n.setState({
                        showLoading: !1
                    })
                }
                ,
                n.state = {
                    view: 0,
                    showLoading: !1
                },
                n
            }
            return h(t, e),
            t.prototype.render = function() {
                var e = this.state.showLoading;
                return a.createElement(a.Fragment, null, e && a.createElement(p.a, null), a.createElement(s.b, {
                    onClick: this.props.hideProfile
                }), a.createElement(s.a, {
                    onClick: this.props.showProfile,
                    to: o.k.PROFILE
                }), a.createElement("div", {
                    className: "dropdown-section secure active"
                }, a.createElement(c.a, {
                    activeIndex: 3
                }), a.createElement("div", {
                    className: "tabs"
                }, a.createElement("div", {
                    className: "tab active"
                }, a.createElement(i.a, {
                    loading: this.loading,
                    unloading: this.unloading,
                    handleBack: this.toggleView
                })))))
            }
            ,
            t
        }(a.PureComponent), f = {
            hideProfile: u.j,
            showProfile: u.w
        };
        t.default = Object(l.b)(function(e) {
            return {}
        }, f)(d)
    },
    1146: function(e, t, n) {
        "use strict";
        n(1147);
        var r = n(1148);
        n.d(t, "a", function() {
            return r.a
        })
    },
    1147: function(e, t, n) {
        "use strict";
        var r, a = n(0), s = (n.n(a),
        n(4)), o = this && this.__extends || (r = function(e, t) {
            return (r = Object.setPrototypeOf || {
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
            r(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
            new n)
        }
        );
        !function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.state = {
                    view: 0
                },
                n
            }
            o(t, e),
            t.prototype.render = function() {
                return a.createElement("div", {
                    className: "nap_1 list-payment",
                    style: {
                        paddingTop: "20px"
                    }
                }, a.createElement("ul", null, a.createElement("li", null, a.createElement("a", {
                    className: "KetGold",
                    onClick: this.props.onClick.bind(this, 1)
                }, a.createElement(s.b, {
                    id: "se15"
                })))))
            }
        }(a.PureComponent)
    },
    1148: function(e, t, n) {
        "use strict";
        var r, a = n(0), s = (n.n(a),
        n(4)), o = n(9), i = n(2), c = n(12), l = n(872), u = n(10), p = this && this.__extends || (r = function(e, t) {
            return (r = Object.setPrototypeOf || {
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
            r(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
            new n)
        }
        ), h = this && this.__assign || function() {
            return (h = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var a in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e
            }
            ).apply(this, arguments)
        }
        , d = this && this.__awaiter || function(e, t, n, r) {
            return new (n || (n = Promise))(function(a, s) {
                function o(e) {
                    try {
                        c(r.next(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function i(e) {
                    try {
                        c(r.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? a(e.value) : (t = e.value,
                    t instanceof n ? t : new n(function(e) {
                        e(t)
                    }
                    )).then(o, i)
                }
                c((r = r.apply(e, t || [])).next())
            }
            )
        }
        , f = this && this.__generator || function(e, t) {
            var n, r, a, s, o = {
                label: 0,
                sent: function() {
                    if (1 & a[0])
                        throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return s = {
                next: i(0),
                throw: i(1),
                return: i(2)
            },
            "function" === typeof Symbol && (s[Symbol.iterator] = function() {
                return this
            }
            ),
            s;
            function i(s) {
                return function(i) {
                    return function(s) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; o; )
                            try {
                                if (n = 1,
                                r && (a = 2 & s[0] ? r.return : s[0] ? r.throw || ((a = r.return) && a.call(r),
                                0) : r.next) && !(a = a.call(r, s[1])).done)
                                    return a;
                                switch (r = 0,
                                a && (s = [2 & s[0], a.value]),
                                s[0]) {
                                case 0:
                                case 1:
                                    a = s;
                                    break;
                                case 4:
                                    return o.label++,
                                    {
                                        value: s[1],
                                        done: !1
                                    };
                                case 5:
                                    o.label++,
                                    r = s[1],
                                    s = [0];
                                    continue;
                                case 7:
                                    s = o.ops.pop(),
                                    o.trys.pop();
                                    continue;
                                default:
                                    if (!(a = (a = o.trys).length > 0 && a[a.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                        o = 0;
                                        continue
                                    }
                                    if (3 === s[0] && (!a || s[1] > a[0] && s[1] < a[3])) {
                                        o.label = s[1];
                                        break
                                    }
                                    if (6 === s[0] && o.label < a[1]) {
                                        o.label = a[1],
                                        a = s;
                                        break
                                    }
                                    if (a && o.label < a[2]) {
                                        o.label = a[2],
                                        o.ops.push(s);
                                        break
                                    }
                                    a[2] && o.ops.pop(),
                                    o.trys.pop();
                                    continue
                                }
                                s = t.call(e, o)
                            } catch (e) {
                                s = [6, e],
                                r = 0
                            } finally {
                                n = a = 0
                            }
                        if (5 & s[0])
                            throw s[1];
                        return {
                            value: s[0] ? s[1] : void 0,
                            done: !0
                        }
                    }([s, i])
                }
            }
        }
        , m = function(e) {
            return a.createElement("input", {
                value: "lock",
                type: "radio",
                defaultChecked: e.check,
                className: " radio",
                name: "rad",
                style: e.style,
                id: e.id,
                onChange: e.onChange
            })
        }, g = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.getStockAccount = function() {
                    return d(n, void 0, void 0, function() {
                        var e, t, n, r;
                        return f(this, function(a) {
                            switch (a.label) {
                            case 0:
                                return a.trys.push([0, 2, , 3]),
                                this.props.loading(),
                                [4, i.g.getAccountStock()];
                            case 1:
                                return e = a.sent(),
                                t = e.c,
                                n = e.d,
                                t < 0 ? (this.props.unloading(),
                                [2]) : (this.setState({
                                    data: n
                                }),
                                [3, 3]);
                            case 2:
                                return r = a.sent(),
                                console.error(r),
                                [3, 3];
                            case 3:
                                return this.props.unloading(),
                                [2]
                            }
                        })
                    })
                }
                ,
                n.handleInputChange = function(e) {
                    n.hideError();
                    var t = e.target.validity.valid ? e.target.value : n.state.gam;
                    t = Number(t),
                    n.setState({
                        gam: t
                    })
                }
                ,
                n.toggleFreeze = function(e) {
                    n.hideError(),
                    n.setState({
                        isFreeze: e,
                        showSuccess: !1,
                        showError: !1
                    })
                }
                ,
                n.onUpdateMethod = function(e) {
                    n.setState({
                        otp: "",
                        otpType: e
                    })
                }
                ,
                n.onUpdateOTP = function(e) {
                    n.setState({
                        otp: e
                    })
                }
                ,
                n.handleToggleEvent = function(e) {
                    n.state.isFreeze ? n.handleFreeze() : n.handleUnFreeze()
                }
                ,
                n.handleFreeze = function() {
                    return d(n, void 0, void 0, function() {
                        var e, t, n, r, a, s, o, c, l;
                        return f(this, function(u) {
                            switch (u.label) {
                            case 0:
                                if (e = this.state.gam,
                                t = this.props.intl,
                                !e || Number(e) <= 0)
                                    return this.setState({
                                        erMn: !0,
                                        ctMn: t.formatMessage({
                                            id: "li-204"
                                        })
                                    }),
                                    [2];
                                u.label = 1;
                            case 1:
                                return u.trys.push([1, 3, , 4]),
                                this.props.loading(),
                                this.hideError(),
                                Number(e) <= 0 ? (this.props.unloading(),
                                this.showError(-999e3, null),
                                [2]) : [4, i.g.reserveBalance(e)];
                            case 2:
                                return n = u.sent(),
                                r = n.c,
                                a = n.d,
                                s = n.p,
                                r < 0 ? (this.props.unloading(),
                                this.showError(r, s),
                                [2]) : (o = a.balance,
                                c = a.stock,
                                this.setState({
                                    data: h(h({}, this.state.data), {
                                        goldBalance: o,
                                        stockBalance: c
                                    }),
                                    showSuccess: !0,
                                    successID: "se49"
                                }),
                                this.props.gAI(),
                                [3, 4]);
                            case 3:
                                return l = u.sent(),
                                console.error(l),
                                [3, 4];
                            case 4:
                                return this.props.unloading(),
                                [2]
                            }
                        })
                    })
                }
                ,
                n.handleUnFreeze = function() {
                    return d(n, void 0, void 0, function() {
                        var e, t, n, r, a, s, o, c, l, u, p, d, m, g, E;
                        return f(this, function(f) {
                            switch (f.label) {
                            case 0:
                                if (0 === this.props.account.securityStatus)
                                    return this.showError(-251),
                                    [2];
                                if (e = this.state,
                                t = e.gam,
                                n = e.otp,
                                r = !1,
                                a = "",
                                s = !1,
                                o = "",
                                c = this.props.intl,
                                (!t || Number(t) <= 0) && (r = !0,
                                a = c.formatMessage({
                                    id: "li-204"
                                })),
                                n && "" !== n.trim() || (s = !0,
                                o = c.formatMessage({
                                    id: "me-1019"
                                })),
                                r || s)
                                    return this.setState({
                                        erMn: r,
                                        ctMn: a,
                                        erOtp: s,
                                        ctOtp: o
                                    }),
                                    [2];
                                f.label = 1;
                            case 1:
                                return f.trys.push([1, 3, , 4]),
                                this.props.loading(),
                                this.hideError(),
                                [4, i.g.unReserveBalance(this.state)];
                            case 2:
                                return l = f.sent(),
                                u = l.c,
                                p = l.d,
                                d = l.p,
                                u < 0 ? (this.props.unloading(),
                                this.showError(u, d),
                                [2]) : (m = p.balance,
                                g = p.stock,
                                this.setState({
                                    data: h(h({}, this.state.data), {
                                        goldBalance: m,
                                        stockBalance: g
                                    }),
                                    showSuccess: !0,
                                    successID: "se50"
                                }),
                                this.props.gAI(),
                                [3, 4]);
                            case 3:
                                return E = f.sent(),
                                console.error(E),
                                [3, 4];
                            case 4:
                                return this.props.unloading(),
                                [2]
                            }
                        })
                    })
                }
                ,
                n.showError = function(e, t) {
                    e = -60 === e ? -51 : e;
                    var r = n.props.intl
                      , a = "me" + e;
                    n.setState({
                        showError: !0,
                        errorMessage: libs.Util.ReplaceMoney(r.formatMessage({
                            id: a
                        }))
                    })
                }
                ,
                n.hideError = function() {
                    n.setState({
                        showError: !1,
                        messageID: "",
                        showSuccess: !1,
                        erMn: !1,
                        ctMn: "",
                        erOtp: !1,
                        ctOtp: ""
                    })
                }
                ,
                n.state = {
                    view: 0,
                    data: {},
                    gam: "",
                    isFreeze: !0,
                    otp: "",
                    showError: !1,
                    showSuccess: !1,
                    successID: "",
                    messageID: "",
                    otpType: 1,
                    erMn: !1,
                    ctMn: "",
                    erOtp: !1,
                    ctOtp: ""
                },
                n
            }
            return p(t, e),
            t.prototype.componentDidMount = function() {
                this.getStockAccount()
            }
            ,
            t.prototype.render = function() {
                var e = this.state
                  , t = e.data
                  , n = t.userName
                  , r = t.goldBalance
                  , o = t.stockBalance
                  , i = e.isFreeze
                  , u = e.otp
                  , p = e.showError
                  , h = e.errorMessage
                  , d = e.showSuccess
                  , f = e.successID
                  , g = e.erMn
                  , E = e.ctMn
                  , v = e.erOtp
                  , y = e.ctOtp
                  , b = this.props.intl;
                return a.createElement("div", {
                    className: "secure"
                }, a.createElement("div", {
                    className: "inf-row"
                }, a.createElement("p", null, a.createElement("span", {
                    style: {
                        width: "240px"
                    }
                }, b.formatMessage({
                    id: "se22"
                })), " ", a.createElement("span", null, n)), a.createElement("p", null, a.createElement("span", {
                    style: {
                        width: "240px"
                    }
                }, b.formatMessage({
                    id: "se64"
                })), " ", a.createElement("span", null, c.a.formatNumber(r))), a.createElement("p", null, a.createElement("span", {
                    style: {
                        width: "240px"
                    }
                }, b.formatMessage({
                    id: "se65"
                })), " ", a.createElement("span", null, c.a.formatNumber(o)))), a.createElement("div", {
                    className: "guide",
                    style: {
                        marginTop: "20px;"
                    }
                }, a.createElement("p", null, a.createElement(s.b, {
                    id: "se66"
                })), a.createElement("div", {
                    className: "center"
                }, a.createElement("div", {
                    className: "radio"
                }, a.createElement(m, {
                    check: !0,
                    onChange: this.toggleFreeze.bind(this, !0),
                    id: "f-close"
                }), a.createElement("label", {
                    htmlFor: "f-close"
                }, libs.Util.ReplaceMoney(b.formatMessage({
                    id: "se15"
                })))), a.createElement("div", {
                    className: "radio"
                }, a.createElement(m, {
                    check: !1,
                    onChange: this.toggleFreeze.bind(this, !1),
                    id: "o-close"
                }), a.createElement("label", {
                    htmlFor: "o-close"
                }, libs.Util.ReplaceMoney(b.formatMessage({
                    id: "se14"
                })))))), a.createElement("div", {
                    className: "form"
                }, a.createElement("div", {
                    className: "input" + (g ? " has-error" : ""),
                    style: {
                        width: "100%"
                    }
                }, a.createElement("input", {
                    type: "text",
                    maxLength: 10,
                    autoFocus: !0,
                    onChange: this.handleInputChange,
                    name: "gam",
                    pattern: "[0-9]*",
                    value: this.state.gam
                }), g && a.createElement("span", {
                    className: "error"
                }, E)), !i && a.createElement(l.a, {
                    onUpdateMethod: this.onUpdateMethod,
                    onUpdateOTP: this.onUpdateOTP,
                    otp: u,
                    erOtp: v,
                    ctOtp: y,
                    hide: this.hideError
                })), a.createElement("div", {
                    className: "action",
                    style: {
                        padding: "10px 0"
                    }
                }, a.createElement("span", {
                    className: "button button-submit",
                    onClick: this.handleToggleEvent
                }, a.createElement(s.b, {
                    id: "se62"
                }))), p && a.createElement("div", {
                    className: "guide",
                    style: {
                        color: "red"
                    }
                }, h), d && a.createElement("div", {
                    className: "guide",
                    style: {
                        color: "green"
                    }
                }, libs.Util.ReplaceMoney(b.formatMessage({
                    id: f
                }))))
            }
            ,
            t
        }(a.PureComponent), E = {
            gAI: u.g
        };
        t.a = Object(o.b)(function(e) {
            return {
                account: e.authen.accountInfo
            }
        }, E)(Object(s.e)(g))
    }
});
