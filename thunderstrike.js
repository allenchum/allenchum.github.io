$(document).ready(function() {
  $(".keyart").click(function() {
    $("#keyart-scrim").css("opacity", "1");
    $("#keyart-scrim").fadeTo("slow", 0);
    document.getElementById('thunder').play();
  });

  $(".keyart").easyAudioEffects({
    mp3: "audio/Storm_exclamation.mp3",
    eventType: "click" // or "click"
  });
});
