$(document).ready(function(){  
    var subject,text;
    $("#chatbox_send").click(function(){ 
        var data = {};
        data.subject = $("#popup_email").val();
        data.text = $("#text_area").val();

/*
        $.get("https://www.globalgreenbuildings.com/send",{
            subject:subject, 
            text:text
        },function(data) {
        //$.get("http://127.0.0.1:3001/send",{subject:subject,text:text},function(data){
        if(data == "sent") {

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
                        url: 'https://www.globalgreenbuildings.com/send',                      
                        //url: 'http://127.0.0.1:3001/send',                     
                        success: function(data) {
                            console.log('success');
                            console.log(JSON.stringify(data));
                        },
                        error: function (xhr, textStatus, errorThrown) {
                            console.log(xhr, textStatus, errorThrown); //always the same for refused and insecure responses.
                        }
                    });
                    
    });
    

});