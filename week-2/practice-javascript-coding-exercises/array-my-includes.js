/*
 * Write a function myIncludes(arr, target) that accepts an array and a target
 * value as args. The function should return a boolean indicating whether the
 * target is found in the array. Solve this without Array.includes or Array.indexOf.
 */

function myIncludes(arr, target) {
    let i = 0;
    while (i < arr.length) {
        let element = arr[i];
        if (element === target) {
            return true;
        }
        i++;
    }
    return false;
}


// Test cases
console.log(myIncludes(['a', 'b', 'c', 'e'], 'c')); // true
console.log(myIncludes(['a', 'b', 'c', 'e'], 'a')); // true
console.log(myIncludes(['a', 'b', 'c', 'e'], 'z')); // false
console.log(myIncludes([43, -7, 11, 13], 11)); // true
console.log(myIncludes([43, -7, 11, 13], 1)); // false
