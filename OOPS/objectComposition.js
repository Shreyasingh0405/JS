/*Object composition is a design principle in Object-Oriented Programming (OOP) where complex objects are built from simpler, reusable components. Instead of relying on inheritance to create complex behaviors, object composition allows you to combine multiple objects to achieve the desired functionality. This approach models a "has-a" relationship rather than an "is-a" relationship.

Here’s a breakdown of object composition:

Key Concepts
"Has-a" Relationship: In composition, objects contain other objects. For example, a Car might have an Engine, rather than inheriting from an Engine. The Car class includes an instance of the Engine class.
Component Reusability: Components created for one class can be reused in other classes. This promotes code reuse and modular design.
Flexibility and Maintainability: Composition provides flexibility in modifying or replacing components without altering the classes that use them. This makes the system easier to maintain and extend.
Delegation: Instead of inheriting behavior from a parent class, a class using composition delegates tasks to its composed objects. This delegation helps in managing functionality in a modular way.
Example in JavaScript
Here's an example of object composition in JavaScript:

javascript
Copy code
// Define a component class
class Engine {
  start() {
    console.log('Engine starts.');
  }
}

// Define another component class
class Transmission {
  shift() {
    console.log('Transmission shifts.');
  }
}

// Main class using composition
class Car {
  constructor(make) {
    this.make = make;
    this.engine = new Engine(); // Car has an Engine
    this.transmission = new Transmission(); // Car has a Transmission
  }

  drive() {
    this.engine.start(); // Delegates to Engine
    this.transmission.shift(); // Delegates to Transmission
    console.log(`${this.make} drives.`);
  }
}

// Using the Car class
const myCar = new Car('Toyota');
myCar.drive(); // Engine starts. Transmission shifts. Toyota drives.
/*Benefits of Object Composition
Encapsulation: Each component is encapsulated and can be changed independently. For example, you can change the Engine class without affecting the Car class.
Avoids Inheritance Issues: Composition avoids the problems associated with deep and complex inheritance hierarchies. It helps in keeping the code more manageable.
Promotes Single Responsibility Principle: Each class focuses on a specific responsibility. For instance, Engine only handles engine-related operations, while Car handles overall vehicle operations.
Enhanced Flexibility: You can mix and match components to create different behaviors, making it easier to extend and maintain the system.
In summary, object composition is a powerful design technique that allows for the creation of complex objects by combining simpler, reusable components, leading to more modular and flexible code.
*/