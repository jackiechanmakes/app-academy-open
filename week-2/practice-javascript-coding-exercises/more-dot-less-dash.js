/*
 * Write a function moreDotLessDash that accepts a string as an argument.
 * The function should return a boolean indicating whether or not the string
 * contains more dots (.) than dashes (-).
 */

function moreDotLessDash(str) {
    // 1. Define dashCount and dotCount variables
    // 2. Iterate through string
        // a. If character is a dash, add to dashCount
        // b. If character is a dot, add to dotCount
    // 3. Compare whether dashCounter or dotCounter is greater

    let dashCount = 0;
    let dotCount = 0;

    for (let i = 0; i < str.length; i++) {
        let character = str[i];
        if (character === '.') {
            dotCount++;
        }
        if (character === '-') {
            dashCount++;
        }
    }
    return dotCount > dashCount;
}

// Test cases
console.log(moreDotLessDash('2-D arrays are fun. I think.'));           // true
console.log(moreDotLessDash('Morse code is great.'));                   // true
console.log(moreDotLessDash('.... . -.--'));                            // true
console.log(moreDotLessDash('.--. .-. --- --. .-. .- -- -- . .-.'));    // false
console.log(moreDotLessDash('high-flying acrobat.'));                   // false
