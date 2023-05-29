/*
 * Write a function removeLastVowel(word) that takes in a string and returns the string with its last vowel removed.
 */

function removeLastVowel(word) {
    let vowels = "aeiou";

    for (let i = word.length -1; 0 <= i; i--) {
        let letter = word[i];
        if (vowels.includes(letter)) {
            let firstPart = word.slice(0, i);
            let secondPart = word.slice(i + 1);
            let newWord = firstPart + secondPart;
            return newWord;
        }
    }

    return word;
}

// Test cases
console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'
