//Hoisting:- It is a phenomenon in js in which we can access our code before its initialization.
//eg:-
getName()
//getName2()
console.log(getName2)
console.log(getName)
console.log(x)
var x =56
function getName(){
    console.log("hii")
}
var getName2 = ()=>{
    console.log("hey")
}
console.log(rev)
function rev(){
    console.log("hiiop")
}
rev()

console.log(y)
var y
//Let and const are also hoisted but there is a  scenarion came called TDZ.
//Temporal Dead Zone (TDZ) refers to the phase between the hoisting of a variable declaration and its actual initialization. During this time, any attempt to access the variable, results in a 'ReferenceError'. This concept is specific to variables declared with 'let' and 'const'.
//eg:-
//console.log(a)
let a =10
console.log(a)

//Types Of Error:-

//Syntax Error:- when syntax is incorrect,
//TypeError:- when declaration type is incorrect,
//ReferenceError:- when try to access the varible without initialization.