

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
		setMessage("It's " + document.turn + "'s turn")
	} else {
		document.turn = "X";
		setMessage("It's " + document.turn + "'s turn")
	}

}

function detectWinner(move) {
	var result = false;
	if  (checkForRow(1,2,3,move) ||
		checkForRow(2,5,8,move) ||
		checkForRow(3,6,9,move) ||
		checkForRow(4,5,6,move) ||
		checkForRow(1,5,9,move) ||
		checkForRow(3,5,7,move) ||
		checkForRow(7,8,9,move) ||
		checkForRow(1,4,7,move)) {
	result = true;
	}
return result;
}

function checkForRow(a, b, c, move) {
	var result = false;
	if (getBox(a) == move && getBox(b) == move && getBox(c) == move){
		result = true;
	}
	return result;
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
	turnNo = 0;
}








