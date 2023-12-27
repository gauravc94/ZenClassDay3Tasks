// Return median of two sorted arrays of the same size

// We take example input arrays both of which are shorted
const numbers1 = [10, 30, 50];
const numbers2 = [20, 40, 60];

// Using an Anonymous Function
const median = function (arr1, arr2) {

    // Merge the two arrays and sort the merged array in ascending order
    const mergedArray = [...arr1, ...arr2].sort(function(a, b){return a - b});
  
    // Find the middle index of the sorted merged array
    const middleIndex = Math.floor(mergedArray.length / 2);
  
    // Check if the length of the merged array is even or odd
    if (mergedArray.length % 2 === 0) {

      // If even, return the average of the two middle elements
      return (mergedArray[middleIndex - 1] + mergedArray[middleIndex]) / 2;
    } else {

      // If odd, return the middle element
      return mergedArray[middleIndex];
    }
  }
  
console.log(median(numbers1,numbers2));


// Using an IIFE
(function(arr1, arr2) {

  // Merge the two arrays and sort the merged array in ascending order
  const mergedArray = [...arr1, ...arr2].sort(function(a, b){return a - b});

  // Find the middle index of the sorted merged array
  const middleIndex = Math.floor(mergedArray.length / 2);

  // Check if the length of the merged array is even or odd
  if (mergedArray.length % 2 === 0) {

    // If even, return the average of the two middle elements
    console.log ((mergedArray[middleIndex - 1] + mergedArray[middleIndex]) / 2);
  } else {

    // If odd, return the middle element
    console.log(mergedArray[middleIndex]);
  }
})(numbers1,numbers2);
