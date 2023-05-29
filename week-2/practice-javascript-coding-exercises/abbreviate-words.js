/*
 * Write a function abbreviateWords(sentence) that takes in a sentence string.
 * The function should return a new sentence where words that are longer than 4
 * characters have their vowels removed. Hint: Consider creating a helper function
 * to remove all vowels in a string.
 */

function abbreviateWords(sentence) {
    // 1. Split sentence into words
    // 2. For each word, check if word is longer than 4 characters.
    //    If so, remove vowels (helper function). Otherwise, just add word as is.
    // 3. Return joined result array

    let words = sentence.split(" ");
    let result = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (4 < word.length) {
            let wordVowelsRemoved = getWordVowelsRemoved(word);
            result.push(wordVowelsRemoved);
        } else {
            result.push(word);
        }
    }

    return result.join(" ");
}

function getWordVowelsRemoved(word) {
    let vowels = "aeiou";
    let result = "";

    for (let i = 0; i < word.length; i++) {
        let letter = word[i].toLowerCase();
        if (!vowels.includes(letter)) {
            result += letter;
        }
    }

    return result;
}

// Test cases
console.log(abbreviateWords('what a wonderful place to live')); // what a wndrfl plc to live
console.log(abbreviateWords('she sends an excellent message ')); // she snds an xcllnt mssg
