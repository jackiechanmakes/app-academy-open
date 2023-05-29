/*
 * Write a function rotate(array, num) that takes in an array and a number as args.
 * When the num is positive, the elements of the array should be rotated to the right.
 * When the num is negative, the elements of the array should be rotated to the left.
 * The function should mutate the original array.
 *
 * Define this function using function expression syntax.
 */

let rotate = function(array, num) {
    let numIterations = Math.abs(num);
    let removedElement;

    let i = 0;
    while (i < numIterations) {
        if (num < 0) {
            removedElement = array.shift();
            array.push(removedElement);
        } else if (0 < num) {
            removedElement = array.pop();
            array.unshift(removedElement);
        }

        i++;
    }
};

// Test cases
let arr = ['a', 'b', 'c', 'd', 'e'];
rotate(arr, 2);
console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
rotate(animals, -1);
console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
