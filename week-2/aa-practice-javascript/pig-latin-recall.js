/*
 * Pig Latin is a fun take on the English language where you move any consonant cluster from the start of the
 * word to the end of the word; when words begin on a vowel, you simply add "-yay". Vowels are "aeiou".
 *
 * Write a function pigLatinWord that takes in a word string and translates the word into Pig Latin.
 * For this problem use the String.slice() method. The slice() method extracts a section of a string and
 * returns it as a new string, without modifying the original string.
 */

function pigLatinWord(word) {
    let vowels = "aeiou";
    let firstLetter = word[0];

    if (vowels.includes(firstLetter)) {
        return word + "yay";
    }

    for (let i = 0; i < word.length; i++) {
        let letter = word[i];
        if (vowels.includes(letter)) {
            let firstPart = word.slice(i);
            let secondPart = word.slice(0, i);
            return firstPart + secondPart + "ay";
        }
    }

    return word;
}

// Test cases
console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("eat")); //=> "eatyay"
console.log(pigLatinWord("banana")); //=> "ananabay"
console.log(pigLatinWord("trash")); //=> "ashtray"
