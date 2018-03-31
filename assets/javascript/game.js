
//Computer's Choices
var compChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 

//Variables 
var wins=0;
var losses=0;
var guessesLeft=9;
var yourGuessesSoFar = [];

//Computer New Guess 
function newGuess() {
    var result = compChoices[Math.floor(Math.random() * compChoices.length)];
    console.log(' newGuess! ', result);
    return result;
}
var compGuess = newGuess();
   

// Function for key pressed
document.onkeyup = function(event){
    //User's Guess
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();   
    //User's Guess displayed on screen
    yourGuessesSoFar.push(userGuess);

    console.log(userGuess);
            
        //If user Wins
        if (userGuess === compGuess) {
            alert("WOW YOU READ MY MIND!!");
            wins++;
            guessesLeft = 9;
            yourGuessesSoFar.length = 0;
            compGuess = newGuess();


        } 
        //If User uses up all of the guesses
        else if (guessesLeft === 1) {
            alert("Nice Try!");
            losses++;
            guessesLeft=9;
            yourGuessesSoFar.length = 0;
            compGuess = newGuess();
        }
        //If User does not guess correct
        else if (userGuess !== compGuess) {
            guessesLeft--;
            
        }


        //This will update whats in the HTML
        var html =
            "<h2>The Psychic Game</h2>" +
            "<br>" +
            "<p>Guess what letter I'm thinking of</p>" +
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses Left: " + guessesLeft + "</p>" +
            "<p>Your Guesses So Far: " + yourGuessesSoFar + "</p>";
          

        // Set the inner HTML contents of the #play div to our html string
            document.querySelector("#play").innerHTML = html;

    }