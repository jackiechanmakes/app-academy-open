/*
 * Write a function removeEWords(sentence) that accepts a sentence string as an arg.
 * The function should return a new string, containing only the words that don't
 * have the letter "e" in them.
 */

let removeEWords = function(sentence) {
    // 1. Split the string by space separator into a new array of words
    // 2. Iterate words array
    // 3. Check if word has the letter e/E in it
    // 4. If it does not, then we add it to a new string being mindful of spaces

    let words = sentence.split(" ");
    let result = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (!word.toLowerCase().includes('e')) {
            result.push(word);
        }
    }

    return result.join(" ");
};

// Test cases
console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'
