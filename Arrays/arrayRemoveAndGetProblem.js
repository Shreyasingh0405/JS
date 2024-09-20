// 1. Get the First Element of an Array
// How do you retrieve the first element of the array [1, 2, 3, 4, 5]?

//1st method
let element=[1,2,3,4,5];
let frstEle = element[0]
console.log(frstEle);
//2nd method
let firstElement = [1,2,3,4,5]
let retrieveResults=firstElement.at(2)
console.log(retrieveResults)

// 2. Get the Last Element of an Array
// How do you retrieve the last element of the array [1, 2, 3, 4, 5]?

let arrayElement = [1,2,3,4,5]
let resultElement=arrayElement[arrayElement.length-1];
console.log(resultElement);

let lastElement=[1,2,3,4,5]
let result=lastElement.at(-1)
console.log(result)

// 3. Get an Element at a Specific Index in an Array
// How do you get the element at index 2 from the array [1, 2, 3, 4, 5]?

let indexArrayb = [1,2,3,4,5];
let indexArray = indexArrayb[2]
console.log(indexArray);

// 4. Get a Subarray from an Array
// How do you get a subarray from the array [1, 2, 3, 4, 5] starting at index 2 and ending at index 4 (inclusive)?

let abc = [1,2,3,4,5];
let answer = abc.slice(2,5);
console.log(answer);

// 5. Remove the First Element of an Array
// How do you remove the first element from the array [1, 2, 3, 4, 5]?

let bdc = [1,2,3,4,5]
bdc.shift()
console.log(bdc);

// 6. Remove the Last Element of an Array
// How do you remove the last element from the array [1, 2, 3, 4, 5]?

bdc.pop()
console.log(bdc);

// 7. Remove an Element from a Specific Index in an Array
// How do you remove the element at index 2 from the array [1, 2, 3, 4, 5]?

let array = [1, 2, 3, 4, 5];
array.splice(2, 1); // Start at index 2 and remove 1 element
console.log(array); // Output: [1, 2, 4, 5]

