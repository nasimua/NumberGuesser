let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
 const generateTarget = () => {
     // generates a number bewteen 0 and 9
     return Math.floor(Math.random() * 10)
 }

 const compareGuesses = (user, computer, secret) => {
     //create variables that return values which can be compared when subtracted froim the secret number
     let compGuess = Math.abs(secret - computer);
     let humanGuess = Math.abs(secret - user)

     if (humanGuess > 9 || humanGuess < 0 ) {
         alert('Please enter a number between 0 and 9!');
     }

     if (humanGuess <= compGuess)
        return true;
     else
        return false;

 }

const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
}



const advanceRound = () => {
    currentRoundNumber++;
}

