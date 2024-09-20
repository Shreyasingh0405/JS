//sort method & reverse method

let array1 = [4,9,7,6,2,1]
array1.sort()
array1.reverse()
console.log(array1)

//map & foreACH
 
let array2= [1,2,3,4,5,6]
let result=array2.map((items)=>items*2)
console.log(result)

array2.forEach((e)=>{
console.log(e+1);
}
)

//Destructuring:- assigning each element of the array in the single variable

let fruits=["apple","mango","orange"]
 const[abc,bcd,kll]=fruits
console.log(abc);
