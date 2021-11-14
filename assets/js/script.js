//Declaration of variables needed using the getElementById method

var startButton = document.getElementById (start-btn)
var nextButton = document.getElementById (next-btn)
var questionContainer = document.getElementById(questionCard)
var questionEl = document.getElementById (question)
var answerEl = document.getElementById (answer-buttons)

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

questions = [
    {
        question:
        answers: [
            
        ]
    }
]