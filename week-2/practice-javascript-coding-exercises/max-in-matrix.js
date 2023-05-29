/*
 * Write a function maxInMatrix(matrix) that takes in a 2-dimensional array (matrix)
 * and returns the largest value in the matrix. The matrix contains at least one value.
 */

function maxInMatrix(matrix) {
    let max;

    for (let i = 0; i < matrix.length; i++) {
        let subArray = matrix[i];

        for (let j = 0; j < subArray.length; j++) {
            let num = subArray[j];

            if ((i === 0 && j === 0) || max < num) {
                max = num;
            }
        }
    }

    return max;
}

// Test cases
matrix = [[11,  2,-99],
          [20, 19, 10],
          [47, 72, 56]]

console.log(maxInMatrix(matrix)); // 72
