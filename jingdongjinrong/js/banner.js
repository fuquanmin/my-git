/* @update: 2018-7-9 10:22:22 */
define("tools/banner",
    function(require, n, t) {
        function e(n) {
            this.options = $.extend({
                parent: null,
                index: 0,
                timer: 4600,
                imgList: []},
                n),
                this.init().bindEvent()
        }
        e.prototype = {
            constructor: e,
            init: function() {
                var n = this;
                return n.lock = !1,
                    n.index = n.options.index,
                    n.parent = n.options.parent,
                    n.parent && n.parent.length ? (n.list = $("li", n.parent), n.allpage = $("[banner-type=allpage]", n.parent), n.imgList = n.options.imgList, n.len = n.imgList.length, n.move(), n.allpage.find("span").text("0" + n.len), n) : !1
            },
            loadImg: function() {
                var n = this,
                    t = (n.parent, n.list),
                    e = n.imgList[n.index];
                t.eq(n.index).find("a").attr({
                    href: e.href
                }),
                    n.lock = !1,
                    n.auto()
            },
            bindEvent: function() {
                function n(n) {
                    n.on({
                        mouseover: function() {
                            t.clearAuto()
                        },
                        mouseleave: function() {
                            t.auto()
                        }
                    })
                } {
                    var t = this,
                        e = t.index,
                        i = t.list,
                        a = t.len;
                    t.parent
                }
                t.nowindex = $("[banner-type=nowindex]", t.parent),
                    n(i.find("a")),
                    $(".prev").on({
                        mouseover: function() {
                            t.clearAuto();
                            var n = e - 1;
                            n = n >= 0 ? n: a - 1,
                                $(this).find("span").text(i.eq(n).attr("banner-title"))
                        },
                        mouseleave: function() {
                            $(this).find("span").text("")
                        }
                    }),
                    $(".prev").on("click",
                        function() {
                            e = e > 0 ? e - 1 : a - 1,
                                t.index = e,
                                i.eq(e).addClass("active").siblings().removeClass("active");
                            var n = e + 1;
                            t.nowindex.text("0" + n);
                            var o = e - 1;
                            o = o >= 0 ? o: a - 1,
                                $(this).find("span").text(i.eq(o).attr("banner-title")),
                                t.clearAuto()
                        }),
                    $(".next").on({
                        mouseover: function() {
                            t.clearAuto();
                            var n = e + 1;
                            n = a - 1 > e ? e + 1 : 0,
                                $(this).find("span").text(i.eq(n).attr("banner-title"))
                        },
                        mouseleave: function() {
                            $(this).find("span").text("")
                        }
                    }),
                    $(".next").on("click",
                        function() {
                            e = a - 1 > e ? e + 1 : 0,
                                t.index = e,
                                i.eq(e).addClass("active").siblings().removeClass("active");
                            var n = e + 1;
                            t.nowindex.text("0" + n);
                            var o = e + 1;
                            o = a - 1 > e ? e + 1 : 0,
                                $(this).find("span").text(i.eq(o).attr("banner-title")),
                                t.clearAuto()
                        })
            },
            updateIndex: function() {
                var n = this,
                    t = n.len,
                    e = n.index;
                return n.index = t - 1 > e ? e + 1 : 0,
                    n
            },
            auto: function() {
                var n = this;
                return n.lock ? !1 : (n.flag = setTimeout(function() {
                        n.updateIndex().move()
                    },
                    n.options.timer), void 0)
            },
            clearAuto: function() {
                var n = this;
                return clearTimeout(n.flag),
                    n.flag = null,
                    n
            },
            move: function() {
                {
                    var n = this,
                        t = n.index,
                        e = n.list;
                    n.imgList
                }
                if (n.nowindex = $("[banner-type=nowindex]", n.parent), n.lock) return ! 1;
                n.lock = !0,
                    n.clearAuto(),
                    e.eq(t).addClass("active").siblings().removeClass("active");
                var i = t + 1;
                n.nowindex.text("0" + i),
                    n.loadImg()
            }
        },
            t.exports = e

    });
