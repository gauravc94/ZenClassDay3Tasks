// Sum of all the numbers in an array using an Arrow Function

// We take an example array of numbers 1 to 9
const numbers = [1,2,3,4,5,6,7,8,9];

// Using an anonymous Arrow function
((arr)=>{
    let sum = 0;
    for(let i of arr){
        sum+=i;
    }
    console.log(sum);
})(numbers);
