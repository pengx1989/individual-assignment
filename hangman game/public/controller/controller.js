//Upon mouse-down, make the selectedLetter of keyboard-key.

$(".keyboard-key").on({
        mousedown: function() {
				$(this).css('opacity','0.3');
				$(this).prop('disabled', true);
				let userEnter = $(this).text().toLowerCase();
				letterChecker(computerGuessWord, userEnter);
        }
});

//Check the lives and letter left of word, and show corresping win or lose message.
function checkGame () {
	if (lettersLeft < length) {
		length = lettersLeft;
		if (lettersLeft == 0) {
			wordLeft--;
			console.log(wordLeft);
			DisplayNextWord();
		}
	} else {
		score--;
		livesLeft--;
		if (livesLeft <= 0) {
		$(".keyboard-key").prop('disabled', true);
		addScore();
		LoseMessage();
		}
	}
}

//Restart the new game
function restart() {
  location.reload();
}

//Disable the function of clicking keyboard
function DisableKeyboard() {
	$(this).prop('disabled', true);
}


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

//Display next word
function DisplayNextWord() {
	if (wordLeft == 0) {
		$(".keyboard-key").prop('disabled', true);
		$(".reset").prop('disabled', true);
		addScore();
		WinMessage();
	} else if(wordLeft == 2) {
		readData(function(){
			blank(computerGuess.name);
			updateMe();
			$(".keyboard-key").prop('disabled', false);
			$(".keyboard-key").css('opacity','1');
			GameMessage1();
		});
	} 
	else {
		readData(function(){
			blank(computerGuess.name);
			updateMe();
			$(".keyboard-key").prop('disabled', false);
			$(".keyboard-key").css('opacity','1');
			GameMessage2();
		});
	}
}
