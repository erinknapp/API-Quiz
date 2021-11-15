//Declaration of variables needed using the querySelector method

var startButton = document.querySelector ("#startButton");
var nextButton = document.querySelector ("#extButton");
var questionsEl = document.querySelector  ("#questions");
var timerEl = document.querySelector ("#timer");
var optionsEl = document.querySelector("#options");
var initialsEl = document.querySelector("#initials");
var submitEl = document.querySelector("#submit")
var answerKeyEl = document.querySelector("#submit")

var timerId;
var timer = 6 * 10;
var questionIndex = 0;

//Function to start game and hide start button once clicked on
function startGame () {
    var quizEl = document.getElementById("wrapper");
    quizEl.setAttribute("class", "cover");

    questionsEl.removeAttribute("class");

    timerId = setInterval(timerStart, 1000);
    timerEl.textContent = timer;

    getQuestions();
};

//pulling from questions.js

var getQuestions = function () {

    var questionOne = questions[questionIndex];

    var titleEl = document.getElementById ("nextQuestion");
    titleEl.textContent = questionOne.title;
    titleEl.style.fontSize = "250%";

    optionsEl.innerHTML = "";

    //interate through array of questions and answers
    questionOne.options.forEach((options, i) =>{

        var optionsButton = document.createElement("button")
        optionsButton.setAttribute("class", "options");
        optionsButton.setAttribute("value", options);
        optionsButton.style.color = ("skyblue");
        optionsButton.style.fontSize = "30px";
        optionsButton.style.padding = "20px";

        optionsButton.textContent = i + 1 + ". " + options;

        optionsButton.onclick = questionBtn;
        optionsEl.appendChild(optionsButton);
     });
}

var questionBtn = function() {
    if(this.value !== questions[questionIndex].answer) {
        timer-=3;  //if wrong answer deduct 3 seconds
        if (timer < 0) {
            timer=0;
        }
    
        //wrong answer
        timerEl. textContent = timer;
        answerKeyEl.textContent = "Sorry that's not correct";
        answerEl.style.color = "red";


    }else {
        answerKeyEl.textContent = "That's right!";
        answerKeyEl.style.color = "green";
    }

    answerKeyEl.setAttribute("class", "showAnswer");
    setTimeout(function() {
        answerKeyEl.setAttribute("class", "hideAnswer");
    }, 1000);
    
    // advance questions with increment operator
    questionIndex++;

    //prevent negative timer values
    if (questionIndex === questions.length){
        stopQuiz();
    }else {
        getQuestions();
    }
}

//quiz stops when all questions are done

var stopQuiz = function() {
    clearInterval(timerId);
    var resultEl =  document.getElementById("results");
    resultEl.removeAttribute("class");
    var ScoreEl = document.getElementById("score");
    ScoreEl.textContent = timer;
    questionsEl.setAttribute("class", "cover");
    answerKeyEl.setAttribute("class", "cover");
}

var startTimer = function() {
    timer--;
    timerEl.textContent = timer;
    if (timer <=0){
        stopQuiz();
    }
}

//save high score using localstorage
var saveScore = function() {
    var initials = intitialsEl.value.trim();

    if(initials !== ""){
        //store scores and initals in localstorage
        var highScores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    
        var addScore = {
            score: timer,
            initials: initials
        };
        highScores.push(addScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));

    }


//button click to start quiz
startBtn.onclick = startGame;

//save initials click
submitBtn.onclick = saveScore;}
