/*
 * Write a function sumArray(array) that takes in an array of numbers and
 * returns the total sum of all the numbers.
 */

function sumArray(array) {
    let sum = 0;
    let i = 0;
    while (i < array.length) {
        let num = array[i];
        sum += num;
        i++;
    }
    return sum;
}

// Test cases
console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30
