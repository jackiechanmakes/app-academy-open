/*
 * Write a function prevPrime that accepts a number as an argument.
 * The function should return the nearest prime number that is smaller than the
 * given argument. Since 2 is the smallest prime number, return null if no number
 * can be returned.
 */

let prevPrime = function(num) {
    // 1. If num is less than or equal to 2, return null
    // 2. Iterate from num - 1 down to 3
    // 3. Check if each num is a prime, return first num that is prime

    for (let i = num - 1; 2 < i; i--) {
        if (isPrime(i)) {
            return i;
        }
    }

    return null;
};

let isPrime = function(num) {
    // A prime number is a positive integer that is only divisible by 1 and itself

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

console.log(isPrime(31));   // true
console.log(isPrime(32));   // false
console.log(prevPrime(32)); // 31
console.log(prevPrime(33)); // 31
console.log(prevPrime(14)); // 13
console.log(prevPrime(7));  // 5
console.log(prevPrime(4));  // 3
console.log(prevPrime(2));  // null
console.log(prevPrime(1));  // null
