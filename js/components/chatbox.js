function openbox() {
    var div = document.getElementById("popup_chat_box");
    //var tt_div = document.getElementById(tt);
    if(div.style.display == 'block') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
}