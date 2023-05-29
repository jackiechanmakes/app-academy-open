/*
 * Write a function reverseString(str) that takes in a string.
 * The function should return a new string where the order of the
 * characters is reversed.
 */

let reverseString = function(str) {
    let result = "";

    for (let i = str.length - 1; 0 <= i; i--) {
        let letter = str[i];
        result += letter;
    }

    return result;
};

// Test cases
console.log(reverseString('fish')); // 'hsif'
console.log(reverseString('marathon')); // 'nohtaram'
