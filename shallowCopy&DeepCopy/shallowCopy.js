// A shallow copy creates a new object, but for any nested objects inside, it only copies the reference. This means both the original and the copied object share the same nested objects. So, if you change a nested object in the copy, it also changes in the original."

// Original object with a nested object
let originalObject = {
    name: "Book",
    details: {
        author: "John",
        pages: 300
    }
};
// Create a shallow copy of originalObject
let shallowCopy = Object.assign({}, originalObject);
let spreadCopy = { ...originalObject };
spreadCopy.details.pages = 10000
console.log(spreadCopy)
// Modify the 'pages' property in the shallow copy
shallowCopy.details.pages = 900;
shallowCopy.details.author = "jame"

// Output both objects
console.log("Original Object:", originalObject);
console.log("Shallow Copy:", shallowCopy);



//DEEP COPY

// A deep copy creates a new object and recursively copies all nested objects, so the copy is completely independent of the original. Unlike a shallow copy, where nested objects are shared between the original and the copy, a deep copy ensures that changes made to the copy do not affect the original object.

let deepCopy = JSON.parse(JSON.stringify(originalObject))
deepCopy.details.author = "jammy"
console.log(originalObject);
console.log(deepCopy)

//lodash , deepcdlone( method)


//Write a function to deep clone an object in JavaScript.


function deepCopyAndModify(obj) {
    let deepCopy = JSON.parse(JSON.stringify(obj));
    deepCopy.details.author = "shree";
    console.log("Deep Copy:", deepCopy);
    console.log("Original Object:", obj);
}
obj = {
    subject: "book",
    details: {
        author: "jiya",
        price: 500
    }
};
deepCopyAndModify(obj);
console.log(deepCopy == deepCopyAndModify)

//Implement a function to check if two objects are deeply equal.
function areObjectsDeeplyEqual(obj1, obj2) {
    if (obj1 === obj2) return true;
    if (obj1 === null || obj2 === null || typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        return false;
    }
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false;
    for (const key of keys1) {
        if (!keys2.includes(key) || !areObjectsDeeplyEqual(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
}
let book1 = {
    title: "Harry Potter",
    author: "J.K. Rowling",
    notes: ["Great story!", "Loved the characters!"]
};

let book2 = {
    title: "Harry Potter",
    author: "J.K. Rowling",
    notes: ["Great story!", "Loved the characters!"]
};

let book3 = {
    title: "Harry Potter",
    author: "J.K. Rowling",
    notes: ["Interesting plot!"]
};
// Check deep equality
console.log(areObjectsDeeplyEqual(book1, book2)); // Outputs: true (same notes)
console.log(areObjectsDeeplyEqual(book1, book3)); // Outputs: false (different notes)
