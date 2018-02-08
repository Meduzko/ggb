

//});
// Anchor to segment slides
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


// Segement cheked values
function check() {
	var basic = 0;
	var add = 0;

	if (document.getElementById("id_0").checked) {
		add += 5;
	}
	if (document.getElementById("id_1").checked) {
		add += 2;
	}
	if (document.getElementById("id_2").checked) {
		add += 8;
	}
	if (document.getElementById("id_3").checked) {
		add += 6;
	}
	var p = basic + add;
	var price = p + "%";
	document.getElementById('total_result').innerHTML = price;
}

//check();


 