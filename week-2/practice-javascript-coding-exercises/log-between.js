/*
 * Define a function logBetween(lowNum, highNum) that will print
 * every number from lowNum to highNum, inclusive. Inclusive means
 * that the range includes lowNum and highNum.
 */

function logBetween(lowNum, highNum) {
    for (let i = lowNum; i <= highNum; i++) {
        console.log(i);
    }
}

logBetween(-1, 2);
logBetween(14, 6);
logBetween(4, 6);
