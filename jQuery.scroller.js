/* main-1.0.14 jQuery.scroller.js*/
!function($) {
    var Scroller = function(element, options) {

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
    Scroller.prototype = {

        VERSION:"1.0.0",
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
            //屏幕卷入距离
            var _scrollTop = $(document).scrollTop();
            
            var _startTop = this.opts.start || this.$el.offset().top;
            var _endTop = this.opts.end || _startTop + this.$el.outerHeight();

                console.log(this.opts.start instanceof $)
            this.opts.start && this.opts.start instanceof $ && (_startTop = this.opts.start.offset().top),
            this.opts.end && this.opts.end instanceof $ && (_endTop = this.opts.end.offset().top),
                _scrollTop > _startTop + this.opts.startThreshold && _scrollTop < _endTop - this.opts.stopThreshold ? this.opts.onStart.apply(this) : this.opts.onEnd.apply(this),
                this.opts.onScroll.apply(this)
        }
    };
    
    
    $.fn.scroller = function(c, d) {
        return this.each(function() {
            var e = new Scroller(this,c,d);
            $(this).data("scroller", e)
        })
    }
}(jQuery);