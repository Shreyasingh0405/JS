// Inheritance in JavaScript: `extends` and `super` keywords

// Definition:
// Inheritance allows one class (the child class) to inherit properties and methods from another class (the parent class).
// This promotes code reuse and creates a hierarchical class structure.

// Usage of `extends` keyword:
// The `extends` keyword is used to create a subclass that inherits from a superclass. 
// The child class inherits all properties and methods of the parent class and can also add its own properties and methods.

// Usage of `super` keyword:
// The `super` keyword is used to call the constructor or methods of the parent class from within the child class.
// It allows the child class to extend or override functionality from the parent class.

// Example Code:

// Parent class
class Animal {
    constructor(name) {
      this.name = name; // Initialize the name property
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`); // Default implementation
    }
  }
  
  // Child class that inherits from Animal
  class Dog extends Animal {
    constructor(name, breed) {
      super(name); // Call the parent class constructor with the name parameter
      this.breed = breed; // Initialize the breed property
    }
  
    // Override the speak method
    speak() {
      console.log(`${this.name}, a ${this.breed}, barks.`); // Specific implementation for Dog
    }
  }
  
  // Create an instance of the Dog class
  const myDog = new Dog('Rex', 'German Shepherd');
  
  // Call methods on the instance
  myDog.speak(); // Output: Rex, a German Shepherd, barks.
  
//Inheritance Types:
//Single Inheritance: A subclass inherits from only one superclass.
//Multiple Inheritance: A subclass inherits from multiple superclasses (not directly supported in JavaScript but possible through other means like mixins).  

class practice{
    constructor(subject){
        this.subject=subject
    }
    prac(){
        console.log(`${this.subject}`)
    }
}
class marks extends practice{
    constructor(subject,standard){
        super(subject);
        this.standard=standard
    }
    mark(){
        console.log(`juct checking ${this.subject} ${this.standard}`)
    }
}
const results= new marks("maths","2nd")
results.mark()