// Sum of Elements
// Write a function that takes an array of numbers and returns the sum of all the elements using forEach.

function sumArray(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element
    });
    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15

// Double the Values
// Write a function that takes an array of numbers and returns a new array with each value doubled using forEach.

function doubleArray(arr) {
    const doubled = [];
    arr.forEach((ele => {
        doubled.push(ele * 2)
    }))
    return doubled;
}
console.log(doubleArray([1, 2, 3])); // Output: [2, 4, 6]

