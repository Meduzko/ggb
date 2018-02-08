function mainjsfunction(inputFieldValue)
{
    console.log(inputFieldValue);  
    //do something with input field value
}
function displaySuccsess () {
    var succsess = document.getElementById("succsess_popup_text");
    succsess.style.display = 'block';
}
$(document).ready(function(){
    var name = [];//document.getElementById('appointment_name').value;
    var email = [];//document.getElementById('appointment_email').value;
    var phone = [];//document.getElementById('appointment_phone').value;
/*
    var user = JSON.stringify({
    	name: this.name,
    	email: this.email,
    	phone: this.phone
    });
    */
    

    $("#appoitment_send").click(function(){ 
    	var data = {};
    	data.name = $("#appointment_name").val();
    	data.email = $("#appointment_email").val();
    	data.phone = $("#appointment_phone").val();
    	data.kwh = $("#appointment_kwh").val();
        data.selected_segment = $("#selected_segment").val();

  		mainjsfunction(name + " " + email + " " + phone);

					$.ajax({
						type: 'POST',
						data: JSON.stringify(data),
				        contentType: 'application/json',
                        url: 'https://www.globalgreenbuildings.com/appoitment_send',                      
                        //url: 'http://127.0.0.1:3001/appoitment_send',						
                        success: function(data) {
                            console.log('success');
                            console.log(JSON.stringify(data));
                            displaySuccsess();
                        },
                        error: function (xhr, textStatus, errorThrown) {
                            console.log(xhr, textStatus, errorThrown); //always the same for refused and insecure responses.
                        }
                    });
    });

});