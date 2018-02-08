$(document).ready(function() {
    if (($(window).width() >= 768) && ($(window).width() <= 1024)) {
        $('.c-finance').owlCarousel({
            responsive: {
                768: {
                    items: 2,
                    dots: true,
                    loop: true,
                    center: true
                }
            }
        });
    } else {
        $('.c-finance').owlCarousel('destroy');
    }


    $(window).on('resize', function() {
        if (($(window).width() >= 768) && ($(window).width() <= 1024)) {
            $('.c-finance').owlCarousel({
                responsive: {
                    768: {
                        items: 2,
                        dots: true,
                        loop: true,
                        center: true
                    }
                }
            });
        } else {
            $('.c-finance').owlCarousel('destroy');
        }
    });
});