$.fn.visible = function (partial) {
    var $t = $(this),
        $w = $(window),
        viewTop = $w.scrollTop(),
        viewBottom = viewTop + $w.height() - $w.height() / 3,
        _top = $t.offset().top,
        _bottom = _top + $t.height(),
        compareTop = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

};

// $('body').on('each', ".item", function (i, el) {
//     el = $(el);
//     if (el.visible(true)) {
//         el.addClass("active");
//     } else {
//         //  el.removeClass("active");
//     }            
// });

$(window).scroll(function (event) {
    $(".items").each(function (i, el) {
        el = $(el);
        if (el.visible(true)) {
            el.addClass("active");
        } else {
            // el.removeClass("active");
        }
    });
}); 