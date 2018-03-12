$(window).scroll(function() {
  /* Check the location of each desired element */
  $(".hide").each(function(i) {
    var top_of_object = $(this).offset().top;
    var middle_of_window = $(window).scrollTop() + $(window).height() * 2 / 3;

    /* If the object is completely visible in the window, fade it it */
    if (middle_of_window > top_of_object) {
      $(this).animate({ opacity: "1" }, 2000);
    }
  });

  //background image appear
  $(".appear").each(function(i) {
    var top_of_object = $(this).offset().top;
    var middle_of_window = $(window).scrollTop() + $(window).height() * 2 / 3;

    /* If the object is completely visible in the window, fade it it */
    if (middle_of_window > top_of_object) {
      $(this).animate({ opacity: "0.15" }, 2000);
    }
  });

  //Everything appear at the end of page

  if (
    $(window).scrollTop() + $(window).height() +$(".contact").height()>=
    $(document).height()
  ) {
    $(".hide").animate({ opacity: "1" }, 2000);
    $(".arrow").css("display","none");
  }else{
    $(".arrow").css("display","block");
  }

  var bottom_of_window = $(window).scrollTop() + $(window).height();

  var bottom_of_fire =
    $("#fire_outer").offset().top + $("#fire_outer").height();

  if (bottom_of_window > bottom_of_fire) {
    $("#fire_outer").css("display", "fixed");
  }
});
