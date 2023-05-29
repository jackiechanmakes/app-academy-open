/*
 * Write a function sameCharCollapse that takes in a string and returns a
 * collapsed version of the string. To collapse the string, we repeatedly delete
 * 2 adjacent characters that are the same until there are no such adjacent characters.
 * If there are multiple pairs that can be collapsed, delete the leftmost pair.
 * For example, we take the following steps to collapse
 * "zzzxaaxy": zzzxaaxy -> zxaaxy -> zxxy -> zy
 */

function sameCharCollapse(str) {
    // 1. Loop with the condition of if str has adjacent duplicate letters (helper function)
    // 2. If it does, then find first pair of duplicates and return that word
    //    removing that pair (helper function)
    // 3. return result

    let reducible = true;

    while (reducible) {
        let letters = str.split("");
        reducible = false;

        for (let i = 0; i < letters.length - 1; i++) {
            let firstChar = letters[i];
            let secondChar = letters[i + 1];
            if (firstChar === secondChar) {
                letters[i] = "";
                letters[i + 1] = "";
                reducible = true;
            }
        }

        str = letters.join("");
    }

    return str;
}


// Test cases
console.log(sameCharCollapse("zzzxaaxy"));  // "zy"
// because zzzxaaxy -> zxaaxy -> zxxy -> zy
console.log(sameCharCollapse("uqrssrqvtt")); // "uv"
// because uqrssrqvtt -> uqrrqvtt -> uqqvtt -> uvtt -> uv
