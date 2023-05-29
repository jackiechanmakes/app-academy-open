/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/

let hasThreeVowels = function(string) {
    let vowels = "aeiou";
    let numVowelTypes = 0;
    let letters = string.split('');
    letters.forEach(function(letter) {
        let index = vowels.indexOf(letter);
        if (index !== -1) {
            vowels = vowels.slice(0, index) + vowels.slice(index + 1);
            numVowelTypes++;
        }
    });

    return 3 <= numVowelTypes;
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
