! function (e, t, a) {
    "use strict";
    jQuery(a).ready(function (e) {
        O.init(), W(), Ve(), setTimeout(ae, 60),
            function () {
                if (e(".nectar-button.see-through[data-color-override], .nectar-button.see-through-2[data-color-override], .nectar-button.see-through-3[data-color-override]").each(function () {
                        var t, a, n = e('body.material[data-button-style^="rounded"]').length > 0;
                        if (e(this).css("visibility", "visible"), e(this).hasClass("see-through-3") && "false" == e(this).attr("data-color-override")) return !0;
                        t = "false" != e(this).attr("data-color-override") ? e(this).attr("data-color-override") : e(this).parents(".dark").length > 0 ? "#000000" : "#ffffff", e(this).hasClass("see-through-3") || e(this).css("color", t), e(this).find("i").css("color", t);
                        var r = parseInt(t.substring(1), 16),
                            s = e(this).has("[data-hover-color-override]") ? e(this).attr("data-hover-color-override") : "no-override",
                            i = e(this).has("[data-hover-text-color-override]") ? e(this).attr("data-hover-text-color-override") : "#fff",
                            o = (16711680 & r) >> 16,
                            l = (65280 & r) >> 8,
                            d = (255 & r) >> 0,
                            h = e(this).hasClass("see-through-3") ? "1" : "0.75";
                        e(this).css("border-color", "rgba(" + o + "," + l + "," + d + "," + h + ")"), n && e(this).find("i").css({
                            "background-color": "rgba(" + o + "," + l + "," + d + ",1)",
                            "box-shadow": "0px 8px 15px rgba(" + o + "," + l + "," + d + ",0.24)"
                        }), e(this).hasClass("see-through") ? (a = e(this), e(this).on("mouseenter touchstart", function () {
                            a.css("border-color", "rgba(" + o + "," + l + "," + d + ",1)")
                        }), e(this).on("mouseleave touchtouchend", function () {
                            a.css("border-color", "rgba(" + o + "," + l + "," + d + ",1)"), h = e(this).hasClass("see-through-3") ? "1" : "0.75", a.css("border-color", "rgba(" + o + "," + l + "," + d + "," + h + ")")
                        })) : (e(this).find("i").css("color", i), "no-override" != s ? (a = e(this), e(this).on("mouseenter touchstart", function () {
                            a.css({
                                "border-color": s,
                                "background-color": s,
                                color: i
                            }), n && a.find("i").css({
                                "background-color": "",
                                "box-shadow": ""
                            })
                        }), e(this).on("mouseleave touchtouchend", function () {
                            h = e(this).hasClass("see-through-3") ? "1" : "0.75", n && a.find("i").css({
                                "background-color": "rgba(" + o + "," + l + "," + d + ",1)",
                                "box-shadow": "0px 8px 15px rgba(" + o + "," + l + "," + d + ",0.24)"
                            }), a.hasClass("see-through-3") ? a.css({
                                "border-color": "rgba(" + o + "," + l + "," + d + "," + h + ")",
                                "background-color": "transparent"
                            }) : a.css({
                                "border-color": "rgba(" + o + "," + l + "," + d + "," + h + ")",
                                "background-color": "transparent",
                                color: t
                            })
                        })) : (a = e(this), e(this).on("mouseenter touchstart", function () {
                            a.css({
                                "border-color": s,
                                color: i
                            })
                        }), e(this).on("mouseleave touchtouchend", function () {
                            h = a.hasClass("see-through-3") ? "1" : "0.75", a.css({
                                "border-color": "rgba(" + o + "," + l + "," + d + "," + h + ")",
                                color: i
                            })
                        })))
                    }), e(".nectar-button:not(.see-through):not(.see-through-2):not(.see-through-3)[data-color-override]").each(function () {
                        if (e(this).css("visibility", "visible"), "false" != e(this).attr("data-color-override")) {
                            var t = e(this).attr("data-color-override");
                            e(this).removeClass("accent-color").removeClass("extra-color-1").removeClass("extra-color-2").removeClass("extra-color-3").css("background-color", t)
                        }
                    }), e(".swiper-slide .solid_color_2").length > 0 || e(".tilt-button-inner").length > 0) {
                    var t, a = "";
                    e(".swiper-slide .solid_color_2 a").each(function (n) {
                        e(this).addClass("instance-" + n), t = "false" != e(this).attr("data-color-override") ? e(this).attr("data-color-override") : e(this).parents(".dark").length > 0 ? "#000000" : "#ffffff", e(this).css("color", t), e(this).find("i").css("color", t);
                        var r = e(this).css("background-color"),
                            s = ne(r, .13),
                            i = ne(r, -.15);
                        a += ".swiper-slide .solid_color_2 a.instance-" + n + ":after { background-color: " + s + ";  } .swiper-slide .solid_color_2 a.instance-" + n + ":before { background-color: " + i + "; } "
                    }), e(".tilt-button-wrap a").each(function (t) {
                        e(this).addClass("instance-" + t);
                        var n, r = e(this).css("background-color");
                        "false" != e(this).attr("data-color-override") && (n = e(this).attr("data-color-override"), e(this).css("background-color", n), r = n);
                        var s = ne(r, .13),
                            i = ne(r, -.15);
                        a += ".tilt-button-wrap a.instance-" + t + ":after { background-color: " + s + ";  } .tilt-button-wrap a.instance-" + t + ":before { background-color: " + i + "; } "
                    }), G(a, "tilt-button")
                }
                if (e(".nectar-3d-transparent-button").length > 0) {
                    var n = "";
                    e(".nectar-3d-transparent-button").each(function (t) {
                        var a, r = e(this),
                            s = r.attr("data-size"),
                            i = 0,
                            o = 1.5,
                            l = 1.65;
                        "large" == s ? (i = 46, a = 16, o = 1.5, l = 1.7) : "medium" == s ? (i = 30, a = 16) : "small" == s ? (i = 20, a = 12) : "jumbo" == s ? (i = 54, a = 24, o = 1.5, l = 1.68) : "extra_jumbo" == s && (i = 100, a = 64, o = 1.6, l = 1.6), r.find("svg text").attr("font-size", a);
                        var d = e(this).find(".back-3d .button-text")[0].getBoundingClientRect(),
                            h = d.width,
                            c = 1.5 * a;
                        r.css({
                            width: h + 1.5 * i + "px",
                            height: c + i + "px"
                        }), r.find("> a").css({
                            height: c + i + "px"
                        }), r.find(".back-3d svg, .front-3d svg").css({
                            width: h + 1.5 * i + "px",
                            height: c + i + "px"
                        }).attr("viewBox", "0 0 " + (h + i) + " " + (c + i)), r.find("svg text").attr("transform", "matrix(1 0 0 1 " + (h + i * o) / 2 + " " + (c + i) / l + ")"), r.find(".front-3d, .back-3d").css("transform-origin", "50% 50% -" + (c + i) / 2 + "px"), e(this).find(".front-3d svg > rect").attr("id", "masked-rect-id-" + t), e(this).find(".front-3d defs mask").attr("id", "button-text-mask-" + t), r.css("visibility", "visible"), n += "#masked-rect-id-" + t + " { mask: url(#button-text-mask-" + t + "); -webkit-mask: url(#button-text-mask-" + t + ")} "
                    }), re(), s.on("smartresize", re), G(n, "nectar-td-button")
                }
                setTimeout(function () {
                    e('.nectar-button[class*="color-gradient"] .start').removeClass("loading")
                }, 150), (navigator.userAgent.toLowerCase().indexOf("firefox") > -1 || navigator.userAgent.indexOf("MSIE ") > -1 || navigator.userAgent.match(/Trident\/7\./)) && e('.nectar-button[class*="color-gradient"] .start').addClass("no-text-grad")
            }(), 0 !== e(".team-member").length && (i.on("click", '.team-member[data-style="bio_fullscreen"]', function () {
                if (!(e(".nectar_team_member_overlay").length > 0)) {
                    var t = e("body > #boxed").length > 0 ? "in-boxed" : null,
                        n = e(this).find(".nectar_team_bio").html(),
                        r = e(this).find(".nectar_team_bio_img[data-img-src]").length > 0 ? e(this).find(".nectar_team_bio_img").attr("data-img-src") : "";
                    if (i.append('<div class="nectar_team_member_overlay ' + t + '"><div class="inner-wrap"><div class="team_member_details"><div class="bio-inner"><span class="mobile-close"></span><h2>' + e(this).find(".team-meta h3").html() + '</h2><div class="title">' + e(this).find(".team-meta p").html() + '</div><div class="team-desc">' + n + '</div></div></div><div class="nectar_team_member_close ' + t + '"><div class="inner"></div></div>'), r.length > 0) {
                        var o = new Image;
                        o.src = r, o.onload = function () {
                            e(".nectar_team_member_overlay .team_member_image").css("opacity", "1")
                        }, e(".nectar_team_member_overlay .team_member_image").css({
                            "background-image": 'url("' + r + '")'
                        })
                    }
                    var l = e('body[data-header-format="left-header"]').length > 0 && s.width() > 1e3 ? 0 : d.height();
                    e(".nectar_team_member_overlay .inner-wrap").css({
                        "padding-top": l
                    }), e(".using-mobile-browser").length > 0 && e("body,html").addClass("nectar-no-scrolling"), se(), e(".nectar_team_member_overlay").addClass("open").addClass("animating"), setTimeout(function () {
                        e(".nectar_team_member_close").addClass("visible"), e(".nectar_team_member_overlay").removeClass("animating")
                    }, 500), e(a).on("mousemove", ie), 0 == e(".using-mobile-browser").length && e(".nectar_team_member_overlay .inner-wrap").mousewheel(function (e, t) {
                        this.scrollTop -= 30 * t, e.preventDefault()
                    }), e('.team-member[data-style="bio_fullscreen"]').length > 0 && O.usingMobileBrowser && e(".nectar_team_member_overlay").addClass("on-mobile")
                }
            }), i.on("click", ".nectar_team_member_overlay", function () {
                e(this).hasClass("animating") || (e(".nectar_team_member_overlay").removeClass("open"), e(".nectar_team_member_close").removeClass("visible"), e(".using-mobile-browser").length > 0 && e("body,html").removeClass("nectar-no-scrolling"), setTimeout(function () {
                    e(a).off("mousemove", ie), e(".nectar_team_member_overlay, .nectar_team_member_close").remove()
                }, 820))
            }), e('.team-member[data-style="bio_fullscreen"]').length > 0 && s.on("resize", se)),
            function () {
                e(".style-5").each(function () {
                    e(this).find(".sizer").insertBefore(e(this).find(".parallaxImg"))
                }), e(".style-5").parents(".wpb_row").css("z-index", "100");
                var n = a,
                    r = n.getElementsByTagName("body")[0],
                    s = t,
                    o = n.querySelectorAll(".parallaxImg"),
                    l = o.length,
                    d = "ontouchstart" in s || navigator.msMaxTouchPoints;
                if (!(l <= 0))
                    for (var h = 0; h < l; h++) {
                        var c = o[h],
                            u = c.querySelectorAll(".parallaxImg-layer"),
                            g = u.length;
                        if (!(g <= 0)) {
                            for (; c.firstChild;) c.removeChild(c.firstChild);
                            var m = 0,
                                f = e("html").hasClass("cssreflections") ? 1 : 80;
                            80 == f && i.addClass("cssreflections");
                            var p = n.createElement("div"),
                                b = n.createElement("div"),
                                v = n.createElement("div"),
                                w = n.createElement("div"),
                                y = [];
                            c.id = "parallaxImg__" + h, p.className = "parallaxImg-container", v.className = "parallaxImg-shadow", w.className = "parallaxImg-layers";
                            for (var C = 0; C < g; C++) {
                                var x = n.createElement("div"),
                                    _ = n.createElement("div"),
                                    T = u[C].getAttribute("data-img");
                                e(x).html(e(u[C]).html()), x.className = "parallaxImg-rendered-layer", x.setAttribute("data-layer", C), 0 == C && 0 == e(c).parents(".wpb_gallery").length && (_.className = "bg-img", _.style.backgroundImage = "url(" + T + ")", x.appendChild(_)), w.appendChild(x), y.push(x)
                            }
                            p.appendChild(w), c.appendChild(p), e(c).wrap('<div class="parallaxImg-wrap" />'), -1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome") || e(c).parent().append(v), d && e("body.using-mobile-browser").length > 0 || function (a, n, r, s) {
                                    e(c).parents(".style-5").on("mousemove", function (i) {
                                        var o = e(this),
                                            l = Date.now();
                                        l > m + f && (m = l, t.requestAnimationFrame(function () {
                                            k(i, !1, a, n, r, s, o)
                                        }))
                                    }), e(c).parents(".style-5").on("mouseenter", function (e) {
                                        E(e, a)
                                    }), e(c).parents(".style-5").on("mouseleave", function (e) {
                                        z(e, a)
                                    })
                                }(c, y, g, b),
                                function (e, a, n, r) {
                                    H(!1, e, a, n), t.addEventListener("resize", function () {
                                        H(!1, e, a, n)
                                    })
                                }(c, y, g)
                        }
                    }

                function k(t, a, n, s, i, o, l) {
                    if (!e(n.firstChild).hasClass("over")) return z(t, n), !1;
                    var d = .03,
                        h = .063;
                    e(n).parents(".col.wide").length > 0 ? (d = .03, h = .063) : e(n).parents(".col.regular").length > 0 || e(n).parents(".wpb_gallery").length > 0 ? (d = .045, h = .045) : e(n).parents(".col.tall").length > 0 ? (d = .05, h = .015) : e(n).parents(".col.wide_tall").length > 0 ? (d = .04, h = .04) : l.hasClass("nectar-fancy-box") ? (d = .045, h = .022) : (d = .045, h = .075);
                    var c, u = O.scrollTop,
                        g = r.scrollLeft,
                        m = a ? t.touches[0].pageX : t.pageX,
                        f = a ? t.touches[0].pageY : t.pageY,
                        p = n.getBoundingClientRect(),
                        b = n.clientWidth || n.offsetWidth || n.scrollWidth,
                        v = n.clientHeight || n.offsetHeight || n.scrollHeight,
                        w = 320 / b,
                        y = .52 - (m - p.left - g) / b,
                        C = .52 - (f - p.top - u) / v,
                        x = f - p.top - u - v / 2,
                        _ = m - p.left - g - b / 2,
                        T = d * w * (y - _),
                        k = h * w * (x - C);
                    if (e(n).parents(".wpb_gallery").length > 0) c = " perspective(" + 3 * b + "px) rotateX(" + 1.9 * -k + "deg) rotateY(" + 1.3 * -T + "deg)";
                    else if (0 == e(n).parents(".wide_tall").length && 0 == e(n).parents(".wide").length && 0 == e(n).parents(".tall").length) {
                        var E = l.hasClass("nectar-fancy-box") ? "1.06" : "1.03",
                            H = l.hasClass("nectar-fancy-box") ? "-2" : "-10";
                        c = " perspective(" + 3 * b + "px) rotateX(" + k + "deg) rotateY(" + T + "deg)  translateY(" + C * H + "px) translateX(" + y * H + "px) scale(" + E + ")"
                    } else c = " perspective(" + 3 * b + "px) rotateX(" + k + "deg) rotateY(" + T + "deg)  translateY(" + -10 * C + "px) translateX(" + -10 * y + "px) scale(1.013)";
                    e(n).find(".parallaxImg-container").css("transform", c), -1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome") || e(n).parents(".parallaxImg-wrap").find(".parallaxImg-shadow").css("transform", c)
                }

                function E(t, a) {
                    a.firstChild.className += " over", a.className += " over", e(a).addClass("transition"), e(a).parents(".wpb_gallery").length > 0 ? setTimeout(function () {
                        e(a).removeClass("transition")
                    }, 450) : setTimeout(function () {
                        e(a).removeClass("transition")
                    }, 200)
                }

                function z(t, a) {
                    var n = a.clientWidth || a.offsetWidth || a.scrollWidth,
                        r = a.firstChild;
                    r.className = r.className.replace(" over", ""), a.className = a.className.replace(" over", ""), e(r).css("transform", "perspective(" + 3 * n + "px) rotateX(0deg) rotateY(0deg) translateZ(0)"), e(a).parents(".parallaxImg-wrap").find(".parallaxImg-shadow").css("transform", "perspective(" + 3 * n + "px) rotateX(0deg) rotateY(0deg) translateZ(0)"), e(a).addClass("transition"), setTimeout(function () {
                        e(a).removeClass("transition")
                    }, 200)
                }

                function H(t, a, n, r) {
                    for (var s = a.clientWidth || a.offsetWidth || a.scrollWidth, i = a.firstChild, o = 0; o < r; o++) 0 == o ? e(n[o]).css("transform", "translateZ(0px)") : e(n[o]).css("transform", "translateZ(" + 3 * s / 27 * (1.1 * o) + "px) ");
                    r += 3, e(i).css("transform", "perspective(" + 3 * s + "px)")
                }
            }(), le(), me(), ve(), Ee(), Te(), Be(), Pe(), s.off("smartresize.srInit"), s.on("smartresize.srInit", A), s.off("resize.srInit"), s.on("resize.srInit", q), s.on("load", function () {
                0 == e(t).scrollTop() && Me(), e("video").css("visibility", "visible"), Ne(), he(), de()
            })
    });
    var n, r, s = e(t),
        i = e("body"),
        o = e("#slide-out-widget-area"),
        l = e("#slide-out-widget-area-bg"),
        d = e("#header-outer"),
        h = e("#header-secondary-outer"),
        c = (e("#header-outer #search-btn a"), e("#wpadminbar")),
        u = e("#ajax-loading-screen"),
        g = e(".body-border-top"),
        m = e("#page-header-bg"),
        f = e(".body-border-right").length > 0 ? e(".body-border-right").width() : 0,
        p = d.is("[data-logo-height]") ? parseInt(d.attr("data-logo-height")) : 30,
        b = d.is("[data-padding]") ? parseInt(d.attr("data-padding")) : 28,
        v = d.is("[data-shrink-num]") ? d.attr("data-shrink-num") : 6,
        w = (d.is('[data-condense="true"]'), d.is('[data-using-logo="1"]'), !!d.is('[data-header-resize="1"]')),
        y = i.is("[data-hhun]") ? i.attr("data-hhun") : "",
        C = i.is("[data-cae]") ? i.attr("data-cae") : "easeOutCubic",
        x = i.is("[data-cad]") ? i.attr("data-cad") : "650",
        _ = [],
        T = [],
        k = [],
        E = [],
        z = 0,
        H = "",
        I = !1,
        F = {
            animating: "false",
            perspect: "not-rolled"
        };
    g.length > 0 && ("#ffffff" == g.css("background-color") && "light" == i.attr("data-header-color") || "rgb(255, 255, 255)" == g.css("background-color") && "light" == i.attr("data-header-color") || g.css("background-color") == d.attr("data-user-set-bg")) && (I = !0);
    var O = {
        usingMobileBrowser: !!navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/),
        usingFrontEndEditor: void 0 !== t.vc_iframe,
        getWindowSize: function () {
            O.winH = t.innerHeight, O.winW = t.innerWidth, O.adminBarHeight = c.length > 0 ? c.height() : 0, O.secondaryHeaderHeight = h.length > 0 && "none" != h.css("display") ? h.outerHeight() : 0
        },
        scrollTop: 0,
        scrollPosMouse: function () {
            return s.scrollTop()
        },
        scrollPosRAF: function () {
            O.scrollTop = s.scrollTop(), requestAnimationFrame(O.scrollPosRAF)
        },
        bindEvents: function () {
            O.usingMobileBrowser ? requestAnimationFrame(O.scrollPosRAF) : s.on("scroll", function () {
                O.scrollTop = O.scrollPosMouse()
            }), s.on("resize", O.getWindowSize)
        },
        init: function () {
            c = e("#wpadminbar"), this.getWindowSize(), this.scrollTop = this.scrollPosMouse(), this.bindEvents()
        }
    };

    function A() {
        he(), de(), Me(), we(), e("#header-outer .sf-menu > li:not(.megamenu) > ul > li > ul").each(function () {
            e(this).removeClass("on-left-side"), e(this).offset().left + e(this).outerWidth() > s.width() ? (e(this).addClass("on-left-side"), e(this).find("ul").addClass("on-left-side")) : (e(this).removeClass("on-left-side"), e(this).find("ul").removeClass("on-left-side"))
        })
    }

    function q() {
        he(), M(), O.usingMobileBrowser || de()
    }

    function W() {
        var t;
        (M(), 0 == e('body[data-header-format="left-header"]').length) && (t = !(e('#header-outer[data-megamenu-rt="1"]').length > 0 && e('#header-outer[data-transparent-header="true"]').length > 0), e(".sf-menu:not(.buttons)").superfish({
            delay: 650,
            speed: "fast",
            disableHI: t,
            speedOut: "fast",
            animation: {
                opacity: "show"
            }
        }), e("#header-outer .sf-menu.buttons li.menu-item").on("mouseover", function () {
            e(this).addClass("sfHover")
        }), e("#header-outer .sf-menu.buttons li.menu-item").on("mouseleave", function () {
            var t = e(this);
            t.is(".menu-item-has-children") ? setTimeout(function () {
                t.is(":hover") || t.removeClass("sfHover")
            }, 200) : t.removeClass("sfHover")
        }), e("#header-secondary-outer li.megamenu, .sf-menu.buttons li.megamenu").removeClass("megamenu"), e("#header-outer .sf-menu > li:not(.megamenu) > ul > li > ul").each(function () {
            e(this).offset().left + e(this).outerWidth() > s.width() && (e(this).addClass("on-left-side"), e(this).find("ul").addClass("on-left-side"))
        }), e('body:not([data-header-format="left-header"]) header#top nav > ul > li.megamenu > ul > li > ul > li:has("> ul")').addClass("has-ul"), e('body[data-megamenu-width="full-width"]').length > 0 && e("ul.sub-menu").length > 0 && (V(), s.on("smartresize", V), e("header#top nav > ul > li.megamenu > .sub-menu").css("box-sizing", "content-box")), e("header#top nav > ul.sf-menu > li.menu-item").on("mouseenter", function () {
            e(this).addClass("menu-item-over")
        }), e("header#top nav > ul.sf-menu > li.menu-item").on("mouseleave", function () {
            e(this).removeClass("menu-item-over")
        }), e("header#top nav .megamenu .sub-menu a.sf-with-ul .sf-sub-indicator, header#top .megamenu .sub-menu a .sf-sub-indicator").remove(), e("header#top nav > ul > li.megamenu > ul.sub-menu > li > a").each(function () {
            "–" == e(this).text() && e(this).remove()
        }));
        O.usingMobileBrowser && 0 == e('#header-outer[data-remove-fixed="1"]').length && i.attr("data-hhun", "0")
    }

    function V() {
        var t = s.width(),
            a = e("header#top > .container").width();
        e("header#top nav > ul > li.megamenu > .sub-menu").css({
            "padding-left": (t - a) / 2 + "px",
            "padding-right": (t + 2 - a) / 2 + "px",
            width: a,
            left: "-" + (t - a) / 2 + "px"
        })
    }

    function M() {
        O.winW < 1e3 && "1" == i.attr("data-responsive") ? (i.addClass("mobile"), e("header#top nav").css("display", "none")) : (i.removeClass("mobile"), e("header#top nav").css("display", ""), e(".slide-out-widget-area-toggle #toggle-nav .lines-button").removeClass("close"))
    }
    t.requestAnimationFrame = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
        setTimeout(e, 1e3 / 60)
    };
    var R, B, S, j, Y, N, P = e.event,
        L = e.event.handle ? "handle" : "dispatch";

    function Q(e) {
        return ("0" + parseInt(e).toString(16)).slice(-2)
    }
    P.special.smartresize = {
            setup: function () {
                e(this).on("resize", P.special.smartresize.handler)
            },
            teardown: function () {
                e(this).off("resize", P.special.smartresize.handler)
            },
            handler: function (e, t) {
                var a = this,
                    n = arguments;
                e.type = "smartresize", R && clearTimeout(R), R = setTimeout(function () {
                    P[L].apply(a, n)
                }, "execAsap" === t ? 0 : 100)
            }
        }, e.fn.smartresize = function (e) {
            return e ? this.on("smartresize", e) : this.trigger("smartresize", ["execAsap"])
        }, S = (B = a).createElement("STYLE"), j = "addEventListener" in B, Y = function (e, t) {
            j ? B.addEventListener(e, t) : B.attachEvent("on" + e, t)
        }, N = function (e) {
            S.styleSheet ? S.styleSheet.cssText = e : S.innerHTML = e
        }, B.getElementsByTagName("HEAD")[0].appendChild(S), Y("mousedown", function () {
            N(":focus{outline:0}::-moz-focus-inner{border:0;}")
        }), Y("keydown", function () {
            N("")
        }), jQuery.fn.setCursorPosition = function (t) {
            return 0 == this.length ? this : e(this).setSelection(t, t)
        }, jQuery.fn.setSelection = function (e, t) {
            if (0 == this.length) return this;
            var a = this[0];
            if (a.createTextRange) {
                var n = a.createTextRange();
                n.collapse(!0), n.moveEnd("character", t), n.moveStart("character", e), n.select()
            } else a.setSelectionRange && (a.focus(), a.setSelectionRange(e, t));
            return this
        }, e.extend(e.expr[":"], {
            transparent: function (t, a, n) {
                return "0" === e(t).css("opacity")
            }
        }), e.cssHooks.color = {
            get: function (e) {
                var n;
                return e.currentStyle ? n = e.currentStyle.color : t.getComputedStyle && (n = a.defaultView.getComputedStyle(e, null).getPropertyValue("color")), -1 == n.search("rgb") ? n : (n = n.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)) ? "#" + Q(n[1]) + Q(n[2]) + Q(n[3]) : void 0
            }
        }, e.cssHooks.backgroundColor = {
            get: function (e) {
                var n;
                return e.currentStyle ? n = e.currentStyle.backgroundColor : t.getComputedStyle && (n = a.defaultView.getComputedStyle(e, null).getPropertyValue("background-color")), -1 == n.search("rgb") ? n : (n = n.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)) ? "#" + Q(n[1]) + Q(n[2]) + Q(n[3]) : void 0
            }
        },
        function (e) {
            function n(a, r) {
                var s = e.proxy(this.process, this);
                this.$body = e("body"), this.$scrollElement = e(e(a).is("body") ? t : a), this.options = e.extend({}, n.DEFAULTS, r), this.selector = (this.options.target || "") + " ul li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", s), this.refresh(), this.process()
            }
            n.VERSION = "3.2.0", n.DEFAULTS = {
                offset: 10
            }, n.prototype.getScrollHeight = function () {
                return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, a.documentElement.scrollHeight)
            }, n.prototype.refresh = function () {
                var t = "offset",
                    a = 0;
                e.isWindow(this.$scrollElement[0]) || (t = "position", a = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
                var n = this;
                this.$body.find(this.selector).map(function () {
                    var n = e(this),
                        r = n.data("target") || n.attr("href"),
                        s = /^#./.test(r) && e(r);
                    return s && s.length && s.is(":visible") && [
                        [s[t]().top + a, r]
                    ] || null
                }).sort(function (e, t) {
                    return e[0] - t[0]
                }).each(function () {
                    n.offsets.push(this[0]), n.targets.push(this[1])
                })
            }, n.prototype.process = function () {
                var t = 0;
                (e('.page-submenu[data-sticky="true"]').length > 0 && 0 == e('body[data-hhun="1"]').length || e('.page-submenu[data-sticky="true"]').length > 0 && e('#header-outer[data-remove-fixed="1"]').length > 0) && (t = e(".page-submenu").height());
                var a, n = this.$scrollElement.scrollTop() + this.options.offset + t,
                    r = this.getScrollHeight(),
                    s = this.options.offset + r - this.$scrollElement.height() - t,
                    i = this.offsets,
                    o = this.targets,
                    l = this.activeTarget;
                if (this.scrollHeight != r && this.refresh(), n >= s) return l != (a = o[o.length - 1]) && this.activate(a);
                if (l && n <= i[0]) return l != (a = o[0]) && this.activate(a);
                for (a = i.length; a--;) l != o[a] && n >= i[a] && (!i[a + 1] || n <= i[a + 1]) && this.activate(o[a])
            }, n.prototype.activate = function (t) {
                this.activeTarget = t, e(this.selector).parentsUntil(this.options.target, ".current-menu-item").removeClass("current-menu-item").removeClass("sfHover");
                var a = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
                    n = e(a).parents("li").addClass("current-menu-item");
                n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("current-menu-item")), n.trigger("activate.bs.scrollspy")
            };
            var r = e.fn.scrollspy;
            e.fn.scrollspy = function (t) {
                return this.each(function () {
                    var a = e(this),
                        r = a.data("bs.scrollspy"),
                        s = "object" == typeof t && t;
                    r || a.data("bs.scrollspy", r = new n(this, s)), "string" == typeof t && r[t]()
                })
            }, e.fn.scrollspy.Constructor = n, e.fn.scrollspy.noConflict = function () {
                return e.fn.scrollspy = r, this
            }
        }(jQuery);
    var X, $, D = function (e) {
        e = e.split("+").join(" ");
        for (var t, a = {}, n = /[?&]?([^=]+)=([^&]*)/g; t = n.exec(e);) a[decodeURIComponent(t[1])] = decodeURIComponent(t[2]);
        return a
    }(a.location.search);
    X = jQuery, $ = X(t), X.fn.visible = function (e, t, a) {
        if (!(this.length < 1)) {
            var n = this.length > 1 ? this.eq(0) : this,
                r = n.get(0),
                s = $.width(),
                i = $.height(),
                o = (a = a || "both", !0 !== t || r.offsetWidth * r.offsetHeight);
            if ("function" == typeof r.getBoundingClientRect) {
                var l = r.getBoundingClientRect(),
                    d = l.top >= 0 && l.top < i,
                    h = l.bottom > 0 && l.bottom <= i,
                    c = l.left >= 0 && l.left < s,
                    u = l.right > 0 && l.right <= s,
                    g = e ? d || h : d && h,
                    m = e ? c || u : c && u;
                if ("both" === a) return o && g && m;
                if ("vertical" === a) return o && g;
                if ("horizontal" === a) return o && m
            } else {
                var f = $.scrollTop(),
                    p = f + i,
                    b = $.scrollLeft(),
                    v = b + s,
                    w = n.offset(),
                    y = w.top,
                    C = y + n.height(),
                    x = w.left,
                    _ = x + n.width(),
                    T = !0 === e ? C : y,
                    k = !0 === e ? y : C,
                    E = !0 === e ? _ : x,
                    z = !0 === e ? x : _;
                if ("both" === a) return !!o && p >= k && T >= f && v >= z && E >= b;
                if ("vertical" === a) return !!o && p >= k && T >= f;
                if ("horizontal" === a) return !!o && v >= z && E >= b
            }
        }
    };
    var U = function (e, n, r, s, i, o) {
            for (var l = 0, d = ["webkit", "moz", "ms", "o"], h = 0; h < d.length && !t.requestAnimationFrame; ++h) t.requestAnimationFrame = t[d[h] + "RequestAnimationFrame"], t.cancelAnimationFrame = t[d[h] + "CancelAnimationFrame"] || t[d[h] + "CancelRequestAnimationFrame"];
            t.requestAnimationFrame || (t.requestAnimationFrame = function (e) {
                var a = (new Date).getTime(),
                    n = Math.max(0, 16 - (a - l)),
                    r = t.setTimeout(function () {
                        e(a + n)
                    }, n);
                return l = a + n, r
            }), t.cancelAnimationFrame || (t.cancelAnimationFrame = function (e) {
                clearTimeout(e)
            });
            var c = this;
            for (var u in c.options = {
                    useEasing: !0,
                    useGrouping: !0,
                    separator: ",",
                    decimal: ".",
                    easingFn: null,
                    formattingFn: null
                }, o) o.hasOwnProperty(u) && (c.options[u] = o[u]);
            "" === c.options.separator && (c.options.useGrouping = !1), c.options.prefix || (c.options.prefix = ""), c.options.suffix || (c.options.suffix = ""), c.d = "string" == typeof e ? a.getElementById(e) : e, c.startVal = Number(n), c.endVal = Number(r), c.countDown = c.startVal > c.endVal, c.frameVal = c.startVal, c.decimals = Math.max(0, s || 0), c.dec = Math.pow(10, c.decimals), c.duration = 1e3 * Number(i) || 2e3, c.formatNumber = function (e) {
                var t, a, n, r;
                if (e = e.toFixed(c.decimals), a = (t = (e += "").split("."))[0], n = t.length > 1 ? c.options.decimal + t[1] : "", r = /(\d+)(\d{3})/, c.options.useGrouping)
                    for (; r.test(a);) a = a.replace(r, "$1" + c.options.separator + "$2");
                return c.options.prefix + a + n + c.options.suffix
            }, c.easeOutExpo = function (e, t, a, n) {
                return a * (1 - Math.pow(2, -10 * e / n)) * 1024 / 1023 + t
            }, c.easingFn = c.options.easingFn ? c.options.easingFn : c.easeOutExpo, c.formattingFn = c.options.formattingFn ? c.options.formattingFn : c.formatNumber, c.version = function () {
                return "1.7.1"
            }, c.printValue = function (e) {
                var t = c.formattingFn(e);
                "INPUT" === c.d.tagName ? this.d.value = t : "text" === c.d.tagName || "tspan" === c.d.tagName ? this.d.textContent = t : this.d.innerHTML = t
            }, c.count = function (e) {
                c.startTime || (c.startTime = e), c.timestamp = e;
                var t = e - c.startTime;
                c.remaining = c.duration - t, c.options.useEasing ? c.countDown ? c.frameVal = c.startVal - c.easingFn(t, 0, c.startVal - c.endVal, c.duration) : c.frameVal = c.easingFn(t, c.startVal, c.endVal - c.startVal, c.duration) : c.countDown ? c.frameVal = c.startVal - (c.startVal - c.endVal) * (t / c.duration) : c.frameVal = c.startVal + (c.endVal - c.startVal) * (t / c.duration), c.countDown ? c.frameVal = c.frameVal < c.endVal ? c.endVal : c.frameVal : c.frameVal = c.frameVal > c.endVal ? c.endVal : c.frameVal, c.frameVal = Math.round(c.frameVal * c.dec) / c.dec, c.printValue(c.frameVal), t < c.duration ? c.rAF = requestAnimationFrame(c.count) : c.callback && c.callback()
            }, c.start = function (e) {
                return c.callback = e, c.rAF = requestAnimationFrame(c.count), !1
            }, c.pauseResume = function () {
                c.paused ? (c.paused = !1, delete c.startTime, c.duration = c.remaining, c.startVal = c.frameVal, requestAnimationFrame(c.count)) : (c.paused = !0, cancelAnimationFrame(c.rAF))
            }, c.reset = function () {
                c.paused = !1, delete c.startTime, c.startVal = n, cancelAnimationFrame(c.rAF), c.printValue(c.startVal)
            }, c.update = function (e) {
                cancelAnimationFrame(c.rAF), c.paused = !1, delete c.startTime, c.startVal = c.frameVal, c.endVal = Number(e), c.countDown = c.startVal > c.endVal, c.rAF = requestAnimationFrame(c.count)
            }, c.printValue(c.startVal)
        },
        Z = function (e, t, a, n) {
            return a * ((e = e / n - 1) * e * e + 1) + t
        };

    function G(t, n) {
        if (t.length > 0) {
            var r = a.head || a.getElementsByTagName("head")[0],
                s = a.createElement("style");
            s.type = "text/css", s.styleSheet ? s.styleSheet.cssText = t : s.appendChild(a.createTextNode(t)), e(s).attr("id", n), e("head").find("#" + n).remove(), r.appendChild(s)
        }
    }

    function J() {
        e(H + " .wpb_animate_when_almost_visible").each(function () {
            var t = e(this),
                a = e("#nectar_fullscreen_rows").length > 0 ? "200%" : "90%",
                n = new Waypoint({
                    element: t,
                    handler: function () {
                        t.parents(".wpb_tab").length > 0 && "hidden" == t.parents(".wpb_tab").css("visibility") || t.hasClass("animated") ? n.destroy() : (t.addClass("animated"), t.addClass("wpb_start_animation"), n.destroy(), t.is(".nectar-button") && e('body[data-button-style*="rounded_shadow"]').length > 0 && setTimeout(function () {
                            t.removeClass("wpb_start_animation")
                        }, 1100))
                    },
                    offset: a
                })
        })
    }

    function K(t) {
        var a = t.parents("li").index() + 1,
            n = e("body.vc_editor").length > 0 ? "> .wpb_tab " : "";
        if (!t.hasClass("active-tab") && !t.hasClass("loading")) {
            if (t.parents("ul").find("a").removeClass("active-tab"), t.addClass("active-tab"), t.parents(".tabbed").find("> div:not(.clear)" + n).css({
                    visibility: "hidden",
                    position: "absolute",
                    opacity: "0",
                    left: "-9999px",
                    display: "none"
                }).removeClass("visible-tab"), e("body.vc_editor").length > 0) {
                var r = t.parent().is("[data-m-id]") ? t.parent().attr("data-m-id") : "";
                t.parents(".tabbed").find('> div[data-model-id="' + r + '"]' + n).css({
                    visibility: "visible",
                    position: "relative",
                    left: "0",
                    display: "block"
                }).stop().transition({
                    opacity: 1
                }, 400).addClass("visible-tab"), convertFrontEndPadding()
            } else t.parents(".tabbed").find("> div:nth-of-type(" + a + ")" + n).css({
                visibility: "visible",
                position: "relative",
                left: "0",
                display: "block"
            }).stop().transition({
                opacity: 1
            }, 400).addClass("visible-tab");
            (t.parents(".tabbed").find("> div:nth-of-type(" + a + ") .iframe-embed").length > 0 || t.parents(".tabbed").find("> div:nth-of-type(" + a + ") .portfolio-items").length > 0) && setTimeout(function () {
                s.trigger("resize")
            }, 10)
        }
        if (0 != z) {
            var i = t.parents(".tabbed").find("> div:nth-of-type(" + a + ")" + n);
            if ((i.find('.divider-small-border [data-animate="yes"]').length > 0 || i.find('.divider-border [data-animate="yes"]').length > 0) && ge(), (i.find("img.img-with-animation").length > 0 || i.find(".col.has-animation").length > 0 || i.find(".nectar_cascading_images").length > 0 || i.find(".wpb_column.has-animation").length > 0) && (ce(), e(".nectar_cascading_images").each(function () {
                    e(this).parents(".vc_row-o-equal-height").length > 0 && e(this).parents(".wpb_column").length > 0 && e(this).css("max-width", e(this).parents(".wpb_column").width()), e(this).find(".bg-color").each(function () {
                        var t = 0,
                            a = 0;
                        if (0 == e(this).parent().find(".img-wrap").length) {
                            var n = e(this).parents(".cascading-image").siblings('.cascading-image[data-has-img="true"]').first();
                            n.css({
                                position: "relative",
                                visiblity: "hidden"
                            }), t = n.find(".img-wrap").height(), a = n.find(".img-wrap").width(), 0 == n.index() ? n.css({
                                visiblity: "visible"
                            }) : n.css({
                                position: "absolute",
                                visiblity: "visible"
                            })
                        } else t = e(this).parent().find(".img-wrap").height(), a = e(this).parent().find(".img-wrap").width();
                        e(this).css({
                            height: t,
                            width: a
                        })
                    })
                })), i.find('.column-image-bg-wrap[data-bg-animation="displace-filter-fade"]').length > 0)
                for (var o = 0; o < T.length; o++) e(T[o].canvasContainer).parents(".wpb_tab").length > 0 && "hidden" != e(T[o].canvasContainer).parents(".wpb_tab").css("visibility") && (0 == e(T[o].canvasContainer).find(".image-added-to-stage").length && T[o].imgContainer.addChild(T[o].bg), e(T[o].canvasContainer).find(".nectar-liquid-bg").addClass("image-added-to-stage"), T[o].resize(), 0 == e(T[o].canvasContainer).find(".nectar-liquid-bg.animated-in").length && T[o].animateProps(T[o]));
            if (i.find(".nectar-milestone").length > 0 && e(H + ".nectar-milestone").each(function () {
                    var t = e("#nectar_fullscreen_rows").length > 0 ? "250%" : "98%",
                        a = e(this),
                        n = new Waypoint({
                            element: a,
                            handler: function () {
                                if (a.parents(".wpb_tab").length > 0 && "hidden" == a.parents(".wpb_tab").css("visibility") || a.hasClass("animated-in")) n.destroy();
                                else {
                                    var t = parseInt(a.find(".number span:not(.symbol)").text().replace(/,/g, ""));
                                    if (a.hasClass("motion_blur")) a.find("span").each(function (t) {
                                        var a = e(this);
                                        setTimeout(function () {
                                            a.addClass("in-sight")
                                        }, 200 * t)
                                    });
                                    else {
                                        var r = {
                                                easingFn: Z
                                            },
                                            s = a.find(".number span:not(.symbol)")[0];
                                        new U(s, 0, t, 0, 2.2, r).start()
                                    }
                                    a.addClass("animated-in"), n.destroy()
                                }
                            },
                            offset: t
                        })
                }), i.find(".nectar-split-heading").length > 0 && ue(), i.find(".wpb_animate_when_almost_visible").length > 0 && J(), t.parents(".wpb_row").length > 0) {
                if ((i.find(".vc_pie_chart").length > 0 || i.find(".wp-video-shortcode").length > 0 || i.find(".post-area.masonry .posts-container").length > 0 || i.find(".twentytwenty-container").length > 0 || t.parents('#nectar_fullscreen_rows[data-content-overflow="scrollbar"]').length > 0 || t.parents(".tabbed").find("> div:nth-of-type(" + a + ")").find(".wpb_gallery").length > 0 || t.parents(".wpb_row").next().hasClass("parallax_section")) && s.trigger("resize"), i.find(".nectar-flickity").length > 0 && "undefined" != typeof Flickity) Flickity.data(t.parents(".tabbed").find("> div:nth-of-type(" + a + ")").find(".nectar-flickity")[0]).resize();
                if (i.find(".nectar-woo-flickity").length > 0 && "undefined" != typeof Flickity) Flickity.data(t.parents(".tabbed").find("> div:nth-of-type(" + a + ")").find(".nectar-woo-flickity > ul")[0]).resize()
            }
            i.find(".svg-icon-holder").each(function (t) {
                var a = e(this);
                setTimeout(function () {
                    var e = 0;
                    a.is("[data-animation-delay]") && a.attr("data-animation-delay").length > 0 && "false" != a.attr("data-animation") && (e = a.attr("data-animation-delay")), clearTimeout(E[t]), "false" == a.attr("data-animation") ? (a.css("opacity", "1"), _[a.find("svg").attr("id").slice(-1)].finish()) : (_[a.find("svg").attr("id").slice(-1)].reset(), E[t] = setTimeout(function () {
                        _[a.find("svg").attr("id").slice(-1)].play()
                    }, e))
                }, 150)
            })
        }
        t.parents(".tabbed").find(".wpb_row").each(function () {
            if (void 0 !== e(this).find('[class*="vc_col-"]').first().offset()) {
                var t = e(this).find('[class*="vc_col-"]').first().offset().left;
                e(this).find('[class*="vc_col-"]').each(function () {
                    e(this).removeClass("no-left-margin"), e(this).offset().left < t + 15 ? e(this).addClass("no-left-margin") : e(this).removeClass("no-left-margin")
                })
            }
        }), z++, t.parent().parent().find(".magic-line").length > 0 && ee(t)
    }

    function ee(e) {
        var t, a, n;
        (t = e.parent()).length ? (a = t.position().left, n = t.width()) : a = n = 0, e.parent().parent().find(".magic-line").css("transform", "translateX(" + a + "px) scaleX(" + n + ")")
    }

    function te() {
        void 0 !== D.tab && e(".wpb_tabs_nav").each(function () {
            e(this).find("li").each(function () {
                var t = e(this).find("a").clone(),
                    a = D.tab,
                    n = e(this);
                t.find("svg").remove(), (t = (t = t.text()).replace(/\s+/g, "-").toLowerCase()).length > 0 && "-" === t.substring(0, 1) && (t = t.substring(1)), t == (a = a.replace(/\s+/g, "-").replace(/</g, "<").replace(/"/g, "").toLowerCase()) && (e(this).find("a").trigger("click"), setTimeout(function () {
                    n.find("a").trigger("click")
                }, 501))
            })
        })
    }

    function ae() {
        i.on("click", ".tabbed > ul li:not(.cta-button) a", function () {
            return K(e(this)), !1
        }), e(".tabbed").each(function () {
            var t;
            e(this).find(".wpb_tab").each(function (t) {
                if (e(this).is("[data-tab-icon]") && e(this).attr("data-tab-icon").length > 0 && (e(this).parents(".tabbed").addClass("using-icons"), e(this).parents(".tabbed").find(".wpb_tabs_nav li:nth-child(" + (t + 1) + ") > a").prepend('<i class="' + e(this).attr("data-tab-icon") + '"></i>')), e(this).find(".im-icon-wrap.tab-icon").length > 0) {
                    var a = e(this).find(".im-icon-wrap.tab-icon").detach();
                    e(this).parents(".tabbed").find(".wpb_tabs_nav li:nth-child(" + (t + 1) + ") > a").prepend(a)
                }
            }), 0 == e(this).find(".swiper-container").length && 0 == e(this).find(".testimonial_slider").length && 0 == e(this).find('.portfolio-items:not(".carousel")').length && 0 == e(this).find(".wpb_gallery .portfolio-items").length && 0 == e(this).find("iframe").length && e(this).find("> ul li:first-child a").trigger("click"), (e(this).find(".testimonial_slider").length > 0 || e(this).find('.portfolio-items:not(".carousel")').length > 0 || e(this).find(".wpb_gallery .portfolio-items").length > 0 || e(this).find("iframe").length > 0) && (t = e(this), e(this).find(".wpb_tab").show().css({
                opacity: 0,
                height: "1px"
            }), e(this).find("> ul li a").addClass("loading"), setTimeout(function () {
                t.find(".wpb_tab").hide().css({
                    opacity: 1,
                    height: "auto"
                }), t.find("> ul li a").removeClass("loading"), t.find("> ul li:first-child a").trigger("click"), te()
            }, 900)), t = e(this), setTimeout(function () {
                t.is('[data-style="minimal_alt"]') && (t.find("> ul").append('<li class="magic-line" />'), ee(t.find("> ul > li:first-child > a")))
            }, 100)
        }), e('.tabbed[data-style="minimal_alt"]').length > 0 && s.on("smartresize", function () {
            ee(e('.tabbed[data-style="minimal_alt"] > ul > li > a.active-tab'))
        }), te()
    }

    function ne(e, t) {
        (e = String(e).replace(/[^0-9a-f]/gi, "")).length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), t = t || 0;
        var a, n, r = "#";
        for (n = 0; n < 3; n++) a = parseInt(e.substr(2 * n, 2), 16), r += ("00" + (a = Math.round(Math.min(Math.max(0, a + a * t), 255)).toString(16))).substr(a.length);
        return r
    }

    function re() {
        e(".nectar-3d-transparent-button").each(function () {
            if ("visible" == e(this).css("visibility")) {
                var t = e(this),
                    a = 0,
                    n = 1.7;
                if ("extra_jumbo" == t.attr("data-size")) {
                    var r;
                    O.winW < 1e3 && O.winW > 690 ? (a = 64, r = 34, t.find(".back-3d rect").attr("stroke-width", "12"), n = 1.7) : O.winW <= 690 ? (a = 46, r = 16, t.find(".back-3d rect").attr("stroke-width", "10"), n = 1.7) : (a = 100, r = 64, t.find(".back-3d rect").attr("stroke-width", "20"), n = 1.6), t.find("svg text").attr("font-size", r);
                    var s = e(this).find(".back-3d .button-text")[0].getBoundingClientRect().width,
                        i = 1.5 * r;
                    t.css({
                        width: s + 1.5 * a + "px",
                        height: i + a + "px"
                    }), t.find("> a").css({
                        height: i + a + "px"
                    }), t.find(".back-3d svg, .front-3d svg").css({
                        width: s + 1.5 * a + "px",
                        height: i + a + "px"
                    }).attr("viewBox", "0 0 " + (s + a) + " " + (i + a)), t.find("svg text").attr("transform", "matrix(1 0 0 1 " + (s + 1.6 * a) / 2 + " " + (i + a) / n + ")"), t.find(".front-3d ").css("transform-origin", "50% 50% -" + (i + a) / 2 + "px"), t.find(".back-3d").css("transform-origin", "50% 50% -" + (i + a) / 2 + "px")
                }
            }
        })
    }

    function se() {
        var t = e('body[data-header-format="left-header"]').length > 0 && s.width() > 1e3 ? 275 : 0;
        e(".nectar_team_member_overlay").css({
            width: s.width() - t,
            left: t
        })
    }

    function ie(t) {
        e("a:hover").length > 0 ? e(".nectar_team_member_close .inner").removeClass("visible") : e(".nectar_team_member_close .inner").addClass("visible"), e(".nectar_team_member_close").css({
            left: t.pageX - 26,
            top: t.pageY - O.scrollTop - 29
        })
    }

    function oe(e) {
        var t;
        switch (e) {
            case "slow":
                t = .6;
                break;
            case "medium":
                t = .4;
                break;
            case "fast":
                t = .25
        }
        return t
    }

    function le() {
        O.usingMobileBrowser && e('body[data-remove-m-parallax="1"]').length > 0 || (de(), e('.nectar-recent-posts-single_featured, .wpb_row.parallax_section, #page-header-bg[data-parallax="1"] .page-header-bg-image-wrap, .parallax_slider_outer .nectar-slider-wrap').each(function () {
            var t = e(this).attr("id");
            0 == e(this).find('[data-parallax-speed="fixed"]').length && (0 == e(this).find(".row-bg").length ? e("#" + t).parallaxScroll("50%", .25) : e("#" + t + ".parallax_section").parallaxScroll("50%", oe(e(this).find(".row-bg").attr("data-parallax-speed")))), e(this).addClass("nectar-parallax-enabled")
        }))
    }

    function de() {
        O.usingMobileBrowser && e('body[data-remove-m-parallax="1"]').length > 0 || e('.nectar-recent-posts-single_featured, .wpb_row.parallax_section, #page-header-bg[data-parallax="1"] .page-header-bg-image-wrap, .parallax_slider_outer .nectar-slider-wrap .slide-bg-wrap').each(function () {
            var t;
            if (0 == e(this).find(".row-bg").length && e(this).find(".page-header-bg-image").length > 0);
            else if (0 == e(this).find(".row-bg").length && e(this).find(".image-bg").length > 0) t = !1, 0 == e(".wpb_row").length && e(this).parents('.nectar-slider-wrap[data-full-width="true"]').length > 0 && e(this).parents(".parallax_slider_outer").length > 0 && "1" == e(this).parents(".parallax_slider_outer").index() && (t = !0), e("#portfolio-extra").length > 0 && e(this).parents(".wpb_row").length > 0 && e(this).parents(".parallax_slider_outer").length > 0 && "0" == e(this).parents(".wpb_row").index() && (t = !0), e(this).parents(".top-level").length > 0 && !O.usingFrontEndEditor || t && !O.usingFrontEndEditor ? e(this).find(".image-bg").css({
                height: Math.ceil(.25 * e(this).parent().offset().top) + e(this).outerHeight(!0)
            }) : e(this).find(".image-bg").css({
                height: Math.ceil(.25 * s.height()) + e(this).outerHeight(!0)
            });
            else if (0 == e(this).find(".row-bg").length && e(this).find(".video-wrap").length > 0) {
                t = !1, 0 == e(".wpb_row").length && e(this).parents('.nectar-slider-wrap[data-full-width="true"]').length > 0 && e(this).parents(".parallax_slider_outer").length > 0 && "1" == e(this).parents(".parallax_slider_outer").index() && (t = !0), e("#portfolio-extra").length > 0 && e(this).parents(".wpb_row").length > 0 && e(this).parents(".parallax_slider_outer").length > 0 && "0" == e(this).parents(".wpb_row").index() && (t = !0), e(this).parents(".top-level").length > 0 && !O.usingFrontEndEditor || t && !O.usingFrontEndEditor ? e(this).find(".video-wrap").css({
                    height: Math.ceil(.25 * e(this).parent().offset().top) + e(this).outerHeight(!0)
                }) : e(this).find(".video-wrap").css({
                    height: Math.ceil(.25 * s.height()) + e(this).outerHeight(!0)
                });
                var a = e(this).find(".video-wrap video"),
                    n = a.parent().width() / 1280,
                    r = a.parent().height() / 720,
                    i = n > r ? n : r;
                a.width(1280 * i), a.height(720 * i)
            } else if (e(this).is(".nectar-recent-posts-single_featured") && e(this).parents(".top-level").length > 0 && !O.usingFrontEndEditor);
            else if (!e(this).hasClass("top-level") || O.usingFrontEndEditor) {
                var o = e(this).find('.row-bg[data-parallax-speed="fast"]').length > 0 ? 60 : 0;
                e(this).find(".row-bg").css({
                    height: Math.ceil(s.height() * oe(e(this).find(".row-bg").attr("data-parallax-speed"))) + e(this).outerHeight(!0) + o
                })
            }
        })
    }

    function he() {
        var t = e("body.vc_editor").length > 0 ? ".vc_element > " : "";
        e(".main-content > .row > " + t + " .full-width-content, #portfolio-extra > " + t + " .full-width-content, .woocommerce-tabs #tab-description > .full-width-content, .post-area.span_12 article .content-inner > .full-width-content").each(function () {
            if (e(this).find("> .span_12 > " + t + " .col").length > 1) {
                var a, n = 0,
                    r = 0;
                e(this).find("> .span_12 > " + t + "  .col").each(function () {
                    a = e(this).find("> .vc_column-inner > .wpb_wrapper").length > 0 ? ".vc_column-inner" : ".column-inner-wrap > .column-inner";
                    var r = parseInt(e(this).css("padding-top")),
                        s = t.length > 2 && e(this).find("> .vc_column-inner").length > 0 ? parseInt(e(this).find("> .vc_column-inner").css("padding-top")) : 0;
                    e(this).find("> " + a + " > .wpb_wrapper").height() + 2 * r + s > n && (n = e(this).find("> " + a + " > .wpb_wrapper").height() + 2 * r + s)
                }), e(this).find("> .span_12 > " + t + " .col").each(function () {
                    a = e(this).find("> .vc_column-inner > .wpb_wrapper").length > 0 ? ".vc_column-inner" : ".column-inner-wrap > .column-inner", e(this).find("> " + a + " > .wpb_wrapper > *").length > 0 ? t.length < 2 && !e(this).parent().parent().hasClass("vc_row-o-equal-height") ? e(this).css("height", n) : t.length > 2 && !e(this).parent().parent().parent().hasClass("vc_row-o-equal-height") && e(this).css("height", n) : e(this).is('[data-using-bg="true"]') && (e(this).css("min-height", n), e(this).is('[data-animation*="reveal"]') && e(this).find(".column-inner").css("min-height", n))
                }), O.winW < 1e3 && e(this).find("> .span_12 > " + t + " .col .wpb_row .col").css("min-height", "0px"), e(this).hasClass("vertically-align-columns") && O.winW > 1e3 && !e(this).hasClass("vc_row-o-equal-height") && e(this).find("> .span_12 > " + t + " .col").each(function () {
                    a = e(this).find("> .vc_column-inner > .wpb_wrapper").length > 0 ? ".vc_column-inner" : ".column-inner-wrap > .column-inner", r = e(this).find("> " + a + " > .wpb_wrapper").height();
                    var t = e(this).height() / 2 - r / 2;
                    t <= 0 && (t = 0), e(this).find("> " + a + " > .wpb_wrapper").css("margin-top", t).css("margin-bottom", t)
                })
            }
        }), e(".main-content > .row > .wpb_row:not(.full-width-content).vc_row-o-equal-height").each(function () {
            if (e(this).find(">.span_12 > " + t + ' .wpb_column[data-animation*="reveal"]').length > 0) {
                var a = 0;
                e(this).find("> .span_12 > " + t + " .col").each(function () {
                    var t = parseInt(e(this).find("> .column-inner-wrap > .column-inner").css("padding-top"));
                    e(this).find("> .column-inner-wrap > .column-inner").height() + 2 * t > a && (a = e(this).find("> .column-inner-wrap > .column-inner").height() + 2 * t)
                }), e(this).find("> .span_12 > " + t + " .col").each(function () {
                    e(this).find("> .column-inner-wrap > .column-inner .wpb_wrapper > *").length > 0 ? e(this).find("> .column-inner-wrap").css("height", a) : (e(this).css("min-height", a), e(this).is('[data-animation*="reveal"]') && e(this).find(".column-inner").css("min-height", a))
                })
            }
        }), e(".wpb_row.vc_row-o-equal-height>.span_12> " + t + '.wpb_column[class*="padding-"][data-padding-pos="all"]').each(function () {
            0 == e(this).parents(".tabbed").length && e(this).css({
                "padding-top": e(this).css("padding-left"),
                "padding-bottom": e(this).css("padding-left")
            })
        })
    }

    function ce() {
        var t = e("#nectar_fullscreen_rows").length > 0 ? "200%" : "88%",
            a = e("#nectar_fullscreen_rows").length > 0 ? "200%" : "70%";
        e(H + "img.img-with-animation").each(function () {
            var a = e(this),
                n = new Waypoint({
                    element: a,
                    handler: function () {
                        if (a.parents(".wpb_tab").length > 0 && "hidden" == a.parents(".wpb_tab").css("visibility") || a.hasClass("animated-in")) n.destroy();
                        else {
                            if (!O.usingMobileBrowser || e('body[data-responsive="0"]').length > 0) {
                                var t = a.attr("data-delay");
                                "fade-in-from-left" == a.attr("data-animation") || "fade-in-from-right" == a.attr("data-animation") ? a.delay(t).transition({
                                    opacity: 1,
                                    x: "0px"
                                }, x, C) : "fade-in-from-bottom" == a.attr("data-animation") ? a.delay(t).transition({
                                    opacity: 1,
                                    y: "0px"
                                }, x, C) : "fade-in" == a.attr("data-animation") ? a.delay(t).transition({
                                    opacity: 1
                                }, x, C) : "grow-in" == a.attr("data-animation") ? setTimeout(function () {
                                    a.transition({
                                        scale: 1,
                                        opacity: 1
                                    }, x, C)
                                }, t) : "flip-in" == a.attr("data-animation") ? setTimeout(function () {
                                    a.transition({
                                        rotateY: 0,
                                        opacity: 1
                                    }, x, C)
                                }, t) : "flip-in-vertical" == a.attr("data-animation") && setTimeout(function () {
                                    a.transition({
                                        rotateX: 0,
                                        opacity: 1
                                    }, x, C)
                                }, t), a.addClass("animated-in")
                            }
                            n.destroy()
                        }
                    },
                    offset: t
                })
        }), e(H + ".nectar_cascading_images").each(function () {
            var a = e(this),
                n = e(this).is("[data-animation-timing]") ? e(this).attr("data-animation-timing") : 175;
            n = parseInt(n);
            var r = new Waypoint({
                element: a,
                handler: function () {
                    a.parents(".wpb_tab").length > 0 && "hidden" == a.parents(".wpb_tab").css("visibility") || a.hasClass("animated-in") ? r.destroy() : ((!O.usingMobileBrowser || e('body[data-responsive="0"]').length > 0) && (a.find(".cascading-image").each(function (t) {
                        var a = e(this);
                        "flip-in" == a.attr("data-animation") || "flip-in-vertical" == a.attr("data-animation") ? setTimeout(function () {
                            a.find(".inner-wrap").css({
                                opacity: 1,
                                transform: "rotate(0deg) translateZ(0px)"
                            })
                        }, t * n) : setTimeout(function () {
                            a.find(".inner-wrap").css({
                                opacity: 1,
                                transform: "translateX(0px) translateY(0px) scale(1,1) translateZ(0px)"
                            })
                        }, t * n)
                    }), a.addClass("animated-in")), r.destroy())
                },
                offset: t
            })
        }), e(H + '.col.has-animation:not([data-animation*="reveal"]), ' + H + '.wpb_column.has-animation:not([data-animation*="reveal"]), ' + H + ".nectar-fancy-box.has-animation").each(function (a) {
            var n = e(this);
            (n.is('[data-animation="flip-in-vertical"]') || n.is('[data-animation="slight-twist"]')) && n.parents(".col.span_12").addClass("flip-in-vertical-wrap");
            var r = new Waypoint({
                element: n,
                handler: function () {
                    if (n.parents(".wpb_tab").length > 0 && "hidden" == n.parents(".wpb_tab").css("visibility") || n.hasClass("animated-in")) r.destroy();
                    else {
                        if (!O.usingMobileBrowser || e('body[data-responsive="0"]').length > 0) {
                            var t = n.attr("data-delay");
                            "fade-in-from-left" == n.attr("data-animation") || "fade-in-from-right" == n.attr("data-animation") ? k[a] = setTimeout(function () {
                                n.transition({
                                    opacity: 1,
                                    x: "0px"
                                }, x, C)
                            }, t) : "fade-in-from-bottom" == n.attr("data-animation") ? k[a] = setTimeout(function () {
                                n.transition({
                                    opacity: 1,
                                    y: "0px"
                                }, x, C)
                            }, t) : "fade-in" == n.attr("data-animation") ? k[a] = setTimeout(function () {
                                n.transition({
                                    opacity: 1
                                }, x, C)
                            }, t) : "grow-in" == n.attr("data-animation") || "zoom-out" == n.attr("data-animation") ? k[a] = setTimeout(function () {
                                n.transition({
                                    scale: 1,
                                    opacity: 1
                                }, x, C)
                            }, t) : "flip-in" == n.attr("data-animation") ? k[a] = setTimeout(function () {
                                n.transition({
                                    rotateY: 0,
                                    opacity: 1
                                }, x, C)
                            }, t) : "flip-in-vertical" == n.attr("data-animation") ? k[a] = setTimeout(function () {
                                n.transition({
                                    rotateX: 0,
                                    y: 0,
                                    opacity: 1
                                }, x, C)
                            }, t) : "slight-twist" == n.attr("data-animation") && (k[a] = setTimeout(function () {
                                anime({
                                    targets: n[0],
                                    rotateY: [20, 0],
                                    rotateZ: [-4, 0],
                                    opacity: 1,
                                    easing: C,
                                    duration: x
                                })
                            }, t)), n.hasClass("boxed") && (n.addClass("no-pointer-events"), setTimeout(function () {
                                n.removeClass("no-pointer-events")
                            }, parseInt(x) + parseInt(t) + 30)), n.addClass("animated-in")
                        }
                        r.destroy()
                    }
                },
                offset: t
            })
        }), e(H + '.wpb_column.has-animation[data-animation*="reveal"]').each(function () {
            var t = e(this),
                n = new Waypoint({
                    element: t,
                    handler: function () {
                        if (t.parents(".wpb_tab").length > 0 && "hidden" == t.parents(".wpb_tab").css("visibility") || t.hasClass("animated-in")) n.destroy();
                        else {
                            var a = t.attr("data-delay");
                            (!O.usingMobileBrowser || e('body[data-responsive="0"]').length > 0) && ("reveal-from-bottom" == t.attr("data-animation") || "reveal-from-top" == t.attr("data-animation") ? setTimeout(function () {
                                t.hasClass("animated-in") && t.find(".column-inner-wrap, .column-inner").transition({
                                    y: 0
                                }, x, C, function () {
                                    t.find(".column-inner-wrap, .column-inner").addClass("no-transform")
                                })
                            }, a) : "reveal-from-right" != t.attr("data-animation") && "reveal-from-left" != t.attr("data-animation") || setTimeout(function () {
                                t.hasClass("animated-in") && t.find(".column-inner-wrap, .column-inner").transition({
                                    x: 0
                                }, x, C, function () {
                                    t.find(".column-inner-wrap, .column-inner").addClass("no-transform")
                                })
                            }, a), t.addClass("animated-in")), n.destroy()
                        }
                    },
                    offset: a
                })
        })
    }

    function ue() {
        var t = e("#nectar_fullscreen_rows").length > 0 ? "200%" : "bottom-in-view";
        e(H + ".nectar-split-heading").each(function () {
            var a = e(this),
                n = new Waypoint({
                    element: a,
                    handler: function () {
                        a.parents(".wpb_tab").length > 0 && "hidden" == a.parents(".wpb_tab").css("visibility") || a.hasClass("animated-in") ? n.destroy() : ((!O.usingMobileBrowser || e('body[data-responsive="0"]').length > 0) && (a.find(".heading-line").each(function (t) {
                            e(this).find("> div").delay(70 * t).transition({
                                y: "0px"
                            }, x, C)
                        }), a.addClass("animated-in")), n.destroy())
                    },
                    offset: t
                })
        })
    }

    function ge() {
        var t = e("#nectar_fullscreen_rows").length > 0 ? "200%" : "bottom-in-view";
        e(H + '.divider-small-border[data-animate="yes"], ' + H + '.divider-border[data-animate="yes"]').each(function () {
            var a = e(this).hasClass("divider-small-border") ? 1300 : 1500,
                n = e(this),
                r = new Waypoint({
                    element: n,
                    handler: function () {
                        n.parents(".wpb_tab").length > 0 && "hidden" == n.parents(".wpb_tab").css("visibility") || n.hasClass("completed") ? r.destroy() : (n.each(function () {
                            e(this).css({
                                transform: "scale(0,1)",
                                visibility: "visible"
                            });
                            var t = e(this);
                            t.delay(t.attr("data-animation-delay")).transition({
                                transform: "scale(1, 1)"
                            }, a, "cubic-bezier(.18,1,.22,1)")
                        }), n.addClass("completed"), r.destroy())
                    },
                    offset: t
                })
        })
    }

    function me() {
        e('body.material[data-slide-out-widget-area-style="slide-out-from-right"]').length > 0 && pe(),
            function () {
                if (e("body.material").length > 0 && 0 == e('body[data-slide-out-widget-area-style="slide-out-from-right-hover"]').length) {
                    if (0 == e('body[data-slide-out-widget-area-style*="fullscreen"]').length && 0 == e("#mobile-menu").length) {
                        var t = e("header#top nav ul .slide-out-widget-area-toggle a > span > i").clone();
                        t.addClass("hover-effect"), e("header#top nav ul .slide-out-widget-area-toggle a > span").append(t);
                        var a = e("header#top .slide-out-widget-area-toggle.mobile-icon a > span > i").clone();
                        a.addClass("hover-effect"), e("header#top .slide-out-widget-area-toggle.mobile-icon a > span").append(a)
                    }
                    e('body:not([data-slide-out-widget-area-style="slide-out-from-right"]) header#top .slide-out-widget-area-toggle a > span').append(e('<span class="close-wrap"> <span class="close-line close-line1"></span> <span class="close-line close-line2"></span> </span>'))
                }
                e("body.material #boxed").length > 0 && e('body[data-slide-out-widget-area-style="slide-out-from-right-hover"]').length > 0 && e("#ajax-content-wrap > .slide-out-widget-area-toggle.slide-out-hover-icon-effect").insertAfter(".ocm-effect-wrap");
                e("body.material").length > 0 && 0 == e('body[data-slide-out-widget-area-style*="fullscreen"]').length && (e("body.material #slide-out-widget-area.slide-out-from-right .slide_out_area_close").insertAfter(".ocm-effect-wrap"), e("#slide-out-widget-area-bg").insertAfter(".ocm-effect-wrap"), o.insertAfter(".ocm-effect-wrap"))
            }(),
            function () {
                if (e('body.material[data-header-search="true"]').length > 0 || e("body.material .ocm-effect-wrap").length > 0) {
                    var a, n = !1,
                        r = 0,
                        i = O.winW,
                        o = O.winH;
                    t.addEventListener("orientationchange", function () {
                        r = 1
                    }), s.on("resize", function () {
                        O.usingMobileBrowser ? (s.width() != i && s.height != o || 1 === r) && (i = O.winW, o = O.winH, r = 0, n = !0) : n = !0, n && (clearTimeout(a), e('body[data-slide-out-widget-area-style="slide-out-from-right"] > a.slide_out_area_close, .material #header-outer, .ocm-effect-wrap, .ocm-effect-wrap-shadow').addClass("no-material-transition"), a = setTimeout(function () {
                            e('body[data-slide-out-widget-area-style="slide-out-from-right"] > a.slide_out_area_close, .material #header-outer, .ocm-effect-wrap, .ocm-effect-wrap-shadow').removeClass("no-material-transition")
                        }, 250), pe(), n = !1)
                    })
                }
            }(), s.on("resize", be)
    }

    function fe() {
        var t, a = 0;
        e("#slide-out-widget-area > .widget").each(function () {
            a += e(this).height()
        }), t = o.height() - 25 - e(".bottom-meta-wrap").outerHeight(!0) - a > e("#slide-out-widget-area .off-canvas-menu-container:last-child").height() ? o.height() - 25 - e(".bottom-meta-wrap").outerHeight(!0) - a : e("#slide-out-widget-area .off-canvas-menu-container:last-child").height(), e("#slide-out-widget-area .inner").css({
            height: "auto",
            "min-height": t
        }), e("#slide-out-widget-area > .inner .off-canvas-menu-container").transition({
            y: "-" + e("#slide-out-widget-area > .inner .off-canvas-menu-container:last-child").height() / 2 + "px"
        }, 0)
    }

    function pe() {
        e("#slide-out-widget-area.slide-out-from-right").css({
            "padding-top": .1 * s.height(),
            "padding-bottom": .1 * s.height()
        }), we()
    }

    function be() {
        e(".ocm-effect-wrap.material-ocm-open").length > 0 && (e(".ocm-effect-wrap").css({
            height: s.height()
        }), e(".ocm-effect-wrap-inner").css({
            "padding-top": O.adminBarHeight
        }))
    }

    function ve() {
        "separate-dropdown-parent-link" == (e("#slide-out-widget-area[data-dropdown-func]").length > 0 ? o.attr("data-dropdown-func") : "default") && e("#slide-out-widget-area .off-canvas-menu-container li.menu-item-has-children").append('<span class="ocm-dropdown-arrow"><i class="fa fa-angle-down"></i></span>')
    }

    function we() {
        O.winW < 1e3 || e("body > #boxed").length > 0 || e(".ocm-effect-wrap-inner > #boxed").length > 0 ? (e("#slide-out-widget-area.fullscreen .off-canvas-social-links, #slide-out-widget-area.fullscreen-alt .off-canvas-social-links").appendTo("#slide-out-widget-area .inner"), e("#slide-out-widget-area.fullscreen .bottom-text, #slide-out-widget-area.fullscreen-alt .bottom-text").appendTo("#slide-out-widget-area .inner")) : (e("#slide-out-widget-area.fullscreen .off-canvas-social-links,#slide-out-widget-area.fullscreen-alt .off-canvas-social-links").appendTo("#slide-out-widget-area .inner-wrap"), e("#slide-out-widget-area.fullscreen .bottom-text, #slide-out-widget-area.fullscreen-alt .bottom-text").appendTo("#slide-out-widget-area .inner-wrap")), e('#slide-out-widget-area[class*="fullscreen"] .inner').height() >= s.height() - 100 ? e('#slide-out-widget-area[class*="fullscreen"] .inner, #slide-out-widget-area[class*="fullscreen"]').addClass("overflow-state") : e('#slide-out-widget-area[class*="fullscreen"] .inner, #slide-out-widget-area[class*="fullscreen"]').removeClass("overflow-state"), e('#slide-out-widget-area[class*="fullscreen"] .inner').transition({
            y: "-" + e('#slide-out-widget-area[class*="fullscreen"] .inner').height() / 2 + "px"
        }, 0), e(".slide-out-from-right.open .off-canvas-menu-container.mobile-only").length > 0 && 0 == e("body.mobile").length && e("#slide-out-widget-area .slide_out_area_close").trigger("click")
    }

    function ye() {
        if (fe(), O.usingMobileBrowser && e("#slide-out-widget-area.open").length > 0) ! function () {
            o.css({
                transform: "translate3d(341px,0,0)"
            }).removeClass("open"), d.removeClass("style-slide-out-from-right"), e(".slide-out-hover-icon-effect .lines-button").removeClass("unhidden-line").addClass("no-delay"), 0 == e('#header-outer[data-permanent-transparent="1"]').length && (d.removeClass("no-bg-color"), e("#header-outer header").removeClass("all-hidden"));
            0 == e('#header-outer[data-remove-fixed="1"]').length && 0 == e("body.mobile").length && I && (1 == w ? (s.off("scroll.headerResizeEffect"), 0 == O.scrollTop ? (s.on("scroll.headerResizeEffect", He), e('#header-outer[data-full-width="true"][data-transparent-header="true"]').length > 0 && g.length > 0 && 1 == I && e("#header-outer.pseudo-data-transparent").length > 0 && e('#header-outer[data-full-width="true"] header > .container').stop(!0, !0).animate({
                padding: "0"
            }, {
                queue: !1,
                duration: 250,
                easing: "easeOutCubic"
            })) : s.on("scroll.headerResizeEffect", Ie)) : (s.off("scroll.headerResizeEffectOpaque"), s.on("scroll.headerResizeEffectOpaque", Fe)))
        }();
        else {
            if (o.css({
                    transform: "translate3d(0,0,0)"
                }).addClass("open"), e("header#top .container .span_9 > .slide-out-widget-area-toggle").length > 0) {
                var t, a = e(".slide-out-hover-icon-effect"),
                    n = O.secondaryHeaderHeight;
                if (e("body.mobile").length > 0) a.css({
                    top: e("header#top .span_9 > .slide-out-widget-area-toggle a").offset().top - O.scrollTop,
                    right: parseInt(e("#header-outer header > .container").css("padding-right")) + 1
                });
                else if (I) {
                    var r = e('#header-outer[data-has-menu="false"]').length > 0 ? 2 : 1;
                    a.css({
                        top: O.adminBarHeight + n + parseInt(e("header#top nav >ul .slide-out-widget-area-toggle a").css("padding-top")),
                        right: 29 + r
                    })
                } else e('#header-outer[data-format="centered-menu-bottom-bar"]').length > 0 ? (t = "block" == e("header#top .span_9 > .slide-out-widget-area-toggle").css("display") ? e("header#top .span_9 > .slide-out-widget-area-toggle.mobile-icon").position() : e("header#top .span_3 .right-side .slide-out-widget-area-toggle > div").offset(), a.css({
                    top: parseInt(t.top) - O.scrollTop,
                    right: parseInt(e("#header-outer header >.container").css("padding-right")) + 2
                })) : (t = i.hasClass("ascend") ? "block" == e("header#top .span_9 > .slide-out-widget-area-toggle").css("display") ? e("header#top .span_9 > .slide-out-widget-area-toggle.mobile-icon").position() : e("header#top nav .buttons .slide-out-widget-area-toggle > div a > span").position() : "block" == e("header#top .span_9 > .slide-out-widget-area-toggle").css("display") ? e("header#top .span_9 > .slide-out-widget-area-toggle.mobile-icon").position() : e("header#top nav .buttons .slide-out-widget-area-toggle > div").position(), e("#header-secondary-outer.hide-up").length > 0 && (n = 0), a.css({
                    top: O.adminBarHeight + n + parseInt(t.top),
                    right: parseInt(e("#header-outer header >.container").css("padding-right")) + 2
                }))
            }
            e(".slide-out-hover-icon-effect .lines-button").removeClass("no-delay").addClass("unhidden-line"), 0 == e('#header-outer[data-permanent-transparent="1"]').length && 0 == e("#nectar_fullscreen_rows").length && !O.usingFrontEndEditor && O.winW > 1e3 && (0 == O.scrollTop && e("#header-outer.transparent").length > 0 || 0 == e("body.mobile").length && I && (d.attr("data-transparent", "true").addClass("no-bg-color").addClass("slide-out-hover"), e("#header-outer header, #header-outer > .cart-outer").addClass("all-hidden")), 0 == e('#header-outer[data-remove-fixed="1"]').length && 0 == e("body.mobile").length && I && (1 == w ? (s.off("scroll", Ie), s.off("scroll", He)) : (s.off("scroll", Fe), s.off("scroll", Oe)))), O.usingMobileBrowser || s.on("mousemove.rightOffsetCheck", Ce)
        }
    }

    function Ce(t) {
        var a = s.width();
        t.clientX < a - 340 - f && o.hasClass("mouse-accessed") && (o.removeClass("mouse-accessed"), s.off("mousemove.rightOffsetCheck", Ce), o.css({
            transform: "translate3d(341px,0,0)"
        }).removeClass("open"), d.removeClass("style-slide-out-from-right"), e(".slide-out-hover-icon-effect .lines-button").removeClass("unhidden-line").addClass("no-delay"), 0 == e('#header-outer[data-permanent-transparent="1"]').length && (0 == e('#header-outer[data-remove-fixed="1"]').length && 0 == e("body.mobile").length && I && 0 == e("body.mobile").length && (d.removeClass("no-bg-color"), e("#header-outer header, #header-outer > .cart-outer").removeClass("all-hidden")), 0 == e('#header-outer[data-remove-fixed="1"]').length && 0 == e("body.mobile").length && I && (1 == w ? (s.off("scroll.headerResizeEffect"), 0 == O.scrollTop ? (s.on("scroll.headerResizeEffect", He), e('#header-outer[data-full-width="true"][data-transparent-header="true"]').length > 0 && g.length > 0 && 1 == I && e("#header-outer.pseudo-data-transparent").length > 0 && e('#header-outer[data-full-width="true"] header > .container').stop(!0, !0).animate({
            padding: "0"
        }, {
            queue: !1,
            duration: 250,
            easing: "easeOutCubic"
        })) : s.on("scroll.headerResizeEffect", Ie)) : (s.off("scroll.headerResizeEffectOpaque"), s.on("scroll.headerResizeEffectOpaque", Fe)))))
    }

    function xe() {
        var t = g.length > 0 && 0 == e("body.mobile").length ? g.height() : 0;
        if (0 == e("body.material").length) {
            if (e("#slide-out-widget-area .inner").css({
                    height: "auto",
                    "min-height": o.height() - 25 - e(".bottom-meta-wrap").height()
                }), 0 == e("#boxed").length) {
                e(".container-wrap, .home-wrap, #footer-outer:not(#nectar_fullscreen_rows #footer-outer), .nectar-box-roll, #page-header-wrap .page-header-bg-image, #page-header-wrap .nectar-video-wrap, #page-header-wrap .mobile-video-image, #page-header-wrap #page-header-bg > .container, .page-header-no-bg, div:not(.container) > .project-title").stop(!0).transition({
                    x: "-300px"
                }, 700, "easeInOutCubic");
                var a = function () {
                    var t = e("body[data-header-breakpoint]").length > 0 && "1000" != i.attr("data-header-breakpoint") ? parseInt(i.attr("data-header-breakpoint")) : 1e3,
                        a = !1;
                    return 1e3 != t && 0 == e('body[data-user-set-ocm="1"][data-slide-out-widget-area-style="slide-out-from-right-hover"]').length && O.winW > 1e3 && O.winW <= t && (a = !0), a
                }();
                0 == e('#header-outer[data-format="centered-logo-between-menu"]').length || a ? 0 == e('#header-outer[data-transparency-option="1"]').length || e('#header-outer[data-transparency-option="1"]').length > 0 && 0 == e('#header-outer[data-full-width="true"]').length || e("body.mobile").length > 0 ? d.stop(!0).css("transform", "translateY(0)").transition({
                    x: "-" + (300 + t) + "px"
                }, 700, "easeInOutCubic") : d.stop(!0).css("transform", "translateY(0)").transition({
                    x: "-" + (300 + t) + "px",
                    "background-color": "transparent",
                    "border-bottom": "1px solid rgba(255,255,255,0.22)"
                }, 700, "easeInOutCubic") : e("#header-outer header#top nav > ul.buttons, body:not(.material) #header-outer .cart-outer .cart-menu-wrap").transition({
                    x: "-300px"
                }, 700, "easeInOutCubic")
            }
            if (o.stop(!0).transition({
                    x: "-" + t + "px"
                }, 700, "easeInOutCubic").addClass("open"), 0 == e("#boxed").length && e('#header-outer[data-full-width="true"]').length > 0 && !i.hasClass("mobile") && (d.addClass("highzI"), e("#ascrail2000").addClass("z-index-adj"), 0 == e('#header-outer[data-format="centered-logo-between-menu"]').length && 0 == f && e("header#top #logo").stop(!0).transition({
                    x: 300 + t + "px"
                }, 700, "easeInOutCubic"), e("header#top .slide-out-widget-area-toggle .lines-button").addClass("close"), e("body #header-outer nav > ul > li > a").css({
                    "margin-bottom": "0"
                })), d.addClass("style-slide-out-from-right"), l.css({
                    height: "100%",
                    width: "100%"
                }).stop(!0).transition({
                    opacity: 1
                }, 700, "easeInOutCubic", function () {
                    e(".slide-out-widget-area-toggle:not(.std-menu) > div > a").removeClass("animating")
                }), 0 == e('#header-outer[data-format="centered-logo-between-menu"]').length) {
                var n = e("#logo img:visible").length > 0 ? e("#logo img:visible").width() : e("#logo").width();
                e("header#top nav > .sf-menu").offset().left - n - 300 < 20 && d.addClass("hidden-menu")
            } else d.addClass("hidden-menu-items");
            0 == e('#header-outer[data-remove-fixed="1"]').length && O.winW > 1e3 && (1 == I && 1 == w ? (d.stop(!0).transition({
                y: "0"
            }, 0).addClass("transparent").css("transition", "transform"), "true" != d.attr("data-transparent-header") && d.attr("data-transparent-header", "true").addClass("pseudo-data-transparent"), s.off("scroll", Ie), s.off("scroll", He)) : 1 == I && (d.addClass("transparent"), s.off("scroll", Fe), s.off("scroll", Oe), "true" != d.attr("data-transparent-header") && d.attr("data-transparent-header", "true").addClass("pseudo-data-transparent")))
        } else e("body.material").length > 0 && (u.length > 0 && e(".ocm-effect-wrap #ajax-loading-screen").length > 0 && u.insertBefore(".ocm-effect-wrap"), O.scrollTop > 40 && e('body[data-hhun="1"] #header-secondary-outer').addClass("hidden"), setTimeout(function () {
            e(".slide-out-widget-area-toggle:not(.std-menu) > div > a").removeClass("animating")
        }, 300), e("#slide-out-widget-area, #slide-out-widget-area-bg, #header-outer .slide-out-widget-area-toggle").addClass("material-open"), e('body:not(.mobile) #header-outer[data-format="centered-menu-bottom-bar"][data-condense="true"]').length > 0 && "none" != e('#header-outer[data-format="centered-menu-bottom-bar"] .span_9').css("display") && (e("#header-outer:not(.fixed-menu)").css("top", O.adminBarHeight - O.scrollTop + "px"), h.length > 0 && e("#header-outer.fixed-menu").length > 0 && h.css("visibility", "hidden")), e("#ajax-content-wrap").css({
            position: "relative",
            top: "-" + O.scrollTop + "px"
        }), e(".ocm-effect-wrap-inner").css({
            "padding-top": O.adminBarHeight
        }), e("#fp-nav").addClass("material-ocm-open"), i.addClass("material-ocm-open"), i.addClass("nectar-no-flex-height"), e(".ocm-effect-wrap").css({
            height: O.winH
        }), setTimeout(function () {
            e(".ocm-effect-wrap").addClass("material-ocm-open")
        }, 40), e("body > .slide_out_area_close").addClass("follow-body"), e('#header-outer:not([data-format="left-header"]) header#top .slide-out-widget-area-toggle a').addClass("effect-shown"), e('body[data-hhun="1"]:not(.no-scroll):not(.mobile) #header-outer[data-permanent-transparent="false"]:not(.detached):not(.parallax-contained):not(.at-top-before-box)').css({
            transition: "none",
            transform: "translateY(" + O.adminBarHeight + "px)"
        }), setTimeout(function () {
            e("body > .slide_out_area_close").addClass("material-ocm-open")
        }, 350))
    }

    function _e() {
        i.on("click", ".slide-out-widget-area-toggle:not(.std-menu) a.closed:not(.animating)", function () {
            return !("true" == F.animating || e(".slide-out-from-right-hover").length > 0) && (d.removeClass("no-transition"), o.hasClass("slide-out-from-right") ? xe() : o.hasClass("fullscreen") ? function () {
                e("body.material").length > 0 && e("header#top .slide-out-widget-area-toggle a").addClass("menu-push-out");
                var t = 0,
                    a = 0;
                O.scrollTop + s.height() > e(".blurred-wrap").height() && 0 == e("#nectar_fullscreen_rows").length && (e("body,html").stop().animate({
                    scrollTop: e(".blurred-wrap").height() - s.height()
                }, 600, "easeInOutCubic"), t = 550, a = 200), e("header#top .slide-out-widget-area-toggle:not(.std-menu) .lines-button").addClass("close"), setTimeout(function () {
                    e(".blurred-wrap").addClass("blurred")
                }, t), e("#slide-out-widget-area.fullscreen").show().addClass("open"), 0 == e(".nectar-social.fixed").length && je(), e(".container-wrap").addClass("no-shadow"), d.stop(!0).css("transform", "translateY(0)"), setTimeout(function () {
                    e(".off-canvas-menu-container .menu > li").each(function (t) {
                        e(this).delay(50 * t).transition({
                            y: 0,
                            opacity: 1
                        }, 800, "easeOutExpo")
                    }), e("#slide-out-widget-area.fullscreen .widget").each(function (t) {
                        e(this).delay(100 * t).transition({
                            y: 0,
                            opacity: 1
                        }, 800, "easeOutExpo")
                    })
                }, 370 + a), setTimeout(function () {
                    e("#slide-out-widget-area .off-canvas-social-links").addClass("line-shown"), e("#slide-out-widget-area .off-canvas-social-links li").each(function (t) {
                        e(this).delay(50 * t).transition({
                            scale: 1
                        }, 400, "easeOutCubic")
                    }), e("#slide-out-widget-area .bottom-text").transition({
                        opacity: .7
                    }, 400, "easeOutCubic")
                }, 750 + a), setTimeout(function () {
                    var t = e("body.mobile").length > 0 ? "easeOutCubic" : "easeInOutQuint";
                    l.css({
                        height: "100%",
                        width: "100%"
                    }).show().stop(!0).transition({
                        y: "0%"
                    }, 920, t, function () {
                        e(".slide-out-widget-area-toggle > div > a").removeClass("animating")
                    })
                }, 50 + a), we(), e('.mobile #header-outer[data-permanent-transparent="false"]').length > 0 && e(".container-wrap").hasClass("no-scroll") && e("#ajax-content-wrap").addClass("at-content"), (e('.mobile #header-outer[data-permanent-transparent="false"]').length > 0 || 0 == e(".mobile").length && 0 == e("#header-outer.transparent").length) && e("#slide-out-widget-area.fullscreen .inner-wrap").css("padding-top", d.height())
            }() : o.hasClass("fullscreen-alt") ? function () {
                e("body.material").length > 0 && e("header#top .slide-out-widget-area-toggle a").addClass("menu-push-out"), e("header#top .slide-out-widget-area-toggle:not(.std-menu) .lines-button").addClass("close"), e("#slide-out-widget-area.fullscreen-alt").show().addClass("open"), l.addClass("open"), e('body > div[class*="body-border"]').css("z-index", "9995"), e(".off-canvas-menu-container .menu").transition({
                    y: "0px",
                    opacity: 1
                }, 0), 0 == e(".nectar-social.fixed").length && je(), e("#header-outer.transparent").length > 0 && g.length > 0 && (e(".admin-bar #slide-out-widget-area-bg.fullscreen-alt").css({
                    "padding-top": g.outerHeight(!0) + 32 + "px"
                }), e("body:not(.admin-bar) #slide-out-widget-area-bg.fullscreen-alt").css({
                    "padding-top": g.outerHeight(!0) + "px"
                })), d.stop(!0).css("transform", "translateY(0)"), e("#logo .starting-logo").length > 0 && s.width() > 1e3 && 0 == e('#header-outer[data-format="centered-menu-bottom-bar"].fixed-menu').length && 0 == e('body.material #header-outer[data-condense="true"]').length && !O.usingFrontEndEditor && (d.stop(!0).css("transform", "translateY(0)").addClass("transparent"), "true" != d.attr("data-transparent-header") && d.attr("data-transparent-header", "true").addClass("pseudo-data-transparent")), e(".off-canvas-menu-container .clip-wrap").css("transition-duration", "0s"), setTimeout(function () {
                    e(".off-canvas-menu-container .menu > li").each(function (t) {
                        e(this).delay(50 * t).transition({
                            y: 0,
                            opacity: 1
                        }, 750, "easeOutCubic").addClass("no-pointer-events")
                    }), setTimeout(function () {
                        e(".off-canvas-menu-container .menu > li").removeClass("no-pointer-events"), e(".off-canvas-menu-container .clip-wrap").css("transition-duration", ".45s")
                    }, 500), e("#slide-out-widget-area.fullscreen-alt .widget").each(function (t) {
                        e(this).delay(100 * t).transition({
                            y: 0,
                            opacity: 1
                        }, 650, "easeOutCubic")
                    })
                }, 200), setTimeout(function () {
                    e("#slide-out-widget-area .off-canvas-social-links").addClass("line-shown"), e("#slide-out-widget-area .off-canvas-social-links li").css("opacity", "1").each(function (t) {
                        e(this).delay(50 * t).transition({
                            scale: 1
                        }, 400, "easeOutCubic")
                    }), e("#slide-out-widget-area .bottom-text").transition({
                        opacity: 1
                    }, 600, "easeOutCubic")
                }, 200);
                var t = .4;
                l.hasClass("solid") && (t = 1), l.hasClass("dark") && (t = .97), l.hasClass("medium") && (t = .6), l.hasClass("light") && (t = .4), l.removeClass("no-transition"), l.addClass("padding-removed").css({
                    height: "100%",
                    width: "100%",
                    left: "0",
                    opacity: t
                }), setTimeout(function () {
                    e(".slide-out-widget-area-toggle > div > a").removeClass("animating")
                }, 600), we(), e('.mobile #header-outer[data-permanent-transparent="false"]').length > 0 && e(".container-wrap").hasClass("no-scroll") && e("#ajax-content-wrap").addClass("at-content"), (e('.mobile #header-outer[data-permanent-transparent="false"]').length > 0 || 0 == e(".mobile").length && 0 == e("#header-outer.transparent").length) && e("#slide-out-widget-area.fullscreen-alt .inner-wrap").css("padding-top", d.height())
            }() : e("#header-outer #mobile-menu").length > 0 && (e("#mobile-menu").show(), e("header#top .slide-out-widget-area-toggle:not(.std-menu) .lines-button").addClass("close"), e("body.material").length > 0 && e("header#top .slide-out-widget-area-toggle a").addClass("menu-push-out"), setTimeout(function () {
                e(".slide-out-widget-area-toggle > div > a").removeClass("animating")
            }, 100)), 0 == e("#header-outer #mobile-menu").length && (d.removeClass("side-widget-closed").addClass("side-widget-open"), e('#header-outer[data-transparency-option="1"]').length > 0 && 0 == e("#boxed").length && e('#header-outer[data-full-width="true"]').length > 0 && !O.usingFrontEndEditor && 0 == e('body.material[data-slide-out-widget-area-style="slide-out-from-right"]').length && 0 == e('body.material #header-outer[data-condense="true"]').length && d.addClass("transparent"), e("#header-outer.dark-slide.transparent").length > 0 && 0 == e("#boxed").length && 0 == e("body.material-ocm-open").length && d.removeClass("dark-slide").addClass("temp-removed-dark-slide")), e(".slide-out-widget-area-toggle > div > a").removeClass("closed").addClass("open"), e(".slide-out-widget-area-toggle > div > a").addClass("animating"), !1)
        }), i.on("click", ".slide-out-widget-area-toggle:not(.std-menu) a.open:not(.animating), #slide-out-widget-area .slide_out_area_close, > .slide_out_area_close, #slide-out-widget-area-bg.slide-out-from-right, .material-ocm-open #ajax-content-wrap", function (t) {
            if (!(null == t.originalEvent && 0 == e(".slide_out_area_close.non-human-allowed").length && 0 == e(".slide-out-widget-area-toggle.mobile-icon a.non-human-allowed").length || e(".slide-out-widget-area-toggle:not(.std-menu) a.animating").length > 0)) return d.removeClass("no-transition"), e(".slide-out-widget-area-toggle:not(.std-menu) a").removeClass("open").addClass("closed"), e(".slide-out-widget-area-toggle:not(.std-menu) a").addClass("animating"), o.hasClass("slide-out-from-right") ? function () {
                if (0 == e("body.material").length) {
                    if (e(".container-wrap, .home-wrap, #footer-outer:not(#nectar_fullscreen_rows #footer-outer), .nectar-box-roll, #page-header-wrap .page-header-bg-image,  #page-header-wrap .nectar-video-wrap, #page-header-wrap .mobile-video-image, #page-header-wrap #page-header-bg > .container, .page-header-no-bg, div:not(.container) > .project-title").stop(!0).transition({
                            x: "0px"
                        }, 700, "easeInOutCubic"), e('#header-outer[data-transparency-option="1"]').length > 0 && 0 == e("#boxed").length) {
                        var t = e("#header-outer[data-current-row-bg-color]").length > 0 ? d.attr("data-current-row-bg-color") : d.attr("data-user-set-bg");
                        d.stop(!0).transition({
                            x: "0px",
                            "background-color": t
                        }, 700, "easeInOutCubic")
                    } else d.stop(!0).transition({
                        x: "0px"
                    }, 700, "easeInOutCubic");
                    o.stop(!0).transition({
                        x: "301px"
                    }, 700, "easeInOutCubic").removeClass("open"), 0 == e("#boxed").length && e('#header-outer[data-full-width="true"]').length > 0 && (d.removeClass("highzI"), e("header#top #logo").stop(!0).transition({
                        x: "0px"
                    }, 700, "easeInOutCubic"), e(".lines-button").removeClass("close")), e('#header-outer[data-format="centered-logo-between-menu"]').length > 0 && e("#header-outer header#top nav > ul.buttons, #header-outer .cart-outer .cart-menu-wrap").stop(!0).transition({
                        x: "0px"
                    }, 700, "easeInOutCubic"), l.stop(!0).transition({
                        opacity: 0
                    }, 700, "easeInOutCubic", function () {
                        e(".slide-out-widget-area-toggle a").removeClass("animating"), e(this).css({
                            height: "1px",
                            width: "1px"
                        }), 0 == e('#header-outer[data-remove-fixed="1"]').length && (d.hasClass("parallax-contained") && O.scrollTop > 0 && 0 == e('#header-outer[data-permanent-transparent="1"]').length ? d.removeClass("parallax-contained").addClass("detached").removeClass("transparent") : (0 == O.scrollTop && e('body[data-hhun="1"]').length > 0 && e('#page-header-bg[data-parallax="1"]').length > 0 || 0 == O.scrollTop && e('body[data-hhun="1"]').length > 0 && e(".parallax_slider_outer").length > 0) && (e('#header-outer[data-transparency-option="1"]').length > 0 && d.addClass("transparent"), d.addClass("parallax-contained").removeClass("detached"))), e(".container-wrap").css("transform", "none")
                    }), d.removeClass("style-slide-out-from-right"), 0 == e('#header-outer[data-remove-fixed="1"]').length && (1 == I && 1 == w && O.winW > 1e3 ? (s.off("scroll.headerResizeEffect"), 0 == O.scrollTop ? (s.on("scroll.headerResizeEffect", He), e('#header-outer[data-full-width="true"][data-transparent-header="true"]').length > 0 && g.length > 0 && 1 == I && e("#header-outer.pseudo-data-transparent").length > 0 && e('#header-outer[data-full-width="true"] header > .container').stop(!0, !0).animate({
                        padding: "0"
                    }, {
                        queue: !1,
                        duration: 250,
                        easing: "easeOutCubic"
                    })) : s.on("scroll.headerResizeEffect", Ie), d.hasClass("pseudo-data-transparent") && d.attr("data-transparent-header", "false").removeClass("pseudo-data-transparent").removeClass("transparent"), d.css("transition", "transform")) : 1 == I && O.winW > 1e3 && (s.off("scroll.headerResizeEffectOpaque"), s.on("scroll.headerResizeEffectOpaque", Fe), d.css("transition", "transform"), d.hasClass("pseudo-data-transparent") && d.attr("data-transparent-header", "false").removeClass("pseudo-data-transparent").removeClass("transparent")))
                } else e("body.material").length > 0 && (o.removeClass("open"), e("#slide-out-widget-area, #slide-out-widget-area-bg, #header-outer .slide-out-widget-area-toggle").removeClass("material-open"), e(".ocm-effect-wrap, .ocm-effect-wrap-shadow, body > .slide_out_area_close, #fp-nav").removeClass("material-ocm-open"), e("body > .slide_out_area_close").removeClass("follow-body"), setTimeout(function () {
                    e(".slide-out-widget-area-toggle a").removeClass("animating"), i.removeClass("material-ocm-open"), i.removeClass("nectar-no-flex-height"), e(".ocm-effect-wrap").css({
                        height: "100%"
                    }), e(".ocm-effect-wrap-inner").css({
                        "padding-top": "0"
                    }), s.scrollTop(Math.abs(parseInt(e("#ajax-content-wrap").css("top")))), e("#ajax-content-wrap").css({
                        position: "",
                        top: ""
                    }), e('#header-outer[data-format="centered-menu-bottom-bar"]').length > 0 && "none" != e('#header-outer[data-format="centered-menu-bottom-bar"] .span_9').css("display") && 0 == e("body.mobile").length && (e("#header-outer:not(.fixed-menu)").css("top", ""), h.css("visibility", "")), e('body[data-hhun="1"]:not(.no-scroll) #header-outer[data-permanent-transparent="false"]:not(.detached):not(.parallax-contained):not(.at-top-before-box)').css({
                        transform: ""
                    }), setTimeout(function () {
                        e('body[data-hhun="1"]:not(.no-scroll) #header-outer[data-permanent-transparent="false"]:not(.detached):not(.parallax-contained):not(.at-top-before-box)').css({
                            transition: ""
                        })
                    }, 30), e('body[data-hhun="1"] #header-secondary-outer.hidden').removeClass("hidden")
                }, 900), setTimeout(function () {
                    e('#header-outer:not([data-format="left-header"]) header#top .slide-out-widget-area-toggle a').addClass("no-trans").removeClass("effect-shown")
                }, 200), setTimeout(function () {
                    e('#header-outer:not([data-format="left-header"]) header#top .slide-out-widget-area-toggle a').removeClass("no-trans")
                }, 500))
            }() : o.hasClass("fullscreen") ? (e("body.material").length > 0 && setTimeout(function () {
                e("header#top .slide-out-widget-area-toggle a").removeClass("menu-push-out")
            }, 350), e(".slide-out-widget-area-toggle:not(.std-menu) .lines-button").removeClass("close"), e(".blurred-wrap").removeClass("blurred"), e("#slide-out-widget-area.fullscreen").transition({
                opacity: 0
            }, 700, "easeOutQuad", function () {
                e("#slide-out-widget-area.fullscreen").hide().css("opacity", "1")
            }).removeClass("open"), e("#slide-out-widget-area.fullscreen .widget").transition({
                opacity: 0
            }, 700, "easeOutQuad", function () {
                e(this).transition({
                    y: "110px"
                }, 0)
            }), setTimeout(function () {
                e(".off-canvas-menu-container .menu > li").transition({
                    y: "80px",
                    opacity: 0
                }, 0), e("#slide-out-widget-area .off-canvas-social-links li").transition({
                    scale: 0
                }, 0), e("#slide-out-widget-area .off-canvas-social-links").removeClass("line-shown"), e("#slide-out-widget-area .bottom-text").transition({
                    opacity: 0
                }, 0), e("#slide-out-widget-area .menuwrapper .menu").removeClass("subview"), e("#slide-out-widget-area .menuwrapper .menu li").removeClass("subview subviewopen"), e("#slide-out-widget-area.fullscreen .inner .off-canvas-menu-container").css("height", "auto")
            }, 800), setTimeout(function () {
                0 == e(".nectar-social.fixed").length && Se(), e(".container-wrap").removeClass("no-shadow")
            }, 500), l.stop(!0).transition({
                opacity: 0
            }, 900, "easeOutQuad", function () {
                e('.mobile #header-outer[data-permanent-transparent="false"]').length > 0 && e(".container-wrap").hasClass("no-scroll") && e("#ajax-content-wrap").removeClass("at-content"), 0 == e('.mobile #header-outer[data-permanent-transparent="false"]').length && e("#slide-out-widget-area.fullscreen .inner-wrap").css("padding-top", "0"), e(".slide-out-widget-area-toggle a").removeClass("animating");
                var t = .4;
                l.hasClass("solid") && (t = 1), l.hasClass("dark") && (t = .93), l.hasClass("medium") && (t = .6), l.hasClass("light") && (t = .4), e(this).css({
                    height: "1px",
                    width: "1px",
                    opacity: t
                }).transition({
                    y: "-100%"
                }, 0)
            })) : o.hasClass("fullscreen-alt") ? (e("body.material").length > 0 && setTimeout(function () {
                e("header#top .slide-out-widget-area-toggle a").removeClass("menu-push-out")
            }, 350), e(".slide-out-widget-area-toggle:not(.std-menu) .lines-button").removeClass("close"), e(".blurred-wrap").removeClass("blurred"), l.removeClass("open"), e("#slide-out-widget-area.fullscreen-alt .widget").transition({
                opacity: 0
            }, 500, "easeOutQuad", function () {
                e(this).transition({
                    y: "40px"
                }, 0)
            }), e("#slide-out-widget-area .bottom-text, #slide-out-widget-area .off-canvas-social-links li").transition({
                opacity: 0
            }, 250, "easeOutQuad"), e("#slide-out-widget-area .off-canvas-social-links").removeClass("line-shown"), e(".off-canvas-menu-container .menu").transition({
                y: "-13px",
                opacity: 0
            }, 400), setTimeout(function () {
                e(".off-canvas-menu-container .menu > li").stop(!0, !0).transition({
                    y: "40px",
                    opacity: 0
                }, 0), e("#slide-out-widget-area .off-canvas-social-links li").transition({
                    scale: 0
                }, 0), e("#slide-out-widget-area .off-canvas-social-links").removeClass("line-shown"), e("#slide-out-widget-area .menuwrapper .menu").removeClass("subview"), e("#slide-out-widget-area .menuwrapper .menu li").removeClass("subview subviewopen"), e("#slide-out-widget-area.fullscreen-alt .inner .off-canvas-menu-container").css("height", "auto"), e('.mobile #header-outer[data-permanent-transparent="false"]').length > 0 && e(".container-wrap").hasClass("no-scroll") && e("#ajax-content-wrap").removeClass("at-content"), 0 == e('.mobile #header-outer[data-permanent-transparent="false"]').length && e("#slide-out-widget-area.fullscreen-alt .inner-wrap").css("padding-top", "0"), e(".slide-out-widget-area-toggle a").removeClass("animating"), l.css({
                    height: "1px",
                    width: "1px",
                    left: "-100%"
                }), e("#slide-out-widget-area.fullscreen-alt").hide().removeClass("open")
            }, 550), setTimeout(function () {
                0 == e(".nectar-social.fixed").length && Se()
            }, 600), setTimeout(function () {
                l.removeClass("padding-removed")
            }, 50), setTimeout(function () {
                l.stop(!0).css({
                    opacity: 0
                }), e('#header-outer[data-transparent-header="true"]').length > 0 && e('body > div[class*="body-border"]').css("z-index", "10000")
            }, 1 == I ? 150 : 50), setTimeout(function () {
                e('#header-outer.transparent.small-nav, #header-outer.transparent.detached, #header-outer:not([data-permanent-transparent="1"]).transparent.scrolled-down').removeClass("transparent"), d.hasClass("pseudo-data-transparent") && d.attr("data-transparent-header", "false").removeClass("pseudo-data-transparent").removeClass("transparent")
            }, 100)) : e("#header-outer #mobile-menu").length > 0 && (e("#mobile-menu").hide(), e(".slide-out-widget-area-toggle:not(.std-menu) .lines-button").removeClass("close"), setTimeout(function () {
                e("body.material").length > 0 && e("header#top .slide-out-widget-area-toggle a").removeClass("menu-push-out"), e(".slide-out-widget-area-toggle a").removeClass("animating")
            }, 350)), 0 == e("#header-outer #mobile-menu").length && (e("#header-outer.temp-removed-dark-slide.transparent").length > 0 && 0 == e("#boxed").length && d.removeClass("temp-removed-dark-slide").addClass("dark-slide"), 0 == e('#header-outer[data-permanent-transparent="1"]').length && 0 == e("#slide-out-widget-area.fullscreen-alt").length && (0 == e(".nectar-box-roll").length ? (e("#header-outer.small-nav").length > 0 || e("#header-outer.scrolled-down").length > 0) && d.removeClass("transparent") : (e("#header-outer.small-nav").length > 0 || e("#header-outer.scrolled-down").length > 0 || e(".container-wrap.auto-height").length > 0) && d.removeClass("transparent")), d.removeClass("hidden-menu"), d.removeClass("side-widget-open").addClass("side-widget-closed")), !1
        })
    }

    function Te() {
        e("#slide-out-widget-area.slide-out-from-right-hover").length > 0 ? (0 == e("#ajax-content-wrap > .slide-out-widget-area-toggle").length && (e('<div class="slide-out-widget-area-toggle slide-out-hover-icon-effect" data-icon-animation="simple-transform"><div> <a href="#sidewidgetarea" class="closed"> <span> <i class="lines-button x2"> <i class="lines"></i> </i> </span> </a> </div> </div>').insertAfter("#slide-out-widget-area"), (e('#header-outer[data-has-menu="true"]').length > 0 || e('body[data-header-search="true"]').length > 0) && e(".slide-out-widget-area-toggle").addClass("small")), O.usingMobileBrowser ? i.on("click", ".slide-out-widget-area-toggle:not(.std-menu) a", ye) : (i.on("mouseenter", "#header-outer .slide-out-widget-area-toggle:not(.std-menu) a", ye), o.on("mouseenter", function () {
            e(this).addClass("mouse-accessed")
        })), s.on("smartresize", fe)) : (_e(), 0 != e("#header-outer #mobile-menu").length && (e("#header-outer #mobile-menu li.megamenu").removeClass("megamenu"), e("#header-outer #mobile-menu ul li").each(function () {
            e(this).find("a").wrapInner("<span></span>"), e(this).find("> ul").length > 0 && e(this).find("> a").append('<span class="sf-sub-indicator"><i class="fa fa-angle-down"></i></span>')
        }), e("#header-outer #mobile-menu .sf-sub-indicator").on("click", function () {
            var t = e(this).parent().parent();
            return t.toggleClass("current-open-item"), t.hasClass("current-open-item") ? (t.find("> ul").show(), setTimeout(function () {
                t.addClass("visible")
            }, 30)) : (t.find("ul").hide(), t.find("li").removeClass("visible").removeClass("current-open-item"), t.removeClass("visible")), !1
        }), s.on("smartresize", function () {
            O.winW > 1e3 && e(".slide-out-widget-area-toggle.mobile-icon a.open").length > 0 && (e(".slide-out-widget-area-toggle.mobile-icon a").addClass("non-human-allowed").trigger("click"), setTimeout(function () {
                e(".slide-out-widget-area-toggle.mobile-icon a").removeClass("non-human-allowed")
            }, 100))
        }))), 0 == e('body.material[data-slide-out-widget-area-style*="slide-out-from-right"]').length && 0 == e('#slide-out-widget-area[data-dropdown-func="separate-dropdown-parent-link"]').length || e('body.using-mobile-browser[data-slide-out-widget-area-style="slide-out-from-right-hover"]').length > 0 && e("body #slide-out-widget-area .inner .off-canvas-menu-container li a[href]").on("click", function () {
            "#" != e(this).attr("href") && function (a) {
                if (e("#slide-out-widget-area.open").length > 0) {
                    var n = t.location.href.split("#")[0],
                        r = a.find("> a").attr("href").split("#")[0];
                    (n == r || a.find('a[href^="#"]').length > 0) && (a.parents(".slide-out-from-right-hover").length > 0 ? e(".slide-out-widget-area-toggle.slide-out-hover-icon-effect a").trigger("click") : e(".slide-out-widget-area-toggle a").trigger("click"))
                }
            }(e(this).parent())
        }), e("#nectar_fullscreen_rows").length > 0 && e('body[data-slide-out-widget-area-style*="fullscreen"]').length > 0 && e("body #slide-out-widget-area .inner .off-canvas-menu-container li a[href]").on("click", function () {
            var t = e(this).is('[href^="#"]') ? e(this).attr("href") : "";
            "#" != t && e('div[data-fullscreen-anchor-id="' + t.substr(t.indexOf("#") + 1) + '"]').length > 0 && (setTimeout(function () {
                e("#slide-out-widget-area .slide_out_area_close").addClass("non-human-allowed").trigger("click")
            }, 100), setTimeout(function () {
                e("#slide-out-widget-area .slide_out_area_close").removeClass("non-human-allowed")
            }, 150))
        }), i.on("mouseover", "#slide-out-widget-area .off-canvas-menu-container .menuwrapper > .sub-menu li > a", function () {
            var t = e(this).text();
            e(".off-canvas-menu-container .menuwrapper .menu li > a").removeClass("hovered"), e(".off-canvas-menu-container .menuwrapper .menu li > a:contains(" + t + ")").addClass("hovered")
        }), i.on("mouseover", ".off-canvas-menu-container .menuwrapper .menu li > a", function () {
            e(".off-canvas-menu-container .menuwrapper .menu li > a").removeClass("hovered")
        }), setTimeout(ke, 500), O.usingMobileBrowser && o.addClass("mobile")
    }

    function ke() {
        o.mousewheel(function (e, t) {
            this.scrollTop -= 30 * t, e.preventDefault()
        })
    }

    function Ee() {
        var t;
        !e('#header-outer[data-format="left-header"]').length > 0 && !e('body.material[data-slide-out-widget-area-style*="slide-out-from-right"]').length > 0 && !e('#slide-out-widget-area[data-dropdown-func="separate-dropdown-parent-link"]').length > 0 || (e('#header-outer[data-format="left-header"] nav li.megamenu').removeClass("megamenu"), t = e('#slide-out-widget-area[data-dropdown-func="separate-dropdown-parent-link"]').length > 0 ? "#slide-out-widget-area .off-canvas-menu-container li.menu-item-has-children > .ocm-dropdown-arrow" : 'body.material #slide-out-widget-area[class*="slide-out-from-right"] .off-canvas-menu-container li.menu-item-has-children > a', e('#header-outer[data-format="left-header"] nav li.menu-item-has-children > a, ' + t).on("click", function () {
            if (e(this).parent().hasClass("open-submenu")) e(this).parent().find(".sub-menu").css({
                "max-height": "0"
            }), e(this).parent().removeClass("open-submenu");
            else {
                var t, a = e(this);
                a.parent().find("> .sub-menu").addClass("no-trans"), setTimeout(function () {
                    a.parent().find("> .sub-menu").css({
                        "max-height": "none",
                        position: "absolute",
                        visibility: "hidden"
                    }), t = a.parent().find("> .sub-menu").height(), a.parent().find("> .sub-menu").removeClass("no-trans"), a.parent().find("> .sub-menu").css({
                        "max-height": "0",
                        position: "relative",
                        visibility: "visible"
                    })
                }, 25), setTimeout(function () {
                    a.closest("ul").find("li.menu-item-has-children").removeClass("open-submenu"), a.closest("ul").find("li.menu-item-has-children > .sub-menu").css({
                        "max-height": "0"
                    }), a.parent().addClass("open-submenu"), a.parent().find("> .sub-menu").css("max-height", t), a.parents("ul").length > 0 && a.parents("ul:not(.sf-menu)").each(function () {
                        e(this).css("max-height"), e(this).css("max-height", parseInt(e(this).height() + 2 * parseInt(e(this).css("padding-top")) + t) + "px")
                    })
                }, 50)
            }
            return !1
        }), e('#header-outer[data-format="left-header"] nav .sf-menu > .current-menu-ancestor.menu-item-has-children > ul > li.current-menu-item').length > 0 && e('#header-outer[data-format="left-header"] nav .sf-menu > .current-menu-ancestor.menu-item-has-children > a').trigger("click"))
    }

    function ze() {
        var t, a;
        t = e("#nectar_fullscreen_rows").length > 0 ? "200%" : "93%", e(H + '.row-bg-wrap[data-bg-animation]:not([data-bg-animation="none"]):not([data-bg-animation*="displace-filter"]) .row-bg.using-image').each(function () {
            var a = e(this),
                n = new Waypoint({
                    element: a.parents(".row-bg-wrap"),
                    handler: function () {
                        a.parents(".wpb_tab").length > 0 && "hidden" == a.parents(".wpb_tab").css("visibility") || a.hasClass("animated-in") ? n.destroy() : (a.parents(".inner-wrap").addClass("animated-in"), n.destroy())
                    },
                    offset: t
                })
        }), ce(), ge(), ue(), a = e("#nectar_fullscreen_rows").length > 0 ? "200%" : "bottom-in-view", 0 == _.length ? (e(".svg-icon-holder:not(.animated-in)").has("svg").each(function (t) {
            var n = e(this);
            O.usingMobileBrowser && n.attr("data-animation", "false"), n.find("svg").css({
                height: parseInt(n.attr("data-size")) + "px",
                width: parseInt(n.attr("data-size")) + "px"
            }), e(this).find("svg").attr("id", "nectar-svg-animation-instance-" + t);
            var r = n.is("[data-animation-speed]") && n.attr("data-animation-speed").length > 0 ? n.attr("data-animation-speed") : 200;
            if ("false" == n.attr("data-animation") && (r = 1, n.css("opacity", "1")), n.hasClass("bound") || (_[t] = new Vivus(n.find("svg").attr("id"), {
                    type: "delayed",
                    pathTimingFunction: Vivus.EASE_OUT,
                    animTimingFunction: Vivus.LINEAR,
                    duration: r,
                    onReady: function () {
                        n.css({
                            height: parseInt(n.attr("data-size")) + "px",
                            width: parseInt(n.attr("data-size")) + "px"
                        })
                    }
                })), 1 !== r) var s = new Waypoint({
                element: n,
                handler: function () {
                    n.hasClass("animated-in") ? s.destroy() : (i(), n.addClass("animated-in"), s.destroy())
                },
                offset: a
            });
            else i();

            function i() {
                var e = 0;
                n.is("[data-animation-delay]") && n.attr("data-animation-delay").length > 0 && "false" != n.attr("data-animation") && (e = n.attr("data-animation-delay"));
                var t = n.find("svg").attr("id").replace(/[^0-9]/g, "");
                1 == _[t].isReady ? setTimeout(function () {
                    n.css("opacity", "1"), _[t].reset().play()
                }, e) : setTimeout(i, 50)
            }
            n.addClass("bound")
        }), e('.vc_row-o-equal-height .svg-icon-holder[data-animation="true"]').length > 0 && 0 == e("#nectar_fullscreen_rows").length && s.on("smartresize", function () {
            clearTimeout(n), n = setTimeout(function () {
                _.length > 0 && e(".svg-icon-holder.animated-in").each(function () {
                    if (e(this).css("opacity", "1"), e(this).is("[id]")) {
                        var t = e(this).attr("id").replace(/[^0-9]/g, "");
                        _[t].finish()
                    }
                })
            }, 300)
        })) : e(".svg-icon-holder").addClass("animated-in").css("opacity", "1"), e("#nectar_fullscreen_rows .svg-icon-holder.animated-in").has("svg").each(function (t) {
            var a = 0;
            e(this).is("[data-animation-delay]") && e(this).attr("data-animation-delay").length > 0 && "false" != e(this).attr("data-animation") && (a = e(this).attr("data-animation-delay"));
            var n = e(this),
                r = n.find("svg").attr("id").replace(/[^0-9]/g, "");
            clearTimeout(E[t]), "false" == n.attr("data-animation") ? (n.css("opacity", "1"), _[r].finish()) : e(this).parents(".active").length > 0 || e(this).parents("#footer-outer").length > 0 || e("body.mobile").length > 0 ? (_[r].reset(), E[t] = setTimeout(function () {
                _[r].play()
            }, a)) : _[r].reset().stop()
        }), J()
    }

    function He() {
        var t = O.scrollTop,
            a = O.winW;
        t > (i.is(".material") ? 150 : 30) && a > 1e3 && 0 == e("body.material-ocm-open").length && (i.is(".material") && (0 == e("#search-outer.material-open").length && e('#header-outer[data-transparent-header="true"] .bg-color-stripe').css("transition", "none"), h.length > 0 && (h.addClass("hide-up"), d.css("transform", "translateY(-" + O.secondaryHeaderHeight + "px)"))), e('#header-outer[data-megamenu-rt="1"]').length > 0 && e('#header-outer[data-transparent-header="true"]').length > 0 && e("#header-outer .megamenu").length > 0 ? "true" == d.attr("data-transparent-header") && 0 == e("#header-outer.side-widget-open").length && 0 == e('#header-outer[data-permanent-transparent="1"]').length && 0 == e(".megamenu.sfHover").length && (d.removeClass("transparent"), d.removeClass("no-transition")) : "true" == d.attr("data-transparent-header") && 0 == e("#header-outer.side-widget-open").length && 0 == e('#header-outer[data-permanent-transparent="1"]').length && d.removeClass("transparent"), e("#header-outer, #search-outer").addClass("small-nav"), e('#header-outer[data-full-width="true"][data-transparent-header="true"]').length > 0 && g.length > 0 && 1 == I && e('#header-outer[data-full-width="true"] header > .container').stop(!0, !0).animate({
            padding: "0"
        }, {
            queue: !1,
            duration: 250,
            easing: "easeOutCubic"
        }), e("body.material").length > 0 && e("header#top nav > ul > li.menu-item-with-margin").stop(!0, !0).animate({
            "margin-right": parseInt(e("header#top nav > ul > li.menu-item-with-margin").css("margin-right")) - 3 * parseInt(v) + "px"
        }, {
            queue: !1,
            duration: 310,
            easing: "easeOutQuad"
        }), e(".nectar-box-roll").length > 0 && 0 == e('#header-outer[data-permanent-transparent="1"]').length && e("#ajax-content-wrap").animate({
            "margin-top": Math.floor(p - v + 2 * b / 1.8 + O.adminBarHeight + O.secondaryHeaderHeight)
        }, {
            queue: !1,
            duration: 250,
            easing: "easeOutCubic"
        }), s.off("scroll.headerResizeEffect", He), s.on("scroll.headerResizeEffect", Ie), e('#header-outer[data-transparent-header="true"]').css("transition", "transform 0.3s ease, background-color 0.30s ease, opacity 0.3s ease, box-shadow 0.30s ease, margin 0.25s ease-out"), e('#header-outer[data-transparent-header="true"] .cart-menu').css("transition", "none"), setTimeout(function () {
            e('#header-outer[data-transparent-header="true"]').css("transition", "transform 0.3s ease, background-color 0.30s ease, opacity 0.3s ease, box-shadow 0.30s ease, border-color 0.30s ease, margin 0.25s ease-out"), e('#header-outer[data-transparent-header="true"] .cart-menu').css("transition", "border-color 0.30s ease")
        }, 300))
    }

    function Ie() {
        var t = O.scrollTop,
            a = O.winW,
            n = i.is(".material") ? 150 : 30;
        if (i.is(".material-ocm-open")) return !1;
        (t <= n && a > 1e3 || e(".small-nav").length > 0 && e("#ajax-content-wrap.no-scroll").length > 0) && (e("#header-outer, #search-outer").removeClass("small-nav"), e('#header-outer[data-megamenu-rt="1"]').length > 0 && e('#header-outer[data-transparent-header="true"]').length > 0 && e("#header-outer .megamenu").length > 0 ? "true" == d.attr("data-transparent-header") && 0 == e(".nectar-box-roll").length && 0 == e(".megamenu.sfHover").length && (d.addClass("transparent"), d.removeClass("no-transition")) : "true" == d.attr("data-transparent-header") && 0 == e(".nectar-box-roll").length && d.addClass("transparent"), e('#header-outer[data-full-width="true"][data-transparent-header="true"]').length > 0 && g.length > 0 && 1 == I && e('#header-outer[data-full-width="true"] header > .container').stop(!0, !0).animate({
            padding: "0 28px"
        }, {
            queue: !1,
            duration: 250,
            easing: "easeOutCubic"
        }), e("body.material").length > 0 && e("header#top nav > ul > li.menu-item-with-margin").stop(!0, !0).animate({
            "margin-right": parseInt(e("header#top nav > ul > li.menu-item-with-margin").css("margin-right")) + 3 * parseInt(v) + "px"
        }, {
            queue: !1,
            duration: 140,
            easing: "easeOutQuad"
        }), h.length > 0 && (h.removeClass("hide-up"), d.removeClass("hide-up").css("transform", "translateY(0%)")), e(".nectar-box-roll").length > 0 && 0 == e('#header-outer[data-permanent-transparent="1"]').length && e("#ajax-content-wrap").animate({
            "margin-top": Math.floor(p + 2 * b + O.adminBarHeight + O.secondaryHeaderHeight)
        }, {
            queue: !1,
            duration: 250,
            easing: "easeOutCubic"
        }), s.off("scroll.headerResizeEffect", Ie), s.on("scroll.headerResizeEffect", He), e('#header-outer[data-transparent-header="true"]').css("transition", "transform 0.3s ease, background-color 0.30s ease, opacity 0.3s ease, box-shadow 0.30s ease, margin 0.25s ease-out"), e('#header-outer[data-transparent-header="true"] .cart-menu').css("transition", "none"), setTimeout(function () {
            e('#header-outer[data-transparent-header="true"]').css("transition", "transform 0.3s ease, background-color 0.30s ease, opacity 0.3s ease, box-shadow 0.30s ease, border-color 0.30s ease, margin 0.25s ease-out"), e('#header-outer[data-transparent-header="true"] .cart-menu').css("transition", "border-color 0.30s ease")
        }, 300))
    }

    function Fe() {
        e('#header-outer[data-format="centered-menu-bottom-bar"][data-condense="true"]').length > 0 && !d.hasClass("within-custom-breakpoint") || O.scrollTop > 0 && (e("body.material").length > 0 && (d.addClass("scrolled-down"), h.length > 0 && O.winW > 1e3 && (h.addClass("hide-up"), d.css("transform", "translateY(-" + O.secondaryHeaderHeight + "px)"))), "true" == d.attr("data-transparent-header") && 0 == e('#header-outer[data-permanent-transparent="1"]').length && d.removeClass("transparent").addClass("scrolled-down"), s.off("scroll.headerResizeEffectOpaque", Fe), s.on("scroll.headerResizeEffectOpaque", Oe))
    }

    function Oe() {
        e('#header-outer[data-format="centered-menu-bottom-bar"][data-condense="true"]').length > 0 && !d.hasClass("within-custom-breakpoint") || 0 == O.scrollTop && 0 == e("body.material-ocm-open").length && (e('#header-outer[data-megamenu-rt="1"]').length > 0 && e('#header-outer[data-transparent-header="true"]').length > 0 && e("#header-outer .megamenu").length > 0 ? "true" == d.attr("data-transparent-header") && 0 == e(".megamenu.sfHover").length ? (d.addClass("transparent").removeClass("scrolled-down"), d.removeClass("no-transition")) : "true" == d.attr("data-transparent-header") && d.removeClass("scrolled-down") : "true" == d.attr("data-transparent-header") && d.addClass("transparent").removeClass("scrolled-down"), e("body.material").length > 0 && (d.removeClass("scrolled-down"), h.length > 0 && O.winW > 1e3 && (h.removeClass("hide-up"), d.removeClass("hide-up").css("transform", "translateY(0%)"))), s.off("scroll.headerResizeEffectOpaque", Oe), s.on("scroll.headerResizeEffectOpaque", Fe))
    }

    function Ae() {
        e("body.material-ocm-open").length > 0 ? requestAnimationFrame(Ae) : (O.scrollTop > 80 ? (d.is('[data-permanent-transparent="1"]') || d.removeClass("transparent"), O.secondaryHeaderHeight > 0 && (h.addClass("hide-up"), d.css("transform", "translateY(-" + O.secondaryHeaderHeight + "px)"))) : (d.is('[data-transparent-header="true"]') && d.addClass("transparent"), O.secondaryHeaderHeight > 0 && (h.removeClass("hide-up"), d.css("transform", "translateY(0px)"))), O.winW < 1e3 && requestAnimationFrame(Ae))
    }

    function qe() {
        O.winW > 999 || (s.off("scroll.headerResizeEffect"), s.off("scroll.headerResizeEffectOpaque"), d.removeClass("scrolled-down").removeClass("detached").removeClass("invisible").removeClass("at-top").css("transform", "none"), e('#header-outer[data-mobile-fixed="1"]').length > 0 ? requestAnimationFrame(Ae) : "true" == d.attr("data-transparent-header") && d.addClass("transparent"), s.off("smartresize.nectarNavScrollEffects"), s.on("smartresize.nectarNavScrollEffects", We))
    }

    function We() {
        var n, i, o;
        O.winW < 1e3 || (1 == w && "1" != y ? (s.off("scroll.headerResizeEffect"), 0 == e("#nectar_fullscreen_rows").length ? s.on("scroll.headerResizeEffect", He) : e('#nectar_fullscreen_rows[data-mobile-disable="on"]').length > 0 && O.usingMobileBrowser && s.on("scroll.headerResizeEffect", He)) : "1" != y ? (s.off("scroll.headerResizeEffectOpaque"), s.on("scroll.headerResizeEffectOpaque", Fe)) : "1" == y && (e(".nectar-box-roll").length > 0 && d.addClass("at-top-before-box"), 0 == e('#header-outer[data-remove-fixed="1"]').length && (n = 0, i = 250, o = 6, function s() {
            d.addClass("detached");
            var l = O.scrollTop,
                c = Math.abs(l - n);
            if ((e("body.animated-scrolling").length > 0 && e("#header-outer.detached").length > 0 || e("body.no-scroll").length > 0) && O.winW > 999) return l > i && (n = O.scrollTop, l = O.scrollTop), void requestAnimationFrame(s);
            if ((e("body.material-ocm-open").length > 0 || e("#search-outer.material-open").length > 0) && O.winW > 999) requestAnimationFrame(s);
            else if (e('#header-outer[data-mobile-fixed="false"]').length > 0 && e("body.mobile").length > 0) d.removeClass("detached");
            else {
                if (!d.hasClass("side-widget-open") && !e("#header-outer .slide-out-widget-area-toggle a").hasClass("animating")) {
                    var u;
                    if (l > 1 && (0 == e('#header-outer[data-permanent-transparent="1"]').length && (d.removeClass("transparent"), d.addClass("scrolling")), h.length > 0 && (l > i ? (h.addClass("hide-up"), d.css("transform", "translateY(-" + O.secondaryHeaderHeight + "px)")) : (h.removeClass("hide-up"), d.css("transform", "0px)")))), l > i) d.hasClass("detached") || d.addClass("detached").removeClass("parallax-contained"), d.removeClass("no-transition"), c >= o && (l > n ? (d.hasClass("invisible") || (e(".sf-menu").length > 0 && e().superfish && (e(".sf-menu").superfish("hide"), e("header#top nav > ul.sf-menu > li.menu-item-over").removeClass("menu-item-over"))), e(".page-submenu.stuck").css("transform", "translateY(0px)").addClass("header-not-visible")) : (d.hasClass("invisible") && d.removeClass("invisible"), u = d.outerHeight(), h.length > 0 && (u -= O.secondaryHeaderHeight), g.length > 0 && 0 == e("body.mobile").length ? (r = I ? g.height() : 0, e(".page-submenu.stuck").css("transform", "translateY(" + (u - r) + "px)").removeClass("header-not-visible")) : e(".page-submenu.stuck").css("transform", "translateY(" + u + "px)").removeClass("header-not-visible")));
                    else {
                        var m = e('#header-outer[data-using-secondary="1"]').length > 0 ? 32 : 0;
                        g.length > 0 && (m = e('#header-outer[data-using-secondary="1"]').length > 0 ? 32 + g.height() : g.height()), l <= m && (d.addClass("at-top").removeClass("invisible").removeClass("scrolling"), e('#header-outer[data-megamenu-rt="1"]').length > 0 && e('#header-outer[data-transparent-header="true"]').length > 0 && e("#header-outer .megamenu").length > 0 ? e('#header-outer[data-transparent-header="true"]').length > 0 && 0 == e(".nectar-box-roll").length && 0 == e(".megamenu.sfHover").length ? d.addClass("transparent").css("transform", "translateY(0)").removeClass("no-transition") : e(".nectar-box-roll").length > 0 && d.css("transform", "translateY(0)").addClass("at-top-before-box") : e('#header-outer[data-transparent-header="true"]').length > 0 && 0 == e(".nectar-box-roll").length ? d.addClass("transparent").css("transform", "translateY(0)") : e(".nectar-box-roll").length > 0 && d.css("transform", "translateY(0)").addClass("at-top-before-box"), e('#page-header-bg[data-parallax="1"]').length > 0 && d.addClass("parallax-contained").css("transform", "translateY(0)"))
                    }
                    O.winH + t.scrollY >= a.body.offsetHeight && (d.removeClass("invisible"), u = d.outerHeight(), h.length > 0 && (u -= O.secondaryHeaderHeight), g.length > 0 && 0 == e("body.mobile").length ? (r = I ? g.height() : 0, e(".page-submenu.stuck").css("transform", "translateY(" + (u - r) + "px)").removeClass("header-not-visible")) : e(".page-submenu.stuck").css("transform", "translateY(" + u + "px)").removeClass("header-not-visible"))
                }
                n = l, O.winW > 999 && requestAnimationFrame(s)
            }
        }())), e('#header-outer[data-format="centered-menu-bottom-bar"][data-condense="true"]').length > 0 && (h.length > 0 && d.css("transform", ""), O.scrollTop > 200 && !d.hasClass("fixed-menu") && d.addClass("fixed-menu")), s.off("smartresize.nectarNavScrollEffects"), s.on("smartresize.nectarNavScrollEffects", qe))
    }

    function Ve() {
        0 == e('#header-outer[data-remove-fixed="1"]').length && O.winW > 1e3 && 0 != e(t).scrollTop() && 1 == e('#header-outer.transparent[data-permanent-transparent="false"]').length && d.removeClass("transparent"), 0 == e("#nectar_fullscreen_rows").length && 0 == e(".nectar-box-roll").length && function () {
            if (e('#header-outer[data-permanent-transparent="1"]').length > 0 && e('body[data-bg-header="true"]').length > 0) {
                0 == e(".container-wrap div[data-midnight]").length && e(".container-wrap").attr("data-midnight", "dark");
                var t = [];
                e("div[data-midnight]").each(function () {
                    ("light" == e(this).attr("data-midnight") && 0 == e(this).parents(".pum-content").length || "dark" == e(this).attr("data-midnight") && 0 == e(this).parents(".pum-content").length) && t.push(e(this))
                }), t.length > 0 && e.each(t, function (a, n) {
                    if ("light" == n.attr("data-midnight") || "dark" == n.attr("data-midnight")) {
                        var r = n;
                        new Waypoint({
                            element: r,
                            handler: function (n) {
                                var s;
                                e("body.material-ocm-open").length > 0 || ("down" == n ? (s = "light" == r.attr("data-midnight") ? "" : "dark-slide", d.removeClass("dark-slide").addClass(s)) : (s = "light" == t[a - 1 >= 0 ? a - 1 : a].attr("data-midnight") ? "" : "dark-slide", d.removeClass("dark-slide").addClass(s)))
                            },
                            offset: d.height()
                        })
                    }
                })
            }
        }(), O.winW < 1e3 && 0 == e(".nectar-box-roll").length ? (qe(), s.on("smartresize.nectarNavScrollEffects", qe)) : (We(), s.on("smartresize.nectarNavScrollEffects", We))
    }

    function Me() {
        if (e(".mobile").length > 0) O.winH < O.winW && O.winW > 1e3 ? 0 == e("#header-outer.small-nav").length && e("#header-space").css("height", d.outerHeight()) : e("#header-space").css("height", d.outerHeight());
        else if (0 == e(".nectar-parallax-scene.first-section").length) {
            var t = b - b / 1.8,
                a = e('#header-outer[data-header-resize="1"]').length > 0 && e(".small-nav").length > 0 ? d.outerHeight() + (parseInt(v) + 2 * t) : d.outerHeight();
            e("#header-space").css("height", a)
        }
    }

    function Re() {
        var t = e('body[data-header-format="left-header"]').length > 0 && s.width() > 1e3 ? 0 : d.outerHeight();
        if (s.height() - c.height() - t - e("#footer-outer").height() - 1 - m.height() - e(".page-header-no-bg").height() > 0) {
            var a = e('body:not(.material) #header-outer[data-header-resize="1"]').length > 0 ? 55 : 0;
            e('body[data-footer-reveal="1"] .container-wrap').css({
                "margin-bottom": e("#footer-outer").height() - 1
            }), e(".container-wrap").css({
                "min-height": s.height() - c.height() - t - e("#footer-outer").height() - 1 - e(".page-header-no-bg").height() - m.height() + a
            })
        } else e('body[data-footer-reveal="1"] .container-wrap').css({
            "margin-bottom": e("#footer-outer").height() - 1
        });
        s.width() < 1e3 ? e("#footer-outer").attr("data-midnight", "light") : e("#footer-outer").removeAttr("data-midnight")
    }

    function Be() {
        (e('body[data-footer-reveal="1"]').length > 0 || e('body.material[data-slide-out-widget-area-style="slide-out-from-right"]').length > 0) && (setTimeout(function () {
            Re()
        }, 60), Re(), s.on("resize", Re), e('bodybody[data-footer-reveal="1"][data-footer-reveal-shadow="large_2"]').length > 0 && e(".container-wrap").css({
            boxShadow: "0 70px 110px -30px " + e("#footer-outer").css("backgroundColor")
        }))
    }

    function Se() {
        O.scrollTop > 350 && !o.is(".fullscreen.open") && (e("#to-top").stop().transition({
            bottom: "17px"
        }, 350, "easeInOutCubic"), s.off("scroll", Se), s.on("scroll", je))
    }

    function je() {
        if (O.scrollTop < 350 || o.is(".fullscreen.open")) {
            var t = e("#slide-out-widget-area.fullscreen.open").length > 0 ? 1150 : 350;
            e("#to-top").stop().transition({
                bottom: "-30px"
            }, t, "easeInOutQuint"), s.off("scroll", je), s.on("scroll", Se)
        }
    }

    function Ye() {
        var n = t.location.hash;
        n && n.length > 0 && (n = n.replace(/<|>/g, ""));
        var r = n && n.length > 0 ? n.substring(1, n.length) : 0,
            o = 2 * parseInt(d.attr("data-padding")),
            l = 0;
        if (r && (l = (l = r.split("/")).length), r && l > 1 && (r = r.replace(/\//g, ""), n = n.replace(/\//g, "")), n && e(".main-content").find(n).length > 0 || n && e(".main-content").find('[data-fullscreen-anchor-id="' + r + '"]').length > 0) {
            var c = e(".main-content").find(n).length > 0 ? e(".main-content").find(n) : e(".main-content").find('[data-fullscreen-anchor-id="' + r + '"]'),
                u = e('body[data-header-format="left-header"]').length > 0 && s.width() > 1e3 ? 0 : e("#header-space").outerHeight();
            (e(".page-template-template-no-header-footer").length > 0 || e(".page-template-template-no-header").length > 0) && (u = 0);
            var g = 0;
            e(".nectar-box-roll").length > 0 && e(".container-wrap.bottomBoxOut").length > 0 && (F.boxRoll(null, -1), g = 2050), setTimeout(function () {
                var n;
                if (0 == e('body[data-permanent-transparent="1"]').length)
                    if (i.hasClass("mobile")) n = e('#header-outer[data-mobile-fixed="1"]').length > 0 ? c.offset().top + 2 - u + O.adminBarHeight : c.offset().top - O.adminBarHeight + 1;
                    else {
                        var r = e('#header-outer[data-header-resize="0"]').length > 0 ? 0 : parseInt(v) + 2 * o;
                        if (e('#header-outer[data-remove-fixed="1"]').length > 0 && (u = 0), n = c.offset().top - parseInt(u) + r + 3 - O.adminBarHeight, 0 == e("body.mobile").length && e('#header-outer[data-condense="true"]').length > 0) {
                            var s = e('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9'),
                                l = d.height() - (parseInt(s.height()) + parseInt(e("#header-outer #logo").css("margin-top")));
                            n = c.offset().top - parseInt(u) + l - O.adminBarHeight
                        }
                    }
                else n = c.offset().top - O.adminBarHeight + 1;
                e('body[data-hhun="1"]').length > 0 && 0 == e('#header-outer[data-remove-fixed="1"]').length && 0 == e("#header-outer.detached").length && (n += u);
                var g, m, f, p, b, w, y, C, x = e('.page-submenu[data-sticky="true"]').length > 0 ? e(".page-submenu").height() : 0;
                g = e("body.material").length > 0 && h.length > 0 && 0 == e('body[data-hhun="1"]').length && 0 == e('#header-outer[data-remove-fixed="1"]').length && !i.hasClass("mobile") ? h.height() : 0, m = n - x + g, f = 700, p = "easeInOutQuint", b = t.scrollY || a.documentElement.scrollTop, m = m || 0, f = f || 2e3, p = p || "easeOutSine", w = 0, y = Math.max(.1, Math.min(Math.abs(b - m) / f, .8)), C = {
                        easeInOutQuint: function (e) {
                            return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
                        }
                    },
                    function e() {
                        var a = (w += 1 / 60) / y,
                            n = C[p](a);
                        a < 1 ? (requestAnimationFrame(e), t.scrollTo(0, b + (m - b) * n)) : t.scrollTo(0, m)
                    }()
            }, g)
        }
    }

    function Ne() {
        e('body[data-animated-anchors="true"]').length > 0 && (0 == e(".nectar-box-roll").length && 0 == e("#nectar_fullscreen_rows").length && (void 0 !== D.tab ? setTimeout(function () {
            Ye()
        }, 800) : Ye()), e('#nectar_fullscreen_rows[data-mobile-disable="on"]').length > 0 && 0 == e(".nectar-box-roll").length && O.usingMobileBrowser && Ye())
    }

    function Pe() {
        if (e('body[data-ajax-transitions="true"]').length > 0 && e('#ajax-loading-screen[data-method="standard"]').length > 0) {
            if (e("html").addClass("page-trans-loaded"), e('#ajax-loading-screen[data-effect="standard"]').length > 0 ? (0 == e(".nectar-particles").length && (u.transition({
                    opacity: 0
                }, 500, function () {
                    e(this).css({
                        display: "none"
                    })
                }), e("#ajax-loading-screen .loading-icon").transition({
                    opacity: 0
                }, 500)), 0 == e(".nectar-box-roll").length && setTimeout(function () {
                    ze()
                }, 550)) : (e('#ajax-loading-screen[data-effect*="horizontal_swipe"]').length > 0 && setTimeout(function () {
                    u.addClass("loaded")
                }, 60), 0 == e('#page-header-wrap #page-header-bg[data-animate-in-effect="zoom-out"] .nectar-video-wrap').length && setTimeout(function () {
                    e("#ajax-loading-screen:not(.loaded)").addClass("loaded"), setTimeout(function () {
                        u.addClass("hidden")
                    }, 1e3)
                }, 150), 0 == e(".nectar-box-roll").length && e('#ajax-loading-screen[data-effect*="horizontal_swipe"]').length > 0 ? setTimeout(function () {
                    ze()
                }, 750) : 0 == e(".nectar-box-roll").length && setTimeout(function () {
                    ze()
                }, 350)), -1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome") || navigator.userAgent.match(/(iPod|iPhone|iPad)/) ? (t.onunload = function () {
                    u.stop().transition({
                        opacity: 0
                    }, 800, function () {
                        e(this).css({
                            display: "none"
                        })
                    }), e("#ajax-loading-screen .loading-icon").transition({
                        opacity: 0
                    }, 600)
                }, t.onpageshow = function (t) {
                    t.persisted && (u.stop().transition({
                        opacity: 0
                    }, 800, function () {
                        e(this).css({
                            display: "none"
                        })
                    }), e("#ajax-loading-screen .loading-icon").transition({
                        opacity: 0
                    }, 600))
                }) : -1 != navigator.userAgent.indexOf("Firefox") && (t.onunload = function () {}), e(".portfolio-loading, .nectar-slider-loading .loading-icon").remove(), 0 == e('#ajax-loading-screen[data-disable-fade-on-click="1"]').length && 0 == e('body.using-mobile-browser #ajax-loading-screen[data-method="standard"][data-disable-mobile="1"]').length) {
                var a = !1;
                e('a[href^="mailto"], a[href^="tel"]').on("click", function () {
                    a = !0
                }), t.addEventListener("beforeunload", function () {
                    a || (u.addClass("set-to-fade"), e('#ajax-loading-screen[data-effect*="horizontal_swipe"]').length > 0 ? (u.removeClass("loaded"), u.addClass("in-from-right"), setTimeout(function () {
                        u.addClass("loaded")
                    }, 30)) : e('#ajax-loading-screen[data-effect="center_mask_reveal"]').length > 0 ? u.css("opacity", "0").css("display", "block").transition({
                        opacity: "1"
                    }, 450) : u.show().transition({
                        opacity: "1"
                    }, 450)), a = !1
                })
            }
        } else 0 != e(".nectar-box-roll").length || O.usingFrontEndEditor || setTimeout(function () {
            ze()
        }, 100)
    }
    e.fn.parallaxScroll = function (a, n, r) {
        var i = O.winW,
            o = O.winH,
            l = 0,
            d = e(this),
            h = d.offset().top;
        d.each(function () {
            h = d.offset().top
        });
        var c = function (e) {
            return e.outerHeight(!0)
        };
        (arguments.length < 1 || null === a) && (a = "50%"), (arguments.length < 2 || null === n) && (n = .25), (arguments.length < 3 || null === r) && (r = !0);
        var u = O.usingMobileBrowser,
            g = !1,
            m = !1,
            f = d,
            p = c(f);
        d.find(".row-bg.using-image, .page-header-bg-image, .image-bg, .video-wrap").addClass("translate"), setInterval(function () {
            p = c(f), g = e("body.classic_mobile_menu_open.mobile").length > 0
        }, 600), (f.parents(".top-level").length > 0 && f.parents(".parallax_slider_outer").length > 0 || f.parents(".top-level").length > 0 && f.is(".nectar-recent-posts-single_featured") || f.is(".wpb_row.top-level") || 0 == e(".wpb_row").length) && (m = !0), (0 == e(".wpb_row").length && f.parents(".parallax_slider_outer").length > 0 && f.is('[data-full-width="true"]') || e("#portfolio-extra").length > 0 && f.parents(".parallax_slider_outer").length > 0 && f.parents(".wpb_row").length > 0 && "0" == f.parents(".wpb_row").index()) && (m = !0), O.usingFrontEndEditor && (m = !1);
        var b = d.is(".nectar-slider-wrap"),
            v = d.find(".page-header-bg-image").length > 0,
            w = !1;

        function y() {
            h = f.offset().top, 0 == w || h + p < O.scrollTop || h > O.scrollTop + O.winH || e("body.material-ocm-open").length > 0 || (b ? m ? g || d.find(".video-wrap, .image-bg").css({
                transform: "translate3d(0, " + parseFloat(O.scrollTop * n) + "px, 0)"
            }) : d.find(".video-wrap, .image-bg").css({
                transform: "translate3d(0, " + parseFloat((o + O.scrollTop - h) * n) + "px, 0)"
            }) : (m ? g || w.css({
                transform: "translate3d(0, " + parseFloat(O.scrollTop * n) + "px, 0)"
            }) : w.css({
                transform: "translate3d(0, " + parseFloat((o + O.scrollTop - h) * n) + "px, 0), scale(1.005)"
            }), v && !g && w.css({
                transform: "translate3d(0, " + parseFloat(O.scrollTop * n) + "px, 0)"
            }))), u && requestAnimationFrame(y)
        }
        b ? (d.find(".video-wrap").length > 0 || d.find(".image-bg").length > 0) && (w = d.find(".video-wrap, .image-bg")) : d.find(".row-bg.using-image").length > 0 ? w = d.find(".row-bg.using-image") : d.find(".page-header-bg-image").length > 0 && (w = d.find(".page-header-bg-image")), t.addEventListener && (!O.usingFrontEndEditor && O.usingMobileBrowser || s.on("resize", function () {
            i = O.winW, o = O.winH
        }), O.usingFrontEndEditor ? s.on("scroll.parallaxSections", y) : O.usingMobileBrowser ? (requestAnimationFrame(y), t.addEventListener("orientationchange", function () {
            l = 1
        }), s.on("resize", function () {
            (s.width() != i && s.height != o || 1 == l) && (i = O.winW, o = O.winH, l = 0)
        })) : t.addEventListener("scroll", function () {
            requestAnimationFrame(y)
        }, !1)), s.on("resize.parallaxSections", y), y()
    }
}(window.jQuery, window, document);