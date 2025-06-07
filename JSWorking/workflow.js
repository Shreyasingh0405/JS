// **Overview of JavaScript Execution Contexts**

// - **Execution Context**: 
//   - A fundamental concept in JavaScript that defines the environment in which JavaScript code is executed.
//   - Every time a JavaScript program runs, an execution context is created.

// ---

// **Components of Execution Context**

// - **Memory Component**: 
//   - Stores variables and function declarations.
  
// - **Code Component**: 
//   - Contains the actual code that will be executed.

// Javascript is synchronous single threaded language

// Synchoronous :- line by line 
// Single Threaded :- execution of  one command at a time

// **Phases of Execution Context Creation**

// 1. **Creation Phase (Memory Creation Phase)**:
//    - Memory is allocated for all variables and functions.
//    - Variables are initialized with the value `undefined`.
//    - Function declarations store the entire function code in memory.

// 2. **Code Execution Phase**:
//    - The JavaScript engine executes the code line by line.
//    - Variables are assigned their actual values.
//    - Functions are invoked, creating new execution contexts.

// ---

// **Example Code Explanation**

// - **Global Execution Context**:
//   - When the code runs, a global execution context is created.
//   - For example, if we have:

var n = 2;
function square(num) {
    var ans;
    ans = num * num;
    return ans;
}
var square2 = square(n);
var square4 = square(4);

//   - Memory is allocated for `n`, `square`, `square2`, and `square4`, all initialized to `undefined`.

// - **Function Invocation**:
//   - When `square(n)` is called:
//     - A new execution context is created for the `square` function.
//     - Memory is allocated for `num` and `ans`, both initialized to `undefined`.
//     - The value of `n` (which is `2`) is passed to `num`.
//     - The calculation `num * num` is performed, and `ans` is assigned the result.
//     - The function returns the value of `ans` back to the calling context.

// ---

// **Call Stack Management**

// - **Call Stack**:
//   - A data structure that manages execution contexts.
//   - The global execution context is at the bottom of the stack.
//   - Each time a function is invoked, a new execution context is pushed onto the stack.
//   - When a function completes, its execution context is popped off the stack, and control returns to the previous context.

// - **Order of Execution**:
//   - The call stack maintains the order of execution of execution contexts.
//   - It is also known by various names: Execution Context Stack, Program Stack, Control Stack, Runtime Stack, Machine Stack.

// ---

// **Conclusion**

// - Understanding execution contexts and the call stack is crucial for grasping how JavaScript executes code.
// - The process involves memory allocation, code execution, and management of execution contexts through the call stack.

// --------------------------------------------------
// **Additional Notes**

// **What is JavaScript?**
// - JavaScript is a high-level, interpreted programming language used to add interactivity, dynamic content, and logic to web pages.
// - It is also used on servers with Node.js to build backend applications.

// **Advantages of JavaScript**
// - ✅ Makes web pages interactive (e.g., form validation, dynamic content updates).
// - ✅ Runs in all major browsers without extra setup.
// - ✅ Supports event-driven and asynchronous programming (with callbacks, promises, and async/await).
// - ✅ Huge ecosystem: libraries (e.g., jQuery), frameworks (e.g., React, Angular), backend runtime (Node.js).

// **Disadvantages of JavaScript**
// - ❌ Security risks (e.g., XSS attacks if user input is not sanitized).
// - ❌ Browser inconsistencies (some features may not work in all browsers).
// - ❌ No compile-time type-checking (can lead to runtime errors).
// - ❌ Single-threaded: heavy computations can block the main thread, causing poor performance.

// **Alternatives to JavaScript**
// - ✅ TypeScript: adds static types for safer, easier-to-maintain JavaScript code.
// - ✅ Dart: used in Flutter, can compile to JavaScript for the web.
// - ✅ WebAssembly: lets you run languages like Rust and C++ in the browser for high-performance tasks.
// - ✅ Elm: purely functional language that compiles to JavaScript and avoids many runtime errors.

// **How to Solve JavaScript’s Disadvantages**
// - ✅ Security: sanitize user input to prevent XSS (e.g., using libraries like DOMPurify).
// - ✅ Compatibility: use transpilers like Babel to convert modern JavaScript to older syntax for older browsers.
// - ✅ Code quality: use linters (ESLint) and formatters (Prettier) to catch errors early.
// - ✅ Avoid blocking the main thread: use asynchronous patterns (async/await, promises, web workers) for long-running tasks.
// - ✅ Testing: use tools like Jest or Mocha to ensure code behaves as expected.

