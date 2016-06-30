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

    jQuery('.contact a').fancybox({
        helpers: {
            overlay: {
                css: {
                    'background' : 'rgba(255, 255, 255, 0.9)'
                }
            }
        },
        tpl: {
            closeBtn: '<a title="Close" class="fancybox-item fancybox-close my-contact-close" href="javascript:;"></a>'
        },
        padding: 0,
    });
    jQuery('.fancybox').fancybox({
        helpers: {
            title: {
                type: 'outside',
                position: 'top',
            },
            overlay: {
                css: {
                    'background' : 'rgba(255, 255, 255, 0.9)'
                }
            }
        },
        tpl: {
            closeBtn: '<a title="Close" class="fancybox-item fancybox-close my-close" href="javascript:;"></a>',
            next: '<a title="Next" class="fancybox-nav fancybox-next my-next" href="javascript:;"><span></span></a>',
            prev: '<a title="Previous" class="fancybox-nav fancybox-prev my-prev" href="javascript:;"><span></span></a>'
        },
        padding: 0,
    });
});
