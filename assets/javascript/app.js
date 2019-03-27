var themesong = document.getElementById('themesong');

var triviaQuestions = [{
	question: "Who plays the tenth Doctor?",
	answerList: ["David Tennant", "Peter Capaldi", "Matt Smith", "Donald Trump"],
	answer: 0
},{
	question: "What does the TARDIS stand for?",
	answerList: ["Time And Radius Dellusions In Space", "Television And Radio Dance In Space", "Time And Relative Dimension In Space", "Theories About Really Dreamy Intellectual Spacemen"],
	answer: 2
},{
	question: "What is the TARDIS disguised as?",
	answerList: ["Phone Booth", "Suitcase", "Refrigerator", "Fish Bowl"],
	answer: 0
},{
	question: "what is Chen-7?",
	answerList: ["A Level 5 planet like Earth", "A deadly plague", "A habitable asteroid", "A robot"],
	answer: 1
},{
	question: "Which planet are the Slitheen from?",
	answerList: ["Rixacoricofallapatorius", "Raxacoricofallapatorius", "Roxacoricofallapatorius", "Rexacoricofallapatorius"],
	answer: 1
},{
	question: "What was the name Henry Van Statten gave to his prize captured alien?",
	answerList: ["Dalek", "Rusty", "Snoop Dog", "Metaltron"],
	answer: 3
},{
	question: "What is the name of the most invaded planet?",
	answerList: ["Tivoli", "Uxarieus", "Sontar", "Earth"],
	answer: 0
},{
	question: "Which Shakespear play are the Doctor and Martha watching in The Shakespeare Code?",
	answerList: ["Macbeth", "Twelfth Night", "Love's Labour's Lost", "Romeo and Juliet"],
	answer: 2
},{
	question: "In The Time of Angels, the Doctor mentions that he is on which famous author's bowling team?",
	answerList: ["Jane Austin", "Virginia Wolf", "Geoffrey Chauncer", "Dr. Suess"],
	answer: 1
},{
	question: "In Forest of the Dead, the Doctor 'saves' River, but only after she has sacrificed herself to save everyone else who was trapped on the library hard-drive. What is/are River Song's absolute final word(s) before her sacrifice?",
	answerList: ["Spoilers!", "You watch us run!", "Goodbye, sweetie...", "To inifity and beyond!"],
	answer: 0
},{
	question: "Which fruit does the Tenth Doctor dislike and in which episode does he tell us this?",
	answerList: ["Oranges, Doomsday", "Pears, Human Nature", "Bananas, The Sontaran Stratagem", "Apples, On Ice"],
	answer: 1
},{
	question: "When was the episode Father's Day set?",
	answerList: ["1985", "1987", "1983", "1999"],
	answer: 1
},{
	question: "According to the Doctor, what is the most important thing you need to get across the universe?",
	answerList: ["Warp Drive", "Wormhole refractor", "A hand to hold", "Screwdriver"],
	answer: 2
},{
	question: "What were Peter Capaldi's first words in Doctor Who?",
	answerList: ["No, sir! All thirteen!", "Hello darling", "Modern Art!", "Kidneys!"],
	answer: 3
},{//q15
	question: "What does Idris tell Rory at the end of The Doctor's Wife?",
	answerList: ["The only water in the forest is the river", "Petrichor", "The little boxes will make you angry", "See you later"],
  answer: 0
},{
  question: "In the Doctor Who Christmas special of 2006, a woman named Donna Noble appeared in the TARDIS, what was she wearing?",
  answerList: ["A pair of Slippers", "A clown mask", "A wedding dress", "A Santa costume"],
  answer: 2
},{
  question: "How old was Captain Jack Harkness when he met Rose Tyler in the height of the London Blitz in 1941?",
  answerList: ["175", "35", "20", "2,065"],
  answer: 1
},{
  question: "What instrument does the Seventh Doctor like to play?",
  answerList: ["Spoons", "Piano", "Kazoo", "Flute"],
  answer: 0
},{
  question: "What is the Eleventh Doctor's favorite food?",
  answerList: ["PB&J", "Hamburgers", "Jelly Beans", "Fishfingers and custard"],
  answer: 3
},{
	question: "What was the tenth Doctor's favorite catch-phrase?",
	answerList: ["Allons-y", "Whoop whoop", "Ta-Da", "Goodbye"],
	answer: 0
},{
	question: "Which old enemy did the ninth Doctor meet in the middle of the series with Rose?",
	answerList: ["Cybermen", "A dalek", "Bo", "Lizard people"],
	answer: 1
},{
	question: "In episode 'The End of the World', as the Earth enters the final stages of oblivion, what piece of music does Cassandra elect to play on her mp3?",
	answerList: ["No Diggity", "Wannabe", "Toxic", "Livin La Vida Loca"],
	answer: 2
},{
	question: "What is the elevenths Doctor's catch-phrase?",
	answerList: ["Whoop-dee-doo", "Holy Cow", "Jeepers", "Geronimo"],
	answer: 3
},{
	question: "In 'Gridlock', the Face of Boe reaveals his last piece of wisdom to the Doctor. What is it?",
	answerList: ["Follow your heart", "Shoot for the stars", "You are not alone", "Use the force"],
  answer: 2
},{
	question: "Against whom was the Doctor fighting when he fell to his 'death' (and regeneration) in his last serial 'Logopolis'?",
	answerList: ["The Master", "Time Lords", "Cybermen", "Abominable Snowman"],
  answer: 0
}]
//here is the array that will later have the gifs match the quetion number
var gifArray = ['question1', 'question2', 'question3', 'question4', 'question5', 'question6', 'question7', 'question8', 'question9', 'question10', 'question11', 'question12', 'question13','question14','question15', 'question16', 'question17', 'question18', 'question19', 'question20', 'question21', 'question22', 'question23', 'question24', 'question25'];
var currentQuestion; var correctAnswer; var incorrectAnswer; var unanswered; var seconds; var time; var answered; var userSelect;
var messages = {
	correct: "Yes, you got it!",
	incorrect: "Nope, that is incorrect",
	endTime: "Out of time!",
	finished: "Alright! Let's see how well you did."
}

