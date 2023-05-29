/*
 * Write a function allElseEqual that takes in an array of numbers.
 * The function should return the element of the array that is equal to half of
 * the sum of all elements of the array. If there is no such element, the method
 * should return null.
 */

let allElseEqual = function(numbers) {
    // 1. Iterate array of numbers
    // 2. Take sum of array of numbers and find sum / 2
    // 3. Find index of element with value equal to sum / 2 and and return element
    //    if element exists. Return null otherwise.

    let halfSum = getSum(numbers) / 2;
    let indexResult = numbers.indexOf(halfSum);

    if (indexResult !== -1) {
        let result = numbers[indexResult];
        return result;
    }

    return null;
};

let getSum = function(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        sum += num;
    }

    return sum;
}

// Test cases
console.log(allElseEqual([2, 4, 3, 10, 1])); // 10
console.log(allElseEqual([6, 3, 5, -9, 1])); // 3
console.log(allElseEqual([1, 2, 3, 4]));     // null
