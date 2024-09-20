// *** Explanation of async and await ***

/**
 * What is `async`?
 * - The `async` keyword is used to declare a function as asynchronous.
 * - An asynchronous function always returns a promise.
 * - If the function explicitly returns a value, that value is wrapped in a promise automatically.
 * - Purpose: Allows you to use `await` inside the function to pause execution until a promise is resolved or rejected.
 */
 
// Declaring an asynchronous function
async function exampleAsyncFunction() {
    // Code here
  }
  
  /**
   * What is `await`?
   * - The `await` keyword is used inside an `async` function to pause execution until the promise it is waiting for is settled.
   * - Purpose: Makes asynchronous code look synchronous, improving readability.
   */
   
  // Function that returns a promise (simulated async operation)
  function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Data fetched!');
      }, 2000);
    });
  }
  
  /**
   * Example of using `async` and `await`
   * - The `getData` function is declared as `async`, so it returns a promise.
   * - Inside the function, `await` pauses execution until `fetchData` is resolved.
   * - After resolution, the result is used in the function.
   * - Error handling is done using `try...catch`.
   */
  async function getData() {
    try {
      console.log('Fetching data...');
      // Pause execution until fetchData resolves
      let data = await fetchData(); 
      console.log(data); // Logs 'Data fetched!' after 2 seconds
    } catch (error) {
      console.error('Error:', error); // Handles any errors that occur
    }
  }
  
  // Call the async function to demonstrate usage
  getData();
  
  /**
   * Key Points:
   * - `async` functions return a promise, making it easier to handle asynchronous operations.
   * - `await` can only be used inside `async` functions and pauses execution until the promise resolves.
   * - Use `try...catch` for error handling within `async` functions.
   * - `async` and `await` make asynchronous code look and behave more like synchronous code, improving readability and maintainability.
   */
  //===========================================================//
  
  // 1. What is the purpose of `async` and `await` in JavaScript?
// `async` and `await` are used to work with asynchronous code in a more synchronous manner. They simplify the process of writing and understanding asynchronous code by allowing you to write code that looks like synchronous code, but behaves asynchronously.

// 2. How does an `async` function differ from a regular function?
// An `async` function always returns a promise. If the function returns a value, the promise is resolved with that value. If the function throws an error, the promise is rejected with that error. Regular functions do not automatically return a promise.

// 3. What is the syntax for using `await` inside an `async` function?
// The `await` keyword is used inside an `async` function to pause the execution of the function until the promise is resolved. Syntax:
// async function example() {
//     const result = await someAsyncFunction();
//     console.log(result);
// }

// 4. What will an `async` function return if no explicit return value is provided?
// If an `async` function does not have an explicit return value, it returns a promise that resolves to `undefined`.

// 5. What happens if you use `await` on a non-promise value?
// If you use `await` on a non-promise value, it will be treated as if it is a resolved promise with that value. It does not affect the behavior of the code, but it is still a good practice to use `await` with promises.

// 6. Can `await` be used outside of an `async` function? Why or why not?
// No, `await` can only be used inside `async` functions. This is because `await` is designed to work with promises and the `async` function ensures that the function returns a promise, providing the necessary context for `await`.

// 7. How do you handle errors in an `async` function?
// You handle errors in an `async` function using `try-catch` blocks. If a promise is rejected, the control will jump to the `catch` block.
// async function example() {
//     try {
//         const result = await someAsyncFunction();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }

// 8. What is the role of the `try-catch` block in combination with `async` and `await`?
// The `try-catch` block is used to handle errors that may occur during the execution of asynchronous code. The `try` block contains the code that may throw an error, and the `catch` block handles the error if one occurs.

// 9. How does the `await` keyword affect the execution of code in an `async` function?
// When `await` is used, it pauses the execution of the `async` function until the promise is resolved. The function will not continue executing the code following the `await` statement until the promise is settled.

// 10. What is the difference between `Promise.all()` and `await` in terms of handling multiple promises?
// `Promise.all()` is used to handle multiple promises concurrently and waits for all of them to resolve before proceeding. `await` can be used with `Promise.all()` to simplify the syntax. For example:
// async function fetchData() {
//     const [result1, result2] = await Promise.all([fetch(url1), fetch(url2)]);
// }

// 11. How can you convert a function that uses promises with `.then()` and `.catch()` to use `async` and `await`?
// To convert `.then()` and `.catch()` to `async` and `await`, you would replace the promise chain with `await` statements and handle errors using `try-catch`. For example:
// // Using .then() and .catch()
// someAsyncFunction().then(result => {
//     console.log(result);
// }).catch(error => {
//     console.error(error);
// });

// // Using async/await
// async function example() {
//     try {
//         const result = await someAsyncFunction();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }

// 12. Can you explain how `async`/`await` affects the performance of your code?
// `async`/`await` does not inherently affect the performance of your code. It mainly affects code readability and maintainability. However, using `await` for sequential asynchronous operations may result in slower execution compared to running operations in parallel using `Promise.all()`.

// 13. You have multiple asynchronous tasks that need to be executed in parallel. How would you handle this using `async` and `await`?
// You can use `Promise.all()` to run multiple asynchronous tasks in parallel and wait for all of them to complete.
// async function fetchMultipleData() {
//     const [data1, data2] = await Promise.all([fetch(url1), fetch(url2)]);
//     console.log(data1, data2);
// }

// 14. Imagine you are fetching data from multiple APIs sequentially. How would you optimize this process using `async` and `await`?
// Fetching data sequentially can be optimized by running the fetch operations in parallel if possible. If sequential execution is required, ensure to handle promises efficiently.
// async function fetchSequentially() {
//     const data1 = await fetch(url1);
//     const data2 = await fetch(url2);
//     console.log(data1, data2);
// }

// 15. How would you handle a situation where one of the asynchronous operations fails, and you want to continue with the remaining operations?
// You can handle this by using `try-catch` blocks for each asynchronous operation individually to ensure that errors do not stop the execution of subsequent operations.
async function fetchWithContinuedExecution() {
    try {
        const data1 = await fetch(url1);
        console.log(data1);
    } catch (error) {
        console.error('Failed to fetch data1:', error);
    }

    try {
        const data2 = await fetch(url2);
        console.log(data2);
    } catch (error) {
        console.error('Failed to fetch data2:', error);
    }
}
