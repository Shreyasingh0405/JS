/*
The event loop is a core concept in JavaScript that enables asynchronous programming, allowing JavaScript to perform non-blocking operations—even though it’s single-threaded. This means that JavaScript can handle multiple operations concurrently, without being held up by slow-running tasks like file I/O, network requests, or time-consuming computations.

### How the Event Loop Works

1. **Call Stack**:
   - The call stack is where function executions are stored. Whenever a function is invoked, it gets pushed onto the call stack. When a function finishes execution, it gets popped off the stack.
   - JavaScript runs code in a synchronous manner, meaning it executes code line by line in the order it appears, managing these operations in the call stack.

2. **Web APIs**:
   - Certain operations, like `setTimeout`, `fetch`, or DOM events, are not handled by the JavaScript engine itself but by the browser's Web APIs (in the context of browser environments) or Node.js APIs.
   - When such an operation is called, it’s passed to the Web API, which runs in the background, allowing the call stack to continue processing other synchronous code.

3. **Callback Queue (or Task Queue)**:
   - Once the Web API finishes an operation (like a `setTimeout` delay or a network request), it pushes the callback function associated with that operation into the callback queue.
   - This queue holds tasks that are waiting to be executed once the call stack is clear.

4. **Event Loop**:
   - The event loop continuously checks the call stack and the callback queue.
   - If the call stack is empty, meaning there are no more synchronous operations left to execute, the event loop will take the first callback in the callback queue and push it onto the call stack for execution.
   - This cycle repeats, allowing JavaScript to handle asynchronous operations in an efficient manner.

```

**Explanation**:
1. `console.log('Start')` is executed first, and "Start" is printed.
2. `setTimeout` is called next. It’s passed to the Web API, which will wait for 2000ms (2 seconds). Meanwhile, the main thread (call stack) continues execution.
3. `console.log('End')` is executed, and "End" is printed.
4. After 2 seconds, the callback function in `setTimeout` is placed in the callback queue.
5. The event loop sees the call stack is empty and pushes the `setTimeout` callback onto the call stack.
6. Finally, "Timeout callback" is printed.

### Summary

- The event loop allows JavaScript to handle asynchronous operations by managing tasks in the background and executing their associated callbacks when the call stack is free.
- This makes JavaScript highly efficient in handling tasks like I/O operations without blocking the execution of other code.

*/

// ### Example

console.log('Start');

setTimeout(() => {
  console.log('Timeout callback');
}, 2000);

console.log('End');


// 1. What is the JavaScript event loop, and what is its purpose?
// The JavaScript event loop is a mechanism that allows JavaScript to perform non-blocking operations by using asynchronous callbacks. It enables JavaScript to execute code, handle events, and manage asynchronous operations while keeping the main thread free to handle user interactions and other tasks. The event loop continuously checks the call stack and the message queue (or task queue) and executes tasks from the queue if the call stack is empty.

// 2. How does the JavaScript call stack work with the event loop?
// The call stack is a data structure that keeps track of function execution. When a function is invoked, it is pushed onto the call stack. When the function returns, it is popped off the stack. The event loop continuously monitors the call stack and the message queue. If the call stack is empty, the event loop will take the first task from the message queue and push it onto the call stack for execution.

// 3. What is the difference between synchronous and asynchronous code in JavaScript?
// Synchronous code is executed sequentially, blocking the execution of subsequent code until the current code completes. Asynchronous code, on the other hand, allows the execution of tasks to be deferred, enabling other tasks to run in the meantime. This is achieved using mechanisms like callbacks, promises, and async/await, allowing JavaScript to handle operations like I/O without blocking the main thread.

// 4. How does the event loop work?
// The event loop works by continuously checking the call stack and the message queue. It performs the following steps:
//    1. Execute any code currently on the call stack.
//    2. Once the call stack is empty, it checks the message queue for pending tasks.
//    3. If there are tasks in the message queue, the event loop dequeues and executes them one by one.
//    4. This process repeats, allowing the event loop to handle asynchronous tasks while keeping the main thread responsive.

