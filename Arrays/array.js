//Array:- An array is a datatype which allows us to store multiple values in a single variables. We use Array because its helps us to structured our data.

//Methods of Add in array:-

// push() method:- use to add element of the array and returns length of the array
let arr1 = [1, 2, 3];
arr1.push(4, 5);
console.log(arr1); // Output: [1, 2, 3, 4, 5]

// // unshift() method
let arr2 = [1, 2, 3];
arr2.unshift(0);
console.log(arr2); // Output: [0, 1, 2, 3]

// // splice() method
let arr3 = [1, 2, 3];
arr3.splice(1, 0, 'a', 'b'); // At index 1, delete 0 elements, then add 'a' and 'b'
console.log(arr3); // Output: [1, 'a', 'b', 2, 3]

// // concat() method
let arr4 = [1, 2];
let arr5 = [3, 4];
let newArr1 = arr4.concat(arr5);
console.log(newArr1); // Output: [1, 2, 3, 4]

// // spread operator (...)
let arr6 = [1, 2, 3];
let newArr2 = [...arr6, 4, 5];
console.log(newArr2); // Output: [1, 2, 3, 4, 5]

// // Array.prototype.push.apply() method
let arr7 = [1, 2];
let arr8 = [3, 4];
Array.prototype.push.apply(arr7, arr8);
console.log(arr7); // Output: [1, 2, 3, 4]

//========================****************==========================//

// //Methods of get in the array-

// // filter() method
let arrs1 = [1, 2, 3, 4, 5];
let filteredArr = arrs1.filter(num => num > 2);
console.log(filteredArr); // Output: [3, 4, 5]

// // find() method
let arrs2 = [1, 2, 3, 4, 5];
let found = arrs2.find(num => num > 3);
console.log(found); // Output: 4

// // indexOf() method:The indexOf method searches for the specified value in the array and returns its index.

let arrs3 = [1, 2, 3, 4, 5];
let index1 = arrs3.indexOf(3);
console.log(index1); // Output: 2

// // slice() method
let arrs4 = [1, 2, 3, 4, 5];
let slicedArr = arrs4.slice(1, 3);
console.log(slicedArr); // Output: [2, 3]

// // map() method
let arrs5 = [1, 2, 3, 4, 5];
let mappedArr = arrs5.map(num => num * 2);
console.log(mappedArr); // Output: [2, 4, 6, 8, 10]

// // reduce() method:The reduce method accumulates a single result by applying a function to each element of the array.

let arrs6 = [1, 2, 3, 4, 5];
let sum = arrs6.reduce((total, num) => total + num, 0);
console.log(sum); // Output: 15

// // forEach() method:The forEach method iterates over each element in the array and executes the provided function for each element.

let arrs7 = [1, 2, 3, 4, 5];
arrs7.forEach(num => console.log(num));
arrs7.forEach((num,index,arr)=>{
  arr[index]=num*2
});
console.log(arrs7)

// // Output: 
// // 1
// // 2
// // 3
// // 4
// // 5

// // some() method
let arrs = [1, 2, 3, 4, 5];
let hasEven = arrs.some(num => num % 2 === 0);
console.log(hasEven); // Output: true

// // every() method
let arr9 = [1, 2, 3, 4, 5];
let allEven = arr9.every(num => num % 2 === 0);
console.log(allEven); // Output: false

// // includes() method
let arr10 = [1, 2, 3, 4, 5];
let includesThree = arr10.includes(3);
console.log(includesThree); // Output: true

//==========================******************===================//

// //Remove methods in Arrays:-

// // pop() method: Removes the last element from an array and returns that element.

let arrr1 = [1, 2, 3];
let lastElement = arrr1.pop();
console.log(arrr1); // Output: [1, 2]
console.log(lastElement); // Output: 3

// // shift() method: Removes the first element from an array and returns that element.

let arrr2 = [1, 2, 3];
let firstElement = arrr2.shift();
console.log(arrr2); // Output: [2, 3]
console.log(firstElement); // Output: 1

// // splice() method: Adds and/or removes elements from an array.

let arrr3 = [1, 2, 3, 4, 5];
let removedElements = arrr3.splice(1, 2,8); // At index 1, delete 2 elements
console.log(arrr3); // Output: [1, 4, 5]
console.log(removedElements); // Output: [2, 3]

// // filter() method: Creates a new array with all elements that pass the test implemented by the provided function.

let arrr4 = [1, 2, 3, 4, 5];
let filteredArrr = arrr4.filter(num => num > 2);
console.log(filteredArrr); // Output: [3, 4, 5]

// // remove specific element by value using filter()

let arrr5 = [1, 2, 3, 4, 5];
let valueToRemove = 3;
arrr5 = arrr5.filter(num => num !== valueToRemove);
console.log(arrr5); // Output: [1, 2, 4, 5]

// // remove specific element by value using indexOf() and splice()

let arrr6 = [1, 2, 3, 4, 5];
let index12 = arrr6.indexOf(3);
if (index12 !== -1) {
  arrr6.splice(index12, 1);
}
console.log(arr6); // Output: [1, 2, 4, 5]

// // Using delete operator (Note: This leaves an undefined hole in the array)

let arrr7 = [1, 2, 3, 4, 5];
delete arrr7[2];
console.log(arrr7); // Output: [1, 2, undefined, 4, 5]

// // Using pop() to remove multiple elements from the end
let arrr8 = [1, 2, 3, 4, 5];
arrr8.pop();
arrr8.pop();
console.log(arrr8); // Output: [1, 2, 3]

// // Using shift() to remove multiple elements from the beginning
let arrr9 = [1, 2, 3, 4, 5];
arrr9.shift();
arrr9.shift();
console.log(arrr9); // Output: [3, 4, 5]

// // remove specific element by value using a custom function

function removeElement(array, value) {
  const index = array.indexOf(value);
  if (index > -1) {
    array.splice(index, 1);
  }
  return array;
}

let arrr10 = [1, 2, 3, 4, 5];
removeElement(arrr10, 3);
console.log(arrr10); // Output: [1, 2, 4, 5]
