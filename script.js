


$(document).ready(function() {
    $(window).scroll(function() {

        // scrollTop is a jQuery object that will tell you how much from the window you've scrolled
        var Scroll = $(this).scrollTop();

        $('.registration').css({
            'transform': 'translate(0px, -' + Scroll / 2.5 +'%)'
        });

        $('#banner-area').css({
            // we're manipulating the 'translate' value of the 'transform' property
            // so what we need is to divide the pace of the scroll by 2
            'transform': 'translate(0px, ' + Scroll / 80 +'%)'
        });

        $('.banner').css({
            'transform': 'translate(0px, -' + Scroll / 4.8 +'%)'
        });

    });


    $('.nav-toggle').on('click', function() {
        $('.main-nav').toggleClass('open-nav');
        $('.nav-toggle').toggleClass('fa-bars');
    });

    // Opens sub-nav in desktop view
    $('.main-nav > ul > li').on('click', function() {
        console.log('open sub nav');
        $('.sub-nav').addClass('open-sub-nav');
    });

/*    // Opens sub-sub in mobile view
    $('.sub-nav li').on('click', function() {
        $('.sub-sub-nav').toggleClass('open-sub-sub');
    });

    // Closes the main-nav panel
    $('.main-nav > .fa-circle-o').on('click', function() {
        $('.main-nav').removeClass('open-nav');
        $('.nav-toggle').toggleClass('fa-bars');
    });

    // Closes the sub-nav panel
    $('.sub-nav > .fa-circle-o').on('click', function() {
        $('.sub-nav').removeClass('open-mob-sub-nav');
    });
*/
});