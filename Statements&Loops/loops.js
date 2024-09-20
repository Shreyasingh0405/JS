/**
 * Loops in JavaScript
 * 
 * Loops are used to execute a block of code repeatedly until a specified condition is met.
 * 
 * Types of Loops:
 * 1. For Loop
 * 2. While Loop
 * 3. Do-While Loop
 * 4. For-In Loop
 * 5. For-Of Loop
 */

// 1. For Loop
// Used when the number of iterations is known beforehand
for (let i = 0; i < 5; i++) {
    console.log('For Loop:', i);
  }
  
  // 2. While Loop
  // Used when the number of iterations is not known and the loop should continue until a specific condition is met
  let i = 0;
  while (i < 5) {
    console.log('While Loop:', i);
    i++;
  }
  
  // 3. Do-While Loop
  // Similar to the while loop, but the code block is executed at least once before the condition is tested
  let j = 0;
  do {
    console.log('Do-While Loop:', j);
    j++;
  } while (j < 5);
  
  // 4. For-In Loop
  // Used to iterate over the properties of an object
  const person = { name: 'John', age: 30, city: 'New York' };
  for (let key in person) {
    console.log('For-In Loop:', key, person[key]);
  }
  
  // 5. For-Of Loop
  // Used to iterate over the values of an iterable object, such as an array or a string
  const numbers = [1, 2, 3, 4, 5];
  for (let number of numbers) {
    console.log('For-Of Loop:', number);
  }
  
  /**
   * Nested Loops
   * 
   * A loop inside another loop. Useful for multi-level iteration tasks like working with matrices or nested data structures.
   */
  
  // Example of Nested For Loop
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      console.log('Nested For Loop:', matrix[i][j]);
    }
  }
  