var count=31;
var counter;
// when the start button is clicked, start the interval timer
$('#startButton').on('click', function(){
    var counter=setInterval(timer, 1000);
});
function timer() {

  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     //counter ended, do something here..go to answer page
     return;
  }
  document.getElementById("time").innerHTML=count + " seconds!";
};

function generateQuiz(){

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

var myQuestions = [
	{
		question: "Who plays the tenth doctor?",
		answers: {
			a: 'David Tennant',
			b: 'Matt Smith',
			c: 'Peter Capaldi'
		},
		correctAnswer: 'a'
	},
	{
		question: "What does the TARDIS stand for?",
		answers: {
			a: 'Time And Radius Dellusions In Space ',
			b: 'Television And Radio Dance In Space',
			c: 'Time And Relative Dimension In Space'
		},
		correctAnswer: 'c'
  },
  {
		question: "What is the TARDIS disguised as?",
		answers: {
			a: 'Suitcase',
			b: 'Phone Booth',
			c: 'Refrigerator'
		},
		correctAnswer: 'b'
	},
];

function showQuestions(){
    // we'll need a place to store the output and the answer choices
    var output = [];
    var answers;
    // for each question...
    for(var i=0; i<myQuestions.length; i++){
      // first reset the list of answers
      answers = [];
       // for each available answer to this question...
       for(letter in myQuestions[i].answers){
         // ...add an html radio button
         answers.push(
           '<label>'
             + '<input type="radio" name="question'+i+'" value="'+letter+'">'
             + letter + ': '
             + myQuestions[i].answers[letter]
           + '</label>'
         );
       }
        // add this question and its answers to the output
      output.push(
        '<div class="question">' + myQuestions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
      );
    }
     // finally combine our output list into one string of html and put it on the page
    quizContainer.innerHTML = output.join('');

    }

  function showResults(){

      // gather answer containers from our quiz
      var answerContainers = quizContainer.querySelectorAll('.answers');

      // keep track of user's answers
      var userAnswer = '';
      var numCorrect = 0;

      // for each question...
      for(var i=0; i<myQuestions.length; i++){

        // find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

        // if answer is correct
        if(userAnswer===myQuestions[i].correctAnswer){
          // add to the number of correct answers
          numCorrect++;

          // color the answers green
          answerContainers[i].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[i].style.color = 'red';
        }
      }
      // show number of correct answers out of total
      resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
      // when user clicks submit, show results
      submitButton.click = showResults();
    }
      // show the questions
      showQuestions();

}


 generateQuiz();
