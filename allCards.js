// Load the NPM Package inquirer to access .prompt
var inquirer = require("inquirer");

var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");


var allCards = function(){

	this.cloze_cards = [];
	this.basic_cards = [];
	this.score = 0;


	this.addClozeCard = function(text, cloze, answer_choices) {

		// adds all 5 cards to the cloze_cards array
    	this.cloze_cards.push(new ClozeCard(text, cloze, answer_choices));

    	if(this.cloze_cards.length === 5)
    	{
    		//console.log("here");
    		this.playClozeCard(0, this);
    	}

 	}

 	this.playClozeCard = function(numberPlays, wholecard){ 

		if (numberPlays < 5)
		{
			
			inquirer.prompt([
			{
				type: "list",
				message: this.cloze_cards[numberPlays].questions,
				choices: this.cloze_cards[numberPlays].answer_choices,
				name: "answer"
			}
			])
			.then(function(inquirerResponse) { 

				// this inner function doesn't see any of the values so we pass the whole
				// allCards object (wholecard) in order to use it

				if(inquirerResponse.answer === wholecard.cloze_cards[numberPlays].cloze)
				{
					wholecard.score++; //console.log(wholecard.score);
					console.log("Yey!!! You got it right!");
				}
				else
				{
					console.log("Nope! The right answer was ", wholecard.cloze_cards[numberPlays].cloze);
				}

				numberPlays++;
				wholecard.playClozeCard(numberPlays, wholecard); 

			});

		}	
		else 
		{
			console.log("You got " + this.score + " out of 5 right!");
		}

	};

	this.addBasicCard = function(front, back, answer_choices) {

		// adds all 5 cards to the cloze_cards array
    	this.basic_cards.push(new BasicCard(front, back, answer_choices));

    	if(this.basic_cards.length === 5)
    	{
    		//console.log("here0", this.basic_cards);
    		this.playBasicCard(0, this);
    	}

 	}

 	this.playBasicCard = function(numberPlays, wholecard){ 

		if (numberPlays < 5)
		{ 
			
			inquirer.prompt([
			{
				type: "list",
				message: this.basic_cards[numberPlays].front,
				choices: this.basic_cards[numberPlays].b_answer_choices,
				name: "answer"
			}
			])
			.then(function(inquirerResponse) { 

				// this inner function doesn't see any of the values so we pass the whole
				// allCards object (wholecard) in order to use it

				if(inquirerResponse.answer === wholecard.basic_cards[numberPlays].back)
				{
					wholecard.score++; //console.log(wholecard.score);
					console.log("Yey!!! You got it right!");
				}
				else
				{
					console.log("Nope! The right answer was ", wholecard.basic_cards[numberPlays].back);
				}

				numberPlays++;
				wholecard.playBasicCard(numberPlays, wholecard); 

			});

		}	
		else 
		{
			console.log("You got " + this.score + " out of 5 right!");
		}

	};



};


module.exports = allCards;