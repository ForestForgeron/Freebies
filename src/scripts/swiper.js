// swiper initialization
new Swiper('.card-slider', {
  
  // arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  // navigation
  // bullets, current position, progressbar
  pagination: {
    el: '.swiper-pagination',
    // bullets
    clickable: true,
  },
  // slides to show
  slidesPerView: 3,
  // space between
  spaceBetween: 50,
  // slides to scroll
  slidesPerGroup: 1,
  //infinite
  loop: true,
  
});