
//Comp Choices and variables
var compChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 
var wins=0;
var losses=0;
var guessesLeft=9;
var yourGuessesSoFar=0;

// Function for key pressed
// userGuess = key pressed
// compGuess = random # which = random letter
document.onkeyup = function(event){
    var userGuess = event.key;
    var compGuess = compChoices[Math.floor(Math.random() * compChoices.length)];

//Computer picks a random letter
//Letter gets recorded each time

//User guesses a letter 
    if ((userGuess==="a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z")) {
        if (userGuess === compGuess) {
            wins++;
            guessesLeft = 9;
        } else {
            guessesLeft--;

        }
        
     




        var html =
            "<h2>The Psychic Game</h2>" +
            "<p>Guess what letter I'm thinking of</p>" +
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses Left: " + guessesLeft + "</p>" +
            "<p>Your Guesses So Far: " + yourGuessesSoFar + "</p>";
          

        // Set the inner HTML contents of the #game div to our html string
            document.querySelector("#play").innerHTML = html;

    }
};
//Computer picks a random letter
//Letter gets recorded each time

//User guess compares to computer guess

//User wrong then guesses goes down by 1

    //after 9 tries losses goes up by 1

    //guesses left restarts

//user right then wins goes up by 1

    //gueses left restarts


