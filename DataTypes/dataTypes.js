//In JavaScript, data types are categorized into primitive and non-primitive (or reference) types.

//### Primitive Data Types
// Primitive types are immutable and compared by their value.


//1. **String**
//    - **Description**: Represents a sequence of characters.
//    - **Example**: 

let str = "Hello, World!";
console.log(typeof (str))


// 2. **Number**
//    - **Description**: Represents numeric values (both integers and floating-point numbers).
//    - **Example**:

let num = 42;
let floatNum = 3.14;
console.log(typeof num)
console.log(typeof floatNum)

// 3. **BigInt**
//    - **Description**: Represents whole numbers larger than `2^53 - 1` (useful for very large integers).
//    - **Example**:

let bigInt = 1234567890123456789012345678901234567890n;
console.log(typeof bigInt)

// 4. **Boolean**
//    - **Description**: Represents a logical value, either `true` or `false`.
//    - **Example**:

let isTrue = true;
let isFalse = false;
console.log(typeof isFalse)

// 5. **Undefined**
//    - **Description**: Represents a variable that has been declared but not assigned a value.
//    - **Example**:

let x;
console.log(typeof x)

// 6. **Null**
//    - **Description**: Represents the intentional absence of any object value. It is often used to signify that a variable has no value.
//    - **Example**:

let emptyValue = null;
console.log(typeof emptyValue)

// 7. **Symbol**
//    - **Description**: Represents a unique and immutable value used primarily as object property keys.
//    - **Example**:

let sym = Symbol('description');
console.log(typeof sym)

//### Non-Primitive Data Types
// Non-primitive types (objects) are mutable and compared by their reference in memory.

//1. Objects:-
// - **Description**: Represents a collection of key-value pairs. Objects are more complex and used to store collections of data.
//- **Example**:

let obj = { name: "Alice", age: 30 };
console.log(typeof obj)


// 2. **Array**
//    - **Description**: Represents a list-like collection of values.
//    - **Example**:

let numbers = [1, 2, 3, 4];
console.log(typeof numbers)
console.log(Array.isArray(numbers))
//    - **typeof**: `object` (but `Array.isArray(numbers)` can be used to check if it's an array)

// 3. **Date**
//    - **Description**: Represents a specific point in time.
//    - **Example**:

let now = new Date();
console.log(typeof now)

// 4. **RegExp**
//    - **Description**: Represents regular expressions used for pattern matching within strings.
//    - **Example**:

let regex = /ab+c/;
console.log(typeof regex)

//set
const set = new Set([1, 2, 3]);

//map
const weakMap = new WeakMap();
const weakSet = new WeakSet();



//NOTE


// ### What is **Reference** in JavaScript?

// * In JavaScript, **primitive values** (like numbers, strings, booleans) store the **actual value** in the variable.

//   * Example:


let a = 10;  // 'a' stores the value 10 directly
    let b = a; // 'b' gets a copy of 10
    b = b + 5;  // add 5 to b only

    console.log(b)
    console.log(a)





    
// * But **non-primitive values** (like objects, arrays, functions) store a **reference** to the actual data in memory — not the data itself.

//   * Example:

    let obj1 = { name: "Shreya" };  // obj1 stores a reference to the object in memory
    let obj2 = obj1;                 // obj2 stores the same reference, NOT a copy of the object

// ### Why do we use or have **References**?

// 1. **Efficiency**

//    * Objects and arrays can be large, so copying the entire data every time would be slow and memory-intensive.
//    * Instead, JavaScript stores and passes around the **address (reference)** where the data is stored — which is fast and efficient.

// 2. **Shared Access**

//    * When two variables hold the same reference, changing the data via one variable reflects when accessed from the other.
//    * This allows **sharing and modifying the same object or array** easily without duplication.

// ### Simple Example to Show Reference Behavior

let arr1 = [1, 2, 3];
let arr2 = arr1;  // arr2 references the same array as arr1
 arr2= [5,6,7]   // here arr2 is assigned a NEW array — no longer referencing arr1

arr2.push(4);

console.log(arr1);  // Output: [1, 2, 3, 4]
console.log(arr2);  // Output: [1, 2, 3, 4]


// Here, `arr1` and `arr2` both **reference the same array in memory**. So, modifying `arr2` affects `arr1`.


// ### Summary

// * **Reference** means the variable stores the location/address of data in memory, not the data itself.
// * Used for **non-primitive types** to save memory and improve performance.
// * Allows multiple variables to **access and modify the same data** easily.

