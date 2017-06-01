
var correct = 0;
var wrong = 0;
var unanswered = 0;
var answered = 0;
var place = 0;
var interval;
var time = 0;
var q1 = {
	question: "What is love?",
	answer1: ["<button>Baby don't hurt me.</button>", 0],
	answer2: ["<button>MC squared</button>", 0],
	answer3: ["<button>Turkey legs</button>", 1],
	answer4: ["<button>An illusion of time space</button>", 0,], 
	correctAnswer: '<button>Turkey legs</button>',
	explantion: "Love was invented by card companies."
}
var q2 = {
	question: "Who is love?",
	answer1: ["<button>Me</button>", 0],
	answer2: ["<button>You</button>", 0],
	answer3: ["<button>and</button>", 1],
	answer4: ["<button>Everyone else we know</button>", 0] 
}
var q3 = {
	question: "Do you have any corn?",
	answer1: ["<button>Ya</button>", 0],
	answer2: ["<button>Naw</button>", 0],
	answer3: ["<button>I wish</button>", 1],
	answer4: ["<button>It's on my cob.</button>", 0] 
}
var questions = [q1, q2, q3];
var gameRuns = false;

// Start of the window load
window.onload = (function() {

$('#start').on ("click", function startGame() {
	$('.answers').show();
	$('#question').show();
	$('#timer').show();
	$('#start').hide();
	gameRuns = true;
	questionDisplay();
	timer();
	console.log(questions[place].question);
})

function questionDisplay() {
	console.log('questions fired');
	$('#question').html(questions[place].question);
	$('#answer1').html(questions[place].answer1[0]);
	$('#answer2').html(questions[place].answer2[0]);
	$('#answer3').html(questions[place].answer3[0]);
	$('#answer4').html(questions[place].answer4[0]);
	$('#answer1').attr('data-name', questions[place].answer1[1]);
	$('#answer2').attr('data-name', questions[place].answer2[1]);
	$('#answer3').attr('data-name', questions[place].answer3[1]);
	$('#answer4').attr('data-name', questions[place].answer4[1]);
}

$('.answer').on ("click", function answers(objButton) {
	console.log($(this).data("name"))
	var userGuess = $(this).data("name");
	if (userGuess === 1) {
		time = 30;
		answered++;
		place++;
		correct++;
		questionDisplay();
		console.log(correct);
		console.log(answered);
		console.log(place);
		console.log("You chose the correct answer");
	}
	else if (userGuess === 0) {
		time = 30;
		answered++;
		place++;
		wrong++;
		questionDisplay();
		console.log(wrong);
		console.log(unanswered);
		console.log(place);
		console.log("You chose the incorrect answer");
	}
	/*else {
		unanswered++;
		time = 30;
		timer();
		questionDisplay();
		console.log(correct);
		console.log(answered);
		console.log(place);
		console.log($(this).data('name'));
		console.log("Oops");	
	}*/
})




	function timer () {
		if (gameRuns === true) {
			interval = setInterval(decrement, 1000);
			time = 5;
		//else if (time  30) {

		//}
		//else if (time > 30) {

		

	}

	function decrement() {
		$('#timer').html(time);
		if (time > 0) {
			time--;
		}
		else if (time === 0) {
			place++;
			unanswered++;
			time += 30;
			questionDisplay();
			console.log(place);
			console.log('Didnt answer question. Unanswer is now: ' + unanswered);
		}

		

		
	}
}

/*
Q1 = questions[0]
$('#start').on ('click' function() {
	if (answered == 0 && unanswered == 0) {
		if (click == correct)
				corect++;
				place++;


	}
})*/

});