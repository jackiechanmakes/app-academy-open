/*
 * Write a function greatestFactorArray that takes in an array of numbers and
 * returns a new array where every even number is replaced with its greatest
 * factor. A greatest factor is the largest number that divides another with no
 * remainder. For example, the greatest factor of 16 is 8. (For the purpose of this
 * problem we won't say the greatest factor of 16 is 16, because that would be
 * too easy).
 */

function greatestFactorArray(nums) {
    // 1. Define a new variable of result array
    // 2. Iterate each element of array
    // 3. Check if element is an even number.
    //    a. If so, find greatest factor (helper function) and add to result array.
    // 4. If odd number, add to result array as is.
    // 5. Return result.

    let result = [];

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (num % 2 === 0) {
            let greatestFactor = getGreatestFactor(num);
            result.push(greatestFactor);
        } else {
            result.push(num);
        }
    }

    return result;
}

function getGreatestFactor(num) {
    // A greatest factor is the largest number that divides another with no remainder.
    // For this function, it cannot be the num itself.

    for (let i = num - 1; 0 < i; i--) {
        if (num % i === 0) {
            return i;
        }
    }

    // Case: error
    return -1;
}

// Test cases
console.log(greatestFactorArray([16, 7, 9, 14])); // [8, 7, 9, 7]
console.log(greatestFactorArray([30, 3, 24, 21, 10])); // [15, 3, 12, 21, 5]
