/* main-1.0.14 jQuery.scroller.js*/
!function(a) {
    var b = function(b, c) {
            this.opts = a.extend({
                delay: 50,
                start: null ,
                end: null ,
                startThreshold: 0,
                stopThreshold: 0,
                onStart: function() {},
                onEnd: function() {},
                onScroll: function() {}
            }, c),
                this.$el = a(b),
                this.init()
        }
        ;
    b.prototype = {
        init: function() {
            this.bindEvent(),
                a(window).bind("scroll", function() {
                    a(this).trigger("onscroller")
                })
        },
        bindEvent: function() {
            var b = this;
            var c;
            a(window).bind("onscroller", function() {
                clearTimeout(c),
                    c = setTimeout(function() {
                        b.onScroll(),
                            clearTimeout(c)
                    }, b.opts.delay)
            })
        },
        onScroll: function() {
            var c = a(document).scrollTop();
            var d = this.opts.start || this.$el.offset().top;
            var e = this.opts.end || d + this.$el.outerHeight();
            a(window).height();
            this.opts.end && "object" == typeof this.opts.end && (e = this.opts.end.offset().top),
                c > d + this.opts.startThreshold && c < e - this.opts.stopThreshold ? this.opts.onStart.apply(this) : this.opts.onEnd.apply(this),
                this.opts.onScroll.apply(this)
        }
    },
        a.fn.scroller = function(c, d) {
            return this.each(function() {
                var e = new b(this,c,d);
                a(this).data("scroller", e)
            })
        }
}(jQuery);