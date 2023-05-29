/*
 * Write a function yeller(words) that takes in an array of words.
 * The function should return a new array where each element of the original
 * array is yelled.
 */

function yeller(words) {
    let result = [];
    let i = 0;

    while (i < words.length) {
        let wordYelled = words[i].toUpperCase() + "!";
        result.push(wordYelled);
        i++;
    }

    return result;
}

// Test cases
console.log(yeller(['hello', 'world'])); // [ 'HELLO!', 'WORLD!' ]
console.log(yeller(['kiwi', 'orange', 'mango'])); // [ 'KIWI!', 'ORANGE!', 'MANGO!' ]
