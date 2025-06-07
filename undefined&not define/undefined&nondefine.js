//Undefined = allocated memoiry but having a placeholder initialize as undefine 
// Not a define = not allocate any memory


// 1. Undefined is an Special Keyword and Placeholder Which is kept inside the Variable until some Values are not defined to it. It will stay inside the variables
//  if  no value is not Assigned.
// 2. undefined!=not defined, Because undefined means variable is declared but no value is Assigned and not defined means Variable is not even declared.
// 3. JS is an Loosely Typed Language or Weakly Typed Language, You can Use same variable to store String, Integer, Boolean type Values in same.
// Example: 
var a;
console.log(a);
a=10;
console.log(a);
a="hello JS";
console.log(a);