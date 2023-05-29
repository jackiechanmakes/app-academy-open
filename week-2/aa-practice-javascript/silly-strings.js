/*
 * Write a function sillyString that accepts a word as an argument. The functions
 * should return a new word where every vowel of the original word is followed by
 * 'b' and that same vowel. For example, 'siren' would turn into 'sibireben'.
 */

function sillyString(word) {
    // 1. Define vowels variable
    // 2. Iterate through original word
        // a. If consonant, add to new word
        // b. If vowel, add vowel to new word along with 'b' followed by a
        //    repeat of that vowel.

    let vowels = "aeiou";
    let result = "";
    let i = 0;
    while (i < word.length) {
        let letter = word[i];
        if (vowels.includes(letter)) {
            result += letter + 'b' + letter;
        } else {
            result += letter;
        }
        i++;
    }
    return result;
}

// Test cases
console.log(sillyString('stop'));       // stobop
console.log(sillyString('that'));       // thabat
console.log(sillyString('can'));        // caban
console.log(sillyString('cats'));       // cabats
console.log(sillyString('italy'));      // ibitabaly
console.log(sillyString('scooter'));    // scobooboteber
