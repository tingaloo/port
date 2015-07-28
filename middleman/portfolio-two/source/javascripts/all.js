//= require_tree .

$(document).ready(function(){
  // $("#nav-contact").click(function(e){
  //   e.preventDefault();
  //   $("#contact-info").fadeToggle("fast", function () {});
  // });


  // $(".jumper").on("click", function(e) {
  //   e.preventDefault();
  //   $("body, html").animate({
  //     scrollTop: $( $(this).attr('href') ).offset().top
  //   },600);
  // });

  // ONLOAD ANIMATIONS
  setTimeout(function() {
    $(".hello").addClass('underline');
    $(".intro").toggle('slow') ;
  }, 500);

  // PROJECT THUMBNAIL ANIMATIONS
  $(".project-pic").mouseover(function(){
    $(this).parent().siblings().animate({
      opacity: .5
    },200
    );
  });
  $(".project-pic").mouseout(function(){
    $(this).parent().siblings().animate({
      opacity: 1
    },200
    );
  });

  // checks if jquery element is in view.
  function isScrolledIntoView(elem)
{
    var $window = $(window);
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}



  //on scroll event handler
$(window).scroll(function() {
    if(isScrolledIntoView('.project-pic'))
    {
        $(".projects-header-text").addClass('highlight');
    }
    if(isScrolledIntoView('#about-block'))
    {
        $(".about-header-text").addClass('underline');
    }

});

});
