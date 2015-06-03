$(document).ready(function(){



  function fade(){
    $("#oj").fadeIn(3000);
    $("#oj").fadeOut(3000);
    fade();
  };
  fade();

});

