// The constructor should accept two arguments: front and back.
// The constructed object should have a front property that contains the text on the front of the card.
// The constructed object should have a back property that contains the text on the back of the card.


var BasicCard = function(front, back, b_answer_choices){

	this.front = front;
	this.back = back;

	// a string of choices turned into an array, which prompt > choices accepts
	this.b_answer_choices = b_answer_choices.split("|");
}


module.exports = BasicCard;