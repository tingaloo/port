$(document).ready(function(){



  function fade(){
    $("#logo-bulb").fadeIn(3000);
    $("#logo-bulb").fadeOut(3000);
    fade();
  };
  fade();

});

