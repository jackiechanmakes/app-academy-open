/*
 * Write a function doubleSequence that accepts a base and a length as arguments.
 * The function should return an array representing a sequence that contains
 * "length" elements. The first element of the sequence is always the "base",
 * the subsequent elements can be generated by doubling the previous element of
 * the sequence.
 */

let doubleSequence = function(base, length) {
    // 1. Define result array
    // 2. Iterate length number of times multiplying base each time by num to array
    // 3. Return array

    let result = [];

    for (let i = 0; i < length; i++) {
        if (result.length === 0) {
            result.push(base);
        } else {
            let prevElement = result[i - 1];
            let newElement = prevElement * 2;
            result.push(newElement);
        }
    }

    return result;
};

// Test cases
console.log(doubleSequence(7, 3));  // [7, 14, 28]
console.log(doubleSequence(3, 5));  // [3, 6, 12, 24, 48]
console.log(doubleSequence(5, 3));  // [5, 10, 20]
console.log(doubleSequence(5, 4));  // [5, 10, 20, 40]
console.log(doubleSequence(5, 0));  // [ ]