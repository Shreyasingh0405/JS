//Objects:- it is a datatype which allow us to store key value pairs. it is a real time entity like person is an object, animal is an object etc.
//objects having some propertiesd also like if person is an object then name,hobby,color etc is its properties.

let person={
    fullName:"Rajesh",
    hobbies:["badminton","listening Music","Painting"]
}
console.log(person.fullName)
console.log(person.hobbies[0])

//1.Object Literals:-
 let game={
    fullGameName:"hockey",
    NoOfPlayers:10
 }
 console.log(game)

 //2.object Construcrtor
 var abc=new Object()
 abc.fullName="abc",
abc.age=25
console.log(abc)

//3.object.create() method
var dec={
    age:0,
    title:" ",
    role:""
}
var men = Object.create(dec);
men.age=45,
men.role="player",
men.title="mr."
console.log(men)

//==========================***************===========================//

// 1. Create an Object
// Create an object representing a `car` with properties: `make`, `model`, and `year`. Initialize it with values for these properties.

let car ={
    make:"tata",
    model:"cvb",
    year:2025
}
console.log(car)
console.log(car.make);

// 2. Access and Update Properties
// Given an object `person` with properties `name` and `age`, write code to update the `age` property to `30`.

let person1 ={
    name:"harsh",
    age:25,
}
person1.age=30
console.log(person1);

// 3. Add a Method to an Object
// Given an object `user` with properties `firstName` and `lastName`, add a method `fullName()` that returns the full name of the user.
 let user={
    firstName:"chanchgal",
    lastName:"vadiya",
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    
 }
}
console.log(user.fullName());

// 4. Delete a Property
// Write code to remove the property `email` from an object `contact`.

var contact={
    email:"abc",
    nuber:7789964439
}
delete contact.email;
console.log(contact);

// 5. Iterate Over Properties
// Write code to print all the properties and their values of an object `profile` using a `for...in` loop.

const xyz={
    name:"kkl",
    age:90
}
for(let prop in xyz){
    console.log(prop+":"+ xyz[prop])
}

// 6. Destructuring Assignment
// Given an object `product` with properties `name`, `price`, and `category`, use object destructuring to extract the `name` and `price` properties into separate variables.

let product={
    name:"oil",
    price:"500rs",
    category:"ediable"
}
const {name,price,category}=product
console.log(name,price);

// 7. Default Values in Destructuring
// Given an object `settings` with properties `theme` and `notifications`, destructure the `theme` property with a default value of `'light'` and `notifications` with a default value of `true`.

// Define the settings object
const settings = {
    theme: 'dark',       
    notifications: false 
  };
  const { theme = 'light', notifications = true } = settings;
  console.log(theme);         
  console.log(notifications); 
  
// 8. Object Spread Operator
// Given two objects, `obj1` and `obj2`, merge them into a new object `mergedObj` using the spread operator.

let obj1={
    firstName:"shree"
}
let obj2={
    lastName:"singh"
}
const mergedObj={...obj1,...obj2};
console.log(mergedObj);

// 9. Object.keys()
// Write code to get an array of all property names of an object `student` and print it.

const student = {
    name: 'Subham',
    age: 21,
    major: 'Computer Science',
    university: 'XYZ'
  };
  const propertyNames = Object.keys(student);
  console.log(propertyNames);
  
// 10. Object.values()
// Write code to get an array of all property values of an object `employee` and print it.
  const propertNames = Object.values(student);
  console.log(propertNames);
  
// 11. Object.entries()
// Given an object `location`, use `Object.entries()` to get an array of key-value pairs and print it.

const properNames = Object.entries(student);
console.log(properNames);
