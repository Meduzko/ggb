
//My buildings pop up
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
//Make appointment pop up
 function open_modal() {
 	var b = document.getElementById("popup_back"); 				//background
 	var p = document.getElementById("appointment_popup");		//popup content
 	if ((b.style.display !== "block") && (p.style.display !== "block")){
 		b.style.display = "block";
 		p.style.display = "block";
 	} else {
 		b.style.display = "none";
 		p.style.display = "none";
 	}
 }
 
function close_modal() {
	var b = document.getElementById("popup_back"); 				//background
 	var p = document.getElementById("appointment_popup");		//popup content
 	b.style.display = "none";
 	p.style.display = "none";
}

document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key == "Escape" || evt.key == "Esc");
    } else {
        isEscape = (evt.keyCode == 27);
    }
    if (isEscape) {
        document.getElementById("popup_back").style.display = 'none';
        document.getElementById("appointment_popup").style.display = 'none';
        document.getElementById("login_popup").style.display = 'none';
    }
};


//(function() {
  //  $(document).ready(function(){
  //form validate ------------------------
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
function validateName(name) {
    var re = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
    return re.test(name);
}
function validatePhone(phone) {
    var re = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    return re.test(phone);
}


function val_popup() {
    /*
    var name = document.getElementById("appointment_name");
    var email = document.getElementById("appointment_email");
    var phone = document.getElementById("appointment_phone");
    var kwh = document.getElementById("appointment_kwh");
*/
    var name = $("#appointment_name").val();
    var email = $("#appointment_email").val();
    var phone = $("#appointment_phone").val();
    var kwh = $("#appointment_kwh").val();

    if (validateName(name)) {
        $('#appointment_name').addClass("img-background");
        $("#appointment_name").css("box-shadow", "0 0 24px rgba(0,0,0,.15)");
    } else {
       $("#appointment_name").css("box-shadow", "0 0 12px rgba(255, 123, 123, .7)");
       $('#appointment_name').removeClass("img-background");
    }
    if (validateEmail(email)) {
        $('#appointment_email').addClass("img-background");
        $("#appointment_email").css("box-shadow", "0 0 24px rgba(0,0,0,.15)");
    }else {
        $("#appointment_email").css("box-shadow", "0 0 12px rgba(255, 123, 123, .7)");
        $('#appointment_email').removeClass("img-background");
    }
    if (validatePhone(phone)) {
        $('#appointment_phone').addClass("img-background");
        $("#appointment_phone").css("box-shadow", "0 0 24px rgba(0,0,0,.15)");
    }else {
        //$("#appointment_phone").css("box-shadow", "0 0 12px rgba(255, 123, 123, .7)");
        //$('#appointment_phone').removeClass("img-background");
    }
    

}
//val_popup();

//});
//})();