$('#startBtn').on('click', function(){
	$(this).hide();
	newGame();
});

$('#startOverBtn').on('click', function(){
	$(this).hide();
	newGame();
});
$(document).ready()

  var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  if(!isChrome){
    $('#iframeAudio').remove()
  }
  else{
  $('#playAudio').remove() //just to make sure that it will not have 2x audio in the background
  };


//creates new game
function newGame(){
	$('#finalMessage').empty();
	$('#correctAnswers').empty();
	$('#incorrectAnswers').empty();
	$('#unanswered').empty();
	currentQuestion = 0;
	correctAnswer = 0;
	incorrectAnswer = 0;
	unanswered = 0;
	newQuestion();
}
//creates new question
function newQuestion(){
	$('#message').empty();
	$('#correctedAnswer').empty();
	$('#gif').empty();
	answered = true;

	//sets up new questions & answerList
	$('#currentQuestion').html('Question '+(currentQuestion+1)+'/'+triviaQuestions.length);
	$('.question').html('<h2>' + triviaQuestions[currentQuestion].question + '</h2>');
	for(var i = 0; i < 4; i++){
		var choices = $('<div>');
		choices.text(triviaQuestions[currentQuestion].answerList[i]);
		choices.attr({'data-index': i });
		choices.addClass('thisChoice');
		$('.answerList').append(choices);
	}
	countdown();
	//clicking an answer will pause the time and setup answerPage
	$('.thisChoice').on('click',function(){
		userSelect = $(this).data('index');
		clearInterval(time);
		answerPage();
	});
}

function countdown(){
	seconds = 15;
	$('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
	answered = true;
	//sets timer to go down
	time = setInterval(showCountdown, 1000);
}

function showCountdown(){
	seconds--;
	$('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
	if(seconds < 1){
		clearInterval(time);
		answered = false;
		answerPage();
	}
}

function answerPage(){
	$('#currentQuestion').empty();
	$('.thisChoice').empty(); //Clears question page
	$('.question').empty();

	var rightAnswerText = triviaQuestions[currentQuestion].answerList[triviaQuestions[currentQuestion].answer];
	var rightAnswerIndex = triviaQuestions[currentQuestion].answer;
	$('#gif').html('<img src = "assets/images/'+ gifArray[currentQuestion] +'.gif" width = "400px">');
	//checks to see correct, incorrect, or unanswered
	if((userSelect == rightAnswerIndex) && (answered == true)){
		correctAnswer++;
		$('#message').html(messages.correct);
	} else if((userSelect != rightAnswerIndex) && (answered == true)){
		incorrectAnswer++;
		$('#message').html(messages.incorrect);
		$('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
	} else{
		unanswered++;
		$('#message').html(messages.endTime);
		$('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
		answered = true;
	}

	if(currentQuestion == (triviaQuestions.length-1)){
		setTimeout(scoreboard, 5000)
	} else{
		currentQuestion++;
		setTimeout(newQuestion, 5000);
	}
}

function scoreboard(){
	$('#timeLeft').empty();
	$('#message').empty();
	$('#correctedAnswer').empty();
	$('#gif').empty();

	$('#finalMessage').html(messages.finished);
	$('#correctAnswers').html("Correct Answers: " + correctAnswer);
	$('#incorrectAnswers').html("Incorrect Answers: " + incorrectAnswer);
	$('#unanswered').html("Unanswered: " + unanswered);
	$('#startOverBtn').addClass('reset');
	$('#startOverBtn').show();
	$('#startOverBtn').html('Start Over?');
}
// //animate daleks
// $(document).ready(function() {
//   animateDiv($('.a'));
//       animateDiv($('.b'));
//       animateDiv($('.c'));

// });

// function makeNewPosition(image) {

//   // Get viewport dimensions (remove the dimension of the div)
//   var h = image.height() - 50;
//   var w = image.width() - 50;

//   var nh = Math.floor(Math.random() * h);
//   var nw = Math.floor(Math.random() * w);

//   return [nh, nw];

// }

// function animateDiv($target) {
//   var newq = makeNewPosition($target.parent());
//   var oldq = $target.offset();
//   var speed = calcSpeed([oldq.top, oldq.left], newq);

//   $target.animate({
//       top: newq[0],
//       left: newq[1]
//   }, speed, function() {
//       animateDiv($target);
//   });

// };

// function calcSpeed(prev, next) {

//   var x = Math.abs(prev[1] - next[1]);
//   var y = Math.abs(prev[0] - next[0]);

//   var greatest = x > y ? x : y;

//   var speedModifier = 0.1;

//   var speed = Math.ceil(greatest / speedModifier);

//   return speed;

// }​
// function PlaySound(mySound) {
//   var thissound=document.getElementById(mySound);
//   thissound.play();
// }

// function StopSound(mySound) {
//   var thissound=document.getElementById(mySound);
//   thissound.pause();
//   thissound.currentTime = 0;
// }

//   window.onload = function() {
//     document.getElementById("themesong").play();

//     window.addEventListener("click", function() {
//     document.getElementById("themesong").pause()
//   })
// }
