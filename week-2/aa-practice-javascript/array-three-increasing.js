/*
 * Write a function threeIncreasing that accepts an array of numbers as an argument.
 * The function should return a boolean indicating whether or not the array contains
 * three consecutive numbers in consecutive increasing order, like 7, 8, 9.
 */

function threeIncreasing(arr) {
    // 1. Iterate through array
    // 2. Check if there are consecutive numbers in consecutive increasing order.
    // 3. If so, return true. If there's none in entire array, return false.

    for (let i = 0; i < arr.length - 2; i++) {
        let firstElement = arr[i];
        let secondElement = arr[i+1];
        let thirdElement = arr[i+2];
        if (firstElement === secondElement - 1 && secondElement === thirdElement - 1) {
            return true;
        }
    }
    return false;
}

// Test cases
console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4]));     // true
console.log(threeIncreasing([2, 7, 8, 9]));                 // true
console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6]));        // false
console.log(threeIncreasing([1, 2, 4, 5, 2, 7, 8]));        // false
