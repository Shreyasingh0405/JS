/* LEXICAL ENVIRONMENT, SCOPE CHAIN AND SCOPE
1. Scope of a variable is directly dependent on the lexical environment.
2. Whenever an execution context is created, a lexical environment is created. Lexical environment is the local memory along with the lexical environment of its parent. Lexical as a term means in hierarchy or in sequence.
3. Having the reference of parent's lexical environment means, the child or the local function can access all the variables and functions defined in the memory space of its lexical parent.
4. The JS engine first searches for a variable in the current local memory space, if its not found here it searches for the variable in the lexical environment of its parent, and if its still not found, then it searches that variable in the subsequent lexical environments, and the sequence goes on until the variable is found in some lexical environment or the lexical environment becomes NULL.
5. The mechanism of searching variables in the subsequent lexical environments is known as Scope Chain. If a variable is not found anywhere, then we say that the variable is not present in the scope chain.
*/

function a() {
    var b = 190
    var m =87
    c()
    function c() {
        console.log(b)
        console.log(m)
    }
}
a()

/*
Closure :Function bundled with its lexical environment is known as a closure. Whenever function is returned, even if its vanished in execution context but still it remembers the reference it was pointing to. Its not just that function alone it returns but the entire closure and that's where it becomes interesting !!

uses:-
Data Encapsulation and Privacy: Create private variables and methods.
Function Factories: Generate functions with specific behaviors.
Memoization: Cache results of expensive function calls for performance optimization.
Maintaining State: Track and manage state across function calls.
Event Handlers and Callbacks: Maintain access to variables in event handlers and callbacks.

*/

function check() {
    const y = 89
function reCheck() {
        console.log(y)
    }
    return reCheck
}
const ggg=check()
ggg()