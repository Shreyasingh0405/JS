// Composition vs. Inheritance in JavaScript

/*
Inheritance:
Inheritance is a mechanism where one class (subclass/child) inherits properties and methods from another class (superclass/parent). 
It is useful when there is a clear "is-a" relationship between classes.

Example:
*/

class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Dog extends Animal {
    bark() {
      console.log(`${this.name} barks.`);
    }
  }
  
  const dog = new Dog('Rex');
  dog.speak(); // Rex makes a noise.
  dog.bark();  // Rex barks.
  

  class check{
    constructor(work){
      this.work = work;
    }
    workCheck(){
      console.log(`${this.work} done`)
    }
  }
  class heavy extends check{
    pressure(){
      console.log(`${this.work}need to handle`)
    }
  }
  const final= new heavy("checking")
  final.workCheck();
  final.pressure()
  /*
  In this example, Dog inherits from Animal. 
  Dog is a type of Animal and gains all properties and methods of Animal.
  
  Composition:
  Composition is a design principle where objects are composed of other objects, allowing for the reuse of code and flexible design. 
  It is useful for modeling complex behavior where multiple components work together.
  
  Example:
  */
  
  class Engine {
    start() {
      console.log('Engine starts.');
    }
  }
  
  class Car {
    constructor(make) {
      this.make = make;
      this.engine = new Engine(); // Car has an Engine
    }
  
    drive() {
      this.engine.start(); // Delegates to Engine
      console.log(`${this.make} drives.`);
    }
  }
  
  const myCar = new Car('Toyota');
  myCar.drive(); // Engine starts. Toyota drives.
  
  /*
  In this example, Car uses composition by including an Engine object. 
  Car has an Engine, but it is not an Engine. The Engine is used to provide functionality to the Car.
  
  Key Differences:
  1. **Inheritance**: Establishes an "is-a" relationship. Changes in the base class affect derived classes. 
  2. **Composition**: Establishes a "has-a" relationship. Components can be changed or extended independently without affecting other parts.
  
  Choosing between composition and inheritance depends on the design requirements and how you want to model the relationships between objects.
  */
  