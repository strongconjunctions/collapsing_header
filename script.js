


$(document).ready(function() {
    $(window).scroll(function() {

        // scrollTop is a jQuery object that will tell you how much from the window you've scrolled
        var Scroll = $(this).scrollTop();

        /*$('.registration').css({
            'transform': 'translate(0px, -' + Scroll / 2.2 +'%)'
        });
*/
        $('#banner-area').css({
            // we're manipulating the 'translate' value of the 'transform' property
            // so what we need is to divide the pace of the scroll by 2
            'transform': 'translate(0px, ' + Scroll / 120 +'%)'
        });

        $('.banner').css({
            'transform': 'translate(0px, -' + Scroll / 5.96 +'%)'
        });

    });


   // Opens the search form
    $('.search button').on('click', function() {
        $('#search-form').addClass('open-search-form');
    });

    // Closes the search form
    $('#search-form .fa-circle-o').on('click', function() {
        $('#search-form').removeClass('open-search-form');
    });

    $('.nav-toggle').on('click', function() {
        $('.main-nav').toggleClass('open-nav');
        $('.nav-toggle').toggleClass('fa-bars');
    });

    $('#banner-area, #content').on('click', function() {
        $('.main-nav').removeClass('open-nav');
        $('.nav-toggle').addClass('fa-bars');
    });


   // Opens sub-sub in mobile view
    $('.sub-nav li').on('click', function() {
        $('.sub-sub-nav').toggleClass('open-sub-sub');
    });

    // Closes the main-nav panel
    $('.main-nav > .fa-circle-o').on('click', function() {
        $('.main-nav').removeClass('open-nav');
        $('.nav-toggle').toggleClass('fa-bars');
    });
 
    // Opens the sub-nav panel in mobile view
    /*$('.main-nav li').on('click', function() {
        $('.sub-nav').addClass('open-mob-sub-nav');
    });
*/

    // Closes the sub-nav panel
    $('.sub-nav .fa-circle-o').on('click', function() {
        $('.sub-nav').removeClass('open-mob-sub-nav');
    });

});