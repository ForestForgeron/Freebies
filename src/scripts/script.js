$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    initialSlide: 0,
    variableWidth: true,

    responsive: [
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 2,
        }
      }
    ],
  });
});
