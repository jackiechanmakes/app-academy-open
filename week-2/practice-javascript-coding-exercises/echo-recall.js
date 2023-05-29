/*
 * Write a function echo that takes in a string and console.logs that string "echo-ized".
 */

function echo(str) {
    console.log(`${str.toUpperCase()} ... ${str} ... ${str.toLowerCase()}`);
}

// Test cases
echo("Mom!"); // => prints "MOM! ... Mom! ... mom!"
echo("hey"); // => prints "HEY ... hey ... hey"
echo("JUMp"); // => prints "JUMP ... JUMp ... jump"
