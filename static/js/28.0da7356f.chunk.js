webpackJsonp([28], {
    1137: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r, a = n(0), o = (n.n(a),
        n(2)), s = n(618), i = n(9), c = n(10), l = n(620), u = n(1138), h = n(1140), p = n(4), f = n(1), m = n(327), d = n(12), g = this && this.__extends || (r = function(e, t) {
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
        ), v = this && this.__awaiter || function(e, t, n, r) {
            return new (n || (n = Promise))(function(a, o) {
                function s(e) {
                    try {
                        c(r.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function i(e) {
                    try {
                        c(r.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? a(e.value) : (t = e.value,
                    t instanceof n ? t : new n(function(e) {
                        e(t)
                    }
                    )).then(s, i)
                }
                c((r = r.apply(e, t || [])).next())
            }
            )
        }
        , y = this && this.__generator || function(e, t) {
            var n, r, a, o, s = {
                label: 0,
                sent: function() {
                    if (1 & a[0])
                        throw a[1];
                    return a[1]
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
                                r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r),
                                0) : r.next) && !(a = a.call(r, o[1])).done)
                                    return a;
                                switch (r = 0,
                                a && (o = [2 & o[0], a.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    a = o;
                                    break;
                                case 4:
                                    return s.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++,
                                    r = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = s.ops.pop(),
                                    s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = (a = s.trys).length > 0 && a[a.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                        s.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && s.label < a[1]) {
                                        s.label = a[1],
                                        a = o;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2],
                                        s.ops.push(o);
                                        break
                                    }
                                    a[2] && s.ops.pop(),
                                    s.trys.pop();
                                    continue
                                }
                                o = t.call(e, s)
                            } catch (e) {
                                o = [6, e],
                                r = 0
                            } finally {
                                n = a = 0
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
        , E = this && this.__spreadArrays || function() {
            for (var e = 0, t = 0, n = arguments.length; t < n; t++)
                e += arguments[t].length;
            var r = Array(e)
              , a = 0;
            for (t = 0; t < n; t++)
                for (var o = arguments[t], s = 0, i = o.length; s < i; s++,
                a++)
                    r[a] = o[s];
            return r
        }
        , w = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.hanleChangeBlock = function(e) {
                    var t = n.state.list.find(function(t) {
                        return t.GameID === e
                    });
                    t && (t.Blocked = !t.Blocked)
                }
                ,
                n.handleSave = function(e) {
                    return v(n, void 0, void 0, function() {
                        var e, t, n, r, a, s, i, c, l;
                        return y(this, function(u) {
                            switch (u.label) {
                            case 0:
                                if (this.setState({
                                    showLoading: !0,
                                    showSuccess: !1
                                }),
                                this.hideError(),
                                0 === this.props.account.securityStatus)
                                    return this.showError(-251),
                                    [2];
                                u.label = 1;
                            case 1:
                                return u.trys.push([1, 3, , 4]),
                                e = this.state.list,
                                t = e.filter(function(e) {
                                    return !0 === e.Blocked
                                }),
                                n = t.map(function(e) {
                                    return e.GameID
                                }).join(","),
                                r = this.state,
                                a = r.otpType,
                                s = r.otp,
                                [4, o.h.blockGames(n, Number(a), s)];
                            case 2:
                                return i = u.sent(),
                                (c = i.c) < 0 ? (this.showError(c),
                                this.setState({
                                    showLoading: !1
                                }),
                                [2]) : (this.setState({
                                    showSuccess: !0,
                                    otp: ""
                                }),
                                [3, 4]);
                            case 3:
                                return l = u.sent(),
                                console.error(l),
                                [3, 4];
                            case 4:
                                return this.setState({
                                    showLoading: !1
                                }),
                                this.hideError(),
                                [2]
                            }
                        })
                    })
                }
                ,
                n.handleInputChange = function(e) {
                    var t;
                    console.log(e.target.type),
                    n.setState(((t = {})[e.target.name] = "checkbox" === e.target.type ? e.target.checked : e.target.value,
                    t))
                }
                ,
                n.showError = function(e) {
                    var t = "me" + e;
                    n.setState({
                        showError: !0,
                        messageID: t,
                        showLoading: !1
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
                    list: [],
                    otp: "",
                    otpType: 1,
                    showError: !1,
                    messageID: "",
                    showSuccess: !1
                },
                n
            }
            return g(t, e),
            t.prototype.componentDidMount = function() {
                return v(this, void 0, void 0, function() {
                    return y(this, function(e) {
                        return this.getListGame(),
                        [2]
                    })
                })
            }
            ,
            t.prototype.getListGame = function() {
                return v(this, void 0, void 0, function() {
                    var e, t, n, r, a, s, i, c, l, u;
                    return y(this, function(h) {
                        switch (h.label) {
                        case 0:
                            return h.trys.push([0, 2, , 3]),
                            [4, o.h.GetListGame()];
                        case 1:
                            if (e = h.sent(),
                            t = e.c,
                            n = e.d,
                            t < 0)
                                return [2];
                            for (r = [],
                            a = this.props.intl,
                            s = 0,
                            i = n; s < i.length; s++)
                                (c = i[s]).GameID = c.gameID,
                                c.Type = c.type,
                                "" !== (l = d.a.gameIDtoName(c.gameID, window.Config.PortalID)) && (c.Name = a.formatMessage({
                                    id: l
                                }),
                                c.Blocked = !c.enable,
                                r = E(r, [c]));
                            return this.setState({
                                list: r
                            }),
                            [3, 3];
                        case 2:
                            return u = h.sent(),
                            console.log(u),
                            [3, 3];
                        case 3:
                            return [2]
                        }
                    })
                })
            }
            ,
            t.prototype.render = function() {
                var e, t = this.props.intl, n = this.state, r = n.list, o = n.showLoading, i = n.showError, c = n.messageID, p = n.showSuccess;
                return e = a.createElement(l.a, {
                    activeIndex: 4
                }),
                a.createElement("div", null, o && a.createElement(m.a, null), a.createElement(s.b, {
                    onClick: this.props.hideProfile
                }), a.createElement(s.a, {
                    onClick: this.props.showProfile,
                    to: f.k.PROFILE
                }), a.createElement("div", {
                    className: "dropdown-section secure active"
                }, e, a.createElement("div", {
                    className: "tabs"
                }, a.createElement("div", {
                    className: "tab active"
                }, a.createElement("div", {
                    className: "game-manage"
                }, a.createElement("div", {
                    className: "guide"
                }, a.createElement("p", null, a.createElement("span", null, t.formatHTMLMessage({
                    id: "se18"
                }))), a.createElement("p", null, t.formatHTMLMessage({
                    id: "se67"
                }))), a.createElement(u.a, {
                    datas: r,
                    hanleChangeBlock: this.hanleChangeBlock
                }), a.createElement(h.a, {
                    onChange: this.handleInputChange
                }), a.createElement("div", {
                    className: "action",
                    style: {
                        padding: "10px 0"
                    }
                }, a.createElement("span", {
                    className: "button button-submit",
                    onClick: this.handleSave
                }, t.formatMessage({
                    id: "se25"
                }))), i && a.createElement("div", {
                    className: "guide",
                    style: {
                        color: "red"
                    }
                }, t.formatMessage({
                    id: c
                })), p && a.createElement("div", {
                    className: "guide",
                    style: {
                        color: "green"
                    }
                }, t.formatMessage({
                    id: "se51"
                })))))))
            }
            ,
            t
        }(a.PureComponent), b = {
            hideProfile: c.j,
            showProfile: c.w
        };
        t.default = Object(i.b)(function(e) {
            return {
                account: e.authen.accountInfo
            }
        }, b)(Object(p.e)(w))
    },
    1138: function(e, t, n) {
        "use strict";
        var r = n(1139);
        n.d(t, "a", function() {
            return r.a
        })
    },
    1139: function(e, t, n) {
        "use strict";
        var r, a = n(0), o = (n.n(a),
        this && this.__extends || (r = function(e, t) {
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
        )), s = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.renderItem = function() {
                    var e = t.props.datas;
                    return console.log(e),
                    e.map(function(e, n) {
                        var r = e.Name
                          , o = e.Blocked
                          , s = e.GameID;
                        return a.createElement("div", {
                            className: "checkbox",
                            key: n
                        }, a.createElement("input", {
                            id: "gmn-" + s,
                            type: "checkbox",
                            defaultChecked: !o,
                            value: "checkbox",
                            name: "checkbox",
                            onChange: t.props.hanleChangeBlock.bind(t, s)
                        }), a.createElement("label", {
                            htmlFor: "gmn-" + s
                        }, r))
                    })
                }
                ,
                t
            }
            return o(t, e),
            t.prototype.render = function() {
                return a.createElement("div", {
                    className: "manage"
                }, this.renderItem())
            }
            ,
            t
        }(a.PureComponent);
        t.a = s
    },
    1140: function(e, t, n) {
        "use strict";
        var r, a = n(0), o = (n.n(a),
        n(4)), s = n(328), i = this && this.__extends || (r = function(e, t) {
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
        ), c = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.handleChange = function(e) {
                    var t;
                    n.props.onChange(e),
                    n.otp.current && n.otp.current.focus();
                    var r = e.target.name;
                    n.setState(((t = {})[r] = e.target.value,
                    t))
                }
                ,
                n.state = {
                    otpType: 3
                },
                n.otp = a.createRef(),
                n.smsOTP = a.createRef(),
                n
            }
            return i(t, e),
            t.prototype.render = function() {
                var e = this.state.otpType
                  , t = this.props.intl;
                return a.createElement("div", null, a.createElement("div", {
                    className: "form"
                }, a.createElement("div", {
                    className: "input input-dropdown get-otp",
                    style: {
                        width: "700px"
                    }
                }, a.createElement("div", {
                    className: "box-select"
                }, a.createElement("select", {
                    name: "otpType",
                    onChange: this.handleChange
                }, window.Config.OTP.EnableTeleSafe && a.createElement("option", {
                    value: "3"
                }, "TeleSafe"), a.createElement("option", {
                    value: "1"
                }, "SMS OTP"), window.Config.OTP.EnalbeAppOTP && a.createElement("option", {
                    value: "2"
                }, "App OTP"))), 2 == e && a.createElement("input", {
                    maxLength: window.Config.OTP.Max_Length,
                    type: "text",
                    name: "otp",
                    autoFocus: !0,
                    onChange: this.handleChange,
                    ref: this.otp
                }), (1 == e || 3 == e) && a.createElement(s.a, {
                    intl: t,
                    inputname: "otp",
                    className: "large",
                    serviceID: 15,
                    handleInputChange: this.handleChange,
                    isTeleSafe: 3 == e,
                    ref: this.smsOTP,
                    dis: 1 == e && 0 == window.Config.OTP.EnableSmsOTP,
                    isNewGameManager: !0
                })), a.createElement("div", {
                    className: "guide"
                }, 2 == e && a.createElement("div", {
                    style: {
                        paddingTop: "10px",
                        paddingBottom: "0px"
                    },
                    className: "sendsms1"
                }, a.createElement("div", {
                    dangerouslySetInnerHTML: {
                        __html: t.formatHTMLMessage({
                            id: "se33"
                        })
                    }
                })), 1 == e && a.createElement("div", {
                    className: "box4"
                }, a.createElement("p", {
                    dangerouslySetInnerHTML: {
                        __html: libs.Util.ReplaceMoney(t.formatHTMLMessage({
                            id: 1 == e && 0 == window.Config.OTP.EnableSmsOTP ? "auth26" : "se26"
                        }))
                    }
                })), 3 == e && a.createElement("div", {
                    className: "box4"
                }, a.createElement("p", {
                    dangerouslySetInnerHTML: {
                        __html: t.formatHTMLMessage({
                            id: "se81"
                        })
                    }
                })))))
            }
            ,
            t
        }(a.PureComponent);
        t.a = Object(o.e)(c)
    }
});
