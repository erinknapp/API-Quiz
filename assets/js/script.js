
var questionsEl = document.querySelector("#questions");
var timerEl = document.querySelector("#timer");
var startButton = document.querySelector("#start");
var optionsEl = document.querySelector("#options");
var answerKeyEl = document.querySelector("#answerKey");
var initialsEl = document.querySelector("#initials");
var submitButton = document.querySelector("#submit");

var timerId;
var timer = 6 * 10;
var questionIndex = 0;

//Function to start game and hide start button once clicked on
function startQuiz () {
    var quizEl = document.getElementById("intro");
    quizEl.setAttribute("class", "cover");
    console.log(quizEl);

    questionsEl.removeAttribute("class");

    timerId = setInterval(timerStart, 1000);
    timerEl.textContent = timer;

    getQuestions();
}
//pulling from questions.js and iterating through the questions array
var getQuestions = function () {

    var firstQuestion = questions[questionIndex];
    var titleEl = document.getElementById ("nextQuestion");
    titleEl.textContent = firstQuestion.title;
    titleEl.style.fontSize = "250%";
    optionsEl.innerHTML = "";
    firstQuestion.options.forEach((options, i) =>{

        var optionsButton = document.createElement("button")
        optionsButton.setAttribute("class", "options");
        optionsButton.setAttribute("value", "options");
        optionsButton.style.color = ("darkblue");
        optionsButton.style.fontSize = "16px";
        optionsButton.style.padding = "10px";

        optionsButton.textContent = i + 1 + ". " + options;

        optionsButton.onclick = questionButton;
        optionsEl.appendChild(optionsButton);
     });
}

var questionButton = function() {
    if(this.value !== questions[questionIndex].answer) {
        timer-=3;  //if wrong answer deduct 3 seconds
        if (timer < 0) {
            timer=0;
        }
    
        //wrong answer
        timerEl. textContent = timer;
        answerKeyEl.textContent = "Sorry that's not correct";
        answerKeyEl.style.color = "red";


    } else {
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
    var scoreEl = document.getElementById("score");
    scoreEl.textContent = timer;

    questionsEl.setAttribute("class", "cover");
    answerKeyEl.setAttribute("class", "cover");
}

var timerStart = function() {
    timer--;
    timerEl.textContent = timer;
    if (timer <=0){
        stopQuiz();
    }
}

//save high score using localstorage
var saveScore = function() {
    var initials = initialsEl.value.trim();

    if(initials !== ""){
        //store scores and initals in localstorage
        var highScores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    
        var addScore = {
            score: timer,
            initials: initials
        };
        highScores.push(addScore);
        window.localStorage.setItem("highscores", JSON.stringify(highScores));

    }

}
//button click to start quiz
startButton.onclick = startQuiz;

//save initials click
submitButton.onclick = saveScore;
