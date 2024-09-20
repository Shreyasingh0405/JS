/**
 * Abstraction in Object-Oriented Programming (OOP)
 * 
 * Abstraction is a fundamental concept in OOP that helps to reduce complexity
 * and increase efficiency by hiding the internal details of an object and
 * exposing only the relevant parts. It allows us to work with objects without
 * needing to understand their internal workings.
 * 
 * Key Concepts:
 * 
 * 1. **Objects and Methods**:
 *    - Objects can encapsulate both data and methods. Methods operate on the
 *      data and provide an interface to interact with the object without
 *      exposing the internal logic.
 * 
 *    Example:
 *    
 *    const car = {
 *        startEngine: function() {
 *            console.log("Engine started");
 *        },
 *        drive: function() {
 *            console.log("Car is moving");
 *        }
 *    };
 * 
 *    // Using the object without knowing the internal implementation
 *    car.startEngine();
 *    car.drive();
 *    
 * 
 * 2. **Classes and Encapsulation**:
 *    - Classes are blueprints for creating objects. They encapsulate data
 *      (properties) and methods (functions) that operate on the data. Internal
 *      details are hidden, and interaction is done through the class methods.
 * 
 *    Example:
 *    
 *    class Car {
 *        constructor(model) {
 *            this.model = model;
 *            this.engineStarted = false;
 *        }
 * 
 *        startEngine() {
 *            this.engineStarted = true;
 *            console.log(`${this.model} engine started`);
 *        }
 * 
 *        drive() {
 *            if (this.engineStarted) {
 *                console.log(`${this.model} is moving`);
 *            } else {
 *                console.log("Start the engine first!");
 *            }
 *        }
 *    }
 * 
 *    const myCar = new Car('Tesla');
 *    myCar.startEngine();  // Tesla engine started
 *    myCar.drive();        // Tesla is moving
 *    
 * 
 * 3. **Interfaces (Simulated in JS)**:
 *    - Although JavaScript does not have native interfaces, you can simulate
 *      them by defining expected structures that classes should follow.
 * 
 *    Example:
 *    
 *    class Animal {
 *        makeSound() {
 *            throw new Error('You must implement this method in a derived class');
 *        }
 *    }
 * 
 *    class Dog extends Animal {
 *        makeSound() {
 *            console.log('Woof Woof');
 *        }
 *    }
 * 
 *    class Cat extends Animal {
 *        makeSound() {
 *            console.log('Meow Meow');
 *        }
 *    }
 * 
 *    const myDog = new Dog();
 *    myDog.makeSound(); // Woof Woof
 * 
 *    const myCat = new Cat();
 *    myCat.makeSound(); // Meow Meow
 *    
 * 
 * Benefits of Abstraction:
 * - **Reduces Complexity**: Provides a simplified interface while hiding complex internal details.
 * - **Improves Code Reusability**: Allows reuse of code through abstract interfaces and encapsulated classes.
 * - **Increases Security**: Protects the internal state and implementation details from external access.
 * 
 * Abstraction helps in designing robust, maintainable, and scalable software systems by focusing on interactions and not implementation details.
 */
