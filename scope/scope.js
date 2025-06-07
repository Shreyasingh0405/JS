// 1. Scope of a variable is directly dependent on the lexical environment.
// 2. Whenever an execution context is created, a lexical environment is created. Lexical environment is the local memory along with the lexical environment of its parent. Lexical as a term means in hierarchy or in sequence.
// 3. Having the reference of parent's lexical environment means, the child or the local function can access all the variables and functions defined in the memory space of its lexical parent.
// 4. The JS engine first searches for a variable in the current local memory space, if its not found here it searches for the variable in the lexical environment of its parent, and if its still not found, then it searches that variable in the subsequent lexical environments, and the sequence goes on until the variable is found in some lexical environment or the lexical environment becomes NULL.
// 5. The mechanism of searching variables in the subsequent lexical environments is known as Scope Chain. If a variable is not found anywhere, then we say that the variable is not present in the scope chain.






// What is Scope?

// The scope is the current context of execution  in which there is accessbility and visibilty of value and expression .
//  Outside the current context of the scope the values,varibles etc are not available for use.

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


// Things learned:
// 1. Code inside curly bracket is called block.
// 2. Multiple statements are grouped inside a block so it can be written where JS expects single statements like in if, else, loop, function etc.
// 3. Block values are stored inside separate memory than global. They are stored in block. (the reason let and const are called block scope)
// 

// Key Learnings

// Block is also known as Compound statements. It is used to combine the multiple statements together

// let & const are hoisted in a block scope. var is in global scope

// let and const variables are stored in block space, so it is called block-scoped but var variables can be accessed outside the block as it is stored in the Global object memory space, hence it is called Global scoped.

