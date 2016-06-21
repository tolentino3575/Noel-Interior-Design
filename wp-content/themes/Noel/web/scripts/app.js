jQuery(document).foundation();

jQuery(document).ready(function(){
    jQuery('.img-slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    });

    jQuery('.service-function').click(function(){
        jQuery('.function-text').toggle();
    });
    jQuery('.service-access').click(function(){
        jQuery('.access-text').toggle();
    });
    jQuery('.service-commit').click(function(){
        jQuery('.commit-text').toggle();
    });
    jQuery('.service-collab').click(function(){
        jQuery('.collab-text').toggle();
    });
});
