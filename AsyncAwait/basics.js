// # Notes on Async/Await in JavaScript

// ## **Introduction to Async/Await**
// - **Async/Await** is a modern way to handle asynchronous operations in JavaScript.
// - It simplifies the syntax and makes the code easier to read compared to traditional promise handling.

// ## **What is Async?**
// - The `async` keyword is used to declare an asynchronous function.
// - An **async function** always returns a promise.
// - If a non-promise value is returned, it is automatically wrapped in a promise.

// ### **Example of Async Function**
// ```javascript
// async function getData() {
//     return "Namaste"; // This will be wrapped in a promise
// }
// ```

// ## **What is Await?**
// - The `await` keyword is used to pause the execution of an async function until a promise is resolved.
// - It can only be used inside an async function.

// ### **Example of Await**
// ```javascript
// async function handlePromise() {
//     const result = await getData(); // Waits for getData to resolve
//     console.log(result); // Logs "Namaste"
// }
// ```

// ## **How Async/Await Works Behind the Scenes**
// - When an async function is called, it returns a promise.
// - The execution of the function is paused at the `await` keyword until the promise is resolved.
// - Once resolved, execution resumes from the point of the `await`.

// ## **Error Handling with Async/Await**
// - Use `try...catch` blocks to handle errors in async functions.
  
// ### **Example of Error Handling**
// ```javascript
// async function fetchData() {
//     try {
//         const response = await fetch('invalid-url'); // This will throw an error
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }
// ```

// ## **Comparison with Promises**
// - Traditional promise handling uses `.then()` and `.catch()` methods.
// - Async/Await provides a cleaner and more readable syntax.

// ### **Example of Promise Handling**
// ```javascript
// fetch('url')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error("Error:", error));
// ```

// ## **Real-Life Example: Fetching Data**
// - Using `fetch` to make API calls is a common use case for async/await.

// ### **Example of Fetching Data**
// ```javascript
// async function getUser Data(username) {
//     try {
//         const response = await fetch(`https://api.github.com/users/${username}`);
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error("Error fetching user data:", error);
//     }
// }
// ```

// ## **Key Takeaways**
// - **Async functions** always return a promise.
// - **Await** pauses execution until the promise is resolved.
// - Use **try...catch** for error handling in async functions.
// - Async/Await simplifies asynchronous code, making it easier to read and maintain.

// ## **Conclusion**
// - Understanding async/await is crucial for modern JavaScript development, especially for handling asynchronous operations effectively.