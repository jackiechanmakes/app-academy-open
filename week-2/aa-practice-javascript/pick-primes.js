/*
 * Write a function pickPrimes that takes in an array of numbers and returns
 * a new array containing only the prime numbers.
 */

function pickPrimes(nums) {
    // 0. Define new variable of result array
    // 1. Iterate each num of nums
    // 2. Check if num is prime
    // 3. If so, add to result array
    // 4. Return result array

    let result = [];

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (isPrime(num)) {
            result.push(num);
        }
    }

    return result;
}

function isPrime(num) {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

// Test cases
console.log(pickPrimes([2, 3, 4, 5, 6]));  // [2, 3, 5]
console.log(pickPrimes([101, 20, 103, 2017]));  // [101, 103, 2017]
