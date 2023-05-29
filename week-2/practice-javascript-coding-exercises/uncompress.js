/*
 * Write a function uncompress(str) that takes in a "compressed" string as an arg.
 * A compressed string consists of a character immediately followed by the number
 * of times it appears in the "uncompressed" form. The function should return the
 * uncompressed version of the string.
 */

function uncompress(str) {
    // 0. Define numbers variable
    // 1. Iterate string
        // a. Find a number. Add the letter that precedes the number as many times
        //    as the number.

    let numbers = "123456789"
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let character = str[i];
        if (numbers.includes(character)) {
            for (let j = 0; j < Number(character); j++) {
                result += str[i-1];
            }
        }
    }
    return result;
}

// Test cases
console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
console.log(uncompress('b1o2t1')); // 'boot'
