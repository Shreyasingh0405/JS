// String.indexOf(searchValue[, fromIndex])

// Purpose: Finds the first occurrence of a specified value within a string.
// Returns: The index of the first occurrence of the specified value, or -1 if not found.

const str1 = "Hello, world!";
console.log(str1);
const index = str1.indexOf("world"); // 7
console.log(index);
const notFound = str1.indexOf("foo"); // -1
console.log(notFound);

// String.lastIndexOf(searchValue[, fromIndex])
// Purpose: Finds the last occurrence of a specified value within a string.
// Returns: The index of the last occurrence of the specified value, or -1 if not found.

const lastIndex = str1.lastIndexOf("Hello"); // 13
console.log(lastIndex);
const notFoundLast = str1.lastIndexOf("foo"); // -1
console.log(notFoundLast);

// String.search(regexp)
// Purpose: Searches for a match between a regular expression and the string.
// Returns: The index of the first match, or -1 if no match is found.
const searchIndex = str1.search(/world/); // 7
const searchNotFound = str1.search(/foo/); // -1

// String.match(regexp)
// Purpose: Retrieves the result of matching a string against a regular expression.
// Returns: An array of matches or null if no matches are found.
const matches = str1.match(/world/); // ["world"]
const noMatches = str1.match(/foo/); // null

// String.matchAll(regexp)
// Purpose: Retrieves all matches of a string against a regular expression, including capturing groups.
// Returns: An iterator of all matches or an empty iterator if no matches are found.
const allMatches = [...str1.matchAll(/Hello/g)]; 
// [["Hello", index: 0, input: "Hello, world! Hello again!", groups: undefined], ["Hello", index: 13, input: "Hello, world! Hello again!", groups: undefined]]

// String.includes(searchValue[, fromIndex])
// Purpose: Checks if a specified value is present within a string.
// Returns: true if the value is found, otherwise false.
const contains = str1.includes("world"); // true
const notContains = str1.includes("foo"); // false

// String.startsWith(searchString[, position])
// Purpose: Checks if the string starts with a specified value.
// Returns: true if the string starts with the specified value, otherwise false.
const starts = str1.startsWith("Hello"); // true
const notStarts = str1.startsWith("world"); // false

// String.endsWith(searchString[, length])
// Purpose: Checks if the string ends with a specified value.
// Returns: true if the string ends with the specified value, otherwise false.
const ends = str1.endsWith("world!"); // true
const notEnds = str1.endsWith("Hello"); // false
