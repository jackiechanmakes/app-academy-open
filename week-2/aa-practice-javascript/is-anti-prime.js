/*
 * Write a function isAntiPrime that accepts a number as an argument.
 * The method should return true if the given number has more divisors than
 * all positive numbers less than the given number. For example, 24 is an anti-prime
 * because it has more divisors than any positive number less than 24.
 */

let isAntiPrime = function(num) {
    // 1. Find num of divisors for target num
    // 2. Iterate from 0 to num
        // a. Check if any positive integer less than num has more divisors than num.
        //    If so, return false. Otherwise, return true.

    let targetNumDivisors = getNumDivisors(num);

    for (let i = 1; i < num; i++) {
        let lowerNumDivisors = getNumDivisors(i);
        if (targetNumDivisors <= lowerNumDivisors) {
            return false;
        }
    }

    return true;
};

let getNumDivisors = function(num) {
    let count = 0;

    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            count++;
        }
    }

    return count;
}


// Test cases
console.log(isAntiPrime(24))   // true
console.log(isAntiPrime(36))   // true
console.log(isAntiPrime(48))   // true
console.log(isAntiPrime(360))  // true
console.log(isAntiPrime(1260)) // true
console.log(isAntiPrime(27))   // false
console.log(isAntiPrime(5))    // false
console.log(isAntiPrime(100))  // false
console.log(isAntiPrime(136))  // false
console.log(isAntiPrime(1024)) // false
