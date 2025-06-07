// ### Higher-Order Functions

// - **Definition**: Functions that take other functions as arguments or return functions as their result.

// - **Examples in JavaScript**: `map`, `filter`, and `reduce`.

// ### 1. Map Function
// - **Purpose**: Transforms an array by applying a function to each element, resulting in a new array.
// - **Syntax**: 

// const output = array.map(transformationFunction);

// - **Example**: Doubling values in an array.
//   const arr = [5, 1, 3, 2, 6];
//   const doubled = arr.map(x => x * 2); // [10, 2, 6, 4, 12]

// - **Anonymous Functions**: You can pass functions directly without defining them separately.
//   const doubled = arr.map(x => x * 2);

// ### 2. Filter Function
// - **Purpose**: Creates a new array with all elements that pass the test implemented by the provided function.
// - **Syntax**: 
//   const output = array.filter(testFunction);
// - **Example**: Filtering out odd numbers.
//   const oddNumbers = arr.filter(x => x % 2 !== 0); // [5, 1, 3]
// - **Chaining**: You can chain `filter` with other functions like `map`.
//   const names = users.filter(user => user.age < 30).map(user => user.firstName);

// ### 3. Reduce Function
// - **Purpose**: Executes a reducer function on each element of the array, resulting in a single output value.
// - **Syntax**: 
//   const output = array.reduce(reducerFunction, initialValue);
// - **Parameters**:
//   - **Accumulator**: The accumulated value previously returned in the last invocation of the callback.
//   - **Current Value**: The current element being processed in the array.
// - **Example**: Summing values in an array.
//   const sum = arr.reduce((accumulator, current) => accumulator + current, 0); // 17
// - **Finding Maximum**:
//   const max = arr.reduce((acc, curr) => (curr > acc ? curr : acc), 0); // 6

// ### Real-World Examples

// - **Mapping Full Names**:
//   const fullNames = users.map(user => `${user.firstName} ${user.lastName}`);
// - **Counting Ages**:
//   const ageCount = users.reduce((acc, curr) => {
//       acc[curr.age] = (acc[curr.age] || 0) + 1;
//       return acc;
//   }, {});

// ### Chaining Functions
// - You can chain `map`, `filter`, and `reduce` to perform complex transformations and calculations in a concise manner.

