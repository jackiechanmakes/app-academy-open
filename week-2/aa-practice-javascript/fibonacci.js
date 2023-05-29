/*
 * The fibonacci sequence is a sequence of numbers whose first and
 * second elements are 1. To generate further elements of the sequence
 * we take the sum of the previous two elements. For example the first
 * 6 fibonacci numbers are 1, 1, 2, 3, 5, 8. Write a function
 * fibonacci that takes in a number length and returns the
 * fibonacci sequence up to the given length.
 */

function fibonacci(num) {
    let result = [];

    while (result.length < num) {
        if (result.length === 0) {
            result.push(1);
        } else if (result.length === 1) {
            result.push(1);
        } else {
            result.push(result[result.length-1] + result[result.length-2]);
        }
    }

    return result;
}


console.log(fibonacci(0)); // []
console.log(fibonacci(1)); // [1]
console.log(fibonacci(6)); // [1, 1, 2, 3, 5, 8]
console.log(fibonacci(8)); // [1, 1, 2, 3, 5, 8, 13, 21]
