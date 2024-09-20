/* Classes
A class is like a blueprint for creating objects. It defines a template with properties (attributes) and methods (functions) that the objects created from the class will have.
In JavaScript, classes were introduced in ES6 (ECMAScript 2015). They provide a clear syntax for creating objects and working with inheritance.
Even though the syntax is different, under the hood, JavaScript classes are built on top of the existing prototypal inheritance model.
 */
class Car {
    // Constructor method to initialize properties
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
    // Method to describe the car
    getDescription() {
      return `${this.year} ${this.make} ${this.model}`;
    }
  }

  /* Objects
An object is an instance of a class. When you create an object from a class, you're creating a specific example of that class with its own unique properties and behaviors.
Objects in JavaScript can hold data in the form of properties and behavior in the form of methods.
 */

// Creating an instance of the Car class
const myCar = new Car('Toyota', 'Corolla', 2021);

// Accessing the method of the object
console.log(myCar.getDescription()); // Outputs: 2021 Toyota Corolla
  
//keywords:-
/* In the context of classes in JavaScript, a constructor is a special method used for initializing objects created from a class. The constructor is automatically called when a new instance of the class is created.

1. this is a reference to the object that is currently being manipulated.
2. Inside the constructor, this refers to the newly created object.
3. Inside methods, this refers to the object on which the method was called.
4. Binding Context: The value of this depends on how the function is called.
 */

class man{
    constructor(name,height){
        this.name=name;
        this.height=height;
        }
    manData(){
        return `${this.name} ${this.height}`
    }
}
const data = new man("shree",2.5)
console.log(data.manData());