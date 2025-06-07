const arr = [2,3,4,5]


//Map

function binary(x){
    return x.toString(2)
}

const result= arr.map(binary)

console.log(result)


const output= arr.map((x)=>x.toString(2))
console.log(output)



// filter

const filterOutput = arr.filter((isodd=>(isodd%2)))
console.log(filterOutput)



// reduce

// normal way
// sum
function sumOfArray(){
let sum =0
for(let i=0;i<arr.length;i++){
    sum=arr[i]+sum
}
return sum
}
console.log(sumOfArray())



const resultReduce= arr.reduce(function(acc,curr){
   return acc=curr+acc
},0)

console.log(resultReduce)





const users = [
    { firstName: "akshay", lastName: "saini", age: 26 },
    { firstName: "donald", lastName: "trump", age: 75 },
    { firstName: "elon", lastName: "musk", age: 50 },
    { firstName: "deepika", lastName: "padukone", age: 26 },
  ];
  
  const output1 = users.reduce(function (acc, curr) {
    if (acc[curr.age]) {
      acc[curr.age] = ++acc[curr.age];
    } else {
      acc[curr.age] = 1;
    }
    return acc;
  }, {});
  
  console.log(output1);



  //q1. find firstname which having age >30 
  