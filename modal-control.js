$(document).ready(function() {
  document.getElementById("modal-wrapper").style.display = "block";
});
$(".ok").click(function() {
  document.getElementById("rain").play();
  setTimeout(function(){
    $(".keyart").trigger("click");
  },1500)
});
