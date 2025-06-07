// Question:
// What are some pitfalls or loopholes of closures in JavaScript, and how can we address them?

// ✅ 1️⃣ Memory Leaks due to Unintentional References
// One common loophole is that closures can accidentally retain references to large data or DOM elements, preventing them from being garbage-collected. This can lead to memory leaks.

// 🔍 Example:

function createHandler() {
  const largeData = new Array(1000000).fill('data'); // big array
  return function() {
    console.log(largeData.length);
  };
}

let handler = createHandler();

// Even if we don't use handler, largeData stays in memory
// Solution:
// To avoid this, it’s important to nullify or dereference closures when they’re no longer needed. For example, if the closure is assigned to a global variable, we can explicitly set it to null when done:

handler = null; 
// removes reference, allowing GC
// Alternatively, avoid storing closures globally if possible.

// ✅ 2️⃣ Unintentional Shared State
// Closures preserve the outer function’s state. However, this can lead to unintentional sharing of mutable state if the closure is reused in multiple places.

// 🔍 Example:

function createCounter() {
  let count = 0;
  return function() {
    count++;
    console.log(count);
  };
}

const counter1 = createCounter();
const counter2 = counter1; // same closure
counter1(); // 1
counter2(); // 2 (same closure, shared state)

// Solution:
// To prevent this, always create a new closure for each independent use case by calling the outer function again:

const counter11 = createCounter();
const counter21 = createCounter(); // new closure, new state

// This way, each counter has its own isolated state.

// ✅ 3️⃣ Complexity & Overuse of Closures
// Another pitfall is that overusing closures can lead to complex, hard-to-maintain code. Closures can make code harder to debug, especially if many nested functions are involved.

// Solution:
// Use closures only when necessary. If the data doesn’t need to be preserved across function calls, consider using simple function structures or modules/classes to achieve the same functionality in a clearer way.

// ✅ 4️⃣ Holding onto Large Objects / DOM Nodes
// If closures hold on to large objects, like DOM elements, they can block garbage collection.

// 🔍 Example:

function attachHandler() {
  const element = document.getElementById("myDiv");
  element.onclick = function() {
    console.log(element.id);
  };
}

// Here, the closure holds a reference to the DOM element even after it’s removed from the page.

// Solution:
// When dealing with large objects or DOM references, consider using WeakMap or WeakRef. These data structures allow for garbage collection even if the closure still exists:

const wm = new WeakMap();
function storeData(el, data) {
  wm.set(el, data);
}

// when el is removed, data is GC'd automatically

// ✅ 5️⃣ Minimize Closure Scope
// Sometimes closures expose too much data that doesn’t need to be shared, increasing the risk of misuse.

// Solution:
// Expose only the minimum data needed in the closure:

function secretHolder() {
  const secret = "hidden";
  return function() {
    console.log(secret);
  };
}

// 🟩 Summary & Key Points to Mention:
// Pitfalls:
// - Memory leaks (unintentional references)
// - Shared mutable state
// - Complexity in code
// - Holding large objects / DOM elements
// - Exposing more data than necessary

// Solutions:
// - Nullify closures when done
// - Avoid global references
// - Use new closures for isolated states
// - Prefer simpler structures when possible
// - Use WeakMap/WeakRef for large objects
// - Minimize the data exposed by the closure

// Ending Note for Interview:
// In short, closures are very powerful and useful for managing state and data privacy, but they require careful handling to avoid memory leaks, complexity, and accidental data sharing. By following these best practices, we can fully leverage closures while keeping our applications performant and maintainable.
