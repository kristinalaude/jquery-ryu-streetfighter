$(document).ready(function() {
  $(".ryu").mouseenter(function() {
    $(".ryu-standing-till").hide();
    $(".ryu-cool").hide();
    $(".ryu-ready-position").show();
  })
  .mouseleave(function() {
    $(".ryu-ready-position").hide();
    $(".ryu-cool").hide();
    $(".ryu-standing-still").show();
  })
  .mousedown(function() {
    playHadouken();
    $(".ryu-ready-position").hide();
    $(".ryu-cool").hide();
    $(".ryu-standing-still").hide();
    $(".ryu-throwing-hadouken").show();
    $(".hadouken").finish().show()
      .animate(
        {"left": "1020px"},
        500,
        function() {
        $(this).hide();
        $(this).css("left", "-212px");
      }
    );

  })
  .mouseup(function() {
    $(".ryu-throwing-hadouken").hide();
    $(".ryu-cool").hide();
    $(".ryu-standing-still").hide();
    $(".ryu-ready-position").show();
  })

  $("body").keydown(function(e) {
    if (e.which == 88) {
      $(".ryu-standing-still").hide();
      $(".ryu-ready-position").hide();
      $(".ryu-cool").show();
      $(".hadouken").hide();
    }
  })

  $("body").keyup(function(e) {
    if (e.which == 88) {
      $(".ryu-standing-still").show();
      $(".ryu-ready-position").hide();
      $(".ryu-cool").hide();
      $(".hadouken").hide();

    }
  })


});

function playHadouken() {
  $("#hadouken-sound")[0].volume = 0.5;
  $("#hadouken-sound")[0].load();
  $("#hadouken-sound")[0].play();
}