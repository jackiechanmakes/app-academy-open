/*
 * Define a function isPrime(number) that returns true if number
 * is prime. Otherwise, false. A number is prime if it is only
 * divisible by 1 and itself.
 */

function isPrime(number) {
    // A number is prime if it is only divisible by 1 and itself.
    // Negative numbers, 0, and 1 are not prime numbers.
    if (number < 2) {
        return false;
    }

    let i = 2;
    while (i < number) {
        if (number % i === 0) {
            return false;
        }
        i++;
    }

    return true;
}

console.log(isPrime(-10)); // => false
console.log(isPrime(1)); // => false
console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // => true
