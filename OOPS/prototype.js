// Prototypes and Prototype Chain in JavaScript

// 1. What is a Prototype?
// Every JavaScript object has a property called `prototype` that points to another object.
// This prototype object serves as a template from which the original object inherits properties and methods.

// Example:
function Person(name) {
    this.name = name;
  }
  
  // Adding a method to Person's prototype
  Person.prototype.sayHello = function() {
    console.log('Hello, my name is ' + this.name);
  };
  
  // Creating a new instance of Person
  const alice = new Person('Alice');
  alice.sayHello(); // Output: Hello, my name is Alice
  
  // 2. Prototype Chain
  // The prototype chain is a series of links between objects and their prototypes.
  // When you try to access a property or method on an object, JavaScript first looks at the object itself.
  // If it doesn’t find the property there, it looks at the object's prototype, and so on, up the chain.
  
  // Example:
  console.log(alice.toString()); // Output: [object Object]
  
  // In this case, `toString` is not a method defined directly on `alice` or `Person.prototype`.
  // Instead, it is inherited from `Object.prototype`, which is the prototype of all objects in JavaScript.
  
  // 3. Visualizing the Prototype Chain
  
  // Consider the following example:
  function Animal(name) {
    this.name = name;
  }
  
  // Adding a method to Animal's prototype
  Animal.prototype.eat = function() {
    console.log(this.name + ' is eating');
  };
  
  function Dog(name) {
    Animal.call(this, name); // Call the parent constructor
  }
  
  // Inherit from Animal's prototype
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog; // Set the constructor property
  
  // Adding a method to Dog's prototype
  Dog.prototype.bark = function() {
    console.log(this.name + ' is barking');
  };
  
  // Creating a new instance of Dog
  const myDog = new Dog('Rex');
  myDog.eat(); // Output: Rex is eating
  myDog.bark(); // Output: Rex is barking
  
  // Prototype Chain for `myDog`:
  // myDog -> Dog.prototype -> Animal.prototype -> Object.prototype
  