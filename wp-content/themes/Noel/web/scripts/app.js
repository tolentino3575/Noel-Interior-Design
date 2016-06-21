jQuery(document).foundation();

jQuery(document).ready(function(){
    jQuery('.img-slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    });

    jQuery('.service').click(function(){
        jQuery('.service-text').toggle();
    });
});
