/*
 * Write a function hipsterfy(sentence) that takes in a sentence string and returns the sentence where every
 * word is missing its last vowel.
 */

function hipsterfy(sentence) {
    let sentenceArray = sentence.split(" ");

    for (let i = 0; i < sentenceArray.length; i++) {
        let word = sentenceArray[i];
        let hipsterfyWord = gethipsterfyWord(word);
        sentenceArray[i] = hipsterfyWord;
    }

    let hipsterfySentence = sentenceArray.join(" ");
    return hipsterfySentence;
}

function gethipsterfyWord(word) {
    let vowels = "aeiou";

    for (let i = word.length - 1; 0 <= i; i--) {
        let letter = word[i];
        if (vowels.includes(letter)) {
            let firstPart = word.slice(0, i);
            let secondPart = word.slice(i + 1);
            let wordWithoutLastVowel = firstPart + secondPart;
            return wordWithoutLastVowel;
        }
    }

    return word;
}

// Test cases
console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'
