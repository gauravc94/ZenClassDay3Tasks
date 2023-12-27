// Return all the Palindromes in an array

// We take an example array of strings, a mix of palindromes and non-palindromes
const words = ["Malayalam", "radar", "apple", "orange", "level", "lemon"];

// Using an Arrow function
((arr)=>{
    const palindromeCollection = [];

    for (let i = 0; i < arr.length; i++) {
        const word = arr[i].toLowerCase(); // Convert to lowercase for case-insensitivity
        const reversedWord = word.split('').reverse().join('');

        if (word === reversedWord) {
            palindromeCollection.push(word);
        }
    }

    console.log(palindromeCollection);
})(words);
