// wait for DOM to load before running JS
console.log("JavaScript is working!");

$(document).ready(function () {
});

var count = 0;
var turn = 0;
var playerX = 'X';
var playerO = 'O';
$('.box').click(function(){
    count ++;
    if(count % 2 ===0){
        $(this).text('X');
        $('#whosemove').html(function() { return "Player O, it's your turn!"; });
        } else {
        $(this).text('O');
        $('#whosemove').html(function() { return "Player X, it's your turn!"; });
        }
});

  // your code here

//$('#board').click(function() {
 //  $('#counter').html(function(i, val) { return val*1+1; });
//});

$('#a').click(function() {
    $('#whichcell').html(function() { return "You clicked on cell a!"; });
    $('#a').off("click");
});

$('#b').click(function() {
    $('#whichcell').html(function() { return "You clicked on cell b!"; });
    $('#b').off("click");
});
$('#c').click(function() {
    $('#whichcell').html(function() { return "You clicked on cell c!"; });
    $('#c').off("click");
});
$('#d').click(function() {
    $('#whichcell').html(function() { return "You clicked on cell d!"; });
    $('#d').off("click");
});
$('#e').click(function() {
    $('#whichcell').html(function() { return "You clicked on cell e!"; });
    $('#e').off("click");
});
$('#f').click(function() {
    $('#whichcell').html(function() { return "You clicked on cell f!"; });
    $('#f').off("click");
});
$('#g').click(function() {
    $('#whichcell').html(function() { return "You clicked on cell g!"; });
    $('#g').off("click");
});
$('#h').click(function() {
    $('#whichcell').html(function() { return "You clicked on cell h!"; });
    $('#h').off("click");
});
$('#i').click(function() {
    $('#whichcell').html(function() { return "You clicked on cell i!"; });
    $('#i').off("click");
});

$('.damnbutton').on('click', function() {
    $('.box').empty();



//$('button').click(function() {  //reset button to change all <p> text to blank
  //  $('p').text(" ");
//});
//    alert("New game!");
});

