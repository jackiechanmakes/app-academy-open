/*
 * Write a function lastIndex that takes in a string and a character. The function
 * should return the last index where the character can be found in the string.
 */

function lastIndex(str, char) {
    // 1. Iterate through str in reverse to check for char
    // 2. Return index of first char found

    for (let i = str.length - 1; 0 <= i; i--) {
        if (str[i] === char) {
            return i;
        }
    }
    // Case: no char is found in str.
    return -1;
}

// Test cases
console.log(lastIndex("abca", "a"))        // 3
console.log(lastIndex("mississipi", "i"))  // 9
console.log(lastIndex("octagon", "o"))     // 5
console.log(lastIndex("programming", "m")) // 7
