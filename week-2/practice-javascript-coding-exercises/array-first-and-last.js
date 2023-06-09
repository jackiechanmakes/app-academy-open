/*
 * Write a function firstAndLast that takes in an array of numbers and
 * returns the sum of the first and last element if there is an even number of
 * elements in the array. If there is an odd number of elements in the array,
 * then the function should return the difference between the first and last
 * elements of the array.
 */

function firstAndLast(arr) {
    // 1. Determine length of array
    // 2. Calculate
        // a. If odd, take difference between first and last element
        // b. If even, take sum of first and last element
    // 3. Return sum or difference

    let firstElement = arr[0];
    let lastElement = arr[arr.length - 1];
    if (arr.length % 2 === 0) {
        // Case: even number of elements in array
        return firstElement + lastElement;
    }

    // Case: odd number of elements in array
    return firstElement - lastElement;
}

// Test case
console.log(firstAndLast([1, 2, 3, 4]));    // 5
console.log(firstAndLast([1, 2, 3, 4, 5])); // -4
console.log(firstAndLast([12, 5]));         // 17
console.log(firstAndLast([12]));            // 0
console.log(firstAndLast([7, 11, 3]));      // 4
