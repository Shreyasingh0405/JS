/*
 * Encapsulation in JavaScript (OOP)
 * 
 * Definition:
 * Encapsulation is the concept of bundling data (attributes) and methods (functions) that operate on that data into a single unit, usually a class. It restricts direct access to some of an object's components, meaning that the internal representation of an object is hidden from the outside. This is typically done to protect the object's data from being altered or accessed directly in a way that could lead to unintended consequences.
 * 
 * Key Points:
 * 1. Private and Public Members: Encapsulation allows you to define private and public 
 *    members within a class. Private members are not accessible from outside the class, 
 *    while public members are.
 * 2. Private Members: Use the `#` symbol before a variable name to make it private.
 * 3. Public Members: Public members are defined without the `#` symbol and can be accessed 
 *    outside the class.
 */

// Example: Encapsulation in JavaScript

class Person {
    // Private field (Encapsulated)
    #name;

    constructor(name, age) {
        // Initialize private and public fields
        this.#name = name; // private
        this.age = age;    // public
    }

    // Public method to get the private field
    getName() {
        return this.#name;
    }

    // Public method to set the private field
    setName(newName) {
        this.#name = newName;
    }
}

// Example usage
const person = new Person('John', 30);

// Accessing public member
console.log(person.age); // Output: 30

// Accessing private member directly (This will cause an error)
// console.log(person.#name); // SyntaxError: Private field '#name' must be declared in an enclosing class

// Accessing private member through a public method
console.log(person.getName()); // Output: John

// Modifying private member through a public method
person.setName('Jane');
console.log(person.getName()); // Output: Jane

/*
 * Benefits of Encapsulation:
 * 1. Data Hiding: Encapsulation hides the internal state of the object and only exposes
 *    a controlled interface, making it easier to change the implementation without 
 *    affecting outside code.
 * 2. Improved Security: By preventing unauthorized access to sensitive data, encapsulation
 *    improves the security of the code.
 * 3. Maintainability: Helps in maintaining the code, as changes to the internal implementation
 *    do not affect other parts of the codebase that rely on the public interface.
 * 4. Flexibility: Allows the flexibility to change or extend the object's behavior without
 *    modifying the external code that uses it.
 */
