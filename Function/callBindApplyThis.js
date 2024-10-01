// Define a function to use with call, apply, and bind
function greet(greeting, name) {
    console.log(`${greeting}, ${name}!`);
  }
  
  // Using call
  console.log('Using call:');
  /**
   * The call() method invokes a function with a specified `this` value and arguments provided individually.
   * Syntax: function.call(thisArg, arg1, arg2, ...)
   */
  greet.call(null, 'Hello', 'Alice'); // Output: "Hello, Alice!"
  function abc(name){
    console.log(name)
  }
  abc.apply(null,["ronaldo"])
  
//   // Using apply
//   console.log('Using apply:');
//   /**
//    * The apply() method invokes a function with a specified `this` value and arguments provided as an array (or array-like object).
//    * Syntax: function.apply(thisArg, [arg1, arg2, ...])
//    */
//   greet.apply(null, ['Hello', 'Bob']); // Output: "Hello, Bob!"
  
//   // Using bind
//   console.log('Using bind:');
//   /**
//    * The bind() method creates a new function that, when called, has its `this` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
//    * Syntax: function.bind(thisArg, arg1, arg2, ...)
//    */
//   const greetHello = greet.bind(null, 'Hello');
//   greetHello('Charlie'); // Output: "Hello, Charlie!"



//   //In JavaScript, this is a special keyword that refers to the context in which a function is executed. The value of this can vary depending on how a function is called. Here’s a breakdown:

// 1//. Global Context
// ////In the global context (outside of any function), this refers to the global object. In a browser, this is window, while in Node.js, it's global.

// console.log(this); // In a browser, this will log the `window` object.

// //2. Object Method
// //When a function is called as a method of an object, this refers to the object itself.


// const person = {
//   name: 'Alice',
//   greet() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// };

// person.greet(); // Output: "Hello, my name is Alice"
// //3. Constructor Function
// //In a constructor function, this refers to the newly created instance of the object.


// function Person1(name) {
//   this.name = name;
// }

// const alice = new Person1('Alice');
// console.log(alice.name); // Output: "Alice"
// //4. Arrow Functions
// //Arrow functions do not have their own this. Instead, they inherit this from the enclosing execution context.


// const persons = {
//   name: 'Alice',
//   greet: () => {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// };

// persons.greet(); // Output: "Hello, my name is undefined" (or an error in strict mode)
 
