/*
 * Write a function reverseSentence(sentence) that takes in a sentence as an arg.
 * The function should return a new sentence where the order of the words is reversed.
 * Note that you should reverse the order among words, not the order among characters.
 */

function reverseSentence(sentence) {
    let words = sentence.split(" ");
    let result = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        result.unshift(word);
    }

    return result.join(" ");
}

// Test cases
console.log(reverseSentence('I am pretty hungry')); // 'hungry pretty am I'
console.log(reverseSentence('follow the yellow brick road')); // 'road brick yellow the follow'
