/* Write a function zanyZip that accepts two arrays as arguments.
 * The function should return a two dimensional array with subarrays of length 2
 * that contain elements at corresponding indices from the input arrays.
 * If one of the arrays is shorter than the other, then substitute null for the
 * missing elements.
 */

function zanyZip(arr1, arr2) {
    // 1. Determine which array has a longer length and work with that length
    // 2. Loop length number of times
    // 3. If array element is undefned, push null. Otherwise, push the value

    let length;
    let result = [];

    for (let i = 0; i < arr1.length || i < arr2.length; i++) {
        let element1 = arr1[i];
        let element2 = arr2[i];

        if (element1 === undefined) {
            element1 = null;
        }

        if (element2 === undefined) {
            element2 = null;
        }

        result.push([element1, element2]);
    }

    return result;
}

// Test cases
console.log(zanyZip([1, 2], ['eins', 'zwei', 'drei', 'vier']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ null, 'drei' ], [ null, 'vier' ] ]

console.log(zanyZip([1, 2, 3, 4], ['eins', 'zwei', 'drei']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, null ] ]

console.log(zanyZip(['alef', 'bet'], ['alpha', 'beta']));
// [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]
