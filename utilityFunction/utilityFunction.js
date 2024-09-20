// Utility Functions in JavaScript
// ------------------------------------

// What is a Utility Function?
// A utility function is a reusable piece of code designed to perform a specific task.
// Utility functions are general-purpose functions that can be used in different parts of your application
// to avoid code duplication and enhance maintainability.

// Utility functions typically:
// - Are stateless (they do not depend on external state or context)
// - Perform a specific, well-defined task
// - Are reusable throughout your codebase

// Below are examples of common utility functions:

// 1. Adds two numbers
// This function takes two numbers as input and returns their sum.
// It can be used wherever you need to perform addition.
function add(a, b) {
    return a + b;
  }
  
  // Example usage:
  console.log(add(5, 3)); // Output: 8
  
  // 2. Multiplies two numbers
  // This function takes two numbers as input and returns their product.
  // It can be used wherever you need to perform multiplication.
  function multiply(a, b) {
    return a * b;
  }
  
  // Example usage:
  console.log(multiply(4, 7)); // Output: 28
  
  // 3. Capitalizes the first letter of a string
  // This function takes a string as input and returns a new string
  // with the first letter capitalized. This is useful for formatting strings
  // in a consistent way, such as capitalizing names or titles.
  function capitalizeFirstLetter(string) {
    // Check if the string is empty to avoid errors
    if (!string) return '';
    
    // Capitalize the first letter and return the new string
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  // Example usage:
  console.log(capitalizeFirstLetter('hello')); // Output: "Hello"
  
  // 4. Removes duplicate values from an array
  // This function takes an array as input and returns a new array with all
  // duplicate values removed. It uses a Set to ensure that each value is unique.
  function uniqueArray(arr) {
    // The Set object stores only unique values, and the spread operator (...) converts it back to an array
    return [...new Set(arr)];
  }
  
  // Example usage:
  console.log(uniqueArray([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
  
  // 5. Checks if a value is an integer
  // This function checks whether the provided value is an integer.
  // It's a simple utility that can be used in various validation scenarios.
  function isInteger(value) {
    // Number.isInteger is a built-in JavaScript method that checks for integers
    return Number.isInteger(value);
  }
  
  // Example usage:
  console.log(isInteger(10));   // Output: true
  console.log(isInteger(10.5)); // Output: false
  
  // 6. Converts a callback-based function to a Promise-based function
  // This utility function is specific to Node.js. It uses the `promisify` function
  // from the `util` module to convert a function that uses callbacks into a function
  // that returns a Promise. This is particularly useful for modernizing older APIs
  // to work with async/await.
  const { promisify } = require('util');
  
  // Example: Converting fs.readFile to a Promise-based function
  const fs = require('fs');
  
  // Use promisify to convert readFile to return a Promise
  const readFileAsync = promisify(fs.readFile);
  
  // Example usage:
  // Uncomment the following code to use it in a Node.js environment
  
  // readFileAsync('example.txt', 'utf8')
  //   .then(data => console.log(data))
  //   .catch(err => console.error("Error reading file:", err));
  
  // Summary of Utility Functions:
  // -----------------------------
  // - Utility functions help make your code DRY (Don't Repeat Yourself) by encapsulating
  //   common tasks into single-purpose functions.
  // - They improve code clarity and maintainability by abstracting repetitive logic
  //   into reusable functions.
  // - In modern JavaScript, utility functions are often used with Promises and async/await
  //   to handle asynchronous operations more cleanly.
  
  