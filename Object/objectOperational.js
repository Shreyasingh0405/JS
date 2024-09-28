//1. Write a function to merge two objects deeply.
function mergedObjects(obj1, obj2) {
    let result = {}
    const keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)])
    keys.forEach((key => {
        const value1 = obj1[key]
        const value2 = obj2[key]
        if (typeof value1 === "object" && value1 !== null && typeof value2 === "object" && value2 !== null) {
            result[key] = mergedObjects(value1, value2)
        } else if (value2 !== undefined) {
            result[key] = value2
        } else {
            result[key] = value1
        }
    }))
    return result
}
const obj1 = {
    a: 1,
    b: {
        c: 2,
        d: 3
    }
};

const obj2 = {
    b: {
        d: 4,
        e: 5
    },
    f: 6
};
const merged = mergedObjects(obj1, obj2);
console.log(merged);

// Implement a function to create a shallow copy of an object.

function shallow(obj) {
    let result = { ...obj }
    result.details.name = "shanaya"
    return result

}
const obj = {
    title: "students",
    details: {
        name: "mahi"
    }
}
console.log(shallow(obj))

// Create a function to find the keys in an object that have undefined values.

function undeValue(objectUni) {
    let result = {}
    Object.entries(objectUni).forEach((ele) => {
        const value = ele[1]
        if (value == undefined) {
            result[ele[0]] = value
        }
    })
    return result
}
const objectUni = {
    name: undefined,
    class: 2
}
console.log(undeValue(objectUni))

// Write a function to convert an object into an array of its key-value pairs.

function objectToArray(obj) {
    return Object.entries(obj);
}
const exampleObject = {
    name: 'Alice',
    age: 30,
    city: 'New York'
};
const resultArray = objectToArray(exampleObject);
console.log(resultArray);

// Implement a function that returns an object with the counts of each unique value in an array.
// Write a function to flatten a nested object.

function flattenObject(obj, parentKey = '', result = {}) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const newKey = parentKey ? `${parentKey}.${key}` : key; // Create new key
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                // If the value is an object, recurse into it
                flattenObject(obj[key], newKey, result);
            } else {
                // Otherwise, add the value to the result object
                result[newKey] = obj[key];
            }
        }
    }
    return result;
}

// Example usage:
const nestedObject = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3,
            f: 4
        }
    },
    g: 5
};

const flattened = flattenObject(nestedObject);
console.log(flattened);
