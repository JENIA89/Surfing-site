$(function () {
  $(".header__slider").slick({
    fade: true,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="arrows" />',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="arrows" />',
    asNavFor: ".slider-dotshead",
  });

  $(".slider-dotshead").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: ".header__slider",
  });

  $(".serf-slider").slick({
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="arrows" />',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="arrows" />',
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slider-map",
    responsive: [
      {
        breakpoint: 1210,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".slider-map").slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".serf-slider",
    focusOnSelect: true,
  });

  $(".holder__slider, .shop__slider").slick({
    fade: true,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="arrows" />',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="arrows" />',
  });

  $(
    '<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>'
  ).insertAfter(".quantity input");
  $(".quantity").each(function () {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find(".quantity-up"),
      btnDown = spinner.find(".quantity-down"),
      min = input.attr("min"),
      max = input.attr("max");

    btnUp.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  });

  $(".quantity-button").on("click", function () {
    var parents = $(this).parents(".holder-slider__info");
    let sum =
      $(".sum", parents).data("nights") * $(".nights", parents).val() +
      $(".sum", parents).data("guests") * $(".guests", parents).val();
    $(".sum", parents).html("$" + sum);
  });

  // здесь рассчитывает сумму с исходными значениями !
  $(".quantity").each(function () {
    var parents = $(this).parents(".holder-slider__info");
    let sum =
      $(".sum", parents).data("nights") * $(".nights", parents).val() +
      $(".sum", parents).data("guests") * $(".guests", parents).val();
    $(".sum", parents).html("$" + sum);
  });

  $(".surfboard-box__circle").on("click", function () {
    $(this).toggleClass("active");
  });

  $(".menu-btn").on("click", function () {
    $(".menu").toggleClass("active");
  });

  new WOW().init();
});
