require.config({
    //baseUrl: "js",
    paths: {
        "jquery" : 'vendor/jquery-3.0.0.min',
        "owl" : 'vendor/owl.carousel.min',
        "responsiveTabs" : 'vendor/jquery.responsiveTabs',
        "methods" : 'components/chatbox_require',
        "anchor" : 'components/anchor_to_segment_slides_require'
    }


});

require([
    
    'components/chatbox_require',
    'components/anchor_to_segment_slides_require'
 

], function(chatbox_require) {

chatbox_require.showAlert();
//anchor_to_segment_slides_require.search();

});