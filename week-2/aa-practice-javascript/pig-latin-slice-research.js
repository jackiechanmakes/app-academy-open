/*
 * Pig Latin is a fun take on the English language where you move any
 * consonant cluster from the start of the word to the end of the word;
 * when words begin on a vowel, you simply add "-yay". Vowels are "aeiou".
 *
 * Write a function pigLatinWord that takes in a word string and
 * translates the word into Pig Latin. For this problem use the
 * String.slice() method. The slice() method extracts a section of a
 * string and returns it as a new string, without modifying the original
 * string.
 */

function pigLatinWord(word) {
    let vowels = "aeiou";

    // Case: words start with a vowel
    if (vowels.includes(word[0])) {
        return word + "yay";
    }

    // Case: words start with a consonant cluster and have at least one vowel
    let i = 0;
    while (i < word.length) {
        if (vowels.includes(word[i])) {
            let firstPart = word.slice(i);
            let secondPart = word.slice(0, i);
            return firstPart + secondPart + "ay";
        }
        i++;
    }

    // Case: words with no vowels
    return word;
}

// Test cases
console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("eat")); //=> "eatyay"
console.log(pigLatinWord("banana")); //=> "ananabay"
console.log(pigLatinWord("trash")); //=> "ashtray"
