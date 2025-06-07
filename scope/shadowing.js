//Shadowing in programming, particularly in JavaScript and other languages, occurs when a variable declared within a certain scope (like a block, function, or inner scope) has the same name as a variable in an outer scope. This inner variable "shadows" the outer variable, effectively blocking access to the outer variable within that scope.


var a = 90;
let b = 88890;
const c = 78789;
{
    var a = 10; let b = 90; const c = 990
    console.log(a)
    console.log(b);
    console.log(c);
};
console.log(a);
console.log(b);
console.log(c);

//illegal shadowing
// let f =90     //error syntax error
// {
//     var f = 67
//     console.log(f)
// }
// console.log(f)


let k = 23
{
    let k = 90
    console.log(k)
}
console.log(k)

var ka = 23
{
    var ka = 90
    console.log(ka)
}
console.log(ka)




// 4. Shadowing of variables using var, let and const.

// 5. The shadow should not cross the scope of original otherwise it will give error.
// 6. shadowing let with var is illegal shadowing and gives error.
// 7. var value is stored in nearest outer function or global scope and hence can be accessed outside block as well whereas same is not the case with let and const.
// Variable shadowing occurs when a variable declared in an inner scope has the same name as a variable in an outer scope, effectively hiding the outer variable within that scope.

// Example 1: 
let x = 10; // Outer scope variable
function example() {
  let x = 20; // Inner scope variable, shadows outer 'x'
  console.log(x); // Prints 20
}
 example(); //function call
console.log(x); // Prints 10

// Example 2: 
// console.log(a); //hoisting
// var a = 9;
// console.log(a);
// {
//  var a = 10;  //overwrite within same GEC , both var 'a' is pointing to same variable
//  console.log(a)
// }
// console.log(a);

// Output:
// Undefined
// 9
// 10
// 10

// variables declared with var are function-scoped or globally scoped, but they are not block-scoped like variables declared with let or const. So, the var a declared inside the block {} will override the outer var a declaration, and the value of a will be 10 when logged outside the block.

// var variable of function scoped overwrites the value of Global Scoped variable.

// Scope for arrow function is also same!

