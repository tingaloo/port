$(document).ready(function() {

  //card click opens the card.
  $(".card > h1").click(function() {
    // $(this).children("ul").css("display", "block");
    $(this).siblings().fadeToggle("fast", function() {
    });


  });

  //default toggles.

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

  $("#art-toggle").click(function() {
    $(".fun-back").fadeToggle("fast", function() {});
    $(".art-project").fadeToggle("fast", function () {});
    $(".default").fadeToggle("fast", function () {});
  });

  function click_all_open_cards(card_type) {
    $(card_type).each(function () {
      if($(this).children('ul, p').css("display") == 'block'){
        $(this).children('h1').trigger('click');
    }
    });
  }


  $("#rails-back-toggle").click(function() {

    click_all_open_cards('.rails-project');
    $(".rails-back").fadeToggle("fast", function() {});
    $(".rails-project").fadeToggle("fast", function() {});
    $(".default").fadeToggle("fast", function () {});
  });

  $("#static-back-toggle").click(function() {

    click_all_open_cards('.static-project');
    $(".static-back").fadeToggle("fast", function() {});
    $(".static-project").fadeToggle("fast", function() {});
    $(".default").fadeToggle("fast", function () {});

  });

  $("#fun-back-toggle").click(function() {

    click_all_open_cards('.art-project');

    $(".fun-back").fadeToggle("fast", function() {});
    $(".art-project").fadeToggle("fast", function() {});
    $(".default").fadeToggle("fast", function () {});

  });


  // Clicking a card changes the background to card context.

  $('#toggle-rails-art').click(function() {

    $(".name-card").fadeToggle("fast", function() {});

  });

  $('#toggle-project-rails-novelshare').click(function() {
  })

  $('#toggle-cmyk-site').click(function() {
    $(".site-cmyk").fadeToggle("slow", function() {});
    $(".name-card").fadeToggle("fast", function() {});
  })


    // $(".contact").click(function() {
  //   $(this).children("h1").text("ting.lew@gmail.com 240.418.1754");
  // })


});
