/*
 * Write a method caesarCipher that takes in a string and a number.
 * The function should return a new string where every character of the original
 * is shifted num characters in the alphabet.
 */

function caesarCipher(str, num) {
    // 1. Define a variable for a new string and a variable for the alphabet
    // 2. Iterate through string and shift index by num in the alphabet
        // a. For index that passes index for z(25), subtract 26 letters to circle around
        //    the alphabet again.

    let result = "";
    let alphabet = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < str.length; i++) {
        let oldIndex = alphabet.indexOf(str[i]);
        let newIndex = oldIndex + num;
        let newChar = alphabet[newIndex % alphabet.length]
        result += newChar;
    }
    return result;
}

// Test cases
console.log(caesarCipher("apple", 1)); // "bqqmf"
console.log(caesarCipher("bootcamp", 2)); // "dqqvecor"
console.log(caesarCipher("zebra", 4)); // "difve"
