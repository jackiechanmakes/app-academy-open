/*
 * Write a function maxColumn(matrix) that takes in a 2-dimensional array (matrix)
 * and returns an array containing the maximum value in each column.
 * The array length should be equal to the number of columns, such that returnArray[i]
 * is equal to the max value in the ith column.
 */

function maxColumn(matrix) {
    // 1. Nested loop where the outer loop is on the column and the inner loop
    //    is on the row.
    // 2. If row is 0, set the max of the column to that element. Compare that max
    //    with the values in other rows, same column. If element is bigger, set
    //    that value to column max.
    // 3. After checking all rows within a column, add max to the result array

    let result = [];
    let width = matrix[0].length;
    let height = matrix.length;

    for (let col = 0; col < width; col++) {
        let colMax = matrix[0][col];

        for (let row = 0; row < height; row++) {
            let num = matrix[row][col];
            if (colMax < num) {
                colMax = num;
            }
        }

        result.push(colMax);
    }

    return result;
}

// Test cases
matrix = [[ 5,  9, 21],
          [ 9, 19,  6],
          [12, 14, 15]]

console.log(maxColumn(matrix)); // [12, 19, 21]
