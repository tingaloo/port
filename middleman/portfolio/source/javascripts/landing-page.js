$(document).ready(function() {

  $("h1").click(function() {
    // $(this).children("ul").css("display", "block");
    $(this).siblings().fadeToggle("fast", function() {
    });


  });

  $("#rails-toggle").click(function() {
    $(".card").css("display", "none");
    $(".rails-back").fadeToggle("fast", function () {});
    $(".rails").fadeToggle("fast", function () {});
  });

  $("#static-site-toggle").click(function() {
    $(".static-back").fadeToggle("fast", function() {});
    $(".static-project").fadeToggle("fast", function () {});
    $(".default").fadeToggle("fast", function () {});
  });

  $("#fun-toggle").click(function() {
    $(".fun-back").fadeToggle("fast", function() {});
    $(".fun-project").fadeToggle("fast", function () {});
    $(".default").fadeToggle("fast", function () {});

    // var visible = $(".rails-art").children('p').css('display');
    // if(visible == 'block'){
    // $(".name-card").css("display", "none");
    // }
  });




  $("#rails-back-toggle").click(function() {
    $(".rails-back").fadeToggle("fast", function() {});
    $(".rails-project").fadeToggle("fast", function() {});
    $(".default").fadeToggle("fast", function () {});
  });

  $("#static-back-toggle").click(function() {
    $(".static-back").fadeToggle("fast", function() {});
    $(".static-project").fadeToggle("fast", function() {});
    $(".default").fadeToggle("fast", function () {});
  });

  $("#fun-back-toggle").click(function() {
    var visible = $(".name-card").css('display');
    var fun_project_visibility = $("#toggle-rails-art").siblings("p").css("display");

    if(fun_project_visibility =='block'){

      $('#toggle-rails-art').trigger("click");

      };


    $(".fun-back").fadeToggle("fast", function() {});
    $(".fun-project").fadeToggle("fast", function() {});
    $(".default").fadeToggle("fast", function () {});
    // if(visible == 'none')
    //   $(".name-card").fadeToggle("fast", function() {});
    // end


  });


  // Clicking a card changes the background to card context.

  $('#toggle-rails-art').click(function() {
    // var visible = $(".rails-art").children('p').css('display');
    // if(visible == 'block'){
    // $(".name-card").css("display", "none");
    // }
    $(".name-card").fadeToggle("fast", function() {});
    // else{
    // $(".name-card").css("display", "block");

    // }
    // $("#myCanvas").fadeToggle("fast", function(){});
  });

  $('#toggle-cmyk-site').click(function() {

  })


    // $(".contact").click(function() {
  //   $(this).children("h1").text("ting.lew@gmail.com 240.418.1754");
  // })


});
