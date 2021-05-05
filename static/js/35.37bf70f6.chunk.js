webpackJsonp([35], {
    1157: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, a = r(0), s = (r.n(a),
        r(4)), o = r(9), i = r(10), c = r(5), u = r(2), l = r(12), f = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var r in t)
                    t.hasOwnProperty(r) && (e[r] = t[r])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function r() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype,
            new r)
        }
        ), d = this && this.__awaiter || function(e, t, r, n) {
            return new (r || (r = Promise))(function(a, s) {
                function o(e) {
                    try {
                        c(n.next(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function i(e) {
                    try {
                        c(n.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? a(e.value) : (t = e.value,
                    t instanceof r ? t : new r(function(e) {
                        e(t)
                    }
                    )).then(o, i)
                }
                c((n = n.apply(e, t || [])).next())
            }
            )
        }
        , h = this && this.__generator || function(e, t) {
            var r, n, a, s, o = {
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
                        if (r)
                            throw new TypeError("Generator is already executing.");
                        for (; o; )
                            try {
                                if (r = 1,
                                n && (a = 2 & s[0] ? n.return : s[0] ? n.throw || ((a = n.return) && a.call(n),
                                0) : n.next) && !(a = a.call(n, s[1])).done)
                                    return a;
                                switch (n = 0,
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
                                    n = s[1],
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
                                n = 0
                            } finally {
                                r = a = 0
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
        , p = function(e) {
            function t(t) {
                var r = e.call(this, t) || this;
                return r.getCaptcha = function(e) {
                    return void 0 === e && (e = !1),
                    d(r, void 0, void 0, function() {
                        var t, r, n, a;
                        return h(this, function(s) {
                            switch (s.label) {
                            case 0:
                                t = this.state.verify,
                                s.label = 1;
                            case 1:
                                return s.trys.push([1, 3, , 4]),
                                r = window.Config.GAME_CAPTCHA_API + "GetNum?height=30&width=90&verify=" + t,
                                [4, Object(c.b)(r)];
                            case 2:
                                return n = s.sent(),
                                this.setState({
                                    verify: n.d[0],
                                    src: "data:image/jpeg;base64," + n.d[1]
                                }),
                                e && this.refCaptcha.current.focus(),
                                [3, 4];
                            case 3:
                                return a = s.sent(),
                                console.error(a),
                                [3, 4];
                            case 4:
                                return [2]
                            }
                        })
                    })
                }
                ,
                r.handleInputChange = function(e) {
                    var t, n = e.target.name;
                    r.setState(((t = {})[n] = e.target.value,
                    t))
                }
                ,
                r.handleReceive = function() {
                    return d(r, void 0, void 0, function() {
                        var e, t, r, n, a, s, o, i, c, f, d, p = this;
                        return h(this, function(h) {
                            switch (h.label) {
                            case 0:
                                this.hideError(),
                                this.loading(),
                                h.label = 1;
                            case 1:
                                return h.trys.push([1, 3, , 4]),
                                [4, u.d.useGiftCode(this.state)];
                            case 2:
                                if (e = h.sent(),
                                t = e.c,
                                r = e.d,
                                t < 0)
                                    return this.unloading(),
                                    this.showError(t),
                                    [2];
                                if (0 === (n = this.state.listVips).length)
                                    return [2];
                                for (a = this.props.intl,
                                s = a.formatMessage({
                                    id: "cod12"
                                }),
                                s += "<br/>",
                                o = function(e) {
                                    var t = e.giftTypeID
                                      , n = e.currencyID
                                      , o = e.roomID
                                      , i = e.gameID
                                      , c = l.a.getRoombyID(o)
                                      , u = r.find(function(e) {
                                        return e.giftTypeID === t
                                    });
                                    if (console.log("prize", e, u),
                                    !u)
                                        return "continue";
                                    var f = u.value
                                      , d = "";
                                    if (n > 0 && (d = 1 == n ? "VND" : "USD"),
                                    1 == t)
                                        s += libs.Util.ReplaceMoney(a.formatMessage({
                                            id: "cod21"
                                        }, {
                                            0: l.a.formatNumber(f)
                                        })),
                                        s += "<br/>";
                                    else if (2 == t)
                                        s += a.formatMessage({
                                            id: "cod23"
                                        }, {
                                            0: l.a.formatNumber(Number(Math.floor(f / window.Config.VIPPOINT_RATE)))
                                        }),
                                        s += "<br/>";
                                    else if (11 == t || 12 == t)
                                        s += libs.Util.ReplaceMoney(a.formatMessage({
                                            id: "cod22"
                                        }, {
                                            0: l.a.formatNumber(f),
                                            1: d
                                        }));
                                    else if (t >= 20111 && t <= 20132)
                                        s += a.formatMessage({
                                            id: "cod24"
                                        }, {
                                            0: l.a.formatNumber(f),
                                            1: c,
                                            2: d
                                        });
                                    else if (t >= 20311 && t <= 20332)
                                        s += a.formatMessage({
                                            id: "cod25"
                                        }, {
                                            0: l.a.formatNumber(f),
                                            1: c,
                                            2: d
                                        });
                                    else if (t >= 20511 && t <= 20532)
                                        s += a.formatMessage({
                                            id: "cod26"
                                        }, {
                                            0: l.a.formatNumber(f),
                                            1: c,
                                            2: d
                                        });
                                    else if (t >= 20711 && t <= 20732)
                                        s += a.formatMessage({
                                            id: "cod27"
                                        }, {
                                            0: l.a.formatNumber(f),
                                            1: c,
                                            2: d
                                        });
                                    else if (t >= 40011 && t <= 40032) {
                                        var h = 1 == o ? "10.000" : 2 == o ? "50.000" : "100.000";
                                        s += a.formatMessage({
                                            id: "cod28"
                                        }, {
                                            0: l.a.formatNumber(f),
                                            1: h,
                                            2: d
                                        })
                                    } else if (t >= 40311 && t <= 40352) {
                                        h = l.a.getTournamentPokerRoom(o);
                                        s += a.formatMessage({
                                            id: "cod29"
                                        }, {
                                            0: l.a.formatNumber(f),
                                            1: h,
                                            2: d
                                        })
                                    } else if (t >= 60111 && t <= 60512) {
                                        var p = "";
                                        switch (i) {
                                        case 601:
                                            p = "na19";
                                            break;
                                        case 603:
                                            p = "na20";
                                            break;
                                        default:
                                            p = "na" + i
                                        }
                                        s += a.formatMessage({
                                            id: "cod30"
                                        }, {
                                            0: l.a.formatNumber(f),
                                            1: d,
                                            2: a.formatMessage({
                                                id: p
                                            })
                                        })
                                    }
                                    n > 0 && (s += "<br/>")
                                }
                                ,
                                i = 0,
                                c = n; i < c.length; i++)
                                    f = c[i],
                                    o(f);
                                return this.setState({
                                    showSuccess: !0,
                                    successMessage: s
                                }),
                                setTimeout(function() {
                                    p.props.gAI()
                                }, 1e3),
                                [3, 4];
                            case 3:
                                return d = h.sent(),
                                console.log(d),
                                [3, 4];
                            case 4:
                                return this.unloading(),
                                [2]
                            }
                        })
                    })
                }
                ,
                r.showError = function(e, t) {
                    var n = r.props.intl
                      , a = libs.Util.ReplaceMoney(n.formatMessage({
                        id: "me" + e
                    }));
                    r.setState({
                        showError: !0,
                        errMessage: a
                    })
                }
                ,
                r.hideError = function() {
                    r.setState({
                        showError: !1,
                        showSuccess: !1
                    })
                }
                ,
                r.loading = function() {
                    r.setState({
                        loading: !0
                    })
                }
                ,
                r.unloading = function() {
                    r.setState({
                        loading: !1
                    })
                }
                ,
                r.handleBack = function() {
                    r.setState({
                        showSuccess: !1
                    }),
                    setTimeout(function() {
                        r.getCaptcha(!0)
                    }, 200)
                }
                ,
                r.state = {
                    verify: "",
                    src: "",
                    code: "",
                    captcha: "",
                    showError: !1,
                    errMessage: "",
                    showSuccess: !1,
                    successMessage: "",
                    loading: !1,
                    listVips: []
                },
                r.refCaptcha = a.createRef(),
                r
            }
            return f(t, e),
            t.prototype.componentDidMount = function() {
                return d(this, void 0, void 0, function() {
                    var e, t, r, n;
                    return h(this, function(a) {
                        switch (a.label) {
                        case 0:
                            return a.trys.push([0, 2, , 3]),
                            [4, u.d.getGiftType()];
                        case 1:
                            return e = a.sent(),
                            t = e.c,
                            r = e.d,
                            t < 0 ? [2] : (this.setState({
                                listVips: r
                            }),
                            [3, 3]);
                        case 2:
                            return n = a.sent(),
                            console.error(n),
                            [3, 3];
                        case 3:
                            return [2]
                        }
                    })
                })
            }
            ,
            t.prototype.componentDidUpdate = function() {
                l.a.updateScroll("scroll")
            }
            ,
            t.prototype.render = function() {
                var e = this.props.intl
                  , t = this.state
                  , r = t.showError
                  , n = t.errMessage
                  , s = t.showSuccess
                  , o = t.successMessage;
                return a.createElement("div", {
                    className: "popup-small popup-git show"
                }, a.createElement("p", {
                    className: "tit"
                }, e.formatMessage({
                    id: "cod00"
                })), s && a.createElement("div", {
                    className: "fit-content fit-git"
                }, a.createElement("div", {
                    className: "warning",
                    style: {
                        display: "flex",
                        justifyContent: "center"
                    },
                    dangerouslySetInnerHTML: {
                        __html: o
                    }
                })), !s && a.createElement("div", {
                    className: "fit-content fit-captcha"
                }, a.createElement("div", {
                    className: "row"
                }, a.createElement("div", {
                    className: "input"
                }, a.createElement("input", {
                    type: "text",
                    id: "txtGifCode",
                    placeholder: e.formatMessage({
                        id: "cod00"
                    }),
                    name: "code",
                    maxLength: 15,
                    autoFocus: !0,
                    onChange: this.handleInputChange
                })))), a.createElement("div", {
                    className: "confirm"
                }, s && a.createElement("span", {
                    className: "button button-confirm",
                    onClick: this.handleBack
                }, e.formatMessage({
                    id: "se28"
                })), !s && a.createElement("span", {
                    className: "button button-confirm",
                    onClick: this.handleReceive
                }, e.formatMessage({
                    id: "ib9"
                })), !s && a.createElement("span", {
                    className: "button button-cancel",
                    onClick: this.props.hideProfile
                }, e.formatMessage({
                    id: "ib15"
                }))), r && a.createElement("span", {
                    className: "warning",
                    style: {
                        display: "flex",
                        justifyContent: "center"
                    }
                }, n))
            }
            ,
            t
        }(a.PureComponent), m = {
            hideProfile: i.j,
            gAI: i.g
        };
        t.default = Object(o.b)(function(e) {
            return {}
        }, m)(Object(s.e)(p))
    }
});
