jQuery(document).foundation();

jQuery(document).ready(function(){
    jQuery('.imgslider').slick({
        infinite: true,
        speed: 300,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    });
});
