webpackJsonp([27], {
    1149: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r, a = n(0), s = (n.n(a),
        n(618)), o = n(1), i = n(9), c = n(10), l = n(626), u = n(4), h = n(1150), p = n(2), d = n(327), m = this && this.__extends || (r = function(e, t) {
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
        ), f = this && this.__awaiter || function(e, t, n, r) {
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
        , g = this && this.__generator || function(e, t) {
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
        , w = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.getInfo = function() {
                    return f(n, void 0, void 0, function() {
                        var e, t, n;
                        return g(this, function(r) {
                            switch (r.label) {
                            case 0:
                                this.setState({
                                    showLoading: !0
                                }),
                                r.label = 1;
                            case 1:
                                return r.trys.push([1, 3, , 4]),
                                [4, p.h.getSMSInfo()];
                            case 2:
                                return e = r.sent(),
                                t = e.d,
                                this.setState({
                                    view: t.find(function(e) {
                                        return 1 === e.serviceID
                                    }) ? 1 : 0,
                                    data: t[0]
                                }),
                                [3, 4];
                            case 3:
                                return n = r.sent(),
                                console.error(n),
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
                n.handleRegister = function() {
                    return f(n, void 0, void 0, function() {
                        var e, t, n;
                        return g(this, function(r) {
                            switch (r.label) {
                            case 0:
                                if (this.setState({
                                    showLoading: !0
                                }),
                                this.hideError(),
                                0 === this.props.account.securityStatus)
                                    return this.showError(-251),
                                    [2];
                                r.label = 1;
                            case 1:
                                return r.trys.push([1, 3, , 4]),
                                [4, p.h.smsCreateService()];
                            case 2:
                                return e = r.sent(),
                                (t = e.c) < 0 ? (this.setState({
                                    showLoading: !1
                                }),
                                this.showError(t),
                                [2]) : (this.getInfo(),
                                [3, 4]);
                            case 3:
                                return n = r.sent(),
                                console.error(n),
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
                n.showError = function(e) {
                    var t = "me" + e
                      , r = n.props.intl;
                    -6 !== e && -7 !== e ? n.setState({
                        showError: !0,
                        messageID: t,
                        showSuccess: !1,
                        showLoading: !1
                    }) : n.setState({
                        erOtp: !0,
                        ctOtp: r.formatMessage({
                            id: t
                        })
                    })
                }
                ,
                n.hideError = function() {
                    n.setState({
                        showError: !1,
                        messageID: "",
                        showSuccess: !1,
                        erG: !1,
                        ctG: "",
                        erOtp: !1,
                        ctOtp: ""
                    })
                }
                ,
                n.onChange = function(e) {
                    return f(n, void 0, void 0, function() {
                        var t, n, r, a, s, o, i;
                        return g(this, function(c) {
                            switch (c.label) {
                            case 0:
                                if (this.setState({
                                    showLoading: !0
                                }),
                                this.hideError(),
                                t = e.gam,
                                n = e.otp,
                                r = e.otpType,
                                a = this.props.intl,
                                !t || Number(t) <= 0)
                                    return this.setState({
                                        erG: !0,
                                        ctG: a.formatMessage({
                                            id: "me-60"
                                        })
                                    }),
                                    [2];
                                if (!n || "" === n.trim())
                                    return this.setState({
                                        erOtp: !0,
                                        ctOtp: a.formatMessage({
                                            id: "me-1019"
                                        })
                                    }),
                                    [2];
                                c.label = 1;
                            case 1:
                                return c.trys.push([1, 3, , 4]),
                                [4, p.h.smsChangeMinAmount(Number(t), n, r)];
                            case 2:
                                return s = c.sent(),
                                (o = s.c) < 0 ? (this.setState({
                                    showLoading: !1
                                }),
                                this.showError(o),
                                [2]) : (this.setState({
                                    showSuccess: !0
                                }),
                                [3, 4]);
                            case 3:
                                return i = c.sent(),
                                console.error(i),
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
                n.onCancel = function(e) {
                    return f(n, void 0, void 0, function() {
                        var t, n, r, a, s, o;
                        return g(this, function(i) {
                            switch (i.label) {
                            case 0:
                                if (this.setState({
                                    showLoading: !0
                                }),
                                this.hideError(),
                                t = e.otp,
                                n = e.otpType,
                                r = this.props.intl,
                                !t || "" === t.trim())
                                    return this.setState({
                                        erOtp: !0,
                                        ctOtp: r.formatMessage({
                                            id: "me-1019"
                                        })
                                    }),
                                    [2];
                                i.label = 1;
                            case 1:
                                return i.trys.push([1, 3, , 4]),
                                [4, p.h.smsCancelService(t, n)];
                            case 2:
                                return a = i.sent(),
                                (s = a.c) < 0 ? (this.setState({
                                    showLoading: !1
                                }),
                                this.showError(s),
                                [2]) : (this.getInfo(),
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
                n.state = {
                    showError: !1,
                    showSuccess: !1,
                    messageID: "",
                    view: 0,
                    data: [],
                    showLoading: !1,
                    erG: !1,
                    ctG: "",
                    erOtp: !1,
                    ctOtp: ""
                },
                n
            }
            return m(t, e),
            t.prototype.componentDidMount = function() {
                this.getInfo()
            }
            ,
            t.prototype.render = function() {
                var e = this.state
                  , t = e.showError
                  , n = e.messageID
                  , r = e.view
                  , i = e.data
                  , c = e.showSuccess
                  , p = e.showLoading
                  , m = e.erG
                  , f = e.ctG
                  , g = e.erOtp
                  , w = e.ctOtp;
                return a.createElement(a.Fragment, null, p && a.createElement(d.a, null), a.createElement(s.b, {
                    onClick: this.props.hideProfile
                }), a.createElement(s.a, {
                    onClick: this.props.showProfile,
                    to: o.k.PROFILE
                }), a.createElement("div", {
                    className: "dropdown-section secure active",
                    id: "secure"
                }, a.createElement(l.a, {
                    activeIndex: 2
                }), a.createElement("div", {
                    className: "tabs",
                    "data-tab": "secure-tab"
                }, a.createElement("div", {
                    className: "tab active"
                }, a.createElement("div", {
                    className: "secure"
                }, 0 === r && a.createElement(h.b, {
                    handleRegister: this.handleRegister
                }), 1 === r && a.createElement(h.a, {
                    account: i,
                    onChange: this.onChange,
                    onCancel: this.onCancel,
                    erG: m,
                    ctG: f,
                    erOtp: g,
                    ctOtp: w,
                    hide: this.hideError
                }), t && a.createElement("div", {
                    className: "guide",
                    style: {
                        color: "red"
                    }
                }, a.createElement(u.b, {
                    id: n
                })), c && a.createElement("div", {
                    className: "guide",
                    style: {
                        color: "green"
                    }
                }, a.createElement(u.b, {
                    id: "se51"
                })))))))
            }
            ,
            t
        }(a.PureComponent), y = {
            hideProfile: c.j,
            showProfile: c.w,
            gAI: c.g,
            loading: c.k,
            unloading: c.C
        };
        t.default = Object(i.b)(function(e) {
            return {
                account: e.authen.accountInfo
            }
        }, y)(Object(u.e)(w))
    },
    1150: function(e, t, n) {
        "use strict";
        var r = n(1151)
          , a = n(1152);
        n.d(t, "b", function() {
            return r.a
        }),
        n.d(t, "a", function() {
            return a.a
        })
    },
    1151: function(e, t, n) {
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
        ), i = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.handleRegister = function(e) {
                    t.props.handleRegister()
                }
                ,
                t
            }
            return o(t, e),
            t.prototype.render = function() {
                var e = this.props.intl;
                return a.createElement(a.Fragment, null, a.createElement("div", {
                    className: "guide",
                    style: {
                        fontSize: "20px",
                        marginBottom: "10px"
                    }
                }, a.createElement("p", {
                    dangerouslySetInnerHTML: {
                        __html: libs.Util.ReplaceMoney(e.formatHTMLMessage({
                            id: "se23"
                        }))
                    }
                })), a.createElement("div", {
                    className: "action",
                    style: {
                        padding: "10px 0"
                    }
                }, a.createElement("span", {
                    className: "button button-submit",
                    onClick: this.props.handleRegister
                }, e.formatMessage({
                    id: "auth4"
                }))))
            }
            ,
            t
        }(a.PureComponent);
        t.a = Object(s.e)(i)
    },
    1152: function(e, t, n) {
        "use strict";
        var r, a = n(0), s = (n.n(a),
        n(4)), o = n(328), i = n(332), c = n(29), l = this && this.__extends || (r = function(e, t) {
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
        ), u = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.handleInputChange = function(e) {
                    var t;
                    n.props.hide(),
                    n.setState(((t = {})[e.target.name] = e.target.value,
                    t))
                }
                ,
                n.handleSave = function(e) {
                    n.props.onChange(n.state)
                }
                ,
                n.handleCancel = function(e) {
                    n.props.onCancel(n.state)
                }
                ,
                n.state = {
                    gam: 0,
                    otpType: 3,
                    otp: ""
                },
                n
            }
            return l(t, e),
            t.prototype.componentDidMount = function() {
                var e = this.props.account.minAmount;
                this.setState({
                    gam: e || 0
                })
            }
            ,
            t.prototype.render = function() {
                var e = this.props
                  , t = e.intl
                  , n = e.erG
                  , r = e.ctG
                  , s = e.erOtp
                  , l = e.ctOtp
                  , u = this.state
                  , h = u.gam
                  , p = u.otpType;
                return a.createElement(a.Fragment, null, a.createElement("div", {
                    className: "guide",
                    style: {
                        fontSize: "20px",
                        marginBottom: "10px"
                    }
                }, a.createElement("p", {
                    dangerouslySetInnerHTML: {
                        __html: libs.Util.ReplaceMoney(t.formatHTMLMessage({
                            id: "se23"
                        }))
                    }
                })), a.createElement("div", {
                    className: "inf-row"
                }, a.createElement("p", null, a.createElement("span", null, t.formatMessage({
                    id: "se38"
                })), " ", a.createElement("span", null, t.formatMessage({
                    id: "se13"
                })))), a.createElement("div", {
                    className: "form"
                }, a.createElement("div", {
                    className: "input" + (n ? " has-error" : ""),
                    style: {
                        width: "100%"
                    }
                }, a.createElement("label", {
                    style: {
                        fontSize: "20px",
                        display: "inline-block",
                        paddingBottom: "5px"
                    }
                }, libs.Util.ReplaceMoney(t.formatMessage({
                    id: "se58"
                }))), a.createElement("input", {
                    type: "text",
                    value: h,
                    maxLength: 10,
                    autoFocus: !0,
                    name: "gam",
                    onChange: this.handleInputChange,
                    placeholder: "0"
                }), n && a.createElement("span", {
                    className: "error"
                }, r)), a.createElement("div", {
                    className: "input input-dropdown get-otp" + (s ? " has-error" : ""),
                    style: {
                        width: "100%"
                    }
                }, a.createElement("div", {
                    className: "box-select"
                }, a.createElement("select", {
                    name: "otpType",
                    onChange: this.handleInputChange
                }, window.Config.OTP.EnableTeleSafe && a.createElement("option", {
                    value: "3"
                }, "TeleSafe"), a.createElement("option", {
                    value: "1"
                }, "SMS OTP"), window.Config.OTP.EnalbeAppOTP && a.createElement("option", {
                    value: "2"
                }, "App OTP"))), (1 == p || 3 == p) && a.createElement(o.a, {
                    intl: t,
                    inputname: "otp",
                    serviceID: i.a.SMSPLUS,
                    showLoading: !0,
                    handleInputChange: this.handleInputChange,
                    isTeleSafe: 3 == p,
                    dis: 1 == p && !window.Config.OTP.EnableSmsOTP,
                    isSmsPlus: !0,
                    erOtp: s,
                    ctOtp: l
                }), 2 == p && a.createElement(c.b, {
                    maxLength: window.Config.OTP.Max_Length,
                    name: "otp",
                    onChange: this.handleInputChange,
                    autoFocus: !0,
                    messageID: "se37",
                    style: {
                        width: "300px"
                    },
                    isSmsPlus: !0
                }))), a.createElement("div", {
                    className: "guide",
                    style: {
                        fontSize: "20px"
                    }
                }, 2 == p && a.createElement("p", {
                    dangerouslySetInnerHTML: {
                        __html: t.formatHTMLMessage({
                            id: "se33"
                        })
                    }
                }), 1 == p && a.createElement("p", {
                    dangerouslySetInnerHTML: {
                        __html: libs.Util.ReplaceMoney(t.formatHTMLMessage({
                            id: 1 != p || window.Config.OTP.EnableSmsOTP ? "se26" : "auth26"
                        }))
                    }
                }), 3 == p && a.createElement("p", {
                    dangerouslySetInnerHTML: {
                        __html: t.formatHTMLMessage({
                            id: "se81"
                        })
                    }
                })), a.createElement("div", {
                    className: "action",
                    style: {
                        padding: "10px 0"
                    }
                }, a.createElement("span", {
                    className: "button button-action",
                    onClick: this.handleSave
                }, t.formatHTMLMessage({
                    id: "se25"
                })), a.createElement("span", {
                    className: "button button-action",
                    onClick: this.handleCancel
                }, t.formatHTMLMessage({
                    id: "se32"
                }))))
            }
            ,
            t
        }(a.PureComponent);
        t.a = Object(s.e)(u)
    }
});
