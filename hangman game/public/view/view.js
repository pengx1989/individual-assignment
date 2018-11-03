
//Update the stat of game, such as lives, word, hint, and score.
function updateMe() {
  $('#userGues').text(blankSpaces.join(" "))
  $("#hint").text(computerGuessHint);
  $("#score").text(score);
  $("#lives").text(livesLeft);
}

//Display the guess word as empty before guess
function blank(x) {
	blankSpaces = [];
	for (var i = 0; i < x.length; i++) {
		if (x[i] === " ") {
			blankSpaces.push(" ");
		} else {
			blankSpaces.push("_");
		}
	}
}

//Display game instraction
function GameMessage() {
	$(".message").text("Please guess three words in this game!");
}

//Display one word right
function GameMessage1() {
	$(".message").text("You have guessed one word right!");
}

//Display two word right
function GameMessage2() {
	$(".message").text("You have guessed two word right!");
}


//Display win message
function WinMessage() {
	$(".message").text("Congratulation, you win! Press restart button to start new game!");
}

//Display lose message
function LoseMessage() {
	$(".message").text("Sorry, you lose! Press restart button to start new game!");
}

//Live reset to 0
function clearlives() {
	livesLeft = 0;
	$("#lives").text(livesLeft);
}

//Clear lose message
function clearmessage() {
	$(".message").text("");
}