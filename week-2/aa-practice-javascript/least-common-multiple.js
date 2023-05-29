/*
 * Write a function leastCommonMultiple(num1, num2) that accepts
 * two numbers as arguments. The functions should return the
 * smallest number that is divisible by both num1 and num2.
 */

function leastCommonMultiple(num1, num2) {
    // Find larger argument to start iterations with to skip
    // numbers to test. It's the same complexity with or without
    // this logic added so note that this is a minor optimization.
    let start = num1;
    if (num1 < num2) {
        start = num2;
    }

    for (let i = start; i <= (num1 * num2); i++) {
        if (i % num1 === 0 && i % num2 === 0) {
            return i;
        }
    }

    // Return erorr code indicating no LCM was found.
    // LCM is defined as a positive integer.
    return -1;
}

console.log(leastCommonMultiple(4, 6)); // 12
console.log(leastCommonMultiple(3, 5)); // 15
console.log(leastCommonMultiple(2, 10)); // 10
