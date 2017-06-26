/**
 * Created by OLEG on 13.06.2017.
 */
$('.sl').slick({
    dots: true
});
$('.review').slick({
    dots: true
});
$('.news-slider').slick({
    dots: true,
    vertical: true,
    verticalSwiping: true,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                arrows: false
            }
        }
    ]
});
$(function() {

    /*wow init*/
    new WOW().init();
});
