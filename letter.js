// Both `letter.js` and `word.js` should be constructor files:
// `letter.js` should control whether or not a letter appears as a "_" or as itself on-screen.

var Letter = function(char) {
	// property to store the actual letter	
	this.char = char;
	// property/boolean if the letter can be shown 
	this.appear = false;
	
	this.letterRender = function() {
		//if appear is false then show the _
		//else appear is true then show character
		if (!appear) {
			return '_';
		} else {
			return this.char;
		}
	};
};

// export to use in word.js
module.exports = Letter;