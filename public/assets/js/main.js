// $(document).ready(function(){
  
// });

(function($) {
  "use strict";

  // Smooth scrolling using jQuery easing
  $('.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // hide nav on the header section
  var $nav = $('#main-nav');
  $(document).scroll(function() {
    var scrolled = $(this).scrollTop();
    if (scrolled > 600) {
      $nav.fadeIn('slow');
    }
    else{
      $nav.fadeOut('slow');
    }
  });

  // responsive nav bar
  // $('.icon').click(()=>{
  //   var x = document.getElementById("nav");
  //   if(x.className === "nav"){
  //     x.className += " responsive";
  //   } else {
  //     x.className = "nav";
  //   }
  // });    
  $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });

})(jQuery); 