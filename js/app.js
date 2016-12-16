$(document).ready(function(){

var X = 'X';
var O = 'O';
var turns = 0;

// Top Row
var topLeft = $('top-left');
var topMiddle = $('top-middle');
var topRight = $('top-right');

// Middle Row
var middleLeft = $('middle-left');
var middle = $('middle-middle');
var middleRight = $('middle-right');

// Bottom Row
var bottomLeft = $('bottom-left');
var bottomMiddle = $('bottom-middle');
var bottomRight = $('bottom-right');



$('#board li').on('click', function(){
if (topLeft.hasClass('o') && topMiddle.hasClass('o') && topRight.hasClass('o') ||
	topLeft.hasClass('o') && middle.hasClass('o') && bottomRight.hasClass('o') ||
topMiddle.hasClass('o') && middle.hasClass('o') && bottomMiddle.hasClass('o') ||
topRight.hasClass('o') && middle.hasClass('o') && bottomLeft.hasClass('o') ||
middleLeft.hasClass('o') && middle.hasClass('o') && middleRight.hasClass('o') ||
bottomLeft.hasClass('o') && bottomMiddle.hasClass('o') && bottomRight.hasClass('o') ||
){
alert('O won!');
$('#board li').text('+');
$('#board li').removeClass('disable');
$('#board li').removeClass('o');
$('#board li').removeClass('x');
turns = 0;
}
else if (topLeft.hasClass('x') && topMiddle.hasClass('x') && topRight.hasClass('x') ||
	topLeft.hasClass('x') && middle.hasClass('x') && bottomRight.hasClass('x') ||
topMiddle.hasClass('x') && middle.hasClass('x') && bottomMiddle.hasClass('x') ||
topRight.hasClass('x') && middle.hasClass('x') && bottomLeft.hasClass('x') ||
middleLeft.hasClass('x') && middle.hasClass('x') && middleRight.hasClass('x') ||
bottomLeft.hasClass('x') && bottomMiddle.hasClass('x') && bottomRight.hasClass('x') ||
){
alert('X won!');
$('#board li').text('+');
$('#board li').removeClass('disable');
$('#board li').removeClass('o');
$('#board li').removeClass('x');
turns = 0;
}
else if (turns === 0){
	alert("It's a tie!");
$('#board li').text('+');
$('#board li').removeClass('disable');
$('#board li').removeClass('o');
$('#board li').removeClass('x');
}
else if ($(this).hasClass('disable')){

	alert('Please pick a different spot')
}

});

});