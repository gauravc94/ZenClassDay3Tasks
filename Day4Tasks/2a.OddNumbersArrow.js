// Print odd numbers in an array using an Arrow Function

// We take an example array of numbers 1 to 9
const numbers = [1,2,3,4,5,6,7,8,9];

// Using an arrow function
((arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
})(numbers);
