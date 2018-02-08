$(document).ready(function() {


    // c-modal
    // ------------------------------------------------------------
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
    });
     

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
    });

    // carousel info
    // ------------------------------------------------------------
  
    $('.c-carousel__info').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        navText: false,

        
    });
//-------------------------------------Index carousel---------------------------------------
    $('#carousel_full_index').owlCarousel({
        responsive: {
            0: {
                items: 1,
                loop: true
            },
            768: {
                items: 1
            },
            990: {
                items: 1
            },
            1025: {
                items: 1,
                loop: true
               
            }
        }
    });

    // carousel info
    // ------------------------------------------------------------
  
    $('.c-carousel_index__info_index--title').owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        loop: true,
        navText: false,
        autoplay: true,
        autoplayTimeout: 3000


        
    });


//----------------------------------------Select item with id ---------------------------
/*
var owl = $('.c-carousel__info').data('owlCarousel');
        $('#2_th_el').click(function(){
         $('.c-carousel__info').trigger('to.owl.carousel', 1)



});

*/






 

}); // end ready
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


/*--------------------segement cheked values---------------------- */
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



/*------------------------- mobile menu-------------------------------------------------------------- */
/*
$(document).ready(function() {
  // $('.site-links').hide().before('<input type="button" value="View" href="#" id="menu_control_test" >'); 
    $('span#menu_control').click(function (){
        $('.site-links').slideToggle(800);
        return false;
    });

        $('a#menu_control_2').click(function (){
        $('.auth-links').slideToggle(800);
        return false;
    });
});
 */

 

//--------------Popup window------------------------
  function openbox() {
    var div = document.getElementById("tt2");
    //var tt_div = document.getElementById(tt);
    if(div.style.display == 'block') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
  }
/* ----------------------POPUP MENU----------------------------- */


      function open_popup() {
    var div = document.getElementById("login_popup");
    //var tt_div = document.getElementById(tt);
    if(div.style.display == 'block') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
  }


/*
  function succsess_msg () {
    var btn = document.getElementById("succsess_mail");
    var comment = document.getElementById("popup_content");
            comment.style.display = 'none';
          if (btn.style.display == 'block') {
            btn.style.display = 'none';

    }
    else {
        btn.style.display = 'block';
    }
}

*/
  //form valid ------------------------
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
    var btn = document.getElementById("succsess_mail");
    var comment = document.getElementById("popup_content");
  $("#result").text("");
  var email = $("#popup_email").val();
  if (validateEmail(email)) {
   // $("#result").text(email + " is valid :)");
    $("#result").css("color", "green");
    $("#popup_email").css("box-shadow", "0 0 12px rgba(0, 189, 227, .7)");
    comment.style.display = 'none';
    btn.style.display = 'block';

  } else {
    $("#result").text(email + " is not valid :(");
    $("#result").css("color", "red");
    $("#popup_email").css("box-shadow", "0 0 12px rgba(255, 123, 123, .7)");
  }
  return false;
}

$("#validate").bind("click", validate);


/*
*
*
*
*/

$(".dropdown img.flag").addClass("flagvisibility");

            $(".dropdown dt a").click(function() {
                $(".dropdown dd ul").toggle();
            });
                        
            $(".dropdown dd ul li a").click(function() {
                var text = $(this).html();
                $(".dropdown dt a span").html(text);
                $(".dropdown dd ul").hide();
               // $("#result").html("Selected value is: " + getSelectedValue("sample"));
            });
                        
            function getSelectedValue(id) {
                return $("#" + id).find("dt a span.value").html();
            }

            $(document).bind('click', function(e) {
                var $clicked = $(e.target);
                if (! $clicked.parents().hasClass("dropdown"))
                    $(".dropdown dd ul").hide();
            });



                $(".dropdown img.flag").toggleClass("flagvisibility");
       

