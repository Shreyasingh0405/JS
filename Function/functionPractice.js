// 1. Write a function that takes two numbers as arguments and returns their sum.

function add(a, b) {
    return a + b
}
const result = add(2, 3);
console.log(result);

// 2. Write a function that takes a string and returns its length.

function getLength(str) {
    return str.length
}
const res = getLength("hellou")
console.log(res);


// 3. Write a function that checks if a number is even.

function isEven(num) {
    if (num % 2 == 0) {
        console.log("num is even")
    } else {
        console.log("num is odd")
    }
}
isEven(9)

// 4. Write a function that takes an array of numbers and returns the largest number.

//1st method
function findMax(arr) {
    let max = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}
const maxNum = findMax([1, 2, 3, 4, 5, 6, 10, 27, 15, 12])
console.log(maxNum)

//2nd method
function findMax(arr) {
    return Math.max(...arr);
}

const Num = findMax([1, 2, 3, 4, 5, 6]);
console.log(Num);

//3rd method
function findMax(arr) {
    return arr.reduce((max, current) => (current > max ? current : max), arr[0]);
}
const Num1 = findMax([1, 2, 3, 4, 5, 63]);
console.log(Num1);

//4th method
function findMax(arr) {
    return arr.sort((a, b) => b - a)[0];
}

const maxNum1 = findMax([1, 2, 3, 49, 5, 6]);
console.log(maxNum1);


// 5. Write a function that reverses a string.

function reverseString(str) {
    let reversed = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed
}
const rev = reverseString("he llo")
console.log(rev, "check")
//method 2
function reverseString(str) {
    return str.split('') // Convert the string to an array of characters
        .reverse() // Reverse the array
        .join(''); // Join the array back into a string
}

const rev1 = reverseString("ram hii");
console.log(rev1);

// 6. Write a function that calculates the factorial of a number using recursion.

// Method 1: Recursive Approach
function factorial(n) {
    if (n <= 1) {
        return 1; // Base case: factorial of 0 or 1 is 1
    }
    return n * factorial(n - 1); // Recursive case
}

console.log(factorial(5)); // Output: 120

// Method 2: Iterative Approach
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i; // Multiply result by current number
    }
    return result;
}

console.log(factorial(5)); // Output: 120


// 7. Write a function that accepts an array and returns a new array with all duplicate values removed.

// Method 1: Using Set
function removeDuplicates(arr) {
    return [...new Set(arr)]; // Convert array to a Set to remove duplicates, then convert back to array
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]

// Method 2: Using filter and indexOf
function removeDuplicates(arr) {
    return arr.filter((value, index, self) => self.indexOf(value) === index); // Filter array to keep unique values only
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]

//method3: Using Loop

function removeDuplicates(arr) {
    let uniqueArray = []; // Initialize an empty array to store unique values

    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false; // Flag to check if the current element is a duplicate

        for (let j = 0; j < uniqueArray.length; j++) {
            if (arr[i] === uniqueArray[j]) { // Check if the current element already exists in uniqueArray
                isDuplicate = true; // Set flag to true if duplicate is found
                break; // Exit the inner loop as we found a duplicate
            }
        }

        if (!isDuplicate) {
            uniqueArray.push(arr[i]); // Add the element to uniqueArray if it's not a duplicate
        }
    }

    return uniqueArray; // Return the array with duplicates removed
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]


// 8. Write a function that takes an array of numbers and returns the sum of all the numbers.

// Method 1: Using reduce
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0); // Sum all elements in the array
}

console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15

// Method 2: Using a Loop
function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num; // Add each number to the sum
    }
    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15


// 9. Write a function that takes an array of numbers and returns a new array with each number squared.

// Method 1: Using map
function squareArray(arr) {
    return arr.map(num => num * num); // Square each number using map
}

console.log(squareArray([1, 2, 3, 4, 5])); // Output: [1, 4, 9, 16, 25]

// Method 2: Using a Loop
function squareArray(arr) {
    let squaredArray = [];
    for (let num of arr) {
        squaredArray.push(num * num); // Square each number and add to the new array
    }
    return squaredArray;
}

console.log(squareArray([1, 2, 3, 4, 5])); // Output: [1, 4, 9, 16, 25]


// 10. Write a function that takes a number and returns whether it is a prime number.

// Method 1: Basic Approach
function isPrime(num) {
    if (num <= 1) return false; // 0 and 1 are not prime numbers
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // If divisible by any number other than 1 and itself, not prime
    }
    return true;
}

console.log(isPrime(7)); // Output: true
console.log(isPrime(10)); // Output: false

// Method 2: Using a Helper Function
function isPrime(num) {
    if (num <= 1) return false; // 0 and 1 are not prime numbers

    function checkDivisibility(n) {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false; // If divisible, not prime
        }
        return true;
    }

    return checkDivisibility(num);
}

console.log(isPrime(7)); // Output: true
console.log(isPrime(10)); // Output: false

//method 3 using loop
function isPrime(num) {
    if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
    if (num <= 3) return true;  // 2 and 3 are prime numbers

    // Check for divisibility by 2 and 3
    if (num % 2 === 0 || num % 3 === 0) return false;

    // Check for factors from 5 to the square root of num
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true; // If no factors were found, num is prime
}

// Test cases
console.log(isPrime(7));  // Output: true
console.log(isPrime(10)); // Output: false
console.log(isPrime(13)); // Output: true
console.log(isPrime(20)); // Output: false
