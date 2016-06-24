jQuery(document).ready(function(){
    jQuery(document).foundation();
    
    jQuery('.img-slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    });

    jQuery('.service-text').hide();
    jQuery('.service').click(function(){
        jQuery(this).next().slideToggle();
    });
});
