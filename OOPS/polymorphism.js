/**Polymorphism is one of the core concepts of Object-Oriented Programming (OOP) that allows objects of different classes to be treated as objects of a common superclass. In JavaScript, polymorphism is achieved through inheritance and method overriding.

Types of Polymorphism in JavaScript
Compile-time Polymorphism (Overloading):
JavaScript does not support method overloading by default (as seen in languages like Java or C++), where multiple methods have the same name but different parameters. Instead, you can achieve something similar using default parameters, the arguments object, or by checking the types of arguments passed to the function.
 */

function display(val) {
    if (typeof val === 'number') {
        console.log("Number: " + val);
    } else if (typeof val === 'string') {
        console.log("String: " + val);
    } else {
        console.log("Unknown type");
    }
}

display(42);      // Output: Number: 42
display("Hello"); // Output: String: Hello

/**Run-time Polymorphism (Overriding):
This is the more common form of polymorphism in JavaScript. It occurs when a subclass provides a specific implementation of a method that is already defined in its superclass.
 */
class Animal {
    sound() {
        console.log("Some generic sound");
    }
}

class Dog extends Animal {
    sound() {
        console.log("Bark");
    }
}

class Cat extends Animal {
    sound() {
        console.log("Meow");
    }
}

const myDog = new Dog();
const myCat = new Cat();

myDog.sound(); // Output: Bark
myCat.sound(); // Output: Meow

/*In the example above, the sound method is overridden in both the Dog and Cat classes. When we call sound() on an instance of Dog or Cat, the respective overridden method is executed.

Benefits of Polymorphism
Code Reusability: Polymorphism allows for using a single interface to represent different underlying forms (data types). This enables you to write more flexible and reusable code.
Simplifies Code: By using polymorphism, you can write code that works with objects of different types, reducing the need for multiple conditionals and making your code easier to maintain.
*/

class Payment {
    process() {
        console.log("Processing payment");
    }
}

class CreditCardPayment extends Payment {
    process() {
        console.log("Processing credit card payment");
    }
}

class PayPalPayment extends Payment {
    process() {
        console.log("Processing PayPal payment");
    }
}

function processPayment(payment) {
    payment.process();
}

const ccPayment = new CreditCardPayment();
const ppPayment = new PayPalPayment();

processPayment(ccPayment); // Output: Processing credit card payment
processPayment(ppPayment); // Output: Processing PayPal payment
