//case 1 :- when there is no any closure
function withoutClosure() {
    var text = "hii"
    var text1 = "retest"
    console.log(text1)        // here we can easily print the value of text when it is inside the function
}
// console.log(text1)      //console.log(text1)  ReferenceError: text1 is not defined here we are not able to exec ute the value inside the function
withoutClosure()


// ### What’s happening here?

// * When the function `withoutClosure` runs, JavaScript creates a **new execution context** with a **local scope** for this function.
// * The variables `text` and `text1` are created **inside this local scope**.
// * Inside the function, you can access `text1` and print it, because you are **inside the scope** where it exists.
// * But when you try to access `text1` **outside** the function, it throws an error. This is because `text1` **belongs only to the function's local scope** and does **not exist outside** of it.
// * Once the function finishes executing, its local scope and variables are **destroyed** and **not accessible anymore**.

// ### Why?

// * **Function scope** means variables defined inside a function are **private to that function**.
// * This prevents accidental modification or clashes with other variables in the global or other scopes.
// * It helps keep the program **organized, secure, and memory efficient**.


// case 2 :- when closure arrive 

function withClosure() {
    var check = "hey@123"
    function executeClosure() {
        console.log(check)
    }
    executeClosure()
}
withClosure()

// ### What’s happening here?

// * Inside `withClosure`, the variable `check` is created in the local scope of `withClosure`.
// * There is a nested function `executeClosure` defined **inside** `withClosure`.
// * `executeClosure` accesses `check`, which is defined in its **outer lexical scope** (`withClosure`).
// * When `executeClosure` runs (inside `withClosure`), it has access to `check` because of **lexical scoping**.
// * This is **closure in action**: `executeClosure` “closes over” the variable `check` from its outer environment.
// * The inner function **remembers** the variables of its outer function **even after the outer function has run** (if returned and called later).
// * Here, because `executeClosure` is called inside `withClosure`, you see the access working smoothly.


// ### Why do we need the nested function in Case 2?

// * Closure  happens when **a function is created inside another function** and the inner function **uses variables** from the outer function.
// * The **inner function keeps a reference** to the outer function’s variables, forming a closure.
// * This allows the inner function to **remember and use** those variables even after the outer function has finished.


// * In Case 1, since you don’t have any inner function that references outer variables, **no closure is formed**.
// * Case 1 variables die with the function call and are lost outside.


// # Technical Story Behind Both:

// ### 1. **Execution Context & Scope Chain:**

// * When a function runs, it gets its own **execution context** and **variable environment**.
// * Variables declared inside the function live **inside that environment only**.
// * The function also forms a **scope chain** to find variables: it looks inside itself first, then outside if needed.

// ### 2. **Function scope limits access:**

// * Variables declared with `var`, `let`, or `const` inside a function are **local** to that function.
// * Outside the function, these variables don’t exist in the current scope, so accessing them throws an error.

// ### 3. **Closure extends variable lifetime:**

// * When a function is returned or used inside another function, **a closure is created**.
// * Closure means the inner function keeps a **reference** to its outer function’s lexical environment (variables).
// * This keeps those variables **alive**, even after the outer function has finished executing.
// * So inner functions can access variables of outer functions **anytime**.

// ---

// ### Summary Table:

// | Aspect              | Case 1 (No Closure)        | Case 2 (With Closure)                                |
// | ------------------- | -------------------------- | ---------------------------------------------------- |
// | Variable location   | Inside outer function only | Inside outer function but accessed by inner function |
// | Variable lifetime   | Dies after function ends   | Lives as long as inner function exists               |
// | Access from outside | Not possible (error)       | Possible via inner function                          |
// | Closure formed?     | No                         | Yes                                                  |
// | Function structure  | Single function only       | Nested function inside outer function                |
// | Use cases           | Simple local variables     | Private variables, data hiding, maintaining state    |

// ---

// Summary:
// Closure Created By	                               Example
// Nested function inside function	              Most common and clear
// Returned function from outer function	       To keep state private
// Callbacks and event handlers	Functions         remember data on event
// IIFE returning function	                       Encapsulation and privacy

// TL;DR:
// Closures are formed when a function accesses variables from its outer scope, and the most straightforward way to create them is via nested functions, 
// but they can happen anytime an inner function “remembers” outer variables — whether nested, returned, or passed around.



function withClosure1() {
    var check = "hey@123"
    function executeClosure() {
        console.log(check)
    }
    executeClosure()

}
function checking() {
    console.log("message check")
}
checking()
withClosure1()



