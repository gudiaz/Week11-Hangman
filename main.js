// Both `letter.js` and `word.js` should be constructor files:
// 'word.js` should contain all of the methods which will check the letters guessed versus the random word selected.
// `letter.js` should control whether or not a letter appears as a "_" or as itself on-screen.
// `game.js` file will randomly select a word for the player.
// `main.js` will contain the logic of your app. Running it in Terminal/Bash will start the game.
// The app should end when a player guesses the correct word or runs out of guesses.

// Load the NPM Package inquirer
var inquirer = require('inquirer');

//require the objects/exports you will use
var words = require("./game.js");
var word = require("./word.js");

prompt.start();

game = {
	wordBank : words.newWord.wordList, // create or import a list of words
	wordsWon : 0, // count of words Found
	guessesRemaining : 10, //per word
	currentWord : null, //the word object

	startGame : function (wrd){
		//make sure the user has 10 guesses
		this.resetGuessesRemaining();
 
		//get a random word from the array
		this.currentWrd = new Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);

		//populate currentWrd (made from Word constructor function) object with letters
 		this.currentWrd.getLetters();
 		console.log("Word : ["+this.currentWrd.wordRender()+"]");

		this.keepPromptingUser();

	}, 
	resetGuessesRemaining : function(){
    	// reset guess count for new game	
    	this.guessesRemaining = 10;
	},
	keepPromptingUser : function(){
		var self = this;

		inquirer.get(['guessLetter'], function(err, result) {
		    // result is an object like this: { guessLetter: 'f' }
		    //console.log(result);
		    
			  // console log the letetr you chose

		    //this checks if the letter was found and if it is then it sets that specific letter in the word to be found

		    //if the user guessed incorrectly minus the number of guesses they have left
				// and console.log if they were incorrect or correct
		    	
				//check if you win only when you are right
        //end game
			 
		    
		    // display the user how many guesses remaining
			
				// render the word 
				
				// display letters the user has guessed

			  // if user has remaining guesses and Word isn't found
			
				// if user has no guesses left, show them the word and tell them they lost
			
				// else show the user word and rendered
		    
		});
	}


};

game.startGame();
