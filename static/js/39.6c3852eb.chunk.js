webpackJsonp([39], {
    1153: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a, r = n(0), o = (n.n(r),
        n(4)), s = n(29), i = n(9), l = n(10), c = n(2), u = n(618), h = n(328), p = n(332), d = n(327), m = this && this.__extends || (a = function(e, t) {
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
        ), f = this && this.__awaiter || function(e, t, n, a) {
            return new (n || (n = Promise))(function(r, o) {
                function s(e) {
                    try {
                        l(a.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function i(e) {
                    try {
                        l(a.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function l(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof n ? t : new n(function(e) {
                        e(t)
                    }
                    )).then(s, i)
                }
                l((a = a.apply(e, t || [])).next())
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
        , w = [{
            name: "se09",
            class: "tab-control one-tab"
        }], b = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.handleInputChange = function(e) {
                    var t;
                    n.setState(((t = {})[e.target.name] = e.target.value,
                    t))
                }
                ,
                n.handleLogin = function(e) {
                    return f(n, void 0, void 0, function() {
                        var e, t, n, a, r, o;
                        return g(this, function(s) {
                            switch (s.label) {
                            case 0:
                                return s.trys.push([0, 2, , 3]),
                                this.setState({
                                    showLoading: !0
                                }),
                                this.hideError(),
                                [4, c.a.authenOTP(this.state)];
                            case 1:
                                return e = s.sent(),
                                console.log(e),
                                t = e.c,
                                n = e.d,
                                a = e.m,
                                r = e.p,
                                t < 0 ? (this.setState({
                                    showLoading: !1
                                }),
                                this.showError(t, r),
                                [2]) : (this.props.loginSuccess(n, a, r ? r[0] : ""),
                                this.props.hideProfile(),
                                [3, 3]);
                            case 2:
                                return o = s.sent(),
                                console.error(o),
                                [3, 3];
                            case 3:
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
                    n.setState({
                        showError: !0,
                        errorMessage: a.formatMessage({
                            id: r
                        }, Object.assign({}, t))
                    })
                }
                ,
                n.hideError = function() {
                    n.setState({
                        showError: !1,
                        messageID: ""
                    })
                }
                ,
                n.state = {
                    otp: "",
                    otpType: 3,
                    showError: !1,
                    messageID: "",
                    showLoading: !1
                },
                n
            }
            return m(t, e),
            t.prototype.render = function() {
                var e = this.props.intl
                  , t = this.state
                  , n = t.showError
                  , a = t.errorMessage
                  , o = t.showLoading
                  , i = t.otpType
                  , l = this.props.profileManager.data.username;
                return r.createElement(r.Fragment, null, r.createElement(u.b, {
                    onClick: this.props.hideProfile
                }), r.createElement("div", {
                    className: "dropdown-section secure active",
                    id: "secure"
                }, r.createElement(u.c, {
                    activeIndex: 0,
                    datas: w
                }), r.createElement("div", {
                    className: "tabs",
                    "data-tab": "secure-tab"
                }, r.createElement("div", {
                    className: "tab active"
                }, o && r.createElement(d.a, null), r.createElement("div", {
                    className: "secure"
                }, r.createElement("div", {
                    className: "guide",
                    style: {
                        fontSize: "20px",
                        marginBottom: "10px"
                    }
                }, r.createElement("p", {
                    dangerouslySetInnerHTML: {
                        __html: libs.Util.ReplaceMoney(e.formatHTMLMessage({
                            id: "auth12"
                        }))
                    }
                })), r.createElement("div", {
                    className: "form"
                }, r.createElement("div", {
                    className: "input input-dropdown get-otp",
                    style: {
                        width: "100%"
                    }
                }, r.createElement("div", {
                    className: "box-select"
                }, r.createElement("select", {
                    name: "otpType",
                    onChange: this.handleInputChange
                }, window.Config.OTP.EnableTeleSafe && r.createElement("option", {
                    value: "3"
                }, "TeleSafe"), r.createElement("option", {
                    value: "1"
                }, "SMS OTP"), window.Config.OTP.EnalbeAppOTP && r.createElement("option", {
                    value: "2"
                }, "App OTP"))), (1 == i || 3 == i) && r.createElement(h.a, {
                    intl: e,
                    inputname: "otp",
                    serviceID: p.a.LOGIN_OTP,
                    handleInputChange: this.handleInputChange,
                    autoFocus: !0,
                    notAuthen: !0,
                    username: l,
                    isTeleSafe: 3 == i,
                    dis: 1 == i && 0 == window.Config.OTP.EnableSmsOTP,
                    isSmsPlus: !0
                }), 2 == i && r.createElement(s.b, {
                    maxLength: window.Config.OTP.Max_Length,
                    name: "otp",
                    onChange: this.handleInputChange,
                    autoFocus: !0,
                    messageID: "se37",
                    style: {
                        width: "300px"
                    },
                    isSmsPlus: !0
                }))), r.createElement("div", {
                    className: "guide",
                    style: {
                        fontSize: "20px"
                    }
                }, 2 == i && r.createElement("p", {
                    dangerouslySetInnerHTML: {
                        __html: e.formatHTMLMessage({
                            id: "se33"
                        })
                    }
                }), 1 == i && r.createElement("p", {
                    dangerouslySetInnerHTML: {
                        __html: libs.Util.ReplaceMoney(e.formatHTMLMessage({
                            id: 1 != i || window.Config.OTP.EnableSmsOTP ? "se26" : "auth26"
                        }))
                    }
                }), 3 == i && r.createElement("p", {
                    dangerouslySetInnerHTML: {
                        __html: e.formatHTMLMessage({
                            id: "se81"
                        })
                    }
                })), r.createElement("div", {
                    className: "action",
                    style: {
                        padding: "10px 0"
                    }
                }, r.createElement("span", {
                    className: "button button-change-avt",
                    onClick: this.handleLogin
                }, e.formatHTMLMessage({
                    id: "auth2"
                }))), n && r.createElement("div", {
                    className: "guide",
                    style: {
                        color: "red"
                    }
                }, r.createElement("p", null, a)))))))
            }
            ,
            t
        }(r.PureComponent), E = {
            hideProfile: l.j,
            showProfile: l.w,
            loginSuccess: l.n
        };
        t.default = Object(i.b)(function(e) {
            return {}
        }, E)(Object(o.e)(b))
    }
});
