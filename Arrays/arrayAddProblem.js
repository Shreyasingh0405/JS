// 1. Add a Single Element to the End of an Array
// How do you add the element 5 to the end of the array [1, 2, 3, 4]?

let addElementAtEnd = [1, 2, 3, 4]
let arr = addElementAtEnd.push(5)
console.log(addElementAtEnd) //returns update value
console.log(arr) // returns length

// 2. Add Multiple Elements to the End of an Array
// How do you add the elements 6, 7, 8 to the end of the array [1, 2, 3, 4, 5]?

let multipleArray = [1, 2, 3, 4, 5];
multipleArray.push(6, 7, 8);
console.log(multipleArray);

// 3. Add a Single Element to the Beginning of an Array
// How do you add the element 0 to the beginning of the array [1, 2, 3, 4, 5]?

let addBegArray= [1,2,3,4,5];
let add=addBegArray.unshift(0);
console.log(add);
console.log(addBegArray);

// 4. Add Multiple Elements to the Beginning of an Array
// How do you add the elements -2, -1 to the beginning of the array [0, 1, 2, 3, 4, 5]?

addBegArray.unshift(-1,-2);
console.log(addBegArray)

// 5. Add an Element at a Specific Index in an Array
// How do you add the element 2.5 at the index 3 in the array [1, 2, 3, 4, 5]?

let addSpecificArray=[1,2,3,4,5];
let specific=addSpecificArray.splice(3,0,2.5);
console.log(addSpecificArray)
console.log(specific) //returns [] because deletecount is 0

// 6. Add Multiple Elements at a Specific Index in an Array
// How do you add the elements 3.5, 3.75 at the index 4 in the array [1, 2, 3, 4, 5]?

addSpecificArray.splice(4,0,3.5,3.75)
console.log(addSpecificArray);

// 7. Concatenate Two Arrays
// How do you concatenate the arrays [1, 2, 3] and [4, 5, 6]?

let arr1=[1,2,3];
let arr2=[4,5,6];
let result = arr1.concat(arr2);
console.log(result);

// 8. Add Elements from One Array to Another
// How do you add all elements of the array [4, 5, 6] to the end of the array [1, 2, 3]?

 let results = arr2.concat(arr1);
 console.log(results);

// 9. Insert an Array at a Specific Index in Another Array
// How do you insert all elements of the array [2.1, 2.2] at the index 2 in the array [1, 2, 3, 4, 5]?

let insertArray1=[1,2,3,4,5];
let a=[2.3,2.2]
insertArray1.splice(2,0,[2.1,2.2]);
//or
insertArray1.splice(2,0,a);
console.log(insertArray1);

// 10. Create a New Array by Adding an Element to Each Existing Element
// How do you create a new array where each element of the array [1, 2, 3] is added to the element 10?

let originalArray = [1, 2, 3];
let newArray = originalArray.map(element => element + 10);
originalArray.forEach((element,index,arr)=>{
    arr[index]=element+10
})
console.log(originalArray)
console.log(newArray);
