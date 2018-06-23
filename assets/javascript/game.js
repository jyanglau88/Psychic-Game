//Variables

var Wins = 0;
var Losses = 0;
var Guesses = 10;

var compABCs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var userGuess = "";

var youGuessedthis = [];

var computerLetter = compABCs[Math.floor(Math.random() * compABCs.length)];

//function
document.onkeyup = function(event) {

  var userGuess = event.key;

if (youGuessedthis.indexOf(userGuess) < 0 && compABCs.indexOf(userGuess) >= 0) {
youGuessedthis[youGuessedthis.length]=userGuess;
Guesses--;
}

if (computerLetter == userGuess) {
    Wins++;
    Guesses++;
    youGuessedthis = [];
    computerLetter = compABCs[Math.floor(Math.random() * compABCs.length)];
}

if (Guesses == 0) {
    Losses++;
    Guesses = 9;
    youGuessedthis = [];
    computerLetter = compABCs[Math.floor(Math.random() * compABCs.length)];
}

document.getElementById("Wins").textContent = "Wins: " + Wins;
document.getElementById("Losses").textContent = "Losses: " + Losses;
document.getElementById("Guesses").textContent = "Guesses left: " + Guesses;
document.getElementById("youGuessedthis").textContent = youGuessedthis;

}