/*
 * Write a function mostVowels that takes in a sentence string and returns
 * the word of the sentence that contains the most vowels.
 */

let mostVowels = function(sentence) {
    // 1. Iterate sentence by word
    // 2. Check number of vowels for word
    // 3. Keep track of index of word with greatest number of vowels and return word

    let words = sentence.split(" ");
    let indexLargestWord = 0;

    for (let i = 0; i < words.length; i++) {
        let wordNumVowels = getVowelCount(words[i]);
        let largestWordNumVowels = getVowelCount(words[indexLargestWord]);
        if (largestWordNumVowels < wordNumVowels) {
            indexLargestWord = i;
        }
    }

    return words[indexLargestWord];
};

let getVowelCount = function(word) {
    let count = 0;
    let vowels = "aeiou";

    for (let i = 0; i < word.length; i++) {
        let letter = word[i];
        if (vowels.includes(letter)) {
            count++;
        }
    }

    return count;
};

// Test cases
console.log(mostVowels("what a wonderful life")); // "wonderful"
console.log(mostVowels("aaa a aaaa oooooo")); // "oooooo"
console.log(mostVowels("aaa aaaaaaa wonderful")); // "aaaaaaa"
