/*
 * Write a function hipsterfy(sentence) that takes in a sentence string and
 * returns the sentence where every word is missing its last vowel.
 */

function hipsterfy(sentence) {
    // 1. Split sentence into words
    // 2. Iterate words. For each word, find last vowel and get new word with last
    //    vowel removed.
    // 3. Add new word to result array.
    // 4. Return result array joined as a sentence with a separator, " "

    let words = sentence.split(" ");
    let result = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let newWord = getWordLastVowelRemoved(word);
        result.push(newWord);
    }

    return result.join(" ");
}

function getWordLastVowelRemoved(word) {
    let vowels = "aeiou";

    for (let i = word.length - 1; 0 <= i; i--) {
        let letter = word[i];
        if (vowels.includes(letter.toLowerCase())) {
            return word.slice(0, i) + word.slice(i + 1);
        }
    }

    return word;
}

// Test cases
console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'
