//Declaration of variables needed using the getElementById method

var startButton = document.querySelector (start-btn);
var nextButton = document.querySelector (next-btn);
var questionContainer = document.gquerySelector (questionCard);
var questionEl = document.querySelector  (question);
var answerEl = document.querySelector  (answer-buttons);

//Button click events
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})


//Function to start game and hide start button once clicked on
function startGame () {
    startButton.classList.add('hide')
}

//Function to proceed to next question
function setNextQuestion() {

}

//Function for selecting answer
function selectAnswer () {

}

