/*
 * Write a function choosePrimes(nums) that takes in an array of numbers as args.
 * The function should return a new array containing the primes from the original
 * array. A prime number is a number that is only divisible by 1 and itself.
 * Hint: consider creating a helper function to check if a number is prime!
 */

let choosePrimes = function(nums) {
    // 1. Create new array
    // 2. Iterate through array. If element is prime, add to new array.
        // a. Add isPrime() helper function
    // 3. Return new array

    let result = [];

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (isPrime(num)) {
            result.push(num);
        }
    }

    return result;
};

let isPrime = function(num) {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
};

// Test cases
console.log(isPrime(20)); // false
console.log(isPrime(3)); // true
console.log(isPrime(17)); // true
console.log(isPrime(2)); // true
console.log(isPrime(0)); // false
console.log(isPrime(-5)); // false
console.log(isPrime(1)); // false
console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]
