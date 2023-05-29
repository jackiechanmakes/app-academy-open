/*
 * Write a function printFives(max) that prints out the multiples of 5
 * that are less than max.
 */

function printFives(max) {
    let i = 0;
    while (i < max) {
        if (i % 5 === 0) {
            console.log(i);
        }
        i++;
    }
}

printFives(20);

// function printFives(max) {
//     for (let i = 0; i < max; i += 5) {
//         console.log(i);
//     }
// }

// function printFives(max) {
//     let i = 0;

//     while (i < max) {
//         console.log(i);
//         i += 5;
//     }
// }

// function printFives(max) {
//     for (let i = 0; i < max; i++) {
//         if (i % 5 === 0) {
//             console.log(i);
//         }
//     }
// }

// Example:

// printFives(20)
// prints out:
// 0
// 5
// 10
// 15
