// A "function" in programming is a reusable block of code designed to perform a specific task.
// Functions allow you to write a piece of code once and use it multiple times throughout your program.
// They help make your code more organized, modular, and easier to understand.

// 1. Function Declaration:
// A function declaration is a way to define a function using the `function` keyword followed by the function's name.
// Function declarations are "hoisted," meaning they can be called before they are defined in the code.

function sayHello() {
    console.log("Hello, World!");
}

// Calling the function
sayHello(); // Output: Hello, World!

// 2. Function Expression:
// A function expression involves defining a function and assigning it to a variable.
// Unlike function declarations, function expressions are not hoisted, so they cannot be called before they are defined.

const greet = function(name) {
    console.log("Hello, " + name + "!");
};

// Calling the function
greet("Shreya"); // Output: Hello, Shreya!

//keywordes of function:-

// 3. Function Call:
// Once a function is declared or defined, you can call it by using its name followed by parentheses.
// This will execute the code inside the function.

sayHello(); // Calling a function declaration
greet("Shreya"); // Calling a function expression

// 4. Parameters and Arguments:
// Functions can accept inputs, known as parameters, and you pass values to these parameters when you call the function.
// These values are called arguments.

function add(a, b) {
    return a + b;
}
// Calling the function with arguments
let sum = add(3, 4); // sum is now 7
console.log(sum); // Output: 7

// 5. Return Value:
// A function can return a value using the `return` statement.
// This value can then be used elsewhere in the program.

function multiply(a, b) {
    return a * b;
}

// Calling the function and storing the return value
let product = multiply(3, 4); // product is now 12
console.log(product); // Output: 12

// 6. Function Scope:
// Variables declared inside a function are local to that function and cannot be accessed outside of it.
// This is known as function scope.

function scopedFunction() {
    let localVariable = "I'm local to this function";
    console.log(localVariable);
}

// Trying to access `localVariable` outside the function will cause an error
// console.log(localVariable); // Uncaught ReferenceError: localVariable is not defined

scopedFunction(); // Output: I'm local to this function

// 7. Anonymous Functions:
// Functions can also be created without a name and assigned to variables or passed as arguments.
// These are often used in function expressions.

const divide = function(a, b) {
    return a / b;
};

// Calling the anonymous function assigned to the `divide` variable
console.log(divide(12, 4)); // Output: 3

//=============*********************************====================//
// self invoked function:-

// Definition: A self-invoking function (also known as an Immediately Invoked Function Expression or IIFE) 
// is a function that is defined and executed immediately after its creation. 
// This pattern is commonly used to create a new scope and avoid polluting the global namespace.

// Example 1: Basic Self-Invoking Function

(function() {
    console.log("This function runs immediately!");
})();

// Example 2: Self-Invoking Function with Parameters
(function(name) {
    console.log("Hello, " + name + "!");
})("Shreya");

// Example 3: Using IIFE to Create a New Scope
const result = (function() {
    const message = "This is a scoped message!";
    return message;
})();
console.log(result); // Output: This is a scoped message!

// Example 4: Using IIFE to Initialize Values
const config = (function() {
    const settings = {
        theme: "dark",
        language: "en"
    };
    return settings;
})();
console.log(config); // Output: { theme: 'dark', language: 'en' }

//length of arguments//

function myFunction(a, b,c) {
    return arguments.length;
  }
  console.log(myFunction(2,1,8))

  
// (function(shree) {
//     console.log("self invoked" + shree);
// })("shh");