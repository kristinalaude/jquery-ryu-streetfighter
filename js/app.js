$(document).ready(function() {
  $('.ryu').mouseenter(function() {
   	$('.ryu-standing-still').hide();
	$('.ryu-ready-position').show();
  })
     .mouseleave(function() {
     	   $('.ryu-ready-position').hide();
		   $('.ryu-standing-still').show();
	})

	.mousedown(function() {
  // play hadouken sound
      playHadouken();

  	  $('.ryu-ready-position').hide();
      $('.ryu-throwing-hadouken').show();
  //$('.hadouken').show();
  // animate hadouken to the right of the screen
  //$('.hadouken').show().animate(
  //{'left': '1020px'},
  //500,
  //function() {
    //$(this).hide();
    //$(this).css('left', '520px');
  //}
//);
      $('.hadouken').finish().show().animate(
    {'left': '1020px'},
    500,
    function() {
      $(this).hide();
      $(this).css('left', '520px');
    });
  })
     .mouseup(function() {
     $('.ryu-throwing-hadouken').hide();
     $('.ryu-ready-position').show();
     // ryu goes back to his ready position    
  });
});

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}