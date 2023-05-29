/*
 * Given an array nums, write a function to move all 0's to the end of it while
 * maintaining the relative order of the non-zero elements.
 *
 * Input: [0,1,0,3,12] Output: [1,3,12,0,0]x
 *
 * You must do this in-place without making a copy of the array.
 * Minimize the total number of operations.
 */

function moveZeroes(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            for (let j = i; j < arr.length; j++) {
                // Swap current index with the one after
                console.log(arr[j]);
                console.log(arr[j+1]);
                // [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}


// Test cases
console.log(moveZeroes([0,1,0,3,12])); // => [1, 3, 12, 0, 0]
