// 1.
let a1 = 5;
let b1 = a1;
b1 = 10;
console.log(a1, b1); //  5,10
//Reason primitive datatype donot take reference it copy the value so here any changement in b1 donot affect a1 so initially value is 5 but we update as 10 so a1=5 and b1=10

// 2.
let arr1_1 = [1, 2];
let arr2_1 = arr1_1;
arr2_1.push(3);
console.log(arr1_1, arr2_1); // ?

// arr1_1 = [1,2,3]
// arr2_1 = [1,2,3]    reason non primitive data type and array is reference type so its value will change in both .

// 3.
let arr1_2 = [1, 2];
let arr2_2 = [...arr1_2];
arr2_2.push(3);
console.log(arr1_2, arr2_2); // 

// arr1_1 = [1,2,3]
// arr2_1 = [1,2,3]    reason non primitive data type and array is reference type so its value will change in both .


// 4.
const obj1 = { a: 1 };
const obj2 = obj1;
obj2.a = 2;
console.log(obj1.a); // ?

// 5.
function update1(num1, arr1) {
  num1 += 10;
  arr1.push(4);
}
let x1 = 10;
let y1 = [1, 2, 3];
update1(x1, y1);
console.log(x1, y1); // ?

// 6.
var a2 = 10;
function test1() {
  console.log(a2);
  var a2 = 20;
}
test1(); // ?

// 7.
console.log(a3);
let a3 = 5; // ?

// 8.
for (var i1 = 0; i1 < 3; i1++) {
  setTimeout(() => console.log(i1), 100);
}
// What will be printed?

// 9.
for (let i2 = 0; i2 < 3; i2++) {
  setTimeout(() => console.log(i2), 100);
}
// Output?

// 10.
let x2;
console.log(typeof x2);
x2 = null;
console.log(typeof x2); // ?

// 11.
let a4 = {};
let b4 = a4;
a4 = {};
console.log(a4 === b4); // ?

// 12.
let a5 = [1, 2, 3];
let b5 = a5;
b5 = [4, 5, 6];
b5.push(7);
console.log(a5, b5); // ?

// 13.
let a6 = 1;
let b6 = a6;
b6++;
console.log(a6, b6); // ?

// 14.
function foo1(a7 = 1, b7 = a7 + 1) {
  console.log(a7, b7);
}
foo1(5); // ?

// 15.
var a8 = 10;
(function() {
  console.log(a8);
  var a8 = 20;
})();
// What is printed?

// 16.
const arr3 = [1, 2];
arr3 = [3, 4];
console.log(arr3); // ?

// 17.
let a9 = { x: 1 };
let b9 = { x: 1 };
console.log(a9 === b9); // ?

// 18.
let a10 = null;
let b10;
console.log(a10 == b10);
console.log(a10 === b10); // ?

// 19.
var a11 = 5;
let b11 = 10;
{
  var a11 = 20;
  let b11 = 30;
}
console.log(a11, b11); // ?

// 20.
function test2() {
  console.log(x3);
  let x3 = 10;
}
test2(); // ?

// 21.
console.log(typeof foo2);
var foo2 = 123; // ?

// 22.
console.log(typeof bar2);
let bar2 = 456; // ?

// 23.
let a12 = 10;
function change2() {
  a12 = 20;
}
change2();
console.log(a12); // ?

// 24.
let a13 = [1, 2, 3];
let b13 = a13;
b13.pop();
console.log(a13); // ?

// 25.
const obj3 = { a: 1 };
Object.freeze(obj3);
obj3.a = 2;
console.log(obj3.a); // ?
