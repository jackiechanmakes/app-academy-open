/*
 * Write a function nextPrime that accepts a number as an argument.
 * The function should return the nearest prime number that is greater than
 * the given number.
 */

let nextPrime = function(num) {
    // 1. Iterate logic of: increase num by 1, check if prime. If prime, return result.

    let result = num + 1;

    while (!isPrime(result)) {
        result++;
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
console.log(nextPrime(2)); // 3
console.log(nextPrime(3)); // 5
console.log(nextPrime(7)); // 11
console.log(nextPrime(8)); // 11
console.log(nextPrime(20)); // 23
console.log(nextPrime(97)); // 101
