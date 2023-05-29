/*
 * Write a function uncompress(str) that takes in a "compressed" string as an arg.
 * A compressed string consists of a character immediately followed by the number of times it appears in the
 * "uncompressed" form. The function should return the uncompressed version of the string.
 */

function uncompress(str) {
    let uncompressedStr = "";

    let i = 0;
    while (i < str.length - 1) {
        let letter = str[i];
        let numRepeats = str[i + 1];

        for (let j = 0; j < numRepeats; j++) {
            uncompressedStr += letter;
        }

        i += 2;
    }

    return uncompressedStr;
}

// Test cases
console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
console.log(uncompress('b1o2t1')); // 'boot'
