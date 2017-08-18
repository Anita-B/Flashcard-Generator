// to read line by line from a file
// var lineReader = require('readline').createInterface({
//   input: require('fs').createReadStream('file.in')
// });

// lineReader.on('line', function (line) {
//   console.log('Line from file:', line);
// });


// fs is a core Node package for reading and writing files
var fs = require("fs");
// Load the NPM Package inquirer to access .prompt
var inquirer = require("inquirer");

var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");
var allCards = require("./allCards");
	

/********** start program ******************/
inquirer.prompt([
{
	type: "list",
	message: "Choose basic or cloze flashcards for your Harry Potter quiz!",
	choices: ["basic", "cloze"],
	name: "card_type"
}
])
.then(function(inquirerResponse) {

	if(inquirerResponse.card_type === "basic")
	{
		var allBasicCards = new allCards();
		allBasicCards.addBasicCard("What is also known as lucky potion? \n", "Felix Felicis", "Amortentia|Felix Felicis|Polyjuice Potion|Veritaserum");
		allBasicCards.addBasicCard("Who is the ghost of Ravenclaw House? \n", "Grey Lady", "Nearly Headless Nick|The Bloody Baron|The Grey Lady|The Fat Friar");
		allBasicCards.addBasicCard("What is Harry's owl's name? \n", "Hedwig", "Lily|Luna|Minerva|Hedwig");
		allBasicCards.addBasicCard("What form does Snape's patronus take? \n", "doe", "bat|doe|fox|phoenix");
		allBasicCards.addBasicCard("Which animal is depicted in the emblem for Gryffindor house? \n", "lion", "lion|badger|snake|eagle");
	}
	if(inquirerResponse.card_type === "cloze")
	{

		var allClozeCards = new allCards();
		allClozeCards.addClozeCard("Sherbet Lemon is a password to the office of Professor Dumbledore \n", "Dumbledore", "Flitwick Dumbledore McGonagall Snape");
		allClozeCards.addClozeCard("Luna Lovegood is a member of Ravenclaw House \n", "Ravenclaw", "Ravenclaw Hufflepuff Slytherin Gryffindor");
		allClozeCards.addClozeCard("Professor Trewlaney teaches divination \n", "divination", "potions charms arithmancy divination");
		allClozeCards.addClozeCard("The spell to reverse the effect of Lumos is Nox \n", "Nox", "Nox Accio Alohomora Scourgify");
		allClozeCards.addClozeCard("Harry wants to be a/an auror when he grows up \n", "auror", "healer auror professor seeker");
		
	}

});


