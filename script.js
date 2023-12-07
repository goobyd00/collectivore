//CONTROL PANEL --------------------------------------//

$( function() {
  $( "#draggable" ).draggable();
  $( "#droppable" ).droppable({
    drop: function( event, ui ) {
      /*$( this )
        .addClass( "ui-state-highlight" )
        .find( "p" )
          .html( "Dropped!" );*/
          console.log("drop");
          $("#draggable").hide();
          setTimeout(function() {
          $(".crank").removeClass("inactive");}, 1000);
          var dropAudio = document.getElementById("coin-drop");
            dropAudio.play();
    }
  });
} );


$(".crank").click(function() {
	console.log("crank clicked");
  $(".crank img").addClass("spin");
  setTimeout(function() {
  $(".go").removeClass("inactive");}, 2500);
  var clickAudio = document.getElementById("cranked");
    clickAudio.play();
});

$(".go").click(function() {
	console.log("launch clicked");

  setTimeout(function() {
  $(".light").css("background-color", "lightgreen");}, 1000);
  setTimeout(function() {
  $(".bottom-appear-container").removeClass("bottom-inactive");}, 3000);
  var clickAudio = document.getElementById("bootup");
    clickAudio.play();

});

//POP-UPS//------------------------------
$(".time-cap").click(function() {
	console.log("time capsule clicked");
  $(".time-popup").removeClass("before-pop");
  var clickAudio = document.getElementById("open");
    clickAudio.play();
});

$(".nature-cap").click(function() {
	console.log("nature capsule clicked");
  $(".nature-popup").removeClass("before-pop");
  var clickAudio = document.getElementById("open");
    clickAudio.play();
});

$(".inno-cap").click(function() {
	console.log("inno capsule clicked");
  $(".inno-popup").removeClass("before-pop");
  var clickAudio = document.getElementById("open");
    clickAudio.play();
});

$(".artisan-cap").click(function() {
	console.log("artisan capsule clicked");
  $(".artisan-popup").removeClass("before-pop");
  var clickAudio = document.getElementById("open");
    clickAudio.play();
});


// RANDOM LIST
// ---------------------------------------------
var random = document.querySelector('.random');
for (var i = random.children.length; i >= 0; i--) {
  random.appendChild(random.children[Math.random() * i | 0]);
}










