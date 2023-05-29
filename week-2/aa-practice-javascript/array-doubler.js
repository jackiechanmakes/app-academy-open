/*
 * Write a function doubler(numbers) that takes an array of numbers and returns
 * a new array where every element of the original array is multiplied by 2.
 */

function doubler(numbers) {
    let numbersDoubled = [];
    let i = 0;
    while (i < numbers.length) {
        let numOriginal = numbers[i];
        let numDoubled = numOriginal * 2;
        numbersDoubled.push(numDoubled);
        i++;
    }
    return numbersDoubled;
}

// Test cases
console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]
console.log(doubler([7, 1, 8])); // => [14, 2, 16]
