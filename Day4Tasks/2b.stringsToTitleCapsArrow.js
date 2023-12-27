// Convert all the strings to title caps in a string array using an Arrow Function

// We take an example array of strings
const stringArray = ["apple", "banana", "orange", "grape"];

// Using an arrow function
((arr)=>{
    for (let i = 0; i < arr.length; i++) {
        const titleCaps = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        console.log(titleCaps);
    }
})(stringArray);
