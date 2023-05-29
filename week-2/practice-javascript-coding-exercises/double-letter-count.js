/*
 * Write a function doubleLetterCount that takes in a string and returns the number
 * of times that the same letter repeats twice in a row.
 */

function doubleLetterCount(str) {
    // 1. Define count variable
    // 2. Iterate through string
        // a. If a letter is repeated twice in a row, add to count
        // b. Otherise, ignore
    // 3. Return count value

    let count = 0;

    let i = 0;
    while (i < str.length - 1) {
        if (str[i] === str[i+1]) {
            count++;
        }
        i++;
    }
    return count;
}

// Test cases
console.log(doubleLetterCount("the jeep rolled down the hill"));  // 3
console.log(doubleLetterCount("bootcamp")); // 1
