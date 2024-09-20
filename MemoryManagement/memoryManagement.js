// Memory Management in JavaScript

/**
 * Memory LifeCycle:-
Allocate the memory you need
Use the allocated memory (read, write)
Release the allocated memory when it is not needed anymore

/** how can we manage memory:-
 * 1. Automatic Garbage Collection:
 * - JavaScript engines use garbage collection to automatically reclaim memory that is no longer in use.
 * - This process helps in freeing up Pmemory without manual intervention.
 */

/**
 * 2. Reference Counting:
 * - The engine keeps track of references to objects. When the reference count drops to zero, 
 *   meaning no part of the code is using the object, the memory can be reclaimed.
 */

/**
 * 3. Mark-and-Sweep Algorithm:
 * - A common garbage collection technique where the engine marks all reachable objects 
 *   and then sweeps through the memory to clean up objects that are not marked.
 */

/**
 * 4. Memory Leaks:
 * - Memory leaks occur when your code retains references to objects that are no longer needed, 
 *   preventing them from being garbage collected. Common causes include:
 *   - Global Variables: Unintentionally creating global variables can lead to leaks.
 *   - Closures: Closures that retain unnecessary references to large objects.
 *   - Event Listeners: Not removing event listeners when they are no longer needed.
 */

/**
 * 5. Optimizing Memory Usage:
 * - Avoid Global Variables: Use local variables to minimize global scope pollution.
 * - Manage Closures: Be cautious with closures to avoid retaining unnecessary references.
 * - Use Weak References: Utilize WeakMap and WeakSet to avoid strong references that prevent garbage collection.
 */

/**
 * 6. Tools and Techniques:
 * - Profiling: Use browser developer tools to profile memory usage and identify leaks.
 * - Heap Snapshots: Analyze memory usage and find leaks using heap snapshots.
 * - Manual Memory Management: Less common in JavaScript but may be necessary in advanced scenarios.
 */
