/* @update: 2018-7-9 10:22:22 */
$(function() {

    function e(e) {

        for (var n = $(window).scrollTop(), s = document.documentElement.clientHeight, a = 0; a < e.length; a++) {
            var t = e[a].offsetTop - 50;
            if (n + s >= t && t + s + 640 > n + s) {
                var o = 160 / (t + s + 640),
                    r = o * (n + s - t);
                $(e[a]).find(".floor-module").css("background-position", "center " + (80 - r) + "px")
            }
        }
    }
    var n = $(".fuwu-center").find(".fuwu-item");
    n.on("mouseover",
        function() {
            $(this).addClass("active").siblings().removeClass("active")
        }),
        $(".brand-li").on({
            mouseover: function() {
                var e = $(this);
                $("[sup-type=headerNav]").addClass("showBrand"),
                    $("[sup-type=topbar]").addClass("showBrand"),
                    e.addClass("cur")
            },
            mouseleave: function() {
                var e = $(this);
                e.removeClass("cur"),
                    $("[sup-type=headerNav]").removeClass("showBrand"),
                    $("[sup-type=topbar]").removeClass("showBrand")
            }
        }),
        $("[sup-type=nav]").on("click",
            function() {
                var e = $(this);
                if ("javascript:void(0);" != e.attr("href")) return ! 1;
                var n = e.attr("sup-name"),
                    s = $("[sup-nameAdd=" + n + "]"),
                    a = $("[sup-nameNav=" + n + "]"),
                    t = s.offset().top - 480;
                $("body,html").animate({
                        scrollTop: t
                    },
                    1500, "easeInOutQuint"),
                    s.parent().find("li").removeClass("cur"),
                    s.addClass("cur"),
                    a.parent().find("li").removeClass("cur"),
                    a.addClass("cur")
            }),
        $("[node-type=navTab]").each(function() {
            var e = ($(this), $(this).find("[node-type=navTit] li")),
                n = $(this).find("[node-type=navCont] .floor-item"),
                s = $(this).find("[node-type=navCont] .fangan-item");
            e.on({
                mouseover: function() {
                    $(this).addClass("cur").siblings().removeClass("cur"),
                    n.length && n.eq($(this).index()).addClass("cur").siblings().removeClass("cur"),
                    s.length && s.eq($(this).index()).addClass("cur").siblings().removeClass("cur")
                },
                mouseleave: function() {}
            })
        });
    var s = $(".floor-wrap");
    document.addEventListener && document.addEventListener("scroll",
        function() {
            e(s)
        }),
    document.addEventListener && document.addEventListener("DOMMouseScroll",
        function() {
            e(s)
        },
        !1)
});