// Create an array of promises that resolve at different times. Use Promise.all() to wait for all of them to resolve, and log the results.

function createPromise(message, delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(message);
      }, delay);
    });
  }
  const promises = [
    createPromise("Promise 1 resolved after 2 seconds", 2000),
    createPromise("Promise 2 resolved after 1 second", 1000),
    createPromise("Promise 3 resolved after 3 seconds", 3000),
  ];
  Promise.all(promises)  //promise.race
    .then((results) => {
      console.log("All promises resolved:");
      console.log(results);
    })
    .catch((error) => {
      console.error("One or more promises failed:", error);
    });
  