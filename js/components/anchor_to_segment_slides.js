/*define(['jquery', 'owl.carousel.min'], function() {


var anchor = {}
anchor.goOffices = function (arg) {
	document.getElementById('Offices');
}
anchor.goRetail = function (arg) {
	document.getElementById('Retail');
}

anchor.methodOffice = function (arg) {
	window.location = "segment.html?Office";
}

anchor.methodRetail = function (arg) {
	window.location = "segment.html?Retail";
}

return anchor;

});



	goRetail: function() {
		window.location = "segment.html?Retail";
	},
	goHospitality: function() {
		window.location = "segment.html?Hospitality";
	},
	goIndustry: function(){
		window.location = "segment.html?Industry";
	},
	goOther: function() {
		window.location = "segment.html?Other";
	},

	location: function() {
	 	var office = document.getElementById('Offices');
	 	office.addEventListener(click, goOffices, false);

	 	var retail = document.getElementById('Retail');
	 	retail.addEventListener(click, goRetail, false);
	}




return {
	goOffices: function() {
		window.location = "segment.html?Offices";
	},
	goRetail: function() {
		window.location = "segment.html?Retail";
	},
	goHospitality: function() {
		window.location = "segment.html?Hospitality";
	},
	goIndustry: function(){
		window.location = "segment.html?Industry";
	},
	goOther: function() {
		window.location = "segment.html?Other";
	}
}

});

*/
function goOffices () {
    window.location = "segment.html?Offices";

}

function goRetail () {
    window.location = "segment.html?Retail";

}
function goHospitality () {
    window.location = "segment.html?Hospitality";

}
function goIndustry () {
    window.location = "segment.html?Industry";

}
function goRenewables () {
    window.location = "segment.html?Renewables";

}
function goOther () {
    window.location = "segment.html?Other";

}




function loc_search () {

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

