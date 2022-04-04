$(document).ready(function(){
    $('.back-to-top').hide(300);
    var MAX_WIDTH = 767, $window = $(window), toggleEnabled = true;

$window.on('resize', function() {
    if ($window.width() < MAX_WIDTH) {
        $("#list-div").hide(300);
        $('#toggle-btn').show();
    } 
    else {     
        $("#list-div").show(300);
        $('#toggle-btn').hide();

        toggleEnabled = true;
    }
    if($window.width()<MAX_WIDTH){
        $("#toggle-btn").click(function () {
            $("#list-div").toggle(300);
           $("#downicon").toggleClass("down-icon")
        });
        $("#resume-btn").toggleClass("center-block")
    }
});
$window.trigger('resize');

$(window).scroll(function() {
    if ($(this).scrollTop() > 520) {
        $('.back-to-top').show(300);
      $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').hide();
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });
});
