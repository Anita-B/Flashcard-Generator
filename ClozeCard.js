// The constructor should accept two arguments: text and cloze.
// The constructed object should have a cloze property that contains only the cloze-deleted portion of the text.
// The constructed object should have a partial property that contains only the partial text.
// The constructed object should have a fullText property that contains only the full text.
// The constructor should throw or log an error when the cloze deletion does not appear in the input text.
// Use prototypes to attach these methods, wherever possible.


var ClozeCard = function(text, cloze, answer_choices){
	
	this.questions = "";
	this.cloze = cloze;
	this.fullText = text;

	// a string of choices turned into an array, which prompt > choices accepts
	this.answer_choices = answer_choices.split(" ");


	this.prepareCard = function(){

		if(text.search(cloze) !== -1)
		{
			this.partial = text.replace(cloze,'...');
			this.questions = this.partial;
		}
		else
		{
			console.log("Oops! ", cloze, " doesn't appear in the flashcard!");
		}		

	};

	this.prepareCard();

};


// test case
// var test = new ClozeCard("Sherbet Lemon is a password to the office of Professor Dumbledore \n", "Dumbledore", "Flitwick Dumbledore McGonagall Snape");
// test.makeOneQuestion();

module.exports = ClozeCard;