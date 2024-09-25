//Operators are symbols or keywords in programming languages that perform specific operations on one or more operands (values or variables). They help manipulate data and control the flow of execution in code. Operators are broadly categorized based on their function:


// 1. Arithmetic Operators:used to perform basic mathematical operations on numeric values.
// Addition (`+`): Adds two values.
let sum = 5 + 3;
console.log('Sum:', sum);  // Output: 8

// Subtraction (`-`): Subtracts one value from another.
let difference = 5 - 3;
console.log('Difference:', difference);  // Output: 2

// Multiplication (`*`): Multiplies two values.
let product = 5 * 3;
console.log('Product:', product);  // Output: 15

// Division (`/`): Divides one value by another.
let quotient = 6 / 3;
console.log('Quotient:', quotient);  // Output: 2

// Modulus (`%`): Finds the remainder of division.
let remainder = 5 % 3;
console.log('Remainder:', remainder);  // Output: 2

// Exponentiation (`**`): Raises a number to the power of another.
let power = 2 ** 3;
console.log('Power:', power);  // Output: 8

// 2. Assignment Operators:used to assign values to variables.

// Assignment (`=`): Assigns a value to a variable.
let a = 5;
console.log('Assignment:', a);  // Output: 5

// Add and assign (`+=`): Adds a value to a variable and assigns the result.
a += 3;
console.log('Add and assign:', a);  // Output: 8

// Subtract and assign (`-=`): Subtracts a value from a variable and assigns the result.
a -= 3;
console.log('Subtract and assign:', a);  // Output: 5

// Multiply and assign (`*=`): Multiplies a variable by a value and assigns the result.
a *= 3;
console.log('Multiply and assign:', a);  // Output: 15

// Divide and assign (`/=`): Divides a variable by a value and assigns the result.
a /= 3;
console.log('Divide and assign:', a);  // Output: 5

// Modulus and assign (`%=`): Applies modulus and assigns the result.
a %= 3;
console.log('Modulus and assign:', a);  // Output: 2

// 3. Comparison Operators
// Equal to (`==`): Checks if two values are equal (type conversion allowed).
let isEqual = 5 == '5';
console.log('Equal to:', isEqual);  // Output: true

// Strict equal to (`===`): Checks if two values are equal and of the same type.
let isStrictEqual = 5 === '5';
console.log('Strict equal to:', isStrictEqual);  // Output: false

// Not equal to (`!=`): Checks if two values are not equal.
let isNotEqual = 5 != 6;
console.log('Not equal to:', isNotEqual);  // Output: true

// Strict not equal to (`!==`): Checks if two values are not equal or not of the same type.
let isStrictNotEqual = 5 !== '5';
console.log('Strict not equal to:', isStrictNotEqual);  // Output: true

// Greater than (`>`): Checks if one value is greater than another.
let isGreaterThan = 5 > 3;
console.log('Greater than:', isGreaterThan);  // Output: true

// Less than (`<`): Checks if one value is less than another.
let isLessThan = 5 < 3;
console.log('Less than:', isLessThan);  // Output: false

// Greater than or equal to (`>=`): Checks if one value is greater than or equal to another.
let isGreaterOrEqual = 5 >= 5;
console.log('Greater than or equal to:', isGreaterOrEqual);  // Output: true

// Less than or equal to (`<=`): Checks if one value is less than or equal to another.
let isLessOrEqual = 5 <= 6;
console.log('Less than or equal to:', isLessOrEqual);  // Output: true

// 4. Logical Operators
// Logical AND (`&&`): Returns true if both operands are true.
let andResult = true && false;
console.log('Logical AND:', andResult);  // Output: false

// Logical OR (`||`): Returns true if at least one operand is true.
let orResult = true || false;
console.log('Logical OR:', orResult);  // Output: true

// Logical NOT (`!`): Inverts the boolean value.
let notResult = !true;
console.log('Logical NOT:', notResult);  // Output: false

// 5. Bitwise Operators
// Bitwise AND (`&`): Performs a binary AND on two numbers.
let bitwiseAnd = 5 & 3;
console.log('Bitwise AND:', bitwiseAnd);  // Output: 1

// Bitwise OR (`|`): Performs a binary OR on two numbers.
let bitwiseOr = 5 | 3;
console.log('Bitwise OR:', bitwiseOr);  // Output: 7

// Bitwise XOR (`^`): Performs a binary XOR on two numbers.
let bitwiseXor = 5 ^ 3;
console.log('Bitwise XOR:', bitwiseXor);  // Output: 6

// Bitwise NOT (`~`): Inverts the bits of a number.
let bitwiseNot = ~5;
console.log('Bitwise NOT:', bitwiseNot);  // Output: -6

// Left shift (`<<`): Shifts bits to the left.
let leftShift = 5 << 1;
console.log('Left shift:', leftShift);  // Output: 10

// Right shift (`>>`): Shifts bits to the right.
let rightShift = 5 >> 1;
console.log('Right shift:', rightShift);  // Output: 2

// Zero-fill right shift (`>>>`): Shifts bits to the right, filling with zeros.
let zeroFillRightShift = -5 >>> 1;
console.log('Zero-fill right shift:', zeroFillRightShift);  // Output: 2147483642

// 6. Conditional (Ternary) Operator
// Conditional (`? :`): Short-hand for an `if-else` statement.
let canVote = (8 >= 18) ? 'Yes' : 'No';
console.log('Can vote:', canVote);  // Output: Yes

// 7. Type Operators
// Type of (`typeof`): Returns the type of a variable.
let type = typeof 5;
console.log('Type of:', type);  // Output: number

// Instance of (`instanceof`): Checks if an object is an instance of a constructor.
let dateInstance = new Date();
console.log('Instance of Date:', dateInstance instanceof Date);  // Output: true

// 8. Unary Operators
// Unary plus (`+`): Converts a value to a number.
let num = +'5';
console.log('Unary plus:', num);  // Output: 5

// Unary minus (`-`): Negates a value.
let neg = -5;
console.log('Unary minus:', neg);  // Output: -5

// Increment (`++`): Increases a value by one.
let inc = 5;
inc++;
console.log('Increment:', inc);  // Output: 6

// Decrement (`--`): Decreases a value by one.
let dec = 5;
dec--;
console.log('Decrement:', dec);  // Output: 4

// 9. Spread and Rest Operators
// Spread (`...`): Expands an iterable into individual elements.
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log('Spread:', arr2);  // Output: [1, 2, 3, 4, 5]

// Rest (`...`): Collects multiple elements into an array.
function sums(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log('Rest:', sums(1, 2, 3, 4, 5));  // Output: 15
