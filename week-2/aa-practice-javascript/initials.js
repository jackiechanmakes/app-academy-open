/*
 * Write a function initials(name) that accepts a full name as an arg.
 * The function should return the initials for that name.
 */

function initials(fullName) {
    // 0. Define variable result which is a string holding initials
    // 1. Split name by separator ' '
    // 2. Iterate through each element of array and add first character to result
    // 3. Return initials

    let result = "";
    let names = fullName.split(' ');

    for (let i = 0; i < names.length; i++) {
        let name = names[i];
        let initial = name[0].toUpperCase();
        result += initial;
    }

    return result;
}

// Test cases
console.log(initials('anna paschall')); // 'AP'
console.log(initials('Mary La Grange')); // 'MLG'
console.log(initials('brian crawford scott')); // 'BCS'
console.log(initials('Benicio Monserrate Rafael del Toro Sánchez')); // 'BMRDTS'
