// Return all the prime numbers in an array

// We take an example array of numbers from 1 to 15
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// Using an Arrow Function
((arr) => {
    arr.forEach(number => {
        let isPrime = true;

        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime && number > 1) {
            console.log(number);
        }
    });
})(numbers);
