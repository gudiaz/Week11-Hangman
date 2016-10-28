
// Both `letter.js` and `word.js` should be constructor files:
// 'word.js` should contain all of the methods which will check the letters guessed versus the random word selected.

// require your letter objects
var Letter = require('./letter.js');

var Word = function(wrd){
	// property to store the string wrd
	this.word = wrd;
	// a collection of letter objects
	this.letters = [];
	// property is the word found?
	this.found = false;

	this.getLetters = function() {
		// populate the collection above with new Letter objects
	    for (var i = 0; i < this.word.length; i++) {
	    	this.letters.push(new Letter(this.word[i]));
	    }	
	};
	
	//found the current word
	this.didWeFindTheWord = function() {
		//sets this.found in the word object to true or false if all letter objects have a true value in their appear property
		this.found = this.letters.every(function(currentLetter) {
			return currentLetter.appear;
		});
		return this.found;
	};

	this.checkIfLetterFound = function(guessLetter) {
		// iterate through the collection of letter Objects
		var whatToReturn = 0;
		for (var i = 0; i < this.letters.length; i++) {
			// if guessLetter matches Letter property, the letter object should be shown
			if (this.letters[i].char == guessLetter){
				this.letters[i].appear = guessLetter;
				whatToReturn++;
			}
		}
		return whatToReturn;
	};

	this.wordRender = function() {
		// render the word based on if letters are found or not found
		var str = "";
		for (var i=0; i < this.letters.length; i++){
			str += this.letters[i].letterRender();
		}
		return str;
	};
}

// export to use in main.js
module.exports = Word;