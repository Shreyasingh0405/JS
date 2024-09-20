// Design patterns are common solutions to recurring problems in software design. They can help make your code more flexible, maintainable, and scalable. Here's a brief overview of three common design patterns in JavaScript: Singleton, Factory, and Module patterns.

// ### 1. Singleton Pattern

// **Purpose:** Ensure that a class has only one instance and provide a global point of access to that instance.

// **How It Works:** The Singleton pattern restricts the instantiation of a class to one single instance. This is useful when exactly one object is needed to coordinate actions across the system.

// **Example:**

class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    this.data = "Some data";
    Singleton.instance = this;
  }
  
  getData() {
    return this.data;
  }
}

// Usage
const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2); // true
console.log(instance1.getData()); // "Some data"


// In this example, no matter how many times you instantiate the `Singleton` class, you always get the same instance.

// ### 2. Factory Pattern

// **Purpose:** Create objects without specifying the exact class of object that will be created.

// **How It Works:** The Factory pattern defines an interface for creating objects but allows subclasses to alter the type of objects that will be created. This is useful when you need to create different types of objects based on some conditions.

// **Example:**

class Car {
  constructor(model) {
    this.model = model;
  }
  drive() {
    console.log(`Driving a ${this.model}`);
  }
}

class Bike {
  constructor(model) {
    this.model = model;
  }
  ride() {
    console.log(`Riding a ${this.model}`);
  }
}

class VehicleFactory {
  static createVehicle(type, model) {
    switch (type) {
      case 'car':
        return new Car(model);
      case 'bike':
        return new Bike(model);
      default:
        throw new Error('Unknown vehicle type');
    }
  }
}

// Usage
const car = VehicleFactory.createVehicle('car', 'Toyota');
const bike = VehicleFactory.createVehicle('bike', 'Harley');

car.drive(); // "Driving a Toyota"
bike.ride(); // "Riding a Harley"


// Here, the `VehicleFactory` class is responsible for creating different types of vehicles based on the type passed.

// ### 3. Module Pattern

// **Purpose:** Encapsulate functionality and create modules with private and public parts.

// **How It Works:** The Module pattern helps to create a self-contained unit of code that can manage its own state and expose only the parts that are necessary. It helps in organizing code and preventing namespace pollution.

// **Example:**


const MyModule = (function() {
  let privateVar = 'I am private';
  
  function privateFunction() {
    console.log('I am private');
  }
  
  return {
    publicVar: 'I am public',
    publicFunction() {
      console.log('I am public');
    },
    getPrivateVar() {
      return privateVar;
    }
  };
})();

// Usage
console.log(MyModule.publicVar); // "I am public"
MyModule.publicFunction(); // "I am public"
console.log(MyModule.getPrivateVar()); // "I am private"
// MyModule.privateVar; // undefined
// MyModule.privateFunction(); // TypeError: MyModule.privateFunction is not a function


// In this example, `MyModule` uses an Immediately Invoked Function //Expression (IIFE) to create a module with both private and public members. The `privateVar` and `privateFunction` are encapsulated and cannot be accessed from outside, while `publicVar` and `publicFunction` are exposed.

// These patterns are fundamental in JavaScript and help in creating more structured and manageable code.