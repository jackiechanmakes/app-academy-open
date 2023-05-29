/*
 * Pascal's triangle is a 2-dimensional array with the shape of a pyramid.
 * The top of the pyramid is the number 1. To generate further levels of the pyramid,
 * every element is the sum of the element above and to the left with the element
 * above and to the right. Non-existing elements are treated as 0 when calculating
 * the sum.
 *
 * Write a function pascalsTriangle that accepts a positive number, n, as an argument
 * and returns a 2-dimensional array representing the first n levels of Pascal's
 * triangle. See the file for examples.
 */

// For example, here are the first 5 levels of Pascal's triangle:
//       1
//      1 1
//     1 2 1
//    1 3 3 1
//   1 4 6 4 1

function pascalsTriangle(height) {
    // 1. Set level 1 as [1]
    // 2. Set first element as 1, set last element as 1 and set anything in between as sum of array of last level
    let triangle = [[1]];

    while (triangle.length < height) {
        let lastLevel = triangle[triangle.length - 1];
        let nextLevel = [1];

        for (let i = 0; i < lastLevel.length - 1; i++) {
            nextLevel.push(lastLevel[i] + lastLevel[i + 1]);
        }

        nextLevel.push(1);
        triangle.push(nextLevel);
    }

    return triangle;
}

// Test cases
console.log(pascalsTriangle(5));
// [
//     [1],
//     [1, 1],
//     [1, 2, 1],
//     [1, 3, 3, 1],
//     [1, 4, 6, 4, 1]
// ]

console.log(pascalsTriangle(7));
// [
//     [1],
//     [1, 1],
//     [1, 2, 1],
//     [1, 3, 3, 1],
//     [1, 4, 6, 4, 1],
//     [1, 5, 10, 10, 5, 1],
//     [1, 6, 15, 20, 15, 6, 1]
// ]
