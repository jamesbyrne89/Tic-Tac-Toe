// Initialise variables

const body = document.querySelector('body');


function startGame(){
		for (i = 1; i <= 9; i++){
		reset(i);
	}
	document.turn = "X";
	document.turnNo = 0;
	document.winner = null;
	setMessage("Ready? " + document.turn + " goes first")
}

function setMessage(msg){
	document.getElementById("message").innerText = msg;
}

body.onload = startGame();

// Make a move

function makeMove(spot) {
	if(document.winner!= null){
		return;
	}
else if(spot.innerText == ""){	
	spot.innerText = document.turn;
	turnNo++;
	showReset();
	switchTurn();
} else {
	setMessage("Choose another square")
	}
}



// Switch to the other player once a move has been made

function switchTurn(){
	if (detectWinner(document.turn)) {
		setMessage(document.turn + " won!")
		document.winner = document.turn;
		
	}
	else if (turnNo ==  9){
		setMessage("It's a draw!");
	}
	else if(document.turn == "X"){
		document.turn = "O";
		setMessage(document.turn + ", it's your turn")
	} else {
		document.turn = "X";
		setMessage(document.turn + ", it's your turn")
	}

}

// Check whether a player has won

function detectWinner(move) {
	var result = false;
	if  (checkForRow(1,2,3,move)){
		result = true;
		document.getElementById('spot-1').classList.add('winner');
		document.getElementById('spot-2').classList.add('winner');
		document.getElementById('spot-3').classList.add('winner');
	}
	else if (checkForRow(2,5,8,move)){
		result = true;
		document.getElementById('spot-2').classList.add('winner');
		document.getElementById('spot-5').classList.add('winner');
		document.getElementById('spot-8').classList.add('winner');
	}
	else if (checkForRow(3,6,9,move)){
		result = true;
		document.getElementById('spot-3').classList.add('winner');
		document.getElementById('spot-6').classList.add('winner');
		document.getElementById('spot-9').classList.add('winner');
	}
	else if (checkForRow(4,5,6,move)){
		result = true;
		document.getElementById('spot-4').classList.add('winner');
		document.getElementById('spot-5').classList.add('winner');
		document.getElementById('spot-6').classList.add('winner');		
	}
	else if (checkForRow(1,5,9,move)){
		result = true;
		document.getElementById('spot-1').classList.add('winner');
		document.getElementById('spot-5').classList.add('winner');
		document.getElementById('spot-9').classList.add('winner');		
	}
	else if (checkForRow(3,5,7,move)){
		result = true;
		document.getElementById('spot-3').classList.add('winner');
		document.getElementById('spot-5').classList.add('winner');
		document.getElementById('spot-7').classList.add('winner');		
	}
	else if (checkForRow(7,8,9,move)){
		result = true;
		document.getElementById('spot-7').classList.add('winner');
		document.getElementById('spot-8').classList.add('winner');
		document.getElementById('spot-9').classList.add('winner');		
	}
	else if (checkForRow(1,4,7,move)){
	result = true;
		document.getElementById('spot-1').classList.add('winner');
		document.getElementById('spot-4').classList.add('winner');
		document.getElementById('spot-7').classList.add('winner');
	}
return result;
}


// Check whether there are three of the same type in a row

function checkForRow(a, b, c, move) {
	var result = false;
	if (getBox(a) == move && getBox(b) == move && getBox(c) == move){
		result = true;
	}
	return result;
}

function highlightWinners(){

}

function getBoxNumber(a, b, c) {
	console.log(document.getElementById("spot-" + a).id);
	console.log(document.getElementById("spot-" + b).id);
	console.log(document.getElementById("spot-" + c).id);
}

function getBox(number){
	return document.getElementById("spot-" + number).innerText;
	
}

function showReset(){
	if (turnNo > 0) {
		 document.getElementById('reset').classList.add('visible-button');
		 document.getElementById('reset').classList.remove('reset-button');
	}
	else {

	}
}
function hideReset(){
	document.getElementById('reset').classList.remove('visible-button');
	document.getElementById('reset').classList.add('reset-button');
}

function reset(number){
	document.getElementById("spot-" + number).innerText ="";
	document.getElementById("spot-" + number).classList.remove('winner');
	turnNo = 0;

}








 
