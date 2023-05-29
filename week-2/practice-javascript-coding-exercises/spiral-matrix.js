/*
 * Write a function spiralOrder(matrix) that takes in a 2-dimensional array (matrix)
 * and returns an array containing the elements in spiral order.
 */

function spiralOrder(matrix) {
    // 1. Iterate entire first row
    // 2. Iterate the remaining last column
    // 3. Iterate the remaining last row in reverse
    // 4. Iterate the remaining first column in reverse but not touching the first row
    // 5. Continue this pattern while not touching the elements that we've already added

    let result = [];
    let height = matrix.length;
    let width = matrix[0].length;
    let direction = 0;
    let top = 0;
    let bottom = height - 1;
    let left = 0;
    let right = width - 1;

    while (top <= bottom && left <= right) {
        if (direction === 0) { // moving left to right
            for (let i = left; i <= right; i++) {
                let element = matrix[top][i];
                result.push(element);
            }
            top++;
            direction = 1;
        } else if (direction === 1) { // moving top to bottom
            for (let i = top; i <= bottom; i++) {
                let element = matrix[i][right];
                result.push(element);
            }
            right--;
            direction = 2;
        } else if (direction === 2) { // moving right to left
            for (let i = right; left <= i; i--) {
                let element = matrix[bottom][i];
                result.push(element);
            }
            bottom--;
            direction = 3;
        } else if (direction === 3) { // moving bottom to top
            for (let i = bottom; top <= i; i--) {
                let element = matrix[i][left];
                result.push(element);
            }
            left++;
            direction = 0;
        }
    }

    return result;
}

// Test cases
matrix = [[ 1, 2, 3],
          [ 4, 5, 6],
          [ 7, 8, 9]]

console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

matrix = [[6, 2, 6],
          [3, 7, 8]]

console.log(spiralOrder(matrix)); // [6,2,6,8,7,3]

matrix = [[1,2,3,4],
          [5,6,7,8],
          [9,10,11,12]]

console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]

matrix = [[1,2,3,4],
          [5,6,7,8],
          [9,10,11,12],
          [13, 14, 15, 16]]

console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]

matrix = [[1, 2, 3, 4, 5, 6],
          [7, 8, 9, 10, 11, 12],
          [13, 14, 15, 16, 17, 18]]

console.log(spiralOrder(matrix)); // [1,2,3,4,5,6,12,18,17,16,15,14,13,7,8,9,10,11]

matrix = [[1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
          [10, 11, 12],
          [13, 14, 15],
          [16, 17, 18]]

console.log(spiralOrder(matrix)); // [1,2,3,6,9,12,15,18,17,16,13,10,7,4,5,8,11,14]

matrix = [[1, 2, 3, 4, 5],
          [6, 7, 8, 9, 10],
          [11, 12, 13, 14, 15],
          [16, 17, 18, 19, 20],
          [21, 22, 23, 24, 25],
          [26, 27, 28, 29, 30]]

console.log(spiralOrder(matrix)); // [1,2,3,4,5,10,15,20,25,30,29,28,27,26,21,16,11,6,7,8,9,14,19,24,23,22,17,12,13,18]
