/*
 * Write a function evenNumbers(max) that takes in a number as an arg.
 * The function should return an array containing all positive, even numbers
 * that are less than max.
 *
 * Define this function using function expression syntax.
 */

let evenNumbers = function(max) {
    // 1. Iterate starting from numbers greater than 0 to max but not including max
    // 2. Check if number is even
    // 3. If even, add number to result array
    // 4. Return array

    let result = [];

    for (let i = 1; i < max; i++) {
        if (i % 2 === 0) {
            result.push(i);
        }
    }

    return result;
};

// Test cases
console.log(evenNumbers(7)); // [ 2, 4, 6 ]
console.log(evenNumbers(12)); // [ 2, 4, 6, 8, 10 ]
console.log(evenNumbers(15)); // [ 2, 4, 6, 8, 10, 12, 14 ]
