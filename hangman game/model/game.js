// Get a reference to the database service
var database = firebase.database();
var word = [];
var computerGuess;
var computerGuessWord;
var computerGuessHint;
var lettersLeft;
var length;


//read data from firebase
function readData(callback) {
	firebase.database().ref('/dic/').once('value').then(function(snapshot) {
		word = snapshot.val();
		console.log(word);
		computerGuess = word[Math.floor(Math.random() * word.length)];
		computerGuessWord = computerGuess.name;
		computerGuessHint = computerGuess.def;
		lettersLeft = computerGuess.name.length;
		length = computerGuess.name.length;		
		console.log(computerGuess.name);
		console.log(computerGuess.def);
		callback();
	});

}

//var computerGuess = charactersList[Math.floor(Math.random() * charactersList.length)];
//var computerGuessWord = computerGuess.name;
//var computerGuessHint = computerGuess.hint;
//var lettersLeft = computerGuess.name.length;
//var length = computerGuess.name.length;
var isWin = false;
var livesLeft = 7;
var score = 0;
var blankSpaces = [];


//Check the user input letter wheather are correct
//If yes, socre increase one, otherwise the score decrease one.
function letterChecker(answer, playerGuess) {
	let wordArr = answer.split("");
	
	for (var i = 0; i < wordArr.length; i++) {
		if (playerGuess === wordArr[i]) {
			blankSpaces[i] = playerGuess;
			lettersLeft--;
			score++;
		}			
	}
	checkGame();
	updateMe();	
}

//Check the lives and letter left of word, and show corresping win or lose message.
function checkGame () {
	if (lettersLeft < length) {
		length = lettersLeft;
		if (lettersLeft == 0) {
		$(".keyboard-key").prop('disabled', true);
		$(".reset").prop('disabled', true);
		WinMessage();
		}
	} else {
		score--;
		livesLeft--;
		if (livesLeft <= 0) {
		$(".keyboard-key").prop('disabled', true);
		LoseMessage();
		}
	}
}


//Restart the new game
function restart() {
  location.reload();
}

function reset() {
	if (lettersLeft == 0) {
		$(".reset").prop('disabled', true);
	}
	
	else {
		clearlives();
		$(".reset").prop('disabled', true);
		$(".keyboard-key").prop('disabled', false);
		$(".keyboard-key").css('opacity','1');
	}
	clearmessage();
	
}

//Load the game when open the html file
$(document).ready(function(){
	readData(function(){
		blank(computerGuess.name);
		updateMe();
	});
	
});

//Disable the function of clicking keyboard
function DisableKeyboard() {
	$(this).prop('disabled', true);
}




