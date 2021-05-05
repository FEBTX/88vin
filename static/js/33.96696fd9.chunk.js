webpackJsonp([33], {
    1125: function(e, a, t) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n, l = t(0), s = (t.n(l),
        t(618)), c = t(9), r = t(45), i = t(12), m = t(1), o = t(4), p = this && this.__extends || (n = function(e, a) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, a) {
                e.__proto__ = a
            }
            || function(e, a) {
                for (var t in a)
                    a.hasOwnProperty(t) && (e[t] = a[t])
            }
            )(e, a)
        }
        ,
        function(e, a) {
            function t() {
                this.constructor = e
            }
            n(e, a),
            e.prototype = null === a ? Object.create(a) : (t.prototype = a.prototype,
            new t)
        }
        ), E = [{
            name: "pr0",
            tag: ""
        }, {
            name: "pr1",
            tag: m.k.HISTORY
        }, {
            name: "pr2",
            tag: m.k.SECURITY
        }, {
            name: "pr4",
            tag: m.k.INBOX
        }, {
            name: "vip",
            tag: m.k.VIP
        }], f = function(e) {
            function a(a) {
                var t = e.call(this, a) || this;
                return t.state = {
                    nickname: ""
                },
                t
            }
            return p(a, e),
            a.prototype.handleShowProfile = function(e) {
                this.props.showProfile(e)
            }
            ,
            a.prototype.render = function() {
                var e = this.props.account
                  , a = e.nickname
                  , t = e.goldBalance
                  , n = e.coinBalance
                  , c = e.clientIP
                  , r = e.vipPoint
                  , o = e.vpMax
                  , p = e.avatar
                  , f = e.activatedTime
                  , d = e.vipLevel
                  , u = this.props.intl
                  , v = i.a.getVipLevel(d);
                return l.createElement("div", null, l.createElement(s.b, {
                    onClick: this.props.hideProfile
                }), l.createElement("div", {
                    className: "dropdown-section profile active"
                }, l.createElement(s.c, {
                    activeIndex: 0,
                    datas: E,
                    onClick: this.props.showProfile
                }), l.createElement("div", {
                    className: "tabs"
                }, l.createElement("div", {
                    className: "tab active"
                }, l.createElement("span", {
                    className: "light-horz"
                }), l.createElement("div", {
                    className: "avt-section"
                }, l.createElement("div", {
                    className: "avatar",
                    onClick: this.handleShowProfile.bind(this, m.k.CHANGE_AVATAR)
                }, l.createElement("img", {
                    className: "ava_main",
                    src: i.a.getAvatar(p)
                })), l.createElement("div", {
                    className: "uinfo"
                }, l.createElement("p", {
                    className: "name",
                    id: "accountName"
                }, a), l.createElement("span", {
                    className: "button button-change",
                    onClick: this.handleShowProfile.bind(this, m.k.CHANGE_PASSWORD)
                }, u.formatMessage({
                    id: "pr5"
                })))), l.createElement("ul", {
                    className: "prof-inf"
                }, l.createElement("li", null, l.createElement("span", {
                    className: "lb"
                }, libs.Util.ReplaceMoney(u.formatMessage({
                    id: "mn20"
                }))), l.createElement("span", {
                    className: "vl"
                }, l.createElement("span", {
                    className: "money-gold",
                    id: "star"
                }, i.a.formatNumber(t)), l.createElement("i", {
                    className: "gold_1x"
                }))), l.createElement("li", null, l.createElement("span", {
                    className: "lb",
                    id: "lblinfo"
                }, u.formatMessage({
                    id: "pr6"
                })), l.createElement("span", {
                    className: "vl"
                }, i.a.formatDate(f))), l.createElement("li", null, l.createElement("span", {
                    className: "lb"
                }, libs.Util.ReplaceMoney(u.formatMessage({
                    id: "mn21"
                }))), l.createElement("span", {
                    className: "vl"
                }, l.createElement("span", {
                    className: "money-silver",
                    id: "coin"
                }, i.a.formatNumber(n)), l.createElement("i", {
                    className: "ic-silver"
                }))), l.createElement("li", null, l.createElement("span", {
                    className: "lb"
                }, u.formatMessage({
                    id: "pr7"
                })), l.createElement("span", {
                    className: "vl"
                }, l.createElement("span", {
                    className: "verify"
                }, u.formatMessage({
                    id: "pr8"
                })))), l.createElement("li", null, l.createElement("span", {
                    className: "lb",
                    id: "lblIp"
                }, "IP"), l.createElement("span", {
                    className: "vl"
                }, l.createElement("span", {
                    className: "verify"
                }, c))), l.createElement("li", null, l.createElement("span", {
                    className: "vl"
                }, "\xa0")), window.Config.EnableVIP && l.createElement("li", null, l.createElement("span", {
                    className: "lb"
                }, u.formatMessage({
                    id: "pr10"
                })), l.createElement("span", {
                    className: "vl",
                    id: "lblVip"
                }, u.formatMessage({
                    id: v
                }))), window.Config.EnableVIP && l.createElement("li", null, l.createElement("span", {
                    className: "lb"
                }, "VIP point:"), l.createElement("span", {
                    className: "vl"
                }, l.createElement("span", {
                    id: "lblPro"
                }, i.a.getVipPoint(r), "/", i.a.getVipPoint(o)))))))))
            }
            ,
            a
        }(l.Component), d = {
            hideProfile: r.b,
            showProfile: r.c
        };
        a.default = Object(c.b)(function(e) {
            return {
                account: e.authen.accountInfo
            }
        }, d)(Object(o.e)(f))
    }
});
