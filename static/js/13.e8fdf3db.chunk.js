webpackJsonp([13], {
    598: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, r = a(0), o = (a.n(r),
        a(9)), i = a(4), s = a(2), l = a(10), p = a(908), u = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var a in t)
                    t.hasOwnProperty(a) && (e[a] = t[a])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function a() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype,
            new a)
        }
        ), c = this && this.__awaiter || function(e, t, a, n) {
            return new (a || (a = Promise))(function(r, o) {
                function i(e) {
                    try {
                        l(n.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function s(e) {
                    try {
                        l(n.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function l(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof a ? t : new a(function(e) {
                        e(t)
                    }
                    )).then(i, s)
                }
                l((n = n.apply(e, t || [])).next())
            }
            )
        }
        , g = this && this.__generator || function(e, t) {
            var a, n, r, o, i = {
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
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" === typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function s(o) {
                return function(s) {
                    return function(o) {
                        if (a)
                            throw new TypeError("Generator is already executing.");
                        for (; i; )
                            try {
                                if (a = 1,
                                n && (r = 2 & o[0] ? n.return : o[0] ? n.throw || ((r = n.return) && r.call(n),
                                0) : n.next) && !(r = r.call(n, o[1])).done)
                                    return r;
                                switch (n = 0,
                                r && (o = [2 & o[0], r.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return i.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++,
                                    n = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = i.ops.pop(),
                                    i.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = i.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        i.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && i.label < r[1]) {
                                        i.label = r[1],
                                        r = o;
                                        break
                                    }
                                    if (r && i.label < r[2]) {
                                        i.label = r[2],
                                        i.ops.push(o);
                                        break
                                    }
                                    r[2] && i.ops.pop(),
                                    i.trys.pop();
                                    continue
                                }
                                o = t.call(e, i)
                            } catch (e) {
                                o = [6, e],
                                n = 0
                            } finally {
                                a = r = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, s])
                }
            }
        }
        , f = this && this.__spreadArrays || function() {
            for (var e = 0, t = 0, a = arguments.length; t < a; t++)
                e += arguments[t].length;
            var n = Array(e)
              , r = 0;
            for (t = 0; t < a; t++)
                for (var o = arguments[t], i = 0, s = o.length; i < s; i++,
                r++)
                    n[r] = o[i];
            return n
        }
        , d = function(e) {
            function t(t) {
                var a = e.call(this, t) || this;
                a.arrGameAuto = {},
                a.gameId = null,
                a.getHistory = function() {
                    a.history && a.history.current.show()
                }
                ,
                a.getStatistic = function() {
                    a.statitic && a.statitic.current.show()
                }
                ,
                a.onLoaded = function() {}
                ;
                var n = a.props.match.params.game.toLowerCase();
                return a.state = {
                    showHistory: !1,
                    showStatistic: !1,
                    game: n
                },
                a.getGame(),
                a.history = r.createRef(),
                a.statitic = r.createRef(),
                window.App.isAuto = window.App.isAutoDancing = window.App.isAutoForest = window.App.isAutoFortune = window.App.isAutoKingdom = window.App.isAutoOcean = window.App.isAutoOracle = !1,
                a
            }
            return u(t, e),
            t.prototype.getGame = function() {
                return c(this, void 0, void 0, function() {
                    var e, t, a, n = this;
                    return g(this, function(r) {
                        switch (r.label) {
                        case 0:
                            return t = this.props.match.params.game,
                            window.Config && window.Config.Games ? (e = window.Config.Games,
                            [3, 4]) : [3, 1];
                        case 1:
                            return [4, fetch("/config/games.json")];
                        case 2:
                            return [4, r.sent().json()];
                        case 3:
                            e = r.sent(),
                            window.Config.Games = e,
                            r.label = 4;
                        case 4:
                            return a = [],
                            Object.keys(e).map(function(r, o) {
                                "slot" === e[r].tag && e[r].jackpot && (a = f(a, [e[r]]),
                                e[r].gameName === t && (n.gameId = e[r].id))
                            }),
                            this.slots = a,
                            [2]
                        }
                    })
                })
            }
            ,
            t.prototype.componentWillReceiveProps = function(e) {
                var t = this;
                console.log("componentWillReceiveProps");
                var a = e.isAuthen
                  , n = e.isAuthen
                  , r = e.match.params.game;
                if (!a && n)
                    return this.props.history.push("/"),
                    void this.props.showLogin();
                r !== this.state.game && (this.deleteGame(this.state.game),
                this.setState({
                    game: r
                }),
                setTimeout(function() {
                    t.loadGame(r)
                }, 1e3))
            }
            ,
            t.prototype.componentWillMount = function() {
                return c(this, void 0, void 0, function() {
                    return g(this, function(e) {
                        return console.log("componentDidMount"),
                        this.props.loadingPage(),
                        [2]
                    })
                })
            }
            ,
            t.prototype.componentDidMount = function() {
                return c(this, void 0, void 0, function() {
                    var e, t, a, n;
                    return g(this, function(r) {
                        switch (r.label) {
                        case 0:
                            console.log("componentDidMount"),
                            r.label = 1;
                        case 1:
                            return r.trys.push([1, 3, , 4]),
                            [4, s.a.gAI()];
                        case 2:
                            return e = r.sent(),
                            console.log("slot container", e),
                            t = e.c,
                            a = e.d,
                            t < 0 || !a || a.accountID < 1 ? (this.props.history.push("/"),
                            this.props.showLogin(),
                            this.props.unloadingPage(),
                            [2]) : (sessionStorage.setItem("GAME_TAB", "slot"),
                            this.loadGame(this.state.game),
                            [3, 4]);
                        case 3:
                            return n = r.sent(),
                            console.log(n),
                            this.props.history.push("/"),
                            this.props.unloadingPage(),
                            this.props.showLogin(),
                            [3, 4];
                        case 4:
                            return [2]
                        }
                    })
                })
            }
            ,
            t.prototype.loadGame = function(e) {
                window.dispatchEvent(new Event("resize"));
                var t = e;
                if (window.arrSlots[t]) {
                    (window.App.gameSlots = window.arrSlots[t]).game.InitNotSilent({
                        size: [window.innerWidth, window.innerHeight],
                        target: document.getElementById(t + "-cvs"),
                        getHistory: this.getHistory,
                        getStatistic: this.getStatistic
                    })
                } else {
                    var a = s.i.getAccessToken()
                      , n = sessionStorage.getItem(t + "hubUrl")
                      , r = window.Config.ConfigGames[t]
                      , o = r.hub
                      , i = r.url;
                    n || (n = o[libs.Util.RandomFrom(0, o.length - 1)],
                    sessionStorage.setItem(t + "hubUrl", n)),
                    window.App.gameSlots = new window[t].game({
                        size: [window.innerWidth, window.innerHeight],
                        target: document.getElementById(t + "-cvs"),
                        token: a,
                        getHistory: this.getHistory,
                        getStatistic: this.getStatistic,
                        currencyID: s.i.getCurrency(),
                        hubUrl: n,
                        apiUrl: window.Config.SLOT_API_URL,
                        api: i,
                        storage: t
                    })
                }
                window.Config.activeSlot = this.gameId,
                this.props.unloadingPage()
            }
            ,
            t.prototype.loadGameSilent = function(e) {
                var t = e
                  , a = s.i.getAccessToken()
                  , n = sessionStorage.getItem(t + "hubUrl")
                  , r = window.Config.ConfigGames[t]
                  , o = r.hub
                  , i = r.url;
                n || (n = o[libs.Util.RandomFrom(0, o.length - 1)],
                sessionStorage.setItem(t + "hubUrl", n)),
                this.arrGameAuto[t] = new window[t].game({
                    size: [window.innerWidth, window.innerHeight],
                    target: null,
                    token: a,
                    getHistory: null,
                    getStatistic: null,
                    currencyID: s.i.getCurrency(),
                    hubUrl: n,
                    apiUrl: window.Config.SLOT_API_URL,
                    api: i,
                    isSilent: !0,
                    storage: t
                })
            }
            ,
            t.prototype.checkAutoGame = function(e) {
                var t = sessionStorage.getItem("Auto-" + e);
                if (t) {
                    var a = t.split(";");
                    return (-1 === parseInt(a[1]) || parseInt(a[1]) > 0) && "true" === a[2] || (sessionStorage.removeItem("Auto-" + e),
                    !1)
                }
                return !1
            }
            ,
            t.prototype.initAutoGame = function() {
                if (this.slots) {
                    var e = !1;
                    this.arrGameAuto = {};
                    for (var t = 0, a = this.slots; t < a.length; t++) {
                        var n = a[t];
                        n.gameName !== this.state.game && this.checkAutoGame(n.gameName) && (window.App.isAuto = e = !0,
                        this.loadGameSilent(n.gameName))
                    }
                    e && $(".multislot-expand").toggleClass("active")
                }
            }
            ,
            t.prototype.deleteGame = function(e) {
                window.App.gameSlots && window.App.gameSlots.delete && window.App.gameSlots.delete(),
                window.App.gameSlots = null,
                this.props.gAI()
            }
            ,
            t.prototype.componentWillUnmount = function() {
                try {
                    this.history = null,
                    this.statitic = null;
                    var e = this.props.match.params.game.toLowerCase();
                    this.deleteGame(e)
                } catch (e) {}
            }
            ,
            t.prototype.goLink = function(e) {
                for (var t = 0, a = this.slots; t < a.length; t++) {
                    var n = a[t];
                    if (n.id === e) {
                        this.game.setSilent(),
                        this.props.history.push(n.link);
                        break
                    }
                }
            }
            ,
            t.prototype.goGame = function(e) {
                for (var t = this.state.game, a = 0, n = this.slots; a < n.length; a++) {
                    var r = n[a];
                    if (r.id === e) {
                        if (r.gameName === t)
                            return;
                        if (this.arrGameAuto[r.gameName]) {
                            var o = this.arrGameAuto[r.gameName];
                            return void (o.checkAuto() ? o.stopAuto() : o.startAuto() || (this.game.setSilent(),
                            this.props.history.push(r.link)))
                        }
                        this.game.setSilent(),
                        this.props.history.push(r.link);
                        break
                    }
                }
            }
            ,
            t.prototype.renderMultiSlots = function() {
                var e, t = this;
                try {
                    e = this.slots.map(function(e, a) {
                        var n = e.cssListJp
                          , o = e.id
                          , i = e.gameName;
                        return r.createElement("div", {
                            className: "slot ml-slot-g-" + i,
                            key: a
                        }, r.createElement("span", {
                            className: n,
                            onClick: t.goLink.bind(t, o)
                        }), r.createElement("span", {
                            className: "state play",
                            onClick: t.goGame.bind(t, o)
                        }))
                    })
                } catch (e) {}
                return e
            }
            ,
            t.prototype.render = function() {
                var e = this.props.intl
                  , t = this.state.game;
                return console.log("gamename", t),
                r.createElement(r.Fragment, null, r.createElement("canvas", {
                    id: t + "-cvs",
                    width: "1600",
                    height: "758"
                }), r.createElement(p.a, {
                    ref: this.history,
                    intl: e,
                    gameName: t
                }), r.createElement(p.b, {
                    ref: this.statitic,
                    intl: e,
                    gameName: t
                }))
            }
            ,
            t
        }(r.Component), h = {
            showLogin: l.t,
            gAI: l.g,
            loadingPage: l.l,
            unloadingPage: l.D,
            showBack: l.q,
            login: l.m
        };
        t.default = Object(o.b)(function(e) {
            return {
                isAuthen: e.authen.isAuthen
            }
        }, h)(Object(i.e)(d))
    },
    632: function(e, t, a) {
        "use strict";
        t.a = function(e) {
            var t, a = e.match(/^\[\w+\]/g);
            null !== a && a.length > 0 && (t = a[0].replace("[", "").replace("]", ""));
            if (!t)
                return "";
            var r = "portal-pre portal-" + t.toLowerCase();
            return n.createElement("span", {
                className: r
            }, a)
        }
        ;
        var n = a(0);
        a.n(n)
    },
    653: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var n = function(e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" !== u(e) && "function" !== typeof e)
                return {
                    default: e
                };
            var t = p();
            if (t && t.has(e))
                return t.get(e);
            var a = {}
              , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
                if (Object.prototype.hasOwnProperty.call(e, r)) {
                    var o = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                    o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                }
            a.default = e,
            t && t.set(e, a);
            return a
        }(a(0))
          , r = l(a(3))
          , o = l(a(740))
          , i = l(a(741))
          , s = l(a(659));
        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function p() {
            if ("function" !== typeof WeakMap)
                return null;
            var e = new WeakMap;
            return p = function() {
                return e
            }
            ,
            e
        }
        function u(e) {
            "@babel/helpers - typeof";
            return (u = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function c(e, t) {
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function g(e, t) {
            return !t || "object" !== u(t) && "function" !== typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function f(e) {
            return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function d(e, t) {
            return (d = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function h(e, t, a) {
            return t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a,
            e
        }
        var m = function(e) {
            function t() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                g(this, f(t).apply(this, arguments))
            }
            var a, r, l;
            return function(e, t) {
                if ("function" !== typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && d(e, t)
            }(t, n["default"].Component),
            a = t,
            (r = [{
                key: "isFirstPageVisible",
                value: function(e) {
                    var t = this.props
                      , a = t.hideDisabled;
                    t.hideNavigation;
                    return !(t.hideFirstLastPages || a && !e)
                }
            }, {
                key: "isPrevPageVisible",
                value: function(e) {
                    var t = this.props
                      , a = t.hideDisabled;
                    return !(t.hideNavigation || a && !e)
                }
            }, {
                key: "isNextPageVisible",
                value: function(e) {
                    var t = this.props
                      , a = t.hideDisabled;
                    return !(t.hideNavigation || a && !e)
                }
            }, {
                key: "isLastPageVisible",
                value: function(e) {
                    var t = this.props
                      , a = t.hideDisabled;
                    t.hideNavigation;
                    return !(t.hideFirstLastPages || a && !e)
                }
            }, {
                key: "buildPages",
                value: function() {
                    for (var e = [], t = this.props, a = t.itemsCountPerPage, r = t.pageRangeDisplayed, l = t.activePage, p = t.prevPageText, u = t.nextPageText, c = t.firstPageText, g = t.lastPageText, f = t.totalItemsCount, d = t.onChange, h = t.activeClass, m = t.itemClass, b = t.itemClassFirst, y = t.itemClassPrev, v = t.itemClassNext, w = t.itemClassLast, x = t.activeLinkClass, k = t.disabledClass, C = (t.hideDisabled,
                    t.hideNavigation,
                    t.linkClass), _ = t.linkClassFirst, P = t.linkClassPrev, E = t.linkClassNext, S = t.linkClassLast, N = (t.hideFirstLastPages,
                    t.getPageUrl), M = new o.default(a,r).build(f, l), O = M.first_page; O <= M.last_page; O++)
                        e.push(n.default.createElement(i.default, {
                            isActive: O === l,
                            key: O,
                            href: N(O),
                            pageNumber: O,
                            pageText: O + "",
                            onClick: d,
                            itemClass: m,
                            linkClass: C,
                            activeClass: h,
                            activeLinkClass: x,
                            ariaLabel: "Go to page number ".concat(O)
                        }));
                    return this.isPrevPageVisible(M.has_previous_page) && e.unshift(n.default.createElement(i.default, {
                        key: "prev" + M.previous_page,
                        href: N(M.previous_page),
                        pageNumber: M.previous_page,
                        onClick: d,
                        pageText: p,
                        isDisabled: !M.has_previous_page,
                        itemClass: (0,
                        s.default)(m, y),
                        linkClass: (0,
                        s.default)(C, P),
                        disabledClass: k,
                        ariaLabel: "Go to previous page"
                    })),
                    this.isFirstPageVisible(M.has_previous_page) && e.unshift(n.default.createElement(i.default, {
                        key: "first",
                        href: N(1),
                        pageNumber: 1,
                        onClick: d,
                        pageText: c,
                        isDisabled: !M.has_previous_page,
                        itemClass: (0,
                        s.default)(m, b),
                        linkClass: (0,
                        s.default)(C, _),
                        disabledClass: k,
                        ariaLabel: "Go to first page"
                    })),
                    this.isNextPageVisible(M.has_next_page) && e.push(n.default.createElement(i.default, {
                        key: "next" + M.next_page,
                        href: N(M.next_page),
                        pageNumber: M.next_page,
                        onClick: d,
                        pageText: u,
                        isDisabled: !M.has_next_page,
                        itemClass: (0,
                        s.default)(m, v),
                        linkClass: (0,
                        s.default)(C, E),
                        disabledClass: k,
                        ariaLabel: "Go to next page"
                    })),
                    this.isLastPageVisible(M.has_next_page) && e.push(n.default.createElement(i.default, {
                        key: "last",
                        href: N(M.total_pages),
                        pageNumber: M.total_pages,
                        onClick: d,
                        pageText: g,
                        isDisabled: M.current_page === M.total_pages,
                        itemClass: (0,
                        s.default)(m, w),
                        linkClass: (0,
                        s.default)(C, S),
                        disabledClass: k,
                        ariaLabel: "Go to last page"
                    })),
                    e
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.buildPages();
                    return n.default.createElement("ul", {
                        className: this.props.innerClass
                    }, e)
                }
            }]) && c(a.prototype, r),
            l && c(a, l),
            t
        }();
        t.default = m,
        h(m, "propTypes", {
            totalItemsCount: r.default.number.isRequired,
            onChange: r.default.func.isRequired,
            activePage: r.default.number,
            itemsCountPerPage: r.default.number,
            pageRangeDisplayed: r.default.number,
            prevPageText: r.default.oneOfType([r.default.string, r.default.element]),
            nextPageText: r.default.oneOfType([r.default.string, r.default.element]),
            lastPageText: r.default.oneOfType([r.default.string, r.default.element]),
            firstPageText: r.default.oneOfType([r.default.string, r.default.element]),
            disabledClass: r.default.string,
            hideDisabled: r.default.bool,
            hideNavigation: r.default.bool,
            innerClass: r.default.string,
            itemClass: r.default.string,
            itemClassFirst: r.default.string,
            itemClassPrev: r.default.string,
            itemClassNext: r.default.string,
            itemClassLast: r.default.string,
            linkClass: r.default.string,
            activeClass: r.default.string,
            activeLinkClass: r.default.string,
            linkClassFirst: r.default.string,
            linkClassPrev: r.default.string,
            linkClassNext: r.default.string,
            linkClassLast: r.default.string,
            hideFirstLastPages: r.default.bool,
            getPageUrl: r.default.func
        }),
        h(m, "defaultProps", {
            itemsCountPerPage: 10,
            pageRangeDisplayed: 5,
            activePage: 1,
            prevPageText: "\u27e8",
            firstPageText: "\xab",
            nextPageText: "\u27e9",
            lastPageText: "\xbb",
            innerClass: "pagination",
            itemClass: void 0,
            linkClass: void 0,
            activeLinkClass: void 0,
            hideFirstLastPages: !1,
            getPageUrl: function(e) {
                return "#"
            }
        })
    },
    659: function(e, t, a) {
        var n;
        !function() {
            "use strict";
            var a = {}.hasOwnProperty;
            function r() {
                for (var e = [], t = 0; t < arguments.length; t++) {
                    var n = arguments[t];
                    if (n) {
                        var o = typeof n;
                        if ("string" === o || "number" === o)
                            e.push(n);
                        else if (Array.isArray(n) && n.length) {
                            var i = r.apply(null, n);
                            i && e.push(i)
                        } else if ("object" === o)
                            for (var s in n)
                                a.call(n, s) && n[s] && e.push(s)
                    }
                }
                return e.join(" ")
            }
            "undefined" !== typeof e && e.exports ? (r.default = r,
            e.exports = r) : void 0 === (n = function() {
                return r
            }
            .apply(t, [])) || (e.exports = n)
        }()
    },
    740: function(e, t) {
        function a(e, t) {
            if (!(this instanceof a))
                return new a(e,t);
            this.per_page = e || 25,
            this.length = t || 10
        }
        e.exports = a,
        a.prototype.build = function(e, t) {
            var a = Math.ceil(e / this.per_page);
            e = parseInt(e, 10),
            (t = parseInt(t, 10) || 1) < 1 && (t = 1),
            t > a && (t = a);
            var n = Math.max(1, t - Math.floor(this.length / 2))
              , r = Math.min(a, t + Math.floor(this.length / 2));
            r - n + 1 < this.length && (t < a / 2 ? r = Math.min(a, r + (this.length - (r - n))) : n = Math.max(1, n - (this.length - (r - n)))),
            r - n + 1 > this.length && (t > a / 2 ? n++ : r--);
            var o = this.per_page * (t - 1);
            o < 0 && (o = 0);
            var i = this.per_page * t - 1;
            return i < 0 && (i = 0),
            i > Math.max(e - 1, 0) && (i = Math.max(e - 1, 0)),
            {
                total_pages: a,
                pages: Math.min(r - n + 1, a),
                current_page: t,
                first_page: n,
                last_page: r,
                previous_page: t - 1,
                next_page: t + 1,
                has_previous_page: t > 1,
                has_next_page: t < a,
                total_results: e,
                results: Math.min(i - o + 1, e),
                first_result: o,
                last_result: i
            }
        }
    },
    741: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var n = function(e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" !== l(e) && "function" !== typeof e)
                return {
                    default: e
                };
            var t = s();
            if (t && t.has(e))
                return t.get(e);
            var a = {}
              , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
                if (Object.prototype.hasOwnProperty.call(e, r)) {
                    var o = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                    o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                }
            a.default = e,
            t && t.set(e, a);
            return a
        }(a(0))
          , r = i(a(3))
          , o = i(a(659));
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function s() {
            if ("function" !== typeof WeakMap)
                return null;
            var e = new WeakMap;
            return s = function() {
                return e
            }
            ,
            e
        }
        function l(e) {
            "@babel/helpers - typeof";
            return (l = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function p(e, t) {
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function u(e, t) {
            return !t || "object" !== l(t) && "function" !== typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function c(e) {
            return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function g(e, t) {
            return (g = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function f(e, t, a) {
            return t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a,
            e
        }
        var d = function(e) {
            function t() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                u(this, c(t).apply(this, arguments))
            }
            var a, r, i;
            return function(e, t) {
                if ("function" !== typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && g(e, t)
            }(t, n.Component),
            a = t,
            (r = [{
                key: "handleClick",
                value: function(e) {
                    var t = this.props
                      , a = t.isDisabled
                      , n = t.pageNumber;
                    e.preventDefault(),
                    a || this.props.onClick(n)
                }
            }, {
                key: "render",
                value: function() {
                    var e, t = this.props, a = t.pageText, r = (t.pageNumber,
                    t.activeClass), i = t.itemClass, s = t.linkClass, l = t.activeLinkClass, p = t.disabledClass, u = t.isActive, c = t.isDisabled, g = t.href, d = t.ariaLabel, h = (0,
                    o.default)(i, (f(e = {}, r, u),
                    f(e, p, c),
                    e)), m = (0,
                    o.default)(s, f({}, l, u));
                    return n.default.createElement("li", {
                        className: h,
                        onClick: this.handleClick.bind(this)
                    }, n.default.createElement("a", {
                        className: m,
                        href: g,
                        "aria-label": d
                    }, a))
                }
            }]) && p(a.prototype, r),
            i && p(a, i),
            t
        }();
        t.default = d,
        f(d, "propTypes", {
            pageText: r.default.oneOfType([r.default.string, r.default.element]),
            pageNumber: r.default.number.isRequired,
            onClick: r.default.func.isRequired,
            isActive: r.default.bool.isRequired,
            isDisabled: r.default.bool,
            activeClass: r.default.string,
            activeLinkClass: r.default.string,
            itemClass: r.default.string,
            linkClass: r.default.string,
            disabledClass: r.default.string,
            href: r.default.string
        }),
        f(d, "defaultProps", {
            activeClass: "active",
            disabledClass: "disabled",
            itemClass: void 0,
            linkClass: void 0,
            activeLinkCLass: void 0,
            isActive: !1,
            isDisabled: !1,
            href: "#"
        })
    },
    867: function(e, t, a) {
        var n = a(910);
        "string" === typeof n && (n = [[e.i, n, ""]]);
        var r = {
            hmr: !1,
            transform: void 0
        };
        a(584)(n, r);
        n.locals && (e.exports = n.locals)
    },
    908: function(e, t, a) {
        "use strict";
        var n = a(909)
          , r = a(911);
        a.d(t, "a", function() {
            return n.a
        }),
        a.d(t, "b", function() {
            return r.a
        })
    },
    909: function(e, t, a) {
        "use strict";
        var n, r = a(0), o = (a.n(r),
        a(867)), i = (a.n(o),
        a(2)), s = a(12), l = a(653), p = a.n(l), u = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var a in t)
                    t.hasOwnProperty(a) && (e[a] = t[a])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function a() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype,
            new a)
        }
        ), c = this && this.__awaiter || function(e, t, a, n) {
            return new (a || (a = Promise))(function(r, o) {
                function i(e) {
                    try {
                        l(n.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function s(e) {
                    try {
                        l(n.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function l(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof a ? t : new a(function(e) {
                        e(t)
                    }
                    )).then(i, s)
                }
                l((n = n.apply(e, t || [])).next())
            }
            )
        }
        , g = this && this.__generator || function(e, t) {
            var a, n, r, o, i = {
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
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" === typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function s(o) {
                return function(s) {
                    return function(o) {
                        if (a)
                            throw new TypeError("Generator is already executing.");
                        for (; i; )
                            try {
                                if (a = 1,
                                n && (r = 2 & o[0] ? n.return : o[0] ? n.throw || ((r = n.return) && r.call(n),
                                0) : n.next) && !(r = r.call(n, o[1])).done)
                                    return r;
                                switch (n = 0,
                                r && (o = [2 & o[0], r.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return i.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++,
                                    n = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = i.ops.pop(),
                                    i.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = i.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        i.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && i.label < r[1]) {
                                        i.label = r[1],
                                        r = o;
                                        break
                                    }
                                    if (r && i.label < r[2]) {
                                        i.label = r[2],
                                        i.ops.push(o);
                                        break
                                    }
                                    r[2] && i.ops.pop(),
                                    i.trys.pop();
                                    continue
                                }
                                o = t.call(e, i)
                            } catch (e) {
                                o = [6, e],
                                n = 0
                            } finally {
                                a = r = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, s])
                }
            }
        }
        , f = function(e) {
            function t(t) {
                var a = e.call(this, t) || this;
                return a.roomFt = [1e3, 2e3, 5e3, 1e4, 2e4, 5e4, 1e5, 2e5],
                a.show = function() {
                    a.setState({
                        show: !0
                    }),
                    a.setState({
                        page: 1,
                        pageSize: 10,
                        data: [],
                        count: 1e3,
                        paging: !1
                    }, function() {
                        window.App.resizeWindow(),
                        a.getHistory(!0)
                    })
                }
                ,
                a.hide = function() {
                    a.setState({
                        show: !1
                    })
                }
                ,
                a.getHistory = function(e) {
                    return void 0 === e && (e = !1),
                    c(a, void 0, void 0, function() {
                        var t, a, n, r, o, s, l, p, u, c, f, d, h, m;
                        return g(this, function(g) {
                            switch (g.label) {
                            case 0:
                                t = this.state,
                                a = t.page,
                                n = t.pageSize,
                                r = t.paging,
                                o = t.totalPage,
                                s = this.props.gameName,
                                l = a,
                                o > 0 && (l = a > o ? o : a),
                                g.label = 1;
                            case 1:
                                return g.trys.push([1, 3, , 4]),
                                [4, i.j.getHistory(s, l, n)];
                            case 2:
                                return p = g.sent(),
                                u = p.c,
                                c = p.d,
                                f = p.p,
                                u < 0 ? [2] : (d = Math.floor(f[2] / f[1]) + (f[2] % f[1] === 0 ? 0 : 1),
                                h = 5,
                                a == d - 1 && (h = 4),
                                0 === c && (h = 1),
                                this.setState({
                                    data: c,
                                    paging: !!(e && c.length >= n) || r,
                                    count: f[2],
                                    pageRage: h,
                                    totalPage: d,
                                    page: l
                                }, function() {
                                    window.App.resizeWindow()
                                }),
                                [3, 4]);
                            case 3:
                                return m = g.sent(),
                                console.error(m),
                                [3, 4];
                            case 4:
                                return [2]
                            }
                        })
                    })
                }
                ,
                a.getRoom = function(e) {
                    var t = a.props.gameName;
                    return "fortune" === t ? s.a.formatMoney(a.roomFt[e - 1]) : "predict" === t ? 1 === e ? "1K" : 2 === e ? "10K" : 3 === e ? "50K" : 4 === e ? "100K" : "500K" : s.a.formatMoney(1 === e ? 100 : 2 === e ? 1e3 : 1e4)
                }
                ,
                a.getPayline = function(e) {
                    return e && 0 != e.length ? e.split(";").length : 0
                }
                ,
                a.renderBody = function() {
                    var e = a.state
                      , t = e.data
                      , n = e.pageSize
                      , o = e.page
                      , i = a.props
                      , l = i.intl
                      , p = i.gameName;
                    return a.setState({
                        count: t.length < n ? o * n : 1e4
                    }),
                    t.map(function(e, t) {
                        return r.createElement("tr", {
                            key: t
                        }, r.createElement("td", {
                            align: "center"
                        }, e.spinID), r.createElement("td", {
                            align: "center"
                        }, s.a.formatDateTime(e.createTime)), r.createElement("td", {
                            align: "center"
                        }, a.getRoom(e.roomID)), r.createElement("td", {
                            align: "center"
                        }, s.a.formatNumber(e.totalBetValue)), r.createElement("td", {
                            align: "right"
                        }, "fortune" === p ? 3 === e.gameType ? "bonus" : "53" === e.prizeData || "52" === e.prizeData || "51" === e.prizeData ? l.formatMessage({
                            id: "sl91"
                        }) : "1" === e.prizeData ? l.formatMessage({
                            id: "sl33"
                        }) : a.getPayline(e.prizeData) + " " + l.formatMessage({
                            id: "oc7"
                        }) : a.getPayline(e.prizeData) + " " + l.formatMessage({
                            id: "oc7"
                        })), r.createElement("td", {
                            align: "right"
                        }, "fortune" === p && e.prizeData && e.prizeData.length > 0 && 0 === e.paylinePrizeValue ? "bonus" : s.a.formatNumber(e.paylinePrizeValue)))
                    })
                }
                ,
                a.getPredictBet = function(e) {
                    var t = a.props.intl;
                    switch (e) {
                    case 1:
                        return t.formatMessage({
                            id: "ca175"
                        });
                    case 2:
                        return t.formatMessage({
                            id: "ca176"
                        });
                    case 3:
                        return t.formatMessage({
                            id: "ca177"
                        });
                    case 4:
                        return t.formatMessage({
                            id: "ca178"
                        });
                    case 5:
                        return t.formatMessage({
                            id: "ca179"
                        });
                    case 6:
                        return t.formatMessage({
                            id: "ca177"
                        }) + " " + t.formatMessage({
                            id: "ca175"
                        });
                    case 7:
                        return t.formatMessage({
                            id: "ca178"
                        }) + " " + t.formatMessage({
                            id: "ca175"
                        });
                    case 8:
                        return t.formatMessage({
                            id: "ca179"
                        }) + " " + t.formatMessage({
                            id: "ca175"
                        });
                    case 9:
                        return t.formatMessage({
                            id: "ca177"
                        }) + " " + t.formatMessage({
                            id: "ca176"
                        });
                    case 10:
                        return t.formatMessage({
                            id: "ca178"
                        }) + " " + t.formatMessage({
                            id: "ca176"
                        });
                    case 11:
                        return t.formatMessage({
                            id: "ca179"
                        }) + " " + t.formatMessage({
                            id: "ca176"
                        });
                    default:
                        return ""
                    }
                }
                ,
                a.GetColor = function(e) {
                    switch (e % 3) {
                    case 0:
                        return "#38D326";
                    case 1:
                        return "#E43D3D";
                    case 2:
                        return "#F6EF33"
                    }
                    return ""
                }
                ,
                a.getDescription = function(e) {
                    return 4 == e ? "ca183" : 3 == e ? "sl87" : 2 == e ? "ca182" : 1 == e ? "ca181" : "ca180"
                }
                ,
                a.renderBodyPredict = function() {
                    var e = a.state
                      , t = e.data
                      , n = e.pageSize
                      , o = e.page;
                    return a.setState({
                        count: t.length < n ? o * n : 1e4
                    }),
                    t.map(function(e, t) {
                        var n = a.getDescription(e.betType)
                          , o = {
                            color: a.GetColor(e.number),
                            fontWeight: 600
                        };
                        return r.createElement("tr", {
                            key: t
                        }, r.createElement("td", {
                            align: "center"
                        }, e.spinID), r.createElement("td", {
                            align: "center"
                        }, s.a.formatDateTime(e.createTime)), r.createElement("td", {
                            align: "center"
                        }, e.step), r.createElement("td", {
                            align: "center"
                        }, a.getPredictBet(e.locationID)), r.createElement("td", {
                            align: "center"
                        }, r.createElement("span", {
                            style: o
                        }, e.number > 0 ? e.number : "")), r.createElement("td", {
                            align: "center"
                        }, s.a.formatNumber(e.paylinePrizeValue)), r.createElement("td", {
                            align: "center"
                        }, a.props.intl.formatMessage({
                            id: n
                        })))
                    })
                }
                ,
                a.handlePageChange = function(e) {
                    a.setState({
                        page: e
                    }, function() {
                        a.getHistory()
                    })
                }
                ,
                a.state = {
                    page: 1,
                    pageSize: 10,
                    data: [],
                    count: 1e3,
                    paging: !1,
                    show: !1,
                    pageRage: 5,
                    totalPage: 0
                },
                a
            }
            return u(t, e),
            t.prototype.render = function() {
                var e = this.state
                  , t = e.page
                  , a = e.count
                  , n = e.paging
                  , o = e.show
                  , i = e.pageRage
                  , s = this.props
                  , l = s.intl
                  , u = s.gameName;
                return o ? "predict" != u ? r.createElement("div", {
                    className: "app slotHis",
                    style: {
                        background: "none"
                    }
                }, r.createElement("div", {
                    className: "popup popup-mini-guide show"
                }, r.createElement("span", {
                    className: "button button-close",
                    onClick: this.hide
                }), r.createElement("div", {
                    className: "title"
                }, l.formatMessage({
                    id: "sl34"
                })), r.createElement("div", {
                    className: "body-tabs"
                }, r.createElement("div", {
                    className: "body-tab active"
                }, r.createElement("div", {
                    className: "money-types",
                    style: {
                        backgroundImage: "none",
                        backgroundColor: "transparent",
                        boxShadow: "none",
                        WebkitBoxShadow: "none"
                    }
                }), r.createElement("div", {
                    className: "list-tabs"
                }, r.createElement("table", {
                    className: "table",
                    style: {
                        width: "100%"
                    }
                }, r.createElement("thead", null, r.createElement("tr", null, r.createElement("th", {
                    align: "center"
                }, l.formatMessage({
                    id: "sl63"
                })), r.createElement("th", {
                    align: "center"
                }, l.formatMessage({
                    id: "sl35"
                })), r.createElement("th", {
                    align: "center"
                }, l.formatMessage({
                    id: "sl36"
                })), r.createElement("th", {
                    align: "center"
                }, l.formatMessage({
                    id: "sl4"
                })), r.createElement("th", {
                    align: "right"
                }, l.formatMessage({
                    id: "sl55"
                })), r.createElement("th", {
                    align: "right"
                }, l.formatMessage({
                    id: "sl5"
                })))), r.createElement("tbody", null, this.renderBody())), n && r.createElement(p.a, {
                    activePage: t,
                    itemsCountPerPage: 10,
                    totalItemsCount: a,
                    pageRangeDisplayed: i,
                    onChange: this.handlePageChange,
                    innerClass: "page-ljp pages"
                })))))) : r.createElement("div", {
                    className: "app slotHis",
                    style: {
                        background: "none"
                    }
                }, r.createElement("div", {
                    className: "popup popup-mini-guide show"
                }, r.createElement("span", {
                    className: "button button-close",
                    onClick: this.hide
                }), r.createElement("div", {
                    className: "title"
                }, l.formatMessage({
                    id: "sl34"
                })), r.createElement("div", {
                    className: "body-tabs"
                }, r.createElement("div", {
                    className: "body-tab active"
                }, r.createElement("div", {
                    className: "money-types",
                    style: {
                        backgroundImage: "none",
                        backgroundColor: "transparent",
                        boxShadow: "none",
                        WebkitBoxShadow: "none"
                    }
                }), r.createElement("div", {
                    className: "list-tabs"
                }, r.createElement("table", {
                    className: "table",
                    style: {
                        width: "100%"
                    }
                }, r.createElement("thead", null, r.createElement("tr", null, r.createElement("th", {
                    align: "center"
                }, l.formatMessage({
                    id: "hi08"
                })), r.createElement("th", {
                    align: "center"
                }, l.formatMessage({
                    id: "hi09"
                })), r.createElement("th", {
                    align: "center"
                }, l.formatMessage({
                    id: "hi20"
                })), r.createElement("th", {
                    align: "center"
                }, l.formatMessage({
                    id: "hi10"
                })), r.createElement("th", {
                    align: "center"
                }, l.formatMessage({
                    id: "hi11"
                })), r.createElement("th", {
                    align: "center"
                }, l.formatMessage({
                    id: "hi14"
                })), r.createElement("th", {
                    align: "center"
                }, l.formatMessage({
                    id: "hi33"
                })))), r.createElement("tbody", null, this.renderBodyPredict())), n && r.createElement(p.a, {
                    activePage: t,
                    itemsCountPerPage: 10,
                    totalItemsCount: a,
                    pageRangeDisplayed: i,
                    onChange: this.handlePageChange,
                    innerClass: "page-ljp pages"
                })))))) : null
            }
            ,
            t
        }(r.PureComponent);
        t.a = f
    },
    910: function(e, t, a) {
        (e.exports = a(583)(!1)).push([e.i, '.slot-history{position:absolute;top:100px;left:50%;margin-left:-293px;width:647px;height:510px;padding:25px 30px;color:#fff;font-size:14px;background:url("/assets/images/popup/Group 13.png") no-repeat;-webkit-transition:-webkit-transform .3s ease-out;-o-transition:-o-transform .3s ease-out;transition:-webkit-transform .3s ease-out;-o-transition:transform .3s ease-out;transition:transform .3s ease-out;transition:transform .3s ease-out,-webkit-transform .3s ease-out}.slot-history .popup-guide{padding-top:40px}.slot-history .popup-guide .title-popup{position:absolute;display:block;width:300px;height:36px;left:50%;margin-top:-40px;margin-left:-150px;text-align:center;font-family:Sans-Serif;font-size:22px;color:#fff;font-weight:700;text-transform:uppercase;line-height:36px}.slot-history .popup-guide .scroll-popup{width:5px;height:120px;border-radius:5px;background:#000;position:absolute;right:12px;top:50px}.slot-history .popup-guide .scroll-popup p{padding:0 0 8px 6px;margin:0;font-family:Tahoma,Geneva,sans-serif;line-height:18px;font-size:12px}.slot-history .popup-guide .tabs-pp{height:30px;margin-bottom:10px;text-align:center;padding-top:10px}.slot-history .popup-guide .tabs-pp .tab-pp{display:inline-block;font-size:14px;font-weight:700;text-align:center;text-decoration:none;padding:0;color:#fff;text-transform:uppercase;width:110px;height:33px;line-height:33px;background:url("/assets/images/popup/t2.png") no-repeat}.slot-history .popup-guide .tabs-pp .tab-pp.active,.slot-history .popup-guide .tabs-pp .tab-pp:hover{color:#ff0;background:url("/assets/images/popup/t1.png") no-repeat}.slot-history .popup-guide .tabs-pp .tab-pp:hover{opacity:.8}.slot-history .popup-guide .tabs-pp .tab-pp span{font-size:14px}.slot-history .popup-guide .tbl-popup{margin-top:40px}.slot-history .popup-guide .tbl-popup table{border:1px solid #706ab1;border-spacing:0;border-collapse:collapse;width:100%}.slot-history .popup-guide .tbl-popup tr:nth-child(odd){background:#0f122e}.slot-history .popup-guide .tbl-popup th{padding:5px;border-bottom:1px solid #2a2650;border-right:1px solid #706ab1;text-align:center;text-transform:uppercase;background:#615b9e;font-family:Sans-Serif;font-size:13px;font-weight:400;color:#fff}.slot-history .popup-guide .tbl-popup tr td{padding:6px;line-height:14px;border-bottom:1px solid #2a2650;border-right:1px solid #2a2650;text-align:center;font-size:11px;color:#fff}.slot-history .popup-guide.popup-gold #scrollidxx .tablepop,.slot-history .popup-guide.popup-gold .tbl-popup tr td{color:#fdf5a9}.slot-history .popup-guide.popup-gold .tbl-popup tr td.money-gold{color:#ff0}.slot-history .popup-guide.popup-coin .tbl-popup tr td.money-gold{color:#fff}.slot-history .popup-guide .tbl-popup td:last-child,.slot-history .popup-guide .tbl-popup th:last-child{border-right:0 none}.slot-history .popup-guide .tbl-popup tr:last-child td{border-bottom:0 none}.slot-history .popup-guide .pages-pp{padding:10px 0;text-align:center}.slot-history .popup-guide .pages-pp li{padding:10px 0;text-align:center;display:inline-block}.slot-history .popup-guide .pages-pp li.active a{color:#ff0}.slot-history .popup-guide .pages-pp a{display:inline-block;background:#2a2650;padding:6px 8px;border-radius:6px;-moz-border-radius:6px;-webkit-border-radius:6px;font-family:Tahoma,Geneva,sans-serif;text-decoration:none;color:#fff;margin:0 2px;font-size:12px}.slot-history .popup-guide .pages-pp a.dung,.slot-history .popup-guide .pages-pp a:hover{background:#706ab1}.slot-history .popup-guide .pages-pp a.dung{color:#ff0}.slot-history .popup-guide .close-popup{background:url(/assets/images/popup/close.png) no-repeat 50%;height:72px;width:72px;position:absolute;right:-45px;top:-45px;z-index:100;cursor:pointer}', ""])
    },
    911: function(e, t, a) {
        "use strict";
        var n, r = a(0), o = (a.n(r),
        a(867)), i = (a.n(o),
        a(2)), s = a(12), l = a(653), p = a.n(l), u = a(632), c = this && this.__extends || (n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var a in t)
                    t.hasOwnProperty(a) && (e[a] = t[a])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function a() {
                this.constructor = e
            }
            n(e, t),
            e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype,
            new a)
        }
        ), g = this && this.__awaiter || function(e, t, a, n) {
            return new (a || (a = Promise))(function(r, o) {
                function i(e) {
                    try {
                        l(n.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function s(e) {
                    try {
                        l(n.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function l(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof a ? t : new a(function(e) {
                        e(t)
                    }
                    )).then(i, s)
                }
                l((n = n.apply(e, t || [])).next())
            }
            )
        }
        , f = this && this.__generator || function(e, t) {
            var a, n, r, o, i = {
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
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" === typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function s(o) {
                return function(s) {
                    return function(o) {
                        if (a)
                            throw new TypeError("Generator is already executing.");
                        for (; i; )
                            try {
                                if (a = 1,
                                n && (r = 2 & o[0] ? n.return : o[0] ? n.throw || ((r = n.return) && r.call(n),
                                0) : n.next) && !(r = r.call(n, o[1])).done)
                                    return r;
                                switch (n = 0,
                                r && (o = [2 & o[0], r.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return i.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++,
                                    n = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = i.ops.pop(),
                                    i.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = i.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        i.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && i.label < r[1]) {
                                        i.label = r[1],
                                        r = o;
                                        break
                                    }
                                    if (r && i.label < r[2]) {
                                        i.label = r[2],
                                        i.ops.push(o);
                                        break
                                    }
                                    r[2] && i.ops.pop(),
                                    i.trys.pop();
                                    continue
                                }
                                o = t.call(e, i)
                            } catch (e) {
                                o = [6, e],
                                n = 0
                            } finally {
                                a = r = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, s])
                }
            }
        }
        , d = function(e) {
            function t(t) {
                var a = e.call(this, t) || this;
                return a.roomFt = [1e3, 2e3, 5e3, 1e4, 2e4, 5e4, 1e5, 2e5],
                a.show = function() {
                    a.setState({
                        show: !0
                    }),
                    a.setState({
                        page: 1,
                        pageSize: 10,
                        data: [],
                        count: 1e3,
                        paging: !1
                    }, function() {
                        window.App.resizeWindow(),
                        a.getHistory(!0)
                    })
                }
                ,
                a.hide = function() {
                    a.setState({
                        show: !1
                    })
                }
                ,
                a.getHistory = function(e) {
                    return void 0 === e && (e = !1),
                    g(a, void 0, void 0, function() {
                        var t, a, n, r, o, s, l, p, u, c, g, d;
                        return f(this, function(f) {
                            switch (f.label) {
                            case 0:
                                t = this.state,
                                a = t.page,
                                n = t.pageSize,
                                r = t.paging,
                                o = this.props.gameName,
                                f.label = 1;
                            case 1:
                                return f.trys.push([1, 3, , 4]),
                                [4, i.j.getListJackpot(o, a, n)];
                            case 2:
                                return s = f.sent(),
                                l = s.c,
                                p = s.d,
                                u = s.p,
                                l < 0 ? [2] : (c = Math.floor(u[2] / u[1]) + (u[2] % u[1] === 0 ? 0 : 1),
                                g = 5,
                                a == c - 1 && (g = 4),
                                this.setState({
                                    data: p,
                                    paging: !!(e && p.length >= n) || r,
                                    count: u[2],
                                    pageRage: g
                                }, function() {
                                    window.App.resizeWindow()
                                }),
                                [3, 4]);
                            case 3:
                                return d = f.sent(),
                                console.error(d),
                                [3, 4];
                            case 4:
                                return [2]
                            }
                        })
                    })
                }
                ,
                a.getRoom = function(e) {
                    var t = a.props.gameName;
                    return "fortune" === t ? s.a.formatMoney(a.roomFt[e - 1]) : "predict" === t ? 1 === e ? "1K" : 2 === e ? "10K" : 3 === e ? "50K" : 4 === e ? "100K" : "500K" : s.a.formatMoney(1 === e ? 100 : 2 === e ? 1e3 : 1e4)
                }
                ,
                a.countJackpot = function(e) {
                    if (0 === e.length)
                        return 1;
                    var t = e.split(";")
                      , n = 4;
                    return "dancing" == a.props.gameName && (n = 1),
                    t.filter(function(e) {
                        return e.split(",")[1] == n
                    }).length
                }
                ,
                a.renderBody = function() {
                    var e = a.props.gameName
                      , t = a.state
                      , n = t.data
                      , o = t.pageSize
                      , i = t.page;
                    return a.setState({
                        count: n.length < o ? i * o : 1e4
                    }),
                    n.map(function(t) {
                        return r.createElement("tr", {
                            key: t.spinID
                        }, r.createElement("td", {
                            align: "center"
                        }, s.a.formatDateTime(t.createdTime)), r.createElement("td", {
                            align: "center"
                        }, a.getRoom(t.roomID)), r.createElement("td", {
                            align: "center"
                        }, Object(u.a)(t.nickname), s.a.getName(t.nickname)), a.renderData(e, t.prizeData), r.createElement("td", {
                            align: "center"
                        }, s.a.formatNumber(t.prizeValue)))
                    })
                }
                ,
                a.handlePageChange = function(e) {
                    a.setState({
                        page: e
                    }, function() {
                        a.getHistory()
                    })
                }
                ,
                a.state = {
                    page: 1,
                    pageSize: 10,
                    data: [],
                    count: 1e3,
                    paging: !1,
                    pageRage: 5,
                    show: !1
                },
                a
            }
            return c(t, e),
            t.prototype.renderData = function(e, t) {
                return "fortune" == e ? r.createElement("td", {
                    align: "center"
                }, "1") : "predict" != e ? r.createElement("td", {
                    align: "center"
                }, this.countJackpot(t)) : ""
            }
            ,
            t.prototype.renderField = function(e) {
                return "predict" != e ? r.createElement("th", {
                    align: "center"
                }, "Jackpot") : ""
            }
            ,
            t.prototype.render = function() {
                var e = this.state
                  , t = e.page
                  , a = e.count
                  , n = e.paging
                  , o = e.show
                  , i = e.pageRage
                  , s = this.props
                  , l = s.intl
                  , u = s.gameName;
                return o ? r.createElement("div", {
                    className: "app slotHis",
                    style: {
                        background: "none"
                    }
                }, r.createElement("div", {
                    className: "popup popup-mini-guide show"
                }, r.createElement("span", {
                    className: "button button-close",
                    onClick: this.hide
                }), r.createElement("div", {
                    className: "title"
                }, "Jackpot"), r.createElement("div", {
                    className: "body-tabs"
                }, r.createElement("div", {
                    className: "body-tab active"
                }, r.createElement("div", {
                    className: "money-types",
                    style: {
                        backgroundImage: "none",
                        backgroundColor: "transparent",
                        boxShadow: "none",
                        WebkitBoxShadow: "none"
                    }
                }), r.createElement("div", {
                    className: "list-tabs"
                }, r.createElement("table", {
                    className: "table",
                    style: {
                        width: "100%"
                    }
                }, r.createElement("thead", null, r.createElement("tr", null, r.createElement("th", {
                    align: "center"
                }, l.formatMessage({
                    id: "sl35"
                })), r.createElement("th", {
                    align: "center"
                }, l.formatMessage({
                    id: "sl36"
                })), r.createElement("th", {
                    align: "center"
                }, l.formatMessage({
                    id: "sl37"
                })), this.renderField(u), r.createElement("th", {
                    align: "center"
                }, l.formatMessage({
                    id: "sl5"
                })))), r.createElement("tbody", null, this.renderBody())), n && r.createElement(p.a, {
                    activePage: t,
                    itemsCountPerPage: 10,
                    totalItemsCount: a,
                    pageRangeDisplayed: i,
                    onChange: this.handlePageChange,
                    innerClass: "page-ljp pages"
                })))))) : null
            }
            ,
            t
        }(r.PureComponent);
        t.a = d
    }
});
