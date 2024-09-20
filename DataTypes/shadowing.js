//Shadowing in programming, particularly in JavaScript and other languages, occurs when a variable declared within a certain scope (like a block, function, or inner scope) has the same name as a variable in an outer scope. This inner variable "shadows" the outer variable, effectively blocking access to the outer variable within that scope.


var a=90;
let b =88890;
const c=78789;
{
var a=10;let b =90;const c =990
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


let k =23
{ let k =90
    console.log(k)
}
console.log(k)

var ka =23
{ 
    var ka =90
    console.log(ka)
}
console.log(ka)