/*
 * Write a function removeLastVowel(word) that takes in a string and returns
 * the string with its last vowel removed.
 */

let removeLastVowel = function(word) {
    // 1. Find the index of the last vowel
    // 2. Return new word by adding characters from 0 up to last vowel index and
    //    from last vowel index + 1 until the end. Otherwise, just return
    //    original word.

    let vowels = "aeiou";

    for (let i = word.length - 1; 0 <= i; i--) {
        let letter = word[i];
        if (vowels.includes(letter.toLowerCase())) {
            let firstPart = word.slice(0, i);
            let secondPart = word.slice(i + 1);
            return firstPart + secondPart;
        }
    }

    return word;
};

// Test cases
console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'
