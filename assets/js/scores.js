var showScore = function() {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    highscores.sort(function(a,b) {
        return b.score - a.score;
        // reverse order from highest to lowest
    });
    console.log(highscores);

        highscores.forEach(function(score) {
            var elementLi = document.createElement("li");
            elementLi.textContent = score.initals + "---" + score.score;
            
            var displayScore = document.getElementById("highscores");
            displayScore.appendChild(elementLi);
        });
}

// clear scores
var clearScores = function() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
}

document.getElementById("clear").onclick = clearScores;

showScore();
