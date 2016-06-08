jQuery(document).foundation();

$(document).ready(function(){
    $('.imgslider').slick({
        infinite: true,
        speed: 300,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
});
