$(function () {
  
  $('.wrapper').fullpage({
    //options here

  });

  new Swiper('.products__items', {
    slidesPerView: 3,
    slidesPerGroup: 1,
    loop: true,
    centeredSlides: true,
    speed: 800,
    navigation: {
      prevEl: '.products__item-bprev',
      nextEl: '.products__item-bnext'
    },
  });

});