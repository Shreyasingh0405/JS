/**
 * `setTimeout` - Schedules a function or code snippet to be executed after a specified delay.
 *
 * Purpose:
 * - To execute a function or evaluate an expression after a specified amount of time.
 *
 * Syntax:
 * setTimeout(callback, delay, [arg1, arg2, ...])
 * - `callback`: The function to execute after the delay.
 * - `delay`: The time, in milliseconds, to wait before executing the callback.
 * - `[arg1, arg2, ...]` (optional): Arguments to pass to the callback function.
 *
 * Example:
 */
function greet() {
    console.log("Hello, World!");
  }
  
  const timeoutId = setTimeout(greet, 2000); // Calls `greet` after 2000 milliseconds (2 seconds)
  
  /**
   * `clearTimeout` - Cancels a timeout previously established by `setTimeout`.
   *
   * Purpose:
   * - To prevent the function scheduled with `setTimeout` from being executed if it hasn't run yet.
   *
   * Syntax:
   * clearTimeout(timeoutId)
   * - `timeoutId`: The ID returned by `setTimeout` that you want to cancel.
   *
   * Example:
   */
  const timeoutIdToCancel = setTimeout(() => {
    console.log("This will not be logged.");
  }, 5000);
  
  //clearTimeout(timeoutIdToCancel); // Cancels the above timeout
  
  /**
   * Note:
   * - `setTimeout` schedules a one-time execution of code.
   * - `clearTimeout` is used to cancel that scheduled execution if needed.
   */
  
  //The setInterval() method repeats a given function at every given time-interval.

function timeSchedule(){
  console.log("hey")
}
const check=setTimeout(timeSchedule,1000);
clearTimeout(check);
const store = setTimeout(()=>{
  console.log("happy moment")
},4000)