// Call by Value
// In call by value, a copy of the actual value of the argument is passed to the function. Changes made to the parameter inside the function do not affect the argument outside the function. This is typically used for primitive data types like numbers, strings, and booleans.
// Characteristics:
// A copy of the actual value is passed.
// Changes to the parameter do not affect the original variable.
// Used primarily with primitive data types.

// Example:

function valueModify(x) {
    x = x + 5
    console.log(x)
}
let x = 9
console.log(x)
console.log(valueModify(x))


// call by reference, a reference (or address) to the actual value is passed to the function. Changes made to the parameter inside the function will affect the original variable outside the function. This is commonly used for objects and arrays in JavaScript.
// Characteristics:
// A reference to the actual value is passed.
// Changes to the parameter affect the original variable.
// Used primarily with objects and arrays.

function updateObject(obj) {
    obj.name = "Updated Name"; // Modify the property of the object
    console.log("Inside function:", obj); // Output the modified object
}

let myObj = { name: "Original Name" };
console.log("Before function call:", myObj); // Output: { name: 'Original Name' }
updateObject(myObj); // Call the function
console.log("After function call:", myObj); // Output: { name: 'Updated Name' }

//================================
//shallow,deep copy Vs call,referencevalue

// Definition:
// Call by Value: The function receives a copy of the variable's value. Changes to this copy do not affect the original variable.
// Call by Reference: The function receives a reference (or address) to the variable. Changes made to the reference affect the original variable.
// Shallow Copy: A new object is created, but it contains references to the nested objects, meaning the nested objects are not copied.
// Deep Copy: A new object is created along with new copies of all nested objects, resulting in a complete, independent copy.
// Modification:
// Call by Value: Changes do not affect the original variable.
// Call by Reference: Changes directly affect the original variable.
// Shallow Copy: Modifications to nested objects in the copied object affect the original object's nested objects.
// Deep Copy: Modifications to nested objects do not affect the original object.
// Memory Allocation:
// Call by Value: Allocates new memory for the copy of the value.
// Call by Reference: Does not allocate new memory for the reference.
// Shallow Copy: Allocates new memory for the outer object; nested objects remain shared references.
// Deep Copy: Allocates new memory for both the outer object and all nested objects.
// Usage:
// Call by Value: Generally used with primitive data types (e.g., numbers, strings).
// Call by Reference: Used with reference types (e.g., objects, arrays).
// Shallow Copy: Useful when you want to copy an object but can accept shared references for nested objects.
// Deep Copy: Used when you need a completely independent copy of an object and its nested structures.