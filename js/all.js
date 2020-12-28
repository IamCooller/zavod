$(document).ready(function () {
  $(".slider-main").slick({
    dots: false,
    infinite: true,
    arrows: true,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "40px",
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    prevArrow: "<img src='images/ArrowC.png' class='prev' alt='1'>",
    nextArrow: "<img src='images/ArrowCV.png' class='next' alt='2'>",
    responsive: [
      {
        breakpoint: 990,
        settings: {
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "10px",
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".companys-news-slider").slick({
    arrows: true,
    dots: false,
    slidesToShow: 3,
    autoplay: true,
    prevArrow: "<img src='images/Arrow1.png' class='prev' alt='1'>",
    nextArrow: "<img src='images/Arrow2.png' class='next' alt='2'>",
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });

  $("#menuToggle").click(function () {
    $("body").toggleClass("Error");
  });

  var searchBlock = $(".catalog-main-sidebar");
  $(document).on("click", "#open-catalog", function () {
    searchBlock.slideToggle();
    return false;
  });
});
