/*
 * Write a function commonFactors that accepts two numbers as arguments.
 * The function should return an array containing positive numbers that are
 * able to divide both arguments.
 */

function commonFactors(num1, num2) {
    // 0. Define variable of result array
    // 1. Find smaller argument
    // 2. Iterate from 1 to smaller argument, inclusive
    // 3. Check if num1 AND num2 is divisible by num (% operator with no remainder)
    // 4. If divisible by both, add to result array
    // 5. Return result

    let result = [];
    let max;

    if (num1 <= num2) {
        max = num1;
    } else {
        max = num2;
    }

    for (let i = 1; i <= max; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            result.push(i);
        }
    }

    return result;
}

// Test cases
console.log(commonFactors(50, 30));            // [1, 2, 5, 10]
console.log(commonFactors(8, 4));              // [1, 2, 4]
console.log(commonFactors(4, 8));              // [1, 2, 4]
console.log(commonFactors(12, 24));            // [1, 2, 3, 4, 6, 12]
console.log(commonFactors(22, 44));            // [1, 2, 11, 22]
console.log(commonFactors(7, 9));              // [1]
