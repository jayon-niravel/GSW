! function(t) {
    function e(i) {
        if (n[i]) return n[i].exports;
        var o = n[i] = {
            exports: {},
            id: i,
            loaded: !1
        };
        return t[i].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
    }
    var n = {};
    return e.m = t, e.c = n, e.p = "", e(0)
}([function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            "default": t
        }
    }
    n(1), n(14);
    var o = n(20),
        s = i(o);
    n(21), n(25), n(26), n(27), n(28), n(29), n(133);
    jQuery;
    ! function(t) {
        /*t(".btn-group").on("click", function(t) {
            t.stopPropagation()
        }),*/ t(window).load(function() {
            t("#fakeloader").fadeOut("slow")
        }), t(".count-result").countTo(), t(".fact-box-count").countTo(), t(".progress-bar.one").on("inview", function(e, n) {
            n ? t(this).css({
                width: "70%"
            }) : t(this).css({
                width: "0%"
            })
        }), t(".progress-bar.two").on("inview", function(e, n) {
            n ? t(this).css({
                width: "95%"
            }) : t(this).css({
                width: "0%"
            })
        }), t(".progress-bar.three").on("inview", function(e, n) {
            n ? t(this).css({
                width: "50%"
            }) : t(this).css({
                width: "0%"
            })
        }), t("#sticker").sticky({
            topSpacing: 0
        }), t("#elements-menu").sticky({
            topSpacing: 120
        }), t(window).scroll(function() {
            var e = t(window).scrollTop();
            e >= 20 && t(".home-two-nav").addClass("nav-two-bg"), 0 === e && t(".home-two-nav").removeClass("nav-two-bg")
        }), t(window).scroll(function() {
            var e = t(window).scrollTop();
            e >= 20 && t(".single-post-nav").addClass("nav-two-bg"), 0 === e && t(".single-post-nav").removeClass("nav-two-bg")
        }), t(window).scroll(function() {
            t(this).scrollTop() > t(document).height() - t(".rq-footer").height() - t(window).height() ? t("#elements-menu").css("visibility", "hidden") : t("#elements-menu").css("visibility", "visible")
        }), t(".toggle-widget").on("click", function() {
            t(".footer-widget").slideToggle(300), t(this).toggleClass("active")
        }), t("#slider-range").slider({
            range: !0,
            min: 0,
            max: 500,
            values: [75, 300],
            slide: function(e, n) {
                t("#amount").val("$" + n.values[0] + " - $" + n.values[1])
            }
        }), t("#amount").val("$" + t("#slider-range").slider("values", 0) + " - $" + t("#slider-range").slider("values", 1)), t(".table-responsive").niceScroll({
            scrollspeed: 10,
            mousescrollstep: 100,
            autohidemode: !1,
            cursorcolor: "#0a252e",
            background: "#efeeee",
            cursorborderradius: 0,
            cursorborder: 0
        }), t(".child-tab-wrapper .nav-tabs").niceScroll({
            scrollspeed: 10,
            mousescrollstep: 100,
            autohidemode: !0,
            cursorcolor: "#0a252e",
            background: "#efeeee",
            cursorborderradius: 0,
            cursorborder: 0
        }), t(".rq-search-content select").selectize(), t(".rq-cart-options-content select").selectize()
    }(jQuery),
    function(t) {
        t(".faq-single .hidden-content").hide();
        t(".faq-single").on("click", "a.faq-title", function(e) {
            e.preventDefault();
            var n = t(this),
                i = n.next("p.hidden-content"),
                o = t("p.hidden-content"),
                s = t("a.faq-title");
            n.hasClass("active") !== !1 ? (o.slideUp(), n.removeClass("active")) : (s.removeClass("active"), n.toggleClass("active"), o.slideUp(), i.slideToggle())
        }), t(".rq-grid-list-view-option").on("click", "a", function(e) {
            e.preventDefault();
            var n = t(this),
                i = n.data("class");
            n.siblings().removeClass("active");
            var o = t(".rq-listing-choose");
            "rq-listing-list" === i ? o.removeClass("rq-listing-grid").addClass(i) : o.removeClass("rq-listing-list").addClass(i), n.addClass("active")
        }), t("input#enddate").on("click", function() {
            t("input#startdate").trigger("click")
        }), t("input#startdate").daterangepicker({
            autoUpdateInput: !1,
            minDate: new Date,
            locale: {
                cancelLabel: "Clear"
            }
        }), t("input#startdate").on("apply.daterangepicker", function(e, n) {
            t("#startdate").val(n.startDate.format("MM/DD/YYYY"))
        }), t("input#startdate").on("apply.daterangepicker", function(e, n) {
            t("#enddate").val(n.endDate.format("MM/DD/YYYY"))
        }), t("input#startdate").on("cancel.daterangepicker", function(e, n) {
            t("input#startdate").val(""), t("input#enddate").val("")
        })
    }(jQuery),
    function(t) {
        jQuery(".owl-loop").owlCarousel({
            center: !0,
            items: 1,
            loop: !0,
            nav: !0,
            navText: ["&#xf3d2;", "&#xf3d3;"],
            margin: 20,
            responsive: {
                600: {
                    items: 1
                },
                1e3: {
                    items: 3
                },
                1400: {
                    items: 5
                }
            }
        }), jQuery(".details-slider").owlCarousel({
            center: !0,
            items: 1,
            loop: !0,
            nav: !0,
            navText: ["&#xf3d2", "&#xf3d3;"]
        }), jQuery(".testimonial-wrapper").owlCarousel({
            center: !0,
            items: 1,
            loop: !0,
            nav: !1,
            navText: ["&#xf3d2;", "&#xf3d3;"],
            margin: 20
        }), (0, s["default"])(".fitvids-wrapper")
    }(jQuery)
}, function(t, e, n) {
    "use strict";
    n(2), n(3), n(4), n(5), n(6), n(7), n(8), n(9), n(10), n(11), n(12), n(13)
}, function(t, e) {
    "use strict"; + function(t) {
        function e() {
            var t = document.createElement("bootstrap"),
                e = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var n in e)
                if (void 0 !== t.style[n]) return {
                    end: e[n]
                };
            return !1
        }
        t.fn.emulateTransitionEnd = function(e) {
            var n = !1,
                i = this;
            t(this).one("bsTransitionEnd", function() {
                n = !0
            });
            var o = function() {
                n || t(i).trigger(t.support.transition.end)
            };
            return setTimeout(o, e), this
        }, t(function() {
            t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
                bindType: t.support.transition.end,
                delegateType: t.support.transition.end,
                handle: function(e) {
                    return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
                }
            })
        })
    }(jQuery)
}, function(t, e) {
    "use strict"; + function(t) {
        function e(e) {
            return this.each(function() {
                var n = t(this),
                    o = n.data("bs.alert");
                o || n.data("bs.alert", o = new i(this)), "string" == typeof e && o[e].call(n)
            })
        }
        var n = '[data-dismiss="alert"]',
            i = function(e) {
                t(e).on("click", n, this.close)
            };
        i.VERSION = "3.3.6", i.TRANSITION_DURATION = 150, i.prototype.close = function(e) {
            function n() {
                r.detach().trigger("closed.bs.alert").remove()
            }
            var o = t(this),
                s = o.attr("data-target");
            s || (s = o.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, ""));
            var r = t(s);
            e && e.preventDefault(), r.length || (r = o.closest(".alert")), r.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
        };
        var o = t.fn.alert;
        t.fn.alert = e, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function() {
            return t.fn.alert = o, this
        }, t(document).on("click.bs.alert.data-api", n, i.prototype.close)
    }(jQuery)
}, function(t, e) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    }; + function(t) {
        function e(e) {
            return this.each(function() {
                var o = t(this),
                    s = o.data("bs.button"),
                    r = "object" == ("undefined" == typeof e ? "undefined" : n(e)) && e;
                s || o.data("bs.button", s = new i(this, r)), "toggle" == e ? s.toggle() : e && s.setState(e)
            })
        }
        var i = function s(e, n) {
            this.$element = t(e), this.options = t.extend({}, s.DEFAULTS, n), this.isLoading = !1
        };
        i.VERSION = "3.3.6", i.DEFAULTS = {
            loadingText: "loading..."
        }, i.prototype.setState = function(e) {
            var n = "disabled",
                i = this.$element,
                o = i.is("input") ? "val" : "html",
                s = i.data();
            e += "Text", null == s.resetText && i.data("resetText", i[o]()), setTimeout(t.proxy(function() {
                i[o](null == s[e] ? this.options[e] : s[e]), "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n))
            }, this), 0)
        }, i.prototype.toggle = function() {
            var t = !0,
                e = this.$element.closest('[data-toggle="buttons"]');
            if (e.length) {
                var n = this.$element.find("input");
                "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")
            } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
        };
        var o = t.fn.button;
        t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function() {
            return t.fn.button = o, this
        }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
            var i = t(n.target);
            i.hasClass("btn") || (i = i.closest(".btn")), e.call(i, "toggle"), t(n.target).is('input[type="radio"]') || t(n.target).is('input[type="checkbox"]') || n.preventDefault()
        }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
            t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
        })
    }(jQuery)
}, function(t, e) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    }; + function(t) {
        function e(e) {
            return this.each(function() {
                var o = t(this),
                    s = o.data("bs.carousel"),
                    r = t.extend({}, i.DEFAULTS, o.data(), "object" == ("undefined" == typeof e ? "undefined" : n(e)) && e),
                    a = "string" == typeof e ? e : r.slide;
                s || o.data("bs.carousel", s = new i(this, r)), "number" == typeof e ? s.to(e) : a ? s[a]() : r.interval && s.pause().cycle()
            })
        }
        var i = function(e, n) {
            this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
        };
        i.VERSION = "3.3.6", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
            interval: 5e3,
            pause: "hover",
            wrap: !0,
            keyboard: !0
        }, i.prototype.keydown = function(t) {
            if (!/input|textarea/i.test(t.target.tagName)) {
                switch (t.which) {
                    case 37:
                        this.prev();
                        break;
                    case 39:
                        this.next();
                        break;
                    default:
                        return
                }
                t.preventDefault()
            }
        }, i.prototype.cycle = function(e) {
            return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
        }, i.prototype.getItemIndex = function(t) {
            return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
        }, i.prototype.getItemForDirection = function(t, e) {
            var n = this.getItemIndex(e),
                i = "prev" == t && 0 === n || "next" == t && n == this.$items.length - 1;
            if (i && !this.options.wrap) return e;
            var o = "prev" == t ? -1 : 1,
                s = (n + o) % this.$items.length;
            return this.$items.eq(s)
        }, i.prototype.to = function(t) {
            var e = this,
                n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
            return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
                e.to(t)
            }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
        }, i.prototype.pause = function(e) {
            return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
        }, i.prototype.next = function() {
            return this.sliding ? void 0 : this.slide("next")
        }, i.prototype.prev = function() {
            return this.sliding ? void 0 : this.slide("prev")
        }, i.prototype.slide = function(e, n) {
            var o = this.$element.find(".item.active"),
                s = n || this.getItemForDirection(e, o),
                r = this.interval,
                a = "next" == e ? "left" : "right",
                l = this;
            if (s.hasClass("active")) return this.sliding = !1;
            var d = s[0],
                u = t.Event("slide.bs.carousel", {
                    relatedTarget: d,
                    direction: a
                });
            if (this.$element.trigger(u), !u.isDefaultPrevented()) {
                if (this.sliding = !0, r && this.pause(), this.$indicators.length) {
                    this.$indicators.find(".active").removeClass("active");
                    var c = t(this.$indicators.children()[this.getItemIndex(s)]);
                    c && c.addClass("active")
                }
                var h = t.Event("slid.bs.carousel", {
                    relatedTarget: d,
                    direction: a
                });
                return t.support.transition && this.$element.hasClass("slide") ? (s.addClass(e), s[0].offsetWidth, o.addClass(a), s.addClass(a), o.one("bsTransitionEnd", function() {
                    s.removeClass([e, a].join(" ")).addClass("active"), o.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function() {
                        l.$element.trigger(h)
                    }, 0)
                }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (o.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(h)), r && this.cycle(), this
            }
        };
        var o = t.fn.carousel;
        t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() {
            return t.fn.carousel = o, this
        };
        var s = function(n) {
            var i, o = t(this),
                s = t(o.attr("data-target") || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
            if (s.hasClass("carousel")) {
                var r = t.extend({}, s.data(), o.data()),
                    a = o.attr("data-slide-to");
                a && (r.interval = !1), e.call(s, r), a && s.data("bs.carousel").to(a), n.preventDefault()
            }
        };
        t(document).on("click.bs.carousel.data-api", "[data-slide]", s).on("click.bs.carousel.data-api", "[data-slide-to]", s), t(window).on("load", function() {
            t('[data-ride="carousel"]').each(function() {
                var n = t(this);
                e.call(n, n.data())
            })
        })
    }(jQuery)
}, function(t, e) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    }; + function(t) {
        function e(e) {
            var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
            return t(i)
        }

        function i(e) {
            return this.each(function() {
                var i = t(this),
                    s = i.data("bs.collapse"),
                    r = t.extend({}, o.DEFAULTS, i.data(), "object" == ("undefined" == typeof e ? "undefined" : n(e)) && e);
                !s && r.toggle && /show|hide/.test(e) && (r.toggle = !1), s || i.data("bs.collapse", s = new o(this, r)), "string" == typeof e && s[e]()
            })
        }
        var o = function r(e, n) {
            this.$element = t(e), this.options = t.extend({}, r.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
        };
        o.VERSION = "3.3.6", o.TRANSITION_DURATION = 350, o.DEFAULTS = {
            toggle: !0
        }, o.prototype.dimension = function() {
            var t = this.$element.hasClass("width");
            return t ? "width" : "height"
        }, o.prototype.show = function() {
            if (!this.transitioning && !this.$element.hasClass("in")) {
                var e, n = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                if (!(n && n.length && (e = n.data("bs.collapse"), e && e.transitioning))) {
                    var s = t.Event("show.bs.collapse");
                    if (this.$element.trigger(s), !s.isDefaultPrevented()) {
                        n && n.length && (i.call(n, "hide"), e || n.data("bs.collapse", null));
                        var r = this.dimension();
                        this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                        var a = function() {
                            this.$element.removeClass("collapsing").addClass("collapse in")[r](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                        };
                        if (!t.support.transition) return a.call(this);
                        var l = t.camelCase(["scroll", r].join("-"));
                        this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(o.TRANSITION_DURATION)[r](this.$element[0][l])
                    }
                }
            }
        }, o.prototype.hide = function() {
            if (!this.transitioning && this.$element.hasClass("in")) {
                var e = t.Event("hide.bs.collapse");
                if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                    var n = this.dimension();
                    this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                    var i = function() {
                        this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                    };
                    return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(i, this)).emulateTransitionEnd(o.TRANSITION_DURATION) : i.call(this)
                }
            }
        }, o.prototype.toggle = function() {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        }, o.prototype.getParent = function() {
            return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(n, i) {
                var o = t(i);
                this.addAriaAndCollapsedClass(e(o), o)
            }, this)).end()
        }, o.prototype.addAriaAndCollapsedClass = function(t, e) {
            var n = t.hasClass("in");
            t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
        };
        var s = t.fn.collapse;
        t.fn.collapse = i, t.fn.collapse.Constructor = o, t.fn.collapse.noConflict = function() {
            return t.fn.collapse = s, this
        }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(n) {
            var o = t(this);
            o.attr("data-target") || n.preventDefault();
            var s = e(o),
                r = s.data("bs.collapse"),
                a = r ? "toggle" : o.data();
            i.call(s, a)
        })
    }(jQuery)
}, function(t, e) {
    "use strict"; + function(t) {
        function e(e) {
            var n = e.attr("data-target");
            n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
            var i = n && t(n);
            return i && i.length ? i : e.parent()
        }

        function n(n) {
            n && 3 === n.which || (t(o).remove(), t(s).each(function() {
                var i = t(this),
                    o = e(i),
                    s = {
                        relatedTarget: this
                    };
                o.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(o[0], n.target) || (o.trigger(n = t.Event("hide.bs.dropdown", s)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), o.removeClass("open").trigger(t.Event("hidden.bs.dropdown", s)))))
            }))
        }

        function i(e) {
            return this.each(function() {
                var n = t(this),
                    i = n.data("bs.dropdown");
                i || n.data("bs.dropdown", i = new r(this)), "string" == typeof e && i[e].call(n)
            })
        }
        var o = ".dropdown-backdrop",
            s = '[data-toggle="dropdown"]',
            r = function(e) {
                t(e).on("click.bs.dropdown", this.toggle)
            };
        r.VERSION = "3.3.6", r.prototype.toggle = function(i) {
            var o = t(this);
            if (!o.is(".disabled, :disabled")) {
                var s = e(o),
                    r = s.hasClass("open");
                if (n(), !r) {
                    "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n);
                    var a = {
                        relatedTarget: this
                    };
                    if (s.trigger(i = t.Event("show.bs.dropdown", a)), i.isDefaultPrevented()) return;
                    o.trigger("focus").attr("aria-expanded", "true"), s.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a))
                }
                return !1
            }
        }, r.prototype.keydown = function(n) {
            if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
                var i = t(this);
                if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                    var o = e(i),
                        r = o.hasClass("open");
                    if (!r && 27 != n.which || r && 27 == n.which) return 27 == n.which && o.find(s).trigger("focus"), i.trigger("click");
                    var a = " li:not(.disabled):visible a",
                        l = o.find(".dropdown-menu" + a);
                    if (l.length) {
                        var d = l.index(n.target);
                        38 == n.which && d > 0 && d--, 40 == n.which && d < l.length - 1 && d++, ~d || (d = 0), l.eq(d).trigger("focus")
                    }
                }
            }
        };
        var a = t.fn.dropdown;
        t.fn.dropdown = i, t.fn.dropdown.Constructor = r, t.fn.dropdown.noConflict = function() {
            return t.fn.dropdown = a, this
        }, t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
            t.stopPropagation()
        }).on("click.bs.dropdown.data-api", s, r.prototype.toggle).on("keydown.bs.dropdown.data-api", s, r.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", r.prototype.keydown)
    }(jQuery)
}, function(t, e) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    }; + function(t) {
        function e(e, o) {
            return this.each(function() {
                var s = t(this),
                    r = s.data("bs.modal"),
                    a = t.extend({}, i.DEFAULTS, s.data(), "object" == ("undefined" == typeof e ? "undefined" : n(e)) && e);
                r || s.data("bs.modal", r = new i(this, a)), "string" == typeof e ? r[e](o) : a.show && r.show(o)
            })
        }
        var i = function(e, n) {
            this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        };
        i.VERSION = "3.3.6", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        }, i.prototype.toggle = function(t) {
            return this.isShown ? this.hide() : this.show(t)
        }, i.prototype.show = function(e) {
            var n = this,
                o = t.Event("show.bs.modal", {
                    relatedTarget: e
                });
            this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
                n.$element.one("mouseup.dismiss.bs.modal", function(e) {
                    t(e.target).is(n.$element) && (n.ignoreBackdropClick = !0)
                })
            }), this.backdrop(function() {
                var o = t.support.transition && n.$element.hasClass("fade");
                n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), n.adjustDialog(), o && n.$element[0].offsetWidth, n.$element.addClass("in"), n.enforceFocus();
                var s = t.Event("shown.bs.modal", {
                    relatedTarget: e
                });
                o ? n.$dialog.one("bsTransitionEnd", function() {
                    n.$element.trigger("focus").trigger(s)
                }).emulateTransitionEnd(i.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(s)
            }))
        }, i.prototype.hide = function(e) {
            e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
        }, i.prototype.enforceFocus = function() {
            t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
                this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
            }, this))
        }, i.prototype.escape = function() {
            this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
                27 == t.which && this.hide()
            }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
        }, i.prototype.resize = function() {
            this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
        }, i.prototype.hideModal = function() {
            var t = this;
            this.$element.hide(), this.backdrop(function() {
                t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
            })
        }, i.prototype.removeBackdrop = function() {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
        }, i.prototype.backdrop = function(e) {
            var n = this,
                o = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var s = t.support.transition && o;
                if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                        return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                    }, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
                s ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
            } else if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                var r = function() {
                    n.removeBackdrop(), e && e()
                };
                t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : r()
            } else e && e()
        }, i.prototype.handleUpdate = function() {
            this.adjustDialog()
        }, i.prototype.adjustDialog = function() {
            var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
            this.$element.css({
                paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
                paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
            })
        }, i.prototype.resetAdjustments = function() {
            this.$element.css({
                paddingLeft: "",
                paddingRight: ""
            })
        }, i.prototype.checkScrollbar = function() {
            var t = window.innerWidth;
            if (!t) {
                var e = document.documentElement.getBoundingClientRect();
                t = e.right - Math.abs(e.left)
            }
            this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
        }, i.prototype.setScrollbar = function() {
            var t = parseInt(this.$body.css("padding-right") || 0, 10);
            this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
        }, i.prototype.resetScrollbar = function() {
            this.$body.css("padding-right", this.originalBodyPad)
        }, i.prototype.measureScrollbar = function() {
            var t = document.createElement("div");
            t.className = "modal-scrollbar-measure", this.$body.append(t);
            var e = t.offsetWidth - t.clientWidth;
            return this.$body[0].removeChild(t), e
        };
        var o = t.fn.modal;
        t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() {
            return t.fn.modal = o, this
        }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
            var i = t(this),
                o = i.attr("href"),
                s = t(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
                r = s.data("bs.modal") ? "toggle" : t.extend({
                    remote: !/#/.test(o) && o
                }, s.data(), i.data());
            i.is("a") && n.preventDefault(), s.one("show.bs.modal", function(t) {
                t.isDefaultPrevented() || s.one("hidden.bs.modal", function() {
                    i.is(":visible") && i.trigger("focus")
                })
            }), e.call(s, r, this)
        })
    }(jQuery)
}, function(t, e) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    }; + function(t) {
        function e(e) {
            return this.each(function() {
                var o = t(this),
                    s = o.data("bs.tooltip"),
                    r = "object" == ("undefined" == typeof e ? "undefined" : n(e)) && e;
                !s && /destroy|hide/.test(e) || (s || o.data("bs.tooltip", s = new i(this, r)), "string" == typeof e && s[e]())
            })
        }
        var i = function(t, e) {
            this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
        };
        i.VERSION = "3.3.6", i.TRANSITION_DURATION = 150, i.DEFAULTS = {
            animation: !0,
            placement: "top",
            selector: !1,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            container: !1,
            viewport: {
                selector: "body",
                padding: 0
            }
        }, i.prototype.init = function(e, n, i) {
            if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                    click: !1,
                    hover: !1,
                    focus: !1
                }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
            for (var o = this.options.trigger.split(" "), s = o.length; s--;) {
                var r = o[s];
                if ("click" == r) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
                else if ("manual" != r) {
                    var a = "hover" == r ? "mouseenter" : "focusin",
                        l = "hover" == r ? "mouseleave" : "focusout";
                    this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
                }
            }
            this.options.selector ? this._options = t.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        }, i.prototype.getDefaults = function() {
            return i.DEFAULTS
        }, i.prototype.getOptions = function(e) {
            return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }), e
        }, i.prototype.getDelegateOptions = function() {
            var e = {},
                n = this.getDefaults();
            return this._options && t.each(this._options, function(t, i) {
                n[t] != i && (e[t] = i)
            }), e
        }, i.prototype.enter = function(e) {
            var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
            return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
                "in" == n.hoverState && n.show()
            }, n.options.delay.show)) : n.show())
        }, i.prototype.isInStateTrue = function() {
            for (var t in this.inState)
                if (this.inState[t]) return !0;
            return !1
        }, i.prototype.leave = function(e) {
            var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
            return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), n.isInStateTrue() ? void 0 : (clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
                "out" == n.hoverState && n.hide()
            }, n.options.delay.hide)) : n.hide())
        }, i.prototype.show = function() {
            var e = t.Event("show.bs." + this.type);
            if (this.hasContent() && this.enabled) {
                this.$element.trigger(e);
                var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                if (e.isDefaultPrevented() || !n) return;
                var o = this,
                    s = this.tip(),
                    r = this.getUID(this.type);
                this.setContent(), s.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && s.addClass("fade");
                var a = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement,
                    l = /\s?auto?\s?/i,
                    d = l.test(a);
                d && (a = a.replace(l, "") || "top"), s.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).addClass(a).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
                var u = this.getPosition(),
                    c = s[0].offsetWidth,
                    h = s[0].offsetHeight;
                if (d) {
                    var p = a,
                        f = this.getPosition(this.$viewport);
                    a = "bottom" == a && u.bottom + h > f.bottom ? "top" : "top" == a && u.top - h < f.top ? "bottom" : "right" == a && u.right + c > f.width ? "left" : "left" == a && u.left - c < f.left ? "right" : a, s.removeClass(p).addClass(a)
                }
                var m = this.getCalculatedOffset(a, u, c, h);
                this.applyPlacement(m, a);
                var _ = function() {
                    var t = o.hoverState;
                    o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == t && o.leave(o)
                };
                t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", _).emulateTransitionEnd(i.TRANSITION_DURATION) : _()
            }
        }, i.prototype.applyPlacement = function(e, n) {
            var i = this.tip(),
                o = i[0].offsetWidth,
                s = i[0].offsetHeight,
                r = parseInt(i.css("margin-top"), 10),
                a = parseInt(i.css("margin-left"), 10);
            isNaN(r) && (r = 0), isNaN(a) && (a = 0), e.top += r, e.left += a, t.offset.setOffset(i[0], t.extend({
                using: function(t) {
                    i.css({
                        top: Math.round(t.top),
                        left: Math.round(t.left)
                    })
                }
            }, e), 0), i.addClass("in");
            var l = i[0].offsetWidth,
                d = i[0].offsetHeight;
            "top" == n && d != s && (e.top = e.top + s - d);
            var u = this.getViewportAdjustedDelta(n, e, l, d);
            u.left ? e.left += u.left : e.top += u.top;
            var c = /top|bottom/.test(n),
                h = c ? 2 * u.left - o + l : 2 * u.top - s + d,
                p = c ? "offsetWidth" : "offsetHeight";
            i.offset(e), this.replaceArrow(h, i[0][p], c)
        }, i.prototype.replaceArrow = function(t, e, n) {
            this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
        }, i.prototype.setContent = function() {
            var t = this.tip(),
                e = this.getTitle();
            t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
        }, i.prototype.hide = function(e) {
            function n() {
                "in" != o.hoverState && s.detach(), o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), e && e()
            }
            var o = this,
                s = t(this.$tip),
                r = t.Event("hide.bs." + this.type);
            return this.$element.trigger(r), r.isDefaultPrevented() ? void 0 : (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n(), this.hoverState = null, this)
        }, i.prototype.fixTitle = function() {
            var t = this.$element;
            (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
        }, i.prototype.hasContent = function() {
            return this.getTitle()
        }, i.prototype.getPosition = function(e) {
            e = e || this.$element;
            var n = e[0],
                i = "BODY" == n.tagName,
                o = n.getBoundingClientRect();
            null == o.width && (o = t.extend({}, o, {
                width: o.right - o.left,
                height: o.bottom - o.top
            }));
            var s = i ? {
                    top: 0,
                    left: 0
                } : e.offset(),
                r = {
                    scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
                },
                a = i ? {
                    width: t(window).width(),
                    height: t(window).height()
                } : null;
            return t.extend({}, o, r, a, s)
        }, i.prototype.getCalculatedOffset = function(t, e, n, i) {
            return "bottom" == t ? {
                top: e.top + e.height,
                left: e.left + e.width / 2 - n / 2
            } : "top" == t ? {
                top: e.top - i,
                left: e.left + e.width / 2 - n / 2
            } : "left" == t ? {
                top: e.top + e.height / 2 - i / 2,
                left: e.left - n
            } : {
                top: e.top + e.height / 2 - i / 2,
                left: e.left + e.width
            }
        }, i.prototype.getViewportAdjustedDelta = function(t, e, n, i) {
            var o = {
                top: 0,
                left: 0
            };
            if (!this.$viewport) return o;
            var s = this.options.viewport && this.options.viewport.padding || 0,
                r = this.getPosition(this.$viewport);
            if (/right|left/.test(t)) {
                var a = e.top - s - r.scroll,
                    l = e.top + s - r.scroll + i;
                a < r.top ? o.top = r.top - a : l > r.top + r.height && (o.top = r.top + r.height - l)
            } else {
                var d = e.left - s,
                    u = e.left + s + n;
                d < r.left ? o.left = r.left - d : u > r.right && (o.left = r.left + r.width - u);
            }
            return o
        }, i.prototype.getTitle = function() {
            var t, e = this.$element,
                n = this.options;
            return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
        }, i.prototype.getUID = function(t) {
            do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
            return t
        }, i.prototype.tip = function() {
            if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
            return this.$tip
        }, i.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        }, i.prototype.enable = function() {
            this.enabled = !0
        }, i.prototype.disable = function() {
            this.enabled = !1
        }, i.prototype.toggleEnabled = function() {
            this.enabled = !this.enabled
        }, i.prototype.toggle = function(e) {
            var n = this;
            e && (n = t(e.currentTarget).data("bs." + this.type), n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
        }, i.prototype.destroy = function() {
            var t = this;
            clearTimeout(this.timeout), this.hide(function() {
                t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
            })
        };
        var o = t.fn.tooltip;
        t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function() {
            return t.fn.tooltip = o, this
        }
    }(jQuery)
}, function(t, e) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    }; + function(t) {
        function e(e) {
            return this.each(function() {
                var o = t(this),
                    s = o.data("bs.popover"),
                    r = "object" == ("undefined" == typeof e ? "undefined" : n(e)) && e;
                !s && /destroy|hide/.test(e) || (s || o.data("bs.popover", s = new i(this, r)), "string" == typeof e && s[e]())
            })
        }
        var i = function(t, e) {
            this.init("popover", t, e)
        };
        if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
        i.VERSION = "3.3.6", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function() {
            return i.DEFAULTS
        }, i.prototype.setContent = function() {
            var t = this.tip(),
                e = this.getTitle(),
                n = this.getContent();
            t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
        }, i.prototype.hasContent = function() {
            return this.getTitle() || this.getContent()
        }, i.prototype.getContent = function() {
            var t = this.$element,
                e = this.options;
            return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
        }, i.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".arrow")
        };
        var o = t.fn.popover;
        t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function() {
            return t.fn.popover = o, this
        }
    }(jQuery)
}, function(t, e) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    }; + function(t) {
        function e(n, i) {
            this.$body = t(document.body), this.$scrollElement = t(t(n).is(document.body) ? window : n), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
        }

        function i(i) {
            return this.each(function() {
                var o = t(this),
                    s = o.data("bs.scrollspy"),
                    r = "object" == ("undefined" == typeof i ? "undefined" : n(i)) && i;
                s || o.data("bs.scrollspy", s = new e(this, r)), "string" == typeof i && s[i]()
            })
        }
        e.VERSION = "3.3.6", e.DEFAULTS = {
            offset: 10
        }, e.prototype.getScrollHeight = function() {
            return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
        }, e.prototype.refresh = function() {
            var e = this,
                n = "offset",
                i = 0;
            this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
                var e = t(this),
                    o = e.data("target") || e.attr("href"),
                    s = /^#./.test(o) && t(o);
                return s && s.length && s.is(":visible") && [
                    [s[n]().top + i, o]
                ] || null
            }).sort(function(t, e) {
                return t[0] - e[0]
            }).each(function() {
                e.offsets.push(this[0]), e.targets.push(this[1])
            })
        }, e.prototype.process = function() {
            var t, e = this.$scrollElement.scrollTop() + this.options.offset,
                n = this.getScrollHeight(),
                i = this.options.offset + n - this.$scrollElement.height(),
                o = this.offsets,
                s = this.targets,
                r = this.activeTarget;
            if (this.scrollHeight != n && this.refresh(), e >= i) return r != (t = s[s.length - 1]) && this.activate(t);
            if (r && e < o[0]) return this.activeTarget = null, this.clear();
            for (t = o.length; t--;) r != s[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(s[t])
        }, e.prototype.activate = function(e) {
            this.activeTarget = e, this.clear();
            var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
                i = t(n).parents("li").addClass("active");
            i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
        }, e.prototype.clear = function() {
            t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
        };
        var o = t.fn.scrollspy;
        t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
            return t.fn.scrollspy = o, this
        }, t(window).on("load.bs.scrollspy.data-api", function() {
            t('[data-spy="scroll"]').each(function() {
                var e = t(this);
                i.call(e, e.data())
            })
        })
    }(jQuery)
}, function(t, e) {
    "use strict"; + function(t) {
        function e(e) {
            return this.each(function() {
                var i = t(this),
                    o = i.data("bs.tab");
                o || i.data("bs.tab", o = new n(this)), "string" == typeof e && o[e]()
            })
        }
        var n = function(e) {
            this.element = t(e)
        };
        n.VERSION = "3.3.6", n.TRANSITION_DURATION = 150, n.prototype.show = function() {
            var e = this.element,
                n = e.closest("ul:not(.dropdown-menu)"),
                i = e.data("target");
            if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
                var o = n.find(".active:last a"),
                    s = t.Event("hide.bs.tab", {
                        relatedTarget: e[0]
                    }),
                    r = t.Event("show.bs.tab", {
                        relatedTarget: o[0]
                    });
                if (o.trigger(s), e.trigger(r), !r.isDefaultPrevented() && !s.isDefaultPrevented()) {
                    var a = t(i);
                    this.activate(e.closest("li"), n), this.activate(a, a.parent(), function() {
                        o.trigger({
                            type: "hidden.bs.tab",
                            relatedTarget: e[0]
                        }), e.trigger({
                            type: "shown.bs.tab",
                            relatedTarget: o[0]
                        })
                    })
                }
            }
        }, n.prototype.activate = function(e, i, o) {
            function s() {
                r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
            }
            var r = i.find("> .active"),
                a = o && t.support.transition && (r.length && r.hasClass("fade") || !!i.find("> .fade").length);
            r.length && a ? r.one("bsTransitionEnd", s).emulateTransitionEnd(n.TRANSITION_DURATION) : s(), r.removeClass("in")
        };
        var i = t.fn.tab;
        t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function() {
            return t.fn.tab = i, this
        };
        var o = function(n) {
            n.preventDefault(), e.call(t(this), "show")
        };
        t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
    }(jQuery)
}, function(t, e) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    }; + function(t) {
        function e(e) {
            return this.each(function() {
                var o = t(this),
                    s = o.data("bs.affix"),
                    r = "object" == ("undefined" == typeof e ? "undefined" : n(e)) && e;
                s || o.data("bs.affix", s = new i(this, r)), "string" == typeof e && s[e]()
            })
        }
        var i = function s(e, n) {
            this.options = t.extend({}, s.DEFAULTS, n), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
        };
        i.VERSION = "3.3.6", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
            offset: 0,
            target: window
        }, i.prototype.getState = function(t, e, n, i) {
            var o = this.$target.scrollTop(),
                s = this.$element.offset(),
                r = this.$target.height();
            if (null != n && "top" == this.affixed) return n > o ? "top" : !1;
            if ("bottom" == this.affixed) return null != n ? o + this.unpin <= s.top ? !1 : "bottom" : t - i >= o + r ? !1 : "bottom";
            var a = null == this.affixed,
                l = a ? o : s.top,
                d = a ? r : e;
            return null != n && n >= o ? "top" : null != i && l + d >= t - i ? "bottom" : !1
        }, i.prototype.getPinnedOffset = function() {
            if (this.pinnedOffset) return this.pinnedOffset;
            this.$element.removeClass(i.RESET).addClass("affix");
            var t = this.$target.scrollTop(),
                e = this.$element.offset();
            return this.pinnedOffset = e.top - t
        }, i.prototype.checkPositionWithEventLoop = function() {
            setTimeout(t.proxy(this.checkPosition, this), 1)
        }, i.prototype.checkPosition = function() {
            if (this.$element.is(":visible")) {
                var e = this.$element.height(),
                    o = this.options.offset,
                    s = o.top,
                    r = o.bottom,
                    a = Math.max(t(document).height(), t(document.body).height());
                "object" != ("undefined" == typeof o ? "undefined" : n(o)) && (r = s = o), "function" == typeof s && (s = o.top(this.$element)), "function" == typeof r && (r = o.bottom(this.$element));
                var l = this.getState(a, e, s, r);
                if (this.affixed != l) {
                    null != this.unpin && this.$element.css("top", "");
                    var d = "affix" + (l ? "-" + l : ""),
                        u = t.Event(d + ".bs.affix");
                    if (this.$element.trigger(u), u.isDefaultPrevented()) return;
                    this.affixed = l, this.unpin = "bottom" == l ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(d).trigger(d.replace("affix", "affixed") + ".bs.affix")
                }
                "bottom" == l && this.$element.offset({
                    top: a - e - r
                })
            }
        };
        var o = t.fn.affix;
        t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() {
            return t.fn.affix = o, this
        }, t(window).on("load", function() {
            t('[data-spy="affix"]').each(function() {
                var n = t(this),
                    i = n.data();
                i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), e.call(n, i)
            })
        })
    }(jQuery)
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(r, a) {
        o = [n(15), n(18), n(19)], i = a, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s))
    }(void 0, function(t, e, n) {
        "use strict";
        var i = function W(t, e) {
                if ("string" != typeof e || e.length) {
                    var n = "string" == typeof e ? new RegExp(e, "i") : e,
                        W = function i(t) {
                            var e = 0;
                            if (3 === t.nodeType) {
                                var o = t.data.search(n);
                                if (o >= 0 && t.data.length > 0) {
                                    var s = t.data.match(n),
                                        r = document.createElement("span");
                                    r.className = "highlight";
                                    var a = t.splitText(o),
                                        l = (a.splitText(s[0].length), a.cloneNode(!0));
                                    r.appendChild(l), a.parentNode.replaceChild(r, a), e = 1
                                }
                            } else if (1 === t.nodeType && t.childNodes && !/(script|style)/i.test(t.tagName))
                                for (var d = 0; d < t.childNodes.length; ++d) d += i(t.childNodes[d]);
                            return e
                        };
                    return t.each(function() {
                        W(this)
                    })
                }
            },
            o = function() {};
        o.prototype = {
            on: function(t, e) {
                this._events = this._events || {}, this._events[t] = this._events[t] || [], this._events[t].push(e)
            },
            off: function(t, e) {
                var n = arguments.length;
                return 0 === n ? delete this._events : 1 === n ? delete this._events[t] : (this._events = this._events || {}, void(t in this._events != !1 && this._events[t].splice(this._events[t].indexOf(e), 1)))
            },
            trigger: function(t) {
                if (this._events = this._events || {}, t in this._events != !1)
                    for (var e = 0; e < this._events[t].length; e++) this._events[t][e].apply(this, Array.prototype.slice.call(arguments, 1))
            }
        }, o.mixin = function(t) {
            for (var e = ["on", "off", "trigger"], n = 0; n < e.length; n++) t.prototype[e[n]] = o.prototype[e[n]]
        };
        var s = /Mac/.test(navigator.userAgent),
            a = 65,
            l = 13,
            d = 27,
            u = 37,
            c = 38,
            h = 80,
            p = 39,
            f = 40,
            m = 78,
            _ = 8,
            y = 46,
            g = 16,
            v = s ? 91 : 17,
            b = s ? 18 : 17,
            M = 9,
            w = 1,
            L = 2,
            k = !/android/i.test(window.navigator.userAgent) && !!document.createElement("form").validity,
            D = function(t) {
                return "undefined" != typeof t
            },
            Y = function(t) {
                return "undefined" == typeof t || null === t ? null : "boolean" == typeof t ? t ? "1" : "0" : t + ""
            },
            S = function(t) {
                return (t + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
            },
            x = function(t) {
                return (t + "").replace(/\$/g, "$$$$")
            },
            T = {};
        T.before = function(t, e, n) {
            var i = t[e];
            t[e] = function() {
                return n.apply(t, arguments), i.apply(t, arguments)
            }
        }, T.after = function(t, e, n) {
            var i = t[e];
            t[e] = function() {
                var e = i.apply(t, arguments);
                return n.apply(t, arguments), e
            }
        };
        var C = function(t) {
                var e = !1;
                return function() {
                    e || (e = !0, t.apply(this, arguments))
                }
            },
            j = function(t, e) {
                var n;
                return function() {
                    var i = this,
                        o = arguments;
                    window.clearTimeout(n), n = window.setTimeout(function() {
                        t.apply(i, o)
                    }, e)
                }
            },
            H = function(t, e, n) {
                var i, o = t.trigger,
                    s = {};
                t.trigger = function() {
                    var n = arguments[0];
                    return -1 === e.indexOf(n) ? o.apply(t, arguments) : void(s[n] = arguments)
                }, n.apply(t, []), t.trigger = o;
                for (i in s) s.hasOwnProperty(i) && o.apply(t, s[i])
            },
            E = function(t, e, n, i) {
                t.on(e, n, function(e) {
                    for (var n = e.target; n && n.parentNode !== t[0];) n = n.parentNode;
                    return e.currentTarget = n, i.apply(this, [e])
                })
            },
            P = function(t) {
                var e = {};
                if ("selectionStart" in t) e.start = t.selectionStart, e.length = t.selectionEnd - e.start;
                else if (document.selection) {
                    t.focus();
                    var n = document.selection.createRange(),
                        i = document.selection.createRange().text.length;
                    n.moveStart("character", -t.value.length), e.start = n.text.length - i, e.length = i
                }
                return e
            },
            A = function(t, e, n) {
                var i, o, s = {};
                if (n)
                    for (i = 0, o = n.length; o > i; i++) s[n[i]] = t.css(n[i]);
                else s = t.css();
                e.css(s)
            },
            O = function(e, n) {
                if (!e) return 0;
                var i = t("<test>").css({
                    position: "absolute",
                    top: -99999,
                    left: -99999,
                    width: "auto",
                    padding: 0,
                    whiteSpace: "pre"
                }).text(e).appendTo("body");
                A(n, i, ["letterSpacing", "fontSize", "fontFamily", "fontWeight", "textTransform"]);
                var o = i.width();
                return i.remove(), o
            },
            $ = function(t) {
                var e = null,
                    n = function(n, i) {
                        var o, s, r, a, l, d, u, c;
                        n = n || window.event || {}, i = i || {}, n.metaKey || n.altKey || (i.force || t.data("grow") !== !1) && (o = t.val(), n.type && "keydown" === n.type.toLowerCase() && (s = n.keyCode, r = s >= 97 && 122 >= s || s >= 65 && 90 >= s || s >= 48 && 57 >= s || 32 === s, s === y || s === _ ? (c = P(t[0]), c.length ? o = o.substring(0, c.start) + o.substring(c.start + c.length) : s === _ && c.start ? o = o.substring(0, c.start - 1) + o.substring(c.start + 1) : s === y && "undefined" != typeof c.start && (o = o.substring(0, c.start) + o.substring(c.start + 1))) : r && (d = n.shiftKey, u = String.fromCharCode(n.keyCode), u = d ? u.toUpperCase() : u.toLowerCase(), o += u)), a = t.attr("placeholder"), !o && a && (o = a), l = O(o, t) + 4, l !== e && (e = l, t.width(l), t.triggerHandler("resize")))
                    };
                t.on("keydown keyup update blur", n), n()
            },
            z = function N(n, i) {
                var o, s, r, a, l = this;
                a = n[0], a.selectize = l;
                var d = window.getComputedStyle && window.getComputedStyle(a, null);
                if (r = d ? d.getPropertyValue("direction") : a.currentStyle && a.currentStyle.direction, r = r || n.parents("[dir]:first").attr("dir") || "", t.extend(l, {
                        order: 0,
                        settings: i,
                        $input: n,
                        tabIndex: n.attr("tabindex") || "",
                        tagType: "select" === a.tagName.toLowerCase() ? w : L,
                        rtl: /rtl/i.test(r),
                        eventNS: ".selectize" + ++N.count,
                        highlightedValue: null,
                        isOpen: !1,
                        isDisabled: !1,
                        isRequired: n.is("[required]"),
                        isInvalid: !1,
                        isLocked: !1,
                        isFocused: !1,
                        isInputHidden: !1,
                        isSetup: !1,
                        isShiftDown: !1,
                        isCmdDown: !1,
                        isCtrlDown: !1,
                        ignoreFocus: !1,
                        ignoreBlur: !1,
                        ignoreHover: !1,
                        hasOptions: !1,
                        currentResults: null,
                        lastValue: "",
                        caretPos: 0,
                        loading: 0,
                        loadedSearches: {},
                        $activeOption: null,
                        $activeItems: [],
                        optgroups: {},
                        options: {},
                        userOptions: {},
                        items: [],
                        renderCache: {},
                        onSearchChange: null === i.loadThrottle ? l.onSearchChange : j(l.onSearchChange, i.loadThrottle)
                    }), l.sifter = new e(this.options, {
                        diacritics: i.diacritics
                    }), l.settings.options) {
                    for (o = 0, s = l.settings.options.length; s > o; o++) l.registerOption(l.settings.options[o]);
                    delete l.settings.options
                }
                if (l.settings.optgroups) {
                    for (o = 0, s = l.settings.optgroups.length; s > o; o++) l.registerOptionGroup(l.settings.optgroups[o]);
                    delete l.settings.optgroups
                }
                l.settings.mode = l.settings.mode || (1 === l.settings.maxItems ? "single" : "multi"), "boolean" != typeof l.settings.hideSelected && (l.settings.hideSelected = "multi" === l.settings.mode), l.initializePlugins(l.settings.plugins), l.setupCallbacks(), l.setupTemplates(), l.setup()
            };
        return o.mixin(z), n.mixin(z), t.extend(z.prototype, {
            setup: function() {
                var e, n, i, o, r, a, l, d, u, c = this,
                    h = c.settings,
                    p = c.eventNS,
                    f = t(window),
                    m = t(document),
                    _ = c.$input;
                if (l = c.settings.mode, d = _.attr("class") || "", e = t("<div>").addClass(h.wrapperClass).addClass(d).addClass(l), n = t("<div>").addClass(h.inputClass).addClass("items").appendTo(e), i = t('<input type="text" autocomplete="off" />').appendTo(n).attr("tabindex", _.is(":disabled") ? "-1" : c.tabIndex), a = t(h.dropdownParent || e), o = t("<div>").addClass(h.dropdownClass).addClass(l).hide().appendTo(a), r = t("<div>").addClass(h.dropdownContentClass).appendTo(o), c.settings.copyClassesToDropdown && o.addClass(d), e.css({
                        width: _[0].style.width
                    }), c.plugins.names.length && (u = "plugin-" + c.plugins.names.join(" plugin-"), e.addClass(u), o.addClass(u)), (null === h.maxItems || h.maxItems > 1) && c.tagType === w && _.attr("multiple", "multiple"), c.settings.placeholder && i.attr("placeholder", h.placeholder), !c.settings.splitOn && c.settings.delimiter) {
                    var y = c.settings.delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
                    c.settings.splitOn = new RegExp("\\s*" + y + "+\\s*")
                }
                _.attr("autocorrect") && i.attr("autocorrect", _.attr("autocorrect")), _.attr("autocapitalize") && i.attr("autocapitalize", _.attr("autocapitalize")), c.$wrapper = e, c.$control = n, c.$control_input = i, c.$dropdown = o, c.$dropdown_content = r, o.on("mouseenter", "[data-selectable]", function() {
                    return c.onOptionHover.apply(c, arguments)
                }), o.on("mousedown click", "[data-selectable]", function() {
                    return c.onOptionSelect.apply(c, arguments)
                }), E(n, "mousedown", "*:not(input)", function() {
                    return c.onItemSelect.apply(c, arguments)
                }), $(i), n.on({
                    mousedown: function() {
                        return c.onMouseDown.apply(c, arguments)
                    },
                    click: function() {
                        return c.onClick.apply(c, arguments)
                    }
                }), i.on({
                    mousedown: function(t) {
                        t.stopPropagation()
                    },
                    keydown: function() {
                        return c.onKeyDown.apply(c, arguments)
                    },
                    keyup: function() {
                        return c.onKeyUp.apply(c, arguments)
                    },
                    keypress: function() {
                        return c.onKeyPress.apply(c, arguments)
                    },
                    resize: function() {
                        c.positionDropdown.apply(c, [])
                    },
                    blur: function() {
                        return c.onBlur.apply(c, arguments)
                    },
                    focus: function() {
                        return c.ignoreBlur = !1, c.onFocus.apply(c, arguments)
                    },
                    paste: function() {
                        return c.onPaste.apply(c, arguments)
                    }
                }), m.on("keydown" + p, function(t) {
                    c.isCmdDown = t[s ? "metaKey" : "ctrlKey"], c.isCtrlDown = t[s ? "altKey" : "ctrlKey"], c.isShiftDown = t.shiftKey
                }), m.on("keyup" + p, function(t) {
                    t.keyCode === b && (c.isCtrlDown = !1), t.keyCode === g && (c.isShiftDown = !1), t.keyCode === v && (c.isCmdDown = !1)
                }), m.on("mousedown" + p, function(t) {
                    if (c.isFocused) {
                        if (t.target === c.$dropdown[0] || t.target.parentNode === c.$dropdown[0]) return !1;
                        c.$control.has(t.target).length || t.target === c.$control[0] || c.blur(t.target)
                    }
                }), f.on(["scroll" + p, "resize" + p].join(" "), function() {
                    c.isOpen && c.positionDropdown.apply(c, arguments)
                }), f.on("mousemove" + p, function() {
                    c.ignoreHover = !1
                }), this.revertSettings = {
                    $children: _.children().detach(),
                    tabindex: _.attr("tabindex")
                }, _.attr("tabindex", -1).hide().after(c.$wrapper), t.isArray(h.items) && (c.setValue(h.items), delete h.items), k && _.on("invalid" + p, function(t) {
                    t.preventDefault(), c.isInvalid = !0, c.refreshState()
                }), c.updateOriginalInput(), c.refreshItems(), c.refreshState(), c.updatePlaceholder(), c.isSetup = !0, _.is(":disabled") && c.disable(), c.on("change", this.onChange), _.data("selectize", c), _.addClass("selectized"), c.trigger("initialize"), h.preload === !0 && c.onSearchChange("")
            },
            setupTemplates: function() {
                var e = this,
                    n = e.settings.labelField,
                    i = e.settings.optgroupLabelField,
                    o = {
                        optgroup: function(t) {
                            return '<div class="optgroup">' + t.html + "</div>"
                        },
                        optgroup_header: function(t, e) {
                            return '<div class="optgroup-header">' + e(t[i]) + "</div>"
                        },
                        option: function(t, e) {
                            return '<div class="option">' + e(t[n]) + "</div>"
                        },
                        item: function(t, e) {
                            return '<div class="item">' + e(t[n]) + "</div>"
                        },
                        option_create: function(t, e) {
                            return '<div class="create">Add <strong>' + e(t.input) + "</strong>&hellip;</div>"
                        }
                    };
                e.settings.render = t.extend({}, o, e.settings.render)
            },
            setupCallbacks: function() {
                var t, e, n = {
                    initialize: "onInitialize",
                    change: "onChange",
                    item_add: "onItemAdd",
                    item_remove: "onItemRemove",
                    clear: "onClear",
                    option_add: "onOptionAdd",
                    option_remove: "onOptionRemove",
                    option_clear: "onOptionClear",
                    optgroup_add: "onOptionGroupAdd",
                    optgroup_remove: "onOptionGroupRemove",
                    optgroup_clear: "onOptionGroupClear",
                    dropdown_open: "onDropdownOpen",
                    dropdown_close: "onDropdownClose",
                    type: "onType",
                    load: "onLoad",
                    focus: "onFocus",
                    blur: "onBlur"
                };
                for (t in n) n.hasOwnProperty(t) && (e = this.settings[n[t]], e && this.on(t, e))
            },
            onClick: function(t) {
                var e = this;
                e.isFocused || (e.focus(), t.preventDefault())
            },
            onMouseDown: function(e) {
                var n = this,
                    i = e.isDefaultPrevented();
                t(e.target);
                if (n.isFocused) {
                    if (e.target !== n.$control_input[0]) return "single" === n.settings.mode ? n.isOpen ? n.close() : n.open() : i || n.setActiveItem(null), !1
                } else i || window.setTimeout(function() {
                    n.focus()
                }, 0)
            },
            onChange: function() {
                this.$input.trigger("change")
            },
            onPaste: function(e) {
                var n = this;
                n.isFull() || n.isInputHidden || n.isLocked ? e.preventDefault() : n.settings.splitOn && setTimeout(function() {
                    for (var e = t.trim(n.$control_input.val() || "").split(n.settings.splitOn), i = 0, o = e.length; o > i; i++) n.createItem(e[i])
                }, 0)
            },
            onKeyPress: function(t) {
                if (this.isLocked) return t && t.preventDefault();
                var e = String.fromCharCode(t.keyCode || t.which);
                return this.settings.create && "multi" === this.settings.mode && e === this.settings.delimiter ? (this.createItem(), t.preventDefault(), !1) : void 0
            },
            onKeyDown: function(t) {
                var e = (t.target === this.$control_input[0], this);
                if (e.isLocked) return void(t.keyCode !== M && t.preventDefault());
                switch (t.keyCode) {
                    case a:
                        if (e.isCmdDown) return void e.selectAll();
                        break;
                    case d:
                        return void(e.isOpen && (t.preventDefault(), t.stopPropagation(), e.close()));
                    case m:
                        if (!t.ctrlKey || t.altKey) break;
                    case f:
                        if (!e.isOpen && e.hasOptions) e.open();
                        else if (e.$activeOption) {
                            e.ignoreHover = !0;
                            var n = e.getAdjacentOption(e.$activeOption, 1);
                            n.length && e.setActiveOption(n, !0, !0)
                        }
                        return void t.preventDefault();
                    case h:
                        if (!t.ctrlKey || t.altKey) break;
                    case c:
                        if (e.$activeOption) {
                            e.ignoreHover = !0;
                            var i = e.getAdjacentOption(e.$activeOption, -1);
                            i.length && e.setActiveOption(i, !0, !0)
                        }
                        return void t.preventDefault();
                    case l:
                        return void(e.isOpen && e.$activeOption && (e.onOptionSelect({
                            currentTarget: e.$activeOption
                        }), t.preventDefault()));
                    case u:
                        return void e.advanceSelection(-1, t);
                    case p:
                        return void e.advanceSelection(1, t);
                    case M:
                        return e.settings.selectOnTab && e.isOpen && e.$activeOption && (e.onOptionSelect({
                            currentTarget: e.$activeOption
                        }), e.isFull() || t.preventDefault()), void(e.settings.create && e.createItem() && t.preventDefault());
                    case _:
                    case y:
                        return void e.deleteSelection(t)
                }
                return !e.isFull() && !e.isInputHidden || (s ? t.metaKey : t.ctrlKey) ? void 0 : void t.preventDefault()
            },
            onKeyUp: function(t) {
                var e = this;
                if (e.isLocked) return t && t.preventDefault();
                var n = e.$control_input.val() || "";
                e.lastValue !== n && (e.lastValue = n, e.onSearchChange(n), e.refreshOptions(), e.trigger("type", n))
            },
            onSearchChange: function(t) {
                var e = this,
                    n = e.settings.load;
                n && (e.loadedSearches.hasOwnProperty(t) || (e.loadedSearches[t] = !0, e.load(function(i) {
                    n.apply(e, [t, i])
                })))
            },
            onFocus: function(t) {
                var e = this,
                    n = e.isFocused;
                return e.isDisabled ? (e.blur(), t && t.preventDefault(), !1) : void(e.ignoreFocus || (e.isFocused = !0, "focus" === e.settings.preload && e.onSearchChange(""), n || e.trigger("focus"), e.$activeItems.length || (e.showInput(), e.setActiveItem(null), e.refreshOptions(!!e.settings.openOnFocus)), e.refreshState()))
            },
            onBlur: function(t, e) {
                var n = this;
                if (n.isFocused && (n.isFocused = !1, !n.ignoreFocus)) {
                    if (!n.ignoreBlur && document.activeElement === n.$dropdown_content[0]) return n.ignoreBlur = !0, void n.onFocus(t);
                    var i = function() {
                        n.close(), n.setTextboxValue(""), n.setActiveItem(null), n.setActiveOption(null), n.setCaret(n.items.length), n.refreshState(), (e || document.body).focus(), n.ignoreFocus = !1, n.trigger("blur")
                    };
                    n.ignoreFocus = !0, n.settings.create && n.settings.createOnBlur ? n.createItem(null, !1, i) : i()
                }
            },
            onOptionHover: function(t) {
                this.ignoreHover || this.setActiveOption(t.currentTarget, !1)
            },
            onOptionSelect: function(e) {
                var n, i, o = this;
                e.preventDefault && (e.preventDefault(), e.stopPropagation()), i = t(e.currentTarget), i.hasClass("create") ? o.createItem(null, function() {
                    o.settings.closeAfterSelect && o.close()
                }) : (n = i.attr("data-value"), "undefined" != typeof n && (o.lastQuery = null, o.setTextboxValue(""), o.addItem(n), o.settings.closeAfterSelect ? o.close() : !o.settings.hideSelected && e.type && /mouse/.test(e.type) && o.setActiveOption(o.getOption(n))))
            },
            onItemSelect: function(t) {
                var e = this;
                e.isLocked || "multi" === e.settings.mode && (t.preventDefault(), e.setActiveItem(t.currentTarget, t))
            },
            load: function(t) {
                var e = this,
                    n = e.$wrapper.addClass(e.settings.loadingClass);
                e.loading++, t.apply(e, [function(t) {
                    e.loading = Math.max(e.loading - 1, 0), t && t.length && (e.addOption(t), e.refreshOptions(e.isFocused && !e.isInputHidden)), e.loading || n.removeClass(e.settings.loadingClass), e.trigger("load", t)
                }])
            },
            setTextboxValue: function(t) {
                var e = this.$control_input,
                    n = e.val() !== t;
                n && (e.val(t).triggerHandler("update"), this.lastValue = t)
            },
            getValue: function() {
                return this.tagType === w && this.$input.attr("multiple") ? this.items : this.items.join(this.settings.delimiter)
            },
            setValue: function(t, e) {
                var n = e ? [] : ["change"];
                H(this, n, function() {
                    this.clear(e), this.addItems(t, e)
                })
            },
            setActiveItem: function(e, n) {
                var i, o, s, r, a, l, d, u, c = this;
                if ("single" !== c.settings.mode) {
                    if (e = t(e), !e.length) return t(c.$activeItems).removeClass("active"), c.$activeItems = [], void(c.isFocused && c.showInput());
                    if (i = n && n.type.toLowerCase(), "mousedown" === i && c.isShiftDown && c.$activeItems.length) {
                        for (u = c.$control.children(".active:last"), r = Array.prototype.indexOf.apply(c.$control[0].childNodes, [u[0]]), a = Array.prototype.indexOf.apply(c.$control[0].childNodes, [e[0]]), r > a && (d = r, r = a, a = d), o = r; a >= o; o++) l = c.$control[0].childNodes[o], -1 === c.$activeItems.indexOf(l) && (t(l).addClass("active"), c.$activeItems.push(l));
                        n.preventDefault()
                    } else "mousedown" === i && c.isCtrlDown || "keydown" === i && this.isShiftDown ? e.hasClass("active") ? (s = c.$activeItems.indexOf(e[0]), c.$activeItems.splice(s, 1), e.removeClass("active")) : c.$activeItems.push(e.addClass("active")[0]) : (t(c.$activeItems).removeClass("active"), c.$activeItems = [e.addClass("active")[0]]);
                    c.hideInput(), this.isFocused || c.focus()
                }
            },
            setActiveOption: function(e, n, i) {
                var o, s, r, a, l, d = this;
                d.$activeOption && d.$activeOption.removeClass("active"), d.$activeOption = null, e = t(e), e.length && (d.$activeOption = e.addClass("active"), !n && D(n) || (o = d.$dropdown_content.height(), s = d.$activeOption.outerHeight(!0), n = d.$dropdown_content.scrollTop() || 0, r = d.$activeOption.offset().top - d.$dropdown_content.offset().top + n, a = r, l = r - o + s, r + s > o + n ? d.$dropdown_content.stop().animate({
                    scrollTop: l
                }, i ? d.settings.scrollDuration : 0) : n > r && d.$dropdown_content.stop().animate({
                    scrollTop: a
                }, i ? d.settings.scrollDuration : 0)))
            },
            selectAll: function() {
                var t = this;
                "single" !== t.settings.mode && (t.$activeItems = Array.prototype.slice.apply(t.$control.children(":not(input)").addClass("active")), t.$activeItems.length && (t.hideInput(), t.close()), t.focus())
            },
            hideInput: function() {
                var t = this;
                t.setTextboxValue(""), t.$control_input.css({
                    opacity: 0,
                    position: "absolute",
                    left: t.rtl ? 1e4 : -1e4
                }), t.isInputHidden = !0
            },
            showInput: function() {
                this.$control_input.css({
                    opacity: 1,
                    position: "relative",
                    left: 0
                }), this.isInputHidden = !1
            },
            focus: function() {
                var t = this;
                t.isDisabled || (t.ignoreFocus = !0, t.$control_input[0].focus(), window.setTimeout(function() {
                    t.ignoreFocus = !1, t.onFocus()
                }, 0))
            },
            blur: function(t) {
                this.$control_input[0].blur(), this.onBlur(null, t)
            },
            getScoreFunction: function(t) {
                return this.sifter.getScoreFunction(t, this.getSearchOptions())
            },
            getSearchOptions: function() {
                var t = this.settings,
                    e = t.sortField;
                return "string" == typeof e && (e = [{
                    field: e
                }]), {
                    fields: t.searchField,
                    conjunction: t.searchConjunction,
                    sort: e
                }
            },
            search: function(e) {
                var n, i, o, s = this,
                    r = s.settings,
                    a = this.getSearchOptions();
                if (r.score && (o = s.settings.score.apply(this, [e]), "function" != typeof o)) throw new Error('Selectize "score" setting must be a function that returns a function');
                if (e !== s.lastQuery ? (s.lastQuery = e, i = s.sifter.search(e, t.extend(a, {
                        score: o
                    })), s.currentResults = i) : i = t.extend(!0, {}, s.currentResults), r.hideSelected)
                    for (n = i.items.length - 1; n >= 0; n--) - 1 !== s.items.indexOf(Y(i.items[n].id)) && i.items.splice(n, 1);
                return i
            },
            refreshOptions: function(e) {
                var n, o, s, r, a, l, d, u, c, h, p, f, m, _, y, g;
                "undefined" == typeof e && (e = !0);
                var v = this,
                    b = t.trim(v.$control_input.val()),
                    M = v.search(b),
                    w = v.$dropdown_content,
                    L = v.$activeOption && Y(v.$activeOption.attr("data-value"));
                for (r = M.items.length, "number" == typeof v.settings.maxOptions && (r = Math.min(r, v.settings.maxOptions)), a = {}, l = [], n = 0; r > n; n++)
                    for (d = v.options[M.items[n].id], u = v.render("option", d), c = d[v.settings.optgroupField] || "", h = t.isArray(c) ? c : [c], o = 0, s = h && h.length; s > o; o++) c = h[o], v.optgroups.hasOwnProperty(c) || (c = ""), a.hasOwnProperty(c) || (a[c] = [], l.push(c)), a[c].push(u);
                for (this.settings.lockOptgroupOrder && l.sort(function(t, e) {
                        var n = v.optgroups[t].$order || 0,
                            i = v.optgroups[e].$order || 0;
                        return n - i
                    }), p = [], n = 0, r = l.length; r > n; n++) c = l[n], v.optgroups.hasOwnProperty(c) && a[c].length ? (f = v.render("optgroup_header", v.optgroups[c]) || "", f += a[c].join(""), p.push(v.render("optgroup", t.extend({}, v.optgroups[c], {
                    html: f
                })))) : p.push(a[c].join(""));
                if (w.html(p.join("")), v.settings.highlight && M.query.length && M.tokens.length)
                    for (n = 0, r = M.tokens.length; r > n; n++) i(w, M.tokens[n].regex);
                if (!v.settings.hideSelected)
                    for (n = 0, r = v.items.length; r > n; n++) v.getOption(v.items[n]).addClass("selected");
                m = v.canCreate(b), m && (w.prepend(v.render("option_create", {
                    input: b
                })), g = t(w[0].childNodes[0])), v.hasOptions = M.items.length > 0 || m, v.hasOptions ? (M.items.length > 0 ? (y = L && v.getOption(L), y && y.length ? _ = y : "single" === v.settings.mode && v.items.length && (_ = v.getOption(v.items[0])), _ && _.length || (_ = g && !v.settings.addPrecedence ? v.getAdjacentOption(g, 1) : w.find("[data-selectable]:first"))) : _ = g, v.setActiveOption(_), e && !v.isOpen && v.open()) : (v.setActiveOption(null), e && v.isOpen && v.close())
            },
            addOption: function(e) {
                var n, i, o, s = this;
                if (t.isArray(e))
                    for (n = 0, i = e.length; i > n; n++) s.addOption(e[n]);
                else(o = s.registerOption(e)) && (s.userOptions[o] = !0, s.lastQuery = null, s.trigger("option_add", o, e))
            },
            registerOption: function(t) {
                var e = Y(t[this.settings.valueField]);
                return !e || this.options.hasOwnProperty(e) ? !1 : (t.$order = t.$order || ++this.order, this.options[e] = t, e)
            },
            registerOptionGroup: function(t) {
                var e = Y(t[this.settings.optgroupValueField]);
                return e ? (t.$order = t.$order || ++this.order, this.optgroups[e] = t, e) : !1
            },
            addOptionGroup: function(t, e) {
                e[this.settings.optgroupValueField] = t, (t = this.registerOptionGroup(e)) && this.trigger("optgroup_add", t, e)
            },
            removeOptionGroup: function(t) {
                this.optgroups.hasOwnProperty(t) && (delete this.optgroups[t], this.renderCache = {}, this.trigger("optgroup_remove", t))
            },
            clearOptionGroups: function() {
                this.optgroups = {}, this.renderCache = {}, this.trigger("optgroup_clear")
            },
            updateOption: function(e, n) {
                var i, o, s, r, a, l, d, u = this;
                if (e = Y(e), s = Y(n[u.settings.valueField]), null !== e && u.options.hasOwnProperty(e)) {
                    if ("string" != typeof s) throw new Error("Value must be set in option data");
                    d = u.options[e].$order, s !== e && (delete u.options[e], r = u.items.indexOf(e), -1 !== r && u.items.splice(r, 1, s)), n.$order = n.$order || d, u.options[s] = n, a = u.renderCache.item, l = u.renderCache.option, a && (delete a[e], delete a[s]), l && (delete l[e], delete l[s]), -1 !== u.items.indexOf(s) && (i = u.getItem(e), o = t(u.render("item", n)), i.hasClass("active") && o.addClass("active"), i.replaceWith(o)), u.lastQuery = null, u.isOpen && u.refreshOptions(!1)
                }
            },
            removeOption: function(t, e) {
                var n = this;
                t = Y(t);
                var i = n.renderCache.item,
                    o = n.renderCache.option;
                i && delete i[t], o && delete o[t], delete n.userOptions[t], delete n.options[t], n.lastQuery = null, n.trigger("option_remove", t), n.removeItem(t, e)
            },
            clearOptions: function() {
                var t = this;
                t.loadedSearches = {}, t.userOptions = {}, t.renderCache = {}, t.options = t.sifter.items = {}, t.lastQuery = null, t.trigger("option_clear"), t.clear()
            },
            getOption: function(t) {
                return this.getElementWithValue(t, this.$dropdown_content.find("[data-selectable]"))
            },
            getAdjacentOption: function(e, n) {
                var i = this.$dropdown.find("[data-selectable]"),
                    o = i.index(e) + n;
                return o >= 0 && o < i.length ? i.eq(o) : t();
            },
            getElementWithValue: function(e, n) {
                if (e = Y(e), "undefined" != typeof e && null !== e)
                    for (var i = 0, o = n.length; o > i; i++)
                        if (n[i].getAttribute("data-value") === e) return t(n[i]);
                return t()
            },
            getItem: function(t) {
                return this.getElementWithValue(t, this.$control.children())
            },
            addItems: function(e, n) {
                for (var i = t.isArray(e) ? e : [e], o = 0, s = i.length; s > o; o++) this.isPending = s - 1 > o, this.addItem(i[o], n)
            },
            addItem: function(e, n) {
                var i = n ? [] : ["change"];
                H(this, i, function() {
                    var i, o, s, r, a, l = this,
                        d = l.settings.mode;
                    return e = Y(e), -1 !== l.items.indexOf(e) ? void("single" === d && l.close()) : void(l.options.hasOwnProperty(e) && ("single" === d && l.clear(n), "multi" === d && l.isFull() || (i = t(l.render("item", l.options[e])), a = l.isFull(), l.items.splice(l.caretPos, 0, e), l.insertAtCaret(i), (!l.isPending || !a && l.isFull()) && l.refreshState(), l.isSetup && (s = l.$dropdown_content.find("[data-selectable]"), l.isPending || (o = l.getOption(e), r = l.getAdjacentOption(o, 1).attr("data-value"), l.refreshOptions(l.isFocused && "single" !== d), r && l.setActiveOption(l.getOption(r))), !s.length || l.isFull() ? l.close() : l.positionDropdown(), l.updatePlaceholder(), l.trigger("item_add", e, i), l.updateOriginalInput({
                        silent: n
                    })))))
                })
            },
            removeItem: function(t, e) {
                var n, i, o, s = this;
                n = "object" === ("undefined" == typeof t ? "undefined" : r(t)) ? t : s.getItem(t), t = Y(n.attr("data-value")), i = s.items.indexOf(t), -1 !== i && (n.remove(), n.hasClass("active") && (o = s.$activeItems.indexOf(n[0]), s.$activeItems.splice(o, 1)), s.items.splice(i, 1), s.lastQuery = null, !s.settings.persist && s.userOptions.hasOwnProperty(t) && s.removeOption(t, e), i < s.caretPos && s.setCaret(s.caretPos - 1), s.refreshState(), s.updatePlaceholder(), s.updateOriginalInput({
                    silent: e
                }), s.positionDropdown(), s.trigger("item_remove", t, n))
            },
            createItem: function(e, n) {
                var i = this,
                    o = i.caretPos;
                e = e || t.trim(i.$control_input.val() || "");
                var s = arguments[arguments.length - 1];
                if ("function" != typeof s && (s = function() {}), "boolean" != typeof n && (n = !0), !i.canCreate(e)) return s(), !1;
                i.lock();
                var a = "function" == typeof i.settings.create ? this.settings.create : function(t) {
                        var e = {};
                        return e[i.settings.labelField] = t, e[i.settings.valueField] = t, e
                    },
                    l = C(function(t) {
                        if (i.unlock(), !t || "object" !== ("undefined" == typeof t ? "undefined" : r(t))) return s();
                        var e = Y(t[i.settings.valueField]);
                        return "string" != typeof e ? s() : (i.setTextboxValue(""), i.addOption(t), i.setCaret(o), i.addItem(e), i.refreshOptions(n && "single" !== i.settings.mode), void s(t))
                    }),
                    d = a.apply(this, [e, l]);
                return "undefined" != typeof d && l(d), !0
            },
            refreshItems: function() {
                this.lastQuery = null, this.isSetup && this.addItem(this.items), this.refreshState(), this.updateOriginalInput()
            },
            refreshState: function() {
                var t, e = this;
                e.isRequired && (e.items.length && (e.isInvalid = !1), e.$control_input.prop("required", t)), e.refreshClasses()
            },
            refreshClasses: function() {
                var e = this,
                    n = e.isFull(),
                    i = e.isLocked;
                e.$wrapper.toggleClass("rtl", e.rtl), e.$control.toggleClass("focus", e.isFocused).toggleClass("disabled", e.isDisabled).toggleClass("required", e.isRequired).toggleClass("invalid", e.isInvalid).toggleClass("locked", i).toggleClass("full", n).toggleClass("not-full", !n).toggleClass("input-active", e.isFocused && !e.isInputHidden).toggleClass("dropdown-active", e.isOpen).toggleClass("has-options", !t.isEmptyObject(e.options)).toggleClass("has-items", e.items.length > 0), e.$control_input.data("grow", !n && !i)
            },
            isFull: function() {
                return null !== this.settings.maxItems && this.items.length >= this.settings.maxItems
            },
            updateOriginalInput: function(t) {
                var e, n, i, o, s = this;
                if (t = t || {}, s.tagType === w) {
                    for (i = [], e = 0, n = s.items.length; n > e; e++) o = s.options[s.items[e]][s.settings.labelField] || "", i.push('<option value="' + S(s.items[e]) + '" selected="selected">' + S(o) + "</option>");
                    i.length || this.$input.attr("multiple") || i.push('<option value="" selected="selected"></option>'), s.$input.html(i.join(""))
                } else s.$input.val(s.getValue()), s.$input.attr("value", s.$input.val());
                s.isSetup && (t.silent || s.trigger("change", s.$input.val()))
            },
            updatePlaceholder: function() {
                if (this.settings.placeholder) {
                    var t = this.$control_input;
                    this.items.length ? t.removeAttr("placeholder") : t.attr("placeholder", this.settings.placeholder), t.triggerHandler("update", {
                        force: !0
                    })
                }
            },
            open: function() {
                var t = this;
                t.isLocked || t.isOpen || "multi" === t.settings.mode && t.isFull() || (t.focus(), t.isOpen = !0, t.refreshState(), t.$dropdown.css({
                    visibility: "hidden",
                    display: "block"
                }), t.positionDropdown(), t.$dropdown.css({
                    visibility: "visible"
                }), t.trigger("dropdown_open", t.$dropdown))
            },
            close: function() {
                var t = this,
                    e = t.isOpen;
                "single" === t.settings.mode && t.items.length && t.hideInput(), t.isOpen = !1, t.$dropdown.hide(), t.setActiveOption(null), t.refreshState(), e && t.trigger("dropdown_close", t.$dropdown)
            },
            positionDropdown: function() {
                var t = this.$control,
                    e = "body" === this.settings.dropdownParent ? t.offset() : t.position();
                e.top += t.outerHeight(!0), this.$dropdown.css({
                    width: t.outerWidth(),
                    top: e.top,
                    left: e.left
                })
            },
            clear: function(t) {
                var e = this;
                e.items.length && (e.$control.children(":not(input)").remove(), e.items = [], e.lastQuery = null, e.setCaret(0), e.setActiveItem(null), e.updatePlaceholder(), e.updateOriginalInput({
                    silent: t
                }), e.refreshState(), e.showInput(), e.trigger("clear"))
            },
            insertAtCaret: function(e) {
                var n = Math.min(this.caretPos, this.items.length);
                0 === n ? this.$control.prepend(e) : t(this.$control[0].childNodes[n]).before(e), this.setCaret(n + 1)
            },
            deleteSelection: function(e) {
                var n, i, o, s, r, a, l, d, u, c = this;
                if (o = e && e.keyCode === _ ? -1 : 1, s = P(c.$control_input[0]), c.$activeOption && !c.settings.hideSelected && (l = c.getAdjacentOption(c.$activeOption, -1).attr("data-value")), r = [], c.$activeItems.length) {
                    for (u = c.$control.children(".active:" + (o > 0 ? "last" : "first")), a = c.$control.children(":not(input)").index(u), o > 0 && a++, n = 0, i = c.$activeItems.length; i > n; n++) r.push(t(c.$activeItems[n]).attr("data-value"));
                    e && (e.preventDefault(), e.stopPropagation())
                } else(c.isFocused || "single" === c.settings.mode) && c.items.length && (0 > o && 0 === s.start && 0 === s.length ? r.push(c.items[c.caretPos - 1]) : o > 0 && s.start === c.$control_input.val().length && r.push(c.items[c.caretPos]));
                if (!r.length || "function" == typeof c.settings.onDelete && c.settings.onDelete.apply(c, [r]) === !1) return !1;
                for ("undefined" != typeof a && c.setCaret(a); r.length;) c.removeItem(r.pop());
                return c.showInput(), c.positionDropdown(), c.refreshOptions(!0), l && (d = c.getOption(l), d.length && c.setActiveOption(d)), !0
            },
            advanceSelection: function(t, e) {
                var n, i, o, s, r, a, l = this;
                0 !== t && (l.rtl && (t *= -1), n = t > 0 ? "last" : "first", i = P(l.$control_input[0]), l.isFocused && !l.isInputHidden ? (s = l.$control_input.val().length, r = 0 > t ? 0 === i.start && 0 === i.length : i.start === s, r && !s && l.advanceCaret(t, e)) : (a = l.$control.children(".active:" + n), a.length && (o = l.$control.children(":not(input)").index(a), l.setActiveItem(null), l.setCaret(t > 0 ? o + 1 : o))))
            },
            advanceCaret: function(t, e) {
                var n, i, o = this;
                0 !== t && (n = t > 0 ? "next" : "prev", o.isShiftDown ? (i = o.$control_input[n](), i.length && (o.hideInput(), o.setActiveItem(i), e && e.preventDefault())) : o.setCaret(o.caretPos + t))
            },
            setCaret: function(e) {
                var n = this;
                if (e = "single" === n.settings.mode ? n.items.length : Math.max(0, Math.min(n.items.length, e)), !n.isPending) {
                    var i, o, s, r;
                    for (s = n.$control.children(":not(input)"), i = 0, o = s.length; o > i; i++) r = t(s[i]).detach(), e > i ? n.$control_input.before(r) : n.$control.append(r)
                }
                n.caretPos = e
            },
            lock: function() {
                this.close(), this.isLocked = !0, this.refreshState()
            },
            unlock: function() {
                this.isLocked = !1, this.refreshState()
            },
            disable: function() {
                var t = this;
                t.$input.prop("disabled", !0), t.$control_input.prop("disabled", !0).prop("tabindex", -1), t.isDisabled = !0, t.lock()
            },
            enable: function() {
                var t = this;
                t.$input.prop("disabled", !1), t.$control_input.prop("disabled", !1).prop("tabindex", t.tabIndex), t.isDisabled = !1, t.unlock()
            },
            destroy: function() {
                var e = this,
                    n = e.eventNS,
                    i = e.revertSettings;
                e.trigger("destroy"), e.off(), e.$wrapper.remove(), e.$dropdown.remove(), e.$input.html("").append(i.$children).removeAttr("tabindex").removeClass("selectized").attr({
                    tabindex: i.tabindex
                }).show(), e.$control_input.removeData("grow"), e.$input.removeData("selectize"), t(window).off(n), t(document).off(n), t(document.body).off(n), delete e.$input[0].selectize
            },
            render: function(t, e) {
                var n, i, o = "",
                    s = !1,
                    r = this,
                    a = /^[\t \r\n]*<([a-z][a-z0-9\-_]*(?:\:[a-z][a-z0-9\-_]*)?)/i;
                return "option" !== t && "item" !== t || (n = Y(e[r.settings.valueField]), s = !!n), s && (D(r.renderCache[t]) || (r.renderCache[t] = {}), r.renderCache[t].hasOwnProperty(n)) ? r.renderCache[t][n] : (o = r.settings.render[t].apply(this, [e, S]), "option" !== t && "option_create" !== t || (o = o.replace(a, "<$1 data-selectable")), "optgroup" === t && (i = e[r.settings.optgroupValueField] || "", o = o.replace(a, '<$1 data-group="' + x(S(i)) + '"')), "option" !== t && "item" !== t || (o = o.replace(a, '<$1 data-value="' + x(S(n || "")) + '"')), s && (r.renderCache[t][n] = o), o)
            },
            clearCache: function(t) {
                var e = this;
                "undefined" == typeof t ? e.renderCache = {} : delete e.renderCache[t]
            },
            canCreate: function(t) {
                var e = this;
                if (!e.settings.create) return !1;
                var n = e.settings.createFilter;
                return t.length && ("function" != typeof n || n.apply(e, [t])) && ("string" != typeof n || new RegExp(n).test(t)) && (!(n instanceof RegExp) || n.test(t))
            }
        }), z.count = 0, z.defaults = {
            options: [],
            optgroups: [],
            plugins: [],
            delimiter: ",",
            splitOn: null,
            persist: !0,
            diacritics: !0,
            create: !1,
            createOnBlur: !1,
            createFilter: null,
            highlight: !0,
            openOnFocus: !0,
            maxOptions: 1e3,
            maxItems: null,
            hideSelected: null,
            addPrecedence: !1,
            selectOnTab: !1,
            preload: !1,
            allowEmptyOption: !1,
            closeAfterSelect: !1,
            scrollDuration: 60,
            loadThrottle: 300,
            loadingClass: "loading",
            dataAttr: "data-data",
            optgroupField: "optgroup",
            valueField: "value",
            labelField: "text",
            optgroupLabelField: "label",
            optgroupValueField: "value",
            lockOptgroupOrder: !1,
            sortField: "$order",
            searchField: ["text"],
            searchConjunction: "and",
            mode: null,
            wrapperClass: "selectize-control",
            inputClass: "selectize-input",
            dropdownClass: "selectize-dropdown",
            dropdownContentClass: "selectize-dropdown-content",
            dropdownParent: null,
            copyClassesToDropdown: !0,
            render: {}
        }, t.fn.selectize = function(e) {
            var n = t.fn.selectize.defaults,
                i = t.extend({}, n, e),
                o = i.dataAttr,
                s = i.labelField,
                r = i.valueField,
                a = i.optgroupField,
                l = i.optgroupLabelField,
                d = i.optgroupValueField,
                u = function(e, n) {
                    var a, l, d, u, c = e.attr(o);
                    if (c)
                        for (n.options = JSON.parse(c), a = 0, l = n.options.length; l > a; a++) n.items.push(n.options[a][r]);
                    else {
                        var h = t.trim(e.val() || "");
                        if (!i.allowEmptyOption && !h.length) return;
                        for (d = h.split(i.delimiter), a = 0, l = d.length; l > a; a++) u = {}, u[s] = d[a], u[r] = d[a], n.options.push(u);
                        n.items = d
                    }
                },
                c = function(e, n) {
                    var u, c, h, p, f = n.options,
                        m = {},
                        _ = function(t) {
                            var e = o && t.attr(o);
                            return "string" == typeof e && e.length ? JSON.parse(e) : null
                        },
                        y = function(e, o) {
                            e = t(e);
                            var l = Y(e.attr("value"));
                            if (l || i.allowEmptyOption)
                                if (m.hasOwnProperty(l)) {
                                    if (o) {
                                        var d = m[l][a];
                                        d ? t.isArray(d) ? d.push(o) : m[l][a] = [d, o] : m[l][a] = o
                                    }
                                } else {
                                    var u = _(e) || {};
                                    u[s] = u[s] || e.text(), u[r] = u[r] || l, u[a] = u[a] || o, m[l] = u, f.push(u), e.is(":selected") && n.items.push(l)
                                }
                        },
                        g = function(e) {
                            var i, o, s, r, a;
                            for (e = t(e), s = e.attr("label"), s && (r = _(e) || {}, r[l] = s, r[d] = s, n.optgroups.push(r)), a = t("option", e), i = 0, o = a.length; o > i; i++) y(a[i], s)
                        };
                    for (n.maxItems = e.attr("multiple") ? null : 1, p = e.children(), u = 0, c = p.length; c > u; u++) h = p[u].tagName.toLowerCase(), "optgroup" === h ? g(p[u]) : "option" === h && y(p[u])
                };
            return this.each(function() {
                if (!this.selectize) {
                    var o, s = t(this),
                        r = this.tagName.toLowerCase(),
                        a = s.attr("placeholder") || s.attr("data-placeholder");
                    a || i.allowEmptyOption || (a = s.children('option[value=""]').text());
                    var l = {
                        placeholder: a,
                        options: [],
                        optgroups: [],
                        items: []
                    };
                    "select" === r ? c(s, l) : u(s, l), o = new z(s, t.extend(!0, {}, n, l, e))
                }
            })
        }, t.fn.selectize.defaults = z.defaults, t.fn.selectize.support = {
            validity: k
        }, z.define("drag_drop", function(e) {
            if (!t.fn.sortable) throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');
            if ("multi" === this.settings.mode) {
                var n = this;
                n.lock = function() {
                    var t = n.lock;
                    return function() {
                        var e = n.$control.data("sortable");
                        return e && e.disable(), t.apply(n, arguments)
                    }
                }(), n.unlock = function() {
                    var t = n.unlock;
                    return function() {
                        var e = n.$control.data("sortable");
                        return e && e.enable(), t.apply(n, arguments)
                    }
                }(), n.setup = function() {
                    var e = n.setup;
                    return function() {
                        e.apply(this, arguments);
                        var i = n.$control.sortable({
                            items: "[data-value]",
                            forcePlaceholderSize: !0,
                            disabled: n.isLocked,
                            start: function(t, e) {
                                e.placeholder.css("width", e.helper.css("width")), i.css({
                                    overflow: "visible"
                                })
                            },
                            stop: function() {
                                i.css({
                                    overflow: "hidden"
                                });
                                var e = n.$activeItems ? n.$activeItems.slice() : null,
                                    o = [];
                                i.children("[data-value]").each(function() {
                                    o.push(t(this).attr("data-value"))
                                }), n.setValue(o), n.setActiveItem(e)
                            }
                        })
                    }
                }()
            }
        }), z.define("dropdown_header", function(e) {
            var n = this;
            e = t.extend({
                title: "Untitled",
                headerClass: "selectize-dropdown-header",
                titleRowClass: "selectize-dropdown-header-title",
                labelClass: "selectize-dropdown-header-label",
                closeClass: "selectize-dropdown-header-close",
                html: function(t) {
                    return '<div class="' + t.headerClass + '"><div class="' + t.titleRowClass + '"><span class="' + t.labelClass + '">' + t.title + '</span><a href="javascript:void(0)" class="' + t.closeClass + '">&times;</a></div></div>'
                }
            }, e), n.setup = function() {
                var i = n.setup;
                return function() {
                    i.apply(n, arguments), n.$dropdown_header = t(e.html(e)), n.$dropdown.prepend(n.$dropdown_header)
                }
            }()
        }), z.define("optgroup_columns", function(e) {
            var n = this;
            e = t.extend({
                equalizeWidth: !0,
                equalizeHeight: !0
            }, e), this.getAdjacentOption = function(e, n) {
                var i = e.closest("[data-group]").find("[data-selectable]"),
                    o = i.index(e) + n;
                return o >= 0 && o < i.length ? i.eq(o) : t()
            }, this.onKeyDown = function() {
                var t = n.onKeyDown;
                return function(e) {
                    var i, o, s, r;
                    return !this.isOpen || e.keyCode !== u && e.keyCode !== p ? t.apply(this, arguments) : (n.ignoreHover = !0, r = this.$activeOption.closest("[data-group]"), i = r.find("[data-selectable]").index(this.$activeOption), r = e.keyCode === u ? r.prev("[data-group]") : r.next("[data-group]"), s = r.find("[data-selectable]"), o = s.eq(Math.min(s.length - 1, i)), void(o.length && this.setActiveOption(o)))
                }
            }();
            var i = function s() {
                    var t, e = s.width,
                        n = document;
                    return "undefined" == typeof e && (t = n.createElement("div"), t.innerHTML = '<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>', t = t.firstChild, n.body.appendChild(t), e = s.width = t.offsetWidth - t.clientWidth, n.body.removeChild(t)), e
                },
                o = function() {
                    var o, s, r, a, l, d, u;
                    if (u = t("[data-group]", n.$dropdown_content), s = u.length, s && n.$dropdown_content.width()) {
                        if (e.equalizeHeight) {
                            for (r = 0, o = 0; s > o; o++) r = Math.max(r, u.eq(o).height());
                            u.css({
                                height: r
                            })
                        }
                        e.equalizeWidth && (d = n.$dropdown_content.innerWidth() - i(), a = Math.round(d / s), u.css({
                            width: a
                        }), s > 1 && (l = d - a * (s - 1), u.eq(s - 1).css({
                            width: l
                        })))
                    }
                };
            (e.equalizeHeight || e.equalizeWidth) && (T.after(this, "positionDropdown", o), T.after(this, "refreshOptions", o))
        }), z.define("remove_button", function(e) {
            if ("single" !== this.settings.mode) {
                e = t.extend({
                    label: "&times;",
                    title: "Remove",
                    className: "remove",
                    append: !0
                }, e);
                var n = this,
                    i = '<a href="javascript:void(0)" class="' + e.className + '" tabindex="-1" title="' + S(e.title) + '">' + e.label + "</a>",
                    o = function(t, e) {
                        var n = t.search(/(<\/[^>]+>\s*)$/);
                        return t.substring(0, n) + e + t.substring(n)
                    };
                this.setup = function() {
                    var s = n.setup;
                    return function() {
                        if (e.append) {
                            var r = n.settings.render.item;
                            n.settings.render.item = function(t) {
                                return o(r.apply(this, arguments), i)
                            }
                        }
                        s.apply(this, arguments), this.$control.on("click", "." + e.className, function(e) {
                            if (e.preventDefault(), !n.isLocked) {
                                var i = t(e.currentTarget).parent();
                                n.setActiveItem(i), n.deleteSelection() && n.setCaret(n.items.length)
                            }
                        })
                    }
                }()
            }
        }), z.define("restore_on_backspace", function(t) {
            var e = this;
            t.text = t.text || function(t) {
                return t[this.settings.labelField]
            }, this.onKeyDown = function() {
                var n = e.onKeyDown;
                return function(e) {
                    var i, o;
                    return e.keyCode === _ && "" === this.$control_input.val() && !this.$activeItems.length && (i = this.caretPos - 1, i >= 0 && i < this.items.length) ? (o = this.options[this.items[i]], this.deleteSelection(e) && (this.setTextboxValue(t.text.apply(this, [o])), this.refreshOptions(!0)), void e.preventDefault()) : n.apply(this, arguments)
                }
            }()
        }), z
    })
}, function(t, e, n) {
    (function(e) {
        "use strict";
        t.exports = e.jQuery = n(16)
    }).call(e, function() {
        return this
    }())
}, function(t, e, n) {
    (function(e) {
        t.exports = e.$ = n(17)
    }).call(e, function() {
        return this
    }())
}, function(t, e, n) {
    var i, o;
    /*!
     * jQuery JavaScript Library v2.2.3
     * http://jquery.com/
     *
     * Includes Sizzle.js
     * http://sizzlejs.com/
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     *
     * Date: 2016-04-05T19:26Z
     */
    ! function(e, n) {
        "object" == typeof t && "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return n(t)
        } : n(e)
    }("undefined" != typeof window ? window : this, function(n, s) {
        function r(t) {
            var e = !!t && "length" in t && t.length,
                n = dt.type(t);
            return "function" === n || dt.isWindow(t) ? !1 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
        }

        function a(t, e, n) {
            if (dt.isFunction(e)) return dt.grep(t, function(t, i) {
                return !!e.call(t, i, t) !== n
            });
            if (e.nodeType) return dt.grep(t, function(t) {
                return t === e !== n
            });
            if ("string" == typeof e) {
                if (vt.test(e)) return dt.filter(e, t, n);
                e = dt.filter(e, t)
            }
            return dt.grep(t, function(t) {
                return it.call(e, t) > -1 !== n
            })
        }

        function l(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }

        function d(t) {
            var e = {};
            return dt.each(t.match(Dt) || [], function(t, n) {
                e[n] = !0
            }), e
        }

        function u() {
            Z.removeEventListener("DOMContentLoaded", u), n.removeEventListener("load", u), dt.ready()
        }

        function c() {
            this.expando = dt.expando + c.uid++
        }

        function h(t, e, n) {
            var i;
            if (void 0 === n && 1 === t.nodeType)
                if (i = "data-" + e.replace(Ht, "-$&").toLowerCase(), n = t.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : jt.test(n) ? dt.parseJSON(n) : n
                    } catch (o) {}
                    Ct.set(t, e, n)
                } else n = void 0;
            return n
        }

        function p(t, e, n, i) {
            var o, s = 1,
                r = 20,
                a = i ? function() {
                    return i.cur()
                } : function() {
                    return dt.css(t, e, "")
                },
                l = a(),
                d = n && n[3] || (dt.cssNumber[e] ? "" : "px"),
                u = (dt.cssNumber[e] || "px" !== d && +l) && Pt.exec(dt.css(t, e));
            if (u && u[3] !== d) {
                d = d || u[3], n = n || [], u = +l || 1;
                do s = s || ".5", u /= s, dt.style(t, e, u + d); while (s !== (s = a() / l) && 1 !== s && --r)
            }
            return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = d, i.start = u, i.end = o)), o
        }

        function f(t, e) {
            var n = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
            return void 0 === e || e && dt.nodeName(t, e) ? dt.merge([t], n) : n
        }

        function m(t, e) {
            for (var n = 0, i = t.length; i > n; n++) Tt.set(t[n], "globalEval", !e || Tt.get(e[n], "globalEval"))
        }

        function _(t, e, n, i, o) {
            for (var s, r, a, l, d, u, c = e.createDocumentFragment(), h = [], p = 0, _ = t.length; _ > p; p++)
                if (s = t[p], s || 0 === s)
                    if ("object" === dt.type(s)) dt.merge(h, s.nodeType ? [s] : s);
                    else if (It.test(s)) {
                for (r = r || c.appendChild(e.createElement("div")), a = (zt.exec(s) || ["", ""])[1].toLowerCase(), l = Nt[a] || Nt._default, r.innerHTML = l[1] + dt.htmlPrefilter(s) + l[2], u = l[0]; u--;) r = r.lastChild;
                dt.merge(h, r.childNodes), r = c.firstChild, r.textContent = ""
            } else h.push(e.createTextNode(s));
            for (c.textContent = "", p = 0; s = h[p++];)
                if (i && dt.inArray(s, i) > -1) o && o.push(s);
                else if (d = dt.contains(s.ownerDocument, s), r = f(c.appendChild(s), "script"), d && m(r), n)
                for (u = 0; s = r[u++];) Wt.test(s.type || "") && n.push(s);
            return c
        }

        function y() {
            return !0
        }

        function g() {
            return !1
        }

        function v() {
            try {
                return Z.activeElement
            } catch (t) {}
        }

        function b(t, e, n, i, o, s) {
            var r, a;
            if ("object" == typeof e) {
                "string" != typeof n && (i = i || n, n = void 0);
                for (a in e) b(t, a, n, i, e[a], s);
                return t
            }
            if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), o === !1) o = g;
            else if (!o) return t;
            return 1 === s && (r = o, o = function(t) {
                return dt().off(t), r.apply(this, arguments)
            }, o.guid = r.guid || (r.guid = dt.guid++)), t.each(function() {
                dt.event.add(this, e, o, i, n)
            })
        }

        function M(t, e) {
            return dt.nodeName(t, "table") && dt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function w(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function L(t) {
            var e = Jt.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function k(t, e) {
            var n, i, o, s, r, a, l, d;
            if (1 === e.nodeType) {
                if (Tt.hasData(t) && (s = Tt.access(t), r = Tt.set(e, s), d = s.events)) {
                    delete r.handle, r.events = {};
                    for (o in d)
                        for (n = 0, i = d[o].length; i > n; n++) dt.event.add(e, o, d[o][n])
                }
                Ct.hasData(t) && (a = Ct.access(t), l = dt.extend({}, a), Ct.set(e, l))
            }
        }

        function D(t, e) {
            var n = e.nodeName.toLowerCase();
            "input" === n && $t.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
        }

        function Y(t, e, n, i) {
            e = et.apply([], e);
            var o, s, r, a, l, d, u = 0,
                c = t.length,
                h = c - 1,
                p = e[0],
                m = dt.isFunction(p);
            if (m || c > 1 && "string" == typeof p && !at.checkClone && Vt.test(p)) return t.each(function(o) {
                var s = t.eq(o);
                m && (e[0] = p.call(this, o, s.html())), Y(s, e, n, i)
            });
            if (c && (o = _(e, t[0].ownerDocument, !1, t, i), s = o.firstChild, 1 === o.childNodes.length && (o = s), s || i)) {
                for (r = dt.map(f(o, "script"), w), a = r.length; c > u; u++) l = o, u !== h && (l = dt.clone(l, !0, !0), a && dt.merge(r, f(l, "script"))), n.call(t[u], l, u);
                if (a)
                    for (d = r[r.length - 1].ownerDocument, dt.map(r, L), u = 0; a > u; u++) l = r[u], Wt.test(l.type || "") && !Tt.access(l, "globalEval") && dt.contains(d, l) && (l.src ? dt._evalUrl && dt._evalUrl(l.src) : dt.globalEval(l.textContent.replace(Gt, "")))
            }
            return t
        }

        function S(t, e, n) {
            for (var i, o = e ? dt.filter(e, t) : t, s = 0; null != (i = o[s]); s++) n || 1 !== i.nodeType || dt.cleanData(f(i)), i.parentNode && (n && dt.contains(i.ownerDocument, i) && m(f(i, "script")), i.parentNode.removeChild(i));
            return t
        }

        function x(t, e) {
            var n = dt(e.createElement(t)).appendTo(e.body),
                i = dt.css(n[0], "display");
            return n.detach(), i
        }

        function T(t) {
            var e = Z,
                n = Kt[t];
            return n || (n = x(t, e), "none" !== n && n || (Xt = (Xt || dt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Xt[0].contentDocument, e.write(), e.close(), n = x(t, e), Xt.detach()), Kt[t] = n), n
        }

        function C(t, e, n) {
            var i, o, s, r, a = t.style;
            return n = n || te(t), r = n ? n.getPropertyValue(e) || n[e] : void 0, "" !== r && void 0 !== r || dt.contains(t.ownerDocument, t) || (r = dt.style(t, e)), n && !at.pixelMarginRight() && Zt.test(r) && Qt.test(e) && (i = a.width, o = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = n.width, a.width = i, a.minWidth = o, a.maxWidth = s), void 0 !== r ? r + "" : r
        }

        function j(t, e) {
            return {
                get: function() {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function H(t) {
            if (t in ae) return t;
            for (var e = t[0].toUpperCase() + t.slice(1), n = re.length; n--;)
                if (t = re[n] + e, t in ae) return t
        }

        function E(t, e, n) {
            var i = Pt.exec(e);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
        }

        function P(t, e, n, i, o) {
            for (var s = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, r = 0; 4 > s; s += 2) "margin" === n && (r += dt.css(t, n + At[s], !0, o)), i ? ("content" === n && (r -= dt.css(t, "padding" + At[s], !0, o)), "margin" !== n && (r -= dt.css(t, "border" + At[s] + "Width", !0, o))) : (r += dt.css(t, "padding" + At[s], !0, o), "padding" !== n && (r += dt.css(t, "border" + At[s] + "Width", !0, o)));
            return r
        }

        function A(t, e, i) {
            var o = !0,
                s = "width" === e ? t.offsetWidth : t.offsetHeight,
                r = te(t),
                a = "border-box" === dt.css(t, "boxSizing", !1, r);
            if (Z.msFullscreenElement && n.top !== n && t.getClientRects().length && (s = Math.round(100 * t.getBoundingClientRect()[e])), 0 >= s || null == s) {
                if (s = C(t, e, r), (0 > s || null == s) && (s = t.style[e]), Zt.test(s)) return s;
                o = a && (at.boxSizingReliable() || s === t.style[e]), s = parseFloat(s) || 0
            }
            return s + P(t, e, i || (a ? "border" : "content"), o, r) + "px"
        }

        function O(t, e) {
            for (var n, i, o, s = [], r = 0, a = t.length; a > r; r++) i = t[r], i.style && (s[r] = Tt.get(i, "olddisplay"), n = i.style.display, e ? (s[r] || "none" !== n || (i.style.display = ""), "" === i.style.display && Ot(i) && (s[r] = Tt.access(i, "olddisplay", T(i.nodeName)))) : (o = Ot(i), "none" === n && o || Tt.set(i, "olddisplay", o ? n : dt.css(i, "display"))));
            for (r = 0; a > r; r++) i = t[r], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? s[r] || "" : "none"));
            return t
        }

        function $(t, e, n, i, o) {
            return new $.prototype.init(t, e, n, i, o)
        }

        function z() {
            return n.setTimeout(function() {
                le = void 0
            }), le = dt.now()
        }

        function W(t, e) {
            var n, i = 0,
                o = {
                    height: t
                };
            for (e = e ? 1 : 0; 4 > i; i += 2 - e) n = At[i], o["margin" + n] = o["padding" + n] = t;
            return e && (o.opacity = o.width = t), o
        }

        function N(t, e, n) {
            for (var i, o = (R.tweeners[e] || []).concat(R.tweeners["*"]), s = 0, r = o.length; r > s; s++)
                if (i = o[s].call(n, e, t)) return i
        }

        function I(t, e, n) {
            var i, o, s, r, a, l, d, u, c = this,
                h = {},
                p = t.style,
                f = t.nodeType && Ot(t),
                m = Tt.get(t, "fxshow");
            n.queue || (a = dt._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                a.unqueued || l()
            }), a.unqueued++, c.always(function() {
                c.always(function() {
                    a.unqueued--, dt.queue(t, "fx").length || a.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], d = dt.css(t, "display"), u = "none" === d ? Tt.get(t, "olddisplay") || T(t.nodeName) : d, "inline" === u && "none" === dt.css(t, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", c.always(function() {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            }));
            for (i in e)
                if (o = e[i], ue.exec(o)) {
                    if (delete e[i], s = s || "toggle" === o, o === (f ? "hide" : "show")) {
                        if ("show" !== o || !m || void 0 === m[i]) continue;
                        f = !0
                    }
                    h[i] = m && m[i] || dt.style(t, i)
                } else d = void 0;
            if (dt.isEmptyObject(h)) "inline" === ("none" === d ? T(t.nodeName) : d) && (p.display = d);
            else {
                m ? "hidden" in m && (f = m.hidden) : m = Tt.access(t, "fxshow", {}), s && (m.hidden = !f), f ? dt(t).show() : c.done(function() {
                    dt(t).hide()
                }), c.done(function() {
                    var e;
                    Tt.remove(t, "fxshow");
                    for (e in h) dt.style(t, e, h[e])
                });
                for (i in h) r = N(f ? m[i] : 0, i, c), i in m || (m[i] = r.start, f && (r.end = r.start, r.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function F(t, e) {
            var n, i, o, s, r;
            for (n in t)
                if (i = dt.camelCase(n), o = e[i], s = t[n], dt.isArray(s) && (o = s[1], s = t[n] = s[0]), n !== i && (t[i] = s, delete t[n]), r = dt.cssHooks[i], r && "expand" in r) {
                    s = r.expand(s), delete t[i];
                    for (n in s) n in t || (t[n] = s[n], e[n] = o)
                } else e[i] = o
        }

        function R(t, e, n) {
            var i, o, s = 0,
                r = R.prefilters.length,
                a = dt.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (o) return !1;
                    for (var e = le || z(), n = Math.max(0, d.startTime + d.duration - e), i = n / d.duration || 0, s = 1 - i, r = 0, l = d.tweens.length; l > r; r++) d.tweens[r].run(s);
                    return a.notifyWith(t, [d, s, n]), 1 > s && l ? n : (a.resolveWith(t, [d]), !1)
                },
                d = a.promise({
                    elem: t,
                    props: dt.extend({}, e),
                    opts: dt.extend(!0, {
                        specialEasing: {},
                        easing: dt.easing._default
                    }, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: le || z(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(e, n) {
                        var i = dt.Tween(t, d.opts, e, n, d.opts.specialEasing[e] || d.opts.easing);
                        return d.tweens.push(i), i
                    },
                    stop: function(e) {
                        var n = 0,
                            i = e ? d.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; i > n; n++) d.tweens[n].run(1);
                        return e ? (a.notifyWith(t, [d, 1, 0]), a.resolveWith(t, [d, e])) : a.rejectWith(t, [d, e]), this
                    }
                }),
                u = d.props;
            for (F(u, d.opts.specialEasing); r > s; s++)
                if (i = R.prefilters[s].call(d, t, u, d.opts)) return dt.isFunction(i.stop) && (dt._queueHooks(d.elem, d.opts.queue).stop = dt.proxy(i.stop, i)), i;
            return dt.map(u, N, d), dt.isFunction(d.opts.start) && d.opts.start.call(t, d), dt.fx.timer(dt.extend(l, {
                elem: t,
                anim: d,
                queue: d.opts.queue
            })), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always)
        }

        function q(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }

        function U(t) {
            return function(e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, o = 0,
                    s = e.toLowerCase().match(Dt) || [];
                if (dt.isFunction(n))
                    for (; i = s[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function B(t, e, n, i) {
            function o(a) {
                var l;
                return s[a] = !0, dt.each(t[a] || [], function(t, a) {
                    var d = a(e, n, i);
                    return "string" != typeof d || r || s[d] ? r ? !(l = d) : void 0 : (e.dataTypes.unshift(d), o(d), !1)
                }), l
            }
            var s = {},
                r = t === Ce;
            return o(e.dataTypes[0]) || !s["*"] && o("*")
        }

        function V(t, e) {
            var n, i, o = dt.ajaxSettings.flatOptions || {};
            for (n in e) void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
            return i && dt.extend(!0, t, i), t
        }

        function J(t, e, n) {
            for (var i, o, s, r, a = t.contents, l = t.dataTypes;
                "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
            if (i)
                for (o in a)
                    if (a[o] && a[o].test(i)) {
                        l.unshift(o);
                        break
                    }
            if (l[0] in n) s = l[0];
            else {
                for (o in n) {
                    if (!l[0] || t.converters[o + " " + l[0]]) {
                        s = o;
                        break
                    }
                    r || (r = o)
                }
                s = s || r
            }
            return s ? (s !== l[0] && l.unshift(s), n[s]) : void 0
        }

        function G(t, e, n, i) {
            var o, s, r, a, l, d = {},
                u = t.dataTypes.slice();
            if (u[1])
                for (r in t.converters) d[r.toLowerCase()] = t.converters[r];
            for (s = u.shift(); s;)
                if (t.responseFields[s] && (n[t.responseFields[s]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = u.shift())
                    if ("*" === s) s = l;
                    else if ("*" !== l && l !== s) {
                if (r = d[l + " " + s] || d["* " + s], !r)
                    for (o in d)
                        if (a = o.split(" "), a[1] === s && (r = d[l + " " + a[0]] || d["* " + a[0]])) {
                            r === !0 ? r = d[o] : d[o] !== !0 && (s = a[0], u.unshift(a[1]));
                            break
                        }
                if (r !== !0)
                    if (r && t["throws"]) e = r(e);
                    else try {
                        e = r(e)
                    } catch (c) {
                        return {
                            state: "parsererror",
                            error: r ? c : "No conversion from " + l + " to " + s
                        }
                    }
            }
            return {
                state: "success",
                data: e
            }
        }

        function X(t, e, n, i) {
            var o;
            if (dt.isArray(e)) dt.each(e, function(e, o) {
                n || Pe.test(t) ? i(t, o) : X(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, n, i)
            });
            else if (n || "object" !== dt.type(e)) i(t, e);
            else
                for (o in e) X(t + "[" + o + "]", e[o], n, i)
        }

        function K(t) {
            return dt.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
        }
        var Q = [],
            Z = n.document,
            tt = Q.slice,
            et = Q.concat,
            nt = Q.push,
            it = Q.indexOf,
            ot = {},
            st = ot.toString,
            rt = ot.hasOwnProperty,
            at = {},
            lt = "2.2.3",
            dt = function(t, e) {
                return new dt.fn.init(t, e)
            },
            ut = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ct = /^-ms-/,
            ht = /-([\da-z])/gi,
            pt = function(t, e) {
                return e.toUpperCase()
            };
        dt.fn = dt.prototype = {
            jquery: lt,
            constructor: dt,
            selector: "",
            length: 0,
            toArray: function() {
                return tt.call(this)
            },
            get: function(t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : tt.call(this)
            },
            pushStack: function(t) {
                var e = dt.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function(t) {
                return dt.each(this, t)
            },
            map: function(t) {
                return this.pushStack(dt.map(this, function(e, n) {
                    return t.call(e, n, e)
                }))
            },
            slice: function() {
                return this.pushStack(tt.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    n = +t + (0 > t ? e : 0);
                return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: nt,
            sort: Q.sort,
            splice: Q.splice
        }, dt.extend = dt.fn.extend = function() {
            var t, e, n, i, o, s, r = arguments[0] || {},
                a = 1,
                l = arguments.length,
                d = !1;
            for ("boolean" == typeof r && (d = r, r = arguments[a] || {}, a++), "object" == typeof r || dt.isFunction(r) || (r = {}), a === l && (r = this, a--); l > a; a++)
                if (null != (t = arguments[a]))
                    for (e in t) n = r[e], i = t[e], r !== i && (d && i && (dt.isPlainObject(i) || (o = dt.isArray(i))) ? (o ? (o = !1, s = n && dt.isArray(n) ? n : []) : s = n && dt.isPlainObject(n) ? n : {}, r[e] = dt.extend(d, s, i)) : void 0 !== i && (r[e] = i));
            return r
        }, dt.extend({
            expando: "jQuery" + (lt + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isFunction: function(t) {
                return "function" === dt.type(t)
            },
            isArray: Array.isArray,
            isWindow: function(t) {
                return null != t && t === t.window
            },
            isNumeric: function(t) {
                var e = t && t.toString();
                return !dt.isArray(t) && e - parseFloat(e) + 1 >= 0
            },
            isPlainObject: function(t) {
                var e;
                if ("object" !== dt.type(t) || t.nodeType || dt.isWindow(t)) return !1;
                if (t.constructor && !rt.call(t, "constructor") && !rt.call(t.constructor.prototype || {}, "isPrototypeOf")) return !1;
                for (e in t);
                return void 0 === e || rt.call(t, e)
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? ot[st.call(t)] || "object" : typeof t
            },
            globalEval: function(t) {
                var e, n = eval;
                t = dt.trim(t), t && (1 === t.indexOf("use strict") ? (e = Z.createElement("script"), e.text = t, Z.head.appendChild(e).parentNode.removeChild(e)) : n(t))
            },
            camelCase: function(t) {
                return t.replace(ct, "ms-").replace(ht, pt)
            },
            nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function(t, e) {
                var n, i = 0;
                if (r(t))
                    for (n = t.length; n > i && e.call(t[i], i, t[i]) !== !1; i++);
                else
                    for (i in t)
                        if (e.call(t[i], i, t[i]) === !1) break; return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(ut, "")
            },
            makeArray: function(t, e) {
                var n = e || [];
                return null != t && (r(Object(t)) ? dt.merge(n, "string" == typeof t ? [t] : t) : nt.call(n, t)), n
            },
            inArray: function(t, e, n) {
                return null == e ? -1 : it.call(e, t, n)
            },
            merge: function(t, e) {
                for (var n = +e.length, i = 0, o = t.length; n > i; i++) t[o++] = e[i];
                return t.length = o, t
            },
            grep: function(t, e, n) {
                for (var i, o = [], s = 0, r = t.length, a = !n; r > s; s++) i = !e(t[s], s), i !== a && o.push(t[s]);
                return o
            },
            map: function(t, e, n) {
                var i, o, s = 0,
                    a = [];
                if (r(t))
                    for (i = t.length; i > s; s++) o = e(t[s], s, n), null != o && a.push(o);
                else
                    for (s in t) o = e(t[s], s, n), null != o && a.push(o);
                return et.apply([], a)
            },
            guid: 1,
            proxy: function(t, e) {
                var n, i, o;
                return "string" == typeof e && (n = t[e], e = t, t = n), dt.isFunction(t) ? (i = tt.call(arguments, 2), o = function() {
                    return t.apply(e || this, i.concat(tt.call(arguments)))
                }, o.guid = t.guid = t.guid || dt.guid++, o) : void 0
            },
            now: Date.now,
            support: at
        }), "function" == typeof Symbol && (dt.fn[Symbol.iterator] = Q[Symbol.iterator]), dt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
            ot["[object " + e + "]"] = e.toLowerCase()
        });
        var ft =
            /*!
             * Sizzle CSS Selector Engine v2.2.1
             * http://sizzlejs.com/
             *
             * Copyright jQuery Foundation and other contributors
             * Released under the MIT license
             * http://jquery.org/license
             *
             * Date: 2015-10-17
             */
            function(t) {
                function e(t, e, n, i) {
                    var o, s, r, a, l, d, c, p, f = e && e.ownerDocument,
                        m = e ? e.nodeType : 9;
                    if (n = n || [], "string" != typeof t || !t || 1 !== m && 9 !== m && 11 !== m) return n;
                    if (!i && ((e ? e.ownerDocument || e : N) !== H && j(e), e = e || H, P)) {
                        if (11 !== m && (d = yt.exec(t)))
                            if (o = d[1]) {
                                if (9 === m) {
                                    if (!(r = e.getElementById(o))) return n;
                                    if (r.id === o) return n.push(r), n
                                } else if (f && (r = f.getElementById(o)) && z(e, r) && r.id === o) return n.push(r), n
                            } else {
                                if (d[2]) return Q.apply(n, e.getElementsByTagName(t)), n;
                                if ((o = d[3]) && M.getElementsByClassName && e.getElementsByClassName) return Q.apply(n, e.getElementsByClassName(o)), n
                            }
                        if (M.qsa && !U[t + " "] && (!A || !A.test(t))) {
                            if (1 !== m) f = e, p = t;
                            else if ("object" !== e.nodeName.toLowerCase()) {
                                for ((a = e.getAttribute("id")) ? a = a.replace(vt, "\\$&") : e.setAttribute("id", a = W), c = D(t), s = c.length, l = ht.test(a) ? "#" + a : "[id='" + a + "']"; s--;) c[s] = l + " " + h(c[s]);
                                p = c.join(","), f = gt.test(t) && u(e.parentNode) || e
                            }
                            if (p) try {
                                return Q.apply(n, f.querySelectorAll(p)), n
                            } catch (_) {} finally {
                                a === W && e.removeAttribute("id")
                            }
                        }
                    }
                    return S(t.replace(at, "$1"), e, n, i)
                }

                function n() {
                    function t(n, i) {
                        return e.push(n + " ") > w.cacheLength && delete t[e.shift()], t[n + " "] = i
                    }
                    var e = [];
                    return t
                }

                function i(t) {
                    return t[W] = !0, t
                }

                function o(t) {
                    var e = H.createElement("div");
                    try {
                        return !!t(e)
                    } catch (n) {
                        return !1
                    } finally {
                        e.parentNode && e.parentNode.removeChild(e), e = null
                    }
                }

                function s(t, e) {
                    for (var n = t.split("|"), i = n.length; i--;) w.attrHandle[n[i]] = e
                }

                function r(t, e) {
                    var n = e && t,
                        i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || V) - (~t.sourceIndex || V);
                    if (i) return i;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === e) return -1;
                    return t ? 1 : -1
                }

                function a(t) {
                    return function(e) {
                        var n = e.nodeName.toLowerCase();
                        return "input" === n && e.type === t
                    }
                }

                function l(t) {
                    return function(e) {
                        var n = e.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && e.type === t
                    }
                }

                function d(t) {
                    return i(function(e) {
                        return e = +e, i(function(n, i) {
                            for (var o, s = t([], n.length, e), r = s.length; r--;) n[o = s[r]] && (n[o] = !(i[o] = n[o]))
                        })
                    })
                }

                function u(t) {
                    return t && "undefined" != typeof t.getElementsByTagName && t
                }

                function c() {}

                function h(t) {
                    for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
                    return i
                }

                function p(t, e, n) {
                    var i = e.dir,
                        o = n && "parentNode" === i,
                        s = F++;
                    return e.first ? function(e, n, s) {
                        for (; e = e[i];)
                            if (1 === e.nodeType || o) return t(e, n, s)
                    } : function(e, n, r) {
                        var a, l, d, u = [I, s];
                        if (r) {
                            for (; e = e[i];)
                                if ((1 === e.nodeType || o) && t(e, n, r)) return !0
                        } else
                            for (; e = e[i];)
                                if (1 === e.nodeType || o) {
                                    if (d = e[W] || (e[W] = {}), l = d[e.uniqueID] || (d[e.uniqueID] = {}), (a = l[i]) && a[0] === I && a[1] === s) return u[2] = a[2];
                                    if (l[i] = u, u[2] = t(e, n, r)) return !0
                                }
                    }
                }

                function f(t) {
                    return t.length > 1 ? function(e, n, i) {
                        for (var o = t.length; o--;)
                            if (!t[o](e, n, i)) return !1;
                        return !0
                    } : t[0]
                }

                function m(t, n, i) {
                    for (var o = 0, s = n.length; s > o; o++) e(t, n[o], i);
                    return i
                }

                function _(t, e, n, i, o) {
                    for (var s, r = [], a = 0, l = t.length, d = null != e; l > a; a++)(s = t[a]) && (n && !n(s, i, o) || (r.push(s), d && e.push(a)));
                    return r
                }

                function y(t, e, n, o, s, r) {
                    return o && !o[W] && (o = y(o)), s && !s[W] && (s = y(s, r)), i(function(i, r, a, l) {
                        var d, u, c, h = [],
                            p = [],
                            f = r.length,
                            y = i || m(e || "*", a.nodeType ? [a] : a, []),
                            g = !t || !i && e ? y : _(y, h, t, a, l),
                            v = n ? s || (i ? t : f || o) ? [] : r : g;
                        if (n && n(g, v, a, l), o)
                            for (d = _(v, p), o(d, [], a, l), u = d.length; u--;)(c = d[u]) && (v[p[u]] = !(g[p[u]] = c));
                        if (i) {
                            if (s || t) {
                                if (s) {
                                    for (d = [], u = v.length; u--;)(c = v[u]) && d.push(g[u] = c);
                                    s(null, v = [], d, l)
                                }
                                for (u = v.length; u--;)(c = v[u]) && (d = s ? tt(i, c) : h[u]) > -1 && (i[d] = !(r[d] = c))
                            }
                        } else v = _(v === r ? v.splice(f, v.length) : v), s ? s(null, r, v, l) : Q.apply(r, v)
                    })
                }

                function g(t) {
                    for (var e, n, i, o = t.length, s = w.relative[t[0].type], r = s || w.relative[" "], a = s ? 1 : 0, l = p(function(t) {
                            return t === e
                        }, r, !0), d = p(function(t) {
                            return tt(e, t) > -1
                        }, r, !0), u = [function(t, n, i) {
                            var o = !s && (i || n !== x) || ((e = n).nodeType ? l(t, n, i) : d(t, n, i));
                            return e = null, o
                        }]; o > a; a++)
                        if (n = w.relative[t[a].type]) u = [p(f(u), n)];
                        else {
                            if (n = w.filter[t[a].type].apply(null, t[a].matches), n[W]) {
                                for (i = ++a; o > i && !w.relative[t[i].type]; i++);
                                return y(a > 1 && f(u), a > 1 && h(t.slice(0, a - 1).concat({
                                    value: " " === t[a - 2].type ? "*" : ""
                                })).replace(at, "$1"), n, i > a && g(t.slice(a, i)), o > i && g(t = t.slice(i)), o > i && h(t))
                            }
                            u.push(n)
                        }
                    return f(u)
                }

                function v(t, n) {
                    var o = n.length > 0,
                        s = t.length > 0,
                        r = function(i, r, a, l, d) {
                            var u, c, h, p = 0,
                                f = "0",
                                m = i && [],
                                y = [],
                                g = x,
                                v = i || s && w.find.TAG("*", d),
                                b = I += null == g ? 1 : Math.random() || .1,
                                M = v.length;
                            for (d && (x = r === H || r || d); f !== M && null != (u = v[f]); f++) {
                                if (s && u) {
                                    for (c = 0, r || u.ownerDocument === H || (j(u), a = !P); h = t[c++];)
                                        if (h(u, r || H, a)) {
                                            l.push(u);
                                            break
                                        }
                                    d && (I = b)
                                }
                                o && ((u = !h && u) && p--, i && m.push(u))
                            }
                            if (p += f, o && f !== p) {
                                for (c = 0; h = n[c++];) h(m, y, r, a);
                                if (i) {
                                    if (p > 0)
                                        for (; f--;) m[f] || y[f] || (y[f] = X.call(l));
                                    y = _(y)
                                }
                                Q.apply(l, y), d && !i && y.length > 0 && p + n.length > 1 && e.uniqueSort(l)
                            }
                            return d && (I = b, x = g), m
                        };
                    return o ? i(r) : r
                }
                var b, M, w, L, k, D, Y, S, x, T, C, j, H, E, P, A, O, $, z, W = "sizzle" + 1 * new Date,
                    N = t.document,
                    I = 0,
                    F = 0,
                    R = n(),
                    q = n(),
                    U = n(),
                    B = function(t, e) {
                        return t === e && (C = !0), 0
                    },
                    V = 1 << 31,
                    J = {}.hasOwnProperty,
                    G = [],
                    X = G.pop,
                    K = G.push,
                    Q = G.push,
                    Z = G.slice,
                    tt = function(t, e) {
                        for (var n = 0, i = t.length; i > n; n++)
                            if (t[n] === e) return n;
                        return -1
                    },
                    et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    nt = "[\\x20\\t\\r\\n\\f]",
                    it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    ot = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]",
                    st = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
                    rt = new RegExp(nt + "+", "g"),
                    at = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
                    lt = new RegExp("^" + nt + "*," + nt + "*"),
                    dt = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
                    ut = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
                    ct = new RegExp(st),
                    ht = new RegExp("^" + it + "$"),
                    pt = {
                        ID: new RegExp("^#(" + it + ")"),
                        CLASS: new RegExp("^\\.(" + it + ")"),
                        TAG: new RegExp("^(" + it + "|[*])"),
                        ATTR: new RegExp("^" + ot),
                        PSEUDO: new RegExp("^" + st),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + et + ")$", "i"),
                        needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
                    },
                    ft = /^(?:input|select|textarea|button)$/i,
                    mt = /^h\d$/i,
                    _t = /^[^{]+\{\s*\[native \w/,
                    yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    gt = /[+~]/,
                    vt = /'|\\/g,
                    bt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
                    Mt = function(t, e, n) {
                        var i = "0x" + e - 65536;
                        return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                    },
                    wt = function() {
                        j()
                    };
                try {
                    Q.apply(G = Z.call(N.childNodes), N.childNodes), G[N.childNodes.length].nodeType
                } catch (Lt) {
                    Q = {
                        apply: G.length ? function(t, e) {
                            K.apply(t, Z.call(e))
                        } : function(t, e) {
                            for (var n = t.length, i = 0; t[n++] = e[i++];);
                            t.length = n - 1
                        }
                    }
                }
                M = e.support = {}, k = e.isXML = function(t) {
                    var e = t && (t.ownerDocument || t).documentElement;
                    return e ? "HTML" !== e.nodeName : !1
                }, j = e.setDocument = function(t) {
                    var e, n, i = t ? t.ownerDocument || t : N;
                    return i !== H && 9 === i.nodeType && i.documentElement ? (H = i, E = H.documentElement, P = !k(H), (n = H.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", wt, !1) : n.attachEvent && n.attachEvent("onunload", wt)), M.attributes = o(function(t) {
                        return t.className = "i", !t.getAttribute("className")
                    }), M.getElementsByTagName = o(function(t) {
                        return t.appendChild(H.createComment("")), !t.getElementsByTagName("*").length
                    }), M.getElementsByClassName = _t.test(H.getElementsByClassName), M.getById = o(function(t) {
                        return E.appendChild(t).id = W, !H.getElementsByName || !H.getElementsByName(W).length
                    }), M.getById ? (w.find.ID = function(t, e) {
                        if ("undefined" != typeof e.getElementById && P) {
                            var n = e.getElementById(t);
                            return n ? [n] : []
                        }
                    }, w.filter.ID = function(t) {
                        var e = t.replace(bt, Mt);
                        return function(t) {
                            return t.getAttribute("id") === e
                        }
                    }) : (delete w.find.ID, w.filter.ID = function(t) {
                        var e = t.replace(bt, Mt);
                        return function(t) {
                            var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                            return n && n.value === e
                        }
                    }), w.find.TAG = M.getElementsByTagName ? function(t, e) {
                        return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : M.qsa ? e.querySelectorAll(t) : void 0
                    } : function(t, e) {
                        var n, i = [],
                            o = 0,
                            s = e.getElementsByTagName(t);
                        if ("*" === t) {
                            for (; n = s[o++];) 1 === n.nodeType && i.push(n);
                            return i
                        }
                        return s
                    }, w.find.CLASS = M.getElementsByClassName && function(t, e) {
                        return "undefined" != typeof e.getElementsByClassName && P ? e.getElementsByClassName(t) : void 0
                    }, O = [], A = [], (M.qsa = _t.test(H.querySelectorAll)) && (o(function(t) {
                        E.appendChild(t).innerHTML = "<a id='" + W + "'></a><select id='" + W + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && A.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || A.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + W + "-]").length || A.push("~="), t.querySelectorAll(":checked").length || A.push(":checked"), t.querySelectorAll("a#" + W + "+*").length || A.push(".#.+[+~]")
                    }), o(function(t) {
                        var e = H.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && A.push("name" + nt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || A.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), A.push(",.*:")
                    })), (M.matchesSelector = _t.test($ = E.matches || E.webkitMatchesSelector || E.mozMatchesSelector || E.oMatchesSelector || E.msMatchesSelector)) && o(function(t) {
                        M.disconnectedMatch = $.call(t, "div"), $.call(t, "[s!='']:x"), O.push("!=", st)
                    }), A = A.length && new RegExp(A.join("|")), O = O.length && new RegExp(O.join("|")), e = _t.test(E.compareDocumentPosition), z = e || _t.test(E.contains) ? function(t, e) {
                        var n = 9 === t.nodeType ? t.documentElement : t,
                            i = e && e.parentNode;
                        return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                    } : function(t, e) {
                        if (e)
                            for (; e = e.parentNode;)
                                if (e === t) return !0;
                        return !1
                    }, B = e ? function(t, e) {
                        if (t === e) return C = !0, 0;
                        var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                        return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !M.sortDetached && e.compareDocumentPosition(t) === n ? t === H || t.ownerDocument === N && z(N, t) ? -1 : e === H || e.ownerDocument === N && z(N, e) ? 1 : T ? tt(T, t) - tt(T, e) : 0 : 4 & n ? -1 : 1)
                    } : function(t, e) {
                        if (t === e) return C = !0, 0;
                        var n, i = 0,
                            o = t.parentNode,
                            s = e.parentNode,
                            a = [t],
                            l = [e];
                        if (!o || !s) return t === H ? -1 : e === H ? 1 : o ? -1 : s ? 1 : T ? tt(T, t) - tt(T, e) : 0;
                        if (o === s) return r(t, e);
                        for (n = t; n = n.parentNode;) a.unshift(n);
                        for (n = e; n = n.parentNode;) l.unshift(n);
                        for (; a[i] === l[i];) i++;
                        return i ? r(a[i], l[i]) : a[i] === N ? -1 : l[i] === N ? 1 : 0
                    }, H) : H
                }, e.matches = function(t, n) {
                    return e(t, null, null, n)
                }, e.matchesSelector = function(t, n) {
                    if ((t.ownerDocument || t) !== H && j(t), n = n.replace(ut, "='$1']"), M.matchesSelector && P && !U[n + " "] && (!O || !O.test(n)) && (!A || !A.test(n))) try {
                        var i = $.call(t, n);
                        if (i || M.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                    } catch (o) {}
                    return e(n, H, null, [t]).length > 0
                }, e.contains = function(t, e) {
                    return (t.ownerDocument || t) !== H && j(t), z(t, e)
                }, e.attr = function(t, e) {
                    (t.ownerDocument || t) !== H && j(t);
                    var n = w.attrHandle[e.toLowerCase()],
                        i = n && J.call(w.attrHandle, e.toLowerCase()) ? n(t, e, !P) : void 0;
                    return void 0 !== i ? i : M.attributes || !P ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
                }, e.error = function(t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                }, e.uniqueSort = function(t) {
                    var e, n = [],
                        i = 0,
                        o = 0;
                    if (C = !M.detectDuplicates, T = !M.sortStable && t.slice(0), t.sort(B), C) {
                        for (; e = t[o++];) e === t[o] && (i = n.push(o));
                        for (; i--;) t.splice(n[i], 1)
                    }
                    return T = null, t
                }, L = e.getText = function(t) {
                    var e, n = "",
                        i = 0,
                        o = t.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) n += L(t)
                        } else if (3 === o || 4 === o) return t.nodeValue
                    } else
                        for (; e = t[i++];) n += L(e);
                    return n
                }, w = e.selectors = {
                    cacheLength: 50,
                    createPseudo: i,
                    match: pt,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(t) {
                            return t[1] = t[1].replace(bt, Mt), t[3] = (t[3] || t[4] || t[5] || "").replace(bt, Mt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                        },
                        CHILD: function(t) {
                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                        },
                        PSEUDO: function(t) {
                            var e, n = !t[6] && t[2];
                            return pt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ct.test(n) && (e = D(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(t) {
                            var e = t.replace(bt, Mt).toLowerCase();
                            return "*" === t ? function() {
                                return !0
                            } : function(t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        },
                        CLASS: function(t) {
                            var e = R[t + " "];
                            return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && R(t, function(t) {
                                return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(t, n, i) {
                            return function(o) {
                                var s = e.attr(o, t);
                                return null == s ? "!=" === n : n ? (s += "", "=" === n ? s === i : "!=" === n ? s !== i : "^=" === n ? i && 0 === s.indexOf(i) : "*=" === n ? i && s.indexOf(i) > -1 : "$=" === n ? i && s.slice(-i.length) === i : "~=" === n ? (" " + s.replace(rt, " ") + " ").indexOf(i) > -1 : "|=" === n ? s === i || s.slice(0, i.length + 1) === i + "-" : !1) : !0
                            }
                        },
                        CHILD: function(t, e, n, i, o) {
                            var s = "nth" !== t.slice(0, 3),
                                r = "last" !== t.slice(-4),
                                a = "of-type" === e;
                            return 1 === i && 0 === o ? function(t) {
                                return !!t.parentNode
                            } : function(e, n, l) {
                                var d, u, c, h, p, f, m = s !== r ? "nextSibling" : "previousSibling",
                                    _ = e.parentNode,
                                    y = a && e.nodeName.toLowerCase(),
                                    g = !l && !a,
                                    v = !1;
                                if (_) {
                                    if (s) {
                                        for (; m;) {
                                            for (h = e; h = h[m];)
                                                if (a ? h.nodeName.toLowerCase() === y : 1 === h.nodeType) return !1;
                                            f = m = "only" === t && !f && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (f = [r ? _.firstChild : _.lastChild], r && g) {
                                        for (h = _, c = h[W] || (h[W] = {}), u = c[h.uniqueID] || (c[h.uniqueID] = {}), d = u[t] || [], p = d[0] === I && d[1], v = p && d[2], h = p && _.childNodes[p]; h = ++p && h && h[m] || (v = p = 0) || f.pop();)
                                            if (1 === h.nodeType && ++v && h === e) {
                                                u[t] = [I, p, v];
                                                break
                                            }
                                    } else if (g && (h = e, c = h[W] || (h[W] = {}), u = c[h.uniqueID] || (c[h.uniqueID] = {}), d = u[t] || [], p = d[0] === I && d[1], v = p), v === !1)
                                        for (;
                                            (h = ++p && h && h[m] || (v = p = 0) || f.pop()) && ((a ? h.nodeName.toLowerCase() !== y : 1 !== h.nodeType) || !++v || (g && (c = h[W] || (h[W] = {}), u = c[h.uniqueID] || (c[h.uniqueID] = {}), u[t] = [I, v]), h !== e)););
                                    return v -= o, v === i || v % i === 0 && v / i >= 0
                                }
                            }
                        },
                        PSEUDO: function(t, n) {
                            var o, s = w.pseudos[t] || w.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                            return s[W] ? s(n) : s.length > 1 ? (o = [t, t, "", n], w.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                                for (var i, o = s(t, n), r = o.length; r--;) i = tt(t, o[r]), t[i] = !(e[i] = o[r])
                            }) : function(t) {
                                return s(t, 0, o)
                            }) : s
                        }
                    },
                    pseudos: {
                        not: i(function(t) {
                            var e = [],
                                n = [],
                                o = Y(t.replace(at, "$1"));
                            return o[W] ? i(function(t, e, n, i) {
                                for (var s, r = o(t, null, i, []), a = t.length; a--;)(s = r[a]) && (t[a] = !(e[a] = s))
                            }) : function(t, i, s) {
                                return e[0] = t, o(e, null, s, n), e[0] = null, !n.pop()
                            }
                        }),
                        has: i(function(t) {
                            return function(n) {
                                return e(t, n).length > 0
                            }
                        }),
                        contains: i(function(t) {
                            return t = t.replace(bt, Mt),
                                function(e) {
                                    return (e.textContent || e.innerText || L(e)).indexOf(t) > -1
                                }
                        }),
                        lang: i(function(t) {
                            return ht.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(bt, Mt).toLowerCase(),
                                function(e) {
                                    var n;
                                    do
                                        if (n = P ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                                    while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1
                                }
                        }),
                        target: function(e) {
                            var n = t.location && t.location.hash;
                            return n && n.slice(1) === e.id
                        },
                        root: function(t) {
                            return t === E
                        },
                        focus: function(t) {
                            return t === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        },
                        enabled: function(t) {
                            return t.disabled === !1
                        },
                        disabled: function(t) {
                            return t.disabled === !0
                        },
                        checked: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        },
                        selected: function(t) {
                            return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                        },
                        empty: function(t) {
                            for (t = t.firstChild; t; t = t.nextSibling)
                                if (t.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(t) {
                            return !w.pseudos.empty(t)
                        },
                        header: function(t) {
                            return mt.test(t.nodeName)
                        },
                        input: function(t) {
                            return ft.test(t.nodeName)
                        },
                        button: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        },
                        text: function(t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                        },
                        first: d(function() {
                            return [0]
                        }),
                        last: d(function(t, e) {
                            return [e - 1]
                        }),
                        eq: d(function(t, e, n) {
                            return [0 > n ? n + e : n]
                        }),
                        even: d(function(t, e) {
                            for (var n = 0; e > n; n += 2) t.push(n);
                            return t
                        }),
                        odd: d(function(t, e) {
                            for (var n = 1; e > n; n += 2) t.push(n);
                            return t
                        }),
                        lt: d(function(t, e, n) {
                            for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
                            return t
                        }),
                        gt: d(function(t, e, n) {
                            for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
                            return t
                        })
                    }
                }, w.pseudos.nth = w.pseudos.eq;
                for (b in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) w.pseudos[b] = a(b);
                for (b in {
                        submit: !0,
                        reset: !0
                    }) w.pseudos[b] = l(b);
                return c.prototype = w.filters = w.pseudos, w.setFilters = new c, D = e.tokenize = function(t, n) {
                    var i, o, s, r, a, l, d, u = q[t + " "];
                    if (u) return n ? 0 : u.slice(0);
                    for (a = t, l = [], d = w.preFilter; a;) {
                        i && !(o = lt.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(s = [])), i = !1, (o = dt.exec(a)) && (i = o.shift(), s.push({
                            value: i,
                            type: o[0].replace(at, " ")
                        }), a = a.slice(i.length));
                        for (r in w.filter) !(o = pt[r].exec(a)) || d[r] && !(o = d[r](o)) || (i = o.shift(), s.push({
                            value: i,
                            type: r,
                            matches: o
                        }), a = a.slice(i.length));
                        if (!i) break
                    }
                    return n ? a.length : a ? e.error(t) : q(t, l).slice(0)
                }, Y = e.compile = function(t, e) {
                    var n, i = [],
                        o = [],
                        s = U[t + " "];
                    if (!s) {
                        for (e || (e = D(t)), n = e.length; n--;) s = g(e[n]), s[W] ? i.push(s) : o.push(s);
                        s = U(t, v(o, i)), s.selector = t
                    }
                    return s
                }, S = e.select = function(t, e, n, i) {
                    var o, s, r, a, l, d = "function" == typeof t && t,
                        c = !i && D(t = d.selector || t);
                    if (n = n || [], 1 === c.length) {
                        if (s = c[0] = c[0].slice(0), s.length > 2 && "ID" === (r = s[0]).type && M.getById && 9 === e.nodeType && P && w.relative[s[1].type]) {
                            if (e = (w.find.ID(r.matches[0].replace(bt, Mt), e) || [])[0], !e) return n;
                            d && (e = e.parentNode), t = t.slice(s.shift().value.length)
                        }
                        for (o = pt.needsContext.test(t) ? 0 : s.length; o-- && (r = s[o], !w.relative[a = r.type]);)
                            if ((l = w.find[a]) && (i = l(r.matches[0].replace(bt, Mt), gt.test(s[0].type) && u(e.parentNode) || e))) {
                                if (s.splice(o, 1), t = i.length && h(s), !t) return Q.apply(n, i), n;
                                break
                            }
                    }
                    return (d || Y(t, c))(i, e, !P, n, !e || gt.test(t) && u(e.parentNode) || e), n
                }, M.sortStable = W.split("").sort(B).join("") === W, M.detectDuplicates = !!C, j(), M.sortDetached = o(function(t) {
                    return 1 & t.compareDocumentPosition(H.createElement("div"))
                }), o(function(t) {
                    return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                }) || s("type|href|height|width", function(t, e, n) {
                    return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                }), M.attributes && o(function(t) {
                    return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                }) || s("value", function(t, e, n) {
                    return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
                }), o(function(t) {
                    return null == t.getAttribute("disabled")
                }) || s(et, function(t, e, n) {
                    var i;
                    return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
                }), e
            }(n);
        dt.find = ft, dt.expr = ft.selectors, dt.expr[":"] = dt.expr.pseudos, dt.uniqueSort = dt.unique = ft.uniqueSort, dt.text = ft.getText, dt.isXMLDoc = ft.isXML, dt.contains = ft.contains;
        var mt = function(t, e, n) {
                for (var i = [], o = void 0 !== n;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (o && dt(t).is(n)) break;
                        i.push(t)
                    }
                return i
            },
            _t = function(t, e) {
                for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                return n
            },
            yt = dt.expr.match.needsContext,
            gt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            vt = /^.[^:#\[\.,]*$/;
        dt.filter = function(t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? dt.find.matchesSelector(i, t) ? [i] : [] : dt.find.matches(t, dt.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, dt.fn.extend({
            find: function(t) {
                var e, n = this.length,
                    i = [],
                    o = this;
                if ("string" != typeof t) return this.pushStack(dt(t).filter(function() {
                    for (e = 0; n > e; e++)
                        if (dt.contains(o[e], this)) return !0
                }));
                for (e = 0; n > e; e++) dt.find(t, o[e], i);
                return i = this.pushStack(n > 1 ? dt.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
            },
            filter: function(t) {
                return this.pushStack(a(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(a(this, t || [], !0))
            },
            is: function(t) {
                return !!a(this, "string" == typeof t && yt.test(t) ? dt(t) : t || [], !1).length
            }
        });
        var bt, Mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            wt = dt.fn.init = function(t, e, n) {
                var i, o;
                if (!t) return this;
                if (n = n || bt, "string" == typeof t) {
                    if (i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : Mt.exec(t), !i || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                    if (i[1]) {
                        if (e = e instanceof dt ? e[0] : e, dt.merge(this, dt.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : Z, !0)), gt.test(i[1]) && dt.isPlainObject(e))
                            for (i in e) dt.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                        return this
                    }
                    return o = Z.getElementById(i[2]), o && o.parentNode && (this.length = 1, this[0] = o), this.context = Z, this.selector = t, this
                }
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : dt.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(dt) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), dt.makeArray(t, this))
            };
        wt.prototype = dt.fn, bt = dt(Z);
        var Lt = /^(?:parents|prev(?:Until|All))/,
            kt = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        dt.fn.extend({
            has: function(t) {
                var e = dt(t, this),
                    n = e.length;
                return this.filter(function() {
                    for (var t = 0; n > t; t++)
                        if (dt.contains(this, e[t])) return !0
                })
            },
            closest: function(t, e) {
                for (var n, i = 0, o = this.length, s = [], r = yt.test(t) || "string" != typeof t ? dt(t, e || this.context) : 0; o > i; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (r ? r.index(n) > -1 : 1 === n.nodeType && dt.find.matchesSelector(n, t))) {
                            s.push(n);
                            break
                        }
                return this.pushStack(s.length > 1 ? dt.uniqueSort(s) : s)
            },
            index: function(t) {
                return t ? "string" == typeof t ? it.call(dt(t), this[0]) : it.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(dt.uniqueSort(dt.merge(this.get(), dt(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), dt.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return mt(t, "parentNode")
            },
            parentsUntil: function(t, e, n) {
                return mt(t, "parentNode", n)
            },
            next: function(t) {
                return l(t, "nextSibling")
            },
            prev: function(t) {
                return l(t, "previousSibling")
            },
            nextAll: function(t) {
                return mt(t, "nextSibling")
            },
            prevAll: function(t) {
                return mt(t, "previousSibling")
            },
            nextUntil: function(t, e, n) {
                return mt(t, "nextSibling", n)
            },
            prevUntil: function(t, e, n) {
                return mt(t, "previousSibling", n)
            },
            siblings: function(t) {
                return _t((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return _t(t.firstChild)
            },
            contents: function(t) {
                return t.contentDocument || dt.merge([], t.childNodes)
            }
        }, function(t, e) {
            dt.fn[t] = function(n, i) {
                var o = dt.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = dt.filter(i, o)), this.length > 1 && (kt[t] || dt.uniqueSort(o), Lt.test(t) && o.reverse()), this.pushStack(o)
            }
        });
        var Dt = /\S+/g;
        dt.Callbacks = function(t) {
            t = "string" == typeof t ? d(t) : dt.extend({}, t);
            var e, n, i, o, s = [],
                r = [],
                a = -1,
                l = function() {
                    for (o = t.once, i = e = !0; r.length; a = -1)
                        for (n = r.shift(); ++a < s.length;) s[a].apply(n[0], n[1]) === !1 && t.stopOnFalse && (a = s.length, n = !1);
                    t.memory || (n = !1), e = !1, o && (s = n ? [] : "")
                },
                u = {
                    add: function() {
                        return s && (n && !e && (a = s.length - 1, r.push(n)), function i(e) {
                            dt.each(e, function(e, n) {
                                dt.isFunction(n) ? t.unique && u.has(n) || s.push(n) : n && n.length && "string" !== dt.type(n) && i(n)
                            })
                        }(arguments), n && !e && l()), this
                    },
                    remove: function() {
                        return dt.each(arguments, function(t, e) {
                            for (var n;
                                (n = dt.inArray(e, s, n)) > -1;) s.splice(n, 1), a >= n && a--
                        }), this
                    },
                    has: function(t) {
                        return t ? dt.inArray(t, s) > -1 : s.length > 0
                    },
                    empty: function() {
                        return s && (s = []), this
                    },
                    disable: function() {
                        return o = r = [], s = n = "", this
                    },
                    disabled: function() {
                        return !s
                    },
                    lock: function() {
                        return o = r = [], n || (s = n = ""), this
                    },
                    locked: function() {
                        return !!o
                    },
                    fireWith: function(t, n) {
                        return o || (n = n || [], n = [t, n.slice ? n.slice() : n], r.push(n), e || l()), this
                    },
                    fire: function() {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return u
        }, dt.extend({
            Deferred: function(t) {
                var e = [
                        ["resolve", "done", dt.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", dt.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", dt.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var t = arguments;
                            return dt.Deferred(function(n) {
                                dt.each(e, function(e, s) {
                                    var r = dt.isFunction(t[e]) && t[e];
                                    o[s[1]](function() {
                                        var t = r && r.apply(this, arguments);
                                        t && dt.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[s[0] + "With"](this === i ? n.promise() : this, r ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? dt.extend(t, i) : i
                        }
                    },
                    o = {};
                return i.pipe = i.then, dt.each(e, function(t, s) {
                    var r = s[2],
                        a = s[3];
                    i[s[1]] = r.add, a && r.add(function() {
                        n = a
                    }, e[1 ^ t][2].disable, e[2][2].lock), o[s[0]] = function() {
                        return o[s[0] + "With"](this === o ? i : this, arguments), this
                    }, o[s[0] + "With"] = r.fireWith
                }), i.promise(o), t && t.call(o, o), o
            },
            when: function(t) {
                var e, n, i, o = 0,
                    s = tt.call(arguments),
                    r = s.length,
                    a = 1 !== r || t && dt.isFunction(t.promise) ? r : 0,
                    l = 1 === a ? t : dt.Deferred(),
                    d = function(t, n, i) {
                        return function(o) {
                            n[t] = this, i[t] = arguments.length > 1 ? tt.call(arguments) : o, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                        }
                    };
                if (r > 1)
                    for (e = new Array(r), n = new Array(r), i = new Array(r); r > o; o++) s[o] && dt.isFunction(s[o].promise) ? s[o].promise().progress(d(o, n, e)).done(d(o, i, s)).fail(l.reject) : --a;
                return a || l.resolveWith(i, s), l.promise()
            }
        });
        var Yt;
        dt.fn.ready = function(t) {
            return dt.ready.promise().done(t), this
        }, dt.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? dt.readyWait++ : dt.ready(!0)
            },
            ready: function(t) {
                (t === !0 ? --dt.readyWait : dt.isReady) || (dt.isReady = !0, t !== !0 && --dt.readyWait > 0 || (Yt.resolveWith(Z, [dt]), dt.fn.triggerHandler && (dt(Z).triggerHandler("ready"), dt(Z).off("ready"))))
            }
        }), dt.ready.promise = function(t) {
            return Yt || (Yt = dt.Deferred(), "complete" === Z.readyState || "loading" !== Z.readyState && !Z.documentElement.doScroll ? n.setTimeout(dt.ready) : (Z.addEventListener("DOMContentLoaded", u), n.addEventListener("load", u))), Yt.promise(t)
        }, dt.ready.promise();
        var St = function(t, e, n, i, o, s, r) {
                var a = 0,
                    l = t.length,
                    d = null == n;
                if ("object" === dt.type(n)) {
                    o = !0;
                    for (a in n) St(t, e, a, n[a], !0, s, r)
                } else if (void 0 !== i && (o = !0, dt.isFunction(i) || (r = !0), d && (r ? (e.call(t, i), e = null) : (d = e, e = function(t, e, n) {
                        return d.call(dt(t), n)
                    })), e))
                    for (; l > a; a++) e(t[a], n, r ? i : i.call(t[a], a, e(t[a], n)));
                return o ? t : d ? e.call(t) : l ? e(t[0], n) : s
            },
            xt = function(t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
            };
        c.uid = 1, c.prototype = {
            register: function(t, e) {
                var n = e || {};
                return t.nodeType ? t[this.expando] = n : Object.defineProperty(t, this.expando, {
                    value: n,
                    writable: !0,
                    configurable: !0
                }), t[this.expando]
            },
            cache: function(t) {
                if (!xt(t)) return {};
                var e = t[this.expando];
                return e || (e = {}, xt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e
            },
            set: function(t, e, n) {
                var i, o = this.cache(t);
                if ("string" == typeof e) o[e] = n;
                else
                    for (i in e) o[i] = e[i];
                return o
            },
            get: function(t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][e]
            },
            access: function(t, e, n) {
                var i;
                return void 0 === e || e && "string" == typeof e && void 0 === n ? (i = this.get(t, e), void 0 !== i ? i : this.get(t, dt.camelCase(e))) : (this.set(t, e, n), void 0 !== n ? n : e)
            },
            remove: function(t, e) {
                var n, i, o, s = t[this.expando];
                if (void 0 !== s) {
                    if (void 0 === e) this.register(t);
                    else {
                        dt.isArray(e) ? i = e.concat(e.map(dt.camelCase)) : (o = dt.camelCase(e), e in s ? i = [e, o] : (i = o, i = i in s ? [i] : i.match(Dt) || [])), n = i.length;
                        for (; n--;) delete s[i[n]]
                    }(void 0 === e || dt.isEmptyObject(s)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            },
            hasData: function(t) {
                var e = t[this.expando];
                return void 0 !== e && !dt.isEmptyObject(e)
            }
        };
        var Tt = new c,
            Ct = new c,
            jt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Ht = /[A-Z]/g;
        dt.extend({
            hasData: function(t) {
                return Ct.hasData(t) || Tt.hasData(t)
            },
            data: function(t, e, n) {
                return Ct.access(t, e, n)
            },
            removeData: function(t, e) {
                Ct.remove(t, e)
            },
            _data: function(t, e, n) {
                return Tt.access(t, e, n)
            },
            _removeData: function(t, e) {
                Tt.remove(t, e)
            }
        }), dt.fn.extend({
            data: function(t, e) {
                var n, i, o, s = this[0],
                    r = s && s.attributes;
                if (void 0 === t) {
                    if (this.length && (o = Ct.get(s), 1 === s.nodeType && !Tt.get(s, "hasDataAttrs"))) {
                        for (n = r.length; n--;) r[n] && (i = r[n].name, 0 === i.indexOf("data-") && (i = dt.camelCase(i.slice(5)), h(s, i, o[i])));
                        Tt.set(s, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof t ? this.each(function() {
                    Ct.set(this, t)
                }) : St(this, function(e) {
                    var n, i;
                    if (s && void 0 === e) {
                        if (n = Ct.get(s, t) || Ct.get(s, t.replace(Ht, "-$&").toLowerCase()), void 0 !== n) return n;
                        if (i = dt.camelCase(t), n = Ct.get(s, i), void 0 !== n) return n;
                        if (n = h(s, i, void 0), void 0 !== n) return n
                    } else i = dt.camelCase(t), this.each(function() {
                        var n = Ct.get(this, i);
                        Ct.set(this, i, e), t.indexOf("-") > -1 && void 0 !== n && Ct.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function(t) {
                return this.each(function() {
                    Ct.remove(this, t)
                })
            }
        }), dt.extend({
            queue: function(t, e, n) {
                var i;
                return t ? (e = (e || "fx") + "queue", i = Tt.get(t, e), n && (!i || dt.isArray(n) ? i = Tt.access(t, e, dt.makeArray(n)) : i.push(n)), i || []) : void 0
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var n = dt.queue(t, e),
                    i = n.length,
                    o = n.shift(),
                    s = dt._queueHooks(t, e),
                    r = function() {
                        dt.dequeue(t, e)
                    };
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete s.stop, o.call(t, r, s)), !i && s && s.empty.fire()
            },
            _queueHooks: function(t, e) {
                var n = e + "queueHooks";
                return Tt.get(t, n) || Tt.access(t, n, {
                    empty: dt.Callbacks("once memory").add(function() {
                        Tt.remove(t, [e + "queue", n])
                    })
                })
            }
        }), dt.fn.extend({
            queue: function(t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? dt.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var n = dt.queue(this, t, e);
                    dt._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && dt.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    dt.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var n, i = 1,
                    o = dt.Deferred(),
                    s = this,
                    r = this.length,
                    a = function() {
                        --i || o.resolveWith(s, [s])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;) n = Tt.get(s[r], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
                return a(), o.promise(e)
            }
        });
        var Et = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Pt = new RegExp("^(?:([+-])=|)(" + Et + ")([a-z%]*)$", "i"),
            At = ["Top", "Right", "Bottom", "Left"],
            Ot = function(t, e) {
                return t = e || t, "none" === dt.css(t, "display") || !dt.contains(t.ownerDocument, t)
            },
            $t = /^(?:checkbox|radio)$/i,
            zt = /<([\w:-]+)/,
            Wt = /^$|\/(?:java|ecma)script/i,
            Nt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Nt.optgroup = Nt.option, Nt.tbody = Nt.tfoot = Nt.colgroup = Nt.caption = Nt.thead, Nt.th = Nt.td;
        var It = /<|&#?\w+;/;
        ! function() {
            var t = Z.createDocumentFragment(),
                e = t.appendChild(Z.createElement("div")),
                n = Z.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), at.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", at.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
        }();
        var Ft = /^key/,
            Rt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            qt = /^([^.]*)(?:\.(.+)|)/;
        dt.event = {
            global: {},
            add: function(t, e, n, i, o) {
                var s, r, a, l, d, u, c, h, p, f, m, _ = Tt.get(t);
                if (_)
                    for (n.handler && (s = n, n = s.handler, o = s.selector), n.guid || (n.guid = dt.guid++), (l = _.events) || (l = _.events = {}), (r = _.handle) || (r = _.handle = function(e) {
                            return "undefined" != typeof dt && dt.event.triggered !== e.type ? dt.event.dispatch.apply(t, arguments) : void 0
                        }), e = (e || "").match(Dt) || [""], d = e.length; d--;) a = qt.exec(e[d]) || [], p = m = a[1], f = (a[2] || "").split(".").sort(), p && (c = dt.event.special[p] || {}, p = (o ? c.delegateType : c.bindType) || p, c = dt.event.special[p] || {}, u = dt.extend({
                        type: p,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && dt.expr.match.needsContext.test(o),
                        namespace: f.join(".")
                    }, s), (h = l[p]) || (h = l[p] = [], h.delegateCount = 0, c.setup && c.setup.call(t, i, f, r) !== !1 || t.addEventListener && t.addEventListener(p, r)), c.add && (c.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, u) : h.push(u), dt.event.global[p] = !0)
            },
            remove: function(t, e, n, i, o) {
                var s, r, a, l, d, u, c, h, p, f, m, _ = Tt.hasData(t) && Tt.get(t);
                if (_ && (l = _.events)) {
                    for (e = (e || "").match(Dt) || [""], d = e.length; d--;)
                        if (a = qt.exec(e[d]) || [], p = m = a[1], f = (a[2] || "").split(".").sort(), p) {
                            for (c = dt.event.special[p] || {}, p = (i ? c.delegateType : c.bindType) || p, h = l[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = s = h.length; s--;) u = h[s], !o && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (h.splice(s, 1),
                                u.selector && h.delegateCount--, c.remove && c.remove.call(t, u));
                            r && !h.length && (c.teardown && c.teardown.call(t, f, _.handle) !== !1 || dt.removeEvent(t, p, _.handle), delete l[p])
                        } else
                            for (p in l) dt.event.remove(t, p + e[d], n, i, !0);
                    dt.isEmptyObject(l) && Tt.remove(t, "handle events")
                }
            },
            dispatch: function(t) {
                t = dt.event.fix(t);
                var e, n, i, o, s, r = [],
                    a = tt.call(arguments),
                    l = (Tt.get(this, "events") || {})[t.type] || [],
                    d = dt.event.special[t.type] || {};
                if (a[0] = t, t.delegateTarget = this, !d.preDispatch || d.preDispatch.call(this, t) !== !1) {
                    for (r = dt.event.handlers.call(this, t, l), e = 0;
                        (o = r[e++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = o.elem, n = 0;
                            (s = o.handlers[n++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(s.namespace) || (t.handleObj = s, t.data = s.data, i = ((dt.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, a), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return d.postDispatch && d.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(t, e) {
                var n, i, o, s, r = [],
                    a = e.delegateCount,
                    l = t.target;
                if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                    for (; l !== this; l = l.parentNode || this)
                        if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                            for (i = [], n = 0; a > n; n++) s = e[n], o = s.selector + " ", void 0 === i[o] && (i[o] = s.needsContext ? dt(o, this).index(l) > -1 : dt.find(o, this, null, [l]).length), i[o] && i.push(s);
                            i.length && r.push({
                                elem: l,
                                handlers: i
                            })
                        }
                return a < e.length && r.push({
                    elem: this,
                    handlers: e.slice(a)
                }), r
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(t, e) {
                    var n, i, o, s = e.button;
                    return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || Z, i = n.documentElement, o = n.body, t.pageX = e.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), t.pageY = e.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), t.which || void 0 === s || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
                }
            },
            fix: function(t) {
                if (t[dt.expando]) return t;
                var e, n, i, o = t.type,
                    s = t,
                    r = this.fixHooks[o];
                for (r || (this.fixHooks[o] = r = Rt.test(o) ? this.mouseHooks : Ft.test(o) ? this.keyHooks : {}), i = r.props ? this.props.concat(r.props) : this.props, t = new dt.Event(s), e = i.length; e--;) n = i[e], t[n] = s[n];
                return t.target || (t.target = Z), 3 === t.target.nodeType && (t.target = t.target.parentNode), r.filter ? r.filter(t, s) : t
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        return this !== v() && this.focus ? (this.focus(), !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === v() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click && dt.nodeName(this, "input") ? (this.click(), !1) : void 0
                    },
                    _default: function(t) {
                        return dt.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        }, dt.removeEvent = function(t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n)
        }, dt.Event = function(t, e) {
            return this instanceof dt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? y : g) : this.type = t, e && dt.extend(this, e), this.timeStamp = t && t.timeStamp || dt.now(), void(this[dt.expando] = !0)) : new dt.Event(t, e)
        }, dt.Event.prototype = {
            constructor: dt.Event,
            isDefaultPrevented: g,
            isPropagationStopped: g,
            isImmediatePropagationStopped: g,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = y, t && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = y, t && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = y, t && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, dt.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            dt.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var n, i = this,
                        o = t.relatedTarget,
                        s = t.handleObj;
                    return o && (o === i || dt.contains(i, o)) || (t.type = s.origType, n = s.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), dt.fn.extend({
            on: function(t, e, n, i) {
                return b(this, t, e, n, i)
            },
            one: function(t, e, n, i) {
                return b(this, t, e, n, i, 1)
            },
            off: function(t, e, n) {
                var i, o;
                if (t && t.preventDefault && t.handleObj) return i = t.handleObj, dt(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof t) {
                    for (o in t) this.off(o, e, t[o]);
                    return this
                }
                return e !== !1 && "function" != typeof e || (n = e, e = void 0), n === !1 && (n = g), this.each(function() {
                    dt.event.remove(this, t, n, e)
                })
            }
        });
        var Ut = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            Bt = /<script|<style|<link/i,
            Vt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Jt = /^true\/(.*)/,
            Gt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        dt.extend({
            htmlPrefilter: function(t) {
                return t.replace(Ut, "<$1></$2>")
            },
            clone: function(t, e, n) {
                var i, o, s, r, a = t.cloneNode(!0),
                    l = dt.contains(t.ownerDocument, t);
                if (!(at.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || dt.isXMLDoc(t)))
                    for (r = f(a), s = f(t), i = 0, o = s.length; o > i; i++) D(s[i], r[i]);
                if (e)
                    if (n)
                        for (s = s || f(t), r = r || f(a), i = 0, o = s.length; o > i; i++) k(s[i], r[i]);
                    else k(t, a);
                return r = f(a, "script"), r.length > 0 && m(r, !l && f(t, "script")), a
            },
            cleanData: function(t) {
                for (var e, n, i, o = dt.event.special, s = 0; void 0 !== (n = t[s]); s++)
                    if (xt(n)) {
                        if (e = n[Tt.expando]) {
                            if (e.events)
                                for (i in e.events) o[i] ? dt.event.remove(n, i) : dt.removeEvent(n, i, e.handle);
                            n[Tt.expando] = void 0
                        }
                        n[Ct.expando] && (n[Ct.expando] = void 0)
                    }
            }
        }), dt.fn.extend({
            domManip: Y,
            detach: function(t) {
                return S(this, t, !0)
            },
            remove: function(t) {
                return S(this, t)
            },
            text: function(t) {
                return St(this, function(t) {
                    return void 0 === t ? dt.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function() {
                return Y(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = M(this, t);
                        e.appendChild(t)
                    }
                })
            },
            prepend: function() {
                return Y(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = M(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return Y(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return Y(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (dt.cleanData(f(t, !1)), t.textContent = "");
                return this
            },
            clone: function(t, e) {
                return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                    return dt.clone(this, t, e)
                })
            },
            html: function(t) {
                return St(this, function(t) {
                    var e = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !Bt.test(t) && !Nt[(zt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = dt.htmlPrefilter(t);
                        try {
                            for (; i > n; n++) e = this[n] || {}, 1 === e.nodeType && (dt.cleanData(f(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (o) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = [];
                return Y(this, arguments, function(e) {
                    var n = this.parentNode;
                    dt.inArray(this, t) < 0 && (dt.cleanData(f(this)), n && n.replaceChild(e, this))
                }, t)
            }
        }), dt.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            dt.fn[t] = function(t) {
                for (var n, i = [], o = dt(t), s = o.length - 1, r = 0; s >= r; r++) n = r === s ? this : this.clone(!0), dt(o[r])[e](n), nt.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var Xt, Kt = {
                HTML: "block",
                BODY: "block"
            },
            Qt = /^margin/,
            Zt = new RegExp("^(" + Et + ")(?!px)[a-z%]+$", "i"),
            te = function(t) {
                var e = t.ownerDocument.defaultView;
                return e && e.opener || (e = n), e.getComputedStyle(t)
            },
            ee = function(t, e, n, i) {
                var o, s, r = {};
                for (s in e) r[s] = t.style[s], t.style[s] = e[s];
                o = n.apply(t, i || []);
                for (s in e) t.style[s] = r[s];
                return o
            },
            ne = Z.documentElement;
        ! function() {
            function t() {
                a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", ne.appendChild(r);
                var t = n.getComputedStyle(a);
                e = "1%" !== t.top, s = "2px" === t.marginLeft, i = "4px" === t.width, a.style.marginRight = "50%", o = "4px" === t.marginRight, ne.removeChild(r)
            }
            var e, i, o, s, r = Z.createElement("div"),
                a = Z.createElement("div");
            a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", at.clearCloneStyle = "content-box" === a.style.backgroundClip, r.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", r.appendChild(a), dt.extend(at, {
                pixelPosition: function() {
                    return t(), e
                },
                boxSizingReliable: function() {
                    return null == i && t(), i
                },
                pixelMarginRight: function() {
                    return null == i && t(), o
                },
                reliableMarginLeft: function() {
                    return null == i && t(), s
                },
                reliableMarginRight: function() {
                    var t, e = a.appendChild(Z.createElement("div"));
                    return e.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", a.style.width = "1px", ne.appendChild(r), t = !parseFloat(n.getComputedStyle(e).marginRight), ne.removeChild(r), a.removeChild(e), t
                }
            }))
        }();
        var ie = /^(none|table(?!-c[ea]).+)/,
            oe = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            se = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            re = ["Webkit", "O", "Moz", "ms"],
            ae = Z.createElement("div").style;
        dt.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var n = C(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": "cssFloat"
            },
            style: function(t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var o, s, r, a = dt.camelCase(e),
                        l = t.style;
                    return e = dt.cssProps[a] || (dt.cssProps[a] = H(a) || a), r = dt.cssHooks[e] || dt.cssHooks[a], void 0 === n ? r && "get" in r && void 0 !== (o = r.get(t, !1, i)) ? o : l[e] : (s = typeof n, "string" === s && (o = Pt.exec(n)) && o[1] && (n = p(t, e, o), s = "number"), null != n && n === n && ("number" === s && (n += o && o[3] || (dt.cssNumber[a] ? "" : "px")), at.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), r && "set" in r && void 0 === (n = r.set(t, n, i)) || (l[e] = n)), void 0)
                }
            },
            css: function(t, e, n, i) {
                var o, s, r, a = dt.camelCase(e);
                return e = dt.cssProps[a] || (dt.cssProps[a] = H(a) || a), r = dt.cssHooks[e] || dt.cssHooks[a], r && "get" in r && (o = r.get(t, !0, n)), void 0 === o && (o = C(t, e, i)), "normal" === o && e in se && (o = se[e]), "" === n || n ? (s = parseFloat(o), n === !0 || isFinite(s) ? s || 0 : o) : o
            }
        }), dt.each(["height", "width"], function(t, e) {
            dt.cssHooks[e] = {
                get: function(t, n, i) {
                    return n ? ie.test(dt.css(t, "display")) && 0 === t.offsetWidth ? ee(t, oe, function() {
                        return A(t, e, i)
                    }) : A(t, e, i) : void 0
                },
                set: function(t, n, i) {
                    var o, s = i && te(t),
                        r = i && P(t, e, i, "border-box" === dt.css(t, "boxSizing", !1, s), s);
                    return r && (o = Pt.exec(n)) && "px" !== (o[3] || "px") && (t.style[e] = n, n = dt.css(t, e)), E(t, n, r)
                }
            }
        }), dt.cssHooks.marginLeft = j(at.reliableMarginLeft, function(t, e) {
            return e ? (parseFloat(C(t, "marginLeft")) || t.getBoundingClientRect().left - ee(t, {
                marginLeft: 0
            }, function() {
                return t.getBoundingClientRect().left
            })) + "px" : void 0
        }), dt.cssHooks.marginRight = j(at.reliableMarginRight, function(t, e) {
            return e ? ee(t, {
                display: "inline-block"
            }, C, [t, "marginRight"]) : void 0
        }), dt.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            dt.cssHooks[t + e] = {
                expand: function(n) {
                    for (var i = 0, o = {}, s = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[t + At[i] + e] = s[i] || s[i - 2] || s[0];
                    return o
                }
            }, Qt.test(t) || (dt.cssHooks[t + e].set = E)
        }), dt.fn.extend({
            css: function(t, e) {
                return St(this, function(t, e, n) {
                    var i, o, s = {},
                        r = 0;
                    if (dt.isArray(e)) {
                        for (i = te(t), o = e.length; o > r; r++) s[e[r]] = dt.css(t, e[r], !1, i);
                        return s
                    }
                    return void 0 !== n ? dt.style(t, e, n) : dt.css(t, e)
                }, t, e, arguments.length > 1)
            },
            show: function() {
                return O(this, !0)
            },
            hide: function() {
                return O(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    Ot(this) ? dt(this).show() : dt(this).hide()
                })
            }
        }), dt.Tween = $, $.prototype = {
            constructor: $,
            init: function(t, e, n, i, o, s) {
                this.elem = t, this.prop = n, this.easing = o || dt.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = s || (dt.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var t = $.propHooks[this.prop];
                return t && t.get ? t.get(this) : $.propHooks._default.get(this)
            },
            run: function(t) {
                var e, n = $.propHooks[this.prop];
                return this.options.duration ? this.pos = e = dt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : $.propHooks._default.set(this), this
            }
        }, $.prototype.init.prototype = $.prototype, $.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = dt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
                },
                set: function(t) {
                    dt.fx.step[t.prop] ? dt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[dt.cssProps[t.prop]] && !dt.cssHooks[t.prop] ? t.elem[t.prop] = t.now : dt.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }, $.propHooks.scrollTop = $.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, dt.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        }, dt.fx = $.prototype.init, dt.fx.step = {};
        var le, de, ue = /^(?:toggle|show|hide)$/,
            ce = /queueHooks$/;
        dt.Animation = dt.extend(R, {
                tweeners: {
                    "*": [function(t, e) {
                        var n = this.createTween(t, e);
                        return p(n.elem, t, Pt.exec(e), n), n
                    }]
                },
                tweener: function(t, e) {
                    dt.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(Dt);
                    for (var n, i = 0, o = t.length; o > i; i++) n = t[i], R.tweeners[n] = R.tweeners[n] || [], R.tweeners[n].unshift(e)
                },
                prefilters: [I],
                prefilter: function(t, e) {
                    e ? R.prefilters.unshift(t) : R.prefilters.push(t)
                }
            }), dt.speed = function(t, e, n) {
                var i = t && "object" == typeof t ? dt.extend({}, t) : {
                    complete: n || !n && e || dt.isFunction(t) && t,
                    duration: t,
                    easing: n && e || e && !dt.isFunction(e) && e
                };
                return i.duration = dt.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in dt.fx.speeds ? dt.fx.speeds[i.duration] : dt.fx.speeds._default, null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    dt.isFunction(i.old) && i.old.call(this), i.queue && dt.dequeue(this, i.queue)
                }, i
            }, dt.fn.extend({
                fadeTo: function(t, e, n, i) {
                    return this.filter(Ot).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, n, i)
                },
                animate: function(t, e, n, i) {
                    var o = dt.isEmptyObject(t),
                        s = dt.speed(e, n, i),
                        r = function() {
                            var e = R(this, dt.extend({}, t), s);
                            (o || Tt.get(this, "finish")) && e.stop(!0)
                        };
                    return r.finish = r, o || s.queue === !1 ? this.each(r) : this.queue(s.queue, r)
                },
                stop: function(t, e, n) {
                    var i = function(t) {
                        var e = t.stop;
                        delete t.stop, e(n)
                    };
                    return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                        var e = !0,
                            o = null != t && t + "queueHooks",
                            s = dt.timers,
                            r = Tt.get(this);
                        if (o) r[o] && r[o].stop && i(r[o]);
                        else
                            for (o in r) r[o] && r[o].stop && ce.test(o) && i(r[o]);
                        for (o = s.length; o--;) s[o].elem !== this || null != t && s[o].queue !== t || (s[o].anim.stop(n), e = !1, s.splice(o, 1));
                        !e && n || dt.dequeue(this, t)
                    })
                },
                finish: function(t) {
                    return t !== !1 && (t = t || "fx"), this.each(function() {
                        var e, n = Tt.get(this),
                            i = n[t + "queue"],
                            o = n[t + "queueHooks"],
                            s = dt.timers,
                            r = i ? i.length : 0;
                        for (n.finish = !0, dt.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                        for (e = 0; r > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                        delete n.finish
                    })
                }
            }), dt.each(["toggle", "show", "hide"], function(t, e) {
                var n = dt.fn[e];
                dt.fn[e] = function(t, i, o) {
                    return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(W(e, !0), t, i, o)
                }
            }), dt.each({
                slideDown: W("show"),
                slideUp: W("hide"),
                slideToggle: W("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(t, e) {
                dt.fn[t] = function(t, n, i) {
                    return this.animate(e, t, n, i)
                }
            }), dt.timers = [], dt.fx.tick = function() {
                var t, e = 0,
                    n = dt.timers;
                for (le = dt.now(); e < n.length; e++) t = n[e], t() || n[e] !== t || n.splice(e--, 1);
                n.length || dt.fx.stop(), le = void 0
            }, dt.fx.timer = function(t) {
                dt.timers.push(t), t() ? dt.fx.start() : dt.timers.pop()
            }, dt.fx.interval = 13, dt.fx.start = function() {
                de || (de = n.setInterval(dt.fx.tick, dt.fx.interval))
            }, dt.fx.stop = function() {
                n.clearInterval(de), de = null
            }, dt.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, dt.fn.delay = function(t, e) {
                return t = dt.fx ? dt.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, i) {
                    var o = n.setTimeout(e, t);
                    i.stop = function() {
                        n.clearTimeout(o)
                    }
                })
            },
            function() {
                var t = Z.createElement("input"),
                    e = Z.createElement("select"),
                    n = e.appendChild(Z.createElement("option"));
                t.type = "checkbox", at.checkOn = "" !== t.value, at.optSelected = n.selected, e.disabled = !0, at.optDisabled = !n.disabled, t = Z.createElement("input"), t.value = "t", t.type = "radio", at.radioValue = "t" === t.value
            }();
        var he, pe = dt.expr.attrHandle;
        dt.fn.extend({
            attr: function(t, e) {
                return St(this, dt.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    dt.removeAttr(this, t)
                })
            }
        }), dt.extend({
            attr: function(t, e, n) {
                var i, o, s = t.nodeType;
                if (3 !== s && 8 !== s && 2 !== s) return "undefined" == typeof t.getAttribute ? dt.prop(t, e, n) : (1 === s && dt.isXMLDoc(t) || (e = e.toLowerCase(), o = dt.attrHooks[e] || (dt.expr.match.bool.test(e) ? he : void 0)), void 0 !== n ? null === n ? void dt.removeAttr(t, e) : o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : o && "get" in o && null !== (i = o.get(t, e)) ? i : (i = dt.find.attr(t, e), null == i ? void 0 : i))
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!at.radioValue && "radio" === e && dt.nodeName(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            },
            removeAttr: function(t, e) {
                var n, i, o = 0,
                    s = e && e.match(Dt);
                if (s && 1 === t.nodeType)
                    for (; n = s[o++];) i = dt.propFix[n] || n, dt.expr.match.bool.test(n) && (t[i] = !1), t.removeAttribute(n)
            }
        }), he = {
            set: function(t, e, n) {
                return e === !1 ? dt.removeAttr(t, n) : t.setAttribute(n, n), n
            }
        }, dt.each(dt.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var n = pe[e] || dt.find.attr;
            pe[e] = function(t, e, i) {
                var o, s;
                return i || (s = pe[e], pe[e] = o, o = null != n(t, e, i) ? e.toLowerCase() : null, pe[e] = s), o
            }
        });
        var fe = /^(?:input|select|textarea|button)$/i,
            me = /^(?:a|area)$/i;
        dt.fn.extend({
            prop: function(t, e) {
                return St(this, dt.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return this.each(function() {
                    delete this[dt.propFix[t] || t]
                })
            }
        }), dt.extend({
            prop: function(t, e, n) {
                var i, o, s = t.nodeType;
                if (3 !== s && 8 !== s && 2 !== s) return 1 === s && dt.isXMLDoc(t) || (e = dt.propFix[e] || e, o = dt.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = dt.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : fe.test(t.nodeName) || me.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }), at.optSelected || (dt.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            },
            set: function(t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), dt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            dt.propFix[this.toLowerCase()] = this
        });
        var _e = /[\t\r\n\f]/g;
        dt.fn.extend({
            addClass: function(t) {
                var e, n, i, o, s, r, a, l = 0;
                if (dt.isFunction(t)) return this.each(function(e) {
                    dt(this).addClass(t.call(this, e, q(this)))
                });
                if ("string" == typeof t && t)
                    for (e = t.match(Dt) || []; n = this[l++];)
                        if (o = q(n), i = 1 === n.nodeType && (" " + o + " ").replace(_e, " ")) {
                            for (r = 0; s = e[r++];) i.indexOf(" " + s + " ") < 0 && (i += s + " ");
                            a = dt.trim(i), o !== a && n.setAttribute("class", a)
                        }
                return this
            },
            removeClass: function(t) {
                var e, n, i, o, s, r, a, l = 0;
                if (dt.isFunction(t)) return this.each(function(e) {
                    dt(this).removeClass(t.call(this, e, q(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof t && t)
                    for (e = t.match(Dt) || []; n = this[l++];)
                        if (o = q(n), i = 1 === n.nodeType && (" " + o + " ").replace(_e, " ")) {
                            for (r = 0; s = e[r++];)
                                for (; i.indexOf(" " + s + " ") > -1;) i = i.replace(" " + s + " ", " ");
                            a = dt.trim(i), o !== a && n.setAttribute("class", a)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : dt.isFunction(t) ? this.each(function(n) {
                    dt(this).toggleClass(t.call(this, n, q(this), e), e)
                }) : this.each(function() {
                    var e, i, o, s;
                    if ("string" === n)
                        for (i = 0, o = dt(this), s = t.match(Dt) || []; e = s[i++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                    else void 0 !== t && "boolean" !== n || (e = q(this), e && Tt.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || t === !1 ? "" : Tt.get(this, "__className__") || ""))
                })
            },
            hasClass: function(t) {
                var e, n, i = 0;
                for (e = " " + t + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + q(n) + " ").replace(_e, " ").indexOf(e) > -1) return !0;
                return !1
            }
        });
        var ye = /\r/g,
            ge = /[\x20\t\r\n\f]+/g;
        dt.fn.extend({
            val: function(t) {
                var e, n, i, o = this[0]; {
                    if (arguments.length) return i = dt.isFunction(t), this.each(function(n) {
                        var o;
                        1 === this.nodeType && (o = i ? t.call(this, n, dt(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : dt.isArray(o) && (o = dt.map(o, function(t) {
                            return null == t ? "" : t + ""
                        })), e = dt.valHooks[this.type] || dt.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                    });
                    if (o) return e = dt.valHooks[o.type] || dt.valHooks[o.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(ye, "") : null == n ? "" : n)
                }
            }
        }), dt.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = dt.find.attr(t, "value");
                        return null != e ? e : dt.trim(dt.text(t)).replace(ge, " ")
                    }
                },
                select: {
                    get: function(t) {
                        for (var e, n, i = t.options, o = t.selectedIndex, s = "select-one" === t.type || 0 > o, r = s ? null : [], a = s ? o + 1 : i.length, l = 0 > o ? a : s ? o : 0; a > l; l++)
                            if (n = i[l], (n.selected || l === o) && (at.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !dt.nodeName(n.parentNode, "optgroup"))) {
                                if (e = dt(n).val(), s) return e;
                                r.push(e)
                            }
                        return r
                    },
                    set: function(t, e) {
                        for (var n, i, o = t.options, s = dt.makeArray(e), r = o.length; r--;) i = o[r], (i.selected = dt.inArray(dt.valHooks.option.get(i), s) > -1) && (n = !0);
                        return n || (t.selectedIndex = -1), s
                    }
                }
            }
        }), dt.each(["radio", "checkbox"], function() {
            dt.valHooks[this] = {
                set: function(t, e) {
                    return dt.isArray(e) ? t.checked = dt.inArray(dt(t).val(), e) > -1 : void 0
                }
            }, at.checkOn || (dt.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var ve = /^(?:focusinfocus|focusoutblur)$/;
        dt.extend(dt.event, {
            trigger: function(t, e, i, o) {
                var s, r, a, l, d, u, c, h = [i || Z],
                    p = rt.call(t, "type") ? t.type : t,
                    f = rt.call(t, "namespace") ? t.namespace.split(".") : [];
                if (r = a = i = i || Z, 3 !== i.nodeType && 8 !== i.nodeType && !ve.test(p + dt.event.triggered) && (p.indexOf(".") > -1 && (f = p.split("."), p = f.shift(), f.sort()), d = p.indexOf(":") < 0 && "on" + p, t = t[dt.expando] ? t : new dt.Event(p, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = f.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), e = null == e ? [t] : dt.makeArray(e, [t]), c = dt.event.special[p] || {}, o || !c.trigger || c.trigger.apply(i, e) !== !1)) {
                    if (!o && !c.noBubble && !dt.isWindow(i)) {
                        for (l = c.delegateType || p, ve.test(l + p) || (r = r.parentNode); r; r = r.parentNode) h.push(r), a = r;
                        a === (i.ownerDocument || Z) && h.push(a.defaultView || a.parentWindow || n)
                    }
                    for (s = 0;
                        (r = h[s++]) && !t.isPropagationStopped();) t.type = s > 1 ? l : c.bindType || p, u = (Tt.get(r, "events") || {})[t.type] && Tt.get(r, "handle"), u && u.apply(r, e), u = d && r[d], u && u.apply && xt(r) && (t.result = u.apply(r, e), t.result === !1 && t.preventDefault());
                    return t.type = p, o || t.isDefaultPrevented() || c._default && c._default.apply(h.pop(), e) !== !1 || !xt(i) || d && dt.isFunction(i[p]) && !dt.isWindow(i) && (a = i[d], a && (i[d] = null), dt.event.triggered = p, i[p](), dt.event.triggered = void 0, a && (i[d] = a)), t.result
                }
            },
            simulate: function(t, e, n) {
                var i = dt.extend(new dt.Event, n, {
                    type: t,
                    isSimulated: !0
                });
                dt.event.trigger(i, null, e), i.isDefaultPrevented() && n.preventDefault()
            }
        }), dt.fn.extend({
            trigger: function(t, e) {
                return this.each(function() {
                    dt.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var n = this[0];
                return n ? dt.event.trigger(t, e, n, !0) : void 0
            }
        }), dt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
            dt.fn[e] = function(t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }), dt.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }), at.focusin = "onfocusin" in n, at.focusin || dt.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var n = function(t) {
                dt.event.simulate(e, t.target, dt.event.fix(t))
            };
            dt.event.special[e] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        o = Tt.access(i, e);
                    o || i.addEventListener(t, n, !0), Tt.access(i, e, (o || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        o = Tt.access(i, e) - 1;
                    o ? Tt.access(i, e, o) : (i.removeEventListener(t, n, !0), Tt.remove(i, e))
                }
            }
        });
        var be = n.location,
            Me = dt.now(),
            we = /\?/;
        dt.parseJSON = function(t) {
            return JSON.parse(t + "")
        }, dt.parseXML = function(t) {
            var e;
            if (!t || "string" != typeof t) return null;
            try {
                e = (new n.DOMParser).parseFromString(t, "text/xml")
            } catch (i) {
                e = void 0
            }
            return e && !e.getElementsByTagName("parsererror").length || dt.error("Invalid XML: " + t), e
        };
        var Le = /#.*$/,
            ke = /([?&])_=[^&]*/,
            De = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Ye = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Se = /^(?:GET|HEAD)$/,
            xe = /^\/\//,
            Te = {},
            Ce = {},
            je = "*/".concat("*"),
            He = Z.createElement("a");
        He.href = be.href, dt.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: be.href,
                type: "GET",
                isLocal: Ye.test(be.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": je,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": dt.parseJSON,
                    "text xml": dt.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? V(V(t, dt.ajaxSettings), e) : V(dt.ajaxSettings, t)
            },
            ajaxPrefilter: U(Te),
            ajaxTransport: U(Ce),
            ajax: function(t, e) {
                function i(t, e, i, a) {
                    var d, c, g, v, M, L = e;
                    2 !== b && (b = 2, l && n.clearTimeout(l), o = void 0, r = a || "", w.readyState = t > 0 ? 4 : 0, d = t >= 200 && 300 > t || 304 === t, i && (v = J(h, w, i)), v = G(h, v, w, d), d ? (h.ifModified && (M = w.getResponseHeader("Last-Modified"), M && (dt.lastModified[s] = M), M = w.getResponseHeader("etag"), M && (dt.etag[s] = M)), 204 === t || "HEAD" === h.type ? L = "nocontent" : 304 === t ? L = "notmodified" : (L = v.state, c = v.data, g = v.error, d = !g)) : (g = L, !t && L || (L = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || L) + "", d ? m.resolveWith(p, [c, L, w]) : m.rejectWith(p, [w, L, g]), w.statusCode(y), y = void 0, u && f.trigger(d ? "ajaxSuccess" : "ajaxError", [w, h, d ? c : g]), _.fireWith(p, [w, L]), u && (f.trigger("ajaxComplete", [w, h]), --dt.active || dt.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var o, s, r, a, l, d, u, c, h = dt.ajaxSetup({}, e),
                    p = h.context || h,
                    f = h.context && (p.nodeType || p.jquery) ? dt(p) : dt.event,
                    m = dt.Deferred(),
                    _ = dt.Callbacks("once memory"),
                    y = h.statusCode || {},
                    g = {},
                    v = {},
                    b = 0,
                    M = "canceled",
                    w = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === b) {
                                if (!a)
                                    for (a = {}; e = De.exec(r);) a[e[1].toLowerCase()] = e[2];
                                e = a[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return 2 === b ? r : null
                        },
                        setRequestHeader: function(t, e) {
                            var n = t.toLowerCase();
                            return b || (t = v[n] = v[n] || t, g[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return b || (h.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (2 > b)
                                    for (e in t) y[e] = [y[e], t[e]];
                                else w.always(t[w.status]);
                            return this
                        },
                        abort: function(t) {
                            var e = t || M;
                            return o && o.abort(e), i(0, e), this
                        }
                    };
                if (m.promise(w).complete = _.add, w.success = w.done, w.error = w.fail, h.url = ((t || h.url || be.href) + "").replace(Le, "").replace(xe, be.protocol + "//"), h.type = e.method || e.type || h.method || h.type, h.dataTypes = dt.trim(h.dataType || "*").toLowerCase().match(Dt) || [""], null == h.crossDomain) {
                    d = Z.createElement("a");
                    try {
                        d.href = h.url, d.href = d.href, h.crossDomain = He.protocol + "//" + He.host != d.protocol + "//" + d.host
                    } catch (L) {
                        h.crossDomain = !0
                    }
                }
                if (h.data && h.processData && "string" != typeof h.data && (h.data = dt.param(h.data, h.traditional)), B(Te, h, e, w), 2 === b) return w;
                u = dt.event && h.global, u && 0 === dt.active++ && dt.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Se.test(h.type), s = h.url, h.hasContent || (h.data && (s = h.url += (we.test(s) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = ke.test(s) ? s.replace(ke, "$1_=" + Me++) : s + (we.test(s) ? "&" : "?") + "_=" + Me++)), h.ifModified && (dt.lastModified[s] && w.setRequestHeader("If-Modified-Since", dt.lastModified[s]), dt.etag[s] && w.setRequestHeader("If-None-Match", dt.etag[s])), (h.data && h.hasContent && h.contentType !== !1 || e.contentType) && w.setRequestHeader("Content-Type", h.contentType), w.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + je + "; q=0.01" : "") : h.accepts["*"]);
                for (c in h.headers) w.setRequestHeader(c, h.headers[c]);
                if (h.beforeSend && (h.beforeSend.call(p, w, h) === !1 || 2 === b)) return w.abort();
                M = "abort";
                for (c in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) w[c](h[c]);
                if (o = B(Ce, h, e, w)) {
                    if (w.readyState = 1, u && f.trigger("ajaxSend", [w, h]), 2 === b) return w;
                    h.async && h.timeout > 0 && (l = n.setTimeout(function() {
                        w.abort("timeout")
                    }, h.timeout));
                    try {
                        b = 1, o.send(g, i)
                    } catch (L) {
                        if (!(2 > b)) throw L;
                        i(-1, L)
                    }
                } else i(-1, "No Transport");
                return w
            },
            getJSON: function(t, e, n) {
                return dt.get(t, e, n, "json")
            },
            getScript: function(t, e) {
                return dt.get(t, void 0, e, "script")
            }
        }), dt.each(["get", "post"], function(t, e) {
            dt[e] = function(t, n, i, o) {
                return dt.isFunction(n) && (o = o || i, i = n, n = void 0), dt.ajax(dt.extend({
                    url: t,
                    type: e,
                    dataType: o,
                    data: n,
                    success: i
                }, dt.isPlainObject(t) && t))
            }
        }), dt._evalUrl = function(t) {
            return dt.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, dt.fn.extend({
            wrapAll: function(t) {
                var e;
                return dt.isFunction(t) ? this.each(function(e) {
                    dt(this).wrapAll(t.call(this, e))
                }) : (this[0] && (e = dt(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                }).append(this)), this)
            },
            wrapInner: function(t) {
                return dt.isFunction(t) ? this.each(function(e) {
                    dt(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = dt(this),
                        n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = dt.isFunction(t);
                return this.each(function(n) {
                    dt(this).wrapAll(e ? t.call(this, n) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    dt.nodeName(this, "body") || dt(this).replaceWith(this.childNodes)
                }).end()
            }
        }), dt.expr.filters.hidden = function(t) {
            return !dt.expr.filters.visible(t)
        }, dt.expr.filters.visible = function(t) {
            return t.offsetWidth > 0 || t.offsetHeight > 0 || t.getClientRects().length > 0
        };
        var Ee = /%20/g,
            Pe = /\[\]$/,
            Ae = /\r?\n/g,
            Oe = /^(?:submit|button|image|reset|file)$/i,
            $e = /^(?:input|select|textarea|keygen)/i;
        dt.param = function(t, e) {
            var n, i = [],
                o = function(t, e) {
                    e = dt.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (void 0 === e && (e = dt.ajaxSettings && dt.ajaxSettings.traditional), dt.isArray(t) || t.jquery && !dt.isPlainObject(t)) dt.each(t, function() {
                o(this.name, this.value)
            });
            else
                for (n in t) X(n, t[n], e, o);
            return i.join("&").replace(Ee, "+")
        }, dt.fn.extend({
            serialize: function() {
                return dt.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = dt.prop(this, "elements");
                    return t ? dt.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !dt(this).is(":disabled") && $e.test(this.nodeName) && !Oe.test(t) && (this.checked || !$t.test(t))
                }).map(function(t, e) {
                    var n = dt(this).val();
                    return null == n ? null : dt.isArray(n) ? dt.map(n, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(Ae, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: n.replace(Ae, "\r\n")
                    }
                }).get()
            }
        }), dt.ajaxSettings.xhr = function() {
            try {
                return new n.XMLHttpRequest
            } catch (t) {}
        };
        var ze = {
                0: 200,
                1223: 204
            },
            We = dt.ajaxSettings.xhr();
        at.cors = !!We && "withCredentials" in We, at.ajax = We = !!We, dt.ajaxTransport(function(t) {
            var e, i;
            return at.cors || We && !t.crossDomain ? {
                send: function(o, s) {
                    var r, a = t.xhr();
                    if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (r in t.xhrFields) a[r] = t.xhrFields[r];
                    t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                    for (r in o) a.setRequestHeader(r, o[r]);
                    e = function(t) {
                        return function() {
                            e && (e = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s(ze[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }, a.onload = e(), i = a.onerror = e("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                        4 === a.readyState && n.setTimeout(function() {
                            e && i()
                        })
                    }, e = e("abort");
                    try {
                        a.send(t.hasContent && t.data || null)
                    } catch (l) {
                        if (e) throw l
                    }
                },
                abort: function() {
                    e && e()
                }
            } : void 0
        }), dt.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(t) {
                    return dt.globalEval(t), t
                }
            }
        }), dt.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), dt.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var e, n;
                return {
                    send: function(i, o) {
                        e = dt("<script>").prop({
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", n = function(t) {
                            e.remove(), n = null, t && o("error" === t.type ? 404 : 200, t.type)
                        }), Z.head.appendChild(e[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
        var Ne = [],
            Ie = /(=)\?(?=&|$)|\?\?/;
        dt.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = Ne.pop() || dt.expando + "_" + Me++;
                return this[t] = !0, t
            }
        }), dt.ajaxPrefilter("json jsonp", function(t, e, i) {
            var o, s, r, a = t.jsonp !== !1 && (Ie.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ie.test(t.data) && "data");
            return a || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = dt.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Ie, "$1" + o) : t.jsonp !== !1 && (t.url += (we.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
                return r || dt.error(o + " was not called"), r[0]
            }, t.dataTypes[0] = "json", s = n[o], n[o] = function() {
                r = arguments
            }, i.always(function() {
                void 0 === s ? dt(n).removeProp(o) : n[o] = s, t[o] && (t.jsonpCallback = e.jsonpCallback, Ne.push(o)), r && dt.isFunction(s) && s(r[0]), r = s = void 0
            }), "script") : void 0
        }), dt.parseHTML = function(t, e, n) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (n = e, e = !1), e = e || Z;
            var i = gt.exec(t),
                o = !n && [];
            return i ? [e.createElement(i[1])] : (i = _([t], e, o), o && o.length && dt(o).remove(), dt.merge([], i.childNodes))
        };
        var Fe = dt.fn.load;
        dt.fn.load = function(t, e, n) {
            if ("string" != typeof t && Fe) return Fe.apply(this, arguments);
            var i, o, s, r = this,
                a = t.indexOf(" ");
            return a > -1 && (i = dt.trim(t.slice(a)), t = t.slice(0, a)), dt.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), r.length > 0 && dt.ajax({
                url: t,
                type: o || "GET",
                dataType: "html",
                data: e
            }).done(function(t) {
                s = arguments, r.html(i ? dt("<div>").append(dt.parseHTML(t)).find(i) : t)
            }).always(n && function(t, e) {
                r.each(function() {
                    n.apply(this, s || [t.responseText, e, t])
                })
            }), this
        }, dt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            dt.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), dt.expr.filters.animated = function(t) {
            return dt.grep(dt.timers, function(e) {
                return t === e.elem
            }).length
        }, dt.offset = {
            setOffset: function(t, e, n) {
                var i, o, s, r, a, l, d, u = dt.css(t, "position"),
                    c = dt(t),
                    h = {};
                "static" === u && (t.style.position = "relative"), a = c.offset(), s = dt.css(t, "top"), l = dt.css(t, "left"), d = ("absolute" === u || "fixed" === u) && (s + l).indexOf("auto") > -1, d ? (i = c.position(), r = i.top, o = i.left) : (r = parseFloat(s) || 0, o = parseFloat(l) || 0), dt.isFunction(e) && (e = e.call(t, n, dt.extend({}, a))), null != e.top && (h.top = e.top - a.top + r), null != e.left && (h.left = e.left - a.left + o), "using" in e ? e.using.call(t, h) : c.css(h)
            }
        }, dt.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    dt.offset.setOffset(this, t, e)
                });
                var e, n, i = this[0],
                    o = {
                        top: 0,
                        left: 0
                    },
                    s = i && i.ownerDocument;
                if (s) return e = s.documentElement, dt.contains(e, i) ? (o = i.getBoundingClientRect(), n = K(s), {
                    top: o.top + n.pageYOffset - e.clientTop,
                    left: o.left + n.pageXOffset - e.clientLeft
                }) : o
            },
            position: function() {
                if (this[0]) {
                    var t, e, n = this[0],
                        i = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === dt.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), dt.nodeName(t[0], "html") || (i = t.offset()), i.top += dt.css(t[0], "borderTopWidth", !0), i.left += dt.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - i.top - dt.css(n, "marginTop", !0),
                        left: e.left - i.left - dt.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent; t && "static" === dt.css(t, "position");) t = t.offsetParent;
                    return t || ne
                })
            }
        }), dt.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, e) {
            var n = "pageYOffset" === e;
            dt.fn[t] = function(i) {
                return St(this, function(t, i, o) {
                    var s = K(t);
                    return void 0 === o ? s ? s[e] : t[i] : void(s ? s.scrollTo(n ? s.pageXOffset : o, n ? o : s.pageYOffset) : t[i] = o)
                }, t, i, arguments.length)
            }
        }), dt.each(["top", "left"], function(t, e) {
            dt.cssHooks[e] = j(at.pixelPosition, function(t, n) {
                return n ? (n = C(t, e), Zt.test(n) ? dt(t).position()[e] + "px" : n) : void 0
            })
        }), dt.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            dt.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(n, i) {
                dt.fn[i] = function(i, o) {
                    var s = arguments.length && (n || "boolean" != typeof i),
                        r = n || (i === !0 || o === !0 ? "margin" : "border");
                    return St(this, function(e, n, i) {
                        var o;
                        return dt.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === i ? dt.css(e, n, r) : dt.style(e, n, i, r)
                    }, e, s ? i : void 0, s, null)
                }
            })
        }), dt.fn.extend({
            bind: function(t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, n, i) {
                return this.on(e, t, n, i)
            },
            undelegate: function(t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            },
            size: function() {
                return this.length
            }
        }), dt.fn.andSelf = dt.fn.addBack, i = [], o = function() {
            return dt
        }.apply(e, i), !(void 0 !== o && (t.exports = o));
        var Re = n.jQuery,
            qe = n.$;
        return dt.noConflict = function(t) {
            return n.$ === dt && (n.$ = qe), t && n.jQuery === dt && (n.jQuery = Re), dt
        }, s || (n.jQuery = n.$ = dt), dt
    })
}, function(t, e, n) {
    var i, o, s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(s, r) {
        i = r, o = "function" == typeof i ? i.call(e, n, e, t) : i, !(void 0 !== o && (t.exports = o))
    }(void 0, function() {
        var t = function(t, e) {
            this.items = t, this.settings = e || {
                diacritics: !0
            }
        };
        t.prototype.tokenize = function(t) {
            if (t = i(String(t || "").toLowerCase()), !t || !t.length) return [];
            var e, n, s, r, l = [],
                d = t.split(/ +/);
            for (e = 0, n = d.length; n > e; e++) {
                if (s = o(d[e]), this.settings.diacritics)
                    for (r in a) a.hasOwnProperty(r) && (s = s.replace(new RegExp(r, "g"), a[r]));
                l.push({
                    string: d[e],
                    regex: new RegExp(s, "i")
                })
            }
            return l
        }, t.prototype.iterator = function(t, e) {
            var n;
            n = r(t) ? Array.prototype.forEach || function(t) {
                for (var e = 0, n = this.length; n > e; e++) t(this[e], e, this)
            } : function(t) {
                for (var e in this) this.hasOwnProperty(e) && t(this[e], e, this)
            }, n.apply(t, [e])
        }, t.prototype.getScoreFunction = function(t, e) {
            var n, i, o, s;
            n = this, t = n.prepareSearch(t, e), o = t.tokens, i = t.options.fields, s = o.length;
            var r = function(t, e) {
                    var n, i;
                    return t ? (t = String(t || ""), i = t.search(e.regex), -1 === i ? 0 : (n = e.string.length / t.length, 0 === i && (n += .5), n)) : 0
                },
                a = function() {
                    var t = i.length;
                    return t ? 1 === t ? function(t, e) {
                        return r(e[i[0]], t)
                    } : function(e, n) {
                        for (var o = 0, s = 0; t > o; o++) s += r(n[i[o]], e);
                        return s / t
                    } : function() {
                        return 0
                    }
                }();
            return s ? 1 === s ? function(t) {
                return a(o[0], t)
            } : "and" === t.options.conjunction ? function(t) {
                for (var e, n = 0, i = 0; s > n; n++) {
                    if (e = a(o[n], t), 0 >= e) return 0;
                    i += e
                }
                return i / s
            } : function(t) {
                for (var e = 0, n = 0; s > e; e++) n += a(o[e], t);
                return n / s
            } : function() {
                return 0
            }
        }, t.prototype.getSortFunction = function(t, n) {
            var i, o, s, r, a, l, d, u, c, h, p;
            if (s = this, t = s.prepareSearch(t, n), p = !t.query && n.sort_empty || n.sort, c = function(t, e) {
                    return "$score" === t ? e.score : s.items[e.id][t]
                }, a = [], p)
                for (i = 0, o = p.length; o > i; i++)(t.query || "$score" !== p[i].field) && a.push(p[i]);
            if (t.query) {
                for (h = !0, i = 0, o = a.length; o > i; i++)
                    if ("$score" === a[i].field) {
                        h = !1;
                        break
                    }
                h && a.unshift({
                    field: "$score",
                    direction: "desc"
                })
            } else
                for (i = 0, o = a.length; o > i; i++)
                    if ("$score" === a[i].field) {
                        a.splice(i, 1);
                        break
                    } for (u = [], i = 0, o = a.length; o > i; i++) u.push("desc" === a[i].direction ? -1 : 1);
            return l = a.length, l ? 1 === l ? (r = a[0].field, d = u[0], function(t, n) {
                return d * e(c(r, t), c(r, n))
            }) : function(t, n) {
                var i, o, s;
                for (i = 0; l > i; i++)
                    if (s = a[i].field, o = u[i] * e(c(s, t), c(s, n))) return o;
                return 0
            } : null
        }, t.prototype.prepareSearch = function(t, e) {
            if ("object" === ("undefined" == typeof t ? "undefined" : s(t))) return t;
            e = n({}, e);
            var i = e.fields,
                o = e.sort,
                a = e.sort_empty;
            return i && !r(i) && (e.fields = [i]), o && !r(o) && (e.sort = [o]), a && !r(a) && (e.sort_empty = [a]), {
                options: e,
                query: String(t || "").toLowerCase(),
                tokens: this.tokenize(t),
                total: 0,
                items: []
            }
        }, t.prototype.search = function(t, e) {
            var n, i, o, s, r = this;
            return i = this.prepareSearch(t, e), e = i.options, t = i.query, s = e.score || r.getScoreFunction(i), t.length ? r.iterator(r.items, function(t, o) {
                n = s(t), (e.filter === !1 || n > 0) && i.items.push({
                    score: n,
                    id: o
                })
            }) : r.iterator(r.items, function(t, e) {
                i.items.push({
                    score: 1,
                    id: e
                })
            }), o = r.getSortFunction(i, e), o && i.items.sort(o), i.total = i.items.length, "number" == typeof e.limit && (i.items = i.items.slice(0, e.limit)), i
        };
        var e = function(t, e) {
                return "number" == typeof t && "number" == typeof e ? t > e ? 1 : e > t ? -1 : 0 : (t = l(String(t || "")), e = l(String(e || "")), t > e ? 1 : e > t ? -1 : 0)
            },
            n = function(t, e) {
                var n, i, o, s;
                for (n = 1, i = arguments.length; i > n; n++)
                    if (s = arguments[n])
                        for (o in s) s.hasOwnProperty(o) && (t[o] = s[o]);
                return t
            },
            i = function(t) {
                return (t + "").replace(/^\s+|\s+$|/g, "")
            },
            o = function(t) {
                return (t + "").replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
            },
            r = Array.isArray || "undefined" != typeof $ && $.isArray || function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            },
            a = {
                a: "[aÀÁÂÃÄÅàáâãäåĀāąĄ]",
                c: "[cÇçćĆčČ]",
                d: "[dđĐďĎð]",
                e: "[eÈÉÊËèéêëěĚĒēęĘ]",
                i: "[iÌÍÎÏìíîïĪī]",
                l: "[lłŁ]",
                n: "[nÑñňŇńŃ]",
                o: "[oÒÓÔÕÕÖØòóôõöøŌō]",
                r: "[rřŘ]",
                s: "[sŠšśŚ]",
                t: "[tťŤ]",
                u: "[uÙÚÛÜùúûüůŮŪū]",
                y: "[yŸÿýÝ]",
                z: "[zŽžżŻźŹ]"
            },
            l = function() {
                var t, e, n, i, o = "",
                    s = {};
                for (n in a)
                    if (a.hasOwnProperty(n))
                        for (i = a[n].substring(2, a[n].length - 1), o += i, t = 0, e = i.length; e > t; t++) s[i.charAt(t)] = n;
                var r = new RegExp("[" + o + "]", "g");
                return function(t) {
                    return t.replace(r, function(t) {
                        return s[t]
                    }).toLowerCase()
                }
            }();
        return t
    })
}, function(t, e, n) {
    var i, o;
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(s, r) {
        i = r, o = "function" == typeof i ? i.call(e, n, e, t) : i, !(void 0 !== o && (t.exports = o))
    }(void 0, function() {
        var t = {};
        t.mixin = function(t) {
            t.plugins = {}, t.prototype.initializePlugins = function(t) {
                var n, i, o, s = this,
                    r = [];
                if (s.plugins = {
                        names: [],
                        settings: {},
                        requested: {},
                        loaded: {}
                    }, e.isArray(t))
                    for (n = 0, i = t.length; i > n; n++) "string" == typeof t[n] ? r.push(t[n]) : (s.plugins.settings[t[n].name] = t[n].options, r.push(t[n].name));
                else if (t)
                    for (o in t) t.hasOwnProperty(o) && (s.plugins.settings[o] = t[o], r.push(o));
                for (; r.length;) s.require(r.shift())
            }, t.prototype.loadPlugin = function(e) {
                var n = this,
                    i = n.plugins,
                    o = t.plugins[e];
                if (!t.plugins.hasOwnProperty(e)) throw new Error('Unable to find "' + e + '" plugin');
                i.requested[e] = !0, i.loaded[e] = o.fn.apply(n, [n.plugins.settings[e] || {}]), i.names.push(e)
            }, t.prototype.require = function(t) {
                var e = this,
                    n = e.plugins;
                if (!e.plugins.loaded.hasOwnProperty(t)) {
                    if (n.requested[t]) throw new Error('Plugin has circular dependency ("' + t + '")');
                    e.loadPlugin(t)
                }
                return n.loaded[t]
            }, t.define = function(e, n) {
                t.plugins[e] = {
                    name: e,
                    fn: n
                }
            }
        };
        var e = {
            isArray: Array.isArray || function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            }
        };
        return t
    })
}, function(t, e) {
    "use strict";

    function n(t, e) {
        return "string" == typeof t && (e = t, t = document), Array.prototype.slice.call(t.querySelectorAll(e))
    }

    function i(t) {
        if (!/fluid-width-video-wrapper/.test(t.parentNode.className)) {
            var e = parseInt(t.getAttribute("width"), 10),
                n = parseInt(t.getAttribute("height"), 10),
                i = isNaN(e) ? t.clientWidth : e,
                o = isNaN(n) ? t.clientHeight : n,
                s = o / i;
            t.removeAttribute("width"), t.removeAttribute("height");
            var r = document.createElement("div");
            t.parentNode.insertBefore(r, t), r.className = "fluid-width-video-wrapper", r.style.paddingTop = 100 * s + "%", r.appendChild(t)
        }
    }

    function o(t) {
        return "undefined" == typeof t ? "" : Array.isArray(t) ? t.join() : t
    }

    function s() {
        var t = document.createElement("div");
        return t.innerHTML = '<p>x</p><style id="fit-vids-style">' + l + "</style>", t.childNodes[1]
    }

    function r(t) {
        return "[object Object]" === Object.prototype.toString.call(t)
    }
    var a = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object"],
        l = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}";
    t.exports = function(t, e) {
        e = e || {}, t = t || "body", r(t) && (e = t, t = "body");
        var l = n(t);
        if (!(l.length < 1)) {
            if (!document.getElementById("fit-vids-style")) {
                var d = document.head || document.getElementsByTagName("head")[0];
                d.appendChild(s())
            }
            var u = o(e.players),
                c = o(a);
            u.length && (c = c + "," + u);
            for (var h = 0, p = l.length; p > h; h++)
                for (var f = l[h], m = n(f, c), _ = 0, y = m.length; y > _; _++) i(m[_])
        }
    }
}, function(t, e, n) {
    "use strict";
    var i = n(15);
    n(22), n(23), n(24),
        /*!
         * jQuery UI Slider 1.10.4
         * http://jqueryui.com
         *
         * Copyright 2014 jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         *
         * http://api.jqueryui.com/slider/
         *
         * Depends:
         *  jquery.ui.core.js
         *  jquery.ui.mouse.js
         *  jquery.ui.widget.js
         */
        function(t, e) {
            var n = 5;
            t.widget("ui.slider", t.ui.mouse, {
                version: "1.10.4",
                widgetEventPrefix: "slide",
                options: {
                    animate: !1,
                    distance: 0,
                    max: 100,
                    min: 0,
                    orientation: "horizontal",
                    range: !1,
                    step: 1,
                    value: 0,
                    values: null,
                    change: null,
                    slide: null,
                    start: null,
                    stop: null
                },
                _create: function() {
                    this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
                },
                _refresh: function() {
                    this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
                },
                _createHandles: function() {
                    var e, n, i = this.options,
                        o = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                        s = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
                        r = [];
                    for (n = i.values && i.values.length || 1, o.length > n && (o.slice(n).remove(), o = o.slice(0, n)), e = o.length; n > e; e++) r.push(s);
                    this.handles = o.add(t(r.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function(e) {
                        t(this).data("ui-slider-handle-index", e)
                    })
                },
                _createRange: function() {
                    var e = this.options,
                        n = "";
                    e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                        left: "",
                        bottom: ""
                    }) : (this.range = t("<div></div>").appendTo(this.element), n = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(n + ("min" === e.range || "max" === e.range ? " ui-slider-range-" + e.range : ""))) : (this.range && this.range.remove(), this.range = null)
                },
                _setupEvents: function() {
                    var t = this.handles.add(this.range).filter("a");
                    this._off(t), this._on(t, this._handleEvents), this._hoverable(t), this._focusable(t)
                },
                _destroy: function() {
                    this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
                },
                _mouseCapture: function(e) {
                    var n, i, o, s, r, a, l, d, u = this,
                        c = this.options;
                    return c.disabled ? !1 : (this.elementSize = {
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight()
                    }, this.elementOffset = this.element.offset(), n = {
                        x: e.pageX,
                        y: e.pageY
                    }, i = this._normValueFromMouse(n), o = this._valueMax() - this._valueMin() + 1, this.handles.each(function(e) {
                        var n = Math.abs(i - u.values(e));
                        (o > n || o === n && (e === u._lastChangedValue || u.values(e) === c.min)) && (o = n, s = t(this), r = e)
                    }), a = this._start(e, r), a === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = r, s.addClass("ui-state-active").focus(), l = s.offset(), d = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = d ? {
                        left: 0,
                        top: 0
                    } : {
                        left: e.pageX - l.left - s.width() / 2,
                        top: e.pageY - l.top - s.height() / 2 - (parseInt(s.css("borderTopWidth"), 10) || 0) - (parseInt(s.css("borderBottomWidth"), 10) || 0) + (parseInt(s.css("marginTop"), 10) || 0)
                    }, this.handles.hasClass("ui-state-hover") || this._slide(e, r, i), this._animateOff = !0, !0))
                },
                _mouseStart: function() {
                    return !0
                },
                _mouseDrag: function(t) {
                    var e = {
                            x: t.pageX,
                            y: t.pageY
                        },
                        n = this._normValueFromMouse(e);
                    return this._slide(t, this._handleIndex, n), !1
                },
                _mouseStop: function(t) {
                    return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
                },
                _detectOrientation: function() {
                    this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
                },
                _normValueFromMouse: function(t) {
                    var e, n, i, o, s;
                    return "horizontal" === this.orientation ? (e = this.elementSize.width, n = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, n = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), i = n / e, i > 1 && (i = 1), 0 > i && (i = 0), "vertical" === this.orientation && (i = 1 - i), o = this._valueMax() - this._valueMin(), s = this._valueMin() + i * o, this._trimAlignValue(s)
                },
                _start: function(t, e) {
                    var n = {
                        handle: this.handles[e],
                        value: this.value()
                    };
                    return this.options.values && this.options.values.length && (n.value = this.values(e), n.values = this.values()), this._trigger("start", t, n)
                },
                _slide: function(t, e, n) {
                    var i, o, s;
                    this.options.values && this.options.values.length ? (i = this.values(e ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === e && n > i || 1 === e && i > n) && (n = i), n !== this.values(e) && (o = this.values(), o[e] = n, s = this._trigger("slide", t, {
                        handle: this.handles[e],
                        value: n,
                        values: o
                    }), i = this.values(e ? 0 : 1), s !== !1 && this.values(e, n))) : n !== this.value() && (s = this._trigger("slide", t, {
                        handle: this.handles[e],
                        value: n
                    }), s !== !1 && this.value(n))
                },
                _stop: function(t, e) {
                    var n = {
                        handle: this.handles[e],
                        value: this.value()
                    };
                    this.options.values && this.options.values.length && (n.value = this.values(e), n.values = this.values()), this._trigger("stop", t, n)
                },
                _change: function(t, e) {
                    if (!this._keySliding && !this._mouseSliding) {
                        var n = {
                            handle: this.handles[e],
                            value: this.value()
                        };
                        this.options.values && this.options.values.length && (n.value = this.values(e), n.values = this.values()), this._lastChangedValue = e, this._trigger("change", t, n)
                    }
                },
                value: function(t) {
                    return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value()
                },
                values: function(e, n) {
                    var i, o, s;
                    if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(n), this._refreshValue(), void this._change(null, e);
                    if (!arguments.length) return this._values();
                    if (!t.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(e) : this.value();
                    for (i = this.options.values, o = arguments[0], s = 0; s < i.length; s += 1) i[s] = this._trimAlignValue(o[s]), this._change(null, s);
                    this._refreshValue()
                },
                _setOption: function(e, n) {
                    var i, o = 0;
                    switch ("range" === e && this.options.range === !0 && ("min" === n ? (this.options.value = this._values(0), this.options.values = null) : "max" === n && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (o = this.options.values.length), t.Widget.prototype._setOption.apply(this, arguments), e) {
                        case "orientation":
                            this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                            break;
                        case "value":
                            this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                            break;
                        case "values":
                            for (this._animateOff = !0, this._refreshValue(), i = 0; o > i; i += 1) this._change(null, i);
                            this._animateOff = !1;
                            break;
                        case "min":
                        case "max":
                            this._animateOff = !0, this._refreshValue(), this._animateOff = !1;
                            break;
                        case "range":
                            this._animateOff = !0, this._refresh(), this._animateOff = !1
                    }
                },
                _value: function() {
                    var t = this.options.value;
                    return t = this._trimAlignValue(t)
                },
                _values: function(t) {
                    var e, n, i;
                    if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
                    if (this.options.values && this.options.values.length) {
                        for (n = this.options.values.slice(), i = 0; i < n.length; i += 1) n[i] = this._trimAlignValue(n[i]);
                        return n
                    }
                    return []
                },
                _trimAlignValue: function(t) {
                    if (t <= this._valueMin()) return this._valueMin();
                    if (t >= this._valueMax()) return this._valueMax();
                    var e = this.options.step > 0 ? this.options.step : 1,
                        n = (t - this._valueMin()) % e,
                        i = t - n;
                    return 2 * Math.abs(n) >= e && (i += n > 0 ? e : -e), parseFloat(i.toFixed(5))
                },
                _valueMin: function() {
                    return this.options.min
                },
                _valueMax: function() {
                    return this.options.max
                },
                _refreshValue: function() {
                    var e, n, i, o, s, r = this.options.range,
                        a = this.options,
                        l = this,
                        d = this._animateOff ? !1 : a.animate,
                        u = {};
                    this.options.values && this.options.values.length ? this.handles.each(function(i) {
                        n = (l.values(i) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100, u["horizontal" === l.orientation ? "left" : "bottom"] = n + "%", t(this).stop(1, 1)[d ? "animate" : "css"](u, a.animate), l.options.range === !0 && ("horizontal" === l.orientation ? (0 === i && l.range.stop(1, 1)[d ? "animate" : "css"]({
                            left: n + "%"
                        }, a.animate), 1 === i && l.range[d ? "animate" : "css"]({
                            width: n - e + "%"
                        }, {
                            queue: !1,
                            duration: a.animate
                        })) : (0 === i && l.range.stop(1, 1)[d ? "animate" : "css"]({
                            bottom: n + "%"
                        }, a.animate), 1 === i && l.range[d ? "animate" : "css"]({
                            height: n - e + "%"
                        }, {
                            queue: !1,
                            duration: a.animate
                        }))), e = n
                    }) : (i = this.value(), o = this._valueMin(), s = this._valueMax(), n = s !== o ? (i - o) / (s - o) * 100 : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = n + "%", this.handle.stop(1, 1)[d ? "animate" : "css"](u, a.animate), "min" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[d ? "animate" : "css"]({
                        width: n + "%"
                    }, a.animate), "max" === r && "horizontal" === this.orientation && this.range[d ? "animate" : "css"]({
                        width: 100 - n + "%"
                    }, {
                        queue: !1,
                        duration: a.animate
                    }), "min" === r && "vertical" === this.orientation && this.range.stop(1, 1)[d ? "animate" : "css"]({
                        height: n + "%"
                    }, a.animate), "max" === r && "vertical" === this.orientation && this.range[d ? "animate" : "css"]({
                        height: 100 - n + "%"
                    }, {
                        queue: !1,
                        duration: a.animate
                    }))
                },
                _handleEvents: {
                    keydown: function(e) {
                        var i, o, s, r, a = t(e.target).data("ui-slider-handle-index");
                        switch (e.keyCode) {
                            case t.ui.keyCode.HOME:
                            case t.ui.keyCode.END:
                            case t.ui.keyCode.PAGE_UP:
                            case t.ui.keyCode.PAGE_DOWN:
                            case t.ui.keyCode.UP:
                            case t.ui.keyCode.RIGHT:
                            case t.ui.keyCode.DOWN:
                            case t.ui.keyCode.LEFT:
                                if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, t(e.target).addClass("ui-state-active"), i = this._start(e, a), i === !1)) return
                        }
                        switch (r = this.options.step, o = s = this.options.values && this.options.values.length ? this.values(a) : this.value(), e.keyCode) {
                            case t.ui.keyCode.HOME:
                                s = this._valueMin();
                                break;
                            case t.ui.keyCode.END:
                                s = this._valueMax();
                                break;
                            case t.ui.keyCode.PAGE_UP:
                                s = this._trimAlignValue(o + (this._valueMax() - this._valueMin()) / n);
                                break;
                            case t.ui.keyCode.PAGE_DOWN:
                                s = this._trimAlignValue(o - (this._valueMax() - this._valueMin()) / n);
                                break;
                            case t.ui.keyCode.UP:
                            case t.ui.keyCode.RIGHT:
                                if (o === this._valueMax()) return;
                                s = this._trimAlignValue(o + r);
                                break;
                            case t.ui.keyCode.DOWN:
                            case t.ui.keyCode.LEFT:
                                if (o === this._valueMin()) return;
                                s = this._trimAlignValue(o - r)
                        }
                        this._slide(e, a, s)
                    },
                    click: function(t) {
                        t.preventDefault()
                    },
                    keyup: function(e) {
                        var n = t(e.target).data("ui-slider-handle-index");
                        this._keySliding && (this._keySliding = !1, this._stop(e, n), this._change(e, n), t(e.target).removeClass("ui-state-active"))
                    }
                }
            })
        }(i)
}, function(t, e, n) {
    "use strict";
    var i = n(15);
    /*!
     * jQuery UI Core 1.10.4
     * http://jqueryui.com
     *
     * Copyright 2014 jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/category/ui-core/
     */
    ! function(t, e) {
        function n(e, n) {
            var o, s, r, a = e.nodeName.toLowerCase();
            return "area" === a ? (o = e.parentNode, s = o.name, e.href && s && "map" === o.nodeName.toLowerCase() ? (r = t("img[usemap=#" + s + "]")[0], !!r && i(r)) : !1) : (/input|select|textarea|button|object/.test(a) ? !e.disabled : "a" === a ? e.href || n : n) && i(e)
        }

        function i(e) {
            return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function() {
                return "hidden" === t.css(this, "visibility")
            }).length
        }
        var o = 0,
            s = /^ui-id-\d+$/;
        t.ui = t.ui || {}, t.extend(t.ui, {
            version: "1.10.4",
            keyCode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                NUMPAD_ADD: 107,
                NUMPAD_DECIMAL: 110,
                NUMPAD_DIVIDE: 111,
                NUMPAD_ENTER: 108,
                NUMPAD_MULTIPLY: 106,
                NUMPAD_SUBTRACT: 109,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }
        }), t.fn.extend({
            focus: function(e) {
                return function(n, i) {
                    return "number" == typeof n ? this.each(function() {
                        var e = this;
                        setTimeout(function() {
                            t(e).focus(), i && i.call(e)
                        }, n)
                    }) : e.apply(this, arguments)
                }
            }(t.fn.focus),
            scrollParent: function r() {
                var r;
                return r = t.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                    return /(relative|absolute|fixed)/.test(t.css(this, "position")) && /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
                }).eq(0) : this.parents().filter(function() {
                    return /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
                }).eq(0), /fixed/.test(this.css("position")) || !r.length ? t(document) : r
            },
            zIndex: function(n) {
                if (n !== e) return this.css("zIndex", n);
                if (this.length)
                    for (var i, o, s = t(this[0]); s.length && s[0] !== document;) {
                        if (i = s.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (o = parseInt(s.css("zIndex"), 10), !isNaN(o) && 0 !== o)) return o;
                        s = s.parent()
                    }
                return 0
            },
            uniqueId: function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++o)
                })
            },
            removeUniqueId: function() {
                return this.each(function() {
                    s.test(this.id) && t(this).removeAttr("id")
                })
            }
        }), t.extend(t.expr[":"], {
            data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
                return function(n) {
                    return !!t.data(n, e)
                }
            }) : function(e, n, i) {
                return !!t.data(e, i[3])
            },
            focusable: function(e) {
                return n(e, !isNaN(t.attr(e, "tabindex")))
            },
            tabbable: function(e) {
                var i = t.attr(e, "tabindex"),
                    o = isNaN(i);
                return (o || i >= 0) && n(e, !o)
            }
        }), t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function(n, i) {
            function o(e, n, i, o) {
                return t.each(s, function() {
                    n -= parseFloat(t.css(e, "padding" + this)) || 0, i && (n -= parseFloat(t.css(e, "border" + this + "Width")) || 0), o && (n -= parseFloat(t.css(e, "margin" + this)) || 0)
                }), n
            }
            var s = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
                r = i.toLowerCase(),
                a = {
                    innerWidth: t.fn.innerWidth,
                    innerHeight: t.fn.innerHeight,
                    outerWidth: t.fn.outerWidth,
                    outerHeight: t.fn.outerHeight
                };
            t.fn["inner" + i] = function(n) {
                return n === e ? a["inner" + i].call(this) : this.each(function() {
                    t(this).css(r, o(this, n) + "px")
                })
            }, t.fn["outer" + i] = function(e, n) {
                return "number" != typeof e ? a["outer" + i].call(this, e) : this.each(function() {
                    t(this).css(r, o(this, e, !0, n) + "px")
                })
            }
        }), t.fn.addBack || (t.fn.addBack = function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function(e) {
            return function(n) {
                return arguments.length ? e.call(this, t.camelCase(n)) : e.call(this)
            }
        }(t.fn.removeData)), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), t.support.selectstart = "onselectstart" in document.createElement("div"), t.fn.extend({
            disableSelection: function() {
                return this.bind((t.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(t) {
                    t.preventDefault()
                })
            },
            enableSelection: function() {
                return this.unbind(".ui-disableSelection")
            }
        }), t.extend(t.ui, {
            plugin: {
                add: function(e, n, i) {
                    var o, s = t.ui[e].prototype;
                    for (o in i) s.plugins[o] = s.plugins[o] || [], s.plugins[o].push([n, i[o]])
                },
                call: function(t, e, n) {
                    var i, o = t.plugins[e];
                    if (o && t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)
                        for (i = 0; i < o.length; i++) t.options[o[i][0]] && o[i][1].apply(t.element, n)
                }
            },
            hasScroll: function(e, n) {
                if ("hidden" === t(e).css("overflow")) return !1;
                var i = n && "left" === n ? "scrollLeft" : "scrollTop",
                    o = !1;
                return e[i] > 0 ? !0 : (e[i] = 1, o = e[i] > 0, e[i] = 0, o)
            }
        })
    }(i)
}, function(t, e, n) {
    "use strict";
    var i = n(15);
    n(24),
        /*!
         * jQuery UI Mouse 1.10.4
         * http://jqueryui.com
         *
         * Copyright 2014 jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         *
         * http://api.jqueryui.com/mouse/
         *
         * Depends:
         *  jquery.ui.widget.js
         */
        function(t, e) {
            var n = !1;
            t(document).mouseup(function() {
                n = !1
            }), t.widget("ui.mouse", {
                version: "1.10.4",
                options: {
                    cancel: "input,textarea,button,select,option",
                    distance: 1,
                    delay: 0
                },
                _mouseInit: function() {
                    var e = this;
                    this.element.bind("mousedown." + this.widgetName, function(t) {
                        return e._mouseDown(t)
                    }).bind("click." + this.widgetName, function(n) {
                        return !0 === t.data(n.target, e.widgetName + ".preventClickEvent") ? (t.removeData(n.target, e.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1) : void 0
                    }), this.started = !1
                },
                _mouseDestroy: function() {
                    this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
                },
                _mouseDown: function(e) {
                    if (!n) {
                        this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                        var i = this,
                            o = 1 === e.which,
                            s = "string" == typeof this.options.cancel && e.target.nodeName ? t(e.target).closest(this.options.cancel).length : !1;
                        return o && !s && this._mouseCapture(e) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                            i.mouseDelayMet = !0
                        }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(e) !== !1, !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                            return i._mouseMove(t)
                        }, this._mouseUpDelegate = function(t) {
                            return i._mouseUp(t)
                        }, t(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), n = !0, !0)) : !0
                    }
                },
                _mouseMove: function(e) {
                    return t.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button ? this._mouseUp(e) : this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
                },
                _mouseUp: function(e) {
                    return t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), !1
                },
                _mouseDistanceMet: function(t) {
                    return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
                },
                _mouseDelayMet: function() {
                    return this.mouseDelayMet
                },
                _mouseStart: function() {},
                _mouseDrag: function() {},
                _mouseStop: function() {},
                _mouseCapture: function() {
                    return !0
                }
            })
        }(i)
}, function(t, e, n) {
    "use strict";
    var i = n(15);
    /*!
     * jQuery UI Widget 1.10.4
     * http://jqueryui.com
     *
     * Copyright 2014 jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/jQuery.widget/
     */
    ! function(t, e) {
        var n = 0,
            i = Array.prototype.slice,
            o = t.cleanData;
        t.cleanData = function(e) {
            for (var n, i = 0; null != (n = e[i]); i++) try {
                t(n).triggerHandler("remove")
            } catch (s) {}
            o(e)
        }, t.widget = function(e, n, i) {
            var o, s, r, a, l = {},
                d = e.split(".")[0];
            e = e.split(".")[1], o = d + "-" + e, i || (i = n, n = t.Widget), t.expr[":"][o.toLowerCase()] = function(e) {
                return !!t.data(e, o)
            }, t[d] = t[d] || {}, s = t[d][e], r = t[d][e] = function(t, e) {
                return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new r(t, e)
            }, t.extend(r, s, {
                version: i.version,
                _proto: t.extend({}, i),
                _childConstructors: []
            }), a = new n, a.options = t.widget.extend({}, a.options), t.each(i, function(e, i) {
                return t.isFunction(i) ? void(l[e] = function() {
                    var t = function() {
                            return n.prototype[e].apply(this, arguments)
                        },
                        o = function(t) {
                            return n.prototype[e].apply(this, t)
                        };
                    return function() {
                        var e, n = this._super,
                            s = this._superApply;
                        return this._super = t, this._superApply = o, e = i.apply(this, arguments), this._super = n, this._superApply = s, e
                    }
                }()) : void(l[e] = i)
            }), r.prototype = t.widget.extend(a, {
                widgetEventPrefix: s ? a.widgetEventPrefix || e : e
            }, l, {
                constructor: r,
                namespace: d,
                widgetName: e,
                widgetFullName: o
            }), s ? (t.each(s._childConstructors, function(e, n) {
                var i = n.prototype;
                t.widget(i.namespace + "." + i.widgetName, r, n._proto)
            }), delete s._childConstructors) : n._childConstructors.push(r), t.widget.bridge(e, r)
        }, t.widget.extend = function(n) {
            for (var o, s, r = i.call(arguments, 1), a = 0, l = r.length; l > a; a++)
                for (o in r[a]) s = r[a][o], r[a].hasOwnProperty(o) && s !== e && (t.isPlainObject(s) ? n[o] = t.isPlainObject(n[o]) ? t.widget.extend({}, n[o], s) : t.widget.extend({}, s) : n[o] = s);
            return n
        }, t.widget.bridge = function(n, o) {
            var s = o.prototype.widgetFullName || n;
            t.fn[n] = function(r) {
                var a = "string" == typeof r,
                    l = i.call(arguments, 1),
                    d = this;
                return r = !a && l.length ? t.widget.extend.apply(null, [r].concat(l)) : r, a ? this.each(function() {
                    var i, o = t.data(this, s);
                    return o ? t.isFunction(o[r]) && "_" !== r.charAt(0) ? (i = o[r].apply(o, l), i !== o && i !== e ? (d = i && i.jquery ? d.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + r + "' for " + n + " widget instance") : t.error("cannot call methods on " + n + " prior to initialization; attempted to call method '" + r + "'")
                }) : this.each(function() {
                    var e = t.data(this, s);
                    e ? e.option(r || {})._init() : t.data(this, s, new o(r, this))
                }), d
            }
        }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                disabled: !1,
                create: null
            },
            _createWidget: function(e, i) {
                i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this.bindings = t(), this.hoverable = t(), this.focusable = t(), i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function(t) {
                        t.target === i && this.destroy()
                    }
                }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: t.noop,
            _getCreateEventData: t.noop,
            _create: t.noop,
            _init: t.noop,
            destroy: function() {
                this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
            },
            _destroy: t.noop,
            widget: function() {
                return this.element
            },
            option: function(n, i) {
                var o, s, r, a = n;
                if (0 === arguments.length) return t.widget.extend({}, this.options);
                if ("string" == typeof n)
                    if (a = {}, o = n.split("."), n = o.shift(), o.length) {
                        for (s = a[n] = t.widget.extend({}, this.options[n]), r = 0; r < o.length - 1; r++) s[o[r]] = s[o[r]] || {}, s = s[o[r]];
                        if (n = o.pop(), 1 === arguments.length) return s[n] === e ? null : s[n];
                        s[n] = i
                    } else {
                        if (1 === arguments.length) return this.options[n] === e ? null : this.options[n];
                        a[n] = i
                    }
                return this._setOptions(a), this
            },
            _setOptions: function(t) {
                var e;
                for (e in t) this._setOption(e, t[e]);
                return this
            },
            _setOption: function(t, e) {
                return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!e).attr("aria-disabled", e), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
            },
            enable: function() {
                return this._setOption("disabled", !1)
            },
            disable: function() {
                return this._setOption("disabled", !0)
            },
            _on: function(e, n, i) {
                var o, s = this;
                "boolean" != typeof e && (i = n, n = e, e = !1), i ? (n = o = t(n), this.bindings = this.bindings.add(n)) : (i = n, n = this.element, o = this.widget()), t.each(i, function(i, r) {
                    function a() {
                        return e || s.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? s[r] : r).apply(s, arguments) : void 0
                    }
                    "string" != typeof r && (a.guid = r.guid = r.guid || a.guid || t.guid++);
                    var l = i.match(/^(\w+)\s*(.*)$/),
                        d = l[1] + s.eventNamespace,
                        u = l[2];
                    u ? o.delegate(u, d, a) : n.bind(d, a)
                })
            },
            _off: function(t, e) {
                e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(e).undelegate(e)
            },
            _delay: function(t, e) {
                function n() {
                    return ("string" == typeof t ? i[t] : t).apply(i, arguments)
                }
                var i = this;
                return setTimeout(n, e || 0)
            },
            _hoverable: function(e) {
                this.hoverable = this.hoverable.add(e), this._on(e, {
                    mouseenter: function(e) {
                        t(e.currentTarget).addClass("ui-state-hover")
                    },
                    mouseleave: function(e) {
                        t(e.currentTarget).removeClass("ui-state-hover")
                    }
                })
            },
            _focusable: function(e) {
                this.focusable = this.focusable.add(e), this._on(e, {
                    focusin: function(e) {
                        t(e.currentTarget).addClass("ui-state-focus")
                    },
                    focusout: function(e) {
                        t(e.currentTarget).removeClass("ui-state-focus")
                    }
                })
            },
            _trigger: function(e, n, i) {
                var o, s, r = this.options[e];
                if (i = i || {}, n = t.Event(n), n.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), n.target = this.element[0], s = n.originalEvent)
                    for (o in s) o in n || (n[o] = s[o]);
                return this.element.trigger(n, i), !(t.isFunction(r) && r.apply(this.element[0], [n].concat(i)) === !1 || n.isDefaultPrevented())
            }
        }, t.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function(e, n) {
            t.Widget.prototype["_" + e] = function(i, o, s) {
                "string" == typeof o && (o = {
                    effect: o
                });
                var r, a = o ? o === !0 || "number" == typeof o ? n : o.effect || n : e;
                o = o || {}, "number" == typeof o && (o = {
                    duration: o
                }), r = !t.isEmptyObject(o), o.complete = s, o.delay && i.delay(o.delay), r && t.effects && t.effects.effect[a] ? i[e](o) : a !== e && i[a] ? i[a](o.duration, o.easing, s) : i.queue(function(n) {
                    t(this)[e](), s && s.call(i[0]), n()
                })
            }
        })
    }(i)
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    n(15), n(15);
    (function() {
        ! function(r) {
            o = [n(15)], i = r, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s))
        }(function(t) {
            "use strict";

            function e() {
                var t = document.getElementsByTagName("script"),
                    e = t.length ? t[t.length - 1].src.split("?")[0] : "";
                return e.split("/").length > 0 ? e.split("/").slice(0, -1).join("/") + "/" : ""
            }

            function n(t, e, n) {
                for (var i = 0; i < e.length; i++) n(t, e[i])
            }
            var i = !1,
                o = !1,
                s = 0,
                a = 2e3,
                l = 0,
                d = t,
                u = ["webkit", "ms", "moz", "o"],
                c = window.requestAnimationFrame || !1,
                h = window.cancelAnimationFrame || !1;
            if (!c)
                for (var p in u) {
                    var f = u[p];
                    if (c = window[f + "RequestAnimationFrame"]) {
                        h = window[f + "CancelAnimationFrame"] || window[f + "CancelRequestAnimationFrame"];
                        break
                    }
                }
            var m = window.MutationObserver || window.WebKitMutationObserver || !1,
                _ = {
                    zindex: "auto",
                    cursoropacitymin: 0,
                    cursoropacitymax: 1,
                    cursorcolor: "#424242",
                    cursorwidth: "6px",
                    cursorborder: "1px solid #fff",
                    cursorborderradius: "5px",
                    scrollspeed: 60,
                    mousescrollstep: 24,
                    touchbehavior: !1,
                    hwacceleration: !0,
                    usetransition: !0,
                    boxzoom: !1,
                    dblclickzoom: !0,
                    gesturezoom: !0,
                    grabcursorenabled: !0,
                    autohidemode: !0,
                    background: "",
                    iframeautoresize: !0,
                    cursorminheight: 32,
                    preservenativescrolling: !0,
                    railoffset: !1,
                    railhoffset: !1,
                    bouncescroll: !0,
                    spacebarenabled: !0,
                    railpadding: {
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0
                    },
                    disableoutline: !0,
                    horizrailenabled: !0,
                    railalign: "right",
                    railvalign: "bottom",
                    enabletranslate3d: !0,
                    enablemousewheel: !0,
                    enablekeyboard: !0,
                    smoothscroll: !0,
                    sensitiverail: !0,
                    enablemouselockapi: !0,
                    cursorfixedheight: !1,
                    directionlockdeadzone: 6,
                    hidecursordelay: 400,
                    nativeparentscrolling: !0,
                    enablescrollonselection: !0,
                    overflowx: !0,
                    overflowy: !0,
                    cursordragspeed: .3,
                    rtlmode: "auto",
                    cursordragontouch: !1,
                    oneaxismousemode: "auto",
                    scriptpath: e(),
                    preventmultitouchscrolling: !0,
                    disablemutationobserver: !1
                },
                y = !1,
                g = function() {
                    function t() {
                        var t = ["grab", "-webkit-grab", "-moz-grab"];
                        (s.ischrome && !s.ischrome38 || s.isie) && (t = []);
                        for (var e = 0; e < t.length; e++) {
                            var i = t[e];
                            if (n.cursor = i, n.cursor == i) return i
                        }
                        return "url(//patriciaportfolio.googlecode.com/files/openhand.cur),n-resize"
                    }
                    if (y) return y;
                    var e = document.createElement("DIV"),
                        n = e.style,
                        i = navigator.userAgent,
                        o = navigator.platform,
                        s = {};
                    s.haspointerlock = "pointerLockElement" in document || "webkitPointerLockElement" in document || "mozPointerLockElement" in document, s.isopera = "opera" in window, s.isopera12 = s.isopera && "getUserMedia" in navigator, s.isoperamini = "[object OperaMini]" === Object.prototype.toString.call(window.operamini), s.isie = "all" in document && "attachEvent" in e && !s.isopera, s.isieold = s.isie && !("msInterpolationMode" in n), s.isie7 = s.isie && !s.isieold && (!("documentMode" in document) || 7 == document.documentMode), s.isie8 = s.isie && "documentMode" in document && 8 == document.documentMode, s.isie9 = s.isie && "performance" in window && 9 == document.documentMode, s.isie10 = s.isie && "performance" in window && 10 == document.documentMode, s.isie11 = "msRequestFullscreen" in e && document.documentMode >= 11, s.isieedge12 = navigator.userAgent.match(/Edge\/12\./), s.isieedge = "msOverflowStyle" in e, s.ismodernie = s.isie11 || s.isieedge, s.isie9mobile = /iemobile.9/i.test(i), s.isie9mobile && (s.isie9 = !1), s.isie7mobile = !s.isie9mobile && s.isie7 && /iemobile/i.test(i), s.ismozilla = "MozAppearance" in n, s.iswebkit = "WebkitAppearance" in n, s.ischrome = "chrome" in window, s.ischrome38 = s.ischrome && "touchAction" in n, s.ischrome22 = !s.ischrome38 && s.ischrome && s.haspointerlock, s.ischrome26 = !s.ischrome38 && s.ischrome && "transition" in n, s.cantouch = "ontouchstart" in document.documentElement || "ontouchstart" in window, s.hasw3ctouch = (window.PointerEvent || !1) && (navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0), s.hasmstouch = !s.hasw3ctouch && (window.MSPointerEvent || !1), s.ismac = /^mac$/i.test(o), s.isios = s.cantouch && /iphone|ipad|ipod/i.test(o), s.isios4 = s.isios && !("seal" in Object), s.isios7 = s.isios && "webkitHidden" in document, s.isios8 = s.isios && "hidden" in document, s.isandroid = /android/i.test(i), s.haseventlistener = "addEventListener" in e, s.trstyle = !1, s.hastransform = !1, s.hastranslate3d = !1, s.transitionstyle = !1, s.hastransition = !1, s.transitionend = !1;
                    var r, a = ["transform", "msTransform", "webkitTransform", "MozTransform", "OTransform"];
                    for (r = 0; r < a.length; r++)
                        if (void 0 !== n[a[r]]) {
                            s.trstyle = a[r];
                            break
                        }
                    s.hastransform = !!s.trstyle, s.hastransform && (n[s.trstyle] = "translate3d(1px,2px,3px)", s.hastranslate3d = /translate3d/.test(n[s.trstyle])), s.transitionstyle = !1, s.prefixstyle = "", s.transitionend = !1, a = ["transition", "webkitTransition", "msTransition", "MozTransition", "OTransition", "OTransition", "KhtmlTransition"];
                    var l = ["", "-webkit-", "-ms-", "-moz-", "-o-", "-o", "-khtml-"],
                        d = ["transitionend", "webkitTransitionEnd", "msTransitionEnd", "transitionend", "otransitionend", "oTransitionEnd", "KhtmlTransitionEnd"];
                    for (r = 0; r < a.length; r++)
                        if (a[r] in n) {
                            s.transitionstyle = a[r], s.prefixstyle = l[r], s.transitionend = d[r];
                            break
                        }
                    return s.ischrome26 && (s.prefixstyle = l[1]), s.hastransition = s.transitionstyle, s.cursorgrabvalue = t(), s.hasmousecapture = "setCapture" in e, s.hasMutationObserver = m !== !1, e = null, y = s, s
                },
                v = function(t, e) {
                    function n() {
                        var t = y.doc.css(L.trstyle);
                        return t && "matrix" == t.substr(0, 6) ? t.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/) : !1
                    }

                    function r() {
                        var t = y.win;
                        if ("zIndex" in t) return t.zIndex();
                        for (; t.length > 0;) {
                            if (9 == t[0].nodeType) return !1;
                            var e = t.css("zIndex");
                            if (!isNaN(e) && 0 != e) return parseInt(e);
                            t = t.parent()
                        }
                        return !1
                    }

                    function u(t, e, n) {
                        var i = t.css(e),
                            o = parseFloat(i);
                        if (isNaN(o)) {
                            o = S[i] || 0;
                            var s = 3 == o ? n ? y.win.outerHeight() - y.win.innerHeight() : y.win.outerWidth() - y.win.innerWidth() : 1;
                            return y.isie8 && o && (o += 1), s ? o : 0
                        }
                        return o
                    }

                    function p(t, e, n, i) {
                        y._bind(t, e, function(i) {
                            var i = i ? i : window.event,
                                o = {
                                    original: i,
                                    target: i.target || i.srcElement,
                                    type: "wheel",
                                    deltaMode: "MozMousePixelScroll" == i.type ? 0 : 1,
                                    deltaX: 0,
                                    deltaZ: 0,
                                    preventDefault: function() {
                                        return i.preventDefault ? i.preventDefault() : i.returnValue = !1, !1
                                    },
                                    stopImmediatePropagation: function() {
                                        i.stopImmediatePropagation ? i.stopImmediatePropagation() : i.cancelBubble = !0
                                    }
                                };
                            return "mousewheel" == e ? (i.wheelDeltaX && (o.deltaX = -1 / 40 * i.wheelDeltaX), i.wheelDeltaY && (o.deltaY = -1 / 40 * i.wheelDeltaY), !o.deltaY && !o.deltaX && (o.deltaY = -1 / 40 * i.wheelDelta)) : o.deltaY = i.detail, n.call(t, o)
                        }, i)
                    }

                    function f(t, e, n) {
                        var i, o;
                        if (0 == t.deltaMode ? (i = -Math.floor(t.deltaX * (y.opt.mousescrollstep / 54)), o = -Math.floor(t.deltaY * (y.opt.mousescrollstep / 54))) : 1 == t.deltaMode && (i = -Math.floor(t.deltaX * y.opt.mousescrollstep), o = -Math.floor(t.deltaY * y.opt.mousescrollstep)), e && y.opt.oneaxismousemode && 0 == i && o && (i = o, o = 0, n)) {
                            var s = 0 > i ? y.getScrollLeft() >= y.page.maxw : y.getScrollLeft() <= 0;
                            s && (o = i, i = 0)
                        }
                        if (y.isrtlmode && (i = -i), i && (y.scrollmom && y.scrollmom.stop(), y.lastdeltax += i, y.debounced("mousewheelx", function() {
                                var t = y.lastdeltax;
                                y.lastdeltax = 0, y.rail.drag || y.doScrollLeftBy(t)
                            }, 15)), o) {
                            if (y.opt.nativeparentscrolling && n && !y.ispage && !y.zoomactive)
                                if (0 > o) {
                                    if (y.getScrollTop() >= y.page.maxh) return !0
                                } else if (y.getScrollTop() <= 0) return !0;
                            y.scrollmom && y.scrollmom.stop(), y.lastdeltay += o, y.synched("mousewheely", function() {
                                var t = y.lastdeltay;
                                y.lastdeltay = 0, y.rail.drag || y.doScrollBy(t)
                            }, 15)
                        }
                        return t.stopImmediatePropagation(), t.preventDefault()
                    }
                    var y = this;
                    if (this.version = "3.6.8", this.name = "nicescroll", this.me = e, this.opt = {
                            doc: d("body"),
                            win: !1
                        }, d.extend(this.opt, _), this.opt.snapbackspeed = 80, t)
                        for (var v in y.opt) void 0 !== t[v] && (y.opt[v] = t[v]);
                    if (y.opt.disablemutationobserver && (m = !1), this.doc = y.opt.doc, this.iddoc = this.doc && this.doc[0] ? this.doc[0].id || "" : "", this.ispage = /^BODY|HTML/.test(y.opt.win ? y.opt.win[0].nodeName : this.doc[0].nodeName), this.haswrapper = y.opt.win !== !1, this.win = y.opt.win || (this.ispage ? d(window) : this.doc), this.docscroll = this.ispage && !this.haswrapper ? d(window) : this.win, this.body = d("body"), this.viewport = !1, this.isfixed = !1, this.iframe = !1, this.isiframe = "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName, this.istextarea = "TEXTAREA" == this.win[0].nodeName, this.forcescreen = !1, this.canshowonmouseevent = "scroll" != y.opt.autohidemode, this.onmousedown = !1, this.onmouseup = !1, this.onmousemove = !1, this.onmousewheel = !1, this.onkeypress = !1, this.ongesturezoom = !1, this.onclick = !1, this.onscrollstart = !1, this.onscrollend = !1, this.onscrollcancel = !1, this.onzoomin = !1, this.onzoomout = !1, this.view = !1, this.page = !1, this.scroll = {
                            x: 0,
                            y: 0
                        }, this.scrollratio = {
                            x: 0,
                            y: 0
                        }, this.cursorheight = 20, this.scrollvaluemax = 0, "auto" == this.opt.rtlmode) {
                        var M = this.win[0] == window ? this.body : this.win,
                            w = M.css("writing-mode") || M.css("-webkit-writing-mode") || M.css("-ms-writing-mode") || M.css("-moz-writing-mode");
                        "horizontal-tb" == w || "lr-tb" == w || "" == w ? (this.isrtlmode = "rtl" == M.css("direction"), this.isvertical = !1) : (this.isrtlmode = "vertical-rl" == w || "tb" == w || "tb-rl" == w || "rl-tb" == w, this.isvertical = "vertical-rl" == w || "tb" == w || "tb-rl" == w)
                    } else this.isrtlmode = this.opt.rtlmode === !0, this.isvertical = !1;
                    this.scrollrunning = !1, this.scrollmom = !1, this.observer = !1, this.observerremover = !1, this.observerbody = !1;
                    do this.id = "ascrail" + a++; while (document.getElementById(this.id));
                    this.rail = !1, this.cursor = !1, this.cursorfreezed = !1, this.selectiondrag = !1, this.zoom = !1, this.zoomactive = !1, this.hasfocus = !1, this.hasmousefocus = !1, this.visibility = !0, this.railslocked = !1, this.locked = !1, this.hidden = !1, this.cursoractive = !0, this.wheelprevented = !1, this.overflowx = y.opt.overflowx, this.overflowy = y.opt.overflowy, this.nativescrollingarea = !1, this.checkarea = 0, this.events = [], this.saved = {}, this.delaylist = {}, this.synclist = {}, this.lastdeltax = 0, this.lastdeltay = 0, this.detected = g();
                    var L = d.extend({}, this.detected);
                    this.canhwscroll = L.hastransform && y.opt.hwacceleration, this.ishwscroll = this.canhwscroll && y.haswrapper, this.isrtlmode ? this.isvertical ? this.hasreversehr = !(L.iswebkit || L.isie || L.isie11) : this.hasreversehr = !(L.iswebkit || L.isie && !L.isie10 && !L.isie11) : this.hasreversehr = !1, this.istouchcapable = !1, L.cantouch || !L.hasw3ctouch && !L.hasmstouch ? !L.cantouch || L.isios || L.isandroid || !L.iswebkit && !L.ismozilla || (this.istouchcapable = !0) : this.istouchcapable = !0, y.opt.enablemouselockapi || (L.hasmousecapture = !1, L.haspointerlock = !1), this.debounced = function(t, e, n) {
                        if (y) {
                            var i = y.delaylist[t] || !1;
                            i || (e.call(y), y.delaylist[t] = {
                                h: c(function() {
                                    y.delaylist[t].fn.call(y), y.delaylist[t] = !1
                                }, n)
                            }), y.delaylist[t].fn = e
                        }
                    };
                    var k = !1;
                    this.synched = function(t, e) {
                        function n() {
                            k || (c(function() {
                                if (y) {
                                    k = !1;
                                    for (var t in y.synclist) {
                                        var e = y.synclist[t];
                                        e && e.call(y), y.synclist[t] = !1
                                    }
                                }
                            }), k = !0)
                        }
                        return y.synclist[t] = e, n(), t
                    }, this.unsynched = function(t) {
                        y.synclist[t] && (y.synclist[t] = !1)
                    }, this.css = function(t, e) {
                        for (var n in e) y.saved.css.push([t, n, t.css(n)]), t.css(n, e[n])
                    }, this.scrollTop = function(t) {
                        return void 0 === t ? y.getScrollTop() : y.setScrollTop(t)
                    }, this.scrollLeft = function(t) {
                        return void 0 === t ? y.getScrollLeft() : y.setScrollLeft(t)
                    };
                    var D = function(t, e, n, i, o, s, r) {
                        this.st = t, this.ed = e, this.spd = n, this.p1 = i || 0, this.p2 = o || 1, this.p3 = s || 0, this.p4 = r || 1, this.ts = (new Date).getTime(), this.df = this.ed - this.st
                    };
                    if (D.prototype = {
                            B2: function(t) {
                                return 3 * t * t * (1 - t)
                            },
                            B3: function(t) {
                                return 3 * t * (1 - t) * (1 - t)
                            },
                            B4: function(t) {
                                return (1 - t) * (1 - t) * (1 - t)
                            },
                            getNow: function() {
                                var t = (new Date).getTime(),
                                    e = 1 - (t - this.ts) / this.spd,
                                    n = this.B2(e) + this.B3(e) + this.B4(e);
                                return 0 > e ? this.ed : this.st + Math.round(this.df * n)
                            },
                            update: function(t, e) {
                                return this.st = this.getNow(), this.ed = t, this.spd = e, this.ts = (new Date).getTime(), this.df = this.ed - this.st, this
                            }
                        }, this.ishwscroll) {
                        this.doc.translate = {
                            x: 0,
                            y: 0,
                            tx: "0px",
                            ty: "0px"
                        }, L.hastranslate3d && L.isios && this.doc.css("-webkit-backface-visibility", "hidden"), this.getScrollTop = function(t) {
                            if (!t) {
                                var e = n();
                                if (e) return 16 == e.length ? -e[13] : -e[5];
                                if (y.timerscroll && y.timerscroll.bz) return y.timerscroll.bz.getNow()
                            }
                            return y.doc.translate.y
                        }, this.getScrollLeft = function(t) {
                            if (!t) {
                                var e = n();
                                if (e) return 16 == e.length ? -e[12] : -e[4];
                                if (y.timerscroll && y.timerscroll.bh) return y.timerscroll.bh.getNow()
                            }
                            return y.doc.translate.x
                        }, this.notifyScrollEvent = function(t) {
                            var e = document.createEvent("UIEvents");
                            e.initUIEvent("scroll", !1, !0, window, 1), e.niceevent = !0, t.dispatchEvent(e)
                        };
                        var Y = this.isrtlmode ? 1 : -1;
                        L.hastranslate3d && y.opt.enabletranslate3d ? (this.setScrollTop = function(t, e) {
                            y.doc.translate.y = t, y.doc.translate.ty = -1 * t + "px", y.doc.css(L.trstyle, "translate3d(" + y.doc.translate.tx + "," + y.doc.translate.ty + ",0px)"), e || y.notifyScrollEvent(y.win[0])
                        }, this.setScrollLeft = function(t, e) {
                            y.doc.translate.x = t, y.doc.translate.tx = t * Y + "px", y.doc.css(L.trstyle, "translate3d(" + y.doc.translate.tx + "," + y.doc.translate.ty + ",0px)"), e || y.notifyScrollEvent(y.win[0])
                        }) : (this.setScrollTop = function(t, e) {
                            y.doc.translate.y = t, y.doc.translate.ty = -1 * t + "px", y.doc.css(L.trstyle, "translate(" + y.doc.translate.tx + "," + y.doc.translate.ty + ")"), e || y.notifyScrollEvent(y.win[0])
                        }, this.setScrollLeft = function(t, e) {
                            y.doc.translate.x = t, y.doc.translate.tx = t * Y + "px", y.doc.css(L.trstyle, "translate(" + y.doc.translate.tx + "," + y.doc.translate.ty + ")"), e || y.notifyScrollEvent(y.win[0])
                        })
                    } else this.getScrollTop = function() {
                        return y.docscroll.scrollTop()
                    }, this.setScrollTop = function(t) {
                        return setTimeout(function() {
                            y && y.docscroll.scrollTop(t)
                        }, 1)
                    }, this.getScrollLeft = function() {
                        var t;
                        return t = y.hasreversehr ? y.detected.ismozilla ? y.page.maxw - Math.abs(y.docscroll.scrollLeft()) : y.page.maxw - y.docscroll.scrollLeft() : y.docscroll.scrollLeft()
                    }, this.setScrollLeft = function(t) {
                        return setTimeout(function() {
                            return y ? (y.hasreversehr && (t = y.detected.ismozilla ? -(y.page.maxw - t) : y.page.maxw - t), y.docscroll.scrollLeft(t)) : void 0
                        }, 1)
                    };
                    this.getTarget = function(t) {
                        return t ? t.target ? t.target : t.srcElement ? t.srcElement : !1 : !1
                    }, this.hasParent = function(t, e) {
                        if (!t) return !1;
                        for (var n = t.target || t.srcElement || t || !1; n && n.id != e;) n = n.parentNode || !1;
                        return n !== !1
                    };
                    var S = {
                        thin: 1,
                        medium: 3,
                        thick: 5
                    };
                    this.getDocumentScrollOffset = function() {
                        return {
                            top: window.pageYOffset || document.documentElement.scrollTop,
                            left: window.pageXOffset || document.documentElement.scrollLeft
                        }
                    }, this.getOffset = function() {
                        if (y.isfixed) {
                            var t = y.win.offset(),
                                e = y.getDocumentScrollOffset();
                            return t.top -= e.top, t.left -= e.left, t
                        }
                        var n = y.win.offset();
                        if (!y.viewport) return n;
                        var i = y.viewport.offset();
                        return {
                            top: n.top - i.top,
                            left: n.left - i.left
                        }
                    }, this.updateScrollBar = function(t) {
                        var e, n;
                        if (y.ishwscroll) y.rail.css({
                            height: y.win.innerHeight() - (y.opt.railpadding.top + y.opt.railpadding.bottom)
                        }), y.railh && y.railh.css({
                            width: y.win.innerWidth() - (y.opt.railpadding.left + y.opt.railpadding.right)
                        });
                        else {
                            var i = y.getOffset();
                            if (e = {
                                    top: i.top,
                                    left: i.left - (y.opt.railpadding.left + y.opt.railpadding.right)
                                }, e.top += u(y.win, "border-top-width", !0), e.left += y.rail.align ? y.win.outerWidth() - u(y.win, "border-right-width") - y.rail.width : u(y.win, "border-left-width"), n = y.opt.railoffset, n && (n.top && (e.top += n.top), n.left && (e.left += n.left)), y.railslocked || y.rail.css({
                                    top: e.top,
                                    left: e.left,
                                    height: (t ? t.h : y.win.innerHeight()) - (y.opt.railpadding.top + y.opt.railpadding.bottom)
                                }), y.zoom && y.zoom.css({
                                    top: e.top + 1,
                                    left: 1 == y.rail.align ? e.left - 20 : e.left + y.rail.width + 4
                                }), y.railh && !y.railslocked) {
                                e = {
                                    top: i.top,
                                    left: i.left
                                }, n = y.opt.railhoffset, n && (n.top && (e.top += n.top), n.left && (e.left += n.left));
                                var o = y.railh.align ? e.top + u(y.win, "border-top-width", !0) + y.win.innerHeight() - y.railh.height : e.top + u(y.win, "border-top-width", !0),
                                    s = e.left + u(y.win, "border-left-width");
                                y.railh.css({
                                    top: o - (y.opt.railpadding.top + y.opt.railpadding.bottom),
                                    left: s,
                                    width: y.railh.width
                                })
                            }
                        }
                    }, this.doRailClick = function(t, e, n) {
                        var i, o, s, r;
                        y.railslocked || (y.cancelEvent(t), e ? (i = n ? y.doScrollLeft : y.doScrollTop, s = n ? (t.pageX - y.railh.offset().left - y.cursorwidth / 2) * y.scrollratio.x : (t.pageY - y.rail.offset().top - y.cursorheight / 2) * y.scrollratio.y, i(s)) : (i = n ? y.doScrollLeftBy : y.doScrollBy, s = n ? y.scroll.x : y.scroll.y, r = n ? t.pageX - y.railh.offset().left : t.pageY - y.rail.offset().top, o = n ? y.view.w : y.view.h, i(s >= r ? o : -o)))
                    }, y.hasanimationframe = c, y.hascancelanimationframe = h, y.hasanimationframe ? y.hascancelanimationframe || (h = function() {
                        y.cancelAnimationFrame = !0
                    }) : (c = function(t) {
                        return setTimeout(t, 15 - Math.floor(+new Date / 1e3) % 16)
                    }, h = clearTimeout), this.init = function() {
                        if (y.saved.css = [], L.isie7mobile) return !0;
                        if (L.isoperamini) return !0;
                        L.isie10 ? "-ms-touch-action" : "touch-action";
                        L.hasmstouch && y.css(y.ispage ? d("html") : y.win, {
                            _touchaction: "none"
                        });
                        var t = L.ismodernie || L.isie10 ? {
                            "-ms-overflow-style": "none"
                        } : {
                            "overflow-y": "hidden"
                        };
                        if (y.zindex = "auto", y.ispage || "auto" != y.opt.zindex ? y.zindex = y.opt.zindex : y.zindex = r() || "auto", !y.ispage && "auto" != y.zindex && y.zindex > l && (l = y.zindex), y.isie && 0 == y.zindex && "auto" == y.opt.zindex && (y.zindex = "auto"), !y.ispage || !L.cantouch && !L.isieold && !L.isie9mobile) {
                            var e = y.docscroll;
                            y.ispage && (e = y.haswrapper ? y.win : y.doc), L.isie9mobile || y.css(e, t), y.ispage && L.isie7 && ("BODY" == y.doc[0].nodeName ? y.css(d("html"), {
                                "overflow-y": "hidden"
                            }) : "HTML" == y.doc[0].nodeName && y.css(d("body"), t)), !L.isios || y.ispage || y.haswrapper || y.css(d("body"), {
                                "-webkit-overflow-scrolling": "touch"
                            });
                            var n = d(document.createElement("div"));
                            n.css({
                                position: "relative",
                                top: 0,
                                "float": "right",
                                width: y.opt.cursorwidth,
                                height: 0,
                                "background-color": y.opt.cursorcolor,
                                border: y.opt.cursorborder,
                                "background-clip": "padding-box",
                                "-webkit-border-radius": y.opt.cursorborderradius,
                                "-moz-border-radius": y.opt.cursorborderradius,
                                "border-radius": y.opt.cursorborderradius
                            }), n.hborder = parseFloat(n.outerHeight() - n.innerHeight()), n.addClass("nicescroll-cursors"), y.cursor = n;
                            var a = d(document.createElement("div"));
                            a.attr("id", y.id), a.addClass("nicescroll-rails nicescroll-rails-vr");
                            var u, c, h = ["left", "right", "top", "bottom"];
                            for (var p in h) c = h[p], u = y.opt.railpadding[c], u ? a.css("padding-" + c, u + "px") : y.opt.railpadding[c] = 0;
                            a.append(n), a.width = Math.max(parseFloat(y.opt.cursorwidth), n.outerWidth()), a.css({
                                width: a.width + "px",
                                zIndex: y.zindex,
                                background: y.opt.background,
                                cursor: "default"
                            }), a.visibility = !0, a.scrollable = !0, a.align = "left" == y.opt.railalign ? 0 : 1, y.rail = a, y.rail.drag = !1;
                            var f = !1;
                            !y.opt.boxzoom || y.ispage || L.isieold || (f = document.createElement("div"), y.bind(f, "click", y.doZoom), y.bind(f, "mouseenter", function() {
                                y.zoom.css("opacity", y.opt.cursoropacitymax)
                            }), y.bind(f, "mouseleave", function() {
                                y.zoom.css("opacity", y.opt.cursoropacitymin)
                            }), y.zoom = d(f), y.zoom.css({
                                cursor: "pointer",
                                zIndex: y.zindex,
                                backgroundImage: "url(" + y.opt.scriptpath + "zoomico.png)",
                                height: 18,
                                width: 18,
                                backgroundPosition: "0px 0px"
                            }), y.opt.dblclickzoom && y.bind(y.win, "dblclick", y.doZoom), L.cantouch && y.opt.gesturezoom && (y.ongesturezoom = function(t) {
                                return t.scale > 1.5 && y.doZoomIn(t), t.scale < .8 && y.doZoomOut(t), y.cancelEvent(t)
                            }, y.bind(y.win, "gestureend", y.ongesturezoom))), y.railh = !1;
                            var _;
                            if (y.opt.horizrailenabled) {
                                y.css(e, {
                                    overflowX: "hidden"
                                });
                                var n = d(document.createElement("div"));
                                n.css({
                                    position: "absolute",
                                    top: 0,
                                    height: y.opt.cursorwidth,
                                    width: 0,
                                    backgroundColor: y.opt.cursorcolor,
                                    border: y.opt.cursorborder,
                                    backgroundClip: "padding-box",
                                    "-webkit-border-radius": y.opt.cursorborderradius,
                                    "-moz-border-radius": y.opt.cursorborderradius,
                                    "border-radius": y.opt.cursorborderradius
                                }), L.isieold && n.css("overflow", "hidden"), n.wborder = parseFloat(n.outerWidth() - n.innerWidth()), n.addClass("nicescroll-cursors"), y.cursorh = n, _ = d(document.createElement("div")), _.attr("id", y.id + "-hr"), _.addClass("nicescroll-rails nicescroll-rails-hr"), _.height = Math.max(parseFloat(y.opt.cursorwidth), n.outerHeight()), _.css({
                                    height: _.height + "px",
                                    zIndex: y.zindex,
                                    background: y.opt.background
                                }), _.append(n), _.visibility = !0, _.scrollable = !0, _.align = "top" == y.opt.railvalign ? 0 : 1, y.railh = _, y.railh.drag = !1
                            }
                            if (y.ispage) a.css({
                                position: "fixed",
                                top: 0,
                                height: "100%"
                            }), a.align ? a.css({
                                right: 0
                            }) : a.css({
                                left: 0
                            }), y.body.append(a), y.railh && (_.css({
                                position: "fixed",
                                left: 0,
                                width: "100%"
                            }), _.align ? _.css({
                                bottom: 0
                            }) : _.css({
                                top: 0
                            }), y.body.append(_));
                            else {
                                if (y.ishwscroll) {
                                    "static" == y.win.css("position") && y.css(y.win, {
                                        position: "relative"
                                    });
                                    var g = "HTML" == y.win[0].nodeName ? y.body : y.win;
                                    d(g).scrollTop(0).scrollLeft(0), y.zoom && (y.zoom.css({
                                        position: "absolute",
                                        top: 1,
                                        right: 0,
                                        "margin-right": a.width + 4
                                    }), g.append(y.zoom)), a.css({
                                        position: "absolute",
                                        top: 0
                                    }), a.align ? a.css({
                                        right: 0
                                    }) : a.css({
                                        left: 0
                                    }), g.append(a), _ && (_.css({
                                        position: "absolute",
                                        left: 0,
                                        bottom: 0
                                    }), _.align ? _.css({
                                        bottom: 0
                                    }) : _.css({
                                        top: 0
                                    }), g.append(_))
                                } else {
                                    y.isfixed = "fixed" == y.win.css("position");
                                    var v = y.isfixed ? "fixed" : "absolute";
                                    y.isfixed || (y.viewport = y.getViewport(y.win[0])), y.viewport && (y.body = y.viewport, 0 == /fixed|absolute/.test(y.viewport.css("position")) && y.css(y.viewport, {
                                        position: "relative"
                                    })), a.css({
                                        position: v
                                    }), y.zoom && y.zoom.css({
                                        position: v
                                    }), y.updateScrollBar(), y.body.append(a), y.zoom && y.body.append(y.zoom), y.railh && (_.css({
                                        position: v
                                    }), y.body.append(_))
                                }
                                L.isios && y.css(y.win, {
                                    "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                                    "-webkit-touch-callout": "none"
                                }), L.isie && y.opt.disableoutline && y.win.attr("hideFocus", "true"), L.iswebkit && y.opt.disableoutline && y.win.css("outline", "none")
                            }
                            if (y.opt.autohidemode === !1 ? (y.autohidedom = !1, y.rail.css({
                                    opacity: y.opt.cursoropacitymax
                                }), y.railh && y.railh.css({
                                    opacity: y.opt.cursoropacitymax
                                })) : y.opt.autohidemode === !0 || "leave" === y.opt.autohidemode ? (y.autohidedom = d().add(y.rail), L.isie8 && (y.autohidedom = y.autohidedom.add(y.cursor)), y.railh && (y.autohidedom = y.autohidedom.add(y.railh)), y.railh && L.isie8 && (y.autohidedom = y.autohidedom.add(y.cursorh))) : "scroll" == y.opt.autohidemode ? (y.autohidedom = d().add(y.rail), y.railh && (y.autohidedom = y.autohidedom.add(y.railh))) : "cursor" == y.opt.autohidemode ? (y.autohidedom = d().add(y.cursor), y.railh && (y.autohidedom = y.autohidedom.add(y.cursorh))) : "hidden" == y.opt.autohidemode && (y.autohidedom = !1, y.hide(), y.railslocked = !1), L.isie9mobile) {
                                y.scrollmom = new b(y), y.onmangotouch = function() {
                                    var t = y.getScrollTop(),
                                        e = y.getScrollLeft();
                                    if (t == y.scrollmom.lastscrolly && e == y.scrollmom.lastscrollx) return !0;
                                    var n = t - y.mangotouch.sy,
                                        i = e - y.mangotouch.sx,
                                        o = Math.round(Math.sqrt(Math.pow(i, 2) + Math.pow(n, 2)));
                                    if (0 != o) {
                                        var s = 0 > n ? -1 : 1,
                                            r = 0 > i ? -1 : 1,
                                            a = +new Date;
                                        if (y.mangotouch.lazy && clearTimeout(y.mangotouch.lazy), a - y.mangotouch.tm > 80 || y.mangotouch.dry != s || y.mangotouch.drx != r) y.scrollmom.stop(), y.scrollmom.reset(e, t), y.mangotouch.sy = t, y.mangotouch.ly = t, y.mangotouch.sx = e, y.mangotouch.lx = e, y.mangotouch.dry = s, y.mangotouch.drx = r, y.mangotouch.tm = a;
                                        else {
                                            y.scrollmom.stop(), y.scrollmom.update(y.mangotouch.sx - i, y.mangotouch.sy - n), y.mangotouch.tm = a;
                                            var l = Math.max(Math.abs(y.mangotouch.ly - t), Math.abs(y.mangotouch.lx - e));
                                            y.mangotouch.ly = t, y.mangotouch.lx = e, l > 2 && (y.mangotouch.lazy = setTimeout(function() {
                                                y.mangotouch.lazy = !1, y.mangotouch.dry = 0, y.mangotouch.drx = 0, y.mangotouch.tm = 0, y.scrollmom.doMomentum(30)
                                            }, 100))
                                        }
                                    }
                                };
                                var M = y.getScrollTop(),
                                    w = y.getScrollLeft();
                                y.mangotouch = {
                                    sy: M,
                                    ly: M,
                                    dry: 0,
                                    sx: w,
                                    lx: w,
                                    drx: 0,
                                    lazy: !1,
                                    tm: 0
                                }, y.bind(y.docscroll, "scroll", y.onmangotouch)
                            } else {
                                if (L.cantouch || y.istouchcapable || y.opt.touchbehavior || L.hasmstouch) {
                                    y.scrollmom = new b(y), y.ontouchstart = function(t) {
                                        if (t.pointerType && 2 != t.pointerType && "touch" != t.pointerType) return !1;
                                        if (y.hasmoving = !1, !y.railslocked) {
                                            var e;
                                            if (L.hasmstouch)
                                                for (e = t.target ? t.target : !1; e;) {
                                                    var n = d(e).getNiceScroll();
                                                    if (n.length > 0 && n[0].me == y.me) break;
                                                    if (n.length > 0) return !1;
                                                    if ("DIV" == e.nodeName && e.id == y.id) break;
                                                    e = e.parentNode ? e.parentNode : !1
                                                }
                                            if (y.cancelScroll(), e = y.getTarget(t)) {
                                                var i = /INPUT/i.test(e.nodeName) && /range/i.test(e.type);
                                                if (i) return y.stopPropagation(t)
                                            }
                                            if (!("clientX" in t) && "changedTouches" in t && (t.clientX = t.changedTouches[0].clientX, t.clientY = t.changedTouches[0].clientY), y.forcescreen) {
                                                var o = t;
                                                t = {
                                                    original: t.original ? t.original : t
                                                }, t.clientX = o.screenX, t.clientY = o.screenY
                                            }
                                            if (y.rail.drag = {
                                                    x: t.clientX,
                                                    y: t.clientY,
                                                    sx: y.scroll.x,
                                                    sy: y.scroll.y,
                                                    st: y.getScrollTop(),
                                                    sl: y.getScrollLeft(),
                                                    pt: 2,
                                                    dl: !1
                                                }, y.ispage || !y.opt.directionlockdeadzone) y.rail.drag.dl = "f";
                                            else {
                                                var s = {
                                                        w: d(window).width(),
                                                        h: d(window).height()
                                                    },
                                                    r = {
                                                        w: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
                                                        h: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                                                    },
                                                    a = Math.max(0, r.h - s.h),
                                                    l = Math.max(0, r.w - s.w);
                                                !y.rail.scrollable && y.railh.scrollable ? y.rail.drag.ck = a > 0 ? "v" : !1 : y.rail.scrollable && !y.railh.scrollable ? y.rail.drag.ck = l > 0 ? "h" : !1 : y.rail.drag.ck = !1, y.rail.drag.ck || (y.rail.drag.dl = "f")
                                            }
                                            if (y.opt.touchbehavior && y.isiframe && L.isie) {
                                                var u = y.win.position();
                                                y.rail.drag.x += u.left, y.rail.drag.y += u.top
                                            }
                                            if (y.hasmoving = !1, y.lastmouseup = !1, y.scrollmom.reset(t.clientX, t.clientY), !L.cantouch && !this.istouchcapable && !t.pointerType) {
                                                var c = e ? /INPUT|SELECT|TEXTAREA/i.test(e.nodeName) : !1;
                                                if (!c) return !y.ispage && L.hasmousecapture && e.setCapture(), y.opt.touchbehavior ? (e.onclick && !e._onclick && (e._onclick = e.onclick, e.onclick = function(t) {
                                                    return y.hasmoving ? !1 : void e._onclick.call(this, t)
                                                }), y.cancelEvent(t)) : y.stopPropagation(t);
                                                /SUBMIT|CANCEL|BUTTON/i.test(d(e).attr("type")) && (pc = {
                                                    tg: e,
                                                    click: !1
                                                }, y.preventclick = pc)
                                            }
                                        }
                                    }, y.ontouchend = function(t) {
                                        if (!y.rail.drag) return !0;
                                        if (2 == y.rail.drag.pt) {
                                            if (t.pointerType && 2 != t.pointerType && "touch" != t.pointerType) return !1;
                                            if (y.scrollmom.doMomentum(), y.rail.drag = !1, y.hasmoving && (y.lastmouseup = !0, y.hideCursor(), L.hasmousecapture && document.releaseCapture(), !L.cantouch)) return y.cancelEvent(t)
                                        } else if (1 == y.rail.drag.pt) return y.onmouseup(t)
                                    };
                                    var k = y.opt.touchbehavior && y.isiframe && !L.hasmousecapture;
                                    y.ontouchmove = function(t, e) {
                                        if (!y.rail.drag) return !1;
                                        if (t.targetTouches && y.opt.preventmultitouchscrolling && t.targetTouches.length > 1) return !1;
                                        if (t.pointerType && 2 != t.pointerType && "touch" != t.pointerType) return !1;
                                        if (2 == y.rail.drag.pt) {
                                            if (L.cantouch && L.isios && void 0 === t.original) return !0;
                                            y.hasmoving = !0, y.preventclick && !y.preventclick.click && (y.preventclick.click = y.preventclick.tg.onclick || !1, y.preventclick.tg.onclick = y.onpreventclick);
                                            var n = d.extend({
                                                original: t
                                            }, t);
                                            if (t = n, "changedTouches" in t && (t.clientX = t.changedTouches[0].clientX, t.clientY = t.changedTouches[0].clientY), y.forcescreen) {
                                                var i = t;
                                                t = {
                                                    original: t.original ? t.original : t
                                                }, t.clientX = i.screenX, t.clientY = i.screenY
                                            }
                                            var o, s;
                                            if (s = o = 0, k && !e) {
                                                var r = y.win.position();
                                                s = -r.left, o = -r.top
                                            }
                                            var a = t.clientY + o,
                                                l = a - y.rail.drag.y,
                                                u = t.clientX + s,
                                                c = u - y.rail.drag.x,
                                                h = y.rail.drag.st - l;
                                            y.ishwscroll && y.opt.bouncescroll ? 0 > h ? h = Math.round(h / 2) : h > y.page.maxh && (h = y.page.maxh + Math.round((h - y.page.maxh) / 2)) : (0 > h && (h = 0,
                                                a = 0), h > y.page.maxh && (h = y.page.maxh, a = 0));
                                            var p;
                                            y.railh && y.railh.scrollable && (p = y.isrtlmode ? c - y.rail.drag.sl : y.rail.drag.sl - c, y.ishwscroll && y.opt.bouncescroll ? 0 > p ? p = Math.round(p / 2) : p > y.page.maxw && (p = y.page.maxw + Math.round((p - y.page.maxw) / 2)) : (0 > p && (p = 0, u = 0), p > y.page.maxw && (p = y.page.maxw, u = 0)));
                                            var f = !1;
                                            if (y.rail.drag.dl) f = !0, "v" == y.rail.drag.dl ? p = y.rail.drag.sl : "h" == y.rail.drag.dl && (h = y.rail.drag.st);
                                            else {
                                                var m = Math.abs(l),
                                                    _ = Math.abs(c),
                                                    g = y.opt.directionlockdeadzone;
                                                if ("v" == y.rail.drag.ck) {
                                                    if (m > g && .3 * m >= _) return y.rail.drag = !1, !0;
                                                    _ > g && (y.rail.drag.dl = "f", d("body").scrollTop(d("body").scrollTop()))
                                                } else if ("h" == y.rail.drag.ck) {
                                                    if (_ > g && .3 * _ >= m) return y.rail.drag = !1, !0;
                                                    m > g && (y.rail.drag.dl = "f", d("body").scrollLeft(d("body").scrollLeft()))
                                                }
                                            }
                                            if (y.synched("touchmove", function() {
                                                    y.rail.drag && 2 == y.rail.drag.pt && (y.prepareTransition && y.prepareTransition(0), y.rail.scrollable && y.setScrollTop(h), y.scrollmom.update(u, a), y.railh && y.railh.scrollable ? (y.setScrollLeft(p), y.showCursor(h, p)) : y.showCursor(h), L.isie10 && document.selection.clear())
                                                }), L.ischrome && y.istouchcapable && (f = !1), f) return y.cancelEvent(t)
                                        } else if (1 == y.rail.drag.pt) return y.onmousemove(t)
                                    }
                                }
                                if (y.onmousedown = function(t, e) {
                                        if (!y.rail.drag || 1 == y.rail.drag.pt) {
                                            if (y.railslocked) return y.cancelEvent(t);
                                            y.cancelScroll(), y.rail.drag = {
                                                x: t.clientX,
                                                y: t.clientY,
                                                sx: y.scroll.x,
                                                sy: y.scroll.y,
                                                pt: 1,
                                                hr: !!e
                                            };
                                            var n = y.getTarget(t);
                                            return !y.ispage && L.hasmousecapture && n.setCapture(), y.isiframe && !L.hasmousecapture && (y.saved.csspointerevents = y.doc.css("pointer-events"), y.css(y.doc, {
                                                "pointer-events": "none"
                                            })), y.hasmoving = !1, y.cancelEvent(t)
                                        }
                                    }, y.onmouseup = function(t) {
                                        return y.rail.drag ? 1 != y.rail.drag.pt ? !0 : (L.hasmousecapture && document.releaseCapture(), y.isiframe && !L.hasmousecapture && y.doc.css("pointer-events", y.saved.csspointerevents), y.rail.drag = !1, y.hasmoving && y.triggerScrollEnd(), y.cancelEvent(t)) : void 0
                                    }, y.onmousemove = function(t) {
                                        if (y.rail.drag) {
                                            if (1 != y.rail.drag.pt) return;
                                            if (L.ischrome && 0 == t.which) return y.onmouseup(t);
                                            if (y.cursorfreezed = !0, y.hasmoving = !0, y.rail.drag.hr) {
                                                y.scroll.x = y.rail.drag.sx + (t.clientX - y.rail.drag.x), y.scroll.x < 0 && (y.scroll.x = 0);
                                                var e = y.scrollvaluemaxw;
                                                y.scroll.x > e && (y.scroll.x = e)
                                            } else {
                                                y.scroll.y = y.rail.drag.sy + (t.clientY - y.rail.drag.y), y.scroll.y < 0 && (y.scroll.y = 0);
                                                var n = y.scrollvaluemax;
                                                y.scroll.y > n && (y.scroll.y = n)
                                            }
                                            return y.synched("mousemove", function() {
                                                y.rail.drag && 1 == y.rail.drag.pt && (y.showCursor(), y.rail.drag.hr ? y.hasreversehr ? y.doScrollLeft(y.scrollvaluemaxw - Math.round(y.scroll.x * y.scrollratio.x), y.opt.cursordragspeed) : y.doScrollLeft(Math.round(y.scroll.x * y.scrollratio.x), y.opt.cursordragspeed) : y.doScrollTop(Math.round(y.scroll.y * y.scrollratio.y), y.opt.cursordragspeed))
                                            }), y.cancelEvent(t)
                                        }
                                        y.checkarea = 0
                                    }, L.cantouch || y.opt.touchbehavior) y.onpreventclick = function(t) {
                                    return y.preventclick ? (y.preventclick.tg.onclick = y.preventclick.click, y.preventclick = !1, y.cancelEvent(t)) : void 0
                                }, y.bind(y.win, "mousedown", y.ontouchstart), y.onclick = L.isios ? !1 : function(t) {
                                    return y.lastmouseup ? (y.lastmouseup = !1, y.cancelEvent(t)) : !0
                                }, y.opt.grabcursorenabled && L.cursorgrabvalue && (y.css(y.ispage ? y.doc : y.win, {
                                    cursor: L.cursorgrabvalue
                                }), y.css(y.rail, {
                                    cursor: L.cursorgrabvalue
                                }));
                                else {
                                    var D = function T(t) {
                                        if (y.selectiondrag) {
                                            if (t) {
                                                var e = y.win.outerHeight(),
                                                    n = t.pageY - y.selectiondrag.top;
                                                n > 0 && e > n && (n = 0), n >= e && (n -= e), y.selectiondrag.df = n
                                            }
                                            if (0 != y.selectiondrag.df) {
                                                var i = 2 * -Math.floor(y.selectiondrag.df / 6);
                                                y.doScrollBy(i), y.debounced("doselectionscroll", function() {
                                                    T()
                                                }, 50)
                                            }
                                        }
                                    };
                                    "getSelection" in document ? y.hasTextSelected = function() {
                                        return document.getSelection().rangeCount > 0
                                    } : "selection" in document ? y.hasTextSelected = function() {
                                        return "None" != document.selection.type
                                    } : y.hasTextSelected = function() {
                                        return !1
                                    }, y.onselectionstart = function(t) {
                                        y.ispage || (y.selectiondrag = y.win.offset())
                                    }, y.onselectionend = function(t) {
                                        y.selectiondrag = !1
                                    }, y.onselectiondrag = function(t) {
                                        y.selectiondrag && y.hasTextSelected() && y.debounced("selectionscroll", function() {
                                            D(t)
                                        }, 250)
                                    }
                                }
                                L.hasw3ctouch ? (y.css(y.rail, {
                                    "touch-action": "none"
                                }), y.css(y.cursor, {
                                    "touch-action": "none"
                                }), y.bind(y.win, "pointerdown", y.ontouchstart), y.bind(document, "pointerup", y.ontouchend), y.bind(document, "pointermove", y.ontouchmove)) : L.hasmstouch ? (y.css(y.rail, {
                                    "-ms-touch-action": "none"
                                }), y.css(y.cursor, {
                                    "-ms-touch-action": "none"
                                }), y.bind(y.win, "MSPointerDown", y.ontouchstart), y.bind(document, "MSPointerUp", y.ontouchend), y.bind(document, "MSPointerMove", y.ontouchmove), y.bind(y.cursor, "MSGestureHold", function(t) {
                                    t.preventDefault()
                                }), y.bind(y.cursor, "contextmenu", function(t) {
                                    t.preventDefault()
                                })) : this.istouchcapable && (y.bind(y.win, "touchstart", y.ontouchstart), y.bind(document, "touchend", y.ontouchend), y.bind(document, "touchcancel", y.ontouchend), y.bind(document, "touchmove", y.ontouchmove)), (y.opt.cursordragontouch || !L.cantouch && !y.opt.touchbehavior) && (y.rail.css({
                                    cursor: "default"
                                }), y.railh && y.railh.css({
                                    cursor: "default"
                                }), y.jqbind(y.rail, "mouseenter", function() {
                                    return y.ispage || y.win.is(":visible") ? (y.canshowonmouseevent && y.showCursor(), void(y.rail.active = !0)) : !1
                                }), y.jqbind(y.rail, "mouseleave", function() {
                                    y.rail.active = !1, y.rail.drag || y.hideCursor()
                                }), y.opt.sensitiverail && (y.bind(y.rail, "click", function(t) {
                                    y.doRailClick(t, !1, !1)
                                }), y.bind(y.rail, "dblclick", function(t) {
                                    y.doRailClick(t, !0, !1)
                                }), y.bind(y.cursor, "click", function(t) {
                                    y.cancelEvent(t)
                                }), y.bind(y.cursor, "dblclick", function(t) {
                                    y.cancelEvent(t)
                                })), y.railh && (y.jqbind(y.railh, "mouseenter", function() {
                                    return y.ispage || y.win.is(":visible") ? (y.canshowonmouseevent && y.showCursor(), void(y.rail.active = !0)) : !1
                                }), y.jqbind(y.railh, "mouseleave", function() {
                                    y.rail.active = !1, y.rail.drag || y.hideCursor()
                                }), y.opt.sensitiverail && (y.bind(y.railh, "click", function(t) {
                                    y.doRailClick(t, !1, !0)
                                }), y.bind(y.railh, "dblclick", function(t) {
                                    y.doRailClick(t, !0, !0)
                                }), y.bind(y.cursorh, "click", function(t) {
                                    y.cancelEvent(t)
                                }), y.bind(y.cursorh, "dblclick", function(t) {
                                    y.cancelEvent(t)
                                })))), L.cantouch || y.opt.touchbehavior ? (y.bind(L.hasmousecapture ? y.win : document, "mouseup", y.ontouchend), y.bind(document, "mousemove", y.ontouchmove), y.onclick && y.bind(document, "click", y.onclick), y.opt.cursordragontouch ? (y.bind(y.cursor, "mousedown", y.onmousedown), y.bind(y.cursor, "mouseup", y.onmouseup), y.cursorh && y.bind(y.cursorh, "mousedown", function(t) {
                                    y.onmousedown(t, !0)
                                }), y.cursorh && y.bind(y.cursorh, "mouseup", y.onmouseup)) : (y.bind(y.rail, "mousedown", function(t) {
                                    t.preventDefault()
                                }), y.railh && y.bind(y.railh, "mousedown", function(t) {
                                    t.preventDefault()
                                }))) : (y.bind(L.hasmousecapture ? y.win : document, "mouseup", y.onmouseup), y.bind(document, "mousemove", y.onmousemove), y.onclick && y.bind(document, "click", y.onclick), y.bind(y.cursor, "mousedown", y.onmousedown), y.bind(y.cursor, "mouseup", y.onmouseup), y.railh && (y.bind(y.cursorh, "mousedown", function(t) {
                                    y.onmousedown(t, !0)
                                }), y.bind(y.cursorh, "mouseup", y.onmouseup)), !y.ispage && y.opt.enablescrollonselection && (y.bind(y.win[0], "mousedown", y.onselectionstart), y.bind(document, "mouseup", y.onselectionend), y.bind(y.cursor, "mouseup", y.onselectionend), y.cursorh && y.bind(y.cursorh, "mouseup", y.onselectionend), y.bind(document, "mousemove", y.onselectiondrag)), y.zoom && (y.jqbind(y.zoom, "mouseenter", function() {
                                    y.canshowonmouseevent && y.showCursor(), y.rail.active = !0
                                }), y.jqbind(y.zoom, "mouseleave", function() {
                                    y.rail.active = !1, y.rail.drag || y.hideCursor()
                                }))), y.opt.enablemousewheel && (y.isiframe || y.mousewheel(L.isie && y.ispage ? document : y.win, y.onmousewheel), y.mousewheel(y.rail, y.onmousewheel), y.railh && y.mousewheel(y.railh, y.onmousewheelhr)), y.ispage || L.cantouch || /HTML|^BODY/.test(y.win[0].nodeName) || (y.win.attr("tabindex") || y.win.attr({
                                    tabindex: s++
                                }), y.jqbind(y.win, "focus", function(t) {
                                    i = y.getTarget(t).id || !0, y.hasfocus = !0, y.canshowonmouseevent && y.noticeCursor()
                                }), y.jqbind(y.win, "blur", function(t) {
                                    i = !1, y.hasfocus = !1
                                }), y.jqbind(y.win, "mouseenter", function(t) {
                                    o = y.getTarget(t).id || !0, y.hasmousefocus = !0, y.canshowonmouseevent && y.noticeCursor()
                                }), y.jqbind(y.win, "mouseleave", function() {
                                    o = !1, y.hasmousefocus = !1, y.rail.drag || y.hideCursor()
                                }))
                            }
                            if (y.onkeypress = function(t) {
                                    if (y.railslocked && 0 == y.page.maxh) return !0;
                                    t = t ? t : window.e;
                                    var e = y.getTarget(t);
                                    if (e && /INPUT|TEXTAREA|SELECT|OPTION/.test(e.nodeName)) {
                                        var n = e.getAttribute("type") || e.type || !1;
                                        if (!n || !/submit|button|cancel/i.tp) return !0
                                    }
                                    if (d(e).attr("contenteditable")) return !0;
                                    if (y.hasfocus || y.hasmousefocus && !i || y.ispage && !i && !o) {
                                        var s = t.keyCode;
                                        if (y.railslocked && 27 != s) return y.cancelEvent(t);
                                        var r = t.ctrlKey || !1,
                                            a = t.shiftKey || !1,
                                            l = !1;
                                        switch (s) {
                                            case 38:
                                            case 63233:
                                                y.doScrollBy(72), l = !0;
                                                break;
                                            case 40:
                                            case 63235:
                                                y.doScrollBy(-72), l = !0;
                                                break;
                                            case 37:
                                            case 63232:
                                                y.railh && (r ? y.doScrollLeft(0) : y.doScrollLeftBy(72), l = !0);
                                                break;
                                            case 39:
                                            case 63234:
                                                y.railh && (r ? y.doScrollLeft(y.page.maxw) : y.doScrollLeftBy(-72), l = !0);
                                                break;
                                            case 33:
                                            case 63276:
                                                y.doScrollBy(y.view.h), l = !0;
                                                break;
                                            case 34:
                                            case 63277:
                                                y.doScrollBy(-y.view.h), l = !0;
                                                break;
                                            case 36:
                                            case 63273:
                                                y.railh && r ? y.doScrollPos(0, 0) : y.doScrollTo(0), l = !0;
                                                break;
                                            case 35:
                                            case 63275:
                                                y.railh && r ? y.doScrollPos(y.page.maxw, y.page.maxh) : y.doScrollTo(y.page.maxh), l = !0;
                                                break;
                                            case 32:
                                                y.opt.spacebarenabled && (a ? y.doScrollBy(y.view.h) : y.doScrollBy(-y.view.h), l = !0);
                                                break;
                                            case 27:
                                                y.zoomactive && (y.doZoom(), l = !0)
                                        }
                                        if (l) return y.cancelEvent(t)
                                    }
                                }, y.opt.enablekeyboard && y.bind(document, L.isopera && !L.isopera12 ? "keypress" : "keydown", y.onkeypress), y.bind(document, "keydown", function(t) {
                                    var e = t.ctrlKey || !1;
                                    e && (y.wheelprevented = !0)
                                }), y.bind(document, "keyup", function(t) {
                                    var e = t.ctrlKey || !1;
                                    e || (y.wheelprevented = !1)
                                }), y.bind(window, "blur", function(t) {
                                    y.wheelprevented = !1
                                }), y.bind(window, "resize", y.lazyResize), y.bind(window, "orientationchange", y.lazyResize), y.bind(window, "load", y.lazyResize), L.ischrome && !y.ispage && !y.haswrapper) {
                                var Y = y.win.attr("style"),
                                    S = parseFloat(y.win.css("width")) + 1;
                                y.win.css("width", S), y.synched("chromefix", function() {
                                    y.win.attr("style", Y)
                                })
                            }
                            y.onAttributeChange = function(t) {
                                y.lazyResize(y.isieold ? 250 : 30)
                            }, y.isie11 || m === !1 || (y.observerbody = new m(function(t) {
                                return t.forEach(function(t) {
                                    return "attributes" == t.type ? d("body").hasClass("modal-open") && d("body").hasClass("modal-dialog") && !d.contains(d(".modal-dialog")[0], y.doc[0]) ? y.hide() : y.show() : void 0
                                }), document.body.scrollHeight != y.page.maxh ? y.lazyResize(30) : void 0
                            }), y.observerbody.observe(document.body, {
                                childList: !0,
                                subtree: !0,
                                characterData: !1,
                                attributes: !0,
                                attributeFilter: ["class"]
                            })), y.ispage || y.haswrapper || (m !== !1 ? (y.observer = new m(function(t) {
                                t.forEach(y.onAttributeChange)
                            }), y.observer.observe(y.win[0], {
                                childList: !0,
                                characterData: !1,
                                attributes: !0,
                                subtree: !1
                            }), y.observerremover = new m(function(t) {
                                t.forEach(function(t) {
                                    if (t.removedNodes.length > 0)
                                        for (var e in t.removedNodes)
                                            if (y && t.removedNodes[e] == y.win[0]) return y.remove()
                                })
                            }), y.observerremover.observe(y.win[0].parentNode, {
                                childList: !0,
                                characterData: !1,
                                attributes: !1,
                                subtree: !1
                            })) : (y.bind(y.win, L.isie && !L.isie9 ? "propertychange" : "DOMAttrModified", y.onAttributeChange), L.isie9 && y.win[0].attachEvent("onpropertychange", y.onAttributeChange), y.bind(y.win, "DOMNodeRemoved", function(t) {
                                t.target == y.win[0] && y.remove()
                            }))), !y.ispage && y.opt.boxzoom && y.bind(window, "resize", y.resizeZoom), y.istextarea && (y.bind(y.win, "keydown", y.lazyResize), y.bind(y.win, "mouseup", y.lazyResize)), y.lazyResize(30)
                        }
                        if ("IFRAME" == this.doc[0].nodeName) {
                            var x = function() {
                                y.iframexd = !1;
                                var e;
                                try {
                                    e = "contentDocument" in this ? this.contentDocument : this.contentWindow.document;
                                    e.domain
                                } catch (n) {
                                    y.iframexd = !0, e = !1
                                }
                                if (y.iframexd) return "console" in window && console.log("NiceScroll error: policy restriced iframe"), !0;
                                if (y.forcescreen = !0, y.isiframe && (y.iframe = {
                                        doc: d(e),
                                        html: y.doc.contents().find("html")[0],
                                        body: y.doc.contents().find("body")[0]
                                    }, y.getContentSize = function() {
                                        return {
                                            w: Math.max(y.iframe.html.scrollWidth, y.iframe.body.scrollWidth),
                                            h: Math.max(y.iframe.html.scrollHeight, y.iframe.body.scrollHeight)
                                        }
                                    }, y.docscroll = d(y.iframe.body)), !L.isios && y.opt.iframeautoresize && !y.isiframe) {
                                    y.win.scrollTop(0), y.doc.height("");
                                    var i = Math.max(e.getElementsByTagName("html")[0].scrollHeight, e.body.scrollHeight);
                                    y.doc.height(i)
                                }
                                y.lazyResize(30), L.isie7 && y.css(d(y.iframe.html), t), y.css(d(y.iframe.body), t), L.isios && y.haswrapper && y.css(d(e.body), {
                                    "-webkit-transform": "translate3d(0,0,0)"
                                }), "contentWindow" in this ? y.bind(this.contentWindow, "scroll", y.onscroll) : y.bind(e, "scroll", y.onscroll), y.opt.enablemousewheel && y.mousewheel(e, y.onmousewheel), y.opt.enablekeyboard && y.bind(e, L.isopera ? "keypress" : "keydown", y.onkeypress), (L.cantouch || y.opt.touchbehavior) && (y.bind(e, "mousedown", y.ontouchstart), y.bind(e, "mousemove", function(t) {
                                    return y.ontouchmove(t, !0)
                                }), y.opt.grabcursorenabled && L.cursorgrabvalue && y.css(d(e.body), {
                                    cursor: L.cursorgrabvalue
                                })), y.bind(e, "mouseup", y.ontouchend), y.zoom && (y.opt.dblclickzoom && y.bind(e, "dblclick", y.doZoom), y.ongesturezoom && y.bind(e, "gestureend", y.ongesturezoom))
                            };
                            this.doc[0].readyState && "complete" == this.doc[0].readyState && setTimeout(function() {
                                x.call(y.doc[0], !1)
                            }, 500), y.bind(this.doc, "load", x)
                        }
                    }, this.showCursor = function(t, e) {
                        if (y.cursortimeout && (clearTimeout(y.cursortimeout), y.cursortimeout = 0), y.rail) {
                            if (y.autohidedom && (y.autohidedom.stop().css({
                                    opacity: y.opt.cursoropacitymax
                                }), y.cursoractive = !0), y.rail.drag && 1 == y.rail.drag.pt || (void 0 !== t && t !== !1 && (y.scroll.y = Math.round(1 * t / y.scrollratio.y)), void 0 !== e && (y.scroll.x = Math.round(1 * e / y.scrollratio.x))), y.cursor.css({
                                    height: y.cursorheight,
                                    top: y.scroll.y
                                }), y.cursorh) {
                                var n = y.hasreversehr ? y.scrollvaluemaxw - y.scroll.x : y.scroll.x;
                                !y.rail.align && y.rail.visibility ? y.cursorh.css({
                                    width: y.cursorwidth,
                                    left: n + y.rail.width
                                }) : y.cursorh.css({
                                    width: y.cursorwidth,
                                    left: n
                                }), y.cursoractive = !0
                            }
                            y.zoom && y.zoom.stop().css({
                                opacity: y.opt.cursoropacitymax
                            })
                        }
                    }, this.hideCursor = function(t) {
                        y.cursortimeout || y.rail && y.autohidedom && (y.hasmousefocus && "leave" == y.opt.autohidemode || (y.cursortimeout = setTimeout(function() {
                            y.rail.active && y.showonmouseevent || (y.autohidedom.stop().animate({
                                opacity: y.opt.cursoropacitymin
                            }), y.zoom && y.zoom.stop().animate({
                                opacity: y.opt.cursoropacitymin
                            }), y.cursoractive = !1), y.cursortimeout = 0
                        }, t || y.opt.hidecursordelay)))
                    }, this.noticeCursor = function(t, e, n) {
                        y.showCursor(e, n), y.rail.active || y.hideCursor(t)
                    }, this.getContentSize = y.ispage ? function() {
                        return {
                            w: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
                            h: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                        }
                    } : y.haswrapper ? function() {
                        return {
                            w: y.doc.outerWidth() + parseInt(y.win.css("paddingLeft")) + parseInt(y.win.css("paddingRight")),
                            h: y.doc.outerHeight() + parseInt(y.win.css("paddingTop")) + parseInt(y.win.css("paddingBottom"))
                        }
                    } : function() {
                        return {
                            w: y.docscroll[0].scrollWidth,
                            h: y.docscroll[0].scrollHeight
                        }
                    }, this.onResize = function(t, e) {
                        if (!y || !y.win) return !1;
                        if (!y.haswrapper && !y.ispage) {
                            if ("none" == y.win.css("display")) return y.visibility && y.hideRail().hideRailHr(), !1;
                            y.hidden || y.visibility || y.showRail().showRailHr()
                        }
                        var n = y.page.maxh,
                            i = y.page.maxw,
                            o = {
                                h: y.view.h,
                                w: y.view.w
                            };
                        if (y.view = {
                                w: y.ispage ? y.win.width() : parseInt(y.win[0].clientWidth),
                                h: y.ispage ? y.win.height() : parseInt(y.win[0].clientHeight)
                            }, y.page = e ? e : y.getContentSize(), y.page.maxh = Math.max(0, y.page.h - y.view.h), y.page.maxw = Math.max(0, y.page.w - y.view.w), y.page.maxh == n && y.page.maxw == i && y.view.w == o.w && y.view.h == o.h) {
                            if (y.ispage) return y;
                            var s = y.win.offset();
                            if (y.lastposition) {
                                var r = y.lastposition;
                                if (r.top == s.top && r.left == s.left) return y
                            }
                            y.lastposition = s
                        }
                        if (0 == y.page.maxh ? (y.hideRail(), y.scrollvaluemax = 0, y.scroll.y = 0, y.scrollratio.y = 0, y.cursorheight = 0, y.setScrollTop(0), y.rail && (y.rail.scrollable = !1)) : (y.page.maxh -= y.opt.railpadding.top + y.opt.railpadding.bottom, y.rail.scrollable = !0), 0 == y.page.maxw ? (y.hideRailHr(), y.scrollvaluemaxw = 0, y.scroll.x = 0, y.scrollratio.x = 0, y.cursorwidth = 0, y.setScrollLeft(0), y.railh && (y.railh.scrollable = !1)) : (y.page.maxw -= y.opt.railpadding.left + y.opt.railpadding.right, y.railh && (y.railh.scrollable = y.opt.horizrailenabled)), y.railslocked = y.locked || 0 == y.page.maxh && 0 == y.page.maxw, y.railslocked) return y.ispage || y.updateScrollBar(y.view), !1;
                        y.hidden || y.visibility ? !y.railh || y.hidden || y.railh.visibility || y.showRailHr() : y.showRail().showRailHr(), y.istextarea && y.win.css("resize") && "none" != y.win.css("resize") && (y.view.h -= 20), y.cursorheight = Math.min(y.view.h, Math.round(y.view.h * (y.view.h / y.page.h))), y.cursorheight = y.opt.cursorfixedheight ? y.opt.cursorfixedheight : Math.max(y.opt.cursorminheight, y.cursorheight), y.cursorwidth = Math.min(y.view.w, Math.round(y.view.w * (y.view.w / y.page.w))), y.cursorwidth = y.opt.cursorfixedheight ? y.opt.cursorfixedheight : Math.max(y.opt.cursorminheight, y.cursorwidth), y.scrollvaluemax = y.view.h - y.cursorheight - y.cursor.hborder - (y.opt.railpadding.top + y.opt.railpadding.bottom), y.railh && (y.railh.width = y.page.maxh > 0 ? y.view.w - y.rail.width : y.view.w, y.scrollvaluemaxw = y.railh.width - y.cursorwidth - y.cursorh.wborder - (y.opt.railpadding.left + y.opt.railpadding.right)), y.ispage || y.updateScrollBar(y.view), y.scrollratio = {
                            x: y.page.maxw / y.scrollvaluemaxw,
                            y: y.page.maxh / y.scrollvaluemax
                        };
                        var a = y.getScrollTop();
                        return a > y.page.maxh ? y.doScrollTop(y.page.maxh) : (y.scroll.y = Math.round(y.getScrollTop() * (1 / y.scrollratio.y)), y.scroll.x = Math.round(y.getScrollLeft() * (1 / y.scrollratio.x)), y.cursoractive && y.noticeCursor()), y.scroll.y && 0 == y.getScrollTop() && y.doScrollTo(Math.floor(y.scroll.y * y.scrollratio.y)), y
                    }, this.resize = y.onResize, this.hlazyresize = 0, this.lazyResize = function(t) {
                        return y.haswrapper || y.hide(), y.hlazyresize && clearTimeout(y.hlazyresize), y.hlazyresize = setTimeout(function() {
                            y && y.show().resize()
                        }, 240), y
                    }, this.jqbind = function(t, e, n) {
                        y.events.push({
                            e: t,
                            n: e,
                            f: n,
                            q: !0
                        }), d(t).bind(e, n)
                    }, this.mousewheel = function(t, e, n) {
                        var i = "jquery" in t ? t[0] : t;
                        if ("onwheel" in document.createElement("div")) y._bind(i, "wheel", e, n || !1);
                        else {
                            var o = void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
                            p(i, o, e, n || !1), "DOMMouseScroll" == o && p(i, "MozMousePixelScroll", e, n || !1)
                        }
                    }, L.haseventlistener ? (this.bind = function(t, e, n, i) {
                        var o = "jquery" in t ? t[0] : t;
                        y._bind(o, e, n, i || !1)
                    }, this._bind = function(t, e, n, i) {
                        y.events.push({
                            e: t,
                            n: e,
                            f: n,
                            b: i,
                            q: !1
                        }), t.addEventListener(e, n, i || !1)
                    }, this.cancelEvent = function(t) {
                        if (!t) return !1;
                        var t = t.original ? t.original : t;
                        return t.cancelable && t.preventDefault(), t.stopPropagation(), t.preventManipulation && t.preventManipulation(), !1
                    }, this.stopPropagation = function(t) {
                        if (!t) return !1;
                        var t = t.original ? t.original : t;
                        return t.stopPropagation(), !1
                    }, this._unbind = function(t, e, n, i) {
                        t.removeEventListener(e, n, i)
                    }) : (this.bind = function(t, e, n, i) {
                        var o = "jquery" in t ? t[0] : t;
                        y._bind(o, e, function(t) {
                            return t = t || window.event || !1, t && t.srcElement && (t.target = t.srcElement), "pageY" in t || (t.pageX = t.clientX + document.documentElement.scrollLeft, t.pageY = t.clientY + document.documentElement.scrollTop), n.call(o, t) === !1 || i === !1 ? y.cancelEvent(t) : !0
                        })
                    }, this._bind = function(t, e, n, i) {
                        y.events.push({
                            e: t,
                            n: e,
                            f: n,
                            b: i,
                            q: !1
                        }), t.attachEvent ? t.attachEvent("on" + e, n) : t["on" + e] = n
                    }, this.cancelEvent = function(t) {
                        var t = window.event || !1;
                        return t ? (t.cancelBubble = !0, t.cancel = !0, t.returnValue = !1, !1) : !1
                    }, this.stopPropagation = function(t) {
                        var t = window.event || !1;
                        return t ? (t.cancelBubble = !0, !1) : !1
                    }, this._unbind = function(t, e, n, i) {
                        t.detachEvent ? t.detachEvent("on" + e, n) : t["on" + e] = !1
                    }), this.unbindAll = function() {
                        for (var t = 0; t < y.events.length; t++) {
                            var e = y.events[t];
                            e.q ? e.e.unbind(e.n, e.f) : y._unbind(e.e, e.n, e.f, e.b)
                        }
                    }, this.showRail = function() {
                        return 0 == y.page.maxh || !y.ispage && "none" == y.win.css("display") || (y.visibility = !0, y.rail.visibility = !0, y.rail.css("display", "block")), y
                    }, this.showRailHr = function() {
                        return y.railh ? (0 == y.page.maxw || !y.ispage && "none" == y.win.css("display") || (y.railh.visibility = !0, y.railh.css("display", "block")), y) : y
                    }, this.hideRail = function() {
                        return y.visibility = !1, y.rail.visibility = !1, y.rail.css("display", "none"), y
                    }, this.hideRailHr = function() {
                        return y.railh ? (y.railh.visibility = !1, y.railh.css("display", "none"), y) : y
                    }, this.show = function() {
                        return y.hidden = !1, y.railslocked = !1, y.showRail().showRailHr()
                    }, this.hide = function() {
                        return y.hidden = !0, y.railslocked = !0, y.hideRail().hideRailHr()
                    }, this.toggle = function() {
                        return y.hidden ? y.show() : y.hide()
                    }, this.remove = function() {
                        y.stop(), y.cursortimeout && clearTimeout(y.cursortimeout);
                        for (var t in y.delaylist) y.delaylist[t] && h(y.delaylist[t].h);
                        y.doZoomOut(), y.unbindAll(), L.isie9 && y.win[0].detachEvent("onpropertychange", y.onAttributeChange), y.observer !== !1 && y.observer.disconnect(), y.observerremover !== !1 && y.observerremover.disconnect(), y.observerbody !== !1 && y.observerbody.disconnect(), y.events = null, y.cursor && y.cursor.remove(), y.cursorh && y.cursorh.remove(), y.rail && y.rail.remove(), y.railh && y.railh.remove(), y.zoom && y.zoom.remove();
                        for (var e = 0; e < y.saved.css.length; e++) {
                            var n = y.saved.css[e];
                            n[0].css(n[1], void 0 === n[2] ? "" : n[2])
                        }
                        y.saved = !1, y.me.data("__nicescroll", "");
                        var i = d.nicescroll;
                        i.each(function(t) {
                            if (this && this.id === y.id) {
                                delete i[t];
                                for (var e = ++t; e < i.length; e++, t++) i[t] = i[e];
                                i.length--, i.length && delete i[i.length]
                            }
                        });
                        for (var o in y) y[o] = null, delete y[o];
                        y = null
                    }, this.scrollstart = function(t) {
                        return this.onscrollstart = t, y
                    }, this.scrollend = function(t) {
                        return this.onscrollend = t, y
                    }, this.scrollcancel = function(t) {
                        return this.onscrollcancel = t, y
                    }, this.zoomin = function(t) {
                        return this.onzoomin = t, y
                    }, this.zoomout = function(t) {
                        return this.onzoomout = t, y
                    }, this.isScrollable = function(t) {
                        var e = t.target ? t.target : t;
                        if ("OPTION" == e.nodeName) return !0;
                        for (; e && 1 == e.nodeType && !/^BODY|HTML/.test(e.nodeName);) {
                            var n = d(e),
                                i = n.css("overflowY") || n.css("overflowX") || n.css("overflow") || "";
                            if (/scroll|auto/.test(i)) return e.clientHeight != e.scrollHeight;
                            e = e.parentNode ? e.parentNode : !1
                        }
                        return !1
                    }, this.getViewport = function(t) {
                        for (var e = t && t.parentNode ? t.parentNode : !1; e && 1 == e.nodeType && !/^BODY|HTML/.test(e.nodeName);) {
                            var n = d(e);
                            if (/fixed|absolute/.test(n.css("position"))) return n;
                            var i = n.css("overflowY") || n.css("overflowX") || n.css("overflow") || "";
                            if (/scroll|auto/.test(i) && e.clientHeight != e.scrollHeight) return n;
                            if (n.getNiceScroll().length > 0) return n;
                            e = e.parentNode ? e.parentNode : !1
                        }
                        return !1
                    }, this.triggerScrollEnd = function() {
                        if (y.onscrollend) {
                            var t = y.getScrollLeft(),
                                e = y.getScrollTop(),
                                n = {
                                    type: "scrollend",
                                    current: {
                                        x: t,
                                        y: e
                                    },
                                    end: {
                                        x: t,
                                        y: e
                                    }
                                };
                            y.onscrollend.call(y, n)
                        }
                    }, this.onmousewheel = function(t) {
                        if (!y.wheelprevented) {
                            if (y.railslocked) return y.debounced("checkunlock", y.resize, 250), !0;
                            if (y.rail.drag) return y.cancelEvent(t);
                            if ("auto" == y.opt.oneaxismousemode && 0 != t.deltaX && (y.opt.oneaxismousemode = !1), y.opt.oneaxismousemode && 0 == t.deltaX && !y.rail.scrollable) return y.railh && y.railh.scrollable ? y.onmousewheelhr(t) : !0;
                            var e = +new Date,
                                n = !1;
                            if (y.opt.preservenativescrolling && y.checkarea + 600 < e && (y.nativescrollingarea = y.isScrollable(t), n = !0), y.checkarea = e, y.nativescrollingarea) return !0;
                            var i = f(t, !1, n);
                            return i && (y.checkarea = 0), i
                        }
                    }, this.onmousewheelhr = function(t) {
                        if (!y.wheelprevented) {
                            if (y.railslocked || !y.railh.scrollable) return !0;
                            if (y.rail.drag) return y.cancelEvent(t);
                            var e = +new Date,
                                n = !1;
                            return y.opt.preservenativescrolling && y.checkarea + 600 < e && (y.nativescrollingarea = y.isScrollable(t), n = !0), y.checkarea = e, y.nativescrollingarea ? !0 : y.railslocked ? y.cancelEvent(t) : f(t, !0, n)
                        }
                    }, this.stop = function() {
                        return y.cancelScroll(), y.scrollmon && y.scrollmon.stop(), y.cursorfreezed = !1, y.scroll.y = Math.round(y.getScrollTop() * (1 / y.scrollratio.y)), y.noticeCursor(), y
                    }, this.getTransitionSpeed = function(t) {
                        var e = Math.round(10 * y.opt.scrollspeed),
                            n = Math.min(e, Math.round(t / 20 * y.opt.scrollspeed));
                        return n > 20 ? n : 0
                    }, y.opt.smoothscroll ? y.ishwscroll && L.hastransition && y.opt.usetransition && y.opt.smoothscroll ? (this.prepareTransition = function(t, e) {
                        var n = e ? t > 20 ? t : 0 : y.getTransitionSpeed(t),
                            i = n ? L.prefixstyle + "transform " + n + "ms ease-out" : "";
                        return y.lasttransitionstyle && y.lasttransitionstyle == i || (y.lasttransitionstyle = i, y.doc.css(L.transitionstyle, i)), n
                    }, this.doScrollLeft = function(t, e) {
                        var n = y.scrollrunning ? y.newscrolly : y.getScrollTop();
                        y.doScrollPos(t, n, e)
                    }, this.doScrollTop = function(t, e) {
                        var n = y.scrollrunning ? y.newscrollx : y.getScrollLeft();
                        y.doScrollPos(n, t, e)
                    }, this.doScrollPos = function(t, e, n) {
                        var i = y.getScrollTop(),
                            o = y.getScrollLeft();
                        return ((y.newscrolly - i) * (e - i) < 0 || (y.newscrollx - o) * (t - o) < 0) && y.cancelScroll(), 0 == y.opt.bouncescroll && (0 > e ? e = 0 : e > y.page.maxh && (e = y.page.maxh), 0 > t ? t = 0 : t > y.page.maxw && (t = y.page.maxw)), y.scrollrunning && t == y.newscrollx && e == y.newscrolly ? !1 : (y.newscrolly = e, y.newscrollx = t, y.newscrollspeed = n || !1, y.timer ? !1 : void(y.timer = setTimeout(function() {
                            var n = y.getScrollTop(),
                                i = y.getScrollLeft(),
                                o = {};
                            o.x = t - i, o.y = e - n, o.px = i, o.py = n;
                            var s = Math.round(Math.sqrt(Math.pow(o.x, 2) + Math.pow(o.y, 2))),
                                r = y.newscrollspeed && y.newscrollspeed > 1 ? y.newscrollspeed : y.getTransitionSpeed(s);
                            if (y.newscrollspeed && y.newscrollspeed <= 1 && (r *= y.newscrollspeed), y.prepareTransition(r, !0), y.timerscroll && y.timerscroll.tm && clearInterval(y.timerscroll.tm), r > 0) {
                                if (!y.scrollrunning && y.onscrollstart) {
                                    var a = {
                                        type: "scrollstart",
                                        current: {
                                            x: i,
                                            y: n
                                        },
                                        request: {
                                            x: t,
                                            y: e
                                        },
                                        end: {
                                            x: y.newscrollx,
                                            y: y.newscrolly
                                        },
                                        speed: r
                                    };
                                    y.onscrollstart.call(y, a)
                                }
                                L.transitionend ? y.scrollendtrapped || (y.scrollendtrapped = !0, y.bind(y.doc, L.transitionend, y.onScrollTransitionEnd, !1)) : (y.scrollendtrapped && clearTimeout(y.scrollendtrapped), y.scrollendtrapped = setTimeout(y.onScrollTransitionEnd, r));
                                var l = n,
                                    d = i;
                                y.timerscroll = {
                                    bz: new D(l, y.newscrolly, r, 0, 0, .58, 1),
                                    bh: new D(d, y.newscrollx, r, 0, 0, .58, 1)
                                }, y.cursorfreezed || (y.timerscroll.tm = setInterval(function() {
                                    y.showCursor(y.getScrollTop(), y.getScrollLeft())
                                }, 60))
                            }
                            y.synched("doScroll-set", function() {
                                y.timer = 0, y.scrollendtrapped && (y.scrollrunning = !0), y.setScrollTop(y.newscrolly), y.setScrollLeft(y.newscrollx), y.scrollendtrapped || y.onScrollTransitionEnd()
                            })
                        }, 50)))
                    }, this.cancelScroll = function() {
                        if (!y.scrollendtrapped) return !0;
                        var t = y.getScrollTop(),
                            e = y.getScrollLeft();
                        return y.scrollrunning = !1, L.transitionend || clearTimeout(L.transitionend), y.scrollendtrapped = !1, y._unbind(y.doc[0], L.transitionend, y.onScrollTransitionEnd), y.prepareTransition(0), y.setScrollTop(t), y.railh && y.setScrollLeft(e), y.timerscroll && y.timerscroll.tm && clearInterval(y.timerscroll.tm), y.timerscroll = !1, y.cursorfreezed = !1, y.showCursor(t, e), y
                    }, this.onScrollTransitionEnd = function() {
                        y.scrollendtrapped && y._unbind(y.doc[0], L.transitionend, y.onScrollTransitionEnd), y.scrollendtrapped = !1, y.prepareTransition(0), y.timerscroll && y.timerscroll.tm && clearInterval(y.timerscroll.tm), y.timerscroll = !1;
                        var t = y.getScrollTop(),
                            e = y.getScrollLeft();
                        return y.setScrollTop(t), y.railh && y.setScrollLeft(e), y.noticeCursor(!1, t, e), y.cursorfreezed = !1, 0 > t ? t = 0 : t > y.page.maxh && (t = y.page.maxh), 0 > e ? e = 0 : e > y.page.maxw && (e = y.page.maxw), t != y.newscrolly || e != y.newscrollx ? y.doScrollPos(e, t, y.opt.snapbackspeed) : (y.onscrollend && y.scrollrunning && y.triggerScrollEnd(), void(y.scrollrunning = !1))
                    }) : (this.doScrollLeft = function(t, e) {
                        var n = y.scrollrunning ? y.newscrolly : y.getScrollTop();
                        y.doScrollPos(t, n, e)
                    }, this.doScrollTop = function(t, e) {
                        var n = y.scrollrunning ? y.newscrollx : y.getScrollLeft();
                        y.doScrollPos(n, t, e)
                    }, this.doScrollPos = function(t, e, n) {
                        function i() {
                            if (y.cancelAnimationFrame) return !0;
                            if (y.scrollrunning = !0, u = 1 - u) return y.timer = c(i) || 1;
                            var t, e, n = 0,
                                o = e = y.getScrollTop();
                            if (y.dst.ay) {
                                o = y.bzscroll ? y.dst.py + y.bzscroll.getNow() * y.dst.ay : y.newscrolly;
                                var s = o - e;
                                (0 > s && o < y.newscrolly || s > 0 && o > y.newscrolly) && (o = y.newscrolly), y.setScrollTop(o), o == y.newscrolly && (n = 1)
                            } else n = 1;
                            var r = t = y.getScrollLeft();
                            if (y.dst.ax) {
                                r = y.bzscroll ? y.dst.px + y.bzscroll.getNow() * y.dst.ax : y.newscrollx;
                                var s = r - t;
                                (0 > s && r < y.newscrollx || s > 0 && r > y.newscrollx) && (r = y.newscrollx), y.setScrollLeft(r), r == y.newscrollx && (n += 1)
                            } else n += 1;
                            2 == n ? (y.timer = 0, y.cursorfreezed = !1, y.bzscroll = !1, y.scrollrunning = !1, 0 > o ? o = 0 : o > y.page.maxh && (o = Math.max(0, y.page.maxh)), 0 > r ? r = 0 : r > y.page.maxw && (r = y.page.maxw), r != y.newscrollx || o != y.newscrolly ? y.doScrollPos(r, o) : y.onscrollend && y.triggerScrollEnd()) : y.timer = c(i) || 1
                        }
                        var e = void 0 === e || e === !1 ? y.getScrollTop(!0) : e;
                        if (y.timer && y.newscrolly == e && y.newscrollx == t) return !0;
                        y.timer && h(y.timer), y.timer = 0;
                        var o = y.getScrollTop(),
                            s = y.getScrollLeft();
                        ((y.newscrolly - o) * (e - o) < 0 || (y.newscrollx - s) * (t - s) < 0) && y.cancelScroll(), y.newscrolly = e, y.newscrollx = t, y.bouncescroll && y.rail.visibility || (y.newscrolly < 0 ? y.newscrolly = 0 : y.newscrolly > y.page.maxh && (y.newscrolly = y.page.maxh)), y.bouncescroll && y.railh.visibility || (y.newscrollx < 0 ? y.newscrollx = 0 : y.newscrollx > y.page.maxw && (y.newscrollx = y.page.maxw)), y.dst = {}, y.dst.x = t - s, y.dst.y = e - o, y.dst.px = s, y.dst.py = o;
                        var r = Math.round(Math.sqrt(Math.pow(y.dst.x, 2) + Math.pow(y.dst.y, 2)));
                        y.dst.ax = y.dst.x / r, y.dst.ay = y.dst.y / r;
                        var a = 0,
                            l = r;
                        0 == y.dst.x ? (a = o, l = e, y.dst.ay = 1, y.dst.py = 0) : 0 == y.dst.y && (a = s, l = t, y.dst.ax = 1, y.dst.px = 0);
                        var d = y.getTransitionSpeed(r);
                        if (n && 1 >= n && (d *= n), d > 0 ? y.bzscroll = y.bzscroll ? y.bzscroll.update(l, d) : new D(a, l, d, 0, 1, 0, 1) : y.bzscroll = !1, !y.timer) {
                            (o == y.page.maxh && e >= y.page.maxh || s == y.page.maxw && t >= y.page.maxw) && y.checkContentSize();
                            var u = 1;
                            if (y.cancelAnimationFrame = !1, y.timer = 1, y.onscrollstart && !y.scrollrunning) {
                                var p = {
                                    type: "scrollstart",
                                    current: {
                                        x: s,
                                        y: o
                                    },
                                    request: {
                                        x: t,
                                        y: e
                                    },
                                    end: {
                                        x: y.newscrollx,
                                        y: y.newscrolly
                                    },
                                    speed: d
                                };
                                y.onscrollstart.call(y, p)
                            }
                            i(), (o == y.page.maxh && e >= o || s == y.page.maxw && t >= s) && y.checkContentSize(), y.noticeCursor()
                        }
                    }, this.cancelScroll = function() {
                        return y.timer && h(y.timer), y.timer = 0, y.bzscroll = !1, y.scrollrunning = !1, y
                    }) : (this.doScrollLeft = function(t, e) {
                        var n = y.getScrollTop();
                        y.doScrollPos(t, n, e)
                    }, this.doScrollTop = function(t, e) {
                        var n = y.getScrollLeft();
                        y.doScrollPos(n, t, e)
                    }, this.doScrollPos = function(t, e, n) {
                        var i = t > y.page.maxw ? y.page.maxw : t;
                        0 > i && (i = 0);
                        var o = e > y.page.maxh ? y.page.maxh : e;
                        0 > o && (o = 0), y.synched("scroll", function() {
                            y.setScrollTop(o), y.setScrollLeft(i)
                        })
                    }, this.cancelScroll = function() {}), this.doScrollBy = function(t, e) {
                        var n = 0;
                        if (e) n = Math.floor((y.scroll.y - t) * y.scrollratio.y);
                        else {
                            var i = y.timer ? y.newscrolly : y.getScrollTop(!0);
                            n = i - t
                        }
                        if (y.bouncescroll) {
                            var o = Math.round(y.view.h / 2); - o > n ? n = -o : n > y.page.maxh + o && (n = y.page.maxh + o)
                        }
                        y.cursorfreezed = !1;
                        var s = y.getScrollTop(!0);
                        return 0 > n && 0 >= s ? y.noticeCursor() : n > y.page.maxh && s >= y.page.maxh ? (y.checkContentSize(), y.noticeCursor()) : void y.doScrollTop(n)
                    }, this.doScrollLeftBy = function(t, e) {
                        var n = 0;
                        if (e) n = Math.floor((y.scroll.x - t) * y.scrollratio.x);
                        else {
                            var i = y.timer ? y.newscrollx : y.getScrollLeft(!0);
                            n = i - t
                        }
                        if (y.bouncescroll) {
                            var o = Math.round(y.view.w / 2); - o > n ? n = -o : n > y.page.maxw + o && (n = y.page.maxw + o)
                        }
                        y.cursorfreezed = !1;
                        var s = y.getScrollLeft(!0);
                        return 0 > n && 0 >= s ? y.noticeCursor() : n > y.page.maxw && s >= y.page.maxw ? y.noticeCursor() : void y.doScrollLeft(n)
                    }, this.doScrollTo = function(t, e) {
                        var n = e ? Math.round(t * y.scrollratio.y) : t;
                        0 > n ? n = 0 : n > y.page.maxh && (n = y.page.maxh), y.cursorfreezed = !1, y.doScrollTop(t)
                    }, this.checkContentSize = function() {
                        var t = y.getContentSize();
                        t.h == y.page.h && t.w == y.page.w || y.resize(!1, t)
                    }, y.onscroll = function(t) {
                        y.rail.drag || y.cursorfreezed || y.synched("scroll", function() {
                            y.scroll.y = Math.round(y.getScrollTop() * (1 / y.scrollratio.y)), y.railh && (y.scroll.x = Math.round(y.getScrollLeft() * (1 / y.scrollratio.x))), y.noticeCursor()
                        })
                    }, y.bind(y.docscroll, "scroll", y.onscroll), this.doZoomIn = function(t) {
                        if (!y.zoomactive) {
                            y.zoomactive = !0, y.zoomrestore = {
                                style: {}
                            };
                            var e = ["position", "top", "left", "zIndex", "backgroundColor", "marginTop", "marginBottom", "marginLeft", "marginRight"],
                                n = y.win[0].style;
                            for (var i in e) {
                                var o = e[i];
                                y.zoomrestore.style[o] = void 0 !== n[o] ? n[o] : ""
                            }
                            y.zoomrestore.style.width = y.win.css("width"), y.zoomrestore.style.height = y.win.css("height"), y.zoomrestore.padding = {
                                w: y.win.outerWidth() - y.win.width(),
                                h: y.win.outerHeight() - y.win.height()
                            }, L.isios4 && (y.zoomrestore.scrollTop = d(window).scrollTop(), d(window).scrollTop(0)), y.win.css({
                                position: L.isios4 ? "absolute" : "fixed",
                                top: 0,
                                left: 0,
                                zIndex: l + 100,
                                margin: 0
                            });
                            var s = y.win.css("backgroundColor");
                            return ("" == s || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(s)) && y.win.css("backgroundColor", "#fff"), y.rail.css({
                                zIndex: l + 101
                            }), y.zoom.css({
                                zIndex: l + 102
                            }), y.zoom.css("backgroundPosition", "0px -18px"), y.resizeZoom(), y.onzoomin && y.onzoomin.call(y), y.cancelEvent(t)
                        }
                    }, this.doZoomOut = function(t) {
                        return y.zoomactive ? (y.zoomactive = !1, y.win.css("margin", ""), y.win.css(y.zoomrestore.style), L.isios4 && d(window).scrollTop(y.zoomrestore.scrollTop), y.rail.css({
                            "z-index": y.zindex
                        }), y.zoom.css({
                            "z-index": y.zindex
                        }), y.zoomrestore = !1, y.zoom.css("backgroundPosition", "0px 0px"), y.onResize(), y.onzoomout && y.onzoomout.call(y), y.cancelEvent(t)) : void 0
                    }, this.doZoom = function(t) {
                        return y.zoomactive ? y.doZoomOut(t) : y.doZoomIn(t)
                    }, this.resizeZoom = function() {
                        if (y.zoomactive) {
                            var t = y.getScrollTop();
                            y.win.css({
                                width: d(window).width() - y.zoomrestore.padding.w + "px",
                                height: d(window).height() - y.zoomrestore.padding.h + "px"
                            }), y.onResize(), y.setScrollTop(Math.min(y.page.maxh, t))
                        }
                    }, this.init(), d.nicescroll.push(this)
                },
                b = function(t) {
                    var e = this;
                    this.nc = t, this.lastx = 0, this.lasty = 0, this.speedx = 0, this.speedy = 0, this.lasttime = 0, this.steptime = 0, this.snapx = !1, this.snapy = !1, this.demulx = 0, this.demuly = 0, this.lastscrollx = -1, this.lastscrolly = -1, this.chkx = 0, this.chky = 0, this.timer = 0, this.time = function() {
                        return +new Date
                    }, this.reset = function(t, n) {
                        e.stop();
                        var i = e.time();
                        e.steptime = 0, e.lasttime = i, e.speedx = 0, e.speedy = 0, e.lastx = t, e.lasty = n, e.lastscrollx = -1, e.lastscrolly = -1
                    }, this.update = function(t, n) {
                        var i = e.time();
                        e.steptime = i - e.lasttime, e.lasttime = i;
                        var o = n - e.lasty,
                            s = t - e.lastx,
                            r = e.nc.getScrollTop(),
                            a = e.nc.getScrollLeft(),
                            l = r + o,
                            d = a + s;
                        e.snapx = 0 > d || d > e.nc.page.maxw, e.snapy = 0 > l || l > e.nc.page.maxh, e.speedx = s, e.speedy = o, e.lastx = t, e.lasty = n
                    }, this.stop = function() {
                        e.nc.unsynched("domomentum2d"), e.timer && clearTimeout(e.timer), e.timer = 0, e.lastscrollx = -1, e.lastscrolly = -1
                    }, this.doSnapy = function(t, n) {
                        var i = !1;
                        0 > n ? (n = 0, i = !0) : n > e.nc.page.maxh && (n = e.nc.page.maxh, i = !0), 0 > t ? (t = 0, i = !0) : t > e.nc.page.maxw && (t = e.nc.page.maxw, i = !0), i ? e.nc.doScrollPos(t, n, e.nc.opt.snapbackspeed) : e.nc.triggerScrollEnd()
                    }, this.doMomentum = function(t) {
                        var n = e.time(),
                            i = t ? n + t : e.lasttime,
                            o = e.nc.getScrollLeft(),
                            s = e.nc.getScrollTop(),
                            r = e.nc.page.maxh,
                            a = e.nc.page.maxw;
                        e.speedx = a > 0 ? Math.min(60, e.speedx) : 0, e.speedy = r > 0 ? Math.min(60, e.speedy) : 0;
                        var l = i && 60 >= n - i;
                        (0 > s || s > r || 0 > o || o > a) && (l = !1);
                        var d = e.speedy && l ? e.speedy : !1,
                            u = e.speedx && l ? e.speedx : !1;
                        if (d || u) {
                            var c = Math.max(16, e.steptime);
                            if (c > 50) {
                                var h = c / 50;
                                e.speedx *= h, e.speedy *= h, c = 50
                            }
                            e.demulxy = 0, e.lastscrollx = e.nc.getScrollLeft(), e.chkx = e.lastscrollx, e.lastscrolly = e.nc.getScrollTop(), e.chky = e.lastscrolly;
                            var p = e.lastscrollx,
                                f = e.lastscrolly,
                                m = function _() {
                                    var t = e.time() - n > 600 ? .04 : .02;
                                    e.speedx && (p = Math.floor(e.lastscrollx - e.speedx * (1 - e.demulxy)), e.lastscrollx = p, (0 > p || p > a) && (t = .1)), e.speedy && (f = Math.floor(e.lastscrolly - e.speedy * (1 - e.demulxy)), e.lastscrolly = f, (0 > f || f > r) && (t = .1)), e.demulxy = Math.min(1, e.demulxy + t), e.nc.synched("domomentum2d", function() {
                                        if (e.speedx) {
                                            e.nc.getScrollLeft();
                                            e.chkx = p, e.nc.setScrollLeft(p)
                                        }
                                        if (e.speedy) {
                                            e.nc.getScrollTop();
                                            e.chky = f, e.nc.setScrollTop(f)
                                        }
                                        e.timer || (e.nc.hideCursor(), e.doSnapy(p, f))
                                    }), e.demulxy < 1 ? e.timer = setTimeout(_, c) : (e.stop(), e.nc.hideCursor(), e.doSnapy(p, f))
                                };
                            m()
                        } else e.doSnapy(e.nc.getScrollLeft(), e.nc.getScrollTop())
                    }
                },
                M = t.fn.scrollTop;
            t.cssHooks.pageYOffset = {
                get: function(t, e, n) {
                    var i = d.data(t, "__nicescroll") || !1;
                    return i && i.ishwscroll ? i.getScrollTop() : M.call(t)
                },
                set: function(t, e) {
                    var n = d.data(t, "__nicescroll") || !1;
                    return n && n.ishwscroll ? n.setScrollTop(parseInt(e)) : M.call(t, e), this
                }
            }, t.fn.scrollTop = function(t) {
                if (void 0 === t) {
                    var e = this[0] ? d.data(this[0], "__nicescroll") || !1 : !1;
                    return e && e.ishwscroll ? e.getScrollTop() : M.call(this)
                }
                return this.each(function() {
                    var e = d.data(this, "__nicescroll") || !1;
                    e && e.ishwscroll ? e.setScrollTop(parseInt(t)) : M.call(d(this), t)
                })
            };
            var w = t.fn.scrollLeft;
            d.cssHooks.pageXOffset = {
                get: function(t, e, n) {
                    var i = d.data(t, "__nicescroll") || !1;
                    return i && i.ishwscroll ? i.getScrollLeft() : w.call(t)
                },
                set: function(t, e) {
                    var n = d.data(t, "__nicescroll") || !1;
                    return n && n.ishwscroll ? n.setScrollLeft(parseInt(e)) : w.call(t, e), this
                }
            }, t.fn.scrollLeft = function(t) {
                if (void 0 === t) {
                    var e = this[0] ? d.data(this[0], "__nicescroll") || !1 : !1;
                    return e && e.ishwscroll ? e.getScrollLeft() : w.call(this)
                }
                return this.each(function() {
                    var e = d.data(this, "__nicescroll") || !1;
                    e && e.ishwscroll ? e.setScrollLeft(parseInt(t)) : w.call(d(this), t)
                })
            };
            var L = function(t) {
                var e = this;
                if (this.length = 0, this.name = "nicescrollarray", this.each = function(t) {
                        return d.each(e, t), e
                    }, this.push = function(t) {
                        e[e.length] = t, e.length++
                    }, this.eq = function(t) {
                        return e[t]
                    }, t)
                    for (var n = 0; n < t.length; n++) {
                        var i = d.data(t[n], "__nicescroll") || !1;
                        i && (this[this.length] = i, this.length++)
                    }
                return this
            };
            n(L.prototype, ["show", "hide", "toggle", "onResize", "resize", "remove", "stop", "doScrollPos"], function(t, e) {
                t[e] = function() {
                    var t = arguments;
                    return this.each(function() {
                        this[e].apply(this, t)
                    })
                }
            }), t.fn.getNiceScroll = function(t) {
                return void 0 === t ? new L(this) : this[t] && d.data(this[t], "__nicescroll") || !1
            }, t.expr[":"].nicescroll = function(t) {
                return void 0 !== d.data(t, "__nicescroll")
            }, d.fn.niceScroll = function(t, e) {
                void 0 !== e || "object" != ("undefined" == typeof t ? "undefined" : r(t)) || "jquery" in t || (e = t, t = !1), e = d.extend({}, e);
                var n = new L;
                void 0 === e && (e = {}), t && (e.doc = d(t), e.win = d(this));
                var i = !("doc" in e);
                return i || "win" in e || (e.win = d(this)), this.each(function() {
                    var t = d(this).data("__nicescroll") || !1;
                    t || (e.doc = i ? d(this) : e.doc, t = new v(e, d(this)), d(this).data("__nicescroll", t)), n.push(t)
                }), 1 == n.length ? n[0] : n
            }, window.NiceScroll = {
                getjQuery: function() {
                    return t
                }
            }, d.nicescroll || (d.nicescroll = new L, d.nicescroll.options = _)
        })
    }).call(window)
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    n(15), n(15);
    (function() {
        ! function(r) {
            o = [n(15)], i = r, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s))
        }(function(t) {
            var e = Array.prototype.slice,
                n = Array.prototype.splice,
                i = {
                    topSpacing: 0,
                    bottomSpacing: 0,
                    className: "is-sticky",
                    wrapperClassName: "sticky-wrapper",
                    center: !1,
                    getWidthFrom: "",
                    widthFromWrapper: !0,
                    responsiveWidth: !1,
                    zIndex: "auto"
                },
                o = t(window),
                s = t(document),
                a = [],
                l = o.height(),
                d = function() {
                    for (var e = o.scrollTop(), n = s.height(), i = n - l, r = e > i ? i - e : 0, d = 0, u = a.length; u > d; d++) {
                        var c = a[d],
                            h = c.stickyWrapper.offset().top,
                            p = h - c.topSpacing - r;
                        if (c.stickyWrapper.css("height", c.stickyElement.outerHeight()), p >= e) null !== c.currentTop && (c.stickyElement.css({
                            width: "",
                            position: "",
                            top: "",
                            "z-index": ""
                        }), c.stickyElement.parent().removeClass(c.className), c.stickyElement.trigger("sticky-end", [c]), c.currentTop = null);
                        else {
                            var f = n - c.stickyElement.outerHeight() - c.topSpacing - c.bottomSpacing - e - r;
                            if (0 > f ? f += c.topSpacing : f = c.topSpacing, c.currentTop !== f) {
                                var m;
                                c.getWidthFrom ? m = t(c.getWidthFrom).width() || null : c.widthFromWrapper && (m = c.stickyWrapper.width()), null == m && (m = c.stickyElement.width()), c.stickyElement.css("width", m).css("position", "fixed").css("top", f).css("z-index", c.zIndex), c.stickyElement.parent().addClass(c.className), null === c.currentTop ? c.stickyElement.trigger("sticky-start", [c]) : c.stickyElement.trigger("sticky-update", [c]), c.currentTop === c.topSpacing && c.currentTop > f || null === c.currentTop && f < c.topSpacing ? c.stickyElement.trigger("sticky-bottom-reached", [c]) : null !== c.currentTop && f === c.topSpacing && c.currentTop < f && c.stickyElement.trigger("sticky-bottom-unreached", [c]), c.currentTop = f
                            }
                            var _ = c.stickyWrapper.parent(),
                                y = c.stickyElement.offset().top + c.stickyElement.outerHeight() >= _.offset().top + _.outerHeight() && c.stickyElement.offset().top <= c.topSpacing;
                            y ? c.stickyElement.css("position", "absolute").css("top", "").css("bottom", 0).css("z-index", "") : c.stickyElement.css("position", "fixed").css("top", f).css("bottom", "").css("z-index", c.zIndex)
                        }
                    }
                },
                u = function() {
                    l = o.height();
                    for (var e = 0, n = a.length; n > e; e++) {
                        var i = a[e],
                            s = null;
                        i.getWidthFrom ? i.responsiveWidth && (s = t(i.getWidthFrom).width()) : i.widthFromWrapper && (s = i.stickyWrapper.width()), null != s && i.stickyElement.css("width", s)
                    }
                },
                c = {
                    init: function(e) {
                        var n = t.extend({}, i, e);
                        return this.each(function() {
                            var e = t(this),
                                o = e.attr("id"),
                                s = o ? o + "-" + i.wrapperClassName : i.wrapperClassName,
                                r = t("<div></div>").attr("id", s).addClass(n.wrapperClassName);
                            e.wrapAll(r);
                            var l = e.parent();
                            n.center && l.css({
                                width: e.outerWidth(),
                                marginLeft: "auto",
                                marginRight: "auto"
                            }), "right" === e.css("float") && e.css({
                                "float": "none"
                            }).parent().css({
                                "float": "right"
                            }), n.stickyElement = e, n.stickyWrapper = l, n.currentTop = null, a.push(n), c.setWrapperHeight(this), c.setupChangeListeners(this)
                        })
                    },
                    setWrapperHeight: function(e) {
                        var n = t(e),
                            i = n.parent();
                        i && i.css("height", n.outerHeight())
                    },
                    setupChangeListeners: function(t) {
                        if (window.MutationObserver) {
                            var e = new window.MutationObserver(function(e) {
                                (e[0].addedNodes.length || e[0].removedNodes.length) && c.setWrapperHeight(t)
                            });
                            e.observe(t, {
                                subtree: !0,
                                childList: !0
                            })
                        } else t.addEventListener("DOMNodeInserted", function() {
                            c.setWrapperHeight(t)
                        }, !1), t.addEventListener("DOMNodeRemoved", function() {
                            c.setWrapperHeight(t)
                        }, !1)
                    },
                    update: d,
                    unstick: function(e) {
                        return this.each(function() {
                            for (var e = this, i = t(e), o = -1, s = a.length; s-- > 0;) a[s].stickyElement.get(0) === e && (n.call(a, s, 1), o = s); - 1 !== o && (i.unwrap(), i.css({
                                width: "",
                                position: "",
                                top: "",
                                "float": "",
                                "z-index": ""
                            }))
                        })
                    }
                };
            window.addEventListener ? (window.addEventListener("scroll", d, !1), window.addEventListener("resize", u, !1)) : window.attachEvent && (window.attachEvent("onscroll", d), window.attachEvent("onresize", u)), t.fn.sticky = function(n) {
                return c[n] ? c[n].apply(this, e.call(arguments, 1)) : "object" !== ("undefined" == typeof n ? "undefined" : r(n)) && n ? void t.error("Method " + n + " does not exist on jQuery.sticky") : c.init.apply(this, arguments)
            }, t.fn.unstick = function(n) {
                return c[n] ? c[n].apply(this, e.call(arguments, 1)) : "object" !== ("undefined" == typeof n ? "undefined" : r(n)) && n ? void t.error("Method " + n + " does not exist on jQuery.sticky") : c.unstick.apply(this, arguments)
            }, t(function() {
                setTimeout(d, 0)
            })
        })
    }).call(window)
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    n(15), n(15);
    (function() {
        ! function(r) {
            o = [n(15)], i = r, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s))
        }(function(t) {
            function e(t, e) {
                return t.toFixed(e.decimals)
            }
            var n = function i(e, n) {
                this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, this.dataOptions(), n), this.init()
            };
            n.DEFAULTS = {
                from: 0,
                to: 0,
                speed: 1e3,
                refreshInterval: 100,
                decimals: 0,
                formatter: e,
                onUpdate: null,
                onComplete: null
            }, n.prototype.init = function() {
                this.value = this.options.from, this.loops = Math.ceil(this.options.speed / this.options.refreshInterval), this.loopCount = 0, this.increment = (this.options.to - this.options.from) / this.loops
            }, n.prototype.dataOptions = function() {
                var t = {
                        from: this.$element.data("from"),
                        to: this.$element.data("to"),
                        speed: this.$element.data("speed"),
                        refreshInterval: this.$element.data("refresh-interval"),
                        decimals: this.$element.data("decimals")
                    },
                    e = Object.keys(t);
                for (var n in e) {
                    var i = e[n];
                    "undefined" == typeof t[i] && delete t[i]
                }
                return t
            }, n.prototype.update = function() {
                this.value += this.increment, this.loopCount++, this.render(), "function" == typeof this.options.onUpdate && this.options.onUpdate.call(this.$element, this.value), this.loopCount >= this.loops && (clearInterval(this.interval), this.value = this.options.to, "function" == typeof this.options.onComplete && this.options.onComplete.call(this.$element, this.value))
            }, n.prototype.render = function() {
                var t = this.options.formatter.call(this.$element, this.value, this.options);
                this.$element.text(t)
            }, n.prototype.restart = function() {
                this.stop(), this.init(), this.start()
            }, n.prototype.start = function() {
                this.stop(), this.render(), this.interval = setInterval(this.update.bind(this), this.options.refreshInterval)
            }, n.prototype.stop = function() {
                this.interval && clearInterval(this.interval)
            }, n.prototype.toggle = function() {
                this.interval ? this.stop() : this.start()
            }, t.fn.countTo = function(e) {
                return this.each(function() {
                    var i = t(this),
                        o = i.data("countTo"),
                        s = !o || "object" === ("undefined" == typeof e ? "undefined" : r(e)),
                        a = "object" === ("undefined" == typeof e ? "undefined" : r(e)) ? e : {},
                        l = "string" == typeof e ? e : "start";
                    s && (o && o.stop(), i.data("countTo", o = new n(this, a))), o[l].call(o)
                })
            }
        })
    }).call(window)
}, function(t, e, n) {
    var i, o, s;
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    }, n(15), n(15);
    (function() {
        ! function(r) {
            o = [n(15)], i = r, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s))
        }(function(t) {
            function e() {
                var e, n, i = {
                    height: d.innerHeight,
                    width: d.innerWidth
                };
                return i.height || (e = l.compatMode, !e && t.support.boxModel || (n = "CSS1Compat" === e ? u : l.body, i = {
                    height: n.clientHeight,
                    width: n.clientWidth
                })), i
            }

            function n() {
                return {
                    top: d.pageYOffset || u.scrollTop || l.body.scrollTop,
                    left: d.pageXOffset || u.scrollLeft || l.body.scrollLeft
                }
            }

            function i() {
                if (a.length) {
                    var i = 0,
                        r = t.map(a, function(t) {
                            var e = t.data.selector,
                                n = t.$element;
                            return e ? n.find(e) : n
                        });
                    for (o = o || e(), s = s || n(); i < a.length; i++)
                        if (t.contains(u, r[i][0])) {
                            var l = t(r[i]),
                                d = {
                                    height: l[0].offsetHeight,
                                    width: l[0].offsetWidth
                                },
                                c = l.offset(),
                                h = l.data("inview");
                            if (!s || !o) return;
                            c.top + d.height > s.top && c.top < s.top + o.height && c.left + d.width > s.left && c.left < s.left + o.width ? h || l.data("inview", !0).trigger("inview", [!0]) : h && l.data("inview", !1).trigger("inview", [!1])
                        }
                }
            }
            var o, s, r, a = [],
                l = document,
                d = window,
                u = l.documentElement;
            t.event.special.inview = {
                add: function(e) {
                    a.push({
                        data: e,
                        $element: t(this),
                        element: this
                    }), !r && a.length && (r = setInterval(i, 250))
                },
                remove: function(t) {
                    for (var e = 0; e < a.length; e++) {
                        var n = a[e];
                        if (n.element === this && n.data.guid === t.guid) {
                            a.splice(e, 1);
                            break
                        }
                    }
                    a.length || (clearInterval(r), r = null)
                }
            }, t(d).on("scroll resize scrollstop", function() {
                o = s = null
            }), !u.addEventListener && u.attachEvent && u.attachEvent("onfocusin", function() {
                s = null
            })
        })
    }).call(window)
}, function(t, e, n) {
    var i, o, s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    /**
     * @version: 2.1.19
     * @author: Dan Grossman http://www.dangrossman.info/
     * @copyright: Copyright (c) 2012-2015 Dan Grossman. All rights reserved.
     * @license: Licensed under the MIT license. See http://www.opensource.org/licenses/mit-license.php
     * @website: https://www.improvely.com/
     */
    ! function(s, r) {
        i = [n(30), n(15), e], o = function(t, e, n) {
            s.daterangepicker = r(s, n, t, e)
        }.apply(e, i), !(void 0 !== o && (t.exports = o))
    }({}, function(t, e, n, i) {
        var o = function(t, e, o) {
            if (this.parentEl = "body", this.element = i(t), this.startDate = n().startOf("day"), this.endDate = n().endOf("day"), this.minDate = !1, this.maxDate = !1, this.dateLimit = !1, this.autoApply = !1, this.singleDatePicker = !1, this.showDropdowns = !1, this.showWeekNumbers = !1, this.showISOWeekNumbers = !1, this.timePicker = !1, this.timePicker24Hour = !1, this.timePickerIncrement = 1, this.timePickerSeconds = !1, this.linkedCalendars = !0, this.autoUpdateInput = !0, this.alwaysShowCalendars = !1, this.ranges = {}, this.opens = "right", this.element.hasClass("pull-right") && (this.opens = "left"), this.drops = "down", this.element.hasClass("dropup") && (this.drops = "up"), this.buttonClasses = "btn btn-sm", this.applyClass = "btn-success", this.cancelClass = "btn-default", this.locale = {
                    format: "MM/DD/YYYY",
                    separator: " - ",
                    applyLabel: "Apply",
                    cancelLabel: "Cancel",
                    weekLabel: "W",
                    customRangeLabel: "Custom Range",
                    daysOfWeek: n.weekdaysMin(),
                    monthNames: n.monthsShort(),
                    firstDay: n.localeData().firstDayOfWeek()
                }, this.callback = function() {}, this.isShowing = !1, this.leftCalendar = {}, this.rightCalendar = {}, "object" === ("undefined" == typeof e ? "undefined" : s(e)) && null !== e || (e = {}), e = i.extend(this.element.data(), e), "string" == typeof e.template || e.template instanceof i || (e.template = '<div class="daterangepicker dropdown-menu"><div class="calendar left"><div class="daterangepicker_input"><input class="input-mini" type="text" name="daterangepicker_start" value="" /><i class="fa fa-calendar glyphicon glyphicon-calendar"></i><div class="calendar-time"><div></div><i class="fa fa-clock-o glyphicon glyphicon-time"></i></div></div><div class="calendar-table"></div></div><div class="calendar right"><div class="daterangepicker_input"><input class="input-mini" type="text" name="daterangepicker_end" value="" /><i class="fa fa-calendar glyphicon glyphicon-calendar"></i><div class="calendar-time"><div></div><i class="fa fa-clock-o glyphicon glyphicon-time"></i></div></div><div class="calendar-table"></div></div><div class="ranges"><div class="range_inputs"><button class="applyBtn" disabled="disabled" type="button"></button> <button class="cancelBtn" type="button"></button></div></div></div>'), this.parentEl = i(e.parentEl && i(e.parentEl).length ? e.parentEl : this.parentEl), this.container = i(e.template).appendTo(this.parentEl), "object" === s(e.locale) && ("string" == typeof e.locale.format && (this.locale.format = e.locale.format), "string" == typeof e.locale.separator && (this.locale.separator = e.locale.separator), "object" === s(e.locale.daysOfWeek) && (this.locale.daysOfWeek = e.locale.daysOfWeek.slice()), "object" === s(e.locale.monthNames) && (this.locale.monthNames = e.locale.monthNames.slice()), "number" == typeof e.locale.firstDay && (this.locale.firstDay = e.locale.firstDay), "string" == typeof e.locale.applyLabel && (this.locale.applyLabel = e.locale.applyLabel), "string" == typeof e.locale.cancelLabel && (this.locale.cancelLabel = e.locale.cancelLabel), "string" == typeof e.locale.weekLabel && (this.locale.weekLabel = e.locale.weekLabel), "string" == typeof e.locale.customRangeLabel && (this.locale.customRangeLabel = e.locale.customRangeLabel)), "string" == typeof e.startDate && (this.startDate = n(e.startDate, this.locale.format)), "string" == typeof e.endDate && (this.endDate = n(e.endDate, this.locale.format)), "string" == typeof e.minDate && (this.minDate = n(e.minDate, this.locale.format)), "string" == typeof e.maxDate && (this.maxDate = n(e.maxDate, this.locale.format)), "object" === s(e.startDate) && (this.startDate = n(e.startDate)), "object" === s(e.endDate) && (this.endDate = n(e.endDate)), "object" === s(e.minDate) && (this.minDate = n(e.minDate)), "object" === s(e.maxDate) && (this.maxDate = n(e.maxDate)), this.minDate && this.startDate.isBefore(this.minDate) && (this.startDate = this.minDate.clone()), this.maxDate && this.endDate.isAfter(this.maxDate) && (this.endDate = this.maxDate.clone()), "string" == typeof e.applyClass && (this.applyClass = e.applyClass), "string" == typeof e.cancelClass && (this.cancelClass = e.cancelClass), "object" === s(e.dateLimit) && (this.dateLimit = e.dateLimit), "string" == typeof e.opens && (this.opens = e.opens), "string" == typeof e.drops && (this.drops = e.drops), "boolean" == typeof e.showWeekNumbers && (this.showWeekNumbers = e.showWeekNumbers), "boolean" == typeof e.showISOWeekNumbers && (this.showISOWeekNumbers = e.showISOWeekNumbers), "string" == typeof e.buttonClasses && (this.buttonClasses = e.buttonClasses), "object" === s(e.buttonClasses) && (this.buttonClasses = e.buttonClasses.join(" ")), "boolean" == typeof e.showDropdowns && (this.showDropdowns = e.showDropdowns), "boolean" == typeof e.singleDatePicker && (this.singleDatePicker = e.singleDatePicker, this.singleDatePicker && (this.endDate = this.startDate.clone())), "boolean" == typeof e.timePicker && (this.timePicker = e.timePicker), "boolean" == typeof e.timePickerSeconds && (this.timePickerSeconds = e.timePickerSeconds), "number" == typeof e.timePickerIncrement && (this.timePickerIncrement = e.timePickerIncrement), "boolean" == typeof e.timePicker24Hour && (this.timePicker24Hour = e.timePicker24Hour), "boolean" == typeof e.autoApply && (this.autoApply = e.autoApply), "boolean" == typeof e.autoUpdateInput && (this.autoUpdateInput = e.autoUpdateInput), "boolean" == typeof e.linkedCalendars && (this.linkedCalendars = e.linkedCalendars), "function" == typeof e.isInvalidDate && (this.isInvalidDate = e.isInvalidDate), "boolean" == typeof e.alwaysShowCalendars && (this.alwaysShowCalendars = e.alwaysShowCalendars), 0 != this.locale.firstDay)
                for (var r = this.locale.firstDay; r > 0;) this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift()), r--;
            var a, l, d;
            if ("undefined" == typeof e.startDate && "undefined" == typeof e.endDate && i(this.element).is("input[type=text]")) {
                var u = i(this.element).val(),
                    c = u.split(this.locale.separator);
                a = l = null, 2 == c.length ? (a = n(c[0], this.locale.format), l = n(c[1], this.locale.format)) : this.singleDatePicker && "" !== u && (a = n(u, this.locale.format), l = n(u, this.locale.format)), null !== a && null !== l && (this.setStartDate(a), this.setEndDate(l))
            }
            if ("object" === s(e.ranges)) {
                for (d in e.ranges) {
                    a = "string" == typeof e.ranges[d][0] ? n(e.ranges[d][0], this.locale.format) : n(e.ranges[d][0]), l = "string" == typeof e.ranges[d][1] ? n(e.ranges[d][1], this.locale.format) : n(e.ranges[d][1]), this.minDate && a.isBefore(this.minDate) && (a = this.minDate.clone());
                    var h = this.maxDate;
                    if (this.dateLimit && a.clone().add(this.dateLimit).isAfter(h) && (h = a.clone().add(this.dateLimit)), h && l.isAfter(h) && (l = h.clone()), !(this.minDate && l.isBefore(this.minDate) || h && a.isAfter(h))) {
                        var p = document.createElement("textarea");
                        p.innerHTML = d;
                        var f = p.value;
                        this.ranges[f] = [a, l]
                    }
                }
                var m = "<ul>";
                for (d in this.ranges) m += "<li>" + d + "</li>";
                m += "<li>" + this.locale.customRangeLabel + "</li>", m += "</ul>", this.container.find(".ranges").prepend(m)
            }
            if ("function" == typeof o && (this.callback = o), this.timePicker || (this.startDate = this.startDate.startOf("day"), this.endDate = this.endDate.endOf("day"), this.container.find(".calendar-time").hide()), this.timePicker && this.autoApply && (this.autoApply = !1), this.autoApply && "object" !== s(e.ranges) ? this.container.find(".ranges").hide() : this.autoApply && this.container.find(".applyBtn, .cancelBtn").addClass("hide"), this.singleDatePicker && (this.container.addClass("single"), this.container.find(".calendar.left").addClass("single"), this.container.find(".calendar.left").show(), this.container.find(".calendar.right").hide(), this.container.find(".daterangepicker_input input, .daterangepicker_input i").hide(), this.timePicker || this.container.find(".ranges").hide()), ("undefined" == typeof e.ranges && !this.singleDatePicker || this.alwaysShowCalendars) && this.container.addClass("show-calendar"), this.container.addClass("opens" + this.opens), "undefined" != typeof e.ranges && "right" == this.opens) {
                var _ = this.container.find(".ranges"),
                    y = _.clone();
                _.remove(), this.container.find(".calendar.left").parent().prepend(y)
            }
            this.container.find(".applyBtn, .cancelBtn").addClass(this.buttonClasses), this.applyClass.length && this.container.find(".applyBtn").addClass(this.applyClass), this.cancelClass.length && this.container.find(".cancelBtn").addClass(this.cancelClass), this.container.find(".applyBtn").html(this.locale.applyLabel), this.container.find(".cancelBtn").html(this.locale.cancelLabel), this.container.find(".calendar").on("click.daterangepicker", ".prev", i.proxy(this.clickPrev, this)).on("click.daterangepicker", ".next", i.proxy(this.clickNext, this)).on("click.daterangepicker", "td.available", i.proxy(this.clickDate, this)).on("mouseenter.daterangepicker", "td.available", i.proxy(this.hoverDate, this)).on("mouseleave.daterangepicker", "td.available", i.proxy(this.updateFormInputs, this)).on("change.daterangepicker", "select.yearselect", i.proxy(this.monthOrYearChanged, this)).on("change.daterangepicker", "select.monthselect", i.proxy(this.monthOrYearChanged, this)).on("change.daterangepicker", "select.hourselect,select.minuteselect,select.secondselect,select.ampmselect", i.proxy(this.timeChanged, this)).on("click.daterangepicker", ".daterangepicker_input input", i.proxy(this.showCalendars, this)).on("change.daterangepicker", ".daterangepicker_input input", i.proxy(this.formInputsChanged, this)), this.container.find(".ranges").on("click.daterangepicker", "button.applyBtn", i.proxy(this.clickApply, this)).on("click.daterangepicker", "button.cancelBtn", i.proxy(this.clickCancel, this)).on("click.daterangepicker", "li", i.proxy(this.clickRange, this)).on("mouseenter.daterangepicker", "li", i.proxy(this.hoverRange, this)).on("mouseleave.daterangepicker", "li", i.proxy(this.updateFormInputs, this)), this.element.is("input") ? this.element.on({
                "click.daterangepicker": i.proxy(this.show, this),
                "focus.daterangepicker": i.proxy(this.show, this),
                "keyup.daterangepicker": i.proxy(this.elementChanged, this),
                "keydown.daterangepicker": i.proxy(this.keydown, this)
            }) : this.element.on("click.daterangepicker", i.proxy(this.toggle, this)), this.element.is("input") && !this.singleDatePicker && this.autoUpdateInput ? (this.element.val(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format)), this.element.trigger("change")) : this.element.is("input") && this.autoUpdateInput && (this.element.val(this.startDate.format(this.locale.format)), this.element.trigger("change"))
        };
        return o.prototype = {
            constructor: o,
            setStartDate: function(t) {
                "string" == typeof t && (this.startDate = n(t, this.locale.format)), "object" === ("undefined" == typeof t ? "undefined" : s(t)) && (this.startDate = n(t)), this.timePicker || (this.startDate = this.startDate.startOf("day")), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement), this.minDate && this.startDate.isBefore(this.minDate) && (this.startDate = this.minDate), this.maxDate && this.startDate.isAfter(this.maxDate) && (this.startDate = this.maxDate), this.isShowing || this.updateElement(), this.updateMonthsInView()
            },
            setEndDate: function(t) {
                "string" == typeof t && (this.endDate = n(t, this.locale.format)), "object" === ("undefined" == typeof t ? "undefined" : s(t)) && (this.endDate = n(t)), this.timePicker || (this.endDate = this.endDate.endOf("day")), this.timePicker && this.timePickerIncrement && this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement), this.endDate.isBefore(this.startDate) && (this.endDate = this.startDate.clone()), this.maxDate && this.endDate.isAfter(this.maxDate) && (this.endDate = this.maxDate), this.dateLimit && this.startDate.clone().add(this.dateLimit).isBefore(this.endDate) && (this.endDate = this.startDate.clone().add(this.dateLimit)), this.previousRightTime = this.endDate.clone(), this.isShowing || this.updateElement(), this.updateMonthsInView()
            },
            isInvalidDate: function() {
                return !1
            },
            updateView: function() {
                this.timePicker && (this.renderTimePicker("left"), this.renderTimePicker("right"), this.endDate ? this.container.find(".right .calendar-time select").removeAttr("disabled").removeClass("disabled") : this.container.find(".right .calendar-time select").attr("disabled", "disabled").addClass("disabled")), this.endDate ? (this.container.find('input[name="daterangepicker_end"]').removeClass("active"), this.container.find('input[name="daterangepicker_start"]').addClass("active")) : (this.container.find('input[name="daterangepicker_end"]').addClass("active"), this.container.find('input[name="daterangepicker_start"]').removeClass("active")), this.updateMonthsInView(), this.updateCalendars(), this.updateFormInputs()
            },
            updateMonthsInView: function() {
                if (this.endDate) {
                    if (!this.singleDatePicker && this.leftCalendar.month && this.rightCalendar.month && (this.startDate.format("YYYY-MM") == this.leftCalendar.month.format("YYYY-MM") || this.startDate.format("YYYY-MM") == this.rightCalendar.month.format("YYYY-MM")) && (this.endDate.format("YYYY-MM") == this.leftCalendar.month.format("YYYY-MM") || this.endDate.format("YYYY-MM") == this.rightCalendar.month.format("YYYY-MM"))) return;
                    this.leftCalendar.month = this.startDate.clone().date(2), this.linkedCalendars || this.endDate.month() == this.startDate.month() && this.endDate.year() == this.startDate.year() ? this.rightCalendar.month = this.startDate.clone().date(2).add(1, "month") : this.rightCalendar.month = this.endDate.clone().date(2)
                } else this.leftCalendar.month.format("YYYY-MM") != this.startDate.format("YYYY-MM") && this.rightCalendar.month.format("YYYY-MM") != this.startDate.format("YYYY-MM") && (this.leftCalendar.month = this.startDate.clone().date(2), this.rightCalendar.month = this.startDate.clone().date(2).add(1, "month"))
            },
            updateCalendars: function() {
                if (this.timePicker) {
                    var t, e, n;
                    if (this.endDate) {
                        if (t = parseInt(this.container.find(".left .hourselect").val(), 10), e = parseInt(this.container.find(".left .minuteselect").val(), 10), n = this.timePickerSeconds ? parseInt(this.container.find(".left .secondselect").val(), 10) : 0, !this.timePicker24Hour) {
                            var i = this.container.find(".left .ampmselect").val();
                            "PM" === i && 12 > t && (t += 12), "AM" === i && 12 === t && (t = 0)
                        }
                    } else if (t = parseInt(this.container.find(".right .hourselect").val(), 10), e = parseInt(this.container.find(".right .minuteselect").val(), 10), n = this.timePickerSeconds ? parseInt(this.container.find(".right .secondselect").val(), 10) : 0, !this.timePicker24Hour) {
                        var i = this.container.find(".right .ampmselect").val();
                        "PM" === i && 12 > t && (t += 12), "AM" === i && 12 === t && (t = 0)
                    }
                    this.leftCalendar.month.hour(t).minute(e).second(n), this.rightCalendar.month.hour(t).minute(e).second(n)
                }
                this.renderCalendar("left"), this.renderCalendar("right"), this.container.find(".ranges li").removeClass("active"), null != this.endDate && this.calculateChosenLabel()
            },
            renderCalendar: function(t) {
                var e = "left" == t ? this.leftCalendar : this.rightCalendar,
                    o = e.month.month(),
                    s = e.month.year(),
                    r = e.month.hour(),
                    a = e.month.minute(),
                    l = e.month.second(),
                    d = n([s, o]).daysInMonth(),
                    u = n([s, o, 1]),
                    c = n([s, o, d]),
                    h = n(u).subtract(1, "month").month(),
                    p = n(u).subtract(1, "month").year(),
                    f = n([p, h]).daysInMonth(),
                    m = u.day(),
                    e = [];
                e.firstDay = u, e.lastDay = c;
                for (var _ = 0; 6 > _; _++) e[_] = [];
                var y = f - m + this.locale.firstDay + 1;
                y > f && (y -= 7), m == this.locale.firstDay && (y = f - 6);
                for (var g, v, b = n([p, h, y, 12, a, l]), _ = 0, g = 0, v = 0; 42 > _; _++, g++, b = n(b).add(24, "hour")) _ > 0 && g % 7 === 0 && (g = 0, v++), e[v][g] = b.clone().hour(r).minute(a).second(l), b.hour(12), this.minDate && e[v][g].format("YYYY-MM-DD") == this.minDate.format("YYYY-MM-DD") && e[v][g].isBefore(this.minDate) && "left" == t && (e[v][g] = this.minDate.clone()), this.maxDate && e[v][g].format("YYYY-MM-DD") == this.maxDate.format("YYYY-MM-DD") && e[v][g].isAfter(this.maxDate) && "right" == t && (e[v][g] = this.maxDate.clone());
                "left" == t ? this.leftCalendar.calendar = e : this.rightCalendar.calendar = e;
                var M = "left" == t ? this.minDate : this.startDate,
                    w = this.maxDate,
                    L = ("left" == t ? this.startDate : this.endDate, '<table class="table-condensed">');
                L += "<thead>", L += "<tr>", (this.showWeekNumbers || this.showISOWeekNumbers) && (L += "<th></th>"), L += M && !M.isBefore(e.firstDay) || this.linkedCalendars && "left" != t ? "<th></th>" : '<th class="prev available"><i class="fa fa-chevron-left glyphicon glyphicon-chevron-left"></i></th>';
                var k = this.locale.monthNames[e[1][1].month()] + e[1][1].format(" YYYY");
                if (this.showDropdowns) {
                    for (var D = e[1][1].month(), Y = e[1][1].year(), S = w && w.year() || Y + 5, x = M && M.year() || Y - 50, T = Y == x, C = Y == S, j = '<select class="monthselect">', H = 0; 12 > H; H++) j += (!T || H >= M.month()) && (!C || H <= w.month()) ? "<option value='" + H + "'" + (H === D ? " selected='selected'" : "") + ">" + this.locale.monthNames[H] + "</option>" : "<option value='" + H + "'" + (H === D ? " selected='selected'" : "") + " disabled='disabled'>" + this.locale.monthNames[H] + "</option>";
                    j += "</select>";
                    for (var E = '<select class="yearselect">', P = x; S >= P; P++) E += '<option value="' + P + '"' + (P === Y ? ' selected="selected"' : "") + ">" + P + "</option>";
                    E += "</select>", k = j + E
                }
                if (L += '<th colspan="5" class="month">' + k + "</th>", L += w && !w.isAfter(e.lastDay) || this.linkedCalendars && "right" != t && !this.singleDatePicker ? "<th></th>" : '<th class="next available"><i class="fa fa-chevron-right glyphicon glyphicon-chevron-right"></i></th>', L += "</tr>", L += "<tr>", (this.showWeekNumbers || this.showISOWeekNumbers) && (L += '<th class="week">' + this.locale.weekLabel + "</th>"), i.each(this.locale.daysOfWeek, function(t, e) {
                        L += "<th>" + e + "</th>"
                    }), L += "</tr>", L += "</thead>", L += "<tbody>", null == this.endDate && this.dateLimit) {
                    var A = this.startDate.clone().add(this.dateLimit).endOf("day");
                    w && !A.isBefore(w) || (w = A)
                }
                for (var v = 0; 6 > v; v++) {
                    L += "<tr>", this.showWeekNumbers ? L += '<td class="week">' + e[v][0].week() + "</td>" : this.showISOWeekNumbers && (L += '<td class="week">' + e[v][0].isoWeek() + "</td>");
                    for (var g = 0; 7 > g; g++) {
                        var O = [];
                        e[v][g].isSame(new Date, "day") && O.push("today"), e[v][g].isoWeekday() > 5 && O.push("weekend"), e[v][g].month() != e[1][1].month() && O.push("off"), this.minDate && e[v][g].isBefore(this.minDate, "day") && O.push("off", "disabled"), w && e[v][g].isAfter(w, "day") && O.push("off", "disabled"), this.isInvalidDate(e[v][g]) && O.push("off", "disabled"), e[v][g].format("YYYY-MM-DD") == this.startDate.format("YYYY-MM-DD") && O.push("active", "start-date"), null != this.endDate && e[v][g].format("YYYY-MM-DD") == this.endDate.format("YYYY-MM-DD") && O.push("active", "end-date"), null != this.endDate && e[v][g] > this.startDate && e[v][g] < this.endDate && O.push("in-range");
                        for (var $ = "", z = !1, _ = 0; _ < O.length; _++) $ += O[_] + " ", "disabled" == O[_] && (z = !0);
                        z || ($ += "available"), L += '<td class="' + $.replace(/^\s+|\s+$/g, "") + '" data-title="r' + v + "c" + g + '">' + e[v][g].date() + "</td>"
                    }
                    L += "</tr>"
                }
                L += "</tbody>", L += "</table>", this.container.find(".calendar." + t + " .calendar-table").html(L)
            },
            renderTimePicker: function(t) {
                var e, n, i, o = this.maxDate;
                if (!this.dateLimit || this.maxDate && !this.startDate.clone().add(this.dateLimit).isAfter(this.maxDate) || (o = this.startDate.clone().add(this.dateLimit)), "left" == t) n = this.startDate.clone(), i = this.minDate;
                else if ("right" == t) {
                    n = this.endDate ? this.endDate.clone() : this.previousRightTime.clone(), i = this.startDate;
                    var s = this.container.find(".calendar.right .calendar-time div");
                    if ("" != s.html()) {
                        if (n.hour(s.find(".hourselect option:selected").val() || n.hour()), n.minute(s.find(".minuteselect option:selected").val() || n.minute()), n.second(s.find(".secondselect option:selected").val() || n.second()), !this.timePicker24Hour) {
                            var r = s.find(".ampmselect option:selected").val();
                            "PM" === r && n.hour() < 12 && n.hour(n.hour() + 12), "AM" === r && 12 === n.hour() && n.hour(0)
                        }
                        n.isBefore(this.startDate) && (n = this.startDate.clone()), n.isAfter(o) && (n = o.clone())
                    }
                }
                e = '<select class="hourselect">';
                for (var a = this.timePicker24Hour ? 0 : 1, l = this.timePicker24Hour ? 23 : 12, d = a; l >= d; d++) {
                    var u = d;
                    this.timePicker24Hour || (u = n.hour() >= 12 ? 12 == d ? 12 : d + 12 : 12 == d ? 0 : d);
                    var c = n.clone().hour(u),
                        h = !1;
                    i && c.minute(59).isBefore(i) && (h = !0), o && c.minute(0).isAfter(o) && (h = !0), e += u != n.hour() || h ? h ? '<option value="' + d + '" disabled="disabled" class="disabled">' + d + "</option>" : '<option value="' + d + '">' + d + "</option>" : '<option value="' + d + '" selected="selected">' + d + "</option>"
                }
                e += "</select> ", e += ': <select class="minuteselect">';
                for (var d = 0; 60 > d; d += this.timePickerIncrement) {
                    var p = 10 > d ? "0" + d : d,
                        c = n.clone().minute(d),
                        h = !1;
                    i && c.second(59).isBefore(i) && (h = !0), o && c.second(0).isAfter(o) && (h = !0), e += n.minute() != d || h ? h ? '<option value="' + d + '" disabled="disabled" class="disabled">' + p + "</option>" : '<option value="' + d + '">' + p + "</option>" : '<option value="' + d + '" selected="selected">' + p + "</option>"
                }
                if (e += "</select> ", this.timePickerSeconds) {
                    e += ': <select class="secondselect">';
                    for (var d = 0; 60 > d; d++) {
                        var p = 10 > d ? "0" + d : d,
                            c = n.clone().second(d),
                            h = !1;
                        i && c.isBefore(i) && (h = !0), o && c.isAfter(o) && (h = !0), e += n.second() != d || h ? h ? '<option value="' + d + '" disabled="disabled" class="disabled">' + p + "</option>" : '<option value="' + d + '">' + p + "</option>" : '<option value="' + d + '" selected="selected">' + p + "</option>"
                    }
                    e += "</select> "
                }
                if (!this.timePicker24Hour) {
                    e += '<select class="ampmselect">';
                    var f = "",
                        m = "";
                    i && n.clone().hour(12).minute(0).second(0).isBefore(i) && (f = ' disabled="disabled" class="disabled"'), o && n.clone().hour(0).minute(0).second(0).isAfter(o) && (m = ' disabled="disabled" class="disabled"'), e += n.hour() >= 12 ? '<option value="AM"' + f + '>AM</option><option value="PM" selected="selected"' + m + ">PM</option>" : '<option value="AM" selected="selected"' + f + '>AM</option><option value="PM"' + m + ">PM</option>", e += "</select>"
                }
                this.container.find(".calendar." + t + " .calendar-time div").html(e)
            },
            updateFormInputs: function() {
                this.container.find("input[name=daterangepicker_start]").is(":focus") || this.container.find("input[name=daterangepicker_end]").is(":focus") || (this.container.find("input[name=daterangepicker_start]").val(this.startDate.format(this.locale.format)), this.endDate && this.container.find("input[name=daterangepicker_end]").val(this.endDate.format(this.locale.format)), this.singleDatePicker || this.endDate && (this.startDate.isBefore(this.endDate) || this.startDate.isSame(this.endDate)) ? this.container.find("button.applyBtn").removeAttr("disabled") : this.container.find("button.applyBtn").attr("disabled", "disabled"))
            },
            move: function() {
                var t, e = {
                        top: 0,
                        left: 0
                    },
                    n = i(window).width();
                this.parentEl.is("body") || (e = {
                    top: this.parentEl.offset().top - this.parentEl.scrollTop(),
                    left: this.parentEl.offset().left - this.parentEl.scrollLeft()
                }, n = this.parentEl[0].clientWidth + this.parentEl.offset().left), t = "up" == this.drops ? this.element.offset().top - this.container.outerHeight() - e.top : this.element.offset().top + this.element.outerHeight() - e.top, this.container["up" == this.drops ? "addClass" : "removeClass"]("dropup"), "left" == this.opens ? (this.container.css({
                    top: t,
                    right: n - this.element.offset().left - this.element.outerWidth(),
                    left: "auto"
                }), this.container.offset().left < 0 && this.container.css({
                    right: "auto",
                    left: 9
                })) : "center" == this.opens ? (this.container.css({
                    top: t,
                    left: this.element.offset().left - e.left + this.element.outerWidth() / 2 - this.container.outerWidth() / 2,
                    right: "auto"
                }), this.container.offset().left < 0 && this.container.css({
                    right: "auto",
                    left: 9
                })) : (this.container.css({
                    top: t,
                    left: this.element.offset().left - e.left,
                    right: "auto"
                }), this.container.offset().left + this.container.outerWidth() > i(window).width() && this.container.css({
                    left: "auto",
                    right: 0
                }))
            },
            show: function(t) {
                this.isShowing || (this._outsideClickProxy = i.proxy(function(t) {
                    this.outsideClick(t)
                }, this), i(document).on("mousedown.daterangepicker", this._outsideClickProxy).on("touchend.daterangepicker", this._outsideClickProxy).on("click.daterangepicker", "[data-toggle=dropdown]", this._outsideClickProxy).on("focusin.daterangepicker", this._outsideClickProxy), i(window).on("resize.daterangepicker", i.proxy(function(t) {
                    this.move(t)
                }, this)), this.oldStartDate = this.startDate.clone(), this.oldEndDate = this.endDate.clone(), this.previousRightTime = this.endDate.clone(), this.updateView(), this.container.show(), this.move(), this.element.trigger("show.daterangepicker", this), this.isShowing = !0)
            },
            hide: function(t) {
                this.isShowing && (this.endDate || (this.startDate = this.oldStartDate.clone(), this.endDate = this.oldEndDate.clone()), this.startDate.isSame(this.oldStartDate) && this.endDate.isSame(this.oldEndDate) || this.callback(this.startDate, this.endDate, this.chosenLabel), this.updateElement(), i(document).off(".daterangepicker"), i(window).off(".daterangepicker"), this.container.hide(), this.element.trigger("hide.daterangepicker", this), this.isShowing = !1)
            },
            toggle: function(t) {
                this.isShowing ? this.hide() : this.show()
            },
            outsideClick: function(t) {
                var e = i(t.target);
                "focusin" == t.type || e.closest(this.element).length || e.closest(this.container).length || e.closest(".calendar-table").length || this.hide()
            },
            showCalendars: function() {
                this.container.addClass("show-calendar"), this.move(), this.element.trigger("showCalendar.daterangepicker", this)
            },
            hideCalendars: function() {
                this.container.removeClass("show-calendar"), this.element.trigger("hideCalendar.daterangepicker", this)
            },
            hoverRange: function(t) {
                if (!this.container.find("input[name=daterangepicker_start]").is(":focus") && !this.container.find("input[name=daterangepicker_end]").is(":focus")) {
                    var e = t.target.innerHTML;
                    if (e == this.locale.customRangeLabel) this.updateView();
                    else {
                        var n = this.ranges[e];
                        this.container.find("input[name=daterangepicker_start]").val(n[0].format(this.locale.format)), this.container.find("input[name=daterangepicker_end]").val(n[1].format(this.locale.format))
                    }
                }
            },
            clickRange: function(t) {
                var e = t.target.innerHTML;
                if (this.chosenLabel = e, e == this.locale.customRangeLabel) this.showCalendars();
                else {
                    var n = this.ranges[e];
                    this.startDate = n[0], this.endDate = n[1], this.timePicker || (this.startDate.startOf("day"), this.endDate.endOf("day")), this.alwaysShowCalendars || this.hideCalendars(), this.clickApply()
                }
            },
            clickPrev: function(t) {
                var e = i(t.target).parents(".calendar");
                e.hasClass("left") ? (this.leftCalendar.month.subtract(1, "month"), this.linkedCalendars && this.rightCalendar.month.subtract(1, "month")) : this.rightCalendar.month.subtract(1, "month"), this.updateCalendars()
            },
            clickNext: function(t) {
                var e = i(t.target).parents(".calendar");
                e.hasClass("left") ? this.leftCalendar.month.add(1, "month") : (this.rightCalendar.month.add(1, "month"), this.linkedCalendars && this.leftCalendar.month.add(1, "month")), this.updateCalendars()
            },
            hoverDate: function(t) {
                if (!this.container.find("input[name=daterangepicker_start]").is(":focus") && !this.container.find("input[name=daterangepicker_end]").is(":focus") && i(t.target).hasClass("available")) {
                    var e = i(t.target).attr("data-title"),
                        n = e.substr(1, 1),
                        o = e.substr(3, 1),
                        s = i(t.target).parents(".calendar"),
                        r = s.hasClass("left") ? this.leftCalendar.calendar[n][o] : this.rightCalendar.calendar[n][o];
                    this.endDate ? this.container.find("input[name=daterangepicker_start]").val(r.format(this.locale.format)) : this.container.find("input[name=daterangepicker_end]").val(r.format(this.locale.format));
                    var a = this.leftCalendar,
                        l = this.rightCalendar,
                        d = this.startDate;
                    this.endDate || this.container.find(".calendar td").each(function(t, e) {
                        if (!i(e).hasClass("week")) {
                            var n = i(e).attr("data-title"),
                                o = n.substr(1, 1),
                                s = n.substr(3, 1),
                                u = i(e).parents(".calendar"),
                                c = u.hasClass("left") ? a.calendar[o][s] : l.calendar[o][s];
                            c.isAfter(d) && c.isBefore(r) ? i(e).addClass("in-range") : i(e).removeClass("in-range")
                        }
                    })
                }
            },
            clickDate: function(t) {
                if (i(t.target).hasClass("available")) {
                    var e = i(t.target).attr("data-title"),
                        n = e.substr(1, 1),
                        o = e.substr(3, 1),
                        s = i(t.target).parents(".calendar"),
                        r = s.hasClass("left") ? this.leftCalendar.calendar[n][o] : this.rightCalendar.calendar[n][o];
                    if (this.endDate || r.isBefore(this.startDate, "day")) {
                        if (this.timePicker) {
                            var a = parseInt(this.container.find(".left .hourselect").val(), 10);
                            if (!this.timePicker24Hour) {
                                var l = this.container.find(".left .ampmselect").val();
                                "PM" === l && 12 > a && (a += 12), "AM" === l && 12 === a && (a = 0)
                            }
                            var d = parseInt(this.container.find(".left .minuteselect").val(), 10),
                                u = this.timePickerSeconds ? parseInt(this.container.find(".left .secondselect").val(), 10) : 0;
                            r = r.clone().hour(a).minute(d).second(u)
                        }
                        this.endDate = null, this.setStartDate(r.clone())
                    } else if (!this.endDate && r.isBefore(this.startDate)) this.setEndDate(this.startDate.clone());
                    else {
                        if (this.timePicker) {
                            var a = parseInt(this.container.find(".right .hourselect").val(), 10);
                            if (!this.timePicker24Hour) {
                                var l = this.container.find(".right .ampmselect").val();
                                "PM" === l && 12 > a && (a += 12), "AM" === l && 12 === a && (a = 0)
                            }
                            var d = parseInt(this.container.find(".right .minuteselect").val(), 10),
                                u = this.timePickerSeconds ? parseInt(this.container.find(".right .secondselect").val(), 10) : 0;
                            r = r.clone().hour(a).minute(d).second(u)
                        }
                        this.setEndDate(r.clone()), this.autoApply && (this.calculateChosenLabel(), this.clickApply())
                    }
                    this.singleDatePicker && (this.setEndDate(this.startDate), this.timePicker || this.clickApply()), this.updateView()
                }
            },
            calculateChosenLabel: function() {
                var t = !0,
                    e = 0;
                for (var n in this.ranges) {
                    if (this.timePicker) {
                        if (this.startDate.isSame(this.ranges[n][0]) && this.endDate.isSame(this.ranges[n][1])) {
                            t = !1, this.chosenLabel = this.container.find(".ranges li:eq(" + e + ")").addClass("active").html();
                            break
                        }
                    } else if (this.startDate.format("YYYY-MM-DD") == this.ranges[n][0].format("YYYY-MM-DD") && this.endDate.format("YYYY-MM-DD") == this.ranges[n][1].format("YYYY-MM-DD")) {
                        t = !1, this.chosenLabel = this.container.find(".ranges li:eq(" + e + ")").addClass("active").html();
                        break
                    }
                    e++
                }
                t && (this.chosenLabel = this.container.find(".ranges li:last").addClass("active").html(), this.showCalendars())
            },
            clickApply: function(t) {
                this.hide(), this.element.trigger("apply.daterangepicker", this)
            },
            clickCancel: function(t) {
                this.startDate = this.oldStartDate, this.endDate = this.oldEndDate, this.hide(), this.element.trigger("cancel.daterangepicker", this)
            },
            monthOrYearChanged: function(t) {
                var e = i(t.target).closest(".calendar").hasClass("left"),
                    n = e ? "left" : "right",
                    o = this.container.find(".calendar." + n),
                    s = parseInt(o.find(".monthselect").val(), 10),
                    r = o.find(".yearselect").val();
                e || (r < this.startDate.year() || r == this.startDate.year() && s < this.startDate.month()) && (s = this.startDate.month(), r = this.startDate.year()), this.minDate && (r < this.minDate.year() || r == this.minDate.year() && s < this.minDate.month()) && (s = this.minDate.month(), r = this.minDate.year()), this.maxDate && (r > this.maxDate.year() || r == this.maxDate.year() && s > this.maxDate.month()) && (s = this.maxDate.month(), r = this.maxDate.year()), e ? (this.leftCalendar.month.month(s).year(r), this.linkedCalendars && (this.rightCalendar.month = this.leftCalendar.month.clone().add(1, "month"))) : (this.rightCalendar.month.month(s).year(r), this.linkedCalendars && (this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, "month"))), this.updateCalendars()
            },
            timeChanged: function(t) {
                var e = i(t.target).closest(".calendar"),
                    n = e.hasClass("left"),
                    o = parseInt(e.find(".hourselect").val(), 10),
                    s = parseInt(e.find(".minuteselect").val(), 10),
                    r = this.timePickerSeconds ? parseInt(e.find(".secondselect").val(), 10) : 0;
                if (!this.timePicker24Hour) {
                    var a = e.find(".ampmselect").val();
                    "PM" === a && 12 > o && (o += 12), "AM" === a && 12 === o && (o = 0)
                }
                if (n) {
                    var l = this.startDate.clone();
                    l.hour(o), l.minute(s), l.second(r), this.setStartDate(l), this.singleDatePicker ? this.endDate = this.startDate.clone() : this.endDate && this.endDate.format("YYYY-MM-DD") == l.format("YYYY-MM-DD") && this.endDate.isBefore(l) && this.setEndDate(l.clone())
                } else if (this.endDate) {
                    var d = this.endDate.clone();
                    d.hour(o), d.minute(s), d.second(r), this.setEndDate(d)
                }
                this.updateCalendars(), this.updateFormInputs(), this.renderTimePicker("left"), this.renderTimePicker("right")
            },
            formInputsChanged: function(t) {
                var e = i(t.target).closest(".calendar").hasClass("right"),
                    o = n(this.container.find('input[name="daterangepicker_start"]').val(), this.locale.format),
                    s = n(this.container.find('input[name="daterangepicker_end"]').val(), this.locale.format);
                o.isValid() && s.isValid() && (e && s.isBefore(o) && (o = s.clone()), this.setStartDate(o), this.setEndDate(s), e ? this.container.find('input[name="daterangepicker_start"]').val(this.startDate.format(this.locale.format)) : this.container.find('input[name="daterangepicker_end"]').val(this.endDate.format(this.locale.format))), this.updateCalendars(), this.timePicker && (this.renderTimePicker("left"), this.renderTimePicker("right"))
            },
            elementChanged: function() {
                if (this.element.is("input") && this.element.val().length && !(this.element.val().length < this.locale.format.length)) {
                    var t = this.element.val().split(this.locale.separator),
                        e = null,
                        i = null;
                    2 === t.length && (e = n(t[0], this.locale.format), i = n(t[1], this.locale.format)), (this.singleDatePicker || null === e || null === i) && (e = n(this.element.val(), this.locale.format), i = e), e.isValid() && i.isValid() && (this.setStartDate(e), this.setEndDate(i), this.updateView())
                }
            },
            keydown: function(t) {
                9 !== t.keyCode && 13 !== t.keyCode || this.hide()
            },
            updateElement: function() {
                this.element.is("input") && !this.singleDatePicker && this.autoUpdateInput ? (this.element.val(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format)), this.element.trigger("change")) : this.element.is("input") && this.autoUpdateInput && (this.element.val(this.startDate.format(this.locale.format)),
                    this.element.trigger("change"))
            },
            remove: function() {
                this.container.remove(), this.element.off(".daterangepicker"), this.element.removeData()
            }
        }, i.fn.daterangepicker = function(t, e) {
            return this.each(function() {
                var n = i(this);
                n.data("daterangepicker") && n.data("daterangepicker").remove(), n.data("daterangepicker", new o(n, t, e))
            }), this
        }, o
    })
}, function(t, e, n) {
    var i, o;
    (function(t) {
        "use strict";
        var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
        };
        ! function(r, a) {
            "object" === s(e) && "undefined" != typeof t ? t.exports = a() : (i = a, o = "function" == typeof i ? i.call(e, n, e, t) : i, !(void 0 !== o && (t.exports = o)))
        }(void 0, function() {
            function e() {
                return di.apply(null, arguments)
            }

            function i(t) {
                di = t
            }

            function o(t) {
                return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t)
            }

            function r(t) {
                return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
            }

            function a(t, e) {
                var n, i = [];
                for (n = 0; n < t.length; ++n) i.push(e(t[n], n));
                return i
            }

            function l(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }

            function d(t, e) {
                for (var n in e) l(e, n) && (t[n] = e[n]);
                return l(e, "toString") && (t.toString = e.toString), l(e, "valueOf") && (t.valueOf = e.valueOf), t
            }

            function u(t, e, n, i) {
                return zt(t, e, n, i, !0).utc()
            }

            function c() {
                return {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1,
                    parsedDateParts: [],
                    meridiem: null
                }
            }

            function h(t) {
                return null == t._pf && (t._pf = c()), t._pf
            }

            function p(t) {
                if (null == t._isValid) {
                    var e = h(t),
                        n = ui.call(e.parsedDateParts, function(t) {
                            return null != t
                        });
                    t._isValid = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && n), t._strict && (t._isValid = t._isValid && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour)
                }
                return t._isValid
            }

            function f(t) {
                var e = u(NaN);
                return null != t ? d(h(e), t) : h(e).userInvalidated = !0, e
            }

            function m(t) {
                return void 0 === t
            }

            function _(t, e) {
                var n, i, o;
                if (m(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), m(e._i) || (t._i = e._i), m(e._f) || (t._f = e._f), m(e._l) || (t._l = e._l), m(e._strict) || (t._strict = e._strict), m(e._tzm) || (t._tzm = e._tzm), m(e._isUTC) || (t._isUTC = e._isUTC), m(e._offset) || (t._offset = e._offset), m(e._pf) || (t._pf = h(e)), m(e._locale) || (t._locale = e._locale), ci.length > 0)
                    for (n in ci) i = ci[n], o = e[i], m(o) || (t[i] = o);
                return t
            }

            function y(t) {
                _(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), hi === !1 && (hi = !0, e.updateOffset(this), hi = !1)
            }

            function g(t) {
                return t instanceof y || null != t && null != t._isAMomentObject
            }

            function v(t) {
                return 0 > t ? Math.ceil(t) : Math.floor(t)
            }

            function b(t) {
                var e = +t,
                    n = 0;
                return 0 !== e && isFinite(e) && (n = v(e)), n
            }

            function M(t, e, n) {
                var i, o = Math.min(t.length, e.length),
                    s = Math.abs(t.length - e.length),
                    r = 0;
                for (i = 0; o > i; i++)(n && t[i] !== e[i] || !n && b(t[i]) !== b(e[i])) && r++;
                return r + s
            }

            function w(t) {
                e.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t)
            }

            function L(t, n) {
                var i = !0;
                return d(function() {
                    return null != e.deprecationHandler && e.deprecationHandler(null, t), i && (w(t + "\nArguments: " + Array.prototype.slice.call(arguments).join(", ") + "\n" + (new Error).stack), i = !1), n.apply(this, arguments)
                }, n)
            }

            function k(t, n) {
                null != e.deprecationHandler && e.deprecationHandler(t, n), pi[t] || (w(n), pi[t] = !0)
            }

            function D(t) {
                return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)
            }

            function Y(t) {
                return "[object Object]" === Object.prototype.toString.call(t)
            }

            function S(t) {
                var e, n;
                for (n in t) e = t[n], D(e) ? this[n] = e : this["_" + n] = e;
                this._config = t, this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
            }

            function x(t, e) {
                var n, i = d({}, t);
                for (n in e) l(e, n) && (Y(t[n]) && Y(e[n]) ? (i[n] = {}, d(i[n], t[n]), d(i[n], e[n])) : null != e[n] ? i[n] = e[n] : delete i[n]);
                return i
            }

            function T(t) {
                null != t && this.set(t)
            }

            function C(t) {
                return t ? t.toLowerCase().replace("_", "-") : t
            }

            function j(t) {
                for (var e, n, i, o, s = 0; s < t.length;) {
                    for (o = C(t[s]).split("-"), e = o.length, n = C(t[s + 1]), n = n ? n.split("-") : null; e > 0;) {
                        if (i = H(o.slice(0, e).join("-"))) return i;
                        if (n && n.length >= e && M(o, n, !0) >= e - 1) break;
                        e--
                    }
                    s++
                }
                return null
            }

            function H(e) {
                var i = null;
                if (!yi[e] && "undefined" != typeof t && t && t.exports) try {
                    i = mi._abbr, n(32)("./" + e), E(i)
                } catch (o) {}
                return yi[e]
            }

            function E(t, e) {
                var n;
                return t && (n = m(e) ? O(t) : P(t, e), n && (mi = n)), mi._abbr
            }

            function P(t, e) {
                return null !== e ? (e.abbr = t, null != yi[t] ? (k("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale"), e = x(yi[t]._config, e)) : null != e.parentLocale && (null != yi[e.parentLocale] ? e = x(yi[e.parentLocale]._config, e) : k("parentLocaleUndefined", "specified parentLocale is not defined yet")), yi[t] = new T(e), E(t), yi[t]) : (delete yi[t], null)
            }

            function A(t, e) {
                if (null != e) {
                    var n;
                    null != yi[t] && (e = x(yi[t]._config, e)), n = new T(e), n.parentLocale = yi[t], yi[t] = n, E(t)
                } else null != yi[t] && (null != yi[t].parentLocale ? yi[t] = yi[t].parentLocale : null != yi[t] && delete yi[t]);
                return yi[t]
            }

            function O(t) {
                var e;
                if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return mi;
                if (!o(t)) {
                    if (e = H(t)) return e;
                    t = [t]
                }
                return j(t)
            }

            function $() {
                return fi(yi)
            }

            function z(t, e) {
                var n = t.toLowerCase();
                gi[n] = gi[n + "s"] = gi[e] = t
            }

            function W(t) {
                return "string" == typeof t ? gi[t] || gi[t.toLowerCase()] : void 0
            }

            function N(t) {
                var e, n, i = {};
                for (n in t) l(t, n) && (e = W(n), e && (i[e] = t[n]));
                return i
            }

            function I(t, n) {
                return function(i) {
                    return null != i ? (R(this, t, i), e.updateOffset(this, n), this) : F(this, t)
                }
            }

            function F(t, e) {
                return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN
            }

            function R(t, e, n) {
                t.isValid() && t._d["set" + (t._isUTC ? "UTC" : "") + e](n)
            }

            function q(t, e) {
                var n;
                if ("object" === ("undefined" == typeof t ? "undefined" : s(t)))
                    for (n in t) this.set(n, t[n]);
                else if (t = W(t), D(this[t])) return this[t](e);
                return this
            }

            function U(t, e, n) {
                var i = "" + Math.abs(t),
                    o = e - i.length,
                    s = t >= 0;
                return (s ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, o)).toString().substr(1) + i
            }

            function B(t, e, n, i) {
                var o = i;
                "string" == typeof i && (o = function() {
                    return this[i]()
                }), t && (wi[t] = o), e && (wi[e[0]] = function() {
                    return U(o.apply(this, arguments), e[1], e[2])
                }), n && (wi[n] = function() {
                    return this.localeData().ordinal(o.apply(this, arguments), t)
                })
            }

            function V(t) {
                return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
            }

            function J(t) {
                var e, n, i = t.match(vi);
                for (e = 0, n = i.length; n > e; e++) wi[i[e]] ? i[e] = wi[i[e]] : i[e] = V(i[e]);
                return function(e) {
                    var o, s = "";
                    for (o = 0; n > o; o++) s += i[o] instanceof Function ? i[o].call(e, t) : i[o];
                    return s
                }
            }

            function G(t, e) {
                return t.isValid() ? (e = X(e, t.localeData()), Mi[e] = Mi[e] || J(e), Mi[e](t)) : t.localeData().invalidDate()
            }

            function X(t, e) {
                function n(t) {
                    return e.longDateFormat(t) || t
                }
                var i = 5;
                for (bi.lastIndex = 0; i >= 0 && bi.test(t);) t = t.replace(bi, n), bi.lastIndex = 0, i -= 1;
                return t
            }

            function K(t, e, n) {
                Ni[t] = D(e) ? e : function(t, i) {
                    return t && n ? n : e
                }
            }

            function Q(t, e) {
                return l(Ni, t) ? Ni[t](e._strict, e._locale) : new RegExp(Z(t))
            }

            function Z(t) {
                return tt(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, e, n, i, o) {
                    return e || n || i || o
                }))
            }

            function tt(t) {
                return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            }

            function et(t, e) {
                var n, i = e;
                for ("string" == typeof t && (t = [t]), "number" == typeof e && (i = function(t, n) {
                        n[e] = b(t)
                    }), n = 0; n < t.length; n++) Ii[t[n]] = i
            }

            function nt(t, e) {
                et(t, function(t, n, i, o) {
                    i._w = i._w || {}, e(t, i._w, i, o)
                })
            }

            function it(t, e, n) {
                null != e && l(Ii, t) && Ii[t](e, n._a, n, t)
            }

            function ot(t, e) {
                return new Date(Date.UTC(t, e + 1, 0)).getUTCDate()
            }

            function st(t, e) {
                return o(this._months) ? this._months[t.month()] : this._months[Ki.test(e) ? "format" : "standalone"][t.month()]
            }

            function rt(t, e) {
                return o(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[Ki.test(e) ? "format" : "standalone"][t.month()]
            }

            function at(t, e, n) {
                var i, o, s, r = t.toLocaleLowerCase();
                if (!this._monthsParse)
                    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], i = 0; 12 > i; ++i) s = u([2e3, i]), this._shortMonthsParse[i] = this.monthsShort(s, "").toLocaleLowerCase(), this._longMonthsParse[i] = this.months(s, "").toLocaleLowerCase();
                return n ? "MMM" === e ? (o = _i.call(this._shortMonthsParse, r), -1 !== o ? o : null) : (o = _i.call(this._longMonthsParse, r), -1 !== o ? o : null) : "MMM" === e ? (o = _i.call(this._shortMonthsParse, r), -1 !== o ? o : (o = _i.call(this._longMonthsParse, r), -1 !== o ? o : null)) : (o = _i.call(this._longMonthsParse, r), -1 !== o ? o : (o = _i.call(this._shortMonthsParse, r), -1 !== o ? o : null))
            }

            function lt(t, e, n) {
                var i, o, s;
                if (this._monthsParseExact) return at.call(this, t, e, n);
                for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; 12 > i; i++) {
                    if (o = u([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(o, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(o, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (s = "^" + this.months(o, "") + "|^" + this.monthsShort(o, ""), this._monthsParse[i] = new RegExp(s.replace(".", ""), "i")), n && "MMMM" === e && this._longMonthsParse[i].test(t)) return i;
                    if (n && "MMM" === e && this._shortMonthsParse[i].test(t)) return i;
                    if (!n && this._monthsParse[i].test(t)) return i
                }
            }

            function dt(t, e) {
                var n;
                if (!t.isValid()) return t;
                if ("string" == typeof e)
                    if (/^\d+$/.test(e)) e = b(e);
                    else if (e = t.localeData().monthsParse(e), "number" != typeof e) return t;
                return n = Math.min(t.date(), ot(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n), t
            }

            function ut(t) {
                return null != t ? (dt(this, t), e.updateOffset(this, !0), this) : F(this, "Month")
            }

            function ct() {
                return ot(this.year(), this.month())
            }

            function ht(t) {
                return this._monthsParseExact ? (l(this, "_monthsRegex") || ft.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex
            }

            function pt(t) {
                return this._monthsParseExact ? (l(this, "_monthsRegex") || ft.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex
            }

            function ft() {
                function t(t, e) {
                    return e.length - t.length
                }
                var e, n, i = [],
                    o = [],
                    s = [];
                for (e = 0; 12 > e; e++) n = u([2e3, e]), i.push(this.monthsShort(n, "")), o.push(this.months(n, "")), s.push(this.months(n, "")), s.push(this.monthsShort(n, ""));
                for (i.sort(t), o.sort(t), s.sort(t), e = 0; 12 > e; e++) i[e] = tt(i[e]), o[e] = tt(o[e]), s[e] = tt(s[e]);
                this._monthsRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")
            }

            function mt(t) {
                var e, n = t._a;
                return n && -2 === h(t).overflow && (e = n[Ri] < 0 || n[Ri] > 11 ? Ri : n[qi] < 1 || n[qi] > ot(n[Fi], n[Ri]) ? qi : n[Ui] < 0 || n[Ui] > 24 || 24 === n[Ui] && (0 !== n[Bi] || 0 !== n[Vi] || 0 !== n[Ji]) ? Ui : n[Bi] < 0 || n[Bi] > 59 ? Bi : n[Vi] < 0 || n[Vi] > 59 ? Vi : n[Ji] < 0 || n[Ji] > 999 ? Ji : -1, h(t)._overflowDayOfYear && (Fi > e || e > qi) && (e = qi), h(t)._overflowWeeks && -1 === e && (e = Gi), h(t)._overflowWeekday && -1 === e && (e = Xi), h(t).overflow = e), t
            }

            function _t(t) {
                var e, n, i, o, s, r, a = t._i,
                    l = no.exec(a) || io.exec(a);
                if (l) {
                    for (h(t).iso = !0, e = 0, n = so.length; n > e; e++)
                        if (so[e][1].exec(l[1])) {
                            o = so[e][0], i = so[e][2] !== !1;
                            break
                        }
                    if (null == o) return void(t._isValid = !1);
                    if (l[3]) {
                        for (e = 0, n = ro.length; n > e; e++)
                            if (ro[e][1].exec(l[3])) {
                                s = (l[2] || " ") + ro[e][0];
                                break
                            }
                        if (null == s) return void(t._isValid = !1)
                    }
                    if (!i && null != s) return void(t._isValid = !1);
                    if (l[4]) {
                        if (!oo.exec(l[4])) return void(t._isValid = !1);
                        r = "Z"
                    }
                    t._f = o + (s || "") + (r || ""), jt(t)
                } else t._isValid = !1
            }

            function yt(t) {
                var n = ao.exec(t._i);
                return null !== n ? void(t._d = new Date(+n[1])) : (_t(t), void(t._isValid === !1 && (delete t._isValid, e.createFromInputFallback(t))))
            }

            function gt(t, e, n, i, o, s, r) {
                var a = new Date(t, e, n, i, o, s, r);
                return 100 > t && t >= 0 && isFinite(a.getFullYear()) && a.setFullYear(t), a
            }

            function vt(t) {
                var e = new Date(Date.UTC.apply(null, arguments));
                return 100 > t && t >= 0 && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t), e
            }

            function bt(t) {
                return Mt(t) ? 366 : 365
            }

            function Mt(t) {
                return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
            }

            function wt() {
                return Mt(this.year())
            }

            function Lt(t, e, n) {
                var i = 7 + e - n,
                    o = (7 + vt(t, 0, i).getUTCDay() - e) % 7;
                return -o + i - 1
            }

            function kt(t, e, n, i, o) {
                var s, r, a = (7 + n - i) % 7,
                    l = Lt(t, i, o),
                    d = 1 + 7 * (e - 1) + a + l;
                return 0 >= d ? (s = t - 1, r = bt(s) + d) : d > bt(t) ? (s = t + 1, r = d - bt(t)) : (s = t, r = d), {
                    year: s,
                    dayOfYear: r
                }
            }

            function Dt(t, e, n) {
                var i, o, s = Lt(t.year(), e, n),
                    r = Math.floor((t.dayOfYear() - s - 1) / 7) + 1;
                return 1 > r ? (o = t.year() - 1, i = r + Yt(o, e, n)) : r > Yt(t.year(), e, n) ? (i = r - Yt(t.year(), e, n), o = t.year() + 1) : (o = t.year(), i = r), {
                    week: i,
                    year: o
                }
            }

            function Yt(t, e, n) {
                var i = Lt(t, e, n),
                    o = Lt(t + 1, e, n);
                return (bt(t) - i + o) / 7
            }

            function St(t, e, n) {
                return null != t ? t : null != e ? e : n
            }

            function xt(t) {
                var n = new Date(e.now());
                return t._useUTC ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()] : [n.getFullYear(), n.getMonth(), n.getDate()]
            }

            function Tt(t) {
                var e, n, i, o, s = [];
                if (!t._d) {
                    for (i = xt(t), t._w && null == t._a[qi] && null == t._a[Ri] && Ct(t), t._dayOfYear && (o = St(t._a[Fi], i[Fi]), t._dayOfYear > bt(o) && (h(t)._overflowDayOfYear = !0), n = vt(o, 0, t._dayOfYear), t._a[Ri] = n.getUTCMonth(), t._a[qi] = n.getUTCDate()), e = 0; 3 > e && null == t._a[e]; ++e) t._a[e] = s[e] = i[e];
                    for (; 7 > e; e++) t._a[e] = s[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
                    24 === t._a[Ui] && 0 === t._a[Bi] && 0 === t._a[Vi] && 0 === t._a[Ji] && (t._nextDay = !0, t._a[Ui] = 0), t._d = (t._useUTC ? vt : gt).apply(null, s), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[Ui] = 24)
                }
            }

            function Ct(t) {
                var e, n, i, o, s, r, a, l;
                e = t._w, null != e.GG || null != e.W || null != e.E ? (s = 1, r = 4, n = St(e.GG, t._a[Fi], Dt(Wt(), 1, 4).year), i = St(e.W, 1), o = St(e.E, 1), (1 > o || o > 7) && (l = !0)) : (s = t._locale._week.dow, r = t._locale._week.doy, n = St(e.gg, t._a[Fi], Dt(Wt(), s, r).year), i = St(e.w, 1), null != e.d ? (o = e.d, (0 > o || o > 6) && (l = !0)) : null != e.e ? (o = e.e + s, (e.e < 0 || e.e > 6) && (l = !0)) : o = s), 1 > i || i > Yt(n, s, r) ? h(t)._overflowWeeks = !0 : null != l ? h(t)._overflowWeekday = !0 : (a = kt(n, i, o, s, r), t._a[Fi] = a.year, t._dayOfYear = a.dayOfYear)
            }

            function jt(t) {
                if (t._f === e.ISO_8601) return void _t(t);
                t._a = [], h(t).empty = !0;
                var n, i, o, s, r, a = "" + t._i,
                    l = a.length,
                    d = 0;
                for (o = X(t._f, t._locale).match(vi) || [], n = 0; n < o.length; n++) s = o[n], i = (a.match(Q(s, t)) || [])[0], i && (r = a.substr(0, a.indexOf(i)), r.length > 0 && h(t).unusedInput.push(r), a = a.slice(a.indexOf(i) + i.length), d += i.length), wi[s] ? (i ? h(t).empty = !1 : h(t).unusedTokens.push(s), it(s, i, t)) : t._strict && !i && h(t).unusedTokens.push(s);
                h(t).charsLeftOver = l - d, a.length > 0 && h(t).unusedInput.push(a), h(t).bigHour === !0 && t._a[Ui] <= 12 && t._a[Ui] > 0 && (h(t).bigHour = void 0), h(t).parsedDateParts = t._a.slice(0), h(t).meridiem = t._meridiem, t._a[Ui] = Ht(t._locale, t._a[Ui], t._meridiem), Tt(t), mt(t)
            }

            function Ht(t, e, n) {
                var i;
                return null == n ? e : null != t.meridiemHour ? t.meridiemHour(e, n) : null != t.isPM ? (i = t.isPM(n), i && 12 > e && (e += 12), i || 12 !== e || (e = 0), e) : e
            }

            function Et(t) {
                var e, n, i, o, s;
                if (0 === t._f.length) return h(t).invalidFormat = !0, void(t._d = new Date(NaN));
                for (o = 0; o < t._f.length; o++) s = 0, e = _({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[o], jt(e), p(e) && (s += h(e).charsLeftOver, s += 10 * h(e).unusedTokens.length, h(e).score = s, (null == i || i > s) && (i = s, n = e));
                d(t, n || e)
            }

            function Pt(t) {
                if (!t._d) {
                    var e = N(t._i);
                    t._a = a([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function(t) {
                        return t && parseInt(t, 10)
                    }), Tt(t)
                }
            }

            function At(t) {
                var e = new y(mt(Ot(t)));
                return e._nextDay && (e.add(1, "d"), e._nextDay = void 0), e
            }

            function Ot(t) {
                var e = t._i,
                    n = t._f;
                return t._locale = t._locale || O(t._l), null === e || void 0 === n && "" === e ? f({
                    nullInput: !0
                }) : ("string" == typeof e && (t._i = e = t._locale.preparse(e)), g(e) ? new y(mt(e)) : (o(n) ? Et(t) : n ? jt(t) : r(e) ? t._d = e : $t(t), p(t) || (t._d = null), t))
            }

            function $t(t) {
                var n = t._i;
                void 0 === n ? t._d = new Date(e.now()) : r(n) ? t._d = new Date(n.valueOf()) : "string" == typeof n ? yt(t) : o(n) ? (t._a = a(n.slice(0), function(t) {
                    return parseInt(t, 10)
                }), Tt(t)) : "object" === ("undefined" == typeof n ? "undefined" : s(n)) ? Pt(t) : "number" == typeof n ? t._d = new Date(n) : e.createFromInputFallback(t)
            }

            function zt(t, e, n, i, o) {
                var s = {};
                return "boolean" == typeof n && (i = n, n = void 0), s._isAMomentObject = !0, s._useUTC = s._isUTC = o, s._l = n, s._i = t, s._f = e, s._strict = i, At(s)
            }

            function Wt(t, e, n, i) {
                return zt(t, e, n, i, !1)
            }

            function Nt(t, e) {
                var n, i;
                if (1 === e.length && o(e[0]) && (e = e[0]), !e.length) return Wt();
                for (n = e[0], i = 1; i < e.length; ++i) e[i].isValid() && !e[i][t](n) || (n = e[i]);
                return n
            }

            function It() {
                var t = [].slice.call(arguments, 0);
                return Nt("isBefore", t)
            }

            function Ft() {
                var t = [].slice.call(arguments, 0);
                return Nt("isAfter", t)
            }

            function Rt(t) {
                var e = N(t),
                    n = e.year || 0,
                    i = e.quarter || 0,
                    o = e.month || 0,
                    s = e.week || 0,
                    r = e.day || 0,
                    a = e.hour || 0,
                    l = e.minute || 0,
                    d = e.second || 0,
                    u = e.millisecond || 0;
                this._milliseconds = +u + 1e3 * d + 6e4 * l + 1e3 * a * 60 * 60, this._days = +r + 7 * s, this._months = +o + 3 * i + 12 * n, this._data = {}, this._locale = O(), this._bubble()
            }

            function qt(t) {
                return t instanceof Rt
            }

            function Ut(t, e) {
                B(t, 0, 0, function() {
                    var t = this.utcOffset(),
                        n = "+";
                    return 0 > t && (t = -t, n = "-"), n + U(~~(t / 60), 2) + e + U(~~t % 60, 2)
                })
            }

            function Bt(t, e) {
                var n = (e || "").match(t) || [],
                    i = n[n.length - 1] || [],
                    o = (i + "").match(po) || ["-", 0, 0],
                    s = +(60 * o[1]) + b(o[2]);
                return "+" === o[0] ? s : -s
            }

            function Vt(t, n) {
                var i, o;
                return n._isUTC ? (i = n.clone(), o = (g(t) || r(t) ? t.valueOf() : Wt(t).valueOf()) - i.valueOf(), i._d.setTime(i._d.valueOf() + o), e.updateOffset(i, !1), i) : Wt(t).local()
            }

            function Jt(t) {
                return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
            }

            function Gt(t, n) {
                var i, o = this._offset || 0;
                return this.isValid() ? null != t ? ("string" == typeof t ? t = Bt($i, t) : Math.abs(t) < 16 && (t = 60 * t), !this._isUTC && n && (i = Jt(this)), this._offset = t, this._isUTC = !0, null != i && this.add(i, "m"), o !== t && (!n || this._changeInProgress ? he(this, re(t - o, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, e.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? o : Jt(this) : null != t ? this : NaN
            }

            function Xt(t, e) {
                return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
            }

            function Kt(t) {
                return this.utcOffset(0, t)
            }

            function Qt(t) {
                return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Jt(this), "m")), this
            }

            function Zt() {
                return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(Bt(Oi, this._i)), this
            }

            function te(t) {
                return this.isValid() ? (t = t ? Wt(t).utcOffset() : 0, (this.utcOffset() - t) % 60 === 0) : !1
            }

            function ee() {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
            }

            function ne() {
                if (!m(this._isDSTShifted)) return this._isDSTShifted;
                var t = {};
                if (_(t, this), t = Ot(t), t._a) {
                    var e = t._isUTC ? u(t._a) : Wt(t._a);
                    this._isDSTShifted = this.isValid() && M(t._a, e.toArray()) > 0
                } else this._isDSTShifted = !1;
                return this._isDSTShifted
            }

            function ie() {
                return this.isValid() ? !this._isUTC : !1
            }

            function oe() {
                return this.isValid() ? this._isUTC : !1
            }

            function se() {
                return this.isValid() ? this._isUTC && 0 === this._offset : !1
            }

            function re(t, e) {
                var n, i, o, r = t,
                    a = null;
                return qt(t) ? r = {
                    ms: t._milliseconds,
                    d: t._days,
                    M: t._months
                } : "number" == typeof t ? (r = {}, e ? r[e] = t : r.milliseconds = t) : (a = fo.exec(t)) ? (n = "-" === a[1] ? -1 : 1, r = {
                    y: 0,
                    d: b(a[qi]) * n,
                    h: b(a[Ui]) * n,
                    m: b(a[Bi]) * n,
                    s: b(a[Vi]) * n,
                    ms: b(a[Ji]) * n
                }) : (a = mo.exec(t)) ? (n = "-" === a[1] ? -1 : 1, r = {
                    y: ae(a[2], n),
                    M: ae(a[3], n),
                    w: ae(a[4], n),
                    d: ae(a[5], n),
                    h: ae(a[6], n),
                    m: ae(a[7], n),
                    s: ae(a[8], n)
                }) : null == r ? r = {} : "object" === ("undefined" == typeof r ? "undefined" : s(r)) && ("from" in r || "to" in r) && (o = de(Wt(r.from), Wt(r.to)), r = {}, r.ms = o.milliseconds, r.M = o.months), i = new Rt(r), qt(t) && l(t, "_locale") && (i._locale = t._locale), i
            }

            function ae(t, e) {
                var n = t && parseFloat(t.replace(",", "."));
                return (isNaN(n) ? 0 : n) * e
            }

            function le(t, e) {
                var n = {
                    milliseconds: 0,
                    months: 0
                };
                return n.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(n.months, "M").isAfter(e) && --n.months, n.milliseconds = +e - +t.clone().add(n.months, "M"), n
            }

            function de(t, e) {
                var n;
                return t.isValid() && e.isValid() ? (e = Vt(e, t), t.isBefore(e) ? n = le(t, e) : (n = le(e, t), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : {
                    milliseconds: 0,
                    months: 0
                }
            }

            function ue(t) {
                return 0 > t ? -1 * Math.round(-1 * t) : Math.round(t)
            }

            function ce(t, e) {
                return function(n, i) {
                    var o, s;
                    return null === i || isNaN(+i) || (k(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period)."), s = n, n = i, i = s), n = "string" == typeof n ? +n : n, o = re(n, i), he(this, o, t), this
                }
            }

            function he(t, n, i, o) {
                var s = n._milliseconds,
                    r = ue(n._days),
                    a = ue(n._months);
                t.isValid() && (o = null == o ? !0 : o, s && t._d.setTime(t._d.valueOf() + s * i), r && R(t, "Date", F(t, "Date") + r * i), a && dt(t, F(t, "Month") + a * i), o && e.updateOffset(t, r || a))
            }

            function pe(t, e) {
                var n = t || Wt(),
                    i = Vt(n, this).startOf("day"),
                    o = this.diff(i, "days", !0),
                    s = -6 > o ? "sameElse" : -1 > o ? "lastWeek" : 0 > o ? "lastDay" : 1 > o ? "sameDay" : 2 > o ? "nextDay" : 7 > o ? "nextWeek" : "sameElse",
                    r = e && (D(e[s]) ? e[s]() : e[s]);
                return this.format(r || this.localeData().calendar(s, this, Wt(n)))
            }

            function fe() {
                return new y(this)
            }

            function me(t, e) {
                var n = g(t) ? t : Wt(t);
                return this.isValid() && n.isValid() ? (e = W(m(e) ? "millisecond" : e), "millisecond" === e ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(e).valueOf()) : !1
            }

            function _e(t, e) {
                var n = g(t) ? t : Wt(t);
                return this.isValid() && n.isValid() ? (e = W(m(e) ? "millisecond" : e), "millisecond" === e ? this.valueOf() < n.valueOf() : this.clone().endOf(e).valueOf() < n.valueOf()) : !1
            }

            function ye(t, e, n, i) {
                return i = i || "()", ("(" === i[0] ? this.isAfter(t, n) : !this.isBefore(t, n)) && (")" === i[1] ? this.isBefore(e, n) : !this.isAfter(e, n))
            }

            function ge(t, e) {
                var n, i = g(t) ? t : Wt(t);
                return this.isValid() && i.isValid() ? (e = W(e || "millisecond"), "millisecond" === e ? this.valueOf() === i.valueOf() : (n = i.valueOf(), this.clone().startOf(e).valueOf() <= n && n <= this.clone().endOf(e).valueOf())) : !1
            }

            function ve(t, e) {
                return this.isSame(t, e) || this.isAfter(t, e)
            }

            function be(t, e) {
                return this.isSame(t, e) || this.isBefore(t, e)
            }

            function Me(t, e, n) {
                var i, o, s, r;
                return this.isValid() ? (i = Vt(t, this), i.isValid() ? (o = 6e4 * (i.utcOffset() - this.utcOffset()), e = W(e), "year" === e || "month" === e || "quarter" === e ? (r = we(this, i), "quarter" === e ? r /= 3 : "year" === e && (r /= 12)) : (s = this - i, r = "second" === e ? s / 1e3 : "minute" === e ? s / 6e4 : "hour" === e ? s / 36e5 : "day" === e ? (s - o) / 864e5 : "week" === e ? (s - o) / 6048e5 : s), n ? r : v(r)) : NaN) : NaN
            }

            function we(t, e) {
                var n, i, o = 12 * (e.year() - t.year()) + (e.month() - t.month()),
                    s = t.clone().add(o, "months");
                return 0 > e - s ? (n = t.clone().add(o - 1, "months"), i = (e - s) / (s - n)) : (n = t.clone().add(o + 1, "months"), i = (e - s) / (n - s)), -(o + i) || 0
            }

            function Le() {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            }

            function ke() {
                var t = this.clone().utc();
                return 0 < t.year() && t.year() <= 9999 ? D(Date.prototype.toISOString) ? this.toDate().toISOString() : G(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : G(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
            }

            function De(t) {
                t || (t = this.isUtc() ? e.defaultFormatUtc : e.defaultFormat);
                var n = G(this, t);
                return this.localeData().postformat(n)
            }

            function Ye(t, e) {
                return this.isValid() && (g(t) && t.isValid() || Wt(t).isValid()) ? re({
                    to: this,
                    from: t
                }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
            }

            function Se(t) {
                return this.from(Wt(), t)
            }

            function xe(t, e) {
                return this.isValid() && (g(t) && t.isValid() || Wt(t).isValid()) ? re({
                    from: this,
                    to: t
                }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
            }

            function Te(t) {
                return this.to(Wt(), t)
            }

            function Ce(t) {
                var e;
                return void 0 === t ? this._locale._abbr : (e = O(t), null != e && (this._locale = e), this)
            }

            function je() {
                return this._locale
            }

            function He(t) {
                switch (t = W(t)) {
                    case "year":
                        this.month(0);
                    case "quarter":
                    case "month":
                        this.date(1);
                    case "week":
                    case "isoWeek":
                    case "day":
                    case "date":
                        this.hours(0);
                    case "hour":
                        this.minutes(0);
                    case "minute":
                        this.seconds(0);
                    case "second":
                        this.milliseconds(0)
                }
                return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this
            }

            function Ee(t) {
                return t = W(t), void 0 === t || "millisecond" === t ? this : ("date" === t && (t = "day"), this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms"))
            }

            function Pe() {
                return this._d.valueOf() - 6e4 * (this._offset || 0)
            }

            function Ae() {
                return Math.floor(this.valueOf() / 1e3)
            }

            function Oe() {
                return this._offset ? new Date(this.valueOf()) : this._d
            }

            function $e() {
                var t = this;
                return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()]
            }

            function ze() {
                var t = this;
                return {
                    years: t.year(),
                    months: t.month(),
                    date: t.date(),
                    hours: t.hours(),
                    minutes: t.minutes(),
                    seconds: t.seconds(),
                    milliseconds: t.milliseconds()
                }
            }

            function We() {
                return this.isValid() ? this.toISOString() : null
            }

            function Ne() {
                return p(this)
            }

            function Ie() {
                return d({}, h(this))
            }

            function Fe() {
                return h(this).overflow
            }

            function Re() {
                return {
                    input: this._i,
                    format: this._f,
                    locale: this._locale,
                    isUTC: this._isUTC,
                    strict: this._strict
                }
            }

            function qe(t, e) {
                B(0, [t, t.length], 0, e)
            }

            function Ue(t) {
                return Ge.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
            }

            function Be(t) {
                return Ge.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
            }

            function Ve() {
                return Yt(this.year(), 1, 4)
            }

            function Je() {
                var t = this.localeData()._week;
                return Yt(this.year(), t.dow, t.doy)
            }

            function Ge(t, e, n, i, o) {
                var s;
                return null == t ? Dt(this, i, o).year : (s = Yt(t, i, o), e > s && (e = s), Xe.call(this, t, e, n, i, o))
            }

            function Xe(t, e, n, i, o) {
                var s = kt(t, e, n, i, o),
                    r = vt(s.year, 0, s.dayOfYear);
                return this.year(r.getUTCFullYear()), this.month(r.getUTCMonth()), this.date(r.getUTCDate()), this
            }

            function Ke(t) {
                return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
            }

            function Qe(t) {
                return Dt(t, this._week.dow, this._week.doy).week
            }

            function Ze() {
                return this._week.dow
            }

            function tn() {
                return this._week.doy
            }

            function en(t) {
                var e = this.localeData().week(this);
                return null == t ? e : this.add(7 * (t - e), "d")
            }

            function nn(t) {
                var e = Dt(this, 1, 4).week;
                return null == t ? e : this.add(7 * (t - e), "d")
            }

            function on(t, e) {
                return "string" != typeof t ? t : isNaN(t) ? (t = e.weekdaysParse(t), "number" == typeof t ? t : null) : parseInt(t, 10)
            }

            function sn(t, e) {
                return o(this._weekdays) ? this._weekdays[t.day()] : this._weekdays[this._weekdays.isFormat.test(e) ? "format" : "standalone"][t.day()]
            }

            function rn(t) {
                return this._weekdaysShort[t.day()]
            }

            function an(t) {
                return this._weekdaysMin[t.day()]
            }

            function ln(t, e, n) {
                var i, o, s, r = t.toLocaleLowerCase();
                if (!this._weekdaysParse)
                    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], i = 0; 7 > i; ++i) s = u([2e3, 1]).day(i), this._minWeekdaysParse[i] = this.weekdaysMin(s, "").toLocaleLowerCase(), this._shortWeekdaysParse[i] = this.weekdaysShort(s, "").toLocaleLowerCase(), this._weekdaysParse[i] = this.weekdays(s, "").toLocaleLowerCase();
                return n ? "dddd" === e ? (o = _i.call(this._weekdaysParse, r), -1 !== o ? o : null) : "ddd" === e ? (o = _i.call(this._shortWeekdaysParse, r), -1 !== o ? o : null) : (o = _i.call(this._minWeekdaysParse, r), -1 !== o ? o : null) : "dddd" === e ? (o = _i.call(this._weekdaysParse, r), -1 !== o ? o : (o = _i.call(this._shortWeekdaysParse, r), -1 !== o ? o : (o = _i.call(this._minWeekdaysParse, r), -1 !== o ? o : null))) : "ddd" === e ? (o = _i.call(this._shortWeekdaysParse, r), -1 !== o ? o : (o = _i.call(this._weekdaysParse, r), -1 !== o ? o : (o = _i.call(this._minWeekdaysParse, r), -1 !== o ? o : null))) : (o = _i.call(this._minWeekdaysParse, r), -1 !== o ? o : (o = _i.call(this._weekdaysParse, r), -1 !== o ? o : (o = _i.call(this._shortWeekdaysParse, r), -1 !== o ? o : null)))
            }

            function dn(t, e, n) {
                var i, o, s;
                if (this._weekdaysParseExact) return ln.call(this, t, e, n);
                for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), i = 0; 7 > i; i++) {
                    if (o = u([2e3, 1]).day(i), n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(o, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(o, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(o, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[i] || (s = "^" + this.weekdays(o, "") + "|^" + this.weekdaysShort(o, "") + "|^" + this.weekdaysMin(o, ""), this._weekdaysParse[i] = new RegExp(s.replace(".", ""), "i")), n && "dddd" === e && this._fullWeekdaysParse[i].test(t)) return i;
                    if (n && "ddd" === e && this._shortWeekdaysParse[i].test(t)) return i;
                    if (n && "dd" === e && this._minWeekdaysParse[i].test(t)) return i;
                    if (!n && this._weekdaysParse[i].test(t)) return i
                }
            }

            function un(t) {
                if (!this.isValid()) return null != t ? this : NaN;
                var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != t ? (t = on(t, this.localeData()), this.add(t - e, "d")) : e
            }

            function cn(t) {
                if (!this.isValid()) return null != t ? this : NaN;
                var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == t ? e : this.add(t - e, "d")
            }

            function hn(t) {
                return this.isValid() ? null == t ? this.day() || 7 : this.day(this.day() % 7 ? t : t - 7) : null != t ? this : NaN
            }

            function pn(t) {
                return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || _n.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex
            }

            function fn(t) {
                return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || _n.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex
            }

            function mn(t) {
                return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || _n.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex
            }

            function _n() {
                function t(t, e) {
                    return e.length - t.length
                }
                var e, n, i, o, s, r = [],
                    a = [],
                    l = [],
                    d = [];
                for (e = 0; 7 > e; e++) n = u([2e3, 1]).day(e), i = this.weekdaysMin(n, ""), o = this.weekdaysShort(n, ""), s = this.weekdays(n, ""), r.push(i), a.push(o), l.push(s), d.push(i), d.push(o), d.push(s);
                for (r.sort(t), a.sort(t), l.sort(t), d.sort(t), e = 0; 7 > e; e++) a[e] = tt(a[e]), l[e] = tt(l[e]), d[e] = tt(d[e]);
                this._weekdaysRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")
            }

            function yn(t) {
                var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                return null == t ? e : this.add(t - e, "d")
            }

            function gn() {
                return this.hours() % 12 || 12
            }

            function vn() {
                return this.hours() || 24
            }

            function bn(t, e) {
                B(t, 0, 0, function() {
                    return this.localeData().meridiem(this.hours(), this.minutes(), e)
                })
            }

            function Mn(t, e) {
                return e._meridiemParse
            }

            function wn(t) {
                return "p" === (t + "").toLowerCase().charAt(0)
            }

            function Ln(t, e, n) {
                return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
            }

            function kn(t, e) {
                e[Ji] = b(1e3 * ("0." + t))
            }

            function Dn() {
                return this._isUTC ? "UTC" : ""
            }

            function Yn() {
                return this._isUTC ? "Coordinated Universal Time" : ""
            }

            function Sn(t) {
                return Wt(1e3 * t)
            }

            function xn() {
                return Wt.apply(null, arguments).parseZone()
            }

            function Tn(t, e, n) {
                var i = this._calendar[t];
                return D(i) ? i.call(e, n) : i
            }

            function Cn(t) {
                var e = this._longDateFormat[t],
                    n = this._longDateFormat[t.toUpperCase()];
                return e || !n ? e : (this._longDateFormat[t] = n.replace(/MMMM|MM|DD|dddd/g, function(t) {
                    return t.slice(1)
                }), this._longDateFormat[t])
            }

            function jn() {
                return this._invalidDate
            }

            function Hn(t) {
                return this._ordinal.replace("%d", t)
            }

            function En(t) {
                return t
            }

            function Pn(t, e, n, i) {
                var o = this._relativeTime[n];
                return D(o) ? o(t, e, n, i) : o.replace(/%d/i, t)
            }

            function An(t, e) {
                var n = this._relativeTime[t > 0 ? "future" : "past"];
                return D(n) ? n(e) : n.replace(/%s/i, e)
            }

            function On(t, e, n, i) {
                var o = O(),
                    s = u().set(i, e);
                return o[n](s, t)
            }

            function $n(t, e, n) {
                if ("number" == typeof t && (e = t, t = void 0), t = t || "", null != e) return On(t, e, n, "month");
                var i, o = [];
                for (i = 0; 12 > i; i++) o[i] = On(t, i, n, "month");
                return o
            }

            function zn(t, e, n, i) {
                "boolean" == typeof t ? ("number" == typeof e && (n = e, e = void 0), e = e || "") : (e = t, n = e, t = !1, "number" == typeof e && (n = e, e = void 0), e = e || "");
                var o = O(),
                    s = t ? o._week.dow : 0;
                if (null != n) return On(e, (n + s) % 7, i, "day");
                var r, a = [];
                for (r = 0; 7 > r; r++) a[r] = On(e, (r + s) % 7, i, "day");
                return a
            }

            function Wn(t, e) {
                return $n(t, e, "months")
            }

            function Nn(t, e) {
                return $n(t, e, "monthsShort")
            }

            function In(t, e, n) {
                return zn(t, e, n, "weekdays")
            }

            function Fn(t, e, n) {
                return zn(t, e, n, "weekdaysShort")
            }

            function Rn(t, e, n) {
                return zn(t, e, n, "weekdaysMin")
            }

            function qn() {
                var t = this._data;
                return this._milliseconds = Fo(this._milliseconds), this._days = Fo(this._days), this._months = Fo(this._months), t.milliseconds = Fo(t.milliseconds), t.seconds = Fo(t.seconds), t.minutes = Fo(t.minutes), t.hours = Fo(t.hours), t.months = Fo(t.months), t.years = Fo(t.years), this
            }

            function Un(t, e, n, i) {
                var o = re(e, n);
                return t._milliseconds += i * o._milliseconds, t._days += i * o._days, t._months += i * o._months, t._bubble()
            }

            function Bn(t, e) {
                return Un(this, t, e, 1)
            }

            function Vn(t, e) {
                return Un(this, t, e, -1)
            }

            function Jn(t) {
                return 0 > t ? Math.floor(t) : Math.ceil(t)
            }

            function Gn() {
                var t, e, n, i, o, s = this._milliseconds,
                    r = this._days,
                    a = this._months,
                    l = this._data;
                return s >= 0 && r >= 0 && a >= 0 || 0 >= s && 0 >= r && 0 >= a || (s += 864e5 * Jn(Kn(a) + r), r = 0, a = 0), l.milliseconds = s % 1e3, t = v(s / 1e3), l.seconds = t % 60, e = v(t / 60), l.minutes = e % 60, n = v(e / 60), l.hours = n % 24, r += v(n / 24), o = v(Xn(r)), a += o, r -= Jn(Kn(o)), i = v(a / 12), a %= 12, l.days = r, l.months = a, l.years = i, this
            }

            function Xn(t) {
                return 4800 * t / 146097
            }

            function Kn(t) {
                return 146097 * t / 4800
            }

            function Qn(t) {
                var e, n, i = this._milliseconds;
                if (t = W(t), "month" === t || "year" === t) return e = this._days + i / 864e5, n = this._months + Xn(e), "month" === t ? n : n / 12;
                switch (e = this._days + Math.round(Kn(this._months)), t) {
                    case "week":
                        return e / 7 + i / 6048e5;
                    case "day":
                        return e + i / 864e5;
                    case "hour":
                        return 24 * e + i / 36e5;
                    case "minute":
                        return 1440 * e + i / 6e4;
                    case "second":
                        return 86400 * e + i / 1e3;
                    case "millisecond":
                        return Math.floor(864e5 * e) + i;
                    default:
                        throw new Error("Unknown unit " + t)
                }
            }

            function Zn() {
                return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * b(this._months / 12)
            }

            function ti(t) {
                return function() {
                    return this.as(t)
                }
            }

            function ei(t) {
                return t = W(t), this[t + "s"]()
            }

            function ni(t) {
                return function() {
                    return this._data[t]
                }
            }

            function ii() {
                return v(this.days() / 7)
            }

            function oi(t, e, n, i, o) {
                return o.relativeTime(e || 1, !!n, t, i)
            }

            function si(t, e, n) {
                var i = re(t).abs(),
                    o = os(i.as("s")),
                    s = os(i.as("m")),
                    r = os(i.as("h")),
                    a = os(i.as("d")),
                    l = os(i.as("M")),
                    d = os(i.as("y")),
                    u = o < ss.s && ["s", o] || 1 >= s && ["m"] || s < ss.m && ["mm", s] || 1 >= r && ["h"] || r < ss.h && ["hh", r] || 1 >= a && ["d"] || a < ss.d && ["dd", a] || 1 >= l && ["M"] || l < ss.M && ["MM", l] || 1 >= d && ["y"] || ["yy", d];
                return u[2] = e, u[3] = +t > 0, u[4] = n, oi.apply(null, u)
            }

            function ri(t, e) {
                return void 0 === ss[t] ? !1 : void 0 === e ? ss[t] : (ss[t] = e, !0)
            }

            function ai(t) {
                var e = this.localeData(),
                    n = si(this, !t, e);
                return t && (n = e.pastFuture(+this, n)), e.postformat(n)
            }

            function li() {
                var t, e, n, i = rs(this._milliseconds) / 1e3,
                    o = rs(this._days),
                    s = rs(this._months);
                t = v(i / 60), e = v(t / 60), i %= 60, t %= 60, n = v(s / 12), s %= 12;
                var r = n,
                    a = s,
                    l = o,
                    d = e,
                    u = t,
                    c = i,
                    h = this.asSeconds();
                return h ? (0 > h ? "-" : "") + "P" + (r ? r + "Y" : "") + (a ? a + "M" : "") + (l ? l + "D" : "") + (d || u || c ? "T" : "") + (d ? d + "H" : "") + (u ? u + "M" : "") + (c ? c + "S" : "") : "P0D"
            }
            var di, ui;
            ui = Array.prototype.some ? Array.prototype.some : function(t) {
                for (var e = Object(this), n = e.length >>> 0, i = 0; n > i; i++)
                    if (i in e && t.call(this, e[i], i, e)) return !0;
                return !1
            };
            var ci = e.momentProperties = [],
                hi = !1,
                pi = {};
            e.suppressDeprecationWarnings = !1, e.deprecationHandler = null;
            var fi;
            fi = Object.keys ? Object.keys : function(t) {
                var e, n = [];
                for (e in t) l(t, e) && n.push(e);
                return n
            };
            var mi, _i, yi = {},
                gi = {},
                vi = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                bi = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                Mi = {},
                wi = {},
                Li = /\d/,
                ki = /\d\d/,
                Di = /\d{3}/,
                Yi = /\d{4}/,
                Si = /[+-]?\d{6}/,
                xi = /\d\d?/,
                Ti = /\d\d\d\d?/,
                Ci = /\d\d\d\d\d\d?/,
                ji = /\d{1,3}/,
                Hi = /\d{1,4}/,
                Ei = /[+-]?\d{1,6}/,
                Pi = /\d+/,
                Ai = /[+-]?\d+/,
                Oi = /Z|[+-]\d\d:?\d\d/gi,
                $i = /Z|[+-]\d\d(?::?\d\d)?/gi,
                zi = /[+-]?\d+(\.\d{1,3})?/,
                Wi = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
                Ni = {},
                Ii = {},
                Fi = 0,
                Ri = 1,
                qi = 2,
                Ui = 3,
                Bi = 4,
                Vi = 5,
                Ji = 6,
                Gi = 7,
                Xi = 8;
            _i = Array.prototype.indexOf ? Array.prototype.indexOf : function(t) {
                var e;
                for (e = 0; e < this.length; ++e)
                    if (this[e] === t) return e;
                return -1
            }, B("M", ["MM", 2], "Mo", function() {
                return this.month() + 1
            }), B("MMM", 0, 0, function(t) {
                return this.localeData().monthsShort(this, t)
            }), B("MMMM", 0, 0, function(t) {
                return this.localeData().months(this, t)
            }), z("month", "M"), K("M", xi), K("MM", xi, ki), K("MMM", function(t, e) {
                return e.monthsShortRegex(t)
            }), K("MMMM", function(t, e) {
                return e.monthsRegex(t)
            }), et(["M", "MM"], function(t, e) {
                e[Ri] = b(t) - 1
            }), et(["MMM", "MMMM"], function(t, e, n, i) {
                var o = n._locale.monthsParse(t, i, n._strict);
                null != o ? e[Ri] = o : h(n).invalidMonth = t
            });
            var Ki = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,
                Qi = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                Zi = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                to = Wi,
                eo = Wi,
                no = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
                io = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
                oo = /Z|[+-]\d\d(?::?\d\d)?/,
                so = [
                    ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                    ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                    ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                    ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                    ["YYYY-DDD", /\d{4}-\d{3}/],
                    ["YYYY-MM", /\d{4}-\d\d/, !1],
                    ["YYYYYYMMDD", /[+-]\d{10}/],
                    ["YYYYMMDD", /\d{8}/],
                    ["GGGG[W]WWE", /\d{4}W\d{3}/],
                    ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                    ["YYYYDDD", /\d{7}/]
                ],
                ro = [
                    ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                    ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                    ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                    ["HH:mm", /\d\d:\d\d/],
                    ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                    ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                    ["HHmmss", /\d\d\d\d\d\d/],
                    ["HHmm", /\d\d\d\d/],
                    ["HH", /\d\d/]
                ],
                ao = /^\/?Date\((\-?\d+)/i;
            e.createFromInputFallback = L("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(t) {
                t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
            }), B("Y", 0, 0, function() {
                var t = this.year();
                return 9999 >= t ? "" + t : "+" + t
            }), B(0, ["YY", 2], 0, function() {
                return this.year() % 100
            }), B(0, ["YYYY", 4], 0, "year"), B(0, ["YYYYY", 5], 0, "year"), B(0, ["YYYYYY", 6, !0], 0, "year"), z("year", "y"), K("Y", Ai), K("YY", xi, ki), K("YYYY", Hi, Yi), K("YYYYY", Ei, Si), K("YYYYYY", Ei, Si), et(["YYYYY", "YYYYYY"], Fi), et("YYYY", function(t, n) {
                n[Fi] = 2 === t.length ? e.parseTwoDigitYear(t) : b(t)
            }), et("YY", function(t, n) {
                n[Fi] = e.parseTwoDigitYear(t)
            }), et("Y", function(t, e) {
                e[Fi] = parseInt(t, 10)
            }), e.parseTwoDigitYear = function(t) {
                return b(t) + (b(t) > 68 ? 1900 : 2e3)
            };
            var lo = I("FullYear", !0);
            e.ISO_8601 = function() {};
            var uo = L("moment().min is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function() {
                    var t = Wt.apply(null, arguments);
                    return this.isValid() && t.isValid() ? this > t ? this : t : f()
                }),
                co = L("moment().max is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function() {
                    var t = Wt.apply(null, arguments);
                    return this.isValid() && t.isValid() ? t > this ? this : t : f()
                }),
                ho = function() {
                    return Date.now ? Date.now() : +new Date
                };
            Ut("Z", ":"), Ut("ZZ", ""), K("Z", $i), K("ZZ", $i), et(["Z", "ZZ"], function(t, e, n) {
                n._useUTC = !0, n._tzm = Bt($i, t)
            });
            var po = /([\+\-]|\d\d)/gi;
            e.updateOffset = function() {};
            var fo = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/,
                mo = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
            re.fn = Rt.prototype;
            var _o = ce(1, "add"),
                yo = ce(-1, "subtract");
            e.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", e.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
            var go = L("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) {
                return void 0 === t ? this.localeData() : this.locale(t)
            });
            B(0, ["gg", 2], 0, function() {
                return this.weekYear() % 100
            }), B(0, ["GG", 2], 0, function() {
                return this.isoWeekYear() % 100
            }), qe("gggg", "weekYear"), qe("ggggg", "weekYear"), qe("GGGG", "isoWeekYear"), qe("GGGGG", "isoWeekYear"), z("weekYear", "gg"), z("isoWeekYear", "GG"), K("G", Ai), K("g", Ai), K("GG", xi, ki), K("gg", xi, ki), K("GGGG", Hi, Yi), K("gggg", Hi, Yi), K("GGGGG", Ei, Si), K("ggggg", Ei, Si), nt(["gggg", "ggggg", "GGGG", "GGGGG"], function(t, e, n, i) {
                e[i.substr(0, 2)] = b(t)
            }), nt(["gg", "GG"], function(t, n, i, o) {
                n[o] = e.parseTwoDigitYear(t)
            }), B("Q", 0, "Qo", "quarter"), z("quarter", "Q"), K("Q", Li), et("Q", function(t, e) {
                e[Ri] = 3 * (b(t) - 1)
            }), B("w", ["ww", 2], "wo", "week"), B("W", ["WW", 2], "Wo", "isoWeek"), z("week", "w"), z("isoWeek", "W"), K("w", xi), K("ww", xi, ki), K("W", xi), K("WW", xi, ki), nt(["w", "ww", "W", "WW"], function(t, e, n, i) {
                e[i.substr(0, 1)] = b(t)
            });
            var vo = {
                dow: 0,
                doy: 6
            };
            B("D", ["DD", 2], "Do", "date"), z("date", "D"), K("D", xi), K("DD", xi, ki), K("Do", function(t, e) {
                return t ? e._ordinalParse : e._ordinalParseLenient
            }), et(["D", "DD"], qi), et("Do", function(t, e) {
                e[qi] = b(t.match(xi)[0], 10)
            });
            var bo = I("Date", !0);
            B("d", 0, "do", "day"), B("dd", 0, 0, function(t) {
                return this.localeData().weekdaysMin(this, t)
            }), B("ddd", 0, 0, function(t) {
                return this.localeData().weekdaysShort(this, t)
            }), B("dddd", 0, 0, function(t) {
                return this.localeData().weekdays(this, t)
            }), B("e", 0, 0, "weekday"), B("E", 0, 0, "isoWeekday"), z("day", "d"), z("weekday", "e"), z("isoWeekday", "E"), K("d", xi), K("e", xi), K("E", xi), K("dd", function(t, e) {
                return e.weekdaysMinRegex(t)
            }), K("ddd", function(t, e) {
                return e.weekdaysShortRegex(t)
            }), K("dddd", function(t, e) {
                return e.weekdaysRegex(t)
            }), nt(["dd", "ddd", "dddd"], function(t, e, n, i) {
                var o = n._locale.weekdaysParse(t, i, n._strict);
                null != o ? e.d = o : h(n).invalidWeekday = t
            }), nt(["d", "e", "E"], function(t, e, n, i) {
                e[i] = b(t)
            });
            var Mo = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                wo = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                Lo = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                ko = Wi,
                Do = Wi,
                Yo = Wi;
            B("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), z("dayOfYear", "DDD"), K("DDD", ji), K("DDDD", Di), et(["DDD", "DDDD"], function(t, e, n) {
                n._dayOfYear = b(t)
            }), B("H", ["HH", 2], 0, "hour"), B("h", ["hh", 2], 0, gn), B("k", ["kk", 2], 0, vn), B("hmm", 0, 0, function() {
                return "" + gn.apply(this) + U(this.minutes(), 2)
            }), B("hmmss", 0, 0, function() {
                return "" + gn.apply(this) + U(this.minutes(), 2) + U(this.seconds(), 2)
            }), B("Hmm", 0, 0, function() {
                return "" + this.hours() + U(this.minutes(), 2)
            }), B("Hmmss", 0, 0, function() {
                return "" + this.hours() + U(this.minutes(), 2) + U(this.seconds(), 2)
            }), bn("a", !0), bn("A", !1), z("hour", "h"), K("a", Mn), K("A", Mn), K("H", xi), K("h", xi), K("HH", xi, ki), K("hh", xi, ki), K("hmm", Ti), K("hmmss", Ci), K("Hmm", Ti), K("Hmmss", Ci), et(["H", "HH"], Ui), et(["a", "A"], function(t, e, n) {
                n._isPm = n._locale.isPM(t), n._meridiem = t
            }), et(["h", "hh"], function(t, e, n) {
                e[Ui] = b(t), h(n).bigHour = !0
            }), et("hmm", function(t, e, n) {
                var i = t.length - 2;
                e[Ui] = b(t.substr(0, i)), e[Bi] = b(t.substr(i)), h(n).bigHour = !0
            }), et("hmmss", function(t, e, n) {
                var i = t.length - 4,
                    o = t.length - 2;
                e[Ui] = b(t.substr(0, i)), e[Bi] = b(t.substr(i, 2)), e[Vi] = b(t.substr(o)), h(n).bigHour = !0
            }), et("Hmm", function(t, e, n) {
                var i = t.length - 2;
                e[Ui] = b(t.substr(0, i)), e[Bi] = b(t.substr(i))
            }), et("Hmmss", function(t, e, n) {
                var i = t.length - 4,
                    o = t.length - 2;
                e[Ui] = b(t.substr(0, i)), e[Bi] = b(t.substr(i, 2)), e[Vi] = b(t.substr(o))
            });
            var So = /[ap]\.?m?\.?/i,
                xo = I("Hours", !0);
            B("m", ["mm", 2], 0, "minute"), z("minute", "m"), K("m", xi), K("mm", xi, ki), et(["m", "mm"], Bi);
            var To = I("Minutes", !1);
            B("s", ["ss", 2], 0, "second"), z("second", "s"), K("s", xi), K("ss", xi, ki), et(["s", "ss"], Vi);
            var Co = I("Seconds", !1);
            B("S", 0, 0, function() {
                return ~~(this.millisecond() / 100)
            }), B(0, ["SS", 2], 0, function() {
                return ~~(this.millisecond() / 10)
            }), B(0, ["SSS", 3], 0, "millisecond"), B(0, ["SSSS", 4], 0, function() {
                return 10 * this.millisecond()
            }), B(0, ["SSSSS", 5], 0, function() {
                return 100 * this.millisecond()
            }), B(0, ["SSSSSS", 6], 0, function() {
                return 1e3 * this.millisecond()
            }), B(0, ["SSSSSSS", 7], 0, function() {
                return 1e4 * this.millisecond()
            }), B(0, ["SSSSSSSS", 8], 0, function() {
                return 1e5 * this.millisecond()
            }), B(0, ["SSSSSSSSS", 9], 0, function() {
                return 1e6 * this.millisecond()
            }), z("millisecond", "ms"), K("S", ji, Li), K("SS", ji, ki), K("SSS", ji, Di);
            var jo;
            for (jo = "SSSS"; jo.length <= 9; jo += "S") K(jo, Pi);
            for (jo = "S"; jo.length <= 9; jo += "S") et(jo, kn);
            var Ho = I("Milliseconds", !1);
            B("z", 0, 0, "zoneAbbr"), B("zz", 0, 0, "zoneName");
            var Eo = y.prototype;
            Eo.add = _o, Eo.calendar = pe, Eo.clone = fe, Eo.diff = Me, Eo.endOf = Ee, Eo.format = De, Eo.from = Ye, Eo.fromNow = Se, Eo.to = xe, Eo.toNow = Te, Eo.get = q, Eo.invalidAt = Fe, Eo.isAfter = me, Eo.isBefore = _e, Eo.isBetween = ye, Eo.isSame = ge, Eo.isSameOrAfter = ve, Eo.isSameOrBefore = be, Eo.isValid = Ne, Eo.lang = go, Eo.locale = Ce, Eo.localeData = je, Eo.max = co, Eo.min = uo, Eo.parsingFlags = Ie, Eo.set = q, Eo.startOf = He, Eo.subtract = yo, Eo.toArray = $e, Eo.toObject = ze, Eo.toDate = Oe, Eo.toISOString = ke, Eo.toJSON = We, Eo.toString = Le, Eo.unix = Ae, Eo.valueOf = Pe, Eo.creationData = Re, Eo.year = lo, Eo.isLeapYear = wt, Eo.weekYear = Ue, Eo.isoWeekYear = Be, Eo.quarter = Eo.quarters = Ke, Eo.month = ut, Eo.daysInMonth = ct, Eo.week = Eo.weeks = en, Eo.isoWeek = Eo.isoWeeks = nn, Eo.weeksInYear = Je, Eo.isoWeeksInYear = Ve, Eo.date = bo, Eo.day = Eo.days = un, Eo.weekday = cn, Eo.isoWeekday = hn, Eo.dayOfYear = yn, Eo.hour = Eo.hours = xo, Eo.minute = Eo.minutes = To, Eo.second = Eo.seconds = Co, Eo.millisecond = Eo.milliseconds = Ho, Eo.utcOffset = Gt, Eo.utc = Kt, Eo.local = Qt, Eo.parseZone = Zt, Eo.hasAlignedHourOffset = te, Eo.isDST = ee, Eo.isDSTShifted = ne, Eo.isLocal = ie, Eo.isUtcOffset = oe, Eo.isUtc = se, Eo.isUTC = se, Eo.zoneAbbr = Dn, Eo.zoneName = Yn, Eo.dates = L("dates accessor is deprecated. Use date instead.", bo), Eo.months = L("months accessor is deprecated. Use month instead", ut), Eo.years = L("years accessor is deprecated. Use year instead", lo), Eo.zone = L("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", Xt);
            var Po = Eo,
                Ao = {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                Oo = {
                    LTS: "h:mm:ss A",
                    LT: "h:mm A",
                    L: "MM/DD/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY h:mm A",
                    LLLL: "dddd, MMMM D, YYYY h:mm A"
                },
                $o = "Invalid date",
                zo = "%d",
                Wo = /\d{1,2}/,
                No = {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                Io = T.prototype;
            Io._calendar = Ao, Io.calendar = Tn, Io._longDateFormat = Oo, Io.longDateFormat = Cn, Io._invalidDate = $o, Io.invalidDate = jn, Io._ordinal = zo, Io.ordinal = Hn, Io._ordinalParse = Wo, Io.preparse = En, Io.postformat = En, Io._relativeTime = No, Io.relativeTime = Pn, Io.pastFuture = An, Io.set = S, Io.months = st, Io._months = Qi, Io.monthsShort = rt, Io._monthsShort = Zi, Io.monthsParse = lt, Io._monthsRegex = eo, Io.monthsRegex = pt, Io._monthsShortRegex = to, Io.monthsShortRegex = ht, Io.week = Qe, Io._week = vo, Io.firstDayOfYear = tn, Io.firstDayOfWeek = Ze, Io.weekdays = sn, Io._weekdays = Mo, Io.weekdaysMin = an, Io._weekdaysMin = Lo, Io.weekdaysShort = rn, Io._weekdaysShort = wo, Io.weekdaysParse = dn, Io._weekdaysRegex = ko, Io.weekdaysRegex = pn, Io._weekdaysShortRegex = Do, Io.weekdaysShortRegex = fn, Io._weekdaysMinRegex = Yo, Io.weekdaysMinRegex = mn, Io.isPM = wn, Io._meridiemParse = So, Io.meridiem = Ln, E("en", {
                ordinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function(t) {
                    var e = t % 10,
                        n = 1 === b(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
                    return t + n
                }
            }), e.lang = L("moment.lang is deprecated. Use moment.locale instead.", E), e.langData = L("moment.langData is deprecated. Use moment.localeData instead.", O);
            var Fo = Math.abs,
                Ro = ti("ms"),
                qo = ti("s"),
                Uo = ti("m"),
                Bo = ti("h"),
                Vo = ti("d"),
                Jo = ti("w"),
                Go = ti("M"),
                Xo = ti("y"),
                Ko = ni("milliseconds"),
                Qo = ni("seconds"),
                Zo = ni("minutes"),
                ts = ni("hours"),
                es = ni("days"),
                ns = ni("months"),
                is = ni("years"),
                os = Math.round,
                ss = {
                    s: 45,
                    m: 45,
                    h: 22,
                    d: 26,
                    M: 11
                },
                rs = Math.abs,
                as = Rt.prototype;
            as.abs = qn, as.add = Bn, as.subtract = Vn, as.as = Qn, as.asMilliseconds = Ro, as.asSeconds = qo, as.asMinutes = Uo, as.asHours = Bo, as.asDays = Vo, as.asWeeks = Jo, as.asMonths = Go, as.asYears = Xo, as.valueOf = Zn, as._bubble = Gn, as.get = ei, as.milliseconds = Ko, as.seconds = Qo, as.minutes = Zo, as.hours = ts, as.days = es, as.weeks = ii, as.months = ns, as.years = is, as.humanize = ai, as.toISOString = li, as.toString = li, as.toJSON = li, as.locale = Ce, as.localeData = je, as.toIsoString = L("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", li), as.lang = go, B("X", 0, 0, "unix"), B("x", 0, 0, "valueOf"), K("x", Ai), K("X", zi), et("X", function(t, e, n) {
                n._d = new Date(1e3 * parseFloat(t, 10))
            }), et("x", function(t, e, n) {
                n._d = new Date(b(t))
            }), e.version = "2.13.0", i(Wt), e.fn = Po, e.min = It, e.max = Ft, e.now = ho, e.utc = u, e.unix = Sn, e.months = Wn, e.isDate = r, e.locale = E, e.invalid = f, e.duration = re, e.isMoment = g, e.weekdays = In, e.parseZone = xn, e.localeData = O, e.isDuration = qt, e.monthsShort = Nn, e.weekdaysMin = Rn, e.defineLocale = P, e.updateLocale = A, e.locales = $, e.weekdaysShort = Fn, e.normalizeUnits = W, e.relativeTimeThreshold = ri, e.prototype = Po;
            var ls = e;
            return ls
        })
    }).call(e, n(31)(t))
}, function(t, e) {
    "use strict";
    t.exports = function(t) {
        return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children = [], t.webpackPolyfill = 1), t
    }
}, function(t, e, n) {
    function i(t) {
        return n(o(t))
    }

    function o(t) {
        return s[t] || function() {
            throw new Error("Cannot find module '" + t + "'.")
        }()
    }
    var s = {
        "./af": 33,
        "./af.js": 33,
        "./ar": 34,
        "./ar-ma": 35,
        "./ar-ma.js": 35,
        "./ar-sa": 36,
        "./ar-sa.js": 36,
        "./ar-tn": 37,
        "./ar-tn.js": 37,
        "./ar.js": 34,
        "./az": 38,
        "./az.js": 38,
        "./be": 39,
        "./be.js": 39,
        "./bg": 40,
        "./bg.js": 40,
        "./bn": 41,
        "./bn.js": 41,
        "./bo": 42,
        "./bo.js": 42,
        "./br": 43,
        "./br.js": 43,
        "./bs": 44,
        "./bs.js": 44,
        "./ca": 45,
        "./ca.js": 45,
        "./cs": 46,
        "./cs.js": 46,
        "./cv": 47,
        "./cv.js": 47,
        "./cy": 48,
        "./cy.js": 48,
        "./da": 49,
        "./da.js": 49,
        "./de": 50,
        "./de-at": 51,
        "./de-at.js": 51,
        "./de.js": 50,
        "./dv": 52,
        "./dv.js": 52,
        "./el": 53,
        "./el.js": 53,
        "./en-au": 54,
        "./en-au.js": 54,
        "./en-ca": 55,
        "./en-ca.js": 55,
        "./en-gb": 56,
        "./en-gb.js": 56,
        "./en-ie": 57,
        "./en-ie.js": 57,
        "./en-nz": 58,
        "./en-nz.js": 58,
        "./eo": 59,
        "./eo.js": 59,
        "./es": 60,
        "./es.js": 60,
        "./et": 61,
        "./et.js": 61,
        "./eu": 62,
        "./eu.js": 62,
        "./fa": 63,
        "./fa.js": 63,
        "./fi": 64,
        "./fi.js": 64,
        "./fo": 65,
        "./fo.js": 65,
        "./fr": 66,
        "./fr-ca": 67,
        "./fr-ca.js": 67,
        "./fr-ch": 68,
        "./fr-ch.js": 68,
        "./fr.js": 66,
        "./fy": 69,
        "./fy.js": 69,
        "./gd": 70,
        "./gd.js": 70,
        "./gl": 71,
        "./gl.js": 71,
        "./he": 72,
        "./he.js": 72,
        "./hi": 73,
        "./hi.js": 73,
        "./hr": 74,
        "./hr.js": 74,
        "./hu": 75,
        "./hu.js": 75,
        "./hy-am": 76,
        "./hy-am.js": 76,
        "./id": 77,
        "./id.js": 77,
        "./is": 78,
        "./is.js": 78,
        "./it": 79,
        "./it.js": 79,
        "./ja": 80,
        "./ja.js": 80,
        "./jv": 81,
        "./jv.js": 81,
        "./ka": 82,
        "./ka.js": 82,
        "./kk": 83,
        "./kk.js": 83,
        "./km": 84,
        "./km.js": 84,
        "./ko": 85,
        "./ko.js": 85,
        "./ky": 86,
        "./ky.js": 86,
        "./lb": 87,
        "./lb.js": 87,
        "./lo": 88,
        "./lo.js": 88,
        "./lt": 89,
        "./lt.js": 89,
        "./lv": 90,
        "./lv.js": 90,
        "./me": 91,
        "./me.js": 91,
        "./mk": 92,
        "./mk.js": 92,
        "./ml": 93,
        "./ml.js": 93,
        "./mr": 94,
        "./mr.js": 94,
        "./ms": 95,
        "./ms-my": 96,
        "./ms-my.js": 96,
        "./ms.js": 95,
        "./my": 97,
        "./my.js": 97,
        "./nb": 98,
        "./nb.js": 98,
        "./ne": 99,
        "./ne.js": 99,
        "./nl": 100,
        "./nl.js": 100,
        "./nn": 101,
        "./nn.js": 101,
        "./pa-in": 102,
        "./pa-in.js": 102,
        "./pl": 103,
        "./pl.js": 103,
        "./pt": 104,
        "./pt-br": 105,
        "./pt-br.js": 105,
        "./pt.js": 104,
        "./ro": 106,
        "./ro.js": 106,
        "./ru": 107,
        "./ru.js": 107,
        "./se": 108,
        "./se.js": 108,
        "./si": 109,
        "./si.js": 109,
        "./sk": 110,
        "./sk.js": 110,
        "./sl": 111,
        "./sl.js": 111,
        "./sq": 112,
        "./sq.js": 112,
        "./sr": 113,
        "./sr-cyrl": 114,
        "./sr-cyrl.js": 114,
        "./sr.js": 113,
        "./ss": 115,
        "./ss.js": 115,
        "./sv": 116,
        "./sv.js": 116,
        "./sw": 117,
        "./sw.js": 117,
        "./ta": 118,
        "./ta.js": 118,
        "./te": 119,
        "./te.js": 119,
        "./th": 120,
        "./th.js": 120,
        "./tl-ph": 121,
        "./tl-ph.js": 121,
        "./tlh": 122,
        "./tlh.js": 122,
        "./tr": 123,
        "./tr.js": 123,
        "./tzl": 124,
        "./tzl.js": 124,
        "./tzm": 125,
        "./tzm-latn": 126,
        "./tzm-latn.js": 126,
        "./tzm.js": 125,
        "./uk": 127,
        "./uk.js": 127,
        "./uz": 128,
        "./uz.js": 128,
        "./vi": 129,
        "./vi.js": 129,
        "./x-pseudo": 130,
        "./x-pseudo.js": 130,
        "./zh-cn": 131,
        "./zh-cn.js": 131,
        "./zh-tw": 132,
        "./zh-tw.js": 132
    };
    i.keys = function() {
        return Object.keys(s)
    }, i.resolve = o, t.exports = i, i.id = 32
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("af", {
            months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
            weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
            weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
            meridiemParse: /vm|nm/i,
            isPM: function(t) {
                return /^nm$/i.test(t)
            },
            meridiem: function(t, e, n) {
                return 12 > t ? n ? "vm" : "VM" : n ? "nm" : "NM"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Vandag om] LT",
                nextDay: "[Môre om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[Gister om] LT",
                lastWeek: "[Laas] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "oor %s",
                past: "%s gelede",
                s: "'n paar sekondes",
                m: "'n minuut",
                mm: "%d minute",
                h: "'n uur",
                hh: "%d ure",
                d: "'n dag",
                dd: "%d dae",
                M: "'n maand",
                MM: "%d maande",
                y: "'n jaar",
                yy: "%d jaar"
            },
            ordinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(t) {
                return t + (1 === t || 8 === t || t >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = {
                1: "١",
                2: "٢",
                3: "٣",
                4: "٤",
                5: "٥",
                6: "٦",
                7: "٧",
                8: "٨",
                9: "٩",
                0: "٠"
            },
            n = {
                "١": "1",
                "٢": "2",
                "٣": "3",
                "٤": "4",
                "٥": "5",
                "٦": "6",
                "٧": "7",
                "٨": "8",
                "٩": "9",
                "٠": "0"
            },
            i = function(t) {
                return 0 === t ? 0 : 1 === t ? 1 : 2 === t ? 2 : t % 100 >= 3 && 10 >= t % 100 ? 3 : t % 100 >= 11 ? 4 : 5
            },
            o = {
                s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
            },
            s = function(t) {
                return function(e, n, s, r) {
                    var a = i(e),
                        l = o[t][i(e)];
                    return 2 === a && (l = l[n ? 0 : 1]), l.replace(/%d/i, e)
                }
            },
            r = ["كانون الثاني يناير", "شباط فبراير", "آذار مارس", "نيسان أبريل", "أيار مايو", "حزيران يونيو", "تموز يوليو", "آب أغسطس", "أيلول سبتمبر", "تشرين الأول أكتوبر", "تشرين الثاني نوفمبر", "كانون الأول ديسمبر"],
            a = t.defineLocale("ar", {
                months: r,
                monthsShort: r,
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "D/‏M/‏YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /ص|م/,
                isPM: function(t) {
                    return "م" === t
                },
                meridiem: function(t, e, n) {
                    return 12 > t ? "ص" : "م"
                },
                calendar: {
                    sameDay: "[اليوم عند الساعة] LT",
                    nextDay: "[غدًا عند الساعة] LT",
                    nextWeek: "dddd [عند الساعة] LT",
                    lastDay: "[أمس عند الساعة] LT",
                    lastWeek: "dddd [عند الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "بعد %s",
                    past: "منذ %s",
                    s: s("s"),
                    m: s("m"),
                    mm: s("m"),
                    h: s("h"),
                    hh: s("h"),
                    d: s("d"),
                    dd: s("d"),
                    M: s("M"),
                    MM: s("M"),
                    y: s("y"),
                    yy: s("y")
                },
                preparse: function(t) {
                    return t.replace(/\u200f/g, "").replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(t) {
                        return n[t]
                    }).replace(/،/g, ",")
                },
                postformat: function(t) {
                    return t.replace(/\d/g, function(t) {
                        return e[t]
                    }).replace(/,/g, "،")
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            });
        return a
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("ar-ma", {
            months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {
                dow: 6,
                doy: 12
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = {
                1: "١",
                2: "٢",
                3: "٣",
                4: "٤",
                5: "٥",
                6: "٦",
                7: "٧",
                8: "٨",
                9: "٩",
                0: "٠"
            },
            n = {
                "١": "1",
                "٢": "2",
                "٣": "3",
                "٤": "4",
                "٥": "5",
                "٦": "6",
                "٧": "7",
                "٨": "8",
                "٩": "9",
                "٠": "0"
            },
            i = t.defineLocale("ar-sa", {
                months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /ص|م/,
                isPM: function(t) {
                    return "م" === t
                },
                meridiem: function(t, e, n) {
                    return 12 > t ? "ص" : "م"
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                preparse: function(t) {
                    return t.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(t) {
                        return n[t]
                    }).replace(/،/g, ",")
                },
                postformat: function(t) {
                    return t.replace(/\d/g, function(t) {
                        return e[t]
                    }).replace(/,/g, "،")
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            });
        return i
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("ar-tn", {
            months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = {
                1: "-inci",
                5: "-inci",
                8: "-inci",
                70: "-inci",
                80: "-inci",
                2: "-nci",
                7: "-nci",
                20: "-nci",
                50: "-nci",
                3: "-üncü",
                4: "-üncü",
                100: "-üncü",
                6: "-ncı",
                9: "-uncu",
                10: "-uncu",
                30: "-uncu",
                60: "-ıncı",
                90: "-ıncı"
            },
            n = t.defineLocale("az", {
                months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
                monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
                weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
                weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
                weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[bugün saat] LT",
                    nextDay: "[sabah saat] LT",
                    nextWeek: "[gələn həftə] dddd [saat] LT",
                    lastDay: "[dünən] LT",
                    lastWeek: "[keçən həftə] dddd [saat] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s sonra",
                    past: "%s əvvəl",
                    s: "birneçə saniyyə",
                    m: "bir dəqiqə",
                    mm: "%d dəqiqə",
                    h: "bir saat",
                    hh: "%d saat",
                    d: "bir gün",
                    dd: "%d gün",
                    M: "bir ay",
                    MM: "%d ay",
                    y: "bir il",
                    yy: "%d il"
                },
                meridiemParse: /gecə|səhər|gündüz|axşam/,
                isPM: function(t) {
                    return /^(gündüz|axşam)$/.test(t)
                },
                meridiem: function(t, e, n) {
                    return 4 > t ? "gecə" : 12 > t ? "səhər" : 17 > t ? "gündüz" : "axşam"
                },
                ordinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
                ordinal: function(t) {
                    if (0 === t) return t + "-ıncı";
                    var n = t % 10,
                        i = t % 100 - n,
                        o = t >= 100 ? 100 : null;
                    return t + (e[n] || e[i] || e[o])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            });
        return n
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";

        function e(t, e) {
            var n = t.split("_");
            return e % 10 === 1 && e % 100 !== 11 ? n[0] : e % 10 >= 2 && 4 >= e % 10 && (10 > e % 100 || e % 100 >= 20) ? n[1] : n[2]
        }

        function n(t, n, i) {
            var o = {
                mm: n ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
                hh: n ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
                dd: "дзень_дні_дзён",
                MM: "месяц_месяцы_месяцаў",
                yy: "год_гады_гадоў"
            };
            return "m" === i ? n ? "хвіліна" : "хвіліну" : "h" === i ? n ? "гадзіна" : "гадзіну" : t + " " + e(o[i], +t)
        }
        var i = t.defineLocale("be", {
            months: {
                format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),
                standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")
            },
            monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
            weekdays: {
                format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),
                standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
                isFormat: /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/
            },
            weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
            weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY г.",
                LLL: "D MMMM YYYY г., HH:mm",
                LLLL: "dddd, D MMMM YYYY г., HH:mm"
            },
            calendar: {
                sameDay: "[Сёння ў] LT",
                nextDay: "[Заўтра ў] LT",
                lastDay: "[Учора ў] LT",
                nextWeek: function() {
                    return "[У] dddd [ў] LT"
                },
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return "[У мінулую] dddd [ў] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[У мінулы] dddd [ў] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "праз %s",
                past: "%s таму",
                s: "некалькі секунд",
                m: n,
                mm: n,
                h: n,
                hh: n,
                d: "дзень",
                dd: n,
                M: "месяц",
                MM: n,
                y: "год",
                yy: n
            },
            meridiemParse: /ночы|раніцы|дня|вечара/,
            isPM: function(t) {
                return /^(дня|вечара)$/.test(t)
            },
            meridiem: function(t, e, n) {
                return 4 > t ? "ночы" : 12 > t ? "раніцы" : 17 > t ? "дня" : "вечара"
            },
            ordinalParse: /\d{1,2}-(і|ы|га)/,
            ordinal: function(t, e) {
                switch (e) {
                    case "M":
                    case "d":
                    case "DDD":
                    case "w":
                    case "W":
                        return t % 10 !== 2 && t % 10 !== 3 || t % 100 === 12 || t % 100 === 13 ? t + "-ы" : t + "-і";
                    case "D":
                        return t + "-га";
                    default:
                        return t
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
        return i
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("bg", {
            months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
            monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
            weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
            weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
            weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Днес в] LT",
                nextDay: "[Утре в] LT",
                nextWeek: "dddd [в] LT",
                lastDay: "[Вчера в] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[В изминалата] dddd [в] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[В изминалия] dddd [в] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "след %s",
                past: "преди %s",
                s: "няколко секунди",
                m: "минута",
                mm: "%d минути",
                h: "час",
                hh: "%d часа",
                d: "ден",
                dd: "%d дни",
                M: "месец",
                MM: "%d месеца",
                y: "година",
                yy: "%d години"
            },
            ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
            ordinal: function(t) {
                var e = t % 10,
                    n = t % 100;
                return 0 === t ? t + "-ев" : 0 === n ? t + "-ен" : n > 10 && 20 > n ? t + "-ти" : 1 === e ? t + "-ви" : 2 === e ? t + "-ри" : 7 === e || 8 === e ? t + "-ми" : t + "-ти"
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = {
                1: "১",
                2: "২",
                3: "৩",
                4: "৪",
                5: "৫",
                6: "৬",
                7: "৭",
                8: "৮",
                9: "৯",
                0: "০"
            },
            n = {
                "১": "1",
                "২": "2",
                "৩": "3",
                "৪": "4",
                "৫": "5",
                "৬": "6",
                "৭": "7",
                "৮": "8",
                "৯": "9",
                "০": "0"
            },
            i = t.defineLocale("bn", {
                months: "জানুয়ারী_ফেবুয়ারী_মার্চ_এপ্রিল_মে_জুন_জুলাই_অগাস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
                monthsShort: "জানু_ফেব_মার্চ_এপর_মে_জুন_জুল_অগ_সেপ্ট_অক্টো_নভ_ডিসেম্".split("_"),
                weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পত্তিবার_শুক্রবার_শনিবার".split("_"),
                weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পত্তি_শুক্র_শনি".split("_"),
                weekdaysMin: "রব_সম_মঙ্গ_বু_ব্রিহ_শু_শনি".split("_"),
                longDateFormat: {
                    LT: "A h:mm সময়",
                    LTS: "A h:mm:ss সময়",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm সময়",
                    LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
                },
                calendar: {
                    sameDay: "[আজ] LT",
                    nextDay: "[আগামীকাল] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[গতকাল] LT",
                    lastWeek: "[গত] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s পরে",
                    past: "%s আগে",
                    s: "কয়েক সেকেন্ড",
                    m: "এক মিনিট",
                    mm: "%d মিনিট",
                    h: "এক ঘন্টা",
                    hh: "%d ঘন্টা",
                    d: "এক দিন",
                    dd: "%d দিন",
                    M: "এক মাস",
                    MM: "%d মাস",
                    y: "এক বছর",
                    yy: "%d বছর"
                },
                preparse: function(t) {
                    return t.replace(/[১২৩৪৫৬৭৮৯০]/g, function(t) {
                        return n[t]
                    })
                },
                postformat: function(t) {
                    return t.replace(/\d/g, function(t) {
                        return e[t]
                    })
                },
                meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
                meridiemHour: function(t, e) {
                    return 12 === t && (t = 0), "রাত" === e && t >= 4 || "দুপুর" === e && 5 > t || "বিকাল" === e ? t + 12 : t
                },
                meridiem: function(t, e, n) {
                    return 4 > t ? "রাত" : 10 > t ? "সকাল" : 17 > t ? "দুপুর" : 20 > t ? "বিকাল" : "রাত"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            });
        return i
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = {
                1: "༡",
                2: "༢",
                3: "༣",
                4: "༤",
                5: "༥",
                6: "༦",
                7: "༧",
                8: "༨",
                9: "༩",
                0: "༠"
            },
            n = {
                "༡": "1",
                "༢": "2",
                "༣": "3",
                "༤": "4",
                "༥": "5",
                "༦": "6",
                "༧": "7",
                "༨": "8",
                "༩": "9",
                "༠": "0"
            },
            i = t.defineLocale("bo", {
                months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
                monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
                weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
                weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
                weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
                longDateFormat: {
                    LT: "A h:mm",
                    LTS: "A h:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm",
                    LLLL: "dddd, D MMMM YYYY, A h:mm"
                },
                calendar: {
                    sameDay: "[དི་རིང] LT",
                    nextDay: "[སང་ཉིན] LT",
                    nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
                    lastDay: "[ཁ་སང] LT",
                    lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s ལ་",
                    past: "%s སྔན་ལ",
                    s: "ལམ་སང",
                    m: "སྐར་མ་གཅིག",
                    mm: "%d སྐར་མ",
                    h: "ཆུ་ཚོད་གཅིག",
                    hh: "%d ཆུ་ཚོད",
                    d: "ཉིན་གཅིག",
                    dd: "%d ཉིན་",
                    M: "ཟླ་བ་གཅིག",
                    MM: "%d ཟླ་བ",
                    y: "ལོ་གཅིག",
                    yy: "%d ལོ"
                },
                preparse: function(t) {
                    return t.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function(t) {
                        return n[t]
                    })
                },
                postformat: function(t) {
                    return t.replace(/\d/g, function(t) {
                        return e[t]
                    })
                },
                meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
                meridiemHour: function(t, e) {
                    return 12 === t && (t = 0), "མཚན་མོ" === e && t >= 4 || "ཉིན་གུང" === e && 5 > t || "དགོང་དག" === e ? t + 12 : t
                },
                meridiem: function(t, e, n) {
                    return 4 > t ? "མཚན་མོ" : 10 > t ? "ཞོགས་ཀས" : 17 > t ? "ཉིན་གུང" : 20 > t ? "དགོང་དག" : "མཚན་མོ"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            });
        return i
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";

        function e(t, e, n) {
            var i = {
                mm: "munutenn",
                MM: "miz",
                dd: "devezh"
            };
            return t + " " + o(i[n], t)
        }

        function n(t) {
            switch (i(t)) {
                case 1:
                case 3:
                case 4:
                case 5:
                case 9:
                    return t + " bloaz";
                default:
                    return t + " vloaz"
            }
        }

        function i(t) {
            return t > 9 ? i(t % 10) : t
        }

        function o(t, e) {
            return 2 === e ? s(t) : t
        }

        function s(t) {
            var e = {
                m: "v",
                b: "v",
                d: "z"
            };
            return void 0 === e[t.charAt(0)] ? t : e[t.charAt(0)] + t.substring(1)
        }
        var r = t.defineLocale("br", {
            months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
            monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
            weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
            weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h[e]mm A",
                LTS: "h[e]mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D [a viz] MMMM YYYY",
                LLL: "D [a viz] MMMM YYYY h[e]mm A",
                LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A"
            },
            calendar: {
                sameDay: "[Hiziv da] LT",
                nextDay: "[Warc'hoazh da] LT",
                nextWeek: "dddd [da] LT",
                lastDay: "[Dec'h da] LT",
                lastWeek: "dddd [paset da] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "a-benn %s",
                past: "%s 'zo",
                s: "un nebeud segondennoù",
                m: "ur vunutenn",
                mm: e,
                h: "un eur",
                hh: "%d eur",
                d: "un devezh",
                dd: e,
                M: "ur miz",
                MM: e,
                y: "ur bloaz",
                yy: n
            },
            ordinalParse: /\d{1,2}(añ|vet)/,
            ordinal: function(t) {
                var e = 1 === t ? "añ" : "vet";
                return t + e
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
        return r
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";

        function e(t, e, n) {
            var i = t + " ";
            switch (n) {
                case "m":
                    return e ? "jedna minuta" : "jedne minute";
                case "mm":
                    return i += 1 === t ? "minuta" : 2 === t || 3 === t || 4 === t ? "minute" : "minuta";
                case "h":
                    return e ? "jedan sat" : "jednog sata";
                case "hh":
                    return i += 1 === t ? "sat" : 2 === t || 3 === t || 4 === t ? "sata" : "sati";
                case "dd":
                    return i += 1 === t ? "dan" : "dana";
                case "MM":
                    return i += 1 === t ? "mjesec" : 2 === t || 3 === t || 4 === t ? "mjeseca" : "mjeseci";
                case "yy":
                    return i += 1 === t ? "godina" : 2 === t || 3 === t || 4 === t ? "godine" : "godina"
            }
        }
        var n = t.defineLocale("bs", {
            months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD. MM. YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[jučer u] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                            return "[prošlu] dddd [u] LT";
                        case 6:
                            return "[prošle] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prošli] dddd [u] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                m: e,
                mm: e,
                h: e,
                hh: e,
                d: "dan",
                dd: e,
                M: "mjesec",
                MM: e,
                y: "godinu",
                yy: e
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        });
        return n
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("ca", {
            months: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
            monthsShort: "gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split("_"),
            monthsParseExact: !0,
            weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
            weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
            weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: function() {
                    return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                nextDay: function() {
                    return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                lastDay: function() {
                    return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "fa %s",
                s: "uns segons",
                m: "un minut",
                mm: "%d minuts",
                h: "una hora",
                hh: "%d hores",
                d: "un dia",
                dd: "%d dies",
                M: "un mes",
                MM: "%d mesos",
                y: "un any",
                yy: "%d anys"
            },
            ordinalParse: /\d{1,2}(r|n|t|è|a)/,
            ordinal: function(t, e) {
                var n = 1 === t ? "r" : 2 === t ? "n" : 3 === t ? "r" : 4 === t ? "t" : "è";
                return "w" !== e && "W" !== e || (n = "a"), t + n
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";

        function e(t) {
            return t > 1 && 5 > t && 1 !== ~~(t / 10)
        }

        function n(t, n, i, o) {
            var s = t + " ";
            switch (i) {
                case "s":
                    return n || o ? "pár sekund" : "pár sekundami";
                case "m":
                    return n ? "minuta" : o ? "minutu" : "minutou";
                case "mm":
                    return n || o ? s + (e(t) ? "minuty" : "minut") : s + "minutami";
                case "h":
                    return n ? "hodina" : o ? "hodinu" : "hodinou";
                case "hh":
                    return n || o ? s + (e(t) ? "hodiny" : "hodin") : s + "hodinami";
                case "d":
                    return n || o ? "den" : "dnem";
                case "dd":
                    return n || o ? s + (e(t) ? "dny" : "dní") : s + "dny";
                case "M":
                    return n || o ? "měsíc" : "měsícem";
                case "MM":
                    return n || o ? s + (e(t) ? "měsíce" : "měsíců") : s + "měsíci";
                case "y":
                    return n || o ? "rok" : "rokem";
                case "yy":
                    return n || o ? s + (e(t) ? "roky" : "let") : s + "lety"
            }
        }
        var i = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
            o = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),
            s = t.defineLocale("cs", {
                months: i,
                monthsShort: o,
                monthsParse: function(t, e) {
                    var n, i = [];
                    for (n = 0; 12 > n; n++) i[n] = new RegExp("^" + t[n] + "$|^" + e[n] + "$", "i");
                    return i
                }(i, o),
                shortMonthsParse: function(t) {
                    var e, n = [];
                    for (e = 0; 12 > e; e++) n[e] = new RegExp("^" + t[e] + "$", "i");
                    return n
                }(o),
                longMonthsParse: function(t) {
                    var e, n = [];
                    for (e = 0; 12 > e; e++) n[e] = new RegExp("^" + t[e] + "$", "i");
                    return n
                }(i),
                weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
                weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
                weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[dnes v] LT",
                    nextDay: "[zítra v] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[v neděli v] LT";
                            case 1:
                            case 2:
                                return "[v] dddd [v] LT";
                            case 3:
                                return "[ve středu v] LT";
                            case 4:
                                return "[ve čtvrtek v] LT";
                            case 5:
                                return "[v pátek v] LT";
                            case 6:
                                return "[v sobotu v] LT"
                        }
                    },
                    lastDay: "[včera v] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[minulou neděli v] LT";
                            case 1:
                            case 2:
                                return "[minulé] dddd [v] LT";
                            case 3:
                                return "[minulou středu v] LT";
                            case 4:
                            case 5:
                                return "[minulý] dddd [v] LT";
                            case 6:
                                return "[minulou sobotu v] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "před %s",
                    s: n,
                    m: n,
                    mm: n,
                    h: n,
                    hh: n,
                    d: n,
                    dd: n,
                    M: n,
                    MM: n,
                    y: n,
                    yy: n
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
        return s
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("cv", {
            months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),
            monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
            weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),
            weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
            weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
                LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
                LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"
            },
            calendar: {
                sameDay: "[Паян] LT [сехетре]",
                nextDay: "[Ыран] LT [сехетре]",
                lastDay: "[Ӗнер] LT [сехетре]",
                nextWeek: "[Ҫитес] dddd LT [сехетре]",
                lastWeek: "[Иртнӗ] dddd LT [сехетре]",
                sameElse: "L"
            },
            relativeTime: {
                future: function(t) {
                    var e = /сехет$/i.exec(t) ? "рен" : /ҫул$/i.exec(t) ? "тан" : "ран";
                    return t + e
                },
                past: "%s каялла",
                s: "пӗр-ик ҫеккунт",
                m: "пӗр минут",
                mm: "%d минут",
                h: "пӗр сехет",
                hh: "%d сехет",
                d: "пӗр кун",
                dd: "%d кун",
                M: "пӗр уйӑх",
                MM: "%d уйӑх",
                y: "пӗр ҫул",
                yy: "%d ҫул"
            },
            ordinalParse: /\d{1,2}-мӗш/,
            ordinal: "%d-мӗш",
            week: {
                dow: 1,
                doy: 7
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("cy", {
            months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
            monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
            weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
            weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Heddiw am] LT",
                nextDay: "[Yfory am] LT",
                nextWeek: "dddd [am] LT",
                lastDay: "[Ddoe am] LT",
                lastWeek: "dddd [diwethaf am] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "mewn %s",
                past: "%s yn ôl",
                s: "ychydig eiliadau",
                m: "munud",
                mm: "%d munud",
                h: "awr",
                hh: "%d awr",
                d: "diwrnod",
                dd: "%d diwrnod",
                M: "mis",
                MM: "%d mis",
                y: "blwyddyn",
                yy: "%d flynedd"
            },
            ordinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
            ordinal: function(t) {
                var e = t,
                    n = "",
                    i = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"];
                return e > 20 ? n = 40 === e || 50 === e || 60 === e || 80 === e || 100 === e ? "fed" : "ain" : e > 0 && (n = i[e]), t + n
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("da", {
            months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
            weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd [d.] D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[I dag kl.] LT",
                nextDay: "[I morgen kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[I går kl.] LT",
                lastWeek: "[sidste] dddd [kl] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "få sekunder",
                m: "et minut",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dage",
                M: "en måned",
                MM: "%d måneder",
                y: "et år",
                yy: "%d år"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";

        function e(t, e, n, i) {
            var o = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [t + " Tage", t + " Tagen"],
                M: ["ein Monat", "einem Monat"],
                MM: [t + " Monate", t + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [t + " Jahre", t + " Jahren"]
            };
            return e ? o[n][0] : o[n][1]
        }
        var n = t.defineLocale("de", {
            months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                m: e,
                mm: "%d Minuten",
                h: e,
                hh: "%d Stunden",
                d: e,
                dd: e,
                M: e,
                MM: e,
                y: e,
                yy: e
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
        return n
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";

        function e(t, e, n, i) {
            var o = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [t + " Tage", t + " Tagen"],
                M: ["ein Monat", "einem Monat"],
                MM: [t + " Monate", t + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [t + " Jahre", t + " Jahren"]
            };
            return e ? o[n][0] : o[n][1]
        }
        var n = t.defineLocale("de-at", {
            months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                m: e,
                mm: "%d Minuten",
                h: e,
                hh: "%d Stunden",
                d: e,
                dd: e,
                M: e,
                MM: e,
                y: e,
                yy: e
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
        return n
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"],
            n = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"],
            i = t.defineLocale("dv", {
                months: e,
                monthsShort: e,
                weekdays: n,
                weekdaysShort: n,
                weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "D/M/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /މކ|މފ/,
                isPM: function(t) {
                    return "މފ" === t
                },
                meridiem: function(t, e, n) {
                    return 12 > t ? "މކ" : "މފ"
                },
                calendar: {
                    sameDay: "[މިއަދު] LT",
                    nextDay: "[މާދަމާ] LT",
                    nextWeek: "dddd LT",
                    lastDay: "[އިއްޔެ] LT",
                    lastWeek: "[ފާއިތުވި] dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ތެރޭގައި %s",
                    past: "ކުރިން %s",
                    s: "ސިކުންތުކޮޅެއް",
                    m: "މިނިޓެއް",
                    mm: "މިނިޓު %d",
                    h: "ގަޑިއިރެއް",
                    hh: "ގަޑިއިރު %d",
                    d: "ދުވަހެއް",
                    dd: "ދުވަސް %d",
                    M: "މަހެއް",
                    MM: "މަސް %d",
                    y: "އަހަރެއް",
                    yy: "އަހަރު %d"
                },
                preparse: function(t) {
                    return t.replace(/،/g, ",")
                },
                postformat: function(t) {
                    return t.replace(/,/g, "،")
                },
                week: {
                    dow: 7,
                    doy: 12
                }
            });
        return i
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";

        function e(t) {
            return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)
        }
        var n = t.defineLocale("el", {
            monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
            monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
            months: function(t, e) {
                return /D/.test(e.substring(0, e.indexOf("MMMM"))) ? this._monthsGenitiveEl[t.month()] : this._monthsNominativeEl[t.month()]
            },
            monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
            weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
            weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
            weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
            meridiem: function(t, e, n) {
                return t > 11 ? n ? "μμ" : "ΜΜ" : n ? "πμ" : "ΠΜ"
            },
            isPM: function(t) {
                return "μ" === (t + "").toLowerCase()[0]
            },
            meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendarEl: {
                sameDay: "[Σήμερα {}] LT",
                nextDay: "[Αύριο {}] LT",
                nextWeek: "dddd [{}] LT",
                lastDay: "[Χθες {}] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 6:
                            return "[το προηγούμενο] dddd [{}] LT";
                        default:
                            return "[την προηγούμενη] dddd [{}] LT"
                    }
                },
                sameElse: "L"
            },
            calendar: function(t, n) {
                var i = this._calendarEl[t],
                    o = n && n.hours();
                return e(i) && (i = i.apply(n)), i.replace("{}", o % 12 === 1 ? "στη" : "στις")
            },
            relativeTime: {
                future: "σε %s",
                past: "%s πριν",
                s: "λίγα δευτερόλεπτα",
                m: "ένα λεπτό",
                mm: "%d λεπτά",
                h: "μία ώρα",
                hh: "%d ώρες",
                d: "μία μέρα",
                dd: "%d μέρες",
                M: "ένας μήνας",
                MM: "%d μήνες",
                y: "ένας χρόνος",
                yy: "%d χρόνια"
            },
            ordinalParse: /\d{1,2}η/,
            ordinal: "%dη",
            week: {
                dow: 1,
                doy: 4
            }
        });
        return n
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("en-au", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            ordinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(t) {
                var e = t % 10,
                    n = 1 === ~~(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
                return t + n
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("en-ca", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "YYYY-MM-DD",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            ordinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(t) {
                var e = t % 10,
                    n = 1 === ~~(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
                return t + n
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("en-gb", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            ordinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(t) {
                var e = t % 10,
                    n = 1 === ~~(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
                return t + n
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("en-ie", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            ordinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(t) {
                var e = t % 10,
                    n = 1 === ~~(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
                return t + n
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("en-nz", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            ordinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(t) {
                var e = t % 10,
                    n = 1 === ~~(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
                return t + n
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("eo", {
            months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),
            weekdays: "Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato".split("_"),
            weekdaysShort: "Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab".split("_"),
            weekdaysMin: "Di_Lu_Ma_Me_Ĵa_Ve_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D[-an de] MMMM, YYYY",
                LLL: "D[-an de] MMMM, YYYY HH:mm",
                LLLL: "dddd, [la] D[-an de] MMMM, YYYY HH:mm"
            },
            meridiemParse: /[ap]\.t\.m/i,
            isPM: function(t) {
                return "p" === t.charAt(0).toLowerCase()
            },
            meridiem: function(t, e, n) {
                return t > 11 ? n ? "p.t.m." : "P.T.M." : n ? "a.t.m." : "A.T.M."
            },
            calendar: {
                sameDay: "[Hodiaŭ je] LT",
                nextDay: "[Morgaŭ je] LT",
                nextWeek: "dddd [je] LT",
                lastDay: "[Hieraŭ je] LT",
                lastWeek: "[pasinta] dddd [je] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "je %s",
                past: "antaŭ %s",
                s: "sekundoj",
                m: "minuto",
                mm: "%d minutoj",
                h: "horo",
                hh: "%d horoj",
                d: "tago",
                dd: "%d tagoj",
                M: "monato",
                MM: "%d monatoj",
                y: "jaro",
                yy: "%d jaroj"
            },
            ordinalParse: /\d{1,2}a/,
            ordinal: "%da",
            week: {
                dow: 1,
                doy: 7
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            i = t.defineLocale("es", {
                months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                monthsShort: function(t, i) {
                    return /-MMM-/.test(i) ? n[t.month()] : e[t.month()]
                },
                monthsParseExact: !0,
                weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
                weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
                weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY H:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
                },
                calendar: {
                    sameDay: function() {
                        return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    nextDay: function() {
                        return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    nextWeek: function() {
                        return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    lastDay: function() {
                        return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    lastWeek: function() {
                        return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "en %s",
                    past: "hace %s",
                    s: "unos segundos",
                    m: "un minuto",
                    mm: "%d minutos",
                    h: "una hora",
                    hh: "%d horas",
                    d: "un día",
                    dd: "%d días",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un año",
                    yy: "%d años"
                },
                ordinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
        return i
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";

        function e(t, e, n, i) {
            var o = {
                s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
                m: ["ühe minuti", "üks minut"],
                mm: [t + " minuti", t + " minutit"],
                h: ["ühe tunni", "tund aega", "üks tund"],
                hh: [t + " tunni", t + " tundi"],
                d: ["ühe päeva", "üks päev"],
                M: ["kuu aja", "kuu aega", "üks kuu"],
                MM: [t + " kuu", t + " kuud"],
                y: ["ühe aasta", "aasta", "üks aasta"],
                yy: [t + " aasta", t + " aastat"]
            };
            return e ? o[n][2] ? o[n][2] : o[n][1] : i ? o[n][0] : o[n][1]
        }
        var n = t.defineLocale("et", {
            months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
            monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
            weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
            weekdaysShort: "P_E_T_K_N_R_L".split("_"),
            weekdaysMin: "P_E_T_K_N_R_L".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Täna,] LT",
                nextDay: "[Homme,] LT",
                nextWeek: "[Järgmine] dddd LT",
                lastDay: "[Eile,] LT",
                lastWeek: "[Eelmine] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s pärast",
                past: "%s tagasi",
                s: e,
                m: e,
                mm: e,
                h: e,
                hh: e,
                d: e,
                dd: "%d päeva",
                M: e,
                MM: e,
                y: e,
                yy: e
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
        return n
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("eu", {
            months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
            monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
            monthsParseExact: !0,
            weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
            weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
            weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY[ko] MMMM[ren] D[a]",
                LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
                LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
                l: "YYYY-M-D",
                ll: "YYYY[ko] MMM D[a]",
                lll: "YYYY[ko] MMM D[a] HH:mm",
                llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
            },
            calendar: {
                sameDay: "[gaur] LT[etan]",
                nextDay: "[bihar] LT[etan]",
                nextWeek: "dddd LT[etan]",
                lastDay: "[atzo] LT[etan]",
                lastWeek: "[aurreko] dddd LT[etan]",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s barru",
                past: "duela %s",
                s: "segundo batzuk",
                m: "minutu bat",
                mm: "%d minutu",
                h: "ordu bat",
                hh: "%d ordu",
                d: "egun bat",
                dd: "%d egun",
                M: "hilabete bat",
                MM: "%d hilabete",
                y: "urte bat",
                yy: "%d urte"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = {
                1: "۱",
                2: "۲",
                3: "۳",
                4: "۴",
                5: "۵",
                6: "۶",
                7: "۷",
                8: "۸",
                9: "۹",
                0: "۰"
            },
            n = {
                "۱": "1",
                "۲": "2",
                "۳": "3",
                "۴": "4",
                "۵": "5",
                "۶": "6",
                "۷": "7",
                "۸": "8",
                "۹": "9",
                "۰": "0"
            },
            i = t.defineLocale("fa", {
                months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
                monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
                weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
                weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
                weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                meridiemParse: /قبل از ظهر|بعد از ظهر/,
                isPM: function(t) {
                    return /بعد از ظهر/.test(t)
                },
                meridiem: function(t, e, n) {
                    return 12 > t ? "قبل از ظهر" : "بعد از ظهر"
                },
                calendar: {
                    sameDay: "[امروز ساعت] LT",
                    nextDay: "[فردا ساعت] LT",
                    nextWeek: "dddd [ساعت] LT",
                    lastDay: "[دیروز ساعت] LT",
                    lastWeek: "dddd [پیش] [ساعت] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "در %s",
                    past: "%s پیش",
                    s: "چندین ثانیه",
                    m: "یک دقیقه",
                    mm: "%d دقیقه",
                    h: "یک ساعت",
                    hh: "%d ساعت",
                    d: "یک روز",
                    dd: "%d روز",
                    M: "یک ماه",
                    MM: "%d ماه",
                    y: "یک سال",
                    yy: "%d سال"
                },
                preparse: function(t) {
                    return t.replace(/[۰-۹]/g, function(t) {
                        return n[t]
                    }).replace(/،/g, ",")
                },
                postformat: function(t) {
                    return t.replace(/\d/g, function(t) {
                        return e[t]
                    }).replace(/,/g, "،")
                },
                ordinalParse: /\d{1,2}م/,
                ordinal: "%dم",
                week: {
                    dow: 6,
                    doy: 12
                }
            });
        return i
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";

        function e(t, e, i, o) {
            var s = "";
            switch (i) {
                case "s":
                    return o ? "muutaman sekunnin" : "muutama sekunti";
                case "m":
                    return o ? "minuutin" : "minuutti";
                case "mm":
                    s = o ? "minuutin" : "minuuttia";
                    break;
                case "h":
                    return o ? "tunnin" : "tunti";
                case "hh":
                    s = o ? "tunnin" : "tuntia";
                    break;
                case "d":
                    return o ? "päivän" : "päivä";
                case "dd":
                    s = o ? "päivän" : "päivää";
                    break;
                case "M":
                    return o ? "kuukauden" : "kuukausi";
                case "MM":
                    s = o ? "kuukauden" : "kuukautta";
                    break;
                case "y":
                    return o ? "vuoden" : "vuosi";
                case "yy":
                    s = o ? "vuoden" : "vuotta"
            }
            return s = n(t, o) + " " + s
        }

        function n(t, e) {
            return 10 > t ? e ? o[t] : i[t] : t
        }
        var i = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
            o = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", i[7], i[8], i[9]],
            s = t.defineLocale("fi", {
                months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
                monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
                weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
                weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
                weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD.MM.YYYY",
                    LL: "Do MMMM[ta] YYYY",
                    LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
                    LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
                    l: "D.M.YYYY",
                    ll: "Do MMM YYYY",
                    lll: "Do MMM YYYY, [klo] HH.mm",
                    llll: "ddd, Do MMM YYYY, [klo] HH.mm"
                },
                calendar: {
                    sameDay: "[tänään] [klo] LT",
                    nextDay: "[huomenna] [klo] LT",
                    nextWeek: "dddd [klo] LT",
                    lastDay: "[eilen] [klo] LT",
                    lastWeek: "[viime] dddd[na] [klo] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s päästä",
                    past: "%s sitten",
                    s: e,
                    m: e,
                    mm: e,
                    h: e,
                    hh: e,
                    d: e,
                    dd: e,
                    M: e,
                    MM: e,
                    y: e,
                    yy: e
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
        return s
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("fo", {
            months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
            weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
            weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D. MMMM, YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Í dag kl.] LT",
                nextDay: "[Í morgin kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[Í gjár kl.] LT",
                lastWeek: "[síðstu] dddd [kl] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "um %s",
                past: "%s síðani",
                s: "fá sekund",
                m: "ein minutt",
                mm: "%d minuttir",
                h: "ein tími",
                hh: "%d tímar",
                d: "ein dagur",
                dd: "%d dagar",
                M: "ein mánaði",
                MM: "%d mánaðir",
                y: "eitt ár",
                yy: "%d ár"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("fr", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd'hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            ordinalParse: /\d{1,2}(er|)/,
            ordinal: function(t) {
                return t + (1 === t ? "er" : "")
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("fr-ca", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd'hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            ordinalParse: /\d{1,2}(er|e)/,
            ordinal: function(t) {
                return t + (1 === t ? "er" : "e")
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("fr-ch", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd'hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            ordinalParse: /\d{1,2}(er|e)/,
            ordinal: function(t) {
                return t + (1 === t ? "er" : "e")
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
            n = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            i = t.defineLocale("fy", {
                months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
                monthsShort: function(t, i) {
                    return /-MMM-/.test(i) ? n[t.month()] : e[t.month()]
                },
                monthsParseExact: !0,
                weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
                weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
                weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD-MM-YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[hjoed om] LT",
                    nextDay: "[moarn om] LT",
                    nextWeek: "dddd [om] LT",
                    lastDay: "[juster om] LT",
                    lastWeek: "[ôfrûne] dddd [om] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "oer %s",
                    past: "%s lyn",
                    s: "in pear sekonden",
                    m: "ien minút",
                    mm: "%d minuten",
                    h: "ien oere",
                    hh: "%d oeren",
                    d: "ien dei",
                    dd: "%d dagen",
                    M: "ien moanne",
                    MM: "%d moannen",
                    y: "ien jier",
                    yy: "%d jierren"
                },
                ordinalParse: /\d{1,2}(ste|de)/,
                ordinal: function(t) {
                    return t + (1 === t || 8 === t || t >= 20 ? "ste" : "de")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
        return i
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"],
            n = ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"],
            i = ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
            o = ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
            s = ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"],
            r = t.defineLocale("gd", {
                months: e,
                monthsShort: n,
                monthsParseExact: !0,
                weekdays: i,
                weekdaysShort: o,
                weekdaysMin: s,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[An-diugh aig] LT",
                    nextDay: "[A-màireach aig] LT",
                    nextWeek: "dddd [aig] LT",
                    lastDay: "[An-dè aig] LT",
                    lastWeek: "dddd [seo chaidh] [aig] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ann an %s",
                    past: "bho chionn %s",
                    s: "beagan diogan",
                    m: "mionaid",
                    mm: "%d mionaidean",
                    h: "uair",
                    hh: "%d uairean",
                    d: "latha",
                    dd: "%d latha",
                    M: "mìos",
                    MM: "%d mìosan",
                    y: "bliadhna",
                    yy: "%d bliadhna"
                },
                ordinalParse: /\d{1,2}(d|na|mh)/,
                ordinal: function(t) {
                    var e = 1 === t ? "d" : t % 10 === 2 ? "na" : "mh";
                    return t + e
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
        return r
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("gl", {
            months: "Xaneiro_Febreiro_Marzo_Abril_Maio_Xuño_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro".split("_"),
            monthsShort: "Xan._Feb._Mar._Abr._Mai._Xuñ._Xul._Ago._Set._Out._Nov._Dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "Domingo_Luns_Martes_Mércores_Xoves_Venres_Sábado".split("_"),
            weekdaysShort: "Dom._Lun._Mar._Mér._Xov._Ven._Sáb.".split("_"),
            weekdaysMin: "Do_Lu_Ma_Mé_Xo_Ve_Sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: function() {
                    return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                },
                nextDay: function() {
                    return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT"
                },
                lastDay: function() {
                    return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT"
                },
                lastWeek: function() {
                    return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function(t) {
                    return "uns segundos" === t ? "nuns segundos" : "en " + t
                },
                past: "hai %s",
                s: "uns segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "unha hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un ano",
                yy: "%d anos"
            },
            ordinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 7
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("he", {
            months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
            monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
            weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
            weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
            weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [ב]MMMM YYYY",
                LLL: "D [ב]MMMM YYYY HH:mm",
                LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
                l: "D/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd, D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[היום ב־]LT",
                nextDay: "[מחר ב־]LT",
                nextWeek: "dddd [בשעה] LT",
                lastDay: "[אתמול ב־]LT",
                lastWeek: "[ביום] dddd [האחרון בשעה] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "בעוד %s",
                past: "לפני %s",
                s: "מספר שניות",
                m: "דקה",
                mm: "%d דקות",
                h: "שעה",
                hh: function(t) {
                    return 2 === t ? "שעתיים" : t + " שעות"
                },
                d: "יום",
                dd: function(t) {
                    return 2 === t ? "יומיים" : t + " ימים"
                },
                M: "חודש",
                MM: function(t) {
                    return 2 === t ? "חודשיים" : t + " חודשים"
                },
                y: "שנה",
                yy: function(t) {
                    return 2 === t ? "שנתיים" : t % 10 === 0 && 10 !== t ? t + " שנה" : t + " שנים"
                }
            },
            meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
            isPM: function(t) {
                return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(t)
            },
            meridiem: function(t, e, n) {
                return 5 > t ? "לפנות בוקר" : 10 > t ? "בבוקר" : 12 > t ? n ? 'לפנה"צ' : "לפני הצהריים" : 18 > t ? n ? 'אחה"צ' : "אחרי הצהריים" : "בערב"
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = {
                1: "१",
                2: "२",
                3: "३",
                4: "४",
                5: "५",
                6: "६",
                7: "७",
                8: "८",
                9: "९",
                0: "०"
            },
            n = {
                "१": "1",
                "२": "2",
                "३": "3",
                "४": "4",
                "५": "5",
                "६": "6",
                "७": "7",
                "८": "8",
                "९": "9",
                "०": "0"
            },
            i = t.defineLocale("hi", {
                months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
                monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
                monthsParseExact: !0,
                weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
                weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
                weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
                longDateFormat: {
                    LT: "A h:mm बजे",
                    LTS: "A h:mm:ss बजे",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm बजे",
                    LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
                },
                calendar: {
                    sameDay: "[आज] LT",
                    nextDay: "[कल] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[कल] LT",
                    lastWeek: "[पिछले] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s में",
                    past: "%s पहले",
                    s: "कुछ ही क्षण",
                    m: "एक मिनट",
                    mm: "%d मिनट",
                    h: "एक घंटा",
                    hh: "%d घंटे",
                    d: "एक दिन",
                    dd: "%d दिन",
                    M: "एक महीने",
                    MM: "%d महीने",
                    y: "एक वर्ष",
                    yy: "%d वर्ष"
                },
                preparse: function(t) {
                    return t.replace(/[१२३४५६७८९०]/g, function(t) {
                        return n[t]
                    })
                },
                postformat: function(t) {
                    return t.replace(/\d/g, function(t) {
                        return e[t]
                    })
                },
                meridiemParse: /रात|सुबह|दोपहर|शाम/,
                meridiemHour: function(t, e) {
                    return 12 === t && (t = 0), "रात" === e ? 4 > t ? t : t + 12 : "सुबह" === e ? t : "दोपहर" === e ? t >= 10 ? t : t + 12 : "शाम" === e ? t + 12 : void 0
                },
                meridiem: function(t, e, n) {
                    return 4 > t ? "रात" : 10 > t ? "सुबह" : 17 > t ? "दोपहर" : 20 > t ? "शाम" : "रात"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            });
        return i
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";

        function e(t, e, n) {
            var i = t + " ";
            switch (n) {
                case "m":
                    return e ? "jedna minuta" : "jedne minute";
                case "mm":
                    return i += 1 === t ? "minuta" : 2 === t || 3 === t || 4 === t ? "minute" : "minuta";
                case "h":
                    return e ? "jedan sat" : "jednog sata";
                case "hh":
                    return i += 1 === t ? "sat" : 2 === t || 3 === t || 4 === t ? "sata" : "sati";
                case "dd":
                    return i += 1 === t ? "dan" : "dana";
                case "MM":
                    return i += 1 === t ? "mjesec" : 2 === t || 3 === t || 4 === t ? "mjeseca" : "mjeseci";
                case "yy":
                    return i += 1 === t ? "godina" : 2 === t || 3 === t || 4 === t ? "godine" : "godina"
            }
        }
        var n = t.defineLocale("hr", {
            months: {
                format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
                standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
            },
            monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD. MM. YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[jučer u] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                            return "[prošlu] dddd [u] LT";
                        case 6:
                            return "[prošle] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prošli] dddd [u] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                m: e,
                mm: e,
                h: e,
                hh: e,
                d: "dan",
                dd: e,
                M: "mjesec",
                MM: e,
                y: "godinu",
                yy: e
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        });
        return n
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";

        function e(t, e, n, i) {
            var o = t;
            switch (n) {
                case "s":
                    return i || e ? "néhány másodperc" : "néhány másodperce";
                case "m":
                    return "egy" + (i || e ? " perc" : " perce");
                case "mm":
                    return o + (i || e ? " perc" : " perce");
                case "h":
                    return "egy" + (i || e ? " óra" : " órája");
                case "hh":
                    return o + (i || e ? " óra" : " órája");
                case "d":
                    return "egy" + (i || e ? " nap" : " napja");
                case "dd":
                    return o + (i || e ? " nap" : " napja");
                case "M":
                    return "egy" + (i || e ? " hónap" : " hónapja");
                case "MM":
                    return o + (i || e ? " hónap" : " hónapja");
                case "y":
                    return "egy" + (i || e ? " év" : " éve");
                case "yy":
                    return o + (i || e ? " év" : " éve")
            }
            return ""
        }

        function n(t) {
            return (t ? "" : "[múlt] ") + "[" + i[this.day()] + "] LT[-kor]"
        }
        var i = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" "),
            o = t.defineLocale("hu", {
                months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
                monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
                weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
                weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
                weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "YYYY.MM.DD.",
                    LL: "YYYY. MMMM D.",
                    LLL: "YYYY. MMMM D. H:mm",
                    LLLL: "YYYY. MMMM D., dddd H:mm"
                },
                meridiemParse: /de|du/i,
                isPM: function(t) {
                    return "u" === t.charAt(1).toLowerCase()
                },
                meridiem: function(t, e, n) {
                    return 12 > t ? n === !0 ? "de" : "DE" : n === !0 ? "du" : "DU"
                },
                calendar: {
                    sameDay: "[ma] LT[-kor]",
                    nextDay: "[holnap] LT[-kor]",
                    nextWeek: function() {
                        return n.call(this, !0)
                    },
                    lastDay: "[tegnap] LT[-kor]",
                    lastWeek: function() {
                        return n.call(this, !1)
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s múlva",
                    past: "%s",
                    s: e,
                    m: e,
                    mm: e,
                    h: e,
                    hh: e,
                    d: e,
                    dd: e,
                    M: e,
                    MM: e,
                    y: e,
                    yy: e
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            });
        return o
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("hy-am", {
            months: {
                format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),
                standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")
            },
            monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
            weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
            weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
            weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY թ.",
                LLL: "D MMMM YYYY թ., HH:mm",
                LLLL: "dddd, D MMMM YYYY թ., HH:mm"
            },
            calendar: {
                sameDay: "[այսօր] LT",
                nextDay: "[վաղը] LT",
                lastDay: "[երեկ] LT",
                nextWeek: function() {
                    return "dddd [օրը ժամը] LT"
                },
                lastWeek: function() {
                    return "[անցած] dddd [օրը ժամը] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "%s հետո",
                past: "%s առաջ",
                s: "մի քանի վայրկյան",
                m: "րոպե",
                mm: "%d րոպե",
                h: "ժամ",
                hh: "%d ժամ",
                d: "օր",
                dd: "%d օր",
                M: "ամիս",
                MM: "%d ամիս",
                y: "տարի",
                yy: "%d տարի"
            },
            meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
            isPM: function(t) {
                return /^(ցերեկվա|երեկոյան)$/.test(t)
            },
            meridiem: function(t) {
                return 4 > t ? "գիշերվա" : 12 > t ? "առավոտվա" : 17 > t ? "ցերեկվա" : "երեկոյան"
            },
            ordinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
            ordinal: function(t, e) {
                switch (e) {
                    case "DDD":
                    case "w":
                    case "W":
                    case "DDDo":
                        return 1 === t ? t + "-ին" : t + "-րդ";
                    default:
                        return t
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("id", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|siang|sore|malam/,
            meridiemHour: function(t, e) {
                return 12 === t && (t = 0), "pagi" === e ? t : "siang" === e ? t >= 11 ? t : t + 12 : "sore" === e || "malam" === e ? t + 12 : void 0
            },
            meridiem: function(t, e, n) {
                return 11 > t ? "pagi" : 15 > t ? "siang" : 19 > t ? "sore" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Besok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kemarin pukul] LT",
                lastWeek: "dddd [lalu pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lalu",
                s: "beberapa detik",
                m: "semenit",
                mm: "%d menit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";

        function e(t) {
            return t % 100 === 11 ? !0 : t % 10 !== 1
        }

        function n(t, n, i, o) {
            var s = t + " ";
            switch (i) {
                case "s":
                    return n || o ? "nokkrar sekúndur" : "nokkrum sekúndum";
                case "m":
                    return n ? "mínúta" : "mínútu";
                case "mm":
                    return e(t) ? s + (n || o ? "mínútur" : "mínútum") : n ? s + "mínúta" : s + "mínútu";
                case "hh":
                    return e(t) ? s + (n || o ? "klukkustundir" : "klukkustundum") : s + "klukkustund";
                case "d":
                    return n ? "dagur" : o ? "dag" : "degi";
                case "dd":
                    return e(t) ? n ? s + "dagar" : s + (o ? "daga" : "dögum") : n ? s + "dagur" : s + (o ? "dag" : "degi");
                case "M":
                    return n ? "mánuður" : o ? "mánuð" : "mánuði";
                case "MM":
                    return e(t) ? n ? s + "mánuðir" : s + (o ? "mánuði" : "mánuðum") : n ? s + "mánuður" : s + (o ? "mánuð" : "mánuði");
                case "y":
                    return n || o ? "ár" : "ári";
                case "yy":
                    return e(t) ? s + (n || o ? "ár" : "árum") : s + (n || o ? "ár" : "ári")
            }
        }
        var i = t.defineLocale("is", {
            months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
            weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
            weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
            weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] H:mm",
                LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
            },
            calendar: {
                sameDay: "[í dag kl.] LT",
                nextDay: "[á morgun kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[í gær kl.] LT",
                lastWeek: "[síðasta] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "eftir %s",
                past: "fyrir %s síðan",
                s: n,
                m: n,
                mm: n,
                h: "klukkustund",
                hh: n,
                d: n,
                dd: n,
                M: n,
                MM: n,
                y: n,
                yy: n
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
        return i
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("it", {
            months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
            monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
            weekdays: "Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"),
            weekdaysShort: "Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),
            weekdaysMin: "Do_Lu_Ma_Me_Gi_Ve_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Oggi alle] LT",
                nextDay: "[Domani alle] LT",
                nextWeek: "dddd [alle] LT",
                lastDay: "[Ieri alle] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[la scorsa] dddd [alle] LT";
                        default:
                            return "[lo scorso] dddd [alle] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function(t) {
                    return (/^[0-9].+$/.test(t) ? "tra" : "in") + " " + t
                },
                past: "%s fa",
                s: "alcuni secondi",
                m: "un minuto",
                mm: "%d minuti",
                h: "un'ora",
                hh: "%d ore",
                d: "un giorno",
                dd: "%d giorni",
                M: "un mese",
                MM: "%d mesi",
                y: "un anno",
                yy: "%d anni"
            },
            ordinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("ja", {
            months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
            weekdaysShort: "日_月_火_水_木_金_土".split("_"),
            weekdaysMin: "日_月_火_水_木_金_土".split("_"),
            longDateFormat: {
                LT: "Ah時m分",
                LTS: "Ah時m分s秒",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日Ah時m分",
                LLLL: "YYYY年M月D日Ah時m分 dddd"
            },
            meridiemParse: /午前|午後/i,
            isPM: function(t) {
                return "午後" === t
            },
            meridiem: function(t, e, n) {
                return 12 > t ? "午前" : "午後"
            },
            calendar: {
                sameDay: "[今日] LT",
                nextDay: "[明日] LT",
                nextWeek: "[来週]dddd LT",
                lastDay: "[昨日] LT",
                lastWeek: "[前週]dddd LT",
                sameElse: "L"
            },
            ordinalParse: /\d{1,2}日/,
            ordinal: function(t, e) {
                switch (e) {
                    case "d":
                    case "D":
                    case "DDD":
                        return t + "日";
                    default:
                        return t
                }
            },
            relativeTime: {
                future: "%s後",
                past: "%s前",
                s: "数秒",
                m: "1分",
                mm: "%d分",
                h: "1時間",
                hh: "%d時間",
                d: "1日",
                dd: "%d日",
                M: "1ヶ月",
                MM: "%dヶ月",
                y: "1年",
                yy: "%d年"
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("jv", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
            weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /enjing|siyang|sonten|ndalu/,
            meridiemHour: function(t, e) {
                return 12 === t && (t = 0), "enjing" === e ? t : "siyang" === e ? t >= 11 ? t : t + 12 : "sonten" === e || "ndalu" === e ? t + 12 : void 0
            },
            meridiem: function(t, e, n) {
                return 11 > t ? "enjing" : 15 > t ? "siyang" : 19 > t ? "sonten" : "ndalu"
            },
            calendar: {
                sameDay: "[Dinten puniko pukul] LT",
                nextDay: "[Mbenjang pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kala wingi pukul] LT",
                lastWeek: "dddd [kepengker pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "wonten ing %s",
                past: "%s ingkang kepengker",
                s: "sawetawis detik",
                m: "setunggal menit",
                mm: "%d menit",
                h: "setunggal jam",
                hh: "%d jam",
                d: "sedinten",
                dd: "%d dinten",
                M: "sewulan",
                MM: "%d wulan",
                y: "setaun",
                yy: "%d taun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("ka", {
            months: {
                standalone: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
                format: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")
            },
            monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
            weekdays: {
                standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
                format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),
                isFormat: /(წინა|შემდეგ)/
            },
            weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
            weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[დღეს] LT[-ზე]",
                nextDay: "[ხვალ] LT[-ზე]",
                lastDay: "[გუშინ] LT[-ზე]",
                nextWeek: "[შემდეგ] dddd LT[-ზე]",
                lastWeek: "[წინა] dddd LT-ზე",
                sameElse: "L"
            },
            relativeTime: {
                future: function(t) {
                    return /(წამი|წუთი|საათი|წელი)/.test(t) ? t.replace(/ი$/, "ში") : t + "ში"
                },
                past: function(t) {
                    return /(წამი|წუთი|საათი|დღე|თვე)/.test(t) ? t.replace(/(ი|ე)$/, "ის წინ") : /წელი/.test(t) ? t.replace(/წელი$/, "წლის წინ") : void 0
                },
                s: "რამდენიმე წამი",
                m: "წუთი",
                mm: "%d წუთი",
                h: "საათი",
                hh: "%d საათი",
                d: "დღე",
                dd: "%d დღე",
                M: "თვე",
                MM: "%d თვე",
                y: "წელი",
                yy: "%d წელი"
            },
            ordinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
            ordinal: function(t) {
                return 0 === t ? t : 1 === t ? t + "-ლი" : 20 > t || 100 >= t && t % 20 === 0 || t % 100 === 0 ? "მე-" + t : t + "-ე"
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = {
                0: "-ші",
                1: "-ші",
                2: "-ші",
                3: "-ші",
                4: "-ші",
                5: "-ші",
                6: "-шы",
                7: "-ші",
                8: "-ші",
                9: "-шы",
                10: "-шы",
                20: "-шы",
                30: "-шы",
                40: "-шы",
                50: "-ші",
                60: "-шы",
                70: "-ші",
                80: "-ші",
                90: "-шы",
                100: "-ші"
            },
            n = t.defineLocale("kk", {
                months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),
                monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
                weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),
                weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
                weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Бүгін сағат] LT",
                    nextDay: "[Ертең сағат] LT",
                    nextWeek: "dddd [сағат] LT",
                    lastDay: "[Кеше сағат] LT",
                    lastWeek: "[Өткен аптаның] dddd [сағат] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s ішінде",
                    past: "%s бұрын",
                    s: "бірнеше секунд",
                    m: "бір минут",
                    mm: "%d минут",
                    h: "бір сағат",
                    hh: "%d сағат",
                    d: "бір күн",
                    dd: "%d күн",
                    M: "бір ай",
                    MM: "%d ай",
                    y: "бір жыл",
                    yy: "%d жыл"
                },
                ordinalParse: /\d{1,2}-(ші|шы)/,
                ordinal: function(t) {
                    var n = t % 10,
                        i = t >= 100 ? 100 : null;
                    return t + (e[t] || e[n] || e[i])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            });
        return n
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("km", {
            months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
            monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
            weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
            weekdaysShort: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
            weekdaysMin: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
                nextDay: "[ស្អែក ម៉ោង] LT",
                nextWeek: "dddd [ម៉ោង] LT",
                lastDay: "[ម្សិលមិញ ម៉ោង] LT",
                lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sទៀត",
                past: "%sមុន",
                s: "ប៉ុន្មានវិនាទី",
                m: "មួយនាទី",
                mm: "%d នាទី",
                h: "មួយម៉ោង",
                hh: "%d ម៉ោង",
                d: "មួយថ្ងៃ",
                dd: "%d ថ្ងៃ",
                M: "មួយខែ",
                MM: "%d ខែ",
                y: "មួយឆ្នាំ",
                yy: "%d ឆ្នាំ"
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("ko", {
            months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
            monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
            weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
            weekdaysShort: "일_월_화_수_목_금_토".split("_"),
            weekdaysMin: "일_월_화_수_목_금_토".split("_"),
            longDateFormat: {
                LT: "A h시 m분",
                LTS: "A h시 m분 s초",
                L: "YYYY.MM.DD",
                LL: "YYYY년 MMMM D일",
                LLL: "YYYY년 MMMM D일 A h시 m분",
                LLLL: "YYYY년 MMMM D일 dddd A h시 m분"
            },
            calendar: {
                sameDay: "오늘 LT",
                nextDay: "내일 LT",
                nextWeek: "dddd LT",
                lastDay: "어제 LT",
                lastWeek: "지난주 dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s 후",
                past: "%s 전",
                s: "몇 초",
                ss: "%d초",
                m: "일분",
                mm: "%d분",
                h: "한 시간",
                hh: "%d시간",
                d: "하루",
                dd: "%d일",
                M: "한 달",
                MM: "%d달",
                y: "일 년",
                yy: "%d년"
            },
            ordinalParse: /\d{1,2}일/,
            ordinal: "%d일",
            meridiemParse: /오전|오후/,
            isPM: function(t) {
                return "오후" === t
            },
            meridiem: function(t, e, n) {
                return 12 > t ? "오전" : "오후"
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = {
                0: "-чү",
                1: "-чи",
                2: "-чи",
                3: "-чү",
                4: "-чү",
                5: "-чи",
                6: "-чы",
                7: "-чи",
                8: "-чи",
                9: "-чу",
                10: "-чу",
                20: "-чы",
                30: "-чу",
                40: "-чы",
                50: "-чү",
                60: "-чы",
                70: "-чи",
                80: "-чи",
                90: "-чу",
                100: "-чү"
            },
            n = t.defineLocale("ky", {
                months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
                monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
                weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),
                weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
                weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Бүгүн саат] LT",
                    nextDay: "[Эртең саат] LT",
                    nextWeek: "dddd [саат] LT",
                    lastDay: "[Кече саат] LT",
                    lastWeek: "[Өткен аптанын] dddd [күнү] [саат] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s ичинде",
                    past: "%s мурун",
                    s: "бирнече секунд",
                    m: "бир мүнөт",
                    mm: "%d мүнөт",
                    h: "бир саат",
                    hh: "%d саат",
                    d: "бир күн",
                    dd: "%d күн",
                    M: "бир ай",
                    MM: "%d ай",
                    y: "бир жыл",
                    yy: "%d жыл"
                },
                ordinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
                ordinal: function(t) {
                    var n = t % 10,
                        i = t >= 100 ? 100 : null;
                    return t + (e[t] || e[n] || e[i])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            });
        return n
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";

        function e(t, e, n, i) {
            var o = {
                m: ["eng Minutt", "enger Minutt"],
                h: ["eng Stonn", "enger Stonn"],
                d: ["een Dag", "engem Dag"],
                M: ["ee Mount", "engem Mount"],
                y: ["ee Joer", "engem Joer"]
            };
            return e ? o[n][0] : o[n][1]
        }

        function n(t) {
            var e = t.substr(0, t.indexOf(" "));
            return o(e) ? "a " + t : "an " + t
        }

        function i(t) {
            var e = t.substr(0, t.indexOf(" "));
            return o(e) ? "viru " + t : "virun " + t
        }

        function o(t) {
            if (t = parseInt(t, 10), isNaN(t)) return !1;
            if (0 > t) return !0;
            if (10 > t) return t >= 4 && 7 >= t;
            if (100 > t) {
                var e = t % 10,
                    n = t / 10;
                return o(0 === e ? n : e)
            }
            if (1e4 > t) {
                for (; t >= 10;) t /= 10;
                return o(t)
            }
            return t /= 1e3, o(t)
        }
        var s = t.defineLocale("lb", {
            months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
            weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm [Auer]",
                LTS: "H:mm:ss [Auer]",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm [Auer]",
                LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
            },
            calendar: {
                sameDay: "[Haut um] LT",
                sameElse: "L",
                nextDay: "[Muer um] LT",
                nextWeek: "dddd [um] LT",
                lastDay: "[Gëschter um] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 2:
                        case 4:
                            return "[Leschten] dddd [um] LT";
                        default:
                            return "[Leschte] dddd [um] LT"
                    }
                }
            },
            relativeTime: {
                future: n,
                past: i,
                s: "e puer Sekonnen",
                m: e,
                mm: "%d Minutten",
                h: e,
                hh: "%d Stonnen",
                d: e,
                dd: "%d Deeg",
                M: e,
                MM: "%d Méint",
                y: e,
                yy: "%d Joer"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
        return s
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("lo", {
            months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
            monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
            weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
            weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
            weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "ວັນdddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
            isPM: function(t) {
                return "ຕອນແລງ" === t
            },
            meridiem: function(t, e, n) {
                return 12 > t ? "ຕອນເຊົ້າ" : "ຕອນແລງ"
            },
            calendar: {
                sameDay: "[ມື້ນີ້ເວລາ] LT",
                nextDay: "[ມື້ອື່ນເວລາ] LT",
                nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
                lastDay: "[ມື້ວານນີ້ເວລາ] LT",
                lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ອີກ %s",
                past: "%sຜ່ານມາ",
                s: "ບໍ່ເທົ່າໃດວິນາທີ",
                m: "1 ນາທີ",
                mm: "%d ນາທີ",
                h: "1 ຊົ່ວໂມງ",
                hh: "%d ຊົ່ວໂມງ",
                d: "1 ມື້",
                dd: "%d ມື້",
                M: "1 ເດືອນ",
                MM: "%d ເດືອນ",
                y: "1 ປີ",
                yy: "%d ປີ"
            },
            ordinalParse: /(ທີ່)\d{1,2}/,
            ordinal: function(t) {
                return "ທີ່" + t
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";

        function e(t, e, n, i) {
            return e ? "kelios sekundės" : i ? "kelių sekundžių" : "kelias sekundes"
        }

        function n(t, e, n, i) {
            return e ? o(n)[0] : i ? o(n)[1] : o(n)[2]
        }

        function i(t) {
            return t % 10 === 0 || t > 10 && 20 > t
        }

        function o(t) {
            return r[t].split("_")
        }

        function s(t, e, s, r) {
            var a = t + " ";
            return 1 === t ? a + n(t, e, s[0], r) : e ? a + (i(t) ? o(s)[1] : o(s)[0]) : r ? a + o(s)[1] : a + (i(t) ? o(s)[1] : o(s)[2])
        }
        var r = {
                m: "minutė_minutės_minutę",
                mm: "minutės_minučių_minutes",
                h: "valanda_valandos_valandą",
                hh: "valandos_valandų_valandas",
                d: "diena_dienos_dieną",
                dd: "dienos_dienų_dienas",
                M: "mėnuo_mėnesio_mėnesį",
                MM: "mėnesiai_mėnesių_mėnesius",
                y: "metai_metų_metus",
                yy: "metai_metų_metus"
            },
            a = t.defineLocale("lt", {
                months: {
                    format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
                    standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_")
                },
                monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
                weekdays: {
                    format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
                    standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
                    isFormat: /dddd HH:mm/
                },
                weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
                weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "YYYY [m.] MMMM D [d.]",
                    LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                    LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
                    l: "YYYY-MM-DD",
                    ll: "YYYY [m.] MMMM D [d.]",
                    lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                    llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
                },
                calendar: {
                    sameDay: "[Šiandien] LT",
                    nextDay: "[Rytoj] LT",
                    nextWeek: "dddd LT",
                    lastDay: "[Vakar] LT",
                    lastWeek: "[Praėjusį] dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "po %s",
                    past: "prieš %s",
                    s: e,
                    m: n,
                    mm: s,
                    h: n,
                    hh: s,
                    d: n,
                    dd: s,
                    M: n,
                    MM: s,
                    y: n,
                    yy: s
                },
                ordinalParse: /\d{1,2}-oji/,
                ordinal: function(t) {
                    return t + "-oji"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
        return a
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";

        function e(t, e, n) {
            return n ? e % 10 === 1 && 11 !== e ? t[2] : t[3] : e % 10 === 1 && 11 !== e ? t[0] : t[1]
        }

        function n(t, n, i) {
            return t + " " + e(s[i], t, n)
        }

        function i(t, n, i) {
            return e(s[i], t, n)
        }

        function o(t, e) {
            return e ? "dažas sekundes" : "dažām sekundēm"
        }
        var s = {
                m: "minūtes_minūtēm_minūte_minūtes".split("_"),
                mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
                h: "stundas_stundām_stunda_stundas".split("_"),
                hh: "stundas_stundām_stunda_stundas".split("_"),
                d: "dienas_dienām_diena_dienas".split("_"),
                dd: "dienas_dienām_diena_dienas".split("_"),
                M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
                MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
                y: "gada_gadiem_gads_gadi".split("_"),
                yy: "gada_gadiem_gads_gadi".split("_")
            },
            r = t.defineLocale("lv", {
                months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
                monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
                weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
                weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
                weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY.",
                    LL: "YYYY. [gada] D. MMMM",
                    LLL: "YYYY. [gada] D. MMMM, HH:mm",
                    LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
                },
                calendar: {
                    sameDay: "[Šodien pulksten] LT",
                    nextDay: "[Rīt pulksten] LT",
                    nextWeek: "dddd [pulksten] LT",
                    lastDay: "[Vakar pulksten] LT",
                    lastWeek: "[Pagājušā] dddd [pulksten] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "pēc %s",
                    past: "pirms %s",
                    s: o,
                    m: i,
                    mm: n,
                    h: i,
                    hh: n,
                    d: i,
                    dd: n,
                    M: i,
                    MM: n,
                    y: i,
                    yy: n
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
        return r
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = {
                words: {
                    m: ["jedan minut", "jednog minuta"],
                    mm: ["minut", "minuta", "minuta"],
                    h: ["jedan sat", "jednog sata"],
                    hh: ["sat", "sata", "sati"],
                    dd: ["dan", "dana", "dana"],
                    MM: ["mjesec", "mjeseca", "mjeseci"],
                    yy: ["godina", "godine", "godina"]
                },
                correctGrammaticalCase: function(t, e) {
                    return 1 === t ? e[0] : t >= 2 && 4 >= t ? e[1] : e[2]
                },
                translate: function(t, n, i) {
                    var o = e.words[i];
                    return 1 === i.length ? n ? o[0] : o[1] : t + " " + e.correctGrammaticalCase(t, o)
                }
            },
            n = t.defineLocale("me", {
                months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
                monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
                weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
                weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD. MM. YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danas u] LT",
                    nextDay: "[sjutra u] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[u] [nedjelju] [u] LT";
                            case 3:
                                return "[u] [srijedu] [u] LT";
                            case 6:
                                return "[u] [subotu] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[u] dddd [u] LT"
                        }
                    },
                    lastDay: "[juče u] LT",
                    lastWeek: function() {
                        var t = ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"];
                        return t[this.day()]
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "prije %s",
                    s: "nekoliko sekundi",
                    m: e.translate,
                    mm: e.translate,
                    h: e.translate,
                    hh: e.translate,
                    d: "dan",
                    dd: e.translate,
                    M: "mjesec",
                    MM: e.translate,
                    y: "godinu",
                    yy: e.translate
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            });
        return n
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("mk", {
            months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
            monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
            weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
            weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
            weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Денес во] LT",
                nextDay: "[Утре во] LT",
                nextWeek: "[Во] dddd [во] LT",
                lastDay: "[Вчера во] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[Изминатата] dddd [во] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[Изминатиот] dddd [во] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "после %s",
                past: "пред %s",
                s: "неколку секунди",
                m: "минута",
                mm: "%d минути",
                h: "час",
                hh: "%d часа",
                d: "ден",
                dd: "%d дена",
                M: "месец",
                MM: "%d месеци",
                y: "година",
                yy: "%d години"
            },
            ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
            ordinal: function(t) {
                var e = t % 10,
                    n = t % 100;
                return 0 === t ? t + "-ев" : 0 === n ? t + "-ен" : n > 10 && 20 > n ? t + "-ти" : 1 === e ? t + "-ви" : 2 === e ? t + "-ри" : 7 === e || 8 === e ? t + "-ми" : t + "-ти"
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("ml", {
            months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
            monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
            monthsParseExact: !0,
            weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
            weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
            weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
            longDateFormat: {
                LT: "A h:mm -നു",
                LTS: "A h:mm:ss -നു",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm -നു",
                LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
            },
            calendar: {
                sameDay: "[ഇന്ന്] LT",
                nextDay: "[നാളെ] LT",
                nextWeek: "dddd, LT",
                lastDay: "[ഇന്നലെ] LT",
                lastWeek: "[കഴിഞ്ഞ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s കഴിഞ്ഞ്",
                past: "%s മുൻപ്",
                s: "അൽപ നിമിഷങ്ങൾ",
                m: "ഒരു മിനിറ്റ്",
                mm: "%d മിനിറ്റ്",
                h: "ഒരു മണിക്കൂർ",
                hh: "%d മണിക്കൂർ",
                d: "ഒരു ദിവസം",
                dd: "%d ദിവസം",
                M: "ഒരു മാസം",
                MM: "%d മാസം",
                y: "ഒരു വർഷം",
                yy: "%d വർഷം"
            },
            meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
            meridiemHour: function(t, e) {
                return 12 === t && (t = 0), "രാത്രി" === e && t >= 4 || "ഉച്ച കഴിഞ്ഞ്" === e || "വൈകുന്നേരം" === e ? t + 12 : t
            },
            meridiem: function(t, e, n) {
                return 4 > t ? "രാത്രി" : 12 > t ? "രാവിലെ" : 17 > t ? "ഉച്ച കഴിഞ്ഞ്" : 20 > t ? "വൈകുന്നേരം" : "രാത്രി"
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";

        function e(t, e, n, i) {
            var o = "";
            if (e) switch (n) {
                case "s":
                    o = "काही सेकंद";
                    break;
                case "m":
                    o = "एक मिनिट";
                    break;
                case "mm":
                    o = "%d मिनिटे";
                    break;
                case "h":
                    o = "एक तास";
                    break;
                case "hh":
                    o = "%d तास";
                    break;
                case "d":
                    o = "एक दिवस";
                    break;
                case "dd":
                    o = "%d दिवस";
                    break;
                case "M":
                    o = "एक महिना";
                    break;
                case "MM":
                    o = "%d महिने";
                    break;
                case "y":
                    o = "एक वर्ष";
                    break;
                case "yy":
                    o = "%d वर्षे"
            } else switch (n) {
                case "s":
                    o = "काही सेकंदां";
                    break;
                case "m":
                    o = "एका मिनिटा";
                    break;
                case "mm":
                    o = "%d मिनिटां";
                    break;
                case "h":
                    o = "एका तासा";
                    break;
                case "hh":
                    o = "%d तासां";
                    break;
                case "d":
                    o = "एका दिवसा";
                    break;
                case "dd":
                    o = "%d दिवसां";
                    break;
                case "M":
                    o = "एका महिन्या";
                    break;
                case "MM":
                    o = "%d महिन्यां";
                    break;
                case "y":
                    o = "एका वर्षा";
                    break;
                case "yy":
                    o = "%d वर्षां"
            }
            return o.replace(/%d/i, t)
        }
        var n = {
                1: "१",
                2: "२",
                3: "३",
                4: "४",
                5: "५",
                6: "६",
                7: "७",
                8: "८",
                9: "९",
                0: "०"
            },
            i = {
                "१": "1",
                "२": "2",
                "३": "3",
                "४": "4",
                "५": "5",
                "६": "6",
                "७": "7",
                "८": "8",
                "९": "9",
                "०": "0"
            },
            o = t.defineLocale("mr", {
                months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
                monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
                monthsParseExact: !0,
                weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
                weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
                weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
                longDateFormat: {
                    LT: "A h:mm वाजता",
                    LTS: "A h:mm:ss वाजता",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm वाजता",
                    LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
                },
                calendar: {
                    sameDay: "[आज] LT",
                    nextDay: "[उद्या] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[काल] LT",
                    lastWeek: "[मागील] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%sमध्ये",
                    past: "%sपूर्वी",
                    s: e,
                    m: e,
                    mm: e,
                    h: e,
                    hh: e,
                    d: e,
                    dd: e,
                    M: e,
                    MM: e,
                    y: e,
                    yy: e
                },
                preparse: function(t) {
                    return t.replace(/[१२३४५६७८९०]/g, function(t) {
                        return i[t]
                    })
                },
                postformat: function(t) {
                    return t.replace(/\d/g, function(t) {
                        return n[t]
                    })
                },
                meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
                meridiemHour: function(t, e) {
                    return 12 === t && (t = 0), "रात्री" === e ? 4 > t ? t : t + 12 : "सकाळी" === e ? t : "दुपारी" === e ? t >= 10 ? t : t + 12 : "सायंकाळी" === e ? t + 12 : void 0
                },
                meridiem: function(t, e, n) {
                    return 4 > t ? "रात्री" : 10 > t ? "सकाळी" : 17 > t ? "दुपारी" : 20 > t ? "सायंकाळी" : "रात्री"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            });
        return o
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("ms", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function(t, e) {
                return 12 === t && (t = 0), "pagi" === e ? t : "tengahari" === e ? t >= 11 ? t : t + 12 : "petang" === e || "malam" === e ? t + 12 : void 0
            },
            meridiem: function(t, e, n) {
                return 11 > t ? "pagi" : 15 > t ? "tengahari" : 19 > t ? "petang" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("ms-my", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function(t, e) {
                return 12 === t && (t = 0), "pagi" === e ? t : "tengahari" === e ? t >= 11 ? t : t + 12 : "petang" === e || "malam" === e ? t + 12 : void 0
            },
            meridiem: function(t, e, n) {
                return 11 > t ? "pagi" : 15 > t ? "tengahari" : 19 > t ? "petang" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = {
                1: "၁",
                2: "၂",
                3: "၃",
                4: "၄",
                5: "၅",
                6: "၆",
                7: "၇",
                8: "၈",
                9: "၉",
                0: "၀"
            },
            n = {
                "၁": "1",
                "၂": "2",
                "၃": "3",
                "၄": "4",
                "၅": "5",
                "၆": "6",
                "၇": "7",
                "၈": "8",
                "၉": "9",
                "၀": "0"
            },
            i = t.defineLocale("my", {
                months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
                monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
                weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
                weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
                weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[ယနေ.] LT [မှာ]",
                    nextDay: "[မနက်ဖြန်] LT [မှာ]",
                    nextWeek: "dddd LT [မှာ]",
                    lastDay: "[မနေ.က] LT [မှာ]",
                    lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "လာမည့် %s မှာ",
                    past: "လွန်ခဲ့သော %s က",
                    s: "စက္ကန်.အနည်းငယ်",
                    m: "တစ်မိနစ်",
                    mm: "%d မိနစ်",
                    h: "တစ်နာရီ",
                    hh: "%d နာရီ",
                    d: "တစ်ရက်",
                    dd: "%d ရက်",
                    M: "တစ်လ",
                    MM: "%d လ",
                    y: "တစ်နှစ်",
                    yy: "%d နှစ်"
                },
                preparse: function(t) {
                    return t.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function(t) {
                        return n[t]
                    })
                },
                postformat: function(t) {
                    return t.replace(/\d/g, function(t) {
                        return e[t]
                    })
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
        return i
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("nb", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
            monthsParseExact: !0,
            weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
            weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] HH:mm",
                LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[i dag kl.] LT",
                nextDay: "[i morgen kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[i går kl.] LT",
                lastWeek: "[forrige] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "noen sekunder",
                m: "ett minutt",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dager",
                M: "en måned",
                MM: "%d måneder",
                y: "ett år",
                yy: "%d år"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = {
                1: "१",
                2: "२",
                3: "३",
                4: "४",
                5: "५",
                6: "६",
                7: "७",
                8: "८",
                9: "९",
                0: "०"
            },
            n = {
                "१": "1",
                "२": "2",
                "३": "3",
                "४": "4",
                "५": "5",
                "६": "6",
                "७": "7",
                "८": "8",
                "९": "9",
                "०": "0"
            },
            i = t.defineLocale("ne", {
                months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
                monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
                monthsParseExact: !0,
                weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
                weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
                weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "Aको h:mm बजे",
                    LTS: "Aको h:mm:ss बजे",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, Aको h:mm बजे",
                    LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
                },
                preparse: function(t) {
                    return t.replace(/[१२३४५६७८९०]/g, function(t) {
                        return n[t]
                    })
                },
                postformat: function(t) {
                    return t.replace(/\d/g, function(t) {
                        return e[t]
                    })
                },
                meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
                meridiemHour: function(t, e) {
                    return 12 === t && (t = 0), "राति" === e ? 4 > t ? t : t + 12 : "बिहान" === e ? t : "दिउँसो" === e ? t >= 10 ? t : t + 12 : "साँझ" === e ? t + 12 : void 0
                },
                meridiem: function(t, e, n) {
                    return 3 > t ? "राति" : 12 > t ? "बिहान" : 16 > t ? "दिउँसो" : 20 > t ? "साँझ" : "राति"
                },
                calendar: {
                    sameDay: "[आज] LT",
                    nextDay: "[भोलि] LT",
                    nextWeek: "[आउँदो] dddd[,] LT",
                    lastDay: "[हिजो] LT",
                    lastWeek: "[गएको] dddd[,] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%sमा",
                    past: "%s अगाडि",
                    s: "केही क्षण",
                    m: "एक मिनेट",
                    mm: "%d मिनेट",
                    h: "एक घण्टा",
                    hh: "%d घण्टा",
                    d: "एक दिन",
                    dd: "%d दिन",
                    M: "एक महिना",
                    MM: "%d महिना",
                    y: "एक बर्ष",
                    yy: "%d बर्ष"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            });
        return i
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
            n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
            i = t.defineLocale("nl", {
                months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
                monthsShort: function(t, i) {
                    return /-MMM-/.test(i) ? n[t.month()] : e[t.month()]
                },
                monthsParseExact: !0,
                weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
                weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
                weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD-MM-YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[vandaag om] LT",
                    nextDay: "[morgen om] LT",
                    nextWeek: "dddd [om] LT",
                    lastDay: "[gisteren om] LT",
                    lastWeek: "[afgelopen] dddd [om] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "over %s",
                    past: "%s geleden",
                    s: "een paar seconden",
                    m: "één minuut",
                    mm: "%d minuten",
                    h: "één uur",
                    hh: "%d uur",
                    d: "één dag",
                    dd: "%d dagen",
                    M: "één maand",
                    MM: "%d maanden",
                    y: "één jaar",
                    yy: "%d jaar"
                },
                ordinalParse: /\d{1,2}(ste|de)/,
                ordinal: function(t) {
                    return t + (1 === t || 8 === t || t >= 20 ? "ste" : "de")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
        return i
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("nn", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
            weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"),
            weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] H:mm",
                LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[I dag klokka] LT",
                nextDay: "[I morgon klokka] LT",
                nextWeek: "dddd [klokka] LT",
                lastDay: "[I går klokka] LT",
                lastWeek: "[Føregåande] dddd [klokka] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s sidan",
                s: "nokre sekund",
                m: "eit minutt",
                mm: "%d minutt",
                h: "ein time",
                hh: "%d timar",
                d: "ein dag",
                dd: "%d dagar",
                M: "ein månad",
                MM: "%d månader",
                y: "eit år",
                yy: "%d år"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = {
                1: "੧",
                2: "੨",
                3: "੩",
                4: "੪",
                5: "੫",
                6: "੬",
                7: "੭",
                8: "੮",
                9: "੯",
                0: "੦"
            },
            n = {
                "੧": "1",
                "੨": "2",
                "੩": "3",
                "੪": "4",
                "੫": "5",
                "੬": "6",
                "੭": "7",
                "੮": "8",
                "੯": "9",
                "੦": "0"
            },
            i = t.defineLocale("pa-in", {
                months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
                monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
                weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
                weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
                weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
                longDateFormat: {
                    LT: "A h:mm ਵਜੇ",
                    LTS: "A h:mm:ss ਵਜੇ",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
                    LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ"
                },
                calendar: {
                    sameDay: "[ਅਜ] LT",
                    nextDay: "[ਕਲ] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[ਕਲ] LT",
                    lastWeek: "[ਪਿਛਲੇ] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s ਵਿੱਚ",
                    past: "%s ਪਿਛਲੇ",
                    s: "ਕੁਝ ਸਕਿੰਟ",
                    m: "ਇਕ ਮਿੰਟ",
                    mm: "%d ਮਿੰਟ",
                    h: "ਇੱਕ ਘੰਟਾ",
                    hh: "%d ਘੰਟੇ",
                    d: "ਇੱਕ ਦਿਨ",
                    dd: "%d ਦਿਨ",
                    M: "ਇੱਕ ਮਹੀਨਾ",
                    MM: "%d ਮਹੀਨੇ",
                    y: "ਇੱਕ ਸਾਲ",
                    yy: "%d ਸਾਲ"
                },
                preparse: function(t) {
                    return t.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function(t) {
                        return n[t]
                    })
                },
                postformat: function(t) {
                    return t.replace(/\d/g, function(t) {
                        return e[t]
                    })
                },
                meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
                meridiemHour: function(t, e) {
                    return 12 === t && (t = 0), "ਰਾਤ" === e ? 4 > t ? t : t + 12 : "ਸਵੇਰ" === e ? t : "ਦੁਪਹਿਰ" === e ? t >= 10 ? t : t + 12 : "ਸ਼ਾਮ" === e ? t + 12 : void 0
                },
                meridiem: function(t, e, n) {
                    return 4 > t ? "ਰਾਤ" : 10 > t ? "ਸਵੇਰ" : 17 > t ? "ਦੁਪਹਿਰ" : 20 > t ? "ਸ਼ਾਮ" : "ਰਾਤ"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            });
        return i
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";

        function e(t) {
            return 5 > t % 10 && t % 10 > 1 && ~~(t / 10) % 10 !== 1
        }

        function n(t, n, i) {
            var o = t + " ";
            switch (i) {
                case "m":
                    return n ? "minuta" : "minutę";
                case "mm":
                    return o + (e(t) ? "minuty" : "minut");
                case "h":
                    return n ? "godzina" : "godzinę";
                case "hh":
                    return o + (e(t) ? "godziny" : "godzin");
                case "MM":
                    return o + (e(t) ? "miesiące" : "miesięcy");
                case "yy":
                    return o + (e(t) ? "lata" : "lat")
            }
        }
        var i = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
            o = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),
            s = t.defineLocale("pl", {
                months: function(t, e) {
                    return "" === e ? "(" + o[t.month()] + "|" + i[t.month()] + ")" : /D MMMM/.test(e) ? o[t.month()] : i[t.month()]
                },
                monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
                weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
                weekdaysShort: "nie_pon_wt_śr_czw_pt_sb".split("_"),
                weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Dziś o] LT",
                    nextDay: "[Jutro o] LT",
                    nextWeek: "[W] dddd [o] LT",
                    lastDay: "[Wczoraj o] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[W zeszłą niedzielę o] LT";
                            case 3:
                                return "[W zeszłą środę o] LT";
                            case 6:
                                return "[W zeszłą sobotę o] LT";
                            default:
                                return "[W zeszły] dddd [o] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "%s temu",
                    s: "kilka sekund",
                    m: n,
                    mm: n,
                    h: n,
                    hh: n,
                    d: "1 dzień",
                    dd: "%d dni",
                    M: "miesiąc",
                    MM: n,
                    y: "rok",
                    yy: n
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
        return s
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("pt", {
            months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado".split("_"),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
            weekdaysMin: "Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Hoje às] LT",
                nextDay: "[Amanhã às] LT",
                nextWeek: "dddd [às] LT",
                lastDay: "[Ontem às] LT",
                lastWeek: function() {
                    return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "há %s",
                s: "segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um mês",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            ordinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("pt-br", {
            months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
            weekdaysMin: "Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
            },
            calendar: {
                sameDay: "[Hoje às] LT",
                nextDay: "[Amanhã às] LT",
                nextWeek: "dddd [às] LT",
                lastDay: "[Ontem às] LT",
                lastWeek: function() {
                    return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "%s atrás",
                s: "poucos segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um mês",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            ordinalParse: /\d{1,2}º/,
            ordinal: "%dº"
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";

        function e(t, e, n) {
            var i = {
                    mm: "minute",
                    hh: "ore",
                    dd: "zile",
                    MM: "luni",
                    yy: "ani"
                },
                o = " ";
            return (t % 100 >= 20 || t >= 100 && t % 100 === 0) && (o = " de "), t + o + i[n]
        }
        var n = t.defineLocale("ro", {
            months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
            monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
            weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
            weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[azi la] LT",
                nextDay: "[mâine la] LT",
                nextWeek: "dddd [la] LT",
                lastDay: "[ieri la] LT",
                lastWeek: "[fosta] dddd [la] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "peste %s",
                past: "%s în urmă",
                s: "câteva secunde",
                m: "un minut",
                mm: e,
                h: "o oră",
                hh: e,
                d: "o zi",
                dd: e,
                M: "o lună",
                MM: e,
                y: "un an",
                yy: e
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
        return n
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";

        function e(t, e) {
            var n = t.split("_");
            return e % 10 === 1 && e % 100 !== 11 ? n[0] : e % 10 >= 2 && 4 >= e % 10 && (10 > e % 100 || e % 100 >= 20) ? n[1] : n[2]
        }

        function n(t, n, i) {
            var o = {
                mm: n ? "минута_минуты_минут" : "минуту_минуты_минут",
                hh: "час_часа_часов",
                dd: "день_дня_дней",
                MM: "месяц_месяца_месяцев",
                yy: "год_года_лет"
            };
            return "m" === i ? n ? "минута" : "минуту" : t + " " + e(o[i], +t)
        }
        var i = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i],
            o = t.defineLocale("ru", {
                months: {
                    format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
                    standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
                },
                monthsShort: {
                    format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
                    standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
                },
                weekdays: {
                    standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
                    format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
                    isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
                },
                weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
                weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
                monthsParse: i,
                longMonthsParse: i,
                shortMonthsParse: i,
                monthsRegex: /^(сентябр[яь]|октябр[яь]|декабр[яь]|феврал[яь]|январ[яь]|апрел[яь]|августа?|ноябр[яь]|сент\.|февр\.|нояб\.|июнь|янв.|июль|дек.|авг.|апр.|марта|мар[.т]|окт.|июн[яь]|июл[яь]|ма[яй])/i,
                monthsShortRegex: /^(сентябр[яь]|октябр[яь]|декабр[яь]|феврал[яь]|январ[яь]|апрел[яь]|августа?|ноябр[яь]|сент\.|февр\.|нояб\.|июнь|янв.|июль|дек.|авг.|апр.|марта|мар[.т]|окт.|июн[яь]|июл[яь]|ма[яй])/i,
                monthsStrictRegex: /^(сентябр[яь]|октябр[яь]|декабр[яь]|феврал[яь]|январ[яь]|апрел[яь]|августа?|ноябр[яь]|марта?|июн[яь]|июл[яь]|ма[яй])/i,
                monthsShortStrictRegex: /^(нояб\.|февр\.|сент\.|июль|янв\.|июн[яь]|мар[.т]|авг\.|апр\.|окт\.|дек\.|ма[яй])/i,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY г.",
                    LLL: "D MMMM YYYY г., HH:mm",
                    LLLL: "dddd, D MMMM YYYY г., HH:mm"
                },
                calendar: {
                    sameDay: "[Сегодня в] LT",
                    nextDay: "[Завтра в] LT",
                    lastDay: "[Вчера в] LT",
                    nextWeek: function(t) {
                        if (t.week() === this.week()) return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
                        switch (this.day()) {
                            case 0:
                                return "[В следующее] dddd [в] LT";
                            case 1:
                            case 2:
                            case 4:
                                return "[В следующий] dddd [в] LT";
                            case 3:
                            case 5:
                            case 6:
                                return "[В следующую] dddd [в] LT"
                        }
                    },
                    lastWeek: function(t) {
                        if (t.week() === this.week()) return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
                        switch (this.day()) {
                            case 0:
                                return "[В прошлое] dddd [в] LT";
                            case 1:
                            case 2:
                            case 4:
                                return "[В прошлый] dddd [в] LT";
                            case 3:
                            case 5:
                            case 6:
                                return "[В прошлую] dddd [в] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "через %s",
                    past: "%s назад",
                    s: "несколько секунд",
                    m: n,
                    mm: n,
                    h: "час",
                    hh: n,
                    d: "день",
                    dd: n,
                    M: "месяц",
                    MM: n,
                    y: "год",
                    yy: n
                },
                meridiemParse: /ночи|утра|дня|вечера/i,
                isPM: function(t) {
                    return /^(дня|вечера)$/.test(t)
                },
                meridiem: function(t, e, n) {
                    return 4 > t ? "ночи" : 12 > t ? "утра" : 17 > t ? "дня" : "вечера"
                },
                ordinalParse: /\d{1,2}-(й|го|я)/,
                ordinal: function(t, e) {
                    switch (e) {
                        case "M":
                        case "d":
                        case "DDD":
                            return t + "-й";
                        case "D":
                            return t + "-го";
                        case "w":
                        case "W":
                            return t + "-я";
                        default:
                            return t
                    }
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            });
        return o
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("se", {
            months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),
            monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),
            weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),
            weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
            weekdaysMin: "s_v_m_g_d_b_L".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "MMMM D. [b.] YYYY",
                LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
                LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
            },
            calendar: {
                sameDay: "[otne ti] LT",
                nextDay: "[ihttin ti] LT",
                nextWeek: "dddd [ti] LT",
                lastDay: "[ikte ti] LT",
                lastWeek: "[ovddit] dddd [ti] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s geažes",
                past: "maŋit %s",
                s: "moadde sekunddat",
                m: "okta minuhta",
                mm: "%d minuhtat",
                h: "okta diimmu",
                hh: "%d diimmut",
                d: "okta beaivi",
                dd: "%d beaivvit",
                M: "okta mánnu",
                MM: "%d mánut",
                y: "okta jahki",
                yy: "%d jagit"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("si", {
            months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),
            monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
            weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),
            weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
            weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "a h:mm",
                LTS: "a h:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY MMMM D",
                LLL: "YYYY MMMM D, a h:mm",
                LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss"
            },
            calendar: {
                sameDay: "[අද] LT[ට]",
                nextDay: "[හෙට] LT[ට]",
                nextWeek: "dddd LT[ට]",
                lastDay: "[ඊයේ] LT[ට]",
                lastWeek: "[පසුගිය] dddd LT[ට]",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sකින්",
                past: "%sකට පෙර",
                s: "තත්පර කිහිපය",
                m: "මිනිත්තුව",
                mm: "මිනිත්තු %d",
                h: "පැය",
                hh: "පැය %d",
                d: "දිනය",
                dd: "දින %d",
                M: "මාසය",
                MM: "මාස %d",
                y: "වසර",
                yy: "වසර %d"
            },
            ordinalParse: /\d{1,2} වැනි/,
            ordinal: function(t) {
                return t + " වැනි"
            },
            meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
            isPM: function(t) {
                return "ප.ව." === t || "පස් වරු" === t
            },
            meridiem: function(t, e, n) {
                return t > 11 ? n ? "ප.ව." : "පස් වරු" : n ? "පෙ.ව." : "පෙර වරු"
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";

        function e(t) {
            return t > 1 && 5 > t
        }

        function n(t, n, i, o) {
            var s = t + " ";
            switch (i) {
                case "s":
                    return n || o ? "pár sekúnd" : "pár sekundami";
                case "m":
                    return n ? "minúta" : o ? "minútu" : "minútou";
                case "mm":
                    return n || o ? s + (e(t) ? "minúty" : "minút") : s + "minútami";
                case "h":
                    return n ? "hodina" : o ? "hodinu" : "hodinou";
                case "hh":
                    return n || o ? s + (e(t) ? "hodiny" : "hodín") : s + "hodinami";
                case "d":
                    return n || o ? "deň" : "dňom";
                case "dd":
                    return n || o ? s + (e(t) ? "dni" : "dní") : s + "dňami";
                case "M":
                    return n || o ? "mesiac" : "mesiacom";
                case "MM":
                    return n || o ? s + (e(t) ? "mesiace" : "mesiacov") : s + "mesiacmi";
                case "y":
                    return n || o ? "rok" : "rokom";
                case "yy":
                    return n || o ? s + (e(t) ? "roky" : "rokov") : s + "rokmi"
            }
        }
        var i = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
            o = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_"),
            s = t.defineLocale("sk", {
                months: i,
                monthsShort: o,
                weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
                weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
                weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[dnes o] LT",
                    nextDay: "[zajtra o] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[v nedeľu o] LT";
                            case 1:
                            case 2:
                                return "[v] dddd [o] LT";
                            case 3:
                                return "[v stredu o] LT";
                            case 4:
                                return "[vo štvrtok o] LT";
                            case 5:
                                return "[v piatok o] LT";
                            case 6:
                                return "[v sobotu o] LT"
                        }
                    },
                    lastDay: "[včera o] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[minulú nedeľu o] LT";
                            case 1:
                            case 2:
                                return "[minulý] dddd [o] LT";
                            case 3:
                                return "[minulú stredu o] LT";
                            case 4:
                            case 5:
                                return "[minulý] dddd [o] LT";
                            case 6:
                                return "[minulú sobotu o] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "pred %s",
                    s: n,
                    m: n,
                    mm: n,
                    h: n,
                    hh: n,
                    d: n,
                    dd: n,
                    M: n,
                    MM: n,
                    y: n,
                    yy: n
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
        return s
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";

        function e(t, e, n, i) {
            var o = t + " ";
            switch (n) {
                case "s":
                    return e || i ? "nekaj sekund" : "nekaj sekundami";
                case "m":
                    return e ? "ena minuta" : "eno minuto";
                case "mm":
                    return o += 1 === t ? e ? "minuta" : "minuto" : 2 === t ? e || i ? "minuti" : "minutama" : 5 > t ? e || i ? "minute" : "minutami" : e || i ? "minut" : "minutami";
                case "h":
                    return e ? "ena ura" : "eno uro";
                case "hh":
                    return o += 1 === t ? e ? "ura" : "uro" : 2 === t ? e || i ? "uri" : "urama" : 5 > t ? e || i ? "ure" : "urami" : e || i ? "ur" : "urami";
                case "d":
                    return e || i ? "en dan" : "enim dnem";
                case "dd":
                    return o += 1 === t ? e || i ? "dan" : "dnem" : 2 === t ? e || i ? "dni" : "dnevoma" : e || i ? "dni" : "dnevi";
                case "M":
                    return e || i ? "en mesec" : "enim mesecem";
                case "MM":
                    return o += 1 === t ? e || i ? "mesec" : "mesecem" : 2 === t ? e || i ? "meseca" : "mesecema" : 5 > t ? e || i ? "mesece" : "meseci" : e || i ? "mesecev" : "meseci";
                case "y":
                    return e || i ? "eno leto" : "enim letom";
                case "yy":
                    return o += 1 === t ? e || i ? "leto" : "letom" : 2 === t ? e || i ? "leti" : "letoma" : 5 > t ? e || i ? "leta" : "leti" : e || i ? "let" : "leti"
            }
        }
        var n = t.defineLocale("sl", {
            months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
            weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
            weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD. MM. YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danes ob] LT",
                nextDay: "[jutri ob] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[v] [nedeljo] [ob] LT";
                        case 3:
                            return "[v] [sredo] [ob] LT";
                        case 6:
                            return "[v] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[v] dddd [ob] LT"
                    }
                },
                lastDay: "[včeraj ob] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[prejšnjo] [nedeljo] [ob] LT";
                        case 3:
                            return "[prejšnjo] [sredo] [ob] LT";
                        case 6:
                            return "[prejšnjo] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prejšnji] dddd [ob] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "čez %s",
                past: "pred %s",
                s: e,
                m: e,
                mm: e,
                h: e,
                hh: e,
                d: e,
                dd: e,
                M: e,
                MM: e,
                y: e,
                yy: e
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        });
        return n
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("sq", {
            months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
            monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
            weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
            weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
            weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
            weekdaysParseExact: !0,
            meridiemParse: /PD|MD/,
            isPM: function(t) {
                return "M" === t.charAt(0)
            },
            meridiem: function(t, e, n) {
                return 12 > t ? "PD" : "MD"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Sot në] LT",
                nextDay: "[Nesër në] LT",
                nextWeek: "dddd [në] LT",
                lastDay: "[Dje në] LT",
                lastWeek: "dddd [e kaluar në] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "në %s",
                past: "%s më parë",
                s: "disa sekonda",
                m: "një minutë",
                mm: "%d minuta",
                h: "një orë",
                hh: "%d orë",
                d: "një ditë",
                dd: "%d ditë",
                M: "një muaj",
                MM: "%d muaj",
                y: "një vit",
                yy: "%d vite"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = {
                words: {
                    m: ["jedan minut", "jedne minute"],
                    mm: ["minut", "minute", "minuta"],
                    h: ["jedan sat", "jednog sata"],
                    hh: ["sat", "sata", "sati"],
                    dd: ["dan", "dana", "dana"],
                    MM: ["mesec", "meseca", "meseci"],
                    yy: ["godina", "godine", "godina"]
                },
                correctGrammaticalCase: function(t, e) {
                    return 1 === t ? e[0] : t >= 2 && 4 >= t ? e[1] : e[2]
                },
                translate: function(t, n, i) {
                    var o = e.words[i];
                    return 1 === i.length ? n ? o[0] : o[1] : t + " " + e.correctGrammaticalCase(t, o)
                }
            },
            n = t.defineLocale("sr", {
                months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
                monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
                weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
                weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD. MM. YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danas u] LT",
                    nextDay: "[sutra u] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[u] [nedelju] [u] LT";
                            case 3:
                                return "[u] [sredu] [u] LT";
                            case 6:
                                return "[u] [subotu] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[u] dddd [u] LT"
                        }
                    },
                    lastDay: "[juče u] LT",
                    lastWeek: function() {
                        var t = ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"];
                        return t[this.day()]
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "pre %s",
                    s: "nekoliko sekundi",
                    m: e.translate,
                    mm: e.translate,
                    h: e.translate,
                    hh: e.translate,
                    d: "dan",
                    dd: e.translate,
                    M: "mesec",
                    MM: e.translate,
                    y: "godinu",
                    yy: e.translate
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            });
        return n
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = {
                words: {
                    m: ["један минут", "једне минуте"],
                    mm: ["минут", "минуте", "минута"],
                    h: ["један сат", "једног сата"],
                    hh: ["сат", "сата", "сати"],
                    dd: ["дан", "дана", "дана"],
                    MM: ["месец", "месеца", "месеци"],
                    yy: ["година", "године", "година"]
                },
                correctGrammaticalCase: function(t, e) {
                    return 1 === t ? e[0] : t >= 2 && 4 >= t ? e[1] : e[2]
                },
                translate: function(t, n, i) {
                    var o = e.words[i];
                    return 1 === i.length ? n ? o[0] : o[1] : t + " " + e.correctGrammaticalCase(t, o)
                }
            },
            n = t.defineLocale("sr-cyrl", {
                months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),
                monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
                monthsParseExact: !0,
                weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
                weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
                weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD. MM. YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[данас у] LT",
                    nextDay: "[сутра у] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[у] [недељу] [у] LT";
                            case 3:
                                return "[у] [среду] [у] LT";
                            case 6:
                                return "[у] [суботу] [у] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[у] dddd [у] LT"
                        }
                    },
                    lastDay: "[јуче у] LT",
                    lastWeek: function() {
                        var t = ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"];
                        return t[this.day()]
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "за %s",
                    past: "пре %s",
                    s: "неколико секунди",
                    m: e.translate,
                    mm: e.translate,
                    h: e.translate,
                    hh: e.translate,
                    d: "дан",
                    dd: e.translate,
                    M: "месец",
                    MM: e.translate,
                    y: "годину",
                    yy: e.translate
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            });
        return n
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("ss", {
            months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
            monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
            weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
            weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
            weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Namuhla nga] LT",
                nextDay: "[Kusasa nga] LT",
                nextWeek: "dddd [nga] LT",
                lastDay: "[Itolo nga] LT",
                lastWeek: "dddd [leliphelile] [nga] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "nga %s",
                past: "wenteka nga %s",
                s: "emizuzwana lomcane",
                m: "umzuzu",
                mm: "%d emizuzu",
                h: "lihora",
                hh: "%d emahora",
                d: "lilanga",
                dd: "%d emalanga",
                M: "inyanga",
                MM: "%d tinyanga",
                y: "umnyaka",
                yy: "%d iminyaka"
            },
            meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
            meridiem: function(t, e, n) {
                return 11 > t ? "ekuseni" : 15 > t ? "emini" : 19 > t ? "entsambama" : "ebusuku"
            },
            meridiemHour: function(t, e) {
                return 12 === t && (t = 0), "ekuseni" === e ? t : "emini" === e ? t >= 11 ? t : t + 12 : "entsambama" === e || "ebusuku" === e ? 0 === t ? 0 : t + 12 : void 0
            },
            ordinalParse: /\d{1,2}/,
            ordinal: "%d",
            week: {
                dow: 1,
                doy: 4
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("sv", {
            months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
            weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
            weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [kl.] HH:mm",
                LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Idag] LT",
                nextDay: "[Imorgon] LT",
                lastDay: "[Igår] LT",
                nextWeek: "[På] dddd LT",
                lastWeek: "[I] dddd[s] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "för %s sedan",
                s: "några sekunder",
                m: "en minut",
                mm: "%d minuter",
                h: "en timme",
                hh: "%d timmar",
                d: "en dag",
                dd: "%d dagar",
                M: "en månad",
                MM: "%d månader",
                y: "ett år",
                yy: "%d år"
            },
            ordinalParse: /\d{1,2}(e|a)/,
            ordinal: function(t) {
                var e = t % 10,
                    n = 1 === ~~(t % 100 / 10) ? "e" : 1 === e ? "a" : 2 === e ? "a" : "e";
                return t + n
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("sw", {
            months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
            weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
            weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[leo saa] LT",
                nextDay: "[kesho saa] LT",
                nextWeek: "[wiki ijayo] dddd [saat] LT",
                lastDay: "[jana] LT",
                lastWeek: "[wiki iliyopita] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s baadaye",
                past: "tokea %s",
                s: "hivi punde",
                m: "dakika moja",
                mm: "dakika %d",
                h: "saa limoja",
                hh: "masaa %d",
                d: "siku moja",
                dd: "masiku %d",
                M: "mwezi mmoja",
                MM: "miezi %d",
                y: "mwaka mmoja",
                yy: "miaka %d"
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = {
                1: "௧",
                2: "௨",
                3: "௩",
                4: "௪",
                5: "௫",
                6: "௬",
                7: "௭",
                8: "௮",
                9: "௯",
                0: "௦"
            },
            n = {
                "௧": "1",
                "௨": "2",
                "௩": "3",
                "௪": "4",
                "௫": "5",
                "௬": "6",
                "௭": "7",
                "௮": "8",
                "௯": "9",
                "௦": "0"
            },
            i = t.defineLocale("ta", {
                months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
                monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
                weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
                weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
                weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, HH:mm",
                    LLLL: "dddd, D MMMM YYYY, HH:mm"
                },
                calendar: {
                    sameDay: "[இன்று] LT",
                    nextDay: "[நாளை] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[நேற்று] LT",
                    lastWeek: "[கடந்த வாரம்] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s இல்",
                    past: "%s முன்",
                    s: "ஒரு சில விநாடிகள்",
                    m: "ஒரு நிமிடம்",
                    mm: "%d நிமிடங்கள்",
                    h: "ஒரு மணி நேரம்",
                    hh: "%d மணி நேரம்",
                    d: "ஒரு நாள்",
                    dd: "%d நாட்கள்",
                    M: "ஒரு மாதம்",
                    MM: "%d மாதங்கள்",
                    y: "ஒரு வருடம்",
                    yy: "%d ஆண்டுகள்"
                },
                ordinalParse: /\d{1,2}வது/,
                ordinal: function(t) {
                    return t + "வது"
                },
                preparse: function(t) {
                    return t.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function(t) {
                        return n[t]
                    })
                },
                postformat: function(t) {
                    return t.replace(/\d/g, function(t) {
                        return e[t]
                    })
                },
                meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
                meridiem: function(t, e, n) {
                    return 2 > t ? " யாமம்" : 6 > t ? " வைகறை" : 10 > t ? " காலை" : 14 > t ? " நண்பகல்" : 18 > t ? " எற்பாடு" : 22 > t ? " மாலை" : " யாமம்"
                },
                meridiemHour: function(t, e) {
                    return 12 === t && (t = 0), "யாமம்" === e ? 2 > t ? t : t + 12 : "வைகறை" === e || "காலை" === e ? t : "நண்பகல்" === e && t >= 10 ? t : t + 12
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            });
        return i
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("te", {
            months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),
            monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),
            monthsParseExact: !0,
            weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),
            weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
            weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[నేడు] LT",
                nextDay: "[రేపు] LT",
                nextWeek: "dddd, LT",
                lastDay: "[నిన్న] LT",
                lastWeek: "[గత] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s లో",
                past: "%s క్రితం",
                s: "కొన్ని క్షణాలు",
                m: "ఒక నిమిషం",
                mm: "%d నిమిషాలు",
                h: "ఒక గంట",
                hh: "%d గంటలు",
                d: "ఒక రోజు",
                dd: "%d రోజులు",
                M: "ఒక నెల",
                MM: "%d నెలలు",
                y: "ఒక సంవత్సరం",
                yy: "%d సంవత్సరాలు"
            },
            ordinalParse: /\d{1,2}వ/,
            ordinal: "%dవ",
            meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
            meridiemHour: function(t, e) {
                return 12 === t && (t = 0), "రాత్రి" === e ? 4 > t ? t : t + 12 : "ఉదయం" === e ? t : "మధ్యాహ్నం" === e ? t >= 10 ? t : t + 12 : "సాయంత్రం" === e ? t + 12 : void 0
            },
            meridiem: function(t, e, n) {
                return 4 > t ? "రాత్రి" : 10 > t ? "ఉదయం" : 17 > t ? "మధ్యాహ్నం" : 20 > t ? "సాయంత్రం" : "రాత్రి"
            },
            week: {
                dow: 0,
                doy: 6
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("th", {
            months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
            monthsShort: "มกรา_กุมภา_มีนา_เมษา_พฤษภา_มิถุนา_กรกฎา_สิงหา_กันยา_ตุลา_พฤศจิกา_ธันวา".split("_"),
            monthsParseExact: !0,
            weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
            weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
            weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H นาฬิกา m นาที",
                LTS: "H นาฬิกา m นาที s วินาที",
                L: "YYYY/MM/DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY เวลา H นาฬิกา m นาที",
                LLLL: "วันddddที่ D MMMM YYYY เวลา H นาฬิกา m นาที"
            },
            meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
            isPM: function(t) {
                return "หลังเที่ยง" === t
            },
            meridiem: function(t, e, n) {
                return 12 > t ? "ก่อนเที่ยง" : "หลังเที่ยง"
            },
            calendar: {
                sameDay: "[วันนี้ เวลา] LT",
                nextDay: "[พรุ่งนี้ เวลา] LT",
                nextWeek: "dddd[หน้า เวลา] LT",
                lastDay: "[เมื่อวานนี้ เวลา] LT",
                lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "อีก %s",
                past: "%sที่แล้ว",
                s: "ไม่กี่วินาที",
                m: "1 นาที",
                mm: "%d นาที",
                h: "1 ชั่วโมง",
                hh: "%d ชั่วโมง",
                d: "1 วัน",
                dd: "%d วัน",
                M: "1 เดือน",
                MM: "%d เดือน",
                y: "1 ปี",
                yy: "%d ปี"
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("tl-ph", {
            months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
            monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
            weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
            weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
            weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "MM/D/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY HH:mm",
                LLLL: "dddd, MMMM DD, YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Ngayon sa] LT",
                nextDay: "[Bukas sa] LT",
                nextWeek: "dddd [sa] LT",
                lastDay: "[Kahapon sa] LT",
                lastWeek: "dddd [huling linggo] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "sa loob ng %s",
                past: "%s ang nakalipas",
                s: "ilang segundo",
                m: "isang minuto",
                mm: "%d minuto",
                h: "isang oras",
                hh: "%d oras",
                d: "isang araw",
                dd: "%d araw",
                M: "isang buwan",
                MM: "%d buwan",
                y: "isang taon",
                yy: "%d taon"
            },
            ordinalParse: /\d{1,2}/,
            ordinal: function(t) {
                return t
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";

        function e(t) {
            var e = t;
            return e = -1 !== t.indexOf("jaj") ? e.slice(0, -3) + "leS" : -1 !== t.indexOf("jar") ? e.slice(0, -3) + "waQ" : -1 !== t.indexOf("DIS") ? e.slice(0, -3) + "nem" : e + " pIq"
        }

        function n(t) {
            var e = t;
            return e = -1 !== t.indexOf("jaj") ? e.slice(0, -3) + "Hu’" : -1 !== t.indexOf("jar") ? e.slice(0, -3) + "wen" : -1 !== t.indexOf("DIS") ? e.slice(0, -3) + "ben" : e + " ret"
        }

        function i(t, e, n, i) {
            var s = o(t);
            switch (n) {
                case "mm":
                    return s + " tup";
                case "hh":
                    return s + " rep";
                case "dd":
                    return s + " jaj";
                case "MM":
                    return s + " jar";
                case "yy":
                    return s + " DIS"
            }
        }

        function o(t) {
            var e = Math.floor(t % 1e3 / 100),
                n = Math.floor(t % 100 / 10),
                i = t % 10,
                o = "";
            return e > 0 && (o += s[e] + "vatlh"), n > 0 && (o += ("" !== o ? " " : "") + s[n] + "maH"), i > 0 && (o += ("" !== o ? " " : "") + s[i]), "" === o ? "pagh" : o
        }
        var s = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_"),
            r = t.defineLocale("tlh", {
                months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
                monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
                monthsParseExact: !0,
                weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
                weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
                weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[DaHjaj] LT",
                    nextDay: "[wa’leS] LT",
                    nextWeek: "LLL",
                    lastDay: "[wa’Hu’] LT",
                    lastWeek: "LLL",
                    sameElse: "L"
                },
                relativeTime: {
                    future: e,
                    past: n,
                    s: "puS lup",
                    m: "wa’ tup",
                    mm: i,
                    h: "wa’ rep",
                    hh: i,
                    d: "wa’ jaj",
                    dd: i,
                    M: "wa’ jar",
                    MM: i,
                    y: "wa’ DIS",
                    yy: i
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
        return r
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = {
                1: "'inci",
                5: "'inci",
                8: "'inci",
                70: "'inci",
                80: "'inci",
                2: "'nci",
                7: "'nci",
                20: "'nci",
                50: "'nci",
                3: "'üncü",
                4: "'üncü",
                100: "'üncü",
                6: "'ncı",
                9: "'uncu",
                10: "'uncu",
                30: "'uncu",
                60: "'ıncı",
                90: "'ıncı"
            },
            n = t.defineLocale("tr", {
                months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
                monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
                weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
                weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
                weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[bugün saat] LT",
                    nextDay: "[yarın saat] LT",
                    nextWeek: "[haftaya] dddd [saat] LT",
                    lastDay: "[dün] LT",
                    lastWeek: "[geçen hafta] dddd [saat] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s sonra",
                    past: "%s önce",
                    s: "birkaç saniye",
                    m: "bir dakika",
                    mm: "%d dakika",
                    h: "bir saat",
                    hh: "%d saat",
                    d: "bir gün",
                    dd: "%d gün",
                    M: "bir ay",
                    MM: "%d ay",
                    y: "bir yıl",
                    yy: "%d yıl"
                },
                ordinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
                ordinal: function(t) {
                    if (0 === t) return t + "'ıncı";
                    var n = t % 10,
                        i = t % 100 - n,
                        o = t >= 100 ? 100 : null;
                    return t + (e[n] || e[i] || e[o])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            });
        return n
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";

        function e(t, e, n, i) {
            var o = {
                s: ["viensas secunds", "'iensas secunds"],
                m: ["'n míut", "'iens míut"],
                mm: [t + " míuts", "" + t + " míuts"],
                h: ["'n þora", "'iensa þora"],
                hh: [t + " þoras", "" + t + " þoras"],
                d: ["'n ziua", "'iensa ziua"],
                dd: [t + " ziuas", "" + t + " ziuas"],
                M: ["'n mes", "'iens mes"],
                MM: [t + " mesen", "" + t + " mesen"],
                y: ["'n ar", "'iens ar"],
                yy: [t + " ars", "" + t + " ars"]
            };
            return i ? o[n][0] : e ? o[n][0] : o[n][1]
        }
        var n = t.defineLocale("tzl", {
            months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),
            monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
            weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
            weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
            weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM [dallas] YYYY",
                LLL: "D. MMMM [dallas] YYYY HH.mm",
                LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
            },
            meridiemParse: /d\'o|d\'a/i,
            isPM: function(t) {
                return "d'o" === t.toLowerCase()
            },
            meridiem: function(t, e, n) {
                return t > 11 ? n ? "d'o" : "D'O" : n ? "d'a" : "D'A"
            },
            calendar: {
                sameDay: "[oxhi à] LT",
                nextDay: "[demà à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[ieiri à] LT",
                lastWeek: "[sür el] dddd [lasteu à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "osprei %s",
                past: "ja%s",
                s: e,
                m: e,
                mm: e,
                h: e,
                hh: e,
                d: e,
                dd: e,
                M: e,
                MM: e,
                y: e,
                yy: e
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
        return n
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("tzm", {
            months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
            monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
            weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
                nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
                nextWeek: "dddd [ⴴ] LT",
                lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
                lastWeek: "dddd [ⴴ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
                past: "ⵢⴰⵏ %s",
                s: "ⵉⵎⵉⴽ",
                m: "ⵎⵉⵏⵓⴺ",
                mm: "%d ⵎⵉⵏⵓⴺ",
                h: "ⵙⴰⵄⴰ",
                hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
                d: "ⴰⵙⵙ",
                dd: "%d oⵙⵙⴰⵏ",
                M: "ⴰⵢoⵓⵔ",
                MM: "%d ⵉⵢⵢⵉⵔⵏ",
                y: "ⴰⵙⴳⴰⵙ",
                yy: "%d ⵉⵙⴳⴰⵙⵏ"
            },
            week: {
                dow: 6,
                doy: 12
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("tzm-latn", {
            months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
            monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
            weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[asdkh g] LT",
                nextDay: "[aska g] LT",
                nextWeek: "dddd [g] LT",
                lastDay: "[assant g] LT",
                lastWeek: "dddd [g] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dadkh s yan %s",
                past: "yan %s",
                s: "imik",
                m: "minuḍ",
                mm: "%d minuḍ",
                h: "saɛa",
                hh: "%d tassaɛin",
                d: "ass",
                dd: "%d ossan",
                M: "ayowr",
                MM: "%d iyyirn",
                y: "asgas",
                yy: "%d isgasn"
            },
            week: {
                dow: 6,
                doy: 12
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";

        function e(t, e) {
            var n = t.split("_");
            return e % 10 === 1 && e % 100 !== 11 ? n[0] : e % 10 >= 2 && 4 >= e % 10 && (10 > e % 100 || e % 100 >= 20) ? n[1] : n[2]
        }

        function n(t, n, i) {
            var o = {
                mm: n ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
                hh: n ? "година_години_годин" : "годину_години_годин",
                dd: "день_дні_днів",
                MM: "місяць_місяці_місяців",
                yy: "рік_роки_років"
            };
            return "m" === i ? n ? "хвилина" : "хвилину" : "h" === i ? n ? "година" : "годину" : t + " " + e(o[i], +t)
        }

        function i(t, e) {
            var n = {
                    nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
                    accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
                    genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
                },
                i = /(\[[ВвУу]\]) ?dddd/.test(e) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(e) ? "genitive" : "nominative";
            return n[i][t.day()]
        }

        function o(t) {
            return function() {
                return t + "о" + (11 === this.hours() ? "б" : "") + "] LT"
            }
        }
        var s = t.defineLocale("uk", {
            months: {
                format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
                standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
            },
            monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
            weekdays: i,
            weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY р.",
                LLL: "D MMMM YYYY р., HH:mm",
                LLLL: "dddd, D MMMM YYYY р., HH:mm"
            },
            calendar: {
                sameDay: o("[Сьогодні "),
                nextDay: o("[Завтра "),
                lastDay: o("[Вчора "),
                nextWeek: o("[У] dddd ["),
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return o("[Минулої] dddd [").call(this);
                        case 1:
                        case 2:
                        case 4:
                            return o("[Минулого] dddd [").call(this)
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "за %s",
                past: "%s тому",
                s: "декілька секунд",
                m: n,
                mm: n,
                h: "годину",
                hh: n,
                d: "день",
                dd: n,
                M: "місяць",
                MM: n,
                y: "рік",
                yy: n
            },
            meridiemParse: /ночі|ранку|дня|вечора/,
            isPM: function(t) {
                return /^(дня|вечора)$/.test(t)
            },
            meridiem: function(t, e, n) {
                return 4 > t ? "ночі" : 12 > t ? "ранку" : 17 > t ? "дня" : "вечора"
            },
            ordinalParse: /\d{1,2}-(й|го)/,
            ordinal: function(t, e) {
                switch (e) {
                    case "M":
                    case "d":
                    case "DDD":
                    case "w":
                    case "W":
                        return t + "-й";
                    case "D":
                        return t + "-го";
                    default:
                        return t
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
        return s
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("uz", {
            months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
            monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
            weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
            weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
            weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "D MMMM YYYY, dddd HH:mm"
            },
            calendar: {
                sameDay: "[Бугун соат] LT [да]",
                nextDay: "[Эртага] LT [да]",
                nextWeek: "dddd [куни соат] LT [да]",
                lastDay: "[Кеча соат] LT [да]",
                lastWeek: "[Утган] dddd [куни соат] LT [да]",
                sameElse: "L"
            },
            relativeTime: {
                future: "Якин %s ичида",
                past: "Бир неча %s олдин",
                s: "фурсат",
                m: "бир дакика",
                mm: "%d дакика",
                h: "бир соат",
                hh: "%d соат",
                d: "бир кун",
                dd: "%d кун",
                M: "бир ой",
                MM: "%d ой",
                y: "бир йил",
                yy: "%d йил"
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("vi", {
            months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
            monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
            monthsParseExact: !0,
            weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
            weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysParseExact: !0,
            meridiemParse: /sa|ch/i,
            isPM: function(t) {
                return /^ch$/i.test(t)
            },
            meridiem: function(t, e, n) {
                return 12 > t ? n ? "sa" : "SA" : n ? "ch" : "CH"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM [năm] YYYY",
                LLL: "D MMMM [năm] YYYY HH:mm",
                LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
                l: "DD/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd, D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Hôm nay lúc] LT",
                nextDay: "[Ngày mai lúc] LT",
                nextWeek: "dddd [tuần tới lúc] LT",
                lastDay: "[Hôm qua lúc] LT",
                lastWeek: "dddd [tuần rồi lúc] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s tới",
                past: "%s trước",
                s: "vài giây",
                m: "một phút",
                mm: "%d phút",
                h: "một giờ",
                hh: "%d giờ",
                d: "một ngày",
                dd: "%d ngày",
                M: "một tháng",
                MM: "%d tháng",
                y: "một năm",
                yy: "%d năm"
            },
            ordinalParse: /\d{1,2}/,
            ordinal: function(t) {
                return t
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("x-pseudo", {
            months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),
            monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),
            monthsParseExact: !0,
            weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),
            weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
            weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[T~ódá~ý át] LT",
                nextDay: "[T~ómó~rró~w át] LT",
                nextWeek: "dddd [át] LT",
                lastDay: "[Ý~ést~érdá~ý át] LT",
                lastWeek: "[L~ást] dddd [át] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "í~ñ %s",
                past: "%s á~gó",
                s: "á ~féw ~sécó~ñds",
                m: "á ~míñ~úté",
                mm: "%d m~íñú~tés",
                h: "á~ñ hó~úr",
                hh: "%d h~óúrs",
                d: "á ~dáý",
                dd: "%d d~áýs",
                M: "á ~móñ~th",
                MM: "%d m~óñt~hs",
                y: "á ~ýéár",
                yy: "%d ý~éárs"
            },
            ordinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function(t) {
                var e = t % 10,
                    n = 1 === ~~(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
                return t + n
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("zh-cn", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "Ah点mm分",
                LTS: "Ah点m分s秒",
                L: "YYYY-MM-DD",
                LL: "YYYY年MMMD日",
                LLL: "YYYY年MMMD日Ah点mm分",
                LLLL: "YYYY年MMMD日ddddAh点mm分",
                l: "YYYY-MM-DD",
                ll: "YYYY年MMMD日",
                lll: "YYYY年MMMD日Ah点mm分",
                llll: "YYYY年MMMD日ddddAh点mm分"
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function(t, e) {
                return 12 === t && (t = 0), "凌晨" === e || "早上" === e || "上午" === e ? t : "下午" === e || "晚上" === e ? t + 12 : t >= 11 ? t : t + 12
            },
            meridiem: function(t, e, n) {
                var i = 100 * t + e;
                return 600 > i ? "凌晨" : 900 > i ? "早上" : 1130 > i ? "上午" : 1230 > i ? "中午" : 1800 > i ? "下午" : "晚上"
            },
            calendar: {
                sameDay: function() {
                    return 0 === this.minutes() ? "[今天]Ah[点整]" : "[今天]LT"
                },
                nextDay: function() {
                    return 0 === this.minutes() ? "[明天]Ah[点整]" : "[明天]LT"
                },
                lastDay: function() {
                    return 0 === this.minutes() ? "[昨天]Ah[点整]" : "[昨天]LT"
                },
                nextWeek: function() {
                    var e, n;
                    return e = t().startOf("week"), n = this.diff(e, "days") >= 7 ? "[下]" : "[本]", 0 === this.minutes() ? n + "dddAh点整" : n + "dddAh点mm"
                },
                lastWeek: function() {
                    var e, n;
                    return e = t().startOf("week"), n = this.unix() < e.unix() ? "[上]" : "[本]", 0 === this.minutes() ? n + "dddAh点整" : n + "dddAh点mm"
                },
                sameElse: "LL"
            },
            ordinalParse: /\d{1,2}(日|月|周)/,
            ordinal: function(t, e) {
                switch (e) {
                    case "d":
                    case "D":
                    case "DDD":
                        return t + "日";
                    case "M":
                        return t + "月";
                    case "w":
                    case "W":
                        return t + "周";
                    default:
                        return t
                }
            },
            relativeTime: {
                future: "%s内",
                past: "%s前",
                s: "几秒",
                m: "1 分钟",
                mm: "%d 分钟",
                h: "1 小时",
                hh: "%d 小时",
                d: "1 天",
                dd: "%d 天",
                M: "1 个月",
                MM: "%d 个月",
                y: "1 年",
                yy: "%d 年"
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
        return e
    })
}, function(t, e, n) {
    var i, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    };
    ! function(a, l) {
        "object" === r(e) && "undefined" != typeof t ? l(n(30)) : (o = [n(30)], i = l, s = "function" == typeof i ? i.apply(e, o) : i, !(void 0 !== s && (t.exports = s)))
    }(void 0, function(t) {
        "use strict";
        var e = t.defineLocale("zh-tw", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "Ah點mm分",
                LTS: "Ah點m分s秒",
                L: "YYYY年MMMD日",
                LL: "YYYY年MMMD日",
                LLL: "YYYY年MMMD日Ah點mm分",
                LLLL: "YYYY年MMMD日ddddAh點mm分",
                l: "YYYY年MMMD日",
                ll: "YYYY年MMMD日",
                lll: "YYYY年MMMD日Ah點mm分",
                llll: "YYYY年MMMD日ddddAh點mm分"
            },
            meridiemParse: /早上|上午|中午|下午|晚上/,
            meridiemHour: function(t, e) {
                return 12 === t && (t = 0), "早上" === e || "上午" === e ? t : "中午" === e ? t >= 11 ? t : t + 12 : "下午" === e || "晚上" === e ? t + 12 : void 0
            },
            meridiem: function(t, e, n) {
                var i = 100 * t + e;
                return 900 > i ? "早上" : 1130 > i ? "上午" : 1230 > i ? "中午" : 1800 > i ? "下午" : "晚上"
            },
            calendar: {
                sameDay: "[今天]LT",
                nextDay: "[明天]LT",
                nextWeek: "[下]ddddLT",
                lastDay: "[昨天]LT",
                lastWeek: "[上]ddddLT",
                sameElse: "L"
            },
            ordinalParse: /\d{1,2}(日|月|週)/,
            ordinal: function(t, e) {
                switch (e) {
                    case "d":
                    case "D":
                    case "DDD":
                        return t + "日";
                    case "M":
                        return t + "月";
                    case "w":
                    case "W":
                        return t + "週";
                    default:
                        return t
                }
            },
            relativeTime: {
                future: "%s內",
                past: "%s前",
                s: "幾秒",
                m: "1分鐘",
                mm: "%d分鐘",
                h: "1小時",
                hh: "%d小時",
                d: "1天",
                dd: "%d天",
                M: "1個月",
                MM: "%d個月",
                y: "1年",
                yy: "%d年"
            }
        });
        return e
    })
}, function(t, e) {
    "use strict";
    ! function(t, e, n, i) {
        function o(e, n) {
            this.settings = null, this.options = t.extend({}, o.Defaults, n), this.$element = t(e), this.drag = t.extend({}, h), this.state = t.extend({}, p), this.e = t.extend({}, f), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], t.each(o.Plugins, t.proxy(function(t, e) {
                this._plugins[t[0].toLowerCase() + t.slice(1)] = new e(this)
            }, this)), t.each(o.Pipe, t.proxy(function(e, n) {
                this._pipe.push({
                    filter: n.filter,
                    run: t.proxy(n.run, this)
                })
            }, this)), this.setup(), this.initialize()
        }

        function s(t) {
            if (t.touches !== i) return {
                x: t.touches[0].pageX,
                y: t.touches[0].pageY
            };
            if (t.touches === i) {
                if (t.pageX !== i) return {
                    x: t.pageX,
                    y: t.pageY
                };
                if (t.pageX === i) return {
                    x: t.clientX,
                    y: t.clientY
                }
            }
        }

        function r(t) {
            var e, i, o = n.createElement("div"),
                s = t;
            for (e in s)
                if (i = s[e], "undefined" != typeof o.style[i]) return o = null, [i, e];
            return [!1]
        }

        function a() {
            return r(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1];
        }

        function l() {
            return r(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0]
        }

        function d() {
            return r(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0]
        }

        function u() {
            return "ontouchstart" in e || !!navigator.msMaxTouchPoints
        }

        function c() {
            return e.navigator.msPointerEnabled
        }
        var h, p, f;
        h = {
            start: 0,
            startX: 0,
            startY: 0,
            current: 0,
            currentX: 0,
            currentY: 0,
            offsetX: 0,
            offsetY: 0,
            distance: null,
            startTime: 0,
            endTime: 0,
            updatedX: 0,
            targetEl: null
        }, p = {
            isTouch: !1,
            isScrolling: !1,
            isSwiping: !1,
            direction: !1,
            inMotion: !1
        }, f = {
            _onDragStart: null,
            _onDragMove: null,
            _onDragEnd: null,
            _transitionEnd: null,
            _resizer: null,
            _responsiveCall: null,
            _goToLoop: null,
            _checkVisibile: null
        }, o.Defaults = {
            items: 3,
            loop: !1,
            center: !1,
            mouseDrag: !0,
            touchDrag: !0,
            pullDrag: !0,
            freeDrag: !1,
            margin: 0,
            stagePadding: 0,
            merge: !1,
            mergeFit: !0,
            autoWidth: !1,
            startPosition: 0,
            rtl: !1,
            smartSpeed: 250,
            fluidSpeed: !1,
            dragEndSpeed: !1,
            responsive: {},
            responsiveRefreshRate: 200,
            responsiveBaseElement: e,
            responsiveClass: !1,
            fallbackEasing: "swing",
            info: !1,
            nestedItemSelector: !1,
            itemElement: "div",
            stageElement: "div",
            themeClass: "owl-theme",
            baseClass: "owl-carousel",
            itemClass: "owl-item",
            centerClass: "center",
            activeClass: "active"
        }, o.Width = {
            Default: "default",
            Inner: "inner",
            Outer: "outer"
        }, o.Plugins = {}, o.Pipe = [{
            filter: ["width", "items", "settings"],
            run: function(t) {
                t.current = this._items && this._items[this.relative(this._current)]
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                var t = this._clones,
                    e = this.$stage.children(".cloned");
                (e.length !== t.length || !this.settings.loop && t.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = [])
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                var t, e, n = this._clones,
                    i = this._items,
                    o = this.settings.loop ? n.length - Math.max(2 * this.settings.items, 4) : 0;
                for (t = 0, e = Math.abs(o / 2); e > t; t++) o > 0 ? (this.$stage.children().eq(i.length + n.length - 1).remove(), n.pop(), this.$stage.children().eq(0).remove(), n.pop()) : (n.push(n.length / 2), this.$stage.append(i[n[n.length - 1]].clone().addClass("cloned")), n.push(i.length - 1 - (n.length - 1) / 2), this.$stage.prepend(i[n[n.length - 1]].clone().addClass("cloned")))
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                var t, e, n, i = this.settings.rtl ? 1 : -1,
                    o = (this.width() / this.settings.items).toFixed(3),
                    s = 0;
                for (this._coordinates = [], e = 0, n = this._clones.length + this._items.length; n > e; e++) t = this._mergers[this.relative(e)], t = this.settings.mergeFit && Math.min(t, this.settings.items) || t, s += (this.settings.autoWidth ? this._items[this.relative(e)].width() + this.settings.margin : o * t) * i, this._coordinates.push(s)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                var e, n, i = (this.width() / this.settings.items).toFixed(3),
                    o = {
                        width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding,
                        "padding-left": this.settings.stagePadding || "",
                        "padding-right": this.settings.stagePadding || ""
                    };
                if (this.$stage.css(o), o = {
                        width: this.settings.autoWidth ? "auto" : i - this.settings.margin
                    }, o[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && t.grep(this._mergers, function(t) {
                        return t > 1
                    }).length > 0)
                    for (e = 0, n = this._coordinates.length; n > e; e++) o.width = Math.abs(this._coordinates[e]) - Math.abs(this._coordinates[e - 1] || 0) - this.settings.margin, this.$stage.children().eq(e).css(o);
                else this.$stage.children().css(o)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                t.current && this.reset(this.$stage.children().index(t.current))
            }
        }, {
            filter: ["position"],
            run: function() {
                this.animate(this.coordinates(this._current))
            }
        }, {
            filter: ["width", "position", "items", "settings"],
            run: function() {
                var t, e, n, i, o = this.settings.rtl ? 1 : -1,
                    s = 2 * this.settings.stagePadding,
                    r = this.coordinates(this.current()) + s,
                    a = r + this.width() * o,
                    l = [];
                for (n = 0, i = this._coordinates.length; i > n; n++) t = this._coordinates[n - 1] || 0, e = Math.abs(this._coordinates[n]) + s * o, (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && l.push(n);
                this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
            }
        }], o.prototype.initialize = function() {
            if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) {
                var e, n, o;
                if (e = this.$element.find("img"), n = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : i, o = this.$element.children(n).width(), e.length && 0 >= o) return this.preloadAutoWidthImages(e), !1
            }
            this.$element.addClass("owl-loading"), this.$stage = t("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized")
        }, o.prototype.setup = function() {
            var e = this.viewport(),
                n = this.options.responsive,
                i = -1,
                o = null;
            n ? (t.each(n, function(t) {
                e >= t && t > i && (i = Number(t))
            }), o = t.extend({}, this.options, n[i]), delete o.responsive, o.responsiveClass && this.$element.attr("class", function(t, e) {
                return e.replace(/\b owl-responsive-\S+/g, "")
            }).addClass("owl-responsive-" + i)) : o = t.extend({}, this.options), null !== this.settings && this._breakpoint === i || (this.trigger("change", {
                property: {
                    name: "settings",
                    value: o
                }
            }), this._breakpoint = i, this.settings = o, this.invalidate("settings"), this.trigger("changed", {
                property: {
                    name: "settings",
                    value: this.settings
                }
            }))
        }, o.prototype.optionsLogic = function() {
            this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
        }, o.prototype.prepare = function(e) {
            var n = this.trigger("prepare", {
                content: e
            });
            return n.data || (n.data = t("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(e)), this.trigger("prepared", {
                content: n.data
            }), n.data
        }, o.prototype.update = function() {
            for (var e = 0, n = this._pipe.length, i = t.proxy(function(t) {
                    return this[t]
                }, this._invalidated), o = {}; n > e;)(this._invalidated.all || t.grep(this._pipe[e].filter, i).length > 0) && this._pipe[e].run(o), e++;
            this._invalidated = {}
        }, o.prototype.width = function(t) {
            switch (t = t || o.Width.Default) {
                case o.Width.Inner:
                case o.Width.Outer:
                    return this._width;
                default:
                    return this._width - 2 * this.settings.stagePadding + this.settings.margin
            }
        }, o.prototype.refresh = function() {
            if (0 === this._items.length) return !1;
            (new Date).getTime();
            this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = e.orientation, this.watchVisibility(), this.trigger("refreshed")
        }, o.prototype.eventsCall = function() {
            this.e._onDragStart = t.proxy(function(t) {
                this.onDragStart(t)
            }, this), this.e._onDragMove = t.proxy(function(t) {
                this.onDragMove(t)
            }, this), this.e._onDragEnd = t.proxy(function(t) {
                this.onDragEnd(t)
            }, this), this.e._onResize = t.proxy(function(t) {
                this.onResize(t)
            }, this), this.e._transitionEnd = t.proxy(function(t) {
                this.transitionEnd(t)
            }, this), this.e._preventClick = t.proxy(function(t) {
                this.preventClick(t)
            }, this)
        }, o.prototype.onThrottledResize = function() {
            e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
        }, o.prototype.onResize = function() {
            return this._items.length ? this._width === this.$element.width() ? !1 : this.trigger("resize").isDefaultPrevented() ? !1 : (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized")) : !1
        }, o.prototype.eventsRouter = function(t) {
            var e = t.type;
            "mousedown" === e || "touchstart" === e ? this.onDragStart(t) : "mousemove" === e || "touchmove" === e ? this.onDragMove(t) : "mouseup" === e || "touchend" === e ? this.onDragEnd(t) : "touchcancel" === e && this.onDragEnd(t)
        }, o.prototype.internalEvents = function() {
            var n = (u(), c());
            this.settings.mouseDrag ? (this.$stage.on("mousedown", t.proxy(function(t) {
                this.eventsRouter(t)
            }, this)), this.$stage.on("dragstart", function() {
                return !1
            }), this.$stage.get(0).onselectstart = function() {
                return !1
            }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !n && this.$stage.on("touchstart touchcancel", t.proxy(function(t) {
                this.eventsRouter(t)
            }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(e, "resize", t.proxy(this.onThrottledResize, this))
        }, o.prototype.onDragStart = function(i) {
            var o, r, a, l;
            if (o = i.originalEvent || i || e.event, 3 === o.which || this.state.isTouch) return !1;
            if ("mousedown" === o.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, r = s(o).x, a = s(o).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) l = this.getTransformProperty(), this.drag.offsetX = l, this.animate(l), this.state.inMotion = !0;
            else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;
            this.drag.startX = r - this.drag.offsetX, this.drag.startY = a - this.drag.offsetY, this.drag.start = r - this.drag.startX, this.drag.targetEl = o.target || o.srcElement, this.drag.updatedX = this.drag.start, "IMG" !== this.drag.targetEl.tagName && "A" !== this.drag.targetEl.tagName || (this.drag.targetEl.draggable = !1), t(n).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", t.proxy(function(t) {
                this.eventsRouter(t)
            }, this))
        }, o.prototype.onDragMove = function(t) {
            var n, o, r, a, l, d;
            this.state.isTouch && (this.state.isScrolling || (n = t.originalEvent || t || e.event, o = s(n).x, r = s(n).y, this.drag.currentX = o - this.drag.startX, this.drag.currentY = r - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (a = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), l = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, a + d), l + d)), (this.drag.distance > 8 || this.drag.distance < -8) && (n.preventDefault !== i ? n.preventDefault() : n.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
        }, o.prototype.onDragEnd = function(e) {
            var i, o, s;
            if (this.state.isTouch) {
                if ("mouseup" === e.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0) return this.state.inMotion = !1, !1;
                this.drag.endTime = (new Date).getTime(), i = this.drag.endTime - this.drag.startTime, o = Math.abs(this.drag.distance), (o > 3 || i > 300) && this.removeClick(this.drag.targetEl), s = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(s), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(s) || this.transitionEnd(), this.drag.distance = 0, t(n).off(".owl.dragEvents")
            }
        }, o.prototype.removeClick = function(n) {
            this.drag.targetEl = n, t(n).on("click.preventClick", this.e._preventClick), e.setTimeout(function() {
                t(n).off("click.preventClick")
            }, 300)
        }, o.prototype.preventClick = function(e) {
            e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), t(e.target).off("click.preventClick")
        }, o.prototype.getTransformProperty = function() {
            var t, n;
            return t = e.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), t = t.replace(/matrix(3d)?\(|\)/g, "").split(","), n = 16 === t.length, n !== !0 ? t[4] : t[12]
        }, o.prototype.closest = function(e) {
            var n = -1,
                i = 30,
                o = this.width(),
                s = this.coordinates();
            return this.settings.freeDrag || t.each(s, t.proxy(function(t, r) {
                return e > r - i && r + i > e ? n = t : this.op(e, "<", r) && this.op(e, ">", s[t + 1] || r - o) && (n = "left" === this.state.direction ? t + 1 : t), -1 === n
            }, this)), this.settings.loop || (this.op(e, ">", s[this.minimum()]) ? n = e = this.minimum() : this.op(e, "<", s[this.maximum()]) && (n = e = this.maximum())), n
        }, o.prototype.animate = function(e) {
            this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({
                transform: "translate3d(" + e + "px,0px, 0px)",
                transition: this.speed() / 1e3 + "s"
            }) : this.state.isTouch ? this.$stage.css({
                left: e + "px"
            }) : this.$stage.animate({
                left: e
            }, this.speed() / 1e3, this.settings.fallbackEasing, t.proxy(function() {
                this.state.inMotion && this.transitionEnd()
            }, this))
        }, o.prototype.current = function(t) {
            if (t === i) return this._current;
            if (0 === this._items.length) return i;
            if (t = this.normalize(t), this._current !== t) {
                var e = this.trigger("change", {
                    property: {
                        name: "position",
                        value: t
                    }
                });
                e.data !== i && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                    property: {
                        name: "position",
                        value: this._current
                    }
                })
            }
            return this._current
        }, o.prototype.invalidate = function(t) {
            this._invalidated[t] = !0
        }, o.prototype.reset = function(t) {
            t = this.normalize(t), t !== i && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
        }, o.prototype.normalize = function(e, n) {
            var o = n ? this._items.length : this._items.length + this._clones.length;
            return !t.isNumeric(e) || 1 > o ? i : e = this._clones.length ? (e % o + o) % o : Math.max(this.minimum(n), Math.min(this.maximum(n), e))
        }, o.prototype.relative = function(t) {
            return t = this.normalize(t), t -= this._clones.length / 2, this.normalize(t, !0)
        }, o.prototype.maximum = function(t) {
            var e, n, i, o = 0,
                s = this.settings;
            if (t) return this._items.length - 1;
            if (!s.loop && s.center) e = this._items.length - 1;
            else if (s.loop || s.center)
                if (s.loop || s.center) e = this._items.length + s.items;
                else {
                    if (!s.autoWidth && !s.merge) throw "Can not detect maximum absolute position.";
                    for (revert = s.rtl ? 1 : -1, n = this.$stage.width() - this.$element.width();
                        (i = this.coordinates(o)) && !(i * revert >= n);) e = ++o
                } else e = this._items.length - s.items;
            return e
        }, o.prototype.minimum = function(t) {
            return t ? 0 : this._clones.length / 2
        }, o.prototype.items = function(t) {
            return t === i ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
        }, o.prototype.mergers = function(t) {
            return t === i ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
        }, o.prototype.clones = function(e) {
            var n = this._clones.length / 2,
                o = n + this._items.length,
                s = function(t) {
                    return t % 2 === 0 ? o + t / 2 : n - (t + 1) / 2
                };
            return e === i ? t.map(this._clones, function(t, e) {
                return s(e)
            }) : t.map(this._clones, function(t, n) {
                return t === e ? s(n) : null
            })
        }, o.prototype.speed = function(t) {
            return t !== i && (this._speed = t), this._speed
        }, o.prototype.coordinates = function(e) {
            var n = null;
            return e === i ? t.map(this._coordinates, t.proxy(function(t, e) {
                return this.coordinates(e)
            }, this)) : (this.settings.center ? (n = this._coordinates[e], n += (this.width() - n + (this._coordinates[e - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : n = this._coordinates[e - 1] || 0, n)
        }, o.prototype.duration = function(t, e, n) {
            return Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(n || this.settings.smartSpeed)
        }, o.prototype.to = function(n, i) {
            if (this.settings.loop) {
                var o = n - this.relative(this.current()),
                    s = this.current(),
                    r = this.current(),
                    a = this.current() + o,
                    l = 0 > r - a,
                    d = this._clones.length + this._items.length;
                a < this.settings.items && l === !1 ? (s = r + this._items.length, this.reset(s)) : a >= d - this.settings.items && l === !0 && (s = r - this._items.length, this.reset(s)), e.clearTimeout(this.e._goToLoop), this.e._goToLoop = e.setTimeout(t.proxy(function() {
                    this.speed(this.duration(this.current(), s + o, i)), this.current(s + o), this.update()
                }, this), 30)
            } else this.speed(this.duration(this.current(), n, i)), this.current(n), this.update()
        }, o.prototype.next = function(t) {
            t = t || !1, this.to(this.relative(this.current()) + 1, t)
        }, o.prototype.prev = function(t) {
            t = t || !1, this.to(this.relative(this.current()) - 1, t)
        }, o.prototype.transitionEnd = function(t) {
            return t !== i && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0)) ? !1 : (this.state.inMotion = !1, void this.trigger("translated"))
        }, o.prototype.viewport = function() {
            var i;
            if (this.options.responsiveBaseElement !== e) i = t(this.options.responsiveBaseElement).width();
            else if (e.innerWidth) i = e.innerWidth;
            else {
                if (!n.documentElement || !n.documentElement.clientWidth) throw "Can not detect viewport width.";
                i = n.documentElement.clientWidth
            }
            return i
        }, o.prototype.replace = function(e) {
            this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function() {
                return 1 === this.nodeType
            }).each(t.proxy(function(t, e) {
                e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
            }, this)), this.reset(t.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
        }, o.prototype.add = function(t, e) {
            e = e === i ? this._items.length : this.normalize(e, !0), this.trigger("add", {
                content: t,
                position: e
            }), 0 === this._items.length || e === this._items.length ? (this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, 1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", {
                content: t,
                position: e
            })
        }, o.prototype.remove = function(t) {
            t = this.normalize(t, !0), t !== i && (this.trigger("remove", {
                content: this._items[t],
                position: t
            }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
                content: null,
                position: t
            }))
        }, o.prototype.addTriggerableEvents = function() {
            var e = t.proxy(function(e, n) {
                return t.proxy(function(t) {
                    t.relatedTarget !== this && (this.suppress([n]), e.apply(this, [].slice.call(arguments, 1)), this.release([n]))
                }, this)
            }, this);
            t.each({
                next: this.next,
                prev: this.prev,
                to: this.to,
                destroy: this.destroy,
                refresh: this.refresh,
                replace: this.replace,
                add: this.add,
                remove: this.remove
            }, t.proxy(function(t, n) {
                this.$element.on(t + ".owl.carousel", e(n, t + ".owl.carousel"))
            }, this))
        }, o.prototype.watchVisibility = function() {
            function n(t) {
                return t.offsetWidth > 0 && t.offsetHeight > 0
            }

            function i() {
                n(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), e.clearInterval(this.e._checkVisibile))
            }
            n(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), e.clearInterval(this.e._checkVisibile), this.e._checkVisibile = e.setInterval(t.proxy(i, this), 500))
        }, o.prototype.preloadAutoWidthImages = function(e) {
            var n, i, o, s;
            n = 0, i = this, e.each(function(r, a) {
                o = t(a), s = new Image, s.onload = function() {
                    n++, o.attr("src", s.src), o.css("opacity", 1), n >= e.length && (i.state.imagesLoaded = !0, i.initialize())
                }, s.src = o.attr("src") || o.attr("data-src") || o.attr("data-src-retina")
            })
        }, o.prototype.destroy = function() {
            this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && t(e).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
            for (var i in this._plugins) this._plugins[i].destroy();
            (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), t(n).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function() {}, this.$stage.off("dragstart", function() {
                return !1
            })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap()
        }, o.prototype.op = function(t, e, n) {
            var i = this.settings.rtl;
            switch (e) {
                case "<":
                    return i ? t > n : n > t;
                case ">":
                    return i ? n > t : t > n;
                case ">=":
                    return i ? n >= t : t >= n;
                case "<=":
                    return i ? t >= n : n >= t
            }
        }, o.prototype.on = function(t, e, n, i) {
            t.addEventListener ? t.addEventListener(e, n, i) : t.attachEvent && t.attachEvent("on" + e, n)
        }, o.prototype.off = function(t, e, n, i) {
            t.removeEventListener ? t.removeEventListener(e, n, i) : t.detachEvent && t.detachEvent("on" + e, n)
        }, o.prototype.trigger = function(e, n, i) {
            var o = {
                    item: {
                        count: this._items.length,
                        index: this.current()
                    }
                },
                s = t.camelCase(t.grep(["on", e, i], function(t) {
                    return t
                }).join("-").toLowerCase()),
                r = t.Event([e, "owl", i || "carousel"].join(".").toLowerCase(), t.extend({
                    relatedTarget: this
                }, o, n));
            return this._supress[e] || (t.each(this._plugins, function(t, e) {
                e.onTrigger && e.onTrigger(r)
            }), this.$element.trigger(r), this.settings && "function" == typeof this.settings[s] && this.settings[s].apply(this, r)), r
        }, o.prototype.suppress = function(e) {
            t.each(e, t.proxy(function(t, e) {
                this._supress[e] = !0
            }, this))
        }, o.prototype.release = function(e) {
            t.each(e, t.proxy(function(t, e) {
                delete this._supress[e]
            }, this))
        }, o.prototype.browserSupport = function() {
            if (this.support3d = d(), this.support3d) {
                this.transformVendor = l();
                var t = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
                this.transitionEndVendor = t[a()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
            }
            this.state.orientation = e.orientation
        }, t.fn.owlCarousel = function(e) {
            return this.each(function() {
                t(this).data("owlCarousel") || t(this).data("owlCarousel", new o(this, e))
            })
        }, t.fn.owlCarousel.Constructor = o
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, n, i) {
        var o = function s(e) {
            this._core = e, this._loaded = [], this._handlers = {
                "initialized.owl.carousel change.owl.carousel": t.proxy(function(e) {
                    if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type))
                        for (var n = this._core.settings, i = n.center && Math.ceil(n.items / 2) || n.items, o = n.center && -1 * i || 0, s = (e.property && e.property.value || this._core.current()) + o, r = this._core.clones().length, a = t.proxy(function(t, e) {
                                this.load(e)
                            }, this); o++ < i;) this.load(r / 2 + this._core.relative(s)), r && t.each(this._core.clones(this._core.relative(s++)), a)
                }, this)
            }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        o.Defaults = {
            lazyLoad: !1
        }, o.prototype.load = function(n) {
            var i = this._core.$stage.children().eq(n),
                o = i && i.find(".owl-lazy");
            !o || t.inArray(i.get(0), this._loaded) > -1 || (o.each(t.proxy(function(n, i) {
                var o, s = t(i),
                    r = e.devicePixelRatio > 1 && s.attr("data-src-retina") || s.attr("data-src");
                this._core.trigger("load", {
                    element: s,
                    url: r
                }, "lazy"), s.is("img") ? s.one("load.owl.lazy", t.proxy(function() {
                    s.css("opacity", 1), this._core.trigger("loaded", {
                        element: s,
                        url: r
                    }, "lazy")
                }, this)).attr("src", r) : (o = new Image, o.onload = t.proxy(function() {
                    s.css({
                        "background-image": "url(" + r + ")",
                        opacity: "1"
                    }), this._core.trigger("loaded", {
                        element: s,
                        url: r
                    }, "lazy")
                }, this), o.src = r)
            }, this)), this._loaded.push(i.get(0)))
        }, o.prototype.destroy = function() {
            var t, e;
            for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Lazy = o
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, n, i) {
        var o = function s(e) {
            this._core = e, this._handlers = {
                "initialized.owl.carousel": t.proxy(function() {
                    this._core.settings.autoHeight && this.update()
                }, this),
                "changed.owl.carousel": t.proxy(function(t) {
                    this._core.settings.autoHeight && "position" == t.property.name && this.update()
                }, this),
                "loaded.owl.lazy": t.proxy(function(t) {
                    this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
                }, this)
            }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        o.Defaults = {
            autoHeight: !1,
            autoHeightClass: "owl-height"
        }, o.prototype.update = function() {
            this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
        }, o.prototype.destroy = function() {
            var t, e;
            for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = o
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, n, i) {
        var o = function s(e) {
            this._core = e, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = {
                "resize.owl.carousel": t.proxy(function(t) {
                    this._core.settings.video && !this.isInFullScreen() && t.preventDefault()
                }, this),
                "refresh.owl.carousel changed.owl.carousel": t.proxy(function(t) {
                    this._playing && this.stop()
                }, this),
                "prepared.owl.carousel": t.proxy(function(e) {
                    var n = t(e.content).find(".owl-video");
                    n.length && (n.css("display", "none"), this.fetch(n, t(e.content)))
                }, this)
            }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function(t) {
                this.play(t)
            }, this))
        };
        o.Defaults = {
            video: !1,
            videoHeight: !1,
            videoWidth: !1
        }, o.prototype.fetch = function(t, e) {
            var n = t.attr("data-vimeo-id") ? "vimeo" : "youtube",
                i = t.attr("data-vimeo-id") || t.attr("data-youtube-id"),
                o = t.attr("data-width") || this._core.settings.videoWidth,
                s = t.attr("data-height") || this._core.settings.videoHeight,
                r = t.attr("href");
            if (!r) throw new Error("Missing video URL.");
            if (i = r.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), i[3].indexOf("youtu") > -1) n = "youtube";
            else {
                if (!(i[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
                n = "vimeo"
            }
            i = i[6], this._videos[r] = {
                type: n,
                id: i,
                width: o,
                height: s
            }, e.attr("data-video", r), this.thumbnail(t, this._videos[r])
        }, o.prototype.thumbnail = function(e, n) {
            var i, o, s, r = n.width && n.height ? 'style="width:' + n.width + "px;height:" + n.height + 'px;"' : "",
                a = e.find("img"),
                l = "src",
                d = "",
                u = this._core.settings,
                c = function(t) {
                    o = '<div class="owl-video-play-icon"></div>', i = u.lazyLoad ? '<div class="owl-video-tn ' + d + '" ' + l + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(i), e.after(o)
                };
            return e.wrap('<div class="owl-video-wrapper"' + r + "></div>"), this._core.settings.lazyLoad && (l = "data-src", d = "owl-lazy"), a.length ? (c(a.attr(l)), a.remove(), !1) : void("youtube" === n.type ? (s = "http://img.youtube.com/vi/" + n.id + "/hqdefault.jpg", c(s)) : "vimeo" === n.type && t.ajax({
                type: "GET",
                url: "http://vimeo.com/api/v2/video/" + n.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function(t) {
                    s = t[0].thumbnail_large, c(s)
                }
            }))
        }, o.prototype.stop = function() {
            this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null
        }, o.prototype.play = function(e) {
            this._core.trigger("play", null, "video"), this._playing && this.stop();
            var n, i, o = t(e.target || e.srcElement),
                s = o.closest("." + this._core.settings.itemClass),
                r = this._videos[s.attr("data-video")],
                a = r.width || "100%",
                l = r.height || this._core.$stage.height();
            "youtube" === r.type ? n = '<iframe width="' + a + '" height="' + l + '" src="http://www.youtube.com/embed/' + r.id + "?autoplay=1&v=" + r.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === r.type && (n = '<iframe src="http://player.vimeo.com/video/' + r.id + '?autoplay=1" width="' + a + '" height="' + l + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), s.addClass("owl-video-playing"), this._playing = s, i = t('<div style="height:' + l + "px; width:" + a + 'px" class="owl-video-frame">' + n + "</div>"), o.after(i)
        }, o.prototype.isInFullScreen = function() {
            var i = n.fullscreenElement || n.mozFullScreenElement || n.webkitFullscreenElement;
            return i && t(i).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), i && this._fullscreen && this._playing ? !1 : this._fullscreen ? (this._fullscreen = !1, !1) : this._playing && this._core.state.orientation !== e.orientation ? (this._core.state.orientation = e.orientation, !1) : !0
        }, o.prototype.destroy = function() {
            var t, e;
            this._core.$element.off("click.owl.video");
            for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Video = o
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, n, i) {
        var o = function s(e) {
            this.core = e, this.core.options = t.extend({}, s.Defaults, this.core.options), this.swapping = !0, this.previous = i, this.next = i, this.handlers = {
                "change.owl.carousel": t.proxy(function(t) {
                    "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
                }, this),
                "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function(t) {
                    this.swapping = "translated" == t.type
                }, this),
                "translate.owl.carousel": t.proxy(function(t) {
                    this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
                }, this)
            }, this.core.$element.on(this.handlers)
        };
        o.Defaults = {
            animateOut: !1,
            animateIn: !1
        }, o.prototype.swap = function() {
            if (1 === this.core.settings.items && this.core.support3d) {
                this.core.speed(0);
                var e, n = t.proxy(this.clear, this),
                    i = this.core.$stage.children().eq(this.previous),
                    o = this.core.$stage.children().eq(this.next),
                    s = this.core.settings.animateIn,
                    r = this.core.settings.animateOut;
                this.core.current() !== this.previous && (r && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), i.css({
                    left: e + "px"
                }).addClass("animated owl-animated-out").addClass(r).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", n)), s && o.addClass("animated owl-animated-in").addClass(s).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", n))
            }
        }, o.prototype.clear = function(e) {
            t(e.target).css({
                left: ""
            }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd()
        }, o.prototype.destroy = function() {
            var t, e;
            for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Animate = o
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, n, i) {
        var o = function s(e) {
            this.core = e, this.core.options = t.extend({}, s.Defaults, this.core.options), this.handlers = {
                "translated.owl.carousel refreshed.owl.carousel": t.proxy(function() {
                    this.autoplay()
                }, this),
                "play.owl.autoplay": t.proxy(function(t, e, n) {
                    this.play(e, n)
                }, this),
                "stop.owl.autoplay": t.proxy(function() {
                    this.stop()
                }, this),
                "mouseover.owl.autoplay": t.proxy(function() {
                    this.core.settings.autoplayHoverPause && this.pause()
                }, this),
                "mouseleave.owl.autoplay": t.proxy(function() {
                    this.core.settings.autoplayHoverPause && this.autoplay()
                }, this)
            }, this.core.$element.on(this.handlers)
        };
        o.Defaults = {
            autoplay: !1,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !1,
            autoplaySpeed: !1
        }, o.prototype.autoplay = function() {
            this.core.settings.autoplay && !this.core.state.videoPlay ? (e.clearInterval(this.interval), this.interval = e.setInterval(t.proxy(function() {
                this.play()
            }, this), this.core.settings.autoplayTimeout)) : e.clearInterval(this.interval)
        }, o.prototype.play = function(t, i) {
            return n.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void e.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed);
        }, o.prototype.stop = function() {
            e.clearInterval(this.interval)
        }, o.prototype.pause = function() {
            e.clearInterval(this.interval)
        }, o.prototype.destroy = function() {
            var t, n;
            e.clearInterval(this.interval);
            for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
            for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.autoplay = o
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, n, i) {
        var o = function s(e) {
            this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
                next: this._core.next,
                prev: this._core.prev,
                to: this._core.to
            }, this._handlers = {
                "prepared.owl.carousel": t.proxy(function(e) {
                    this._core.settings.dotsData && this._templates.push(t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
                }, this),
                "add.owl.carousel": t.proxy(function(e) {
                    this._core.settings.dotsData && this._templates.splice(e.position, 0, t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
                }, this),
                "remove.owl.carousel prepared.owl.carousel": t.proxy(function(t) {
                    this._core.settings.dotsData && this._templates.splice(t.position, 1)
                }, this),
                "change.owl.carousel": t.proxy(function(t) {
                    if ("position" == t.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                        var e = this._core.current(),
                            n = this._core.maximum(),
                            i = this._core.minimum();
                        t.data = t.property.value > n ? e >= n ? i : n : t.property.value < i ? n : t.property.value
                    }
                }, this),
                "changed.owl.carousel": t.proxy(function(t) {
                    "position" == t.property.name && this.draw()
                }, this),
                "refreshed.owl.carousel": t.proxy(function() {
                    this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")
                }, this)
            }, this._core.options = t.extend({}, s.Defaults, this._core.options), this.$element.on(this._handlers)
        };
        o.Defaults = {
            nav: !1,
            navRewind: !0,
            navText: ["prev", "next"],
            navSpeed: !1,
            navElement: "div",
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotData: !1,
            dotsSpeed: !1,
            dotsContainer: !1,
            controlsClass: "owl-controls"
        }, o.prototype.initialize = function() {
            var e, n, i = this._core.settings;
            i.dotsData || (this._templates = [t("<div>").addClass(i.dotClass).append(t("<span>")).prop("outerHTML")]), i.navContainer && i.dotsContainer || (this._controls.$container = t("<div>").addClass(i.controlsClass).appendTo(this.$element)), this._controls.$indicators = i.dotsContainer ? t(i.dotsContainer) : t("<div>").hide().addClass(i.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", t.proxy(function(e) {
                var n = t(e.target).parent().is(this._controls.$indicators) ? t(e.target).index() : t(e.target).parent().index();
                e.preventDefault(), this.to(n, i.dotsSpeed)
            }, this)), e = i.navContainer ? t(i.navContainer) : t("<div>").addClass(i.navContainerClass).prependTo(this._controls.$container), this._controls.$next = t("<" + i.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(i.navClass[0]).html(i.navText[0]).hide().prependTo(e).on("click", t.proxy(function(t) {
                this.prev(i.navSpeed)
            }, this)), this._controls.$next.addClass(i.navClass[1]).html(i.navText[1]).hide().appendTo(e).on("click", t.proxy(function(t) {
                this.next(i.navSpeed)
            }, this));
            for (n in this._overrides) this._core[n] = t.proxy(this[n], this)
        }, o.prototype.destroy = function() {
            var t, e, n, i;
            for (t in this._handlers) this.$element.off(t, this._handlers[t]);
            for (e in this._controls) this._controls[e].remove();
            for (i in this.overides) this._core[i] = this._overrides[i];
            for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
        }, o.prototype.update = function() {
            var t, e, n, i = this._core.settings,
                o = this._core.clones().length / 2,
                s = o + this._core.items().length,
                r = i.center || i.autoWidth || i.dotData ? 1 : i.dotsEach || i.items;
            if ("page" !== i.slideBy && (i.slideBy = Math.min(i.slideBy, i.items)), i.dots || "page" == i.slideBy)
                for (this._pages = [], t = o, e = 0, n = 0; s > t; t++)(e >= r || 0 === e) && (this._pages.push({
                    start: t - o,
                    end: t - o + r - 1
                }), e = 0, ++n), e += this._core.mergers(this._core.relative(t))
        }, o.prototype.draw = function() {
            var e, n, i = "",
                o = this._core.settings,
                s = (this._core.$stage.children(), this._core.relative(this._core.current()));
            if (!o.nav || o.loop || o.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= s), this._controls.$next.toggleClass("disabled", s >= this._core.maximum())), this._controls.$previous.toggle(o.nav), this._controls.$next.toggle(o.nav), o.dots) {
                if (e = this._pages.length - this._controls.$indicators.children().length, o.dotData && 0 !== e) {
                    for (n = 0; n < this._controls.$indicators.children().length; n++) i += this._templates[this._core.relative(n)];
                    this._controls.$indicators.html(i)
                } else e > 0 ? (i = new Array(e + 1).join(this._templates[0]), this._controls.$indicators.append(i)) : 0 > e && this._controls.$indicators.children().slice(e).remove();
                this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(t.inArray(this.current(), this._pages)).addClass("active")
            }
            this._controls.$indicators.toggle(o.dots)
        }, o.prototype.onTrigger = function(e) {
            var n = this._core.settings;
            e.page = {
                index: t.inArray(this.current(), this._pages),
                count: this._pages.length,
                size: n && (n.center || n.autoWidth || n.dotData ? 1 : n.dotsEach || n.items)
            }
        }, o.prototype.current = function() {
            var e = this._core.relative(this._core.current());
            return t.grep(this._pages, function(t) {
                return t.start <= e && t.end >= e
            }).pop()
        }, o.prototype.getPosition = function(e) {
            var n, i, o = this._core.settings;
            return "page" == o.slideBy ? (n = t.inArray(this.current(), this._pages), i = this._pages.length, e ? ++n : --n, n = this._pages[(n % i + i) % i].start) : (n = this._core.relative(this._core.current()), i = this._core.items().length, e ? n += o.slideBy : n -= o.slideBy), n
        }, o.prototype.next = function(e) {
            t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
        }, o.prototype.prev = function(e) {
            t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
        }, o.prototype.to = function(e, n, i) {
            var o;
            i ? t.proxy(this._overrides.to, this._core)(e, n) : (o = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % o + o) % o].start, n))
        }, t.fn.owlCarousel.Constructor.Plugins.Navigation = o
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, n, i) {
        var o = function s(n) {
            this._core = n, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
                "initialized.owl.carousel": t.proxy(function() {
                    "URLHash" == this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
                }, this),
                "prepared.owl.carousel": t.proxy(function(e) {
                    var n = t(e.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
                    this._hashes[n] = e.content
                }, this)
            }, this._core.options = t.extend({}, s.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function() {
                var t = e.location.hash.substring(1),
                    n = this._core.$stage.children(),
                    i = this._hashes[t] && n.index(this._hashes[t]) || 0;
                return t ? void this._core.to(i, !1, !0) : !1
            }, this))
        };
        o.Defaults = {
            URLhashListener: !1
        }, o.prototype.destroy = function() {
            var n, i;
            t(e).off("hashchange.owl.navigation");
            for (n in this._handlers) this._core.$element.off(n, this._handlers[n]);
            for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Hash = o
    }(window.Zepto || window.jQuery, window, document)
}]);
//# sourceMappingURL=scripts.js.map