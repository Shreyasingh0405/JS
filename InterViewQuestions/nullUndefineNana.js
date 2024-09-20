let x
console.log(x)
x=null
console.log(x)

typeof null; // "object" (not "null" for legacy reasons)
typeof undefined; // "undefined"
null === undefined; // false
console.log(null == undefined); // true
null === null; // true
null == null; // true
!null; // true
Number.isNaN(1 + null); // false
Number.isNaN(1 + undefined); // true
console.log(0==null)
console.log(1+null)
console.log(1+undefined)