/*
 * Write a function maxValue(nums) that takes in an array of numbers as an arg.
 * The function should return the largest number of the array. If the array is empty,
 * the function should return null.
 */

let maxValue = function(nums) {
    let max = null;

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (max === null || max < num) {
            max = num;
        }
    }

    return max;
};

// Test cases
console.log(maxValue([4, 6, 3, 5, 42, 4])); // 42
console.log(maxValue([-2, -3, -7, 3 ])); // 3
console.log(maxValue([])); // null
