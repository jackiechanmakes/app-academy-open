/*
 * Write a function hasThreeVowels that accepts a string as an argument.
 * The function should return a boolean indicating whether or not the string
 * contains at least three different vowels.
 */

function hasThreeVowels(str) {
    // 1. Define a vowels variable and a variable to track of vowels in word
    // 2. Iterate through string
        // a. If consonant, ignore.
        // b. If vowel, check if vowel has shown up before in word. If not, add
        //    vowel to variable.
    // 3. Check if variable has 3 vowels or more.

    let vowels = "aeiou";
    let vowelsInWord = "";

    for (let i = 0; i < str.length; i++) {
        let letter = str[i];
        if (vowels.includes(letter) && !vowelsInWord.includes(letter)) {
            vowelsInWord += letter;
        }
    }
    return vowelsInWord.length >= 3;
}

// Test cases
console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false
