$(document).ready(function(){

  var elements = [
    '.graphic-background',
    'motion-background',
    'interactive-background',
    'about-background',
    'contact-background'];


  $("#motion-toggle").click(function() {

    //loads gifs on toggle-click not page load
    $(".motion-background").css("display", "block");
    // $(".motion-background").prepend("<div class='gif'></div><div class='gif-2'></div>");

    // $(".side-nav-right").addClass('nav-motion');
    $(".background-image").hide();
    $(".about-background").hide();
    $(".graphic-background").hide();
    $(".interactive-background").hide();


  });

  $("#graphic-toggle").click(function() {
    $(".graphic-background").css("display", "block");
    $(".background-image").hide();
    $(".motion-background").hide();
    $(".about-background").hide();
    $(".interactive-background").hide();
  });

  $("#about-toggle").click(function() {
    $(".background-image").hide();
    $(".motion-background").hide();
    $(".graphic-background").hide();

    $(".about-background").css("display", "block");
  });

  $("#contact-toggle").click(function() {
    $(".contact-background").css("display", "block");
  })

  $("#interactive-toggle").click(function(){
    $(".interactive-background").css("display", "block");
    $(".background-image").hide();
    $(".motion-background").hide();
    $(".about-background").hide();
    $(".graphic-background").hide();
  })

  $("#logo").click(function() {
    $(".background-image").css("display", "block");
    $(".motion-background").css("display", "block");
$(".graphic-background").css("display", "block");
$(".about-background").css("display", "block");
    // $(".interactive-background").css("display", "block");
  })

});
