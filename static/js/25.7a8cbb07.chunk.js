webpackJsonp([25], {
    1136: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a, r = n(0), o = (n.n(r),
        n(618)), s = n(1), i = n(10), c = n(9), l = n(4), u = n(1137), p = n(2), h = n(626), d = n(327), m = n(860), f = this && this.__extends || (a = function(e, t) {
            return (a = Object.setPrototypeOf || {
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
            a(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
            new n)
        }
        ), b = this && this.__awaiter || function(e, t, n, a) {
            return new (n || (n = Promise))(function(r, o) {
                function s(e) {
                    try {
                        c(a.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function i(e) {
                    try {
                        c(a.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof n ? t : new n(function(e) {
                        e(t)
                    }
                    )).then(s, i)
                }
                c((a = a.apply(e, t || [])).next())
            }
            )
        }
        , g = this && this.__generator || function(e, t) {
            var n, a, r, o, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: i(0),
                throw: i(1),
                return: i(2)
            },
            "function" === typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function i(o) {
                return function(i) {
                    return function(o) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; s; )
                            try {
                                if (n = 1,
                                a && (r = 2 & o[0] ? a.return : o[0] ? a.throw || ((r = a.return) && r.call(a),
                                0) : a.next) && !(r = r.call(a, o[1])).done)
                                    return r;
                                switch (a = 0,
                                r && (o = [2 & o[0], r.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return s.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++,
                                    a = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = s.ops.pop(),
                                    s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        s.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && s.label < r[1]) {
                                        s.label = r[1],
                                        r = o;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2],
                                        s.ops.push(o);
                                        break
                                    }
                                    r[2] && s.ops.pop(),
                                    s.trys.pop();
                                    continue
                                }
                                o = t.call(e, s)
                            } catch (e) {
                                o = [6, e],
                                a = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, i])
                }
            }
        }
        , E = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.toggleView = function(e) {
                    n.hideError(),
                    n.setState({
                        view: e
                    })
                }
                ,
                n.handleChangeMobile = function(e) {
                    return b(n, void 0, void 0, function() {
                        var t, n, a, r, o, s, i, c, l, u, h, d, m;
                        return g(this, function(f) {
                            switch (f.label) {
                            case 0:
                                if (this.setState({
                                    showLoading: !0
                                }),
                                this.hideError(),
                                t = this.props.account.mobile,
                                n = e.mobile,
                                a = e.otp,
                                r = !1,
                                o = "",
                                s = !1,
                                i = "",
                                c = this.props.intl,
                                n && "" !== n.trim() || (r = !0,
                                o = c.formatMessage({
                                    id: "me-1018"
                                })),
                                a && "" !== a.trim() || (s = !0,
                                i = c.formatMessage({
                                    id: "me-1019"
                                })),
                                r || s)
                                    return this.setState({
                                        erMb: r,
                                        ctMb: o,
                                        erOtp: s,
                                        ctOtp: i
                                    }),
                                    [2];
                                f.label = 1;
                            case 1:
                                return f.trys.push([1, 3, , 4]),
                                l = {
                                    oldmobile: t,
                                    newmobile: n,
                                    otp: a
                                },
                                [4, p.h.changeMobile(l)];
                            case 2:
                                return u = f.sent(),
                                h = u.c,
                                d = u.p,
                                h < 0 ? (this.setState({
                                    showLoading: !1
                                }),
                                this.showError(h, d),
                                [2]) : (this.props.gAI(),
                                this.toggleView(0),
                                [3, 4]);
                            case 3:
                                return m = f.sent(),
                                console.error(m),
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
                n.handleCancelMobile = function(e) {
                    return b(n, void 0, void 0, function() {
                        var t, n, a, r, o;
                        return g(this, function(i) {
                            switch (i.label) {
                            case 0:
                                if (this.setState({
                                    showLoading: !0
                                }),
                                this.hideError(),
                                t = this.props.intl,
                                !e || "" === e.trim())
                                    return this.setState({
                                        erOtp: !0,
                                        ctOtp: t.formatMessage({
                                            id: "me-1019"
                                        })
                                    }),
                                    [2];
                                i.label = 1;
                            case 1:
                                return i.trys.push([1, 3, , 4]),
                                [4, p.h.cancelMobile(e)];
                            case 2:
                                return n = i.sent(),
                                a = n.c,
                                r = n.p,
                                a < 0 ? (this.setState({
                                    showLoading: !1
                                }),
                                this.showError(a, r),
                                [2]) : (this.props.gAI(),
                                this.props.showProfile(s.k.SECURITY),
                                [3, 4]);
                            case 3:
                                return o = i.sent(),
                                console.error(o),
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
                n.handleCancelTeleSafe = function(e) {
                    return b(n, void 0, void 0, function() {
                        var t, n, a, r;
                        return g(this, function(o) {
                            switch (o.label) {
                            case 0:
                                this.setState({
                                    showLoading: !0
                                }),
                                this.hideError(),
                                o.label = 1;
                            case 1:
                                return o.trys.push([1, 3, , 4]),
                                [4, p.h.cancelTeleSafe(e)];
                            case 2:
                                return t = o.sent(),
                                n = t.c,
                                a = t.p,
                                n < 0 ? (this.setState({
                                    showLoading: !1
                                }),
                                this.showError(n, a),
                                [2]) : (this.props.gAI(),
                                this.props.showProfile(s.k.SECURITY),
                                [3, 4]);
                            case 3:
                                return r = o.sent(),
                                console.error(r),
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
                n.showError = function(e, t) {
                    var a = n.props.intl
                      , r = "me" + e;
                    -642 !== e ? -7 !== e && -6 !== e ? n.setState({
                        showError: !0,
                        errorMessage: a.formatMessage({
                            id: r
                        }, Object.assign({}, t))
                    }) : n.setState({
                        erOtp: !0,
                        ctOtp: a.formatMessage({
                            id: r
                        })
                    }) : n.setState({
                        erMb: !0,
                        ctMb: a.formatMessage({
                            id: r
                        })
                    })
                }
                ,
                n.hideError = function() {
                    n.setState({
                        showError: !1,
                        errorMessage: "",
                        erMb: !1,
                        ctMb: "",
                        erOtp: !1,
                        ctOtp: ""
                    })
                }
                ,
                n.state = {
                    view: 0,
                    showError: !1,
                    errorMessage: "",
                    showLoading: !1,
                    erMb: !1,
                    ctMb: "",
                    erOtp: !1,
                    ctOtp: ""
                },
                n
            }
            return f(t, e),
            t.prototype.render = function() {
                var e = this.props
                  , t = e.account
                  , n = t.username
                  , a = t.mobile
                  , i = t.teleSafe
                  , c = t.securityStatus
                  , p = e.intl
                  , f = this.state
                  , b = f.view
                  , g = f.showError
                  , E = f.errorMessage
                  , w = f.showLoading
                  , v = f.erMb
                  , M = f.ctMb
                  , O = f.erOtp
                  , _ = f.ctOtp
                  , y = c === m.a.CONFIRM_MOBILE || c === m.a.CONFIRM_EMAIL_AND_MOBILE || c === m.a.CONFIRM_TELESAFE_AND_MOBILE || c === m.a.CONFIRM_ALL
                  , C = c === m.a.CONFIRM_TELESAFE || c === m.a.CONFIRM_TELESAFE_AND_MOBILE || c === m.a.CONFIRM_TELESAFE_AND_EMAIL || c === m.a.CONFIRM_ALL;
                return r.createElement(r.Fragment, null, w && r.createElement(d.a, null), r.createElement(o.b, {
                    onClick: this.props.hideProfile
                }), r.createElement(o.a, {
                    onClick: this.props.showProfile,
                    to: s.k.PROFILE
                }), r.createElement("div", {
                    className: "dropdown-section secure active",
                    id: "secure"
                }, r.createElement(h.a, {
                    activeIndex: 1
                }), r.createElement("div", {
                    className: "tabs",
                    "data-tab": "secure-tab"
                }, r.createElement("div", {
                    className: "tab active"
                }, y && 3 != b && r.createElement("div", {
                    className: "secure"
                }, r.createElement("div", {
                    className: "inf-row"
                }, r.createElement("p", null, r.createElement("span", null, r.createElement(l.b, {
                    id: "sl37"
                })), " ", r.createElement("span", null, n)), r.createElement("p", null, r.createElement("span", null, r.createElement(l.b, {
                    id: "se52"
                })), " ", r.createElement("span", null, a))), 0 === b && r.createElement("div", {
                    className: "action",
                    style: {
                        padding: "10px 0"
                    }
                }, r.createElement("span", {
                    className: "button button-action",
                    onClick: this.toggleView.bind(this, 2)
                }, r.createElement(l.b, {
                    id: "se32"
                })), r.createElement("span", {
                    className: "button button-action",
                    onClick: this.toggleView.bind(this, 1)
                }, r.createElement(l.b, {
                    id: "se17"
                }))), 0 === b && r.createElement("div", {
                    className: "guide"
                }, r.createElement("div", {
                    className: "checkbox"
                }, r.createElement("input", {
                    defaultChecked: !0,
                    disabled: !0,
                    type: "checkbox",
                    id: "otp-secure"
                }), r.createElement("label", {
                    htmlFor: "otp-secure"
                }, p.formatMessage({
                    id: "se09"
                }))), window.Config.OTP.EnalbeAppOTP && r.createElement("div", {
                    className: "checkbox",
                    style: {
                        marginLeft: "205px"
                    },
                    id: "app-secure"
                }, r.createElement("input", {
                    style: {
                        marginLeft: "205px"
                    },
                    type: "checkbox",
                    disabled: !0
                }), r.createElement("label", {
                    htmlFor: "otp-secure"
                }, "App OTP"))), 1 === b && r.createElement(u.b, {
                    handlechangeView: this.toggleView,
                    handleChangeMobile: this.handleChangeMobile,
                    erMb: v,
                    ctMb: M,
                    erOtp: O,
                    ctOtp: _,
                    hide: this.hideError
                }), 2 === b && r.createElement(u.a, {
                    handlechangeView: this.toggleView,
                    handContinue: this.handleCancelMobile,
                    erMb: v,
                    ctMb: M,
                    erOtp: O,
                    ctOtp: _
                }), g && r.createElement("div", {
                    className: "guide",
                    style: {
                        color: "red"
                    }
                }, r.createElement("p", {
                    dangerouslySetInnerHTML: {
                        __html: libs.Util.ReplaceMoney(p.formatHTMLMessage({
                            id: E
                        }))
                    }
                }))), C && 1 != b && 2 != b && r.createElement("div", {
                    className: "secure"
                }, r.createElement("div", {
                    className: "inf-row"
                }, r.createElement("p", null, r.createElement("span", null, r.createElement(l.b, {
                    id: "sl37"
                })), " ", r.createElement("span", null, n)), r.createElement("p", null, r.createElement("span", null, r.createElement(l.b, {
                    id: "se77"
                })), " ", r.createElement("span", null, i))), r.createElement("div", {
                    className: "action",
                    style: {
                        padding: "10px 0"
                    }
                }, r.createElement("span", {
                    className: "button button-submit",
                    onClick: this.toggleView.bind(this, 3)
                }, r.createElement(l.b, {
                    id: "se32"
                }))), 3 === b && r.createElement(u.a, {
                    handlechangeView: this.toggleView,
                    handContinue: this.handleCancelTeleSafe,
                    isTeleSafe: !0
                }), g && r.createElement("div", {
                    className: "guide",
                    style: {
                        color: "red"
                    }
                }, r.createElement("p", null, E)))))))
            }
            ,
            t
        }(r.PureComponent), w = {
            hideProfile: i.j,
            showProfile: i.w,
            gAI: i.g
        };
        t.default = Object(c.b)(function(e) {
            return {
                account: e.authen.accountInfo
            }
        }, w)(Object(l.e)(E))
    },
    1137: function(e, t, n) {
        "use strict";
        var a = n(1138)
          , r = n(1140);
        n.d(t, "b", function() {
            return a.a
        }),
        n.d(t, "a", function() {
            return r.a
        })
    },
    1138: function(e, t, n) {
        "use strict";
        var a, r = n(0), o = (n.n(r),
        n(4)), s = n(1139), i = n(328), c = this && this.__extends || (a = function(e, t) {
            return (a = Object.setPrototypeOf || {
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
            a(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
            new n)
        }
        ), l = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.handleBack = function(e) {
                    n.props.handlechangeView(0)
                }
                ,
                n.handleContinue = function(e) {
                    n.props.handleChangeMobile(n.state)
                }
                ,
                n.handleInputChange = function(e, t) {
                    var a;
                    n.setState(((a = {})[e] = t,
                    a))
                }
                ,
                n.state = {
                    mobile: "",
                    otp: "",
                    erMb: !1,
                    ctMb: "",
                    erTe: !1,
                    ctTe: ""
                },
                n
            }
            return c(t, e),
            t.prototype.render = function() {
                var e = this.props
                  , t = e.intl
                  , n = e.erMb
                  , a = e.ctMb
                  , o = e.erOtp
                  , c = e.ctOtp;
                return r.createElement(r.Fragment, null, r.createElement("div", {
                    className: "form"
                }, r.createElement("div", {
                    className: "response"
                }), r.createElement(s.a, {
                    autoFocus: !0,
                    message: t.formatMessage({
                        id: "se45"
                    }),
                    name: "mobile",
                    onChange: this.handleInputChange,
                    maxlength: 12,
                    er: n,
                    ct: a,
                    hide: this.props.hide
                }), r.createElement("div", {
                    className: "input get-otp" + (o ? " has-error" : "")
                }, r.createElement(i.a, {
                    intl: t,
                    inputname: "otp",
                    className: "large",
                    serviceID: 15,
                    showLoading: !0,
                    onChange: this.handleInputChange,
                    autoFocus: !0,
                    dis: 0 == window.Config.OTP.EnableSmsOTP,
                    isSmsPlus: !0,
                    erOtp: o,
                    ctOtp: c,
                    hide: this.props.hide
                }))), r.createElement("div", {
                    className: "guide"
                }, r.createElement("p", {
                    dangerouslySetInnerHTML: {
                        __html: libs.Util.ReplaceMoney(t.formatHTMLMessage({
                            id: 0 == window.Config.OTP.EnableSmsOTP ? "auth26" : "se26"
                        }))
                    }
                })), r.createElement("div", {
                    className: "action",
                    style: {
                        padding: "10px 0"
                    }
                }, r.createElement("span", {
                    className: "button button-action",
                    onClick: this.handleBack
                }, t.formatMessage({
                    id: "se28"
                })), r.createElement("span", {
                    className: "button button-action",
                    onClick: this.handleContinue
                }, t.formatMessage({
                    id: "se62"
                }))))
            }
            ,
            t
        }(r.PureComponent);
        t.a = Object(o.e)(l)
    },
    1139: function(e, t, n) {
        "use strict";
        var a, r = n(0), o = (n.n(r),
        this && this.__extends || (a = function(e, t) {
            return (a = Object.setPrototypeOf || {
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
            a(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
            new n)
        }
        )), s = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.handleInputChange = function(e) {
                    var t = n.props.name
                      , a = e.target.validity.valid ? e.target.value : n.state.financialGoal;
                    n.setState({
                        financialGoal: a
                    }, function() {
                        n.props.onChange(t, a)
                    })
                }
                ,
                n.state = {
                    financialGoal: ""
                },
                n
            }
            return o(t, e),
            t.prototype.render = function() {
                var e = this.props
                  , t = e.message
                  , n = e.autoFocus
                  , a = e.name
                  , o = e.maxlength
                  , s = e.er
                  , i = e.ct;
                return r.createElement("div", {
                    className: "input" + (s ? " has-error" : "")
                }, r.createElement("input", {
                    placeholder: t,
                    type: "text",
                    maxLength: o,
                    autoFocus: n,
                    onChange: this.handleInputChange,
                    name: a,
                    pattern: "[0-9]*",
                    value: this.state.financialGoal
                }), s && r.createElement("span", {
                    className: "error"
                }, i))
            }
            ,
            t
        }(r.PureComponent);
        t.a = s
    },
    1140: function(e, t, n) {
        "use strict";
        var a, r = n(0), o = (n.n(r),
        n(4)), s = n(328), i = this && this.__extends || (a = function(e, t) {
            return (a = Object.setPrototypeOf || {
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
            a(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
            new n)
        }
        ), c = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.handleBack = function(e) {
                    n.props.handlechangeView(0)
                }
                ,
                n.handleContinue = function(e) {
                    var t = n.state.otp;
                    n.props.handContinue(t)
                }
                ,
                n.handleInputChange = function(e, t) {
                    var a;
                    n.setState(((a = {})[e] = t,
                    a))
                }
                ,
                n.state = {
                    otp: ""
                },
                n
            }
            return i(t, e),
            t.prototype.render = function() {
                var e = this.props
                  , t = e.intl
                  , n = e.isTeleSafe
                  , a = e.erOtp
                  , o = e.ctOtp;
                return r.createElement(r.Fragment, null, r.createElement(s.a, {
                    intl: t,
                    inputname: "otp",
                    className: "large",
                    serviceID: 15,
                    showLoading: !0,
                    onChange: this.handleInputChange,
                    autoFocus: !0,
                    isTeleSafe: n,
                    dis: !n && 0 == window.Config.OTP.EnableSmsOTP,
                    isNewLook: !0,
                    erOtp: a,
                    ctOtp: o
                }), r.createElement("div", {
                    className: "guide"
                }, !n && r.createElement("p", {
                    dangerouslySetInnerHTML: {
                        __html: libs.Util.ReplaceMoney(t.formatHTMLMessage({
                            id: 0 == window.Config.OTP.EnableSmsOTP ? "auth26" : "se26"
                        }))
                    }
                }), n && r.createElement("p", {
                    dangerouslySetInnerHTML: {
                        __html: t.formatHTMLMessage({
                            id: "se81"
                        })
                    }
                })), r.createElement("div", {
                    className: "action",
                    style: {
                        padding: "10px 0"
                    }
                }, r.createElement("span", {
                    className: "button button-action",
                    onClick: this.handleBack
                }, t.formatMessage({
                    id: "se28"
                })), r.createElement("span", {
                    className: "button button-action",
                    onClick: this.handleContinue
                }, t.formatMessage({
                    id: "se62"
                }))))
            }
            ,
            t
        }(r.PureComponent);
        t.a = Object(o.e)(c)
    }
});
