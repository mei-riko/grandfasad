import $ from 'jquery'
$(document).ready(() =>{
    $("a.scroll").click(function() {
        $("html, body").animate({
           scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
           duration: 500,
           easing: "swing"
        });
        return false;
    });
    
    // Index Slider
    $('.slider .slider__image').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        fade: true,
    });
});