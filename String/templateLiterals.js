/**
 * Template literals are a feature in ES6 (ECMAScript 2015) that provide a more flexible and readable way to work with strings.
 * They are defined using backticks (`) instead of single or double quotes.
 *
 * Features:
 * 1. **Interpolation**: Embed expressions inside `${}`.
 *    Example:
 */

const name = "Alice";
const greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, Alice!

/**
 * 2. **Multiline Strings**: Create strings that span multiple lines without concatenation.
 *    Example:
 */

const multiline = `This is a string
that spans multiple
lines.`;
console.log(multiline);
// Output:
// This is a string
// that spans multiple
// lines.

/**
 * 3. **Expressions**: Include complex expressions within `${}`.
 *    Example:
 */

const a = 5;
const b = 10;
const sum = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(sum); // Output: The sum of 5 and 10 is 15.

/**
 * 4. **Tagged Templates**: Use tag functions for custom string processing.
 *    Example:
 */

function emphasize(strings, ...values) {
  return strings.reduce((acc, str, i) => {
    return `${acc}${str}${values[i] ? `<strong>${values[i]}</strong>` : ''}`;
  }, '');
}

const nameForTag = "Bob";
const message = emphasize`Hello, ${nameForTag}!`;
console.log(message); // Output: Hello, <strong>Bob</strong>!
