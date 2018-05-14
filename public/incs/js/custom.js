var $docwidth=0;

$(document).ready(function () {
    $docwidth=$(window).width();
    function SetResizeContent() {
        var minheight = $(window).height();
        $(".full-screen").css('min-height', minheight);
    }
    SetResizeContent();
    $('#rotate').rotaterator({fadeSpeed: 1000, pauseSpeed: 300});
});

/* =================================
 Anchor Link
 ==================================== */

$('.inner-link').smoothScroll({
    speed: 900,
    offset: 0
});

/* =================================
 Text Animation
 ==================================== */
(function ($) {
    $.fn.extend({
        rotaterator: function (options) {

            var defaults = {
                fadeSpeed: 500,
                pauseSpeed: 100,
                child: null
            };

            var options = $.extend(defaults, options);

            return this.each(function () {
                var o = options;
                var obj = $(this);
                var items = $(obj.children(), obj);
                items.each(function () {
                    $(this).hide();
                })
                if (!o.child) {
                    var next = $(obj).children(':first');
                } else {
                    var next = o.child;
                }
                $(next).fadeIn(o.fadeSpeed, function () {
                    $(next).delay(o.pauseSpeed).fadeOut(o.fadeSpeed, function () {
                        var next = $(this).next();
                        if (next.length == 0) {
                            next = $(obj).children(':first');
                        }
                        $(obj).rotaterator({child: next, fadeSpeed: o.fadeSpeed, pauseSpeed: o.pauseSpeed});
                    })
                });
            });
        }
    });
})(jQuery);

$(window).resize(function() {
        if($docwidth!=$(window).width())
        {
            location.href='http://themezaa.com/html/sturlly';
        }

   
});