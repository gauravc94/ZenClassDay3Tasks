// Convert all the strings to title caps in a string array

// We take an example array of strings
const stringArray = ["apple", "banana", "orange", "grape"];

// Using an anonymous function
const titleCapsString = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        const titleCaps = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        console.log(titleCaps);
    }
}

titleCapsString(stringArray);


// Using an IIFE
(function(arr) {
    for (let i = 0; i < arr.length; i++) {
        const titleCaps = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        console.log(titleCaps);
    }
})(stringArray);
