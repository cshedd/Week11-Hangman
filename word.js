//import Letter above with requiring the letter.js file
var Letter = require('./letter.js');

var Word = function(wrd){
	//set a property called word and set it equal to what you think it should be
	var wordVar = wrd;

	//set a property called lets to an empty array. We will eventually push letter objects in here
	this.word = wrd;
	this.lets = [];
	var lengthOfLets= this.lets.length;

	//set a property called found to false
	this.found = false;

	var letterofThis = null;

	//make a property called getLets, set it to a function and inside the function loop over the word property and push letter objects into the lets property.

	this.getLets = function() {
		var isLetter = /([a-z] | [A-Z])/;
		for(i = 0; i < wordVar.length; i++) {
			if(isLetter.test(wordVar[i].toString())){
				this.newVariable = new Letter(wordVar[i]);
				this.lets.push(this.newVariable);
				var resultOfRender = this.newVariable.letterRender();
			}
		}
	};

	//returns ture or false whether we found the current word or not
	this.didWeFindTheWord = function() {
		//set the found property to true or false based on whether all the letters have been found or not
		var itsFoundCount = 0;

		for(var i = 0; i < this.lets.length; i++){
			if(this.lets[i].appear == true) {
				itsFoundCount++;
			}
		}
		if(itsFoundCount === this.lets.length) {
			this.found = true;
		} else {
			this.found = false;
		};

		return this.found;
	};

	this.checkIfLetterFound = function(guessLetter) {
		//set a variable whatToReturn to 0
		var whatToReturn = 0;

		//loop over the lets property and if the letter object's charac property equals the guessletter then set the appear property of the letter object to be true. Also increment whatToReturn.
		for(q = 0; q < this.lets.length; q++) {
			if(guessletter == this.lets[q].charac) {
				this.lets[q].appear = true;
				whatToReturn++;
			}
		}

		//return whatToReturn
		return whatToReturn;
	};

	this.wordRender = function() {
		//make a variable named str and set it to empty quotes
		var str = "";

		//loop over this.lets and call the letterRender property of the letter object that you're looping over, and add it to str
		for(var i = 0; i < this.lets.length; i++) {
			str += (this.lets[i].letterRender());
		}
		//return str
		return str;
	};
}

//export the Word constructor here at the end

module.exports = Word;