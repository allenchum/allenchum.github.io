$(function() {
  $("#arrow-1").click(function() {
    var winTop = $(window).scrollTop();
    var scene = [
      ".welcome",
      ".whoAmI",
      ".science",
      ".sketch",
      ".web",
      ".projects",
      ".contact"
    ];

    for (var i = 0; i < scene.length; i++) {
      if ($(scene[i]).offset().top-100 > winTop) {
        $("html, body").animate(
          { scrollTop: $(scene[i]).offset().top},
          1800
        );
        return; 
      }
    }
  });
});
