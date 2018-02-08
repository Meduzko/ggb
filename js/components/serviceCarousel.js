$(document).ready(function(){

$(".owl-carousel").owlCarousel({
        loop:true,
        margin:30,
        nav: false,
        dots: false,
        autoWidth:false,
        startPosition: 1,
        center: true,
        //autoHeight: true,
        //items:4
        responsive : {
            0 : {
                items:1,
                //startPosition: 0
            },
            768 : {
                items:3,
              //  center:true,
              //startPosition: 1,
            },
            1366 : {
                items:3,
                //startPosition: 1,
            },
            1600 : {
                items:3,
                //startPosition: 1,
            }
    } 
})



if ($(window).width() < 768) {
    $(".owl-carousel").owlCarousel({
        responsive : {
            0 : {
                items:1,
                startPosition: 0
            }
    }
    })
    //$(".owl-carousel").trigger('refresh.owl.carousel');
    $(".owl-carousel").trigger('prev.owl.carousel', 0);
    console.log("width <= 768");
}



    $('.customNextBtn').click(function() {
    $(".owl-carousel").trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.customPrevBtn').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        $(".owl-carousel").trigger('prev.owl.carousel');
    })

});