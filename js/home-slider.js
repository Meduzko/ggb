window.onload = function () { 
/*
var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoHeight: false,
        setWrapperSize: "450px",
        autoplay: 3000,
        loop: true
    
        
    });

*/
 var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 15,
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });



};