// questions array

const askAllQuestion = [
	{
		question: "First Question",
		options: [
			"First Question's first option",
			"First Question's second option",
			"First Question's third option",
			"First Question's fourth option",
		],
		answer: "First Question's fourth option",
	},
	{
		question: "Second Question",
		options: [
			"Second Question's first option",
			"Second Question's second option",
			"Second Question's third option",
			"Second Question's fourth option",
		],
		answer: "Second Question's fourth option",
	},
	{
		question: "Third Question",
		options: [
			"Third Question's first option",
			"Third Question's second option",
			"Third Question's third option",
			"Third Question's fourth option",
		],
		answer: "Third Question's fourth option",
	},
	{
		question: "Fourth Question",
		options: [
			"Fourth Question's first option",
			"Fourth Question's second option",
			"Fourth Question's third option",
			"Fourth Question's fourth option",
		],
		answer: "Fourth Question's fourth option",
	},
	{
		question: "Fifth Question",
		options: [
			"Fifth Question's first option",
			"Fifth Question's second option",
			"Fifth Question's third option",
			"Fifth Question's fourth option",
		],
		answer: "Fifth Question's fourth option",
	},
];

let currentQuestion = 0;
let score = 0;
let totalTime = 60;
let currentAnswer = "";

const start = $("<button>").text("Start").addClass("btn btn-primary start");

$("#result").html(start);

// timer function

function setTimer() {
	let a = setInterval(startTimer, 1000);
	function startTimer() {
		totalTime--;
		$("#timer").text(totalTime);
	}
}

$(".start").click(function () {
	$(".start").hide();
	setTimer();
	showQuestion();
});

// question function

function showQuestion() {
	$("#question").text(askAllQuestion[currentQuestion].question);
	currentAnswer = askAllQuestion[currentQuestion].answer;

	for (
		let lap = 0;
		lap < askAllQuestion[currentQuestion].options.length;
		lap++
	) {
		let option = $("<button>")
			.addClass("btn btn-success btn-lg btn-block selectedAnswer")
			.text(askAllQuestion[currentQuestion].options[lap])
			.attr("value", askAllQuestion[currentQuestion].options[lap]);
		$("#options").append(option);
	}
}

$(document).on("click", ".selectedAnswer", function () {
	let choosedAnswer = $(this).val();
	if (choosedAnswer === currentAnswer) {
		$("#result").text("Correct!");

		score++;
		checkGame();
	} else {
		$("#result").text("Wrong Answer!");

		score--;
		checkGame();
	}
});

// end of game function

function checkGame() {
	if (currentQuestion < 5 || totalTime > 0) {
		currentQuestion++;
		$("#question").empty();
		$("#options").empty();
		showQuestion();
		clearInterval(a);
	} else {
		$("#question").text("Game Over!");
		$("#options").empty();
		$("#result").text(`Your total score is ${score}`);
		$(".start").show();
	}
}
