/* main-1.0.14 jQuery.scroller.js*/
!function($) {
    var b = function(element, options) {

            this.opts = $.extend({
                delay: 50,
                start: null ,
                end: null ,
                startThreshold: 0,
                stopThreshold: 0,
                onStart: function() {},
                onEnd: function() {},
                onScroll: function() {}
            }, options),
                this.$el = $(element),
                this.init()
        }
        ;
    b.prototype = {
        init: function() {
            this.bindEvent(),
                $(window).bind("scroll", function() {
                    $(this).trigger("onscroller")
                })
        },
        bindEvent: function() {
            var _this = this;
            _this.onScrollTime= null;
            $(window).bind("onscroller", function() {
                clearTimeout(_this.onScrollTime),
                    _this.onScrollTime = setTimeout(function() {
                        _this.onScroll(),
                            clearTimeout(_this.onScrollTime)
                    }, _this.opts.delay)
            })
        },
        onScroll: function() {
            var _scrollTop = $(document).scrollTop();
            var _startTop = this.opts.start || this.$el.offset().top;
            var _endTop = this.opts.end || _startTop + this.$el.outerHeight();
            $(window).height();
            this.opts.end && "object" == typeof this.opts.end && (_endTop = this.opts.end.offset().top),
                _scrollTop > _startTop + this.opts.startThreshold && _scrollTop < _endTop - this.opts.stopThreshold ? this.opts.onStart.apply(this) : this.opts.onEnd.apply(this),
                this.opts.onScroll.apply(this)
        }
    },
        $.fn.scroller = function(c, d) {
            return this.each(function() {
                var e = new b(this,c,d);
                $(this).data("scroller", e)
            })
        }
}(jQuery);