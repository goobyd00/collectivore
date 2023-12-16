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
$(document).ready(function() {
  $('#nature-mystery').click(function() {
      var zipFiles = [
          'NV-1.zip',
          'NV-2.zip',
          'NV-3.zip',
          'NV-4.zip',
          'NV-5.zip'
      ];

      var randomIndex = Math.floor(Math.random() * zipFiles.length);
      var randomFile = zipFiles[randomIndex];

      var link = $('<a>')
          .attr('href', randomFile)
          .attr('download', randomFile.substr(randomFile.lastIndexOf('/') + 1))
          .appendTo('body');

      link[0].click();
      link.remove();
  });
});

$(document).ready(function() {
  $('#time-mystery').click(function() {
      var zipFiles = [
          'TT-1.zip',
          'TT-2.zip',
          'TT-3.zip',
          'TT-4.zip',
          'TT-5.zip'
      ];

      var randomIndex = Math.floor(Math.random() * zipFiles.length);
      var randomFile = zipFiles[randomIndex];

      var link = $('<a>')
          .attr('href', randomFile)
          .attr('download', randomFile.substr(randomFile.lastIndexOf('/') + 1))
          .appendTo('body');

      link[0].click();
      link.remove();
  });
});

$(document).ready(function() {
  $('#inno-mystery').click(function() {
      var zipFiles = [
          'IO-1.zip',
          'IO-2.zip',
          'IO-3.zip',
          'IO-4.zip',
          'IO-5.zip'
      ];

      var randomIndex = Math.floor(Math.random() * zipFiles.length);
      var randomFile = zipFiles[randomIndex];

      var link = $('<a>')
          .attr('href', randomFile)
          .attr('download', randomFile.substr(randomFile.lastIndexOf('/') + 1))
          .appendTo('body');

      link[0].click();
      link.remove();
  });
});

$(document).ready(function() {
  $('#artisan-mystery').click(function() {
      var zipFiles = [
          'AM-1.zip',
          'AM-2.zip',
          'AM-3.zip',
          'AM-4.zip',
          'AM-5.zip'
      ];

      var randomIndex = Math.floor(Math.random() * zipFiles.length);
      var randomFile = zipFiles[randomIndex];

      var link = $('<a>')
          .attr('href', randomFile)
          .attr('download', randomFile.substr(randomFile.lastIndexOf('/') + 1))
          .appendTo('body');

      link[0].click();
      link.remove();
  });
});











