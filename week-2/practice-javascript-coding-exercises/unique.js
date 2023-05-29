/*
 * Write a function unique that accepts an array as an argument.
 * The function should return a new array containing elements of the input array,
 * without duplicates.
 */

function unique(arr) {
    // 0. Define new result array
    // 1. Iterate each element of arr
    // 2. If element is not in result array, add to result array
    // 3. Return result array

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (!result.includes(element)) {
            result.push(element);
        }
    }

    return result;
}

// Test cases
console.log(unique([1, 1, 2, 3, 3])); // [1, 2, 3]
console.log(unique([11, 7, 8, 10, 8, 7, 7])); // [11, 7, 8, 10]
console.log(unique(['a', 'b', 'c', 'b'])); // ['a', 'b', 'c']
