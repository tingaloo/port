//= require_tree .

$(document).ready(function(){
  $("#nav-contact").click(function(e){
    e.preventDefault();
    $("#contact-info").fadeToggle("fast", function () {});
  });


  $(".jumper").on("click", function(e) {
    e.preventDefault();
    $("body, html").animate({
      scrollTop: $($(this).attr('href')).offset().top
    },600);
  });

});
