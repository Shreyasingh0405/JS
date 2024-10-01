//Write a promise-based timeout function that resolves after a given time period, simulating a delay.

function timeout(delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Resolved after ${delay} milliseconds`);
      }, delay);
    });
  }
  