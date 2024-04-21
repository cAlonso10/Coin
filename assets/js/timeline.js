console.log("Script cargado");
var $element = $('.each-event, .each-event2'); 
var $window = $(window);
$window.on('scroll resize', check_for_fade);
$window.trigger('scroll');

function check_for_fade() { 
    var window_height = $window.height();
    
    $.each($element, function (event) {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_offset = $element.offset().top;
        space = window_height - (element_height + element_offset - $(window).scrollTop());
        if ($element.hasClass("each-event")) { 
            if (space < 60) {
                $element.addClass("non-focus");
            } else {
                $element.removeClass("non-focus");
            }
        } else if ($element.hasClass("each-event2")) { 
            if (space < -1190) {
                $element.addClass("non-focus");
            } else {
                $element.removeClass("non-focus");
            }
        }
    });
}
