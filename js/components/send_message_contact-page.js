$(document).ready(function(){
    var from,to,subject,text;
    $("#contact_button").click(function(){ 
        data = {};     
        data.subject=$("#contact-email").val();
        data.text=$("#contact-message").val();
        //$("#message").text("Sending E-mail...Please wait");
        /*
        $.get("https://www.globalgreenbuildings.com/contact_send",{subject:subject,text:text},function(data){
        if(data=="sent")
        {

            //$("#message").empty().html("Email is been sent at "+to+" . Please check inbox!");
            console.log("success!");
           // $("#contact-email").val("");
			//$("#contact-message").val("");
        }

});
*/        

        $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: 'https://www.globalgreenbuildings.com/appoitment_send',                        
            success: function(data) {
            console.log('success');
            console.log(JSON.stringify(data));
            }
        });
    });

$('#contact_button').on('click', function () {
	    $("#contact-email").val("");
		$("#contact-message").val("");
});

});