/*
 * Write a function luckyNumbers(matrix) that takes in a 2-dimensional array (matrix)
 * and returns all lucky numbers in any order. A lucky number is the minimum element
 * in its row and the maximum in its column.
 */

function luckyNumbers(matrix) {
    // 1. Nested loop to loop through every single element of matrix (i, j)
    // 2. For every element, we need to loop through each of its row (i)
    //    and each of its column (j) checking if it's the min element of row
    //    and max element of column each time
    // 3. If it is, add to result array and then return result array.

    let width = matrix[0].length;
    let height = matrix.length;
    let result = [];

    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            let num = matrix[row][col];

            // Find min element of row
            let minRow = Infinity;
            for (let subCol = 0; subCol < width; subCol++) {
                let subNum = matrix[row][subCol];
                if (subNum < minRow) {
                    minRow = subNum;
                }
            }

            // Find max element of column
            let maxCol = -Infinity;
            for (let subRow = 0; subRow < height; subRow++) {
                let subNum = matrix[subRow][col];
                if (maxCol < subNum) {
                    maxCol = subNum;
                }
            }

            if (num === minRow && num === maxCol) {
                result.push(num);
            }
        }
    }

    return result;
}

// Test cases
matrix = [[ 5,  9, 21],
          [ 9, 19,  6],
          [12, 14, 15]]

console.log(luckyNumbers(matrix)); // [12]

matrix = [[ 5, 10,  8,  6],
          [10,  2,  7,  9],
          [21, 15, 19, 10]]

console.log(luckyNumbers(matrix)); // [10]
