// Both `letter.js` and `word.js` should be constructor files:
// 'word.js` should contain all of the methods which will check the letters guessed versus the random word selected.
// `letter.js` should control whether or not a letter appears as a "_" or as itself on-screen.
// `game.js` file will randomly select a word for the player.
// `main.js` will contain the logic of your app. Running it in Terminal/Bash will start the game.
// The app should end when a player guesses the correct word or runs out of guesses.

// Load the NPM Package inquirer
var prompt = require('prompt');

//require the objects/exports you will use
var words = require("./game.js");
var Word = require("./word.js");

prompt.start();

var game = {
	wordBank : words.word.list, // create or import a list of words
	wordsWon : 0, // count of words Found
	guessesRemaining : 10, //per word
	currentWord : null, //the word object

	startGame : function (wrd) {
		//make sure the user has 10 guesses
		this.resetGuessesRemaining();
 
		//get a random word from the array
		this.currentWrd = new Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);

		//populate currentWrd (made from Word constructor function) object with letters
 		this.currentWrd.getLetters();
 		console.log("Word: " + this.currentWrd.wordRender());

		this.keepPromptingUser();
	}, 

	resetGuessesRemaining : function(){
    	// reset guess count for new game	
    	this.guessesRemaining = 10;
	},

	keepPromptingUser : function() {
		var self = this;

		while (this.guessesRemaining) {

			prompt.get(['guessLetter'], function (err, result) {
			    if (err) throw err;

	 		    // console log the letetr you chose
				console.log('letter: ' + result.guessLetter);
				
				//this checks if the letter was found and if it is, then it sets that specific letter in the word to be found
				var letterfound = self.currentWrd.checkIfLetterFound(result.guessLetter);

				//if the user guessed incorrectly minus the number of guesses they have left
				if (!letterfound) {
					// and console.log if they were incorrect or correct
		    		console.log("Incorrect");
				    self.guessesRemaining--;
				} else {
 					console.log("Correct");
 					if (self.currentWrd.didWeFindTheWord()) {
	 					// render the word 
						console.log("The word is: " + self.currentWrd.wordRender());
 						wordsWon++
 						return;
 					}	

					// display letters the user has guessed
			  		console.log("Word: "+ self.currentWrd.wordRender());
			 			
				    // display the user how many guesses remaining
			 		console.log("Guesses remaining: " + self.guessesRemaining);

					 // if user has remaining guesses and Word isn't found
			 		if ((self.guessesRemaining > 0) && (self.currentWrd.found == false)) {
			 			self.keepPromptingUser();
			 		}
			 		else if (self.guessesRemaining == 0) {
						// if user has no guesses left, show them the word and tell them they lost
			 			console.log("Game over!!! Correct Word was ", self.currentWrd.wrd);
			 		} else {
			    		//check if you win only when you are right
						// else show the user word and rendered
			 			console.log(self.currentWrd.wordRender());
			    	}				
				}
			});			    
		}
	}
};

// Start of game ----------------------
game.startGame();
