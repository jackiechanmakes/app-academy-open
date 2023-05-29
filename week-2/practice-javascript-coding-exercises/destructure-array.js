/*
 * We have given you an array. Practice destructuring arrays by assigning variables to every value in the array
 * below all in one line of code. Check your work by console.loging each of the variables to make sure you
 * got them all.
 */

let bigArray = ["apple", 14, 32, 100, { name: "party" }, ["pineapple"]];

let [firstEl, secondEl, thirdEl, fourthEl, fifthEl, sixthEl] = bigArray;

console.log(firstEl);
console.log(secondEl);
console.log(thirdEl);
console.log(fourthEl);
console.log(fifthEl);
console.log(sixthEl);

let { name } = fifthEl;
console.log(name);

// Test case
// let [firstEl] = bigArray;
// console.log(firstEl) // prints "apple"
