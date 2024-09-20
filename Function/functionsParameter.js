/**
 * Function Parameters in JavaScript
 */

// 1. Required Parameters
// These parameters must be provided when calling the function.
function greet(name) {
    console.log(`Hello, ${name}!`);
  }
  greet('Alice'); // Output: Hello, Alice!
  greet(); // Output: Hello, undefined!
  
  // 2. Optional Parameters
  // Parameters not provided are `undefined` by default.
  function add(a, b) {
    return a + b;
  }
  console.log(add(5, 3)); // Output: 8
  console.log(add(6)); // Output: NaN
  console.log(add());
  
  // 3. Default Parameters
  // Default values can be set for parameters if no value is provided.
  function greet(name = 'Guest') {
    console.log(`Hello, ${name}!`);
  }
  greet('Alice'); // Output: Hello, Alice!
  greet(); // Output: Hello, Guest!
  
  // 4. Rest Parameters
  // Allows handling an indefinite number of arguments as an array.
  function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  console.log(sum(1, 2, 3, 4)); // Output: 10
  console.log(sum(5, 10)); // Output: 15
  
  // 5. Parameter Destructuring
  // Extract values from objects or arrays directly into variables.
  
  // Object Destructuring
  function createUser({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
  }
  createUser({ name: 'Alice', age: 30 }); // Output: Name: Alice, Age: 30
  
  // Array Destructuring
  function calculate([x, y]) {
    return x + y;
  }
  console.log(calculate([5, 10])); // Output: 15
  
  // 6. Rest Parameters vs. Arguments Object
  // `arguments` object is less commonly used; Rest parameters are preferred.
  function showArguments() {
    console.log(arguments);
  }
  showArguments(1, 'text', true); // Output: [1, 'text', true]
  
//========*******************=============================//

//PASSBYVALUE V/S PASSBYREFERENCE

/**
 * Pass by Value vs. Pass by Reference
 */

// Pass by Value
// Primitive data types (e.g., numbers, strings, booleans) are passed by value.
// This means that when a primitive is passed to a function, the function receives a copy of the value.
// Changes to the copied value do not affect the original value.

function increment(value) {
    value += 1;
    return value;
  }
  
  let num = 10;
  let newNum = increment(num);
  
  console.log(num); // Output: 10 (original value is unchanged)
  console.log(newNum); // Output: 11 (new value returned by the function)
  
  // Pass by Reference
  // Objects and arrays are passed by reference.
  // This means that when an object or array is passed to a function, the function receives a reference to the original object or array.
  // Changes to the object or array inside the function will affect the original object or array.
  
  function updatePerson(person) {
    person.age += 1;
  }
  
  let person = { name: 'Alice', age: 30 };
  updatePerson(person);
  
  console.log(person.age); // Output: 31 (the original object is modified)
  
  // Example with Arrays
  function addElement(arr, element) {
    arr.push(element);
  }
  
  let numbers = [1, 2, 3];
  addElement(numbers, 4);
  
  console.log(numbers); // Output: [1, 2, 3, 4] (the original array is modified)
  
