/* LEXICAL ENVIRONMENT, SCOPE CHAIN AND SCOPE

1. Scope of a variable is directly dependent on the lexical environment.
2. Whenever an execution context is created, a lexical environment is created. Lexical environment is the local memory along with the lexical environment of its parent. Lexical as a term means in hierarchy or in sequence.
3. Having the reference of parent's lexical environment means, the child or the local function can access all the variables and functions defined in the memory space of its lexical parent.
4. The JS engine first searches for a variable in the current local memory space, if its not found here it searches for the variable in the lexical environment of its parent, and if its still not found, then it searches that variable in the subsequent lexical environments, and the sequence goes on until the variable is found in some lexical environment or the lexical environment becomes NULL.
5. The mechanism of searching variables in the subsequent lexical environments is known as Scope Chain. If a variable is not found anywhere, then we say that the variable is not present in the scope chain.
*/

function a() {
    var b = 190
    var m = 87
    c()
    function c() {
        console.log(b)
        console.log(m)
    }
}
a()

/*
Closure :Function bundled with its lexical environment is known as a closure. 
Whenever function is returned, even if its vanished in execution context but still it remembers the reference it was pointing to.
 Its not just that function alone it returns but the entire closure and that's where it becomes interesting !!

uses:-

Data Encapsulation and Privacy: Create private variables and methods.
Function Factories: Generate functions with specific behaviors.
Memoization: Cache results of expensive function calls for performance optimization.
Maintaining State: Track and manage state across function calls.
Event Handlers and Callbacks: Maintain access to variables in event handlers and callbacks.

*/

function check() {
    const y = 89
    function reCheck() {
        console.log(y)
    }
    return reCheck
}
const ggg = check()
ggg()


//  **closure use cases** with short and easy examples:


// ### 1️⃣ Data Encapsulation and Privacy

// **Example:** Hiding a variable

function secretHolder() {
  let secret = "Top Secret!";  // Private variable

  return function() {
    console.log(secret);
  };
}

const showSecret = secretHolder();
showSecret(); // Output: Top Secret!

// The variable `secret` is hidden from outside, only `showSecret` can access it.


// ### 2️⃣ Function Factories

// **Example:** Create functions with different behaviors


function greetMaker(name) {
  return function() {
    console.log("Hello, " + name + "!");
  };
}
const greetAlice = greetMaker("Alice");
greetAlice(); // Output: Hello, Alice!

const greetBob = greetMaker("Bob");
greetBob(); // Output: Hello, Bob!

// ```

// `greetMaker` **generates** a new function each time with its own `name`.

// ---

// ### 3️⃣ Memoization

// **Example:** Save results for faster reuse

function memoizedAdd() {
  let cache = {};

  return function(num) {
    if (cache[num]) {
      console.log("Fetching from cache:", cache[num]);
      return cache[num];
    } else {
      let result = num + 10; // Expensive calculation
      cache[num] = result;
      console.log("Calculating:", result);
      return result;
    }
  };
}

const add10 = memoizedAdd();
 add10(5); // Output: Calculating: 15
add10(5); // Output: Fetching from cache: 15

// ```

// ---

// ### 4️⃣ Maintaining State

// **Example:** Counter that remembers the count

function createCounter() {
  let count = 0;

  return function() {
    count++;
    console.log(count);
  };
}

const counter = createCounter();
counter(); // 1
 counter(); // 2
counter(); // 3


// ### 5️⃣ Event Handlers and Callbacks

// **Example:** Remember variable in a click handler

// ```html
// <button id="btn">Click me</button>

// <script>
//   function setupButton() {
//     let clicks = 0;

//     document.getElementById("btn").addEventListener("click", function() {
//       clicks++;
//       console.log("Button clicked", clicks, "times.");
//     });
//   }

//   setupButton();
// </script>
// ```

// Even though `setupButton` is done executing, the event listener **remembers** `clicks` because of closure.

