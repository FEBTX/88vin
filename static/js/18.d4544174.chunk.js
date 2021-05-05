webpackJsonp([18], {
    604: function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i, o = e(0), r = (e.n(o),
        e(9)), c = e(339), a = e(340), s = e.n(a), u = this && this.__extends || (i = function(t, n) {
            return (i = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, n) {
                t.__proto__ = n
            }
            || function(t, n) {
                for (var e in n)
                    n.hasOwnProperty(e) && (t[e] = n[e])
            }
            )(t, n)
        }
        ,
        function(t, n) {
            function e() {
                this.constructor = t
            }
            i(t, n),
            t.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype,
            new e)
        }
        ), l = this && this.__awaiter || function(t, n, e, i) {
            return new (e || (e = Promise))(function(o, r) {
                function c(t) {
                    try {
                        s(i.next(t))
                    } catch (t) {
                        r(t)
                    }
                }
                function a(t) {
                    try {
                        s(i.throw(t))
                    } catch (t) {
                        r(t)
                    }
                }
                function s(t) {
                    var n;
                    t.done ? o(t.value) : (n = t.value,
                    n instanceof e ? n : new e(function(t) {
                        t(n)
                    }
                    )).then(c, a)
                }
                s((i = i.apply(t, n || [])).next())
            }
            )
        }
        , f = this && this.__generator || function(t, n) {
            var e, i, o, r, c = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return r = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" === typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function a(r) {
                return function(a) {
                    return function(r) {
                        if (e)
                            throw new TypeError("Generator is already executing.");
                        for (; c; )
                            try {
                                if (e = 1,
                                i && (o = 2 & r[0] ? i.return : r[0] ? i.throw || ((o = i.return) && o.call(i),
                                0) : i.next) && !(o = o.call(i, r[1])).done)
                                    return o;
                                switch (i = 0,
                                o && (r = [2 & r[0], o.value]),
                                r[0]) {
                                case 0:
                                case 1:
                                    o = r;
                                    break;
                                case 4:
                                    return c.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    c.label++,
                                    i = r[1],
                                    r = [0];
                                    continue;
                                case 7:
                                    r = c.ops.pop(),
                                    c.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = c.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                        c = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                        c.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && c.label < o[1]) {
                                        c.label = o[1],
                                        o = r;
                                        break
                                    }
                                    if (o && c.label < o[2]) {
                                        c.label = o[2],
                                        c.ops.push(r);
                                        break
                                    }
                                    o[2] && c.ops.pop(),
                                    c.trys.pop();
                                    continue
                                }
                                r = n.call(t, c)
                            } catch (t) {
                                r = [6, t],
                                i = 0
                            } finally {
                                e = o = 0
                            }
                        if (5 & r[0])
                            throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, a])
                }
            }
        }
        , p = function(t) {
            function n(n) {
                var e = t.call(this, n) || this;
                return e.checkLoad = function(t) {
                    if (!e.state.isLoadSuccess) {
                        var n = t.isScriptLoaded
                          , i = t.isScriptLoadSucceed;
                        n && i && e.onLoaded()
                    }
                }
                ,
                e.onLoaded = function() {
                    libs.MiniGame.initGame()
                }
                ,
                e.state = {
                    isLoadSuccess: !1
                },
                e
            }
            return u(n, t),
            n.prototype.componentWillReceiveProps = function(t) {
                t.isAuthen && this.checkLoad(t)
            }
            ,
            n.prototype.componentDidMount = function() {
                return l(this, void 0, void 0, function() {
                    return f(this, function(t) {
                        return window.signalR = c,
                        [2]
                    })
                })
            }
            ,
            n.prototype.componentWillUnmount = function() {
                return l(this, void 0, void 0, function() {
                    return f(this, function(t) {
                        try {
                            libs.MiniGame.disGame()
                        } catch (t) {
                            console.error(t)
                        }
                        return [2]
                    })
                })
            }
            ,
            n.prototype.render = function() {
                var t = this.props.setting.locale;
                return o.createElement(o.Fragment, null, o.createElement("div", {
                    className: "overlay-mg tx"
                }), o.createElement("div", {
                    id: "minigame",
                    className: "app mini " + t
                }))
            }
            ,
            n
        }(o.PureComponent);
        n.default = s()(["/minigame/LuckyDice/js/luckydice.min.js", "/minigame/LuckyWild/js/luckywild.min.js", "/minigame/MiniPoker/js/minipoker.min.js", "/minigame/HighLow/js/highlow.min.js", "/minigame/SlotGod/js/slotgod.min.js", "/minigame/Lottery/js/lottery.min.js", "/minigame/CrabFish/js/crabfish.min.js"])(Object(r.b)(function(t) {
            var n = t.authen
              , e = t.setting;
            return {
                isAuthen: n.isAuthen,
                setting: e
            }
        })(p))
    }
});
