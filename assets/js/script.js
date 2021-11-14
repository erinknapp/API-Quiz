//Declaration of variables needed using the getElementById method

var startButton = document.querySelector ("startButton");
var nextButton = document.querySelector ("nextButton");
var questionContainer = document.querySelector ("questionCard");
var questionEl = document.querySelector  ("question");
var answerEl = document.querySelector ("answer-buttons");
var timerEl = document.querySelector ("timer");
var optionsEl = document.querySelector("options");
var count = 60;
var countEl = document.querySelector("#count");

var timerId;
var timer = 6 * 10;
var questionIndex = 0;

//Function to start game and hide start button once clicked on
function startGame () {
    var quizEl = document.getElementById(wrapper);
    quizEl.setAttribute("class", "cover");

    questionEl.removeAttribute("class");

    timerId = setInterval(timerStart, 1000);
    timerEl.textContent = timer;

    getQuestions();
};

var getQuestions = function () {
    var questionOne = questions[questionIndex];

    var titleEl = document.getElementById 
}
    
}

