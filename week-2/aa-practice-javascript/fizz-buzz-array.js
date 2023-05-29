/*
 * Write a function fizzBuzz(max) that accepts a number as an arg.
 * The function should return an array containing all positive numbers less
 * than max that are divisible by either 3 or 5, but not both.
 */

let fizzBuzz = function(max) {
    // 1. Iterate from 1 to max, but not including max
    // 2. Check if num is divisible by 3 but not 5. If so, add to array.
    // 3. Check if num is divisible by 5 but not 3. If so, add to array.
    // 4. Return array.

    let result = [];

    for (let i = 1; i < max; i++) {
        if (i % 3 === 0 && i % 5 !== 0) {
            result.push(i);
        } else if (i % 5 === 0 && i % 3 !== 0) {
            result.push(i);
        }
    }

    return result;
};

// Test cases
console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]
