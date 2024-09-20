//Rest Operator (... in function parameters or destructuring):
// Collects multiple elements into a single array or object.
// Used in function parameters to gather all arguments into an array.
// Used in object destructuring to gather remaining properties into a new object.

// Rest Operator Example with Array Destructuring
const numbers = [1, 2, 3, 4, 5];
// Destructuring the first element and using the rest operator for the remaining elements
const [first, ...rest] = numbers;
console.log('First element:', first); // Output: First element: 1
console.log('Rest of the elements:', rest); // Output: Rest of the elements: [2, 3, 4, 5]



// Spread Operator (... in function calls, array literals, or object literals):
// Expands elements of an iterable or properties of an object into individual elements or properties.
// Used to expand arrays or objects, combine arrays or objects, or pass array elements as individual function arguments.

let array=[1,2,3,4,5]
let merge=[8,9,0,0]
console.log(...array)
let copying = [...array]
console.log(copying)
let mergedData = [...array,...merge]
console.log(mergedData)

