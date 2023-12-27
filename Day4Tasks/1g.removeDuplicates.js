// Remove duplicates from an array

// We take an example array of numbers which has a few duplicates
const numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];

// Using an Anonymous Function
const removeDuplicates = function(arr) {
    const uniqueArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArray.includes(arr[i])) {
            uniqueArray.push(arr[i]);
        }
    }

    console.log(uniqueArray);
}

removeDuplicates(numbers);


// Using an IIFE
(function(arr) {
    const uniqueArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArray.includes(arr[i])) {
            uniqueArray.push(arr[i]);
        }
    }

    console.log(uniqueArray);
})(numbers);