// 5. How does the event loop handle `setTimeout` and `setInterval` functions?
// `setTimeout` and `setInterval` are asynchronous functions that schedule tasks to be executed after a specified delay. `setTimeout` schedules a single execution of a function after the delay, while `setInterval` schedules repeated executions at specified intervals. When the delay or interval elapses, the callback function is added to the message queue, and the event loop will execute it when the call stack is empty.

// 6. What happens when you have a `setTimeout` with a delay of 0 milliseconds?
// A `setTimeout` with a delay of 0 milliseconds does not execute immediately. Instead, it schedules the callback function to be executed after the current call stack is cleared and any currently pending microtasks are completed. This ensures that the callback is executed asynchronously, even though the delay is set to 0.


// 7. How does JavaScript handle user interactions and other events with the event loop?
// User interactions and other events (e.g., DOM events, I/O events) are handled by event listeners. When an event occurs, an event is added to the message queue. The event loop picks up these events from the queue and processes them when the call stack is empty, allowing the event handler functions to execute.

// 8. Can you explain the concept of microtasks and macrotasks? How are they handled by the event loop?
// Microtasks are tasks that are executed after the currently executing script and before the event loop continues to process other tasks. Examples include promises and `MutationObserver` callbacks. Macrotasks include tasks like `setTimeout`, `setInterval`, and I/O operations. The event loop prioritizes microtasks and executes all of them before moving on to the next macrotask in the queue.

// 9. How does the event loop work with Promises and `async/await` in JavaScript?
// Promises are handled by the event loop through microtasks. When a promise resolves, its `.then` or `.catch` callbacks are placed in the microtask queue. The event loop ensures that all microtasks are processed before handling the next macrotask. `async/await` syntax is built on top of promises, and the `await` keyword pauses the execution of the async function until the promise resolves, allowing other tasks to continue in the meantime.

// 10. What are the implications of having long-running synchronous operations on the event loop?
// Long-running synchronous operations block the call stack and prevent the event loop from processing other tasks. This can lead to a sluggish or unresponsive application, as user interactions and asynchronous tasks are not handled until the synchronous operation completes. It is important to avoid long-running synchronous code and use asynchronous techniques to keep the application responsive.

// 11. What happens to the event loop if an exception is thrown inside a callback?
// If an exception is thrown inside a callback, it will propagate up the call stack and may terminate the execution of the current script if not handled. The event loop will continue processing other tasks, but unhandled exceptions can affect the stability of the application. It is important to handle exceptions properly using `try/catch` blocks within callbacks to ensure smooth execution.

// 12. How does the event loop handle errors in asynchronous code?
// Errors in asynchronous code, such as those occurring in promises, can be handled using `.catch` methods or `try/catch` blocks within `async/await` functions. When a promise is rejected, the event loop will handle the rejection and invoke the appropriate `.catch` handler. For `async/await`, errors can be caught using `try/catch` blocks within the async function to handle asynchronous errors gracefully.

// 13. How can you diagnose and resolve performance issues related to the event loop in a web application?
// Performance issues related to the event loop can be diagnosed using browser developer tools to monitor and profile JavaScript execution. Look for long-running tasks or blocked execution that affects responsiveness. To resolve performance issues, optimize code to reduce synchronous operations, use asynchronous patterns, and leverage web workers for offloading heavy computations.

// 14. What strategies can you use to avoid blocking the event loop and keep your application responsive?
// To avoid blocking the event loop, avoid long-running synchronous operations and break them into smaller chunks using techniques like `setTimeout` or `requestAnimationFrame`. Offload heavy computations to web workers, use asynchronous APIs, and optimize event handlers to ensure they execute efficiently without causing delays in the main thread.

// 15. What are some common misconceptions about the event loop in JavaScript?
// Common misconceptions include the belief that `setTimeout` with a delay of 0 milliseconds executes immediately or that JavaScript is single-threaded in the traditional sense. In reality, JavaScript uses the event loop to handle asynchronous tasks and can process multiple tasks by leveraging non-blocking I/O and microtasks to maintain responsiveness.
