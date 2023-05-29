/*
 * Write a function longWords(words) that takes in an array of words.
 * The function should return an array containing only the words that
 * are longer than 5 characters.
 */

function longWords(words) {
    let result = [];

    let i = 0;
    while (i < words.length) {
        let word = words[i];
        if (word.length > 5) {
            result.push(word);
        }
        i++;
    }

    return result;
}

// Test cases
console.log(longWords(['bike', 'skateboard','scooter', 'moped'])); // [ 'skateboard', 'scooter' ]
console.log(longWords(['couscous', 'soup', 'ceviche', 'solyanka' ,'taco'])); // [ 'couscous', 'ceviche', 'solyanka' ]
