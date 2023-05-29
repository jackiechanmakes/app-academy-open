/*
 * Write a function abbreviate(word) that takes in a string arg.
 * The function should return a new string where all of its vowels are removed.
 */

function abbreviate(word) {
    // 1. define vowels variable
    // 2. iterate through word
      // a. if constanant, add letter to final result string
      // b. if vowel, do not add to final result string

    let vowels = "aeiou";
    let result = "";
    let i = 0;
    while (i < word.length) {
        let letter = word[i];
        if (!vowels.includes(letter.toLowerCase())) {
            result += letter;
        }
        i++;
    }
    return result;
}

console.log(abbreviate('wonderful')); // 'wndrfl'
console.log(abbreviate('mystery')); // 'mystry'
console.log(abbreviate('Accordian')); // 'ccrdn'
