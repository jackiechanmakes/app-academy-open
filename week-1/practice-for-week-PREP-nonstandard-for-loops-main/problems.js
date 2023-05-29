function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    let result = new Array();
    for (let i = 1; i < arr.length; i+=2) {
        result.push(arr[i]);
    }
    return result;
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    let result = new Array();

    for (let i = arr.length - 1; i > 0; i--) {
        if (i % 2 === 1) {
            result.push(arr[i]);
        }
    }
    return result;
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    let result = new Array();
    for (let i = 1; i < arr.length; i*=2) {
        result.push(arr[i]);
    }
    return result;
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    let result = new Array();
    for (let i = 1; i < arr.length; i*=n) {
        result.push(arr[i]);
    }
    return result;
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    let middle = Math.ceil(arr.length / 2);
    let result = arr.splice(0, middle);
    return result;
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    let middle = Math.ceil(arr.length / 2);
    let result = arr.splice(middle);
    return result;
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
