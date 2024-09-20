// In JavaScript, strings are primitive data types and immutable.
// This means that once a string is created, it cannot be changed.
// All string methods produce a new string without altering the original string.

/**
 * **String Length**
 * `string.length` - Returns the number of characters in the string.
 */
let str = "Hello";
console.log("String Length:", str.length); // Output: 5

/**
 * **String charAt()**
 * `string.charAt(index)` - Returns the character at the specified index.
 */
console.log("Character at index 1:", str.charAt(1)); // Output: "e"

/**
 * **String charCodeAt()**
 * `string.charCodeAt(index)` - Returns the Unicode of the character at the specified index.
 */
console.log("Unicode of character at index 1:", str.charCodeAt(1)); // Output: 101

/**
 * **String at()**
 * `string.at(index)` - Returns the character at the specified index (ES2022 feature).
 */
console.log("Character at index -1:", str.at(-1)); // Output: "o"

/**
 * **String [ ]**
 * `string[index]` - Accesses the character at the specified index (ES5 feature). Note that this is read-only.
 */
console.log("Character at index 1:", str[1]); // Output: "e"

/**
 * **String slice()**
 * `string.slice(beginIndex, endIndex)` - Extracts a section of the string and returns a new string.
 */
console.log("Slice from index 1 to 4:", str.slice(1, 4)); // Output: "ell"

/**
 * **String substring()**
 * `string.substring(startIndex, endIndex)` - Returns a substring between the specified indices.
 */
console.log("Substring from index 1 to 4:", str.substring(1, 4)); // Output: "ell"

/**
 * **String substr()**
 * `string.substr(startIndex, length)` - Returns a substring starting at the specified index and extending for a given number of characters (deprecated).
 */
console.log("Substr from index 1 with length 3:", str.substr(1, 3)); // Output: "ell"

/**
 * **String toUpperCase()**
 * `string.toUpperCase()` - Converts the string to uppercase.
 */
console.log("To Upper Case:", str.toUpperCase()); // Output: "HELLO"

/**
 * **String toLowerCase()**
 * `string.toLowerCase()` - Converts the string to lowercase.
 */
console.log("To Lower Case:", str.toLowerCase()); // Output: "hello"

/**
 * **String concat()**
 * `string.concat(string2, string3, ...)` - Joins two or more strings into a single string.
 */
let str1 = "Hello";
let str2 = "World";
console.log("Concatenated String:", str1.concat(" ", str2)); // Output: "Hello World"

/**
 * **String trim()**
 * `string.trim()` - Removes whitespace from both ends of the string.
 */
let strWithSpaces = "  Hello  ";
console.log("Trimmed String:", strWithSpaces.trim()); // Output: "Hello"

/**
 * **String trimStart()**
 * `string.trimStart()` - Removes whitespace from the beginning of the string.
 */
console.log("Trimmed Start:", strWithSpaces.trimStart()); // Output: "Hello  "

/**
 * **String trimEnd()**
 * `string.trimEnd()` - Removes whitespace from the end of the string.
 */
console.log("Trimmed End:", strWithSpaces.trimEnd()); // Output: "  Hello"

/**
 * **String padStart()**
 * `string.padStart(targetLength, padString)` - Pads the current string with another string until it reaches the specified length, from the start.
 */
console.log("Pad Start:", str1.padStart(10, "0")); // Output: "00000Hello"

/**
 * **String padEnd()**
 * `string.padEnd(targetLength, padString)` - Pads the current string with another string until it reaches the specified length, from the end.
 */
console.log("Pad End:", str1.padEnd(10, "0")); // Output: "Hello00000"

/**
 * **String repeat()**
 * `string.repeat(count)` - Returns a new string with the specified number of copies of the string.
 */
console.log("Repeated String:", str1.repeat(3)); // Output: "HelloHelloHello"

/**
 * **String replace()**
 * `string.replace(searchValue, newValue)` - Returns a new string with some matches of a pattern replaced by a replacement.
 */
let strWithWorld = "Hello World";
console.log("Replaced String:", strWithWorld.replace("World", "Universe")); // Output: "Hello Universe"

/**
 * **String replaceAll()**
 * `string.replaceAll(searchValue, newValue)` - Returns a new string with all matches of a pattern replaced by a replacement.
 */
let strWithMultipleWorlds = "Hello World World";
console.log("Replaced All:", strWithMultipleWorlds.replaceAll("World", "Universe")); // Output: "Hello Universe Universe"

/**
 * **String split()**
 * `string.split(separator, limit)` - Splits the string into an array of substrings based on the separator.
 */
console.log("Split String:", strWithWorld.split(" ")); // Output: ["Hello", "World"]

/**
 * **String Search Methods**
 * These include methods such as `indexOf()`, `lastIndexOf()`, and `includes()` which are used for searching within strings.
 */
console.log("Index of 'World':", strWithWorld.indexOf("World")); // Output: 6
console.log("Last Index of 'o':", strWithWorld.lastIndexOf("o")); // Output: 7
console.log("Includes 'Hello':", strWithWorld.includes("Hello")); // Output: true
