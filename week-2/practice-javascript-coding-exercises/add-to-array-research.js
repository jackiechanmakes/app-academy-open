/*
 * Write a function that takes a location, either "FRONT" or "BACK" and adds an
 * element to either the front or back of the given array. If location is anything
 * besides "FRONT" or "BACK", print an error. Your function should not return anything
 * and should mutate the original array.
 */

function addToArray(location, char, arr) {
    if (location === "FRONT") {
        arr.unshift(char);
    } else if (location === "BACK") {
        arr.push(char);
    } else {
        console.log("ERROR: location entered is not valid");
    }
}

// Test cases
testArray = [1,2,3]

addToArray("FRONT", 0, testArray)
console.log(testArray) // [0,1,2,3]

addToArray("BACK", 4, testArray)
console.log(testArray) // [0,1,2,3,4]

addToArray("MIDDLE", 4, testArray) // "ERROR"
console.log(testArray) // [0,1,2,3,4]
