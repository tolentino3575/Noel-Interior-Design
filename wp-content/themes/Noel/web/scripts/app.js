jQuery(document).foundation();

jQuery(document).ready(function(){
    jQuery('.imgslider').slick({
        infinite: true,
        speed: 300,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });
});
