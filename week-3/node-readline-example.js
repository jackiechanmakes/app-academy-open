// Import the readline module
const readline = require("readline");

// Create an interface to talk to the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user a question
// rl.question("What's up? ", answer => {
    // Print user response
    // console.log("You responded: " + answer);
    // Close the interface
    // r1.close();
// });

// Showcases asynchronicity of question method
// console.log("DONE");

// Callback chaining with named functions instead of anonymous functions
// for readability
rl.question("What's up, doc? ", handleResponseOne);

function handleResponseOne(firstAnswer) {
  console.log(firstAnswer + " is up.");
  rl.question("What's down, clown? ", handleResponseTwo);
}

function handleResponseTwo(secondAnswer) {
  console.log(secondAnswer + " is down.");
  rl.question("What's left, Jeff? ", handleResponseThree);
}

function handleResponseThree(thirdAnswer) {
  console.log(thirdAnswer + " is left.");
  rl.close();
}
