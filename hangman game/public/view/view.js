
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

//Display rank score
function rankScore() {
	$(".rank").prop('disabled', true);
	readData2(function() {
		displayRank();
		console.log(rankValue);
	});
	
}

//Display rank score
function displayRank() {
	rankTitle();
	$('.ranking').append('<ol class="rank_list">');
	for (let i = 0; i < rankValue.length; ++i) {
		let ranking = $('<li>'+rankValue[i][1].name+'&nbsp&nbsp&nbsp&nbsp&nbsp'+rankValue[i][1].value+'</li>');
		$('.rank_list').append(ranking);
	}
	$('.ranking').append('</ol');
	$('.ranking').append('<button class = "closeRank" onclick="closeRank()">Close Ranking</button>');

}

//Close Rank section
function closeRank() {
	$(".rankT").text("");
	$(".rank_list").text("");
	$(".ranking").text("");
	$(".rank").prop('disabled', false);
}

//Display ranking title
function rankTitle() {
	$('.ranking').append('<h3 class = "rankT">Score Ranking</h3>');
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