//= require_tree .

$(document).ready(function(){
  $("#nav-contact").click(function(e){
    e.preventDefault();
    $("#contact-info").fadeToggle("fast", function () {});
  });


  $(".jumper").on("click", function(e) {
    e.preventDefault();
    $("body, html").animate({
      scrollTop: $( $(this).attr('href') ).offset().top
    },600);
  });


  setTimeout(function() {
    $(".hello").addClass('underline');
    $(".intro").toggle('slow') ;
  }, 500);


// -webkit-transform: scaleX(0);
//         -ms-transform: scaleX(0);
//         transform: scaleX(0);

  $(".project-pic").mouseover(function(){
    // $(this).css("box-shadow", "0 2px 5px 0 rgba(0, 0, 0, 0.26)");
    $(this).parent().siblings().animate({
      opacity: .5
    },200
    );
  });
  $(".project-pic").mouseout(function(){
    // $(this).css("box-shadow", "0 2px 5px 0 rgba(0, 0, 0, 0.26)");
    $(this).parent().siblings().animate({
      opacity: 1
    },200
    );
  });

//getBoundingClientRect function doesn't work in all browsers.
//   function test( element ) {
//     var i = $('.hello');
//     var elementTop    = i.getBoundingClientRect().top,
//         elementBottom = $('.hello').getBoundingClientRect().bottom;

//     return elementTop >= 0 && elementBottom <= window.innerHeight;
// }
//find out how to pass elements from into here,
//if the above doesn't work.

  function isScrolledIntoView(elem)
{
    var $window = $(window);
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function() {
    if(isScrolledIntoView('.project-pic'))
    {
        $(".projects-header-text").addClass('highlight');
    }
    // if(test('.project-header')){
    //   $(".projects-header-text").addClass('highlight');
    // }
});

});
