/*
 * Write a function named wordWithinArray(array,word) using Array.indexOf.
 * The function takes in both a word and an array of words as arguments and returns
 * a boolean that returns true if that string is located inside of the array, or
 * false if it does not.
 */

function wordWithinArray(array, word) {
    let wordIndex = array.indexOf(word);
    if (wordIndex >= 0) {
        return true;
    }
    return false;
}

// Test cases
console.log(
    wordWithinArray(["apple", "banana", "caramel", "chocolate"], "apple")
  ); //=> true

  console.log(wordWithinArray(
    ["dog", "cat", "camel", "bird"], "camel")
  ); //=> true

  console.log(
    wordWithinArray(["apple", "banana", "caramel", "chocolate"], "pineapple")
  ); //=> false

  console.log(wordWithinArray(
    ["dog", "cat", "camel", "bird"], "panther")
  ); //=> false
