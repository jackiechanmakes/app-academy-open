/*
 * Write a function hasVowel(str) that takes in a string. The function
 * should return a boolean, true if the string contains at least one vowel,
 * false otherwise.
 * Vowels are the letters a, e, i, o, u.
 */

function hasVowel(str) {
    let vowels = "aeiou";
    let i = 0;
    while (i < str.length) {
        letter = str[i];
        if (vowels.includes(letter)) {
            return true;
        }
        i++;
    }
    return false;
}

console.log(hasVowel('dog')); // true
console.log(hasVowel('conventional')); // true
console.log(hasVowel('rhythm')); // false
