/*
 * Write a function reverb that accepts a word as an argument.
 * The function should return a new word where all letters that come after the
 * last vowel (including the vowel itself) are repeated at the end of the word.
 * If the value passed in is not a string, say someone passes in a number as an
 * argument, then return null.
 */

let reverb = function(word) {
    // 0. If argument is not string, return null.
    // 1. Define variable of new word
    // 2. Find index of last vowel
    // 3. Add characters from beginning of word and up to last vowel
    //    index to new word
    // 4. Add chars from last vowel index to index of end of word twice

    if (typeof word !== "string") {
        return null;
    }

    let result = word;
    let indexLastVowel = getLastVowelIndex(word);

    if (indexLastVowel !== -1) {
        result += word.slice(indexLastVowel);
    }

    return result;
};

let getLastVowelIndex = function(word) {
    let vowels = "aeiou";

    for (let i = word.length - 1; 0 <= i; i--) {
        let letter = word[i];
        if (vowels.includes(letter.toLowerCase())) {
            return i;
        }
    }

    return -1;
};

// Test cases
console.log(reverb('running')); // runninging
console.log(reverb('FAMILY'));  // FAMILYILY
console.log(reverb('trash'));   // trashash
console.log(reverb('DISH'));    // DISHISH
console.log(reverb(197393));    // null
