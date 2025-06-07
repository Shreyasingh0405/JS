// # JavaScript Execution Context & Variable Storage

// ## **What is Lexical Global Environment vs Global Variables?**

// ### **Two Storage Systems Exist:**

// 1. **Global Variables Environment**
//    - Stores `var` declarations and function declarations
//    - Legacy storage system (older JavaScript behavior)
//    - Variables are immediately initialized during creation phase

// 2. **Lexical Global Environment** 
//    - Stores `let`, `const`, and `class` declarations
//    - Modern ES6+ storage system
//    - Variables remain uninitialized until declaration line executes

// ### **Why Two Storage Systems?**
// - **Backward Compatibility**: `var` and functions keep old hoisting behavior
// - **Better Error Prevention**: `let`/`const` prevent access before initialization
// - **Strict Scoping Rules**: Lexical environment provides block scoping

// ---

// ## **Key Points for Explanation**

// ### **1. Hoisting Behavior Differences**

// **`var` and `function` declarations:**
// - ✅ Hoisted and immediately initialized
// - ✅ `var` gets `undefined` value
// - ✅ Functions get complete definition
// - ✅ Stored in **Global Variables**

// **`let` and `const` declarations:**
// - ✅ Hoisted but remain uninitialized
// - ❌ Cannot access before declaration line
// - ✅ Stay in **Temporal Dead Zone**
// - ✅ Stored in **Lexical Global Environment**

// ### **2. Creation Phase vs Execution Phase**

// **Creation Phase (Memory Allocation):**
// ```javascript
// // Before any code executes:
// var z;        // → Global Variables: z = undefined
// let y;        // → Lexical Environment: y = <uninitialized>
// function f(); // → Global Variables: f = <function>
// ```

// **Execution Phase (Line by Line):**
// ```javascript
// let y;           // Now y becomes undefined in Lexical Environment
// console.log(y);  // undefined (accessible now)
// console.log(z);  // undefined (was already accessible)
// var z = 10;      // z gets actual value 10
// ```

// ### **3. Temporal Dead Zone (TDZ)**

// - **Definition**: Period between hoisting and initialization
// - **Applies to**: `let`, `const`, `class`
// - **Error**: ReferenceError if accessed during TDZ
// - **Purpose**: Prevent bugs from accessing uninitialized variables

// ### **4. Why This Design?**

// **Problems `var` caused:**
// - Accidental access to uninitialized variables
// - Function-scoped instead of block-scoped
// - Redeclaration allowed

// **Solutions `let`/`const` provide:**
// - Block-scoped behavior
// - TDZ prevents premature access
// - Clear error messages for mistakes

// ---

// ## **Practical Example Walkthrough**

// ### **Your Code Analysis:**
// ```javascript
// let y;           // Lexical: y = <uninitialized> → then undefined
// let x = 7;       // Lexical: x = <uninitialized> → then 7
// console.log(y);  // Works: undefined
// var b;           // Global Variables: b = undefined
// console.log(z);  // Works: undefined (hoisted var)
// var z = 10;      // Global Variables: z = undefined → then 10
// const p = 9;     // Lexical: p = <uninitialized> → then 9
// function check(){} // Global Variables: check = <function>
// ```

// ### **Memory State During Creation Phase:**
// ```
// Global Variables:
// ├── b: undefined
// ├── z: undefined  
// └── check: function() {}

// Lexical Global Environment:
// ├── y: <uninitialized>
// ├── x: <uninitialized>
// └── p: <uninitialized>
// ```

// ---

// ## **Teaching Points Summary**

// 1. **JavaScript has TWO storage systems** for backward compatibility
// 2. **`var`/functions** use old system (immediate initialization)
// 3. **`let`/`const`** use new system (delayed initialization)
// 4. **Temporal Dead Zone** prevents access before initialization
// 5. **Hoisting** happens for all declarations, but initialization timing differs
// 6. **Creation phase** allocates memory, **execution phase** assigns values
// 7. **Modern JavaScript** prefers `let`/`const` for better error prevention

// ---

// ## **Common Interview Questions**

// **Q: Why does `console.log(z)` work but `console.log(y)` would fail?**
// A: `var z` is hoisted and initialized to `undefined` immediately, while `let y` is hoisted but stays uninitialized until its declaration line.

// **Q: What's the difference between undefined and uninitialized?**
// A: `undefined` is an actual JavaScript value you can access. `uninitialized` means the variable exists in memory but cannot be accessed (TDZ).

// **Q: Why two storage systems?**
// A: Backward compatibility with old `var` behavior while providing better error prevention with new `let`/`const` behavior.