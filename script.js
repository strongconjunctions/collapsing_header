$(window).scroll(function() {

    // scrollTop is a jQuery object that will tell you how much from the window you've scrolled
    var Scroll = $(this).scrollTop();


    $('#banner-area').css({
        // we're manipulating the 'translate' value of the 'transform' property
        // so what we need is to divide the pace of the scroll by 2
        'transform': 'translate(0px, ' + Scroll / 80 +'%)'
    });

    $('.banner').css({
        'transform': 'translate(0px, -' + Scroll / 4.8 +'%)'
    });

});