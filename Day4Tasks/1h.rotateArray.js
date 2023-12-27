// Rotate an array by k times

// We take an example array of numbers 1 to 5, and shall rotate it k=1 time
const numbers = [1, 2, 3, 4, 5];

// Using an Anonymous Function
const rotateArray = function(arr, k){
    const n = arr.length;
    // Calculate the effective rotation count (in case k is greater than the array length)
    const rotationCount = k % n;

    // Perform rotation using array slicing
    const rotatedArray = arr.slice(n - rotationCount).concat(arr.slice(0, n - rotationCount));

    console.log(rotatedArray);
}
rotateArray(numbers, 1);


// Using an IIFE
(function(arr, k){
    const n = arr.length;
    // Calculate the effective rotation count (in case k is greater than the array length)
    const rotationCount = k % n;

    // Perform rotation using array slicing
    const rotatedArray = arr.slice(n - rotationCount).concat(arr.slice(0, n - rotationCount));

    console.log(rotatedArray);
})(numbers, 1);
