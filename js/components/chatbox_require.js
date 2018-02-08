define(['components/chatbox_require'], function() {


return {

showAlert: function() {
  var elem = document.getElementById("chat");
  var elem_close = document.getElementById("close_chat");
  var div = document.getElementById("popup_chat_box");
    elem.addEventListener("click", function(){
    if(div.style.display == 'block') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
  });

    elem_close.addEventListener("click", function(){
    if(div.style.display == 'block') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
  });
}



};



});