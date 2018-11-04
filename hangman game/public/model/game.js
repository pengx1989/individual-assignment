// Get a reference to the database service
var database = firebase.database();
var word = [];
var computerGuess;
var computerGuessWord;
var computerGuessHint;
var lettersLeft;
var length;
var rank = [];
var isWin = false;
var livesLeft = 7;
var score = 0;
var blankSpaces = [];
var wordLeft = 3;
var userName;
var rankPosition = [];

//read data from firebase
function readData(callback) {
	firebase.database().ref('/dic/').once('value').then(function(snapshot) {
		word = snapshot.val();
		//console.log(word);
		computerGuess = word[Math.floor(Math.random() * word.length)];
		computerGuessWord = computerGuess.name;
		computerGuessHint = computerGuess.def;
		lettersLeft = computerGuess.name.length;
		length = computerGuess.name.length;		
		//console.log(computerGuess.name);
		//console.log(computerGuess.def);
		firebase.auth().onAuthStateChanged(function(user) {
			if (user) {
				userName = user.displayName;
				//console.log(userName);
			} else {
			  // No user is signed in.
			}
		  });
		callback();
	});

}

//Get and sort score from firebase
function readData2(callback) {
	firebase.database().ref('/rank/').once('value').then(function(snapshot) {
		rank = snapshot.val();
		rankValue = Object.keys(rank).map(function(k) {
			return [Number(k), rank[k]];
		});
		for (let i=(rankValue.length-1); i>=0; i--) {
			for (let j = 1; j <= i; j++) {
				if(rankValue[j-1][1].value < rankValue[j][1].value) {
					let temp = rankValue[j-1][1].value;
					let temp1 = rankValue[j-1][1].name;
					rankValue[j-1][1].value = rankValue[j][1].value;
					rankValue[j-1][1].name = rankValue[j][1].name;
					rankValue[j][1].value = temp;
					rankValue[j][1].name = temp1;
				} 
			}
		}
		callback();
	});
}




//Add score into firebase
function addScore() {
	var ref = database.ref('rank');
	var data = {
		name: userName,
		value: score
	}
	ref.push(data);
}

//Load the game when open the html file
$(document).ready(function(){
	readData(function(){
		blank(computerGuess.name);
		updateMe();
	});
	GameMessage();
});







