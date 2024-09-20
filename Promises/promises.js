// In JavaScript, a Promise is an object that represents the eventual completion 
// (or failure) of an asynchronous operation and its resulting value.
// Promises provide a way to handle asynchronous tasks in a more manageable 
// and readable way than traditional callbacks.
//Usage: Promises are used to handle asynchronous operations like API calls, file I/O, or any operation that takes time to complete.


/*
  Key Concepts of Promises:

  1. States:
     - Pending: The initial state, neither fulfilled nor rejected.
     - Fulfilled: The operation completed successfully, and the promise now has a resulting value.
     - Rejected: The operation failed, and the promise has a reason for failure.

  2. Chaining:
     - Promises can be chained using the .then() method, allowing you to handle the result 
       of an operation and pass it to the next promise in the chain.
     - .catch() is used to handle errors or rejections.
     - .finally() executes a block of code once the promise is settled, 
       regardless of whether it was fulfilled or rejected.
*/

// Example of using a Promise:

let promise = new Promise(function(resolve, reject) {
    // Simulating an asynchronous operation
    let success = true; // This is just an example condition
    if (success) {
      resolve("Operation succeeded!");
    } else {
      reject("Operation failed.");
    }
  });
  
  promise
    .then(function(result) {
      console.log(result); // "Operation succeeded!"
    })
    .catch(function(error) {
      console.error(error); // If operation failed, this will run
    })
    .finally(function() {
      console.log("Operation completed."); // Always runs, regardless of success or failure
  });
  
  /*
    Benefits of Using Promises:
    - Avoiding Callback Hell: Promises allow you to handle asynchronous code in a more linear fashion, avoiding deeply nested callbacks.
    - Error Handling: With promises, you can handle errors more gracefully using .catch().
    - Readability: Promises make code easier to read and maintain, 
      especially when dealing with multiple asynchronous operations.
  */
  
      //===================**********************========================//

      // Example of Using `promisify` in Node.js
// ----------------------------------------

// Import the required modules
const { promisify } = require('util');
const fs = require('fs');

// What is `promisify`?
// `promisify` is a utility function in Node.js that converts a function
// that uses a callback into a function that returns a Promise. This allows
// you to use modern async/await syntax with functions that traditionally
// relied on callbacks.

// Example: Converting `fs.readFile` to a Promise-based function

// Original `fs.readFile` function using a callback
// fs.readFile('example.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error("Error reading file:", err);
//     return;
//   }
//   console.log(data);
// });

// Converting `fs.readFile` to return a Promise using `promisify`
const readFileAsync = promisify(fs.readFile);

// Using the Promisified Function with async/await
async function readFileExample() {
  try {
    // Await the result of the readFileAsync Promise
    const data = await readFileAsync('example.txt', 'utf8');
    
    // Output the file content
    console.log(data);
  } catch (err) {
    // Handle any errors that occur during the file read operation
    console.error("Error reading file:", err);
  }
}

// Call the async function to read the file
readFileExample();

//=============================//
//Static method of promises:-

//Promise.all(iterable): Waits for all promises to resolve.

const promise1 = Promise.resolve("First promise resolved");
const promise2 = Promise.resolve("Second promise resolved");
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "Third promise resolved after 1 second");
});

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results); 
    // Output: ["First promise resolved", "Second promise resolved", "Third promise resolved after 1 second"]
  })
  .catch((error) => {
    console.error(error);
  });

//Promise.allSettled(iterable): Waits for all promises to settle (resolve or reject).
const promises1 = Promise.resolve("First promise resolved");
const promises2 = Promise.reject("Second promise rejected");
const promises3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "Third promise resolved after 1 second");
});

Promise.allSettled([promises1, promises2, promises3])
  .then((results) => {
    console.log(results); 
    // Output:
    // [
    //   { status: "fulfilled", value: "First promise resolved" },
    //   { status: "rejected", reason: "Second promise rejected" },
    //   { status: "fulfilled", value: "Third promise resolved after 1 second" }
    // ]
  });

//Promise.any(iterable): Returns the first fulfilled promise or an AggregateError if all promises reject.
const promise11 = Promise.reject("First promise rejected");
const promise22 = Promise.resolve("Second promise resolved");
const promise33 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "Third promise resolved after 0.5 seconds");
});

Promise.any([promise11, promise22, promise33])
  .then((result) => {
    console.log(result); 
    // Output: "Second promise resolved" (because it fulfills first)
  })
  .catch((error) => {
    console.error(error);
  });

//Promise.resolve(value): Returns a resolved promise with the given value.
const resolvedPromise = Promise.resolve("This promise is resolved immediately");

resolvedPromise.then((result) => {
  console.log(result); 
  // Output: "This promise is resolved immediately"
});

//Promise.reject(reason): Returns a rejected promise with the given reason.

const rejectedPromise = Promise.reject("This promise is rejected immediately");

rejectedPromise.catch((error) => {
  console.error(error); 
  // Output: "This promise is rejected immediately"
});

//=========================================================================

//The Promise constructor is used to create new promise objects.
