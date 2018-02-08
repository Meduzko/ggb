$(document).ready(function() {

 $('a[href^="#c-modal"]').on('click', function(a) {
        a.preventDefault();
        var b = $(this).attr('href');
        $(b).addClass('c-modal--open');

        if ($(document).height() > $(window).height()) {
            $('body').addClass('c-modal--scroll');
        }

    }), $('.c-modal, .c-modal__close').on('click', function() {
        $('body').removeClass('c-modal--scroll');
        $('.c-modal').removeClass('c-modal--open');


    }), $('.c-modal__content').on('click', function(a) {
        a.stopPropagation();
    })
     

    //------------------------------------------------------------
    $('.my_carousel').owlCarousel({
    margin:10,
    loop:true,
    autoWidth:true,
    items:4
})

    // no click to phone
    // ------------------------------------------------------------
    if ($(window).width() > 1024) {
        $('a[href^="tel"]').on('click', function(e) {
            e.preventDefault();
        });
    }


    // carousel bringing
    // ------------------------------------------------------------
    $('.c-carousel__bringing').owlCarousel({
        responsive: {
            0: {
                items: 1,
                loop: true
            },
            768: {
                items: 2
            },
            990: {
                items: 3
            },
            1025: {
                items: 4,
                loop: false
            }
        }
    })

    // carousel info
    // ------------------------------------------------------------
  
    $('.c-carousel__info').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        navText: false,

        
    })


        $('.c-carousel_index__info_index--title').owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        loop: true,
        navText: false,
        autoplay: true,
        autoplayTimeout: 3000


        
    })

 });