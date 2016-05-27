$(document).ready(function() {
  $('.ryu').mouseenter(function() {
   	$('.ryu-standing-still').hide();
	$('.ryu-ready-position').show();
  })
     .mouseleave(function() {
     	   $('.ryu-ready-position').hide();
		   $('.ryu-standing-still').show();

  });
});
