/*
 * Write a function tripler(nums) that takes in an array as an arg.
 * The function should return a new array containing three times every
 * number of the original array.
 */

function tripler(nums) {
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        let originalElement = nums[i];
        let newElement = originalElement * 3;
        result.push(newElement);
    }

    return result;
}

// Test cases
console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]
