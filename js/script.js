$(document).ready(function() {
    $('body').fadeIn(1000);
    
    //Mobile Menu Button Script
    $('#menu').click(function() {
        if ( $('#nav-items').css('display') === 'none' ) {
            $('#nav-items').fadeIn();
        } else if ( $('#nav-items').css('display') === 'block' ) {
            $('#nav-items').fadeOut();
        }
    });
    
    
    //Navigation Menu Script
     $('a[href^="#"]').on('click', function (e) {
         e.preventDefault();

         var target = this.hash,
             $target = $(target);

         $('html, body').stop().animate({
             'scrollTop': $target.offset().top - 50
         }, 900, 'swing', function () {
             window.location.hash = target;
         });
     });
    
    //Clients Scroll Script
    $('#forwardArrow').click(function() {
      $('.artist-holder').animate({
        marginLeft: "-=200px"
      }, "fast");
    });
    $('#forwardArrow').click(function() {
      $('.artist-holder').animate({
        marginLeft: "-=200px"
      }, "fast");
    });
    
});