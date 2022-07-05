$(document).ready(function() {
  // Home Banner Slick Slider JS 
  $(".banner-slick-slider-home").slick({
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1400,
    fade: true,
    cssEase: 'linear'
  });
  // Testimonials Slick Slider JS
  $(".testimonials-slick-slider-home").slick({
    arrows: false,
    dots: true,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});