// Inicializar Swiper
var swiper = new Swiper('#newsliderid', {
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      480: {
        slidesPerView: 1,
      }
    }
});
  
  