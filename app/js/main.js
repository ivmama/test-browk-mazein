$(document).ready(function(){
  // @ts-ignore

  // INDETERMINATE CHECKBOX

  // $("#accord").prop("indeterminate", true);

  // TABS FORM

  $('.hello__enter-button').on("click", function (e) {
    e.preventDefault();
    $(".hello__enter-button").removeClass('hello__enter-button--active');
    $(".hello__form").removeClass("hello__form--active");

    $(this).addClass("hello__enter-button--active");
    $($(this).attr('href')).addClass("hello__form--active");
  });

  $('.hello__enter-button').first().click();




  $('.menu__btn').on('click', function(){
    $('.menu__btn').toggleClass('menu__btn--active')
    $('.menu').toggleClass('menu--active')
});

$('.menu__list-link').on('click', function(){
    $('.menu__btn').removeClass('menu__btn--active')
    $('.menu').removeClass('menu--active')
});


  // VALIDATION OF FORM

  $("#hello").validate({
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 30,
      },
      email: {
        required: true,
        email: true,
      },
      phone: {
        required: true,
        digits: true,
      },
      accord: {
        required: true,
      },
    },
    messages: {
      username: {
        required: "This field is required",
        minlength: "Name must be at least 2 characters",
        maxlength: "The maximum number of characters is 30",
      },
    },
  });
});
