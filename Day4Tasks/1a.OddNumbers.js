// Print odd numbers in an array

// We take an example array of numbers 1 to 9
const numbers = [1,2,3,4,5,6,7,8,9];

// using an Anonymous function
const printTheOdds = function(arr){ 
    for(let i of arr){
        if(i%2 !==0){
            console.log(i);
        }
    }
}
printTheOdds(numbers);


// Using an IIFE
(function(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
})(numbers);
