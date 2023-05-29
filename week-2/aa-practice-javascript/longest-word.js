/*
 * Write a function longestWord(sentence) that takes in a sentence string as
 * an argument. The function should return the longest word in the sentence.
 * If there is more than one "longest word", return the first of these instances.
 */

function longestWord(sentence) {
    // 1. Split sentence by separator, " ", into an array of words.
    // 2. Iterate each word of array.
          // a. Get number of letters in word.
          // b. Check if number of letters of word is greater than current longest word
                // i. If so, set word as new longest word.
    // 3. Return longest word after entire loop

    let words = sentence.split(" ");
    let longestWord = "";

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (longestWord.length < word.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

// Test cases
console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''
