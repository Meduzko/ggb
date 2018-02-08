window.onload = function(){
      
    if (location.search == "?Offices") {
    /*$('.c-carousel__info').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        navText: false,
        startPosition: 0
    });
    */
     $('.c-carousel__info').trigger('to.owl.carousel', [0, 0]);

    }if (location.search == "?Retail") {
   /* $('.c-carousel__info').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        navText: false,
        startPosition: 1
    });
    */
    $('.c-carousel__info').trigger('to.owl.carousel', [1, 0]);
        console.log(location.search + " " + "Done!");

    } if (location.search == "?Hospitality") {
          /*  $('.c-carousel__info').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        navText: false,
        startPosition: 2
    });
	*/
	 $('.c-carousel__info').trigger('to.owl.carousel', [2, 0]);
    }if (location.search == "?Industry") {
          /*  $('.c-carousel__info').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        navText: false,
        startPosition: 3
    });
*/
 	$('.c-carousel__info').trigger('to.owl.carousel', [3, 0]);
    }if (location.search == "?Renewables") {
       /*     $('.c-carousel__info').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        navText: false,
        startPosition: 4
    });*/
 	$('.c-carousel__info').trigger('to.owl.carousel', [4, 0]);
    }if (location.search == "?Other") {
        /*    $('.c-carousel__info').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        navText: false,
        startPosition: 5
    });
    */
	 $('.c-carousel__info').trigger('to.owl.carousel', [5, 0]);

	}

};


                //----------------------------------------Select item with id ---------------------------
/*
var owl = $('.c-carousel__info').data('owlCarousel');
        $('#2_th_el').click(function(){
         $('.c-carousel__info').trigger('to.owl.carousel', 1)



});

*/