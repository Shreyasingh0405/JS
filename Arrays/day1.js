// // 1. How do you add the element 5 to the end of the array [1, 2, 3, 4]?

// let array1 = [1,2,3,4]
// array1.push(5)
// console.log(array1)



// // 2. How do you add the element 0 to the beginning of the array [1, 2, 3, 4]?
// let array2 = [1,2,3,4]
// array2.unshift(0)
// console.log(array2)


// // 3. How do you add the element 'a' at index 2 in the array ['x', 'y', 'z']?
// let array3 = ["x","y","z"]
// array3.splice(2,0,"a")
// console.log(array3)

// // 4. How do you add elements 100 and 200 to the end of the array [1, 2, 3]?
// let array4 = [1,2,3]
// array4.push(100,200)
// console.log(array4)

// // 5. How do you add the element 50 to the beginning of an empty array?
// array4.unshift[50]
// console.log(array4)

// // 6. How do you add the element 99 at the 3rd position in the array [10, 20, 30, 40]?
// const array6=[10, 20, 30, 40]
// array6.splice(3,0,99)
// console.log(array6)

// // 7. How do you add the array [7, 8] as a single element to the end of the array [1, 2, 3]?
// let array7=[1,2,3]
// let array8=[7,8]
// const array9 = array7.concat(array8)
// console.log(array9)

// // 8. How do you add the array [0, 1] as a single element to the beginning of the array [2, 3, 4]?
// let array = [2,3,4]
// let arrr = [0,1]
// let arrayResult = (...array(arr))

// // 9. How do you add elements 4 and 5 to the end of the array [1, 2, 3] using the spread operator?

// // 10. How do you add elements 'a' and 'b' to the beginning of the array ['c', 'd'] using the spread operator?



// // 11. How do you add the element 9 at the end of the array [1, 2, 3] using splice?

// let endArry = [1,2,3]
// endArry.splice(3,0,9)
// console.log(endArry)
// // 12. How do you add the element 0 at the beginning of the array [1, 2, 3] using splice?

// let beg = [1,2,3]
// beg.splice(0,0,0)
// console.log(beg)

// // 13. How do you add elements 4, 5, and 6 to the end of the array [1, 2, 3]?

// let end = [1,2,3]
// end.push(4,5,6)
// console.log(end)



// // 15. How do you attempt to add nothing to the end of the array [100, 200, 300] using push?

// let nonrepaete = [100,200,300]
// nonrepaete.push()
// console.log(nonrepaete)

// // 16. How do you add the string 'orange' to the beginning of the array ['apple', 'banana']?
// let fruits = ['apple', 'banana']
// fruits.unshift("orange")
// console.log(fruits)

// // 17. How do you attempt to add nothing to the beginning of the array [1, 2, 3] using unshift?

// let nothing = [1, 2, 3]
// nothing.unshift()
// console.log(nothing)

// // 18. How do you add element 3 to the end of the array [1, 2] and then add element 4?

// let last = [1,2]
// last.push(3,4)
// console.log(last)

// // 19. How do you add 1 to an empty array and then add 2 to the beginning?

// let empty = []
// empty.push(2,1)
// console.log(empty)

// // 20. How do you add the string 'a' at index 1 in the array ['x', 'y', 'z']?

// let indexA= ['x', 'y', 'z']
// indexA.splice(1,0,"a")
// console.log(indexA)

// // 21. How do you add elements 10 and 11 at index 1 in the array [5, 6, 7]?


// let index10= [5,6,7]
// index10.splice(1,0,10,11)
// console.log(index10)

// // 24. How do you add element 1 to the end of an empty array, then add 0 to the beginning?

// let arr = []
// let arrRes=arr.push(1)
// arrRes.unshift(0)
// console.log(arrRes)

// // 25. How do you add elements 'a', 'b', and 'c' at index 1 in the array [1, 2, 3]?
// let add = [1,2,3]
// let operat = add.splice(1,0,"a","b","c")
// console.log(operat)




// 1. Add 5 to the end of [1,2,3,4]
let array1 = [1, 2, 3, 4];
array1.push(5);
console.log(array1);

// 2. Add 0 to the beginning of [1,2,3,4]
let array2 = [1, 2, 3, 4];
array2.unshift(0);
console.log(array2);

// 3. Add 'a' at index 2 in ['x', 'y', 'z']
let array3 = ['x', 'y', 'z'];
array3.splice(2, 0, 'a');
console.log(array3);

// 4. Add 100 and 200 to the end of [1,2,3]
let array4 = [1, 2, 3];
array4.push(100, 200);
console.log(array4);

// 5. Add 50 to the beginning of an empty array
let array5 = [];
array5.unshift(50);
console.log(array5);

// 6. Add 99 at the 3rd position in [10,20,30,40]
const array6 = [10, 20, 30, 40];
array6.splice(3, 0, 99);
console.log(array6);

// 7. Add [7, 8] as a single element to the end of [1, 2, 3]
let array7 = [1, 2, 3];
let array8 = [7, 8];
array7.push(array8);
console.log(array7);

// 8. Add [0, 1] as a single element to the beginning of [2, 3, 4]
let array9 = [2, 3, 4];
let toAdd = [0, 1];
array9.unshift(toAdd);
console.log(array9);

// 9. Add 4 and 5 to the end of [1, 2, 3] using spread operator
let array10 = [1, 2, 3];
array10 = [...array10, 4, 5];
console.log(array10);

// 10. Add 'a' and 'b' to the beginning of ['c', 'd'] using spread operator
let array11 = ['c', 'd'];
array11 = ['a', 'b', ...array11];
console.log(array11);

// 11. Add 9 at the end of [1, 2, 3] using splice
let array12 = [1, 2, 3];
array12.splice(3, 0, 9);
console.log(array12);

// 12. Add 0 at the beginning of [1, 2, 3] using splice
let array13 = [1, 2, 3];
array13.splice(0, 0, 0);
console.log(array13);

// 13. Add 4, 5, 6 to the end of [1, 2, 3]
let array14 = [1, 2, 3];
array14.push(4, 5, 6);
console.log(array14);

// 15. Attempt to add nothing to the end of [100, 200, 300] using push
let array15 = [100, 200, 300];
array15.push();
console.log(array15);

// 16. Add 'orange' to the beginning of ['apple', 'banana']
let fruits = ['apple', 'banana'];
fruits.unshift('orange');
console.log(fruits);

// 17. Attempt to add nothing to the beginning of [1, 2, 3] using unshift
let array17 = [1, 2, 3];
array17.unshift();
console.log(array17);

// 18. Add element 3 to the end of [1, 2] and then add element 4
let array18 = [1, 2];
array18.push(3);
array18.push(4);
console.log(array18);

// 19. Add 1 to an empty array and then add 2 to the beginning
let array19 = [];
array19.push(1);
array19.unshift(2);
console.log(array19);

// 20. Add 'a' at index 1 in ['x', 'y', 'z']
let array20 = ['x', 'y', 'z'];
array20.splice(1, 0, 'a');
console.log(array20);

// 21. Add 10 and 11 at index 1 in [5, 6, 7]
let array21 = [5, 6, 7];
array21.splice(1, 0, 10, 11);
console.log(array21);

// 24. Add 1 to the end of an empty array, then add 0 to the beginning
let array24 = [];
array24.push(1);
array24.unshift(0);
console.log(array24);

// 25. Add 'a', 'b', and 'c' at index 1 in [1, 2, 3]
let array25 = [1, 2, 3];
array25.splice(1, 0, 'a', 'b', 'c');
console.log(array25);
