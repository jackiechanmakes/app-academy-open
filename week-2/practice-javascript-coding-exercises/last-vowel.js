/*
 * Write a function lastVowel(str) that takes in a string and returns the last
 * vowel that appears sequentially in the string. Note that the string may contain
 * capitalization.
 */

let lastVowel = function(str) {
    let vowels = "aeiou";

    for (let i = str.length - 1; 0 <= i; i--) {
        let letter = str[i];
        let letterLower = letter.toLowerCase();
        if (vowels.includes(letterLower)) {
            return letter;
        }
    }

    return null;
};

// Test cases
console.log(lastVowel('battery')); // 'e'
console.log(lastVowel('TUNNEL')); // 'E'
console.log(lastVowel('dog')); // 'o'
console.log(lastVowel('conventional')); // 'a'
console.log(lastVowel('rhythm')); // null
