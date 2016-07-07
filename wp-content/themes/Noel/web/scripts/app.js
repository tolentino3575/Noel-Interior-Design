jQuery(document).ready(function(){
    jQuery(document).foundation();

    stLight.options({publisher: "31abfba6-0978-4139-8479-d6e96f61d25f", doNotHash: true, doNotCopy: true, hashAddressBar: false});

    jQuery('.img-slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
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
        padding: 0,
        width: 'auto',
        height: 'auto',
        autoResize: true,
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
        beforeShow : function() {
            this.title = ' <small class="num">' + (this.index + 1) + ' of ' + this.group.length + ' </small>' + (this.title ? '' + this.title + '' : '');
        }
    });
});
