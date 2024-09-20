// What is Scope?

// The scope is the current context of execution  in which there is accessbility and visibilty of value and expression . Outside the current context of the scope the values,varibles etc are not available for use.

// JavaScript has the following kinds of scopes:

// Global scope: The default scope for all code running in script mode.varible declare outside the any function.

var x=10
function glo(){
    console.log(x)
}
glo()
console.log(x)

// Module scope: The scope for code running in module mode.
//eg:-exporting and importing.

// Function scope: The scope created with a function.
function sco(){
    var x = 25
    console.log(x)
}
sco()
console.log(x)

//Block scope: The scope created with a pair of curly braces (a block).
{
    let y= 46
    console.log(y)
}
// console.log(y)
