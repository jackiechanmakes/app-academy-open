/*
 * Write a function consonantCancel that takes in a sentence and returns a new
 * sentence where every word begins with its first vowel.
 */

function consonantCancel(sentence) {
    let words = sentence.split(" ");
    let result = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let newWord = getNewWord(word);
        result.push(newWord);
    }

    return result.join(" ");
}

function getNewWord(word) {
    let vowels = "aeiou";

    for (let i = 0; i < word.length; i++) {
        let letter = word[i];
        if (vowels.includes(letter.toLowerCase())) {
            return word.slice(i);
        }
    }

    return word;
}

// Test cases
console.log(consonantCancel("down the rabbit hole")); // "own e abbit ole"
console.log(consonantCancel("writing code is challenging")); // "iting ode is allenging"
