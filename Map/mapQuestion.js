//1. Square All Elements
//Given an array of numbers, use the map() function to return a new array where each number is squared.

const nums = [2, 4, 6, 8];
const square = nums.map((ele => ele * ele))
console.log(square)

// Output: [4, 16, 36, 64]

//2. Convert to Uppercase
// Given an array of strings, use the map() function to return a new array where each string is converted to uppercase.

const words = ["hello", "world"];
const upperCase = words.map((ele =>
    ele.toUpperCase()))
console.log(upperCase)

// Output: ["HELLO", "WORLD"]

// Extract Object Property
// Given an array of objects, use the map() function to return an array that contains only the values of a specific property in each object.

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];
const extract = people.map((ele => ele.name))
console.log(extract)

// Extract only names: Output: ["Alice", "Bob", "Charlie"]

// 4. Double the Numbers in an Array
// Given an array of integers, use the map() function to return an array where each integer is doubled.

const numsArray = [1, 2, 3, 4];
const double = numsArray.map((ele => ele * 2))
console.log(double)
// Output: [2, 4, 6, 8]

//5. Length of Each Word
// Given an array of words, use the map() function to return an array of the lengths of each word.
const wordsLength = ["apple", "banana", "cherry"];
const lengthWords = wordsLength.map((ele => ele.length))
console.log(lengthWords)

// Output: [5, 6, 6]

// 6. Convert Array of Booleans to Strings
// Given an array of booleans, use the map() function to return an array where each boolean is converted to a string "true" or "false".

const bools = [true, false, true];
const convert = bools.map((ele => ele + ""))
console.log(convert)
// Output: ["true", "false", "true"]


//7.7. Price with Tax
// You have an array of product objects, each with a price property. Use the map() function to return a new array where each product includes the price after adding a 10% tax.
const products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 }
];
const taxReturn = products.map((ele => {
    return {
        name: ele.name,
        price: ele.price + ele.price * 10 / 100
    }
}))
console.log(taxReturn)
// Output: [{ name: "Laptop", price: 1100 }, { name: "Phone", price: 550 }]

// 8. Capitalize First Letter
// Given an array of names, use the map() function to return a new array where the first letter of each name is capitalized.

const names = ["alice", "bob", "charlie"];
const capitalize = names.map((ele) => {
    return ele.charAt(0).toUpperCase() + ele.slice(1);
});
console.log(capitalize);

// Output: ["Alice", "Bob", "Charlie"]

// Filter Null or Undefined Values
// Given an array of mixed data types (numbers, strings, null, undefined), use the map() function to replace any null or undefined values with the string "N/A".

const data = [10, "hello", null, 20, undefined, "world"];
const value = data.map((ele => {
    if (ele == null || ele == undefined) {
        return ele = "N/A"
    } else {
        return ele
    }
}
));
console.log(value)

// Output: [10, "hello", "N/A", 20, "N/A", "world"]

// 10. Add Suffix to Each Element
// Given an array of strings, use the map() function to return a new array where a given suffix (e.g., "ly") is added to each string.

const wordsSuffix = ["quick", "lazy", "happy"];
const suffix = "ly";
const result = wordsSuffix.map((ele =>ele+suffix
))
console.log(result)
// Output: ["quickly", "lazily", "happily"]
