// const obj = {
//     "name": "SHREYA",
//     "friend": {
//         "name": "aayush",
//         "children": {
//             "age2": 45,
//             "check":{
//                 "get":78
//             }
//         }
//     },
//     "occuption": () => {
//         return "25"
//     }
// }
// const obj2 = JSON.parse(JSON.stringify(obj));
// obj2.age = 24; // Adding a new property age to obj2
// obj2.friend.children.check = 96; // Modifying the friend object inside obj2
// console.log("obj2 -=-=-=-=-=>", obj2);
// console.log(obj)


//Write a function called getSquareArray that takes an array of numbers as input and returns a new array containing the squares of those numbers using the map() method.

function getSquareArray(arr){
     const result = arr.map(ele =>ele*ele)
     return result
}
console.log(getSquareArray([1,2,3,4,10]))

//Write a function called logArrayElements that takes an array of strings and logs each string to the console along with its index using the forEach() method.

function logArrayElements(arr) {
    arr.forEach((element,index) => {
      console.log(`${index}:${element}`)

    });
}
logArrayElements(["apple","banana"])

//Question: Write a function called filterAdults that takes an array of objects representing people (each object has a name and an age property) and returns a new array containing only the people who are 18 years old or older using the filter() method.

function filterAdults(people){
    const filterAdults = people.filter(person=>person.age>=18)
    return filterAdults
}
console.log(filterAdults([{ name: "Alice", age: 17 }, { name: "Bob", age: 18 }, { name: "Charlie", age: 22 }]))


//Write a function called calculateTotalPrice that takes an array of objects representing items in a shopping cart (each object has a price and quantity property) and returns the total price of all items using the reduce() method.
 function calculateTotalPrice(array){
      return array.reduce((accumutator,current)=>{
        return accumutator +(current.price*current.quantity)
      },0)
 }
 console.log(calculateTotalPrice([{ price: 10, quantity: 2 }, { price: 5, quantity: 3 }]))

 //Combination Question (map(), filter(), and reduce()):
//Question: How can map(), filter(), and reduce() be chained together to manipulate data in a functional programming style?
//Follow-up: Given an array of numbers, use map() to double the values, filter() to keep only the even numbers, and reduce() to sum the resulting values.

function Combination(array){
    const results=array.map(ele=>ele*2).filter(ele=>ele%2==0)
    return results.reduce((accumutator,current)=>{
        return accumutator+current
    })
}
console.log(Combination([1, 2, 3, 4, 5]))

