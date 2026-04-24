$(function () {
  $(".o-p-gallery-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".o-p-gallery-list-left",
    nextArrow: ".o-p-gallery-list-right",
  });
});
