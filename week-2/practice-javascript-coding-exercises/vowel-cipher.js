/*
 * Write a function vowelCipher that takes in a string and returns a new string
 * where every vowel becomes the next vowel in the alphabet.
 */

function vowelCipher(str) {
    // 1. Define vowels in alphabetical order variable and new string
    // 2. Iterate through string.
        // a. Find a vowel in original string. Shift to next vowel
        //    and add to new string.
        // b. If consonant, ignore.
    // 3. Return new string

    let vowels = "aeiou";
    let result = "";

    for (let i = 0; i < str.length; i++) {
        let character = str[i];
        if (vowels.includes(character)) {
            // Case: character is a vowel
            let oldIndex = vowels.indexOf(character);
            let newIndex = oldIndex + 1;
            let newCharacter = vowels[newIndex % vowels.length];
            result += newCharacter;
        } else {
            // Case: character is a consonant
            result += character;
        }
    }
    return result;
}


// Test cases
console.log(vowelCipher("bootcamp")); // "buutcemp"
console.log(vowelCipher("paper cup")); // "pepir ca
