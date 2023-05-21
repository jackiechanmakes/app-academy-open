const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let secretNumber;
let numAttempts;

// Returns whether guess is equal to that of secretNumber
function checkGuess(number) {
    if (number > secretNumber) {
        console.log("Too high.");
    } else if (number < secretNumber) {
        console.log("Too low.");
    } else {
        console.log("Correct!");
        return true;
    }

    return false;
}

// Prompts user to make a guess until user wins or loses
function askGuess() {
    rl.question("Enter a guess: ", number => {
        let result = checkGuess(Number(number));

        if (result === false && numAttempts > 0) {
            askGuess();
            numAttempts--;
        } else if (result === false && numAttempts === 0) {
            console.log("You lose.");
            rl.close();
        } else {
            console.log("YOU WON.");
            rl.close();
        }
    });
}

// Returns a random whole number between the provided minimum and maximum (inclusive)
function randomInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Prompts user to enter a min and max number for secretNumber
function askRange() {
    rl.question("Enter a max number: ", number => {
        let max = Number(number);
        rl.question("Enter a min number: ", number => {
            let min = Number(number);

            console.log(`I'm thinking of a number between ${min} and ${max}...`);

            secretNumber = randomInRange(min, max);
            askGuess();
        });
    });
}

// Prompts user to enter number of guess attempts allowed for game
function askLimit() {
    rl.question("Enter number of attempts: ", number => {
        numAttempts = number - 1;
        askRange();
    })
}

// Start game
askLimit();
