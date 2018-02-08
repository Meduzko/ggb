define(['components/anchor_to_segment_slides_require'], function() {


return {

search: function () {

    if (location.search == "?Offices") {
    $('.c-carousel__info').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        navText: false,
        startPosition: 0
    });


    }if (location.search == "?Retail") {
    $('.c-carousel__info').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        navText: false,
        startPosition: 1
    });
       // console.log(location.search + " " + "Done!");

    } if (location.search == "?Hospitality") {
            $('.c-carousel__info').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        navText: false,
        startPosition: 2
    });

    }if (location.search == "?Industry") {
            $('.c-carousel__info').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        navText: false,
        startPosition: 3
    });

    }if (location.search == "?Renewables") {
            $('.c-carousel__info').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        navText: false,
        startPosition: 4
    });

    }if (location.search == "?Other") {
            $('.c-carousel__info').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        navText: false,
        startPosition: 5
    });

    }
}

};

 });
