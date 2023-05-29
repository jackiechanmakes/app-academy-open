/*
 * Write a function that outputs the unique pairs in an array.
 */

function getUniquePairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        let pair1 = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            let pair2 = arr[j];
            console.log(pair1, pair2);
        }
    }
}

// Test cases
getUniquePairs(["belka", "strelka", "laika", "dezik"]);

// belka strelka
// belka laika
// belka dezik
// strelka laika
// strelka dezik
// laika dezik
