// 1. **What is the `map()` function in JavaScript?**
//The `map()` function creates a new array by applying a callback function to each element of the original array.

// 2. **How does the `map()` function differ from `forEach()` in JavaScript?**
// map()` returns a new array containing the results of calling a function on every element in the original array, while `forEach()` executes a function for each array element but does not return a new array.

// 3. **What does the `map()` method return after execution?**

//`map()` returns a new array with the transformed values after applying the provided callback function to each element.

// 4. **What arguments can be passed to the callback function used in `map()`?**

// The callback function can take three arguments:
//      1. `element` (the current element being processed)
//      2. `index` (the index of the current element)
//      3. `array` (the array that `map()` was called on)

// 5. **Does `map()` modify the original array, or does it return a new array?**

// `map()` does **not** modify the original array. It returns a new array with the transformed elements.

// 6. **Can you explain the syntax of the `map()` method?**

//  array.map(callback(element, index, array), thisArg)
//      ```
//      - `callback`: Function that is executed for each element in the array.
//      - `thisArg`: Optional. Value to use as `this` inside the callback function.

// 7. **How does `map()` handle undefined or empty elements in an array?**
// `map()` calls the callback function for every element, including `undefined`. However, for empty slots (i.e., sparse arrays), `map()` will skip over those slots.

// 8. **What will the following code output?**
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled);

// ### Intermediate Level

// 1. **How can you use `map()` with objects inside an array?**
// You can access and transform the properties of objects inside an array using `map()`.
// For example:
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
];
const names = users.map(user => user.name);
console.log(names); // ["Alice", "Bob"]

// 2. **What happens if the `callback` function in `map()` doesn’t return a value?**

//    - If the `callback` function doesn’t return a value (or returns `undefined`), the corresponding position in the new array will be `undefined`.
//      const arr = [1, 2, 3];
//      const result = arr.map(x => { x * 2; });
//      console.log(result); // [undefined, undefined, undefined]


// 3. **How do you chain `map()` with other array methods, like `filter()` or `reduce()`?**

//    - You can chain `map()` with other methods like this:
const numbers1 = [1, 2, 3, 4, 5];
const evenDoubled = numbers1.filter(n => n % 2 === 0).map(n => n * 2);
console.log(evenDoubled); // [4, 8]

// 4. **What is the role of the optional `thisArg` parameter in the `map()` method?**

//    - The `thisArg` is an optional parameter that defines the value of `this` inside the callback function. You can set a specific context (such as an object) for `this` in the callback function.

// 5. **How can you use `map()` to iterate over and transform a two-dimensional array?**

//    - You can use nested `map()` calls to iterate over a 2D array:

const matrix = [[1, 2], [3, 4]];
const doubledMatrix = matrix.map(row => row.map(num => num * 2));
console.log(doubledMatrix); // [[2, 4], [6, 8]]

// ### Advanced Level

// 1. **How can you optimize the use of `map()` when working with large datasets?**

// - To optimize, consider using `map()` only when necessary and avoid unnecessary operations inside the callback. For very large datasets, consider using generators or `for` loops for better performance.

// 2. **What is the time complexity of the `map()` function in JavaScript?**

//    - The time complexity of `map()` is **O(n)**, where `n` is the number of elements in the array. This is because it needs to process each element in the array exactly once.

// 3. **What are the performance differences between `map()` and traditional loops?**

//    - `map()` is typically slower than traditional loops (like `for` or `while` loops) because it creates a new array and may have some overhead. However, `map()` provides better readability and a more functional programming approach.

