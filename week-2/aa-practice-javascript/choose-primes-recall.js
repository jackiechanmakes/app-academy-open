/*
 * Write a function choosePrimes(nums) that takes in an array of numbers as args.
 * The function should return a new array containing the primes from the original array.
 * A prime number is a number that is only divisible by 1 and itself.
 * Hint: consider creating a helper function to check if a number is prime!
 */

function choosePrimes(nums) {
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
console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]
