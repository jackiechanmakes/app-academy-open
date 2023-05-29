/*
 * A number's summation is the sum of all positive numbers less than or equal
 * to the number. For example: the summation of 3 is 6 because 1 + 2 + 3 = 6,
 * the summation of 6 is 21 because 1 + 2 + 3 + 4 + 5 + 6 = 21.
 *
 * Write a function summationSequence that takes in two numbers: start and length.
 * The function should return an array containing length total elements.
 * The first number of the sequence should be the start number.
 * At any point, to generate the next element of the sequence we take the summation
 * of the previous element. You can assume that length is not zero.
 */

function summationSequence(start, length) {
    // 1. Define a result array variable initialized with start element
    // 2. Iterate length number of times.
    //    a. Each iteration, find summation (helper function) of previous element.
    //    b. Add summation to result array.
    // 3. Return array.

    let result = [start];

    for (let i = result.length; i < length; i++) {
        let previousElement = result[i - 1];
        let summation = getSummation(previousElement);
        result.push(summation);
    }

    return result;
}

function getSummation(num) {
    // A number's summation is the sum of all positive numbers less than or equal
    // to the number. For example: the summation of 3 is 6 because 1 + 2 + 3 = 6,
    // the summation of 6 is 21 because 1 + 2 + 3 + 4 + 5 + 6 = 21.

    let sum = 0;

    for (let i = 1; i <= num; i++) {
        sum += i;
    }

    return sum;
}

// Test cases
console.log(summationSequence(3, 4)); // [3, 6, 21, 231]
console.log(summationSequence(5, 3)); // [5, 15, 120]
