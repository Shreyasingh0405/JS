// Simulate an API call that returns a promise

function apiCall(endpoint, input) {
    return new Promise((resolve) => {
      console.log(`Calling API: ${endpoint} with input: ${input}`);
      setTimeout(() => {
        // Simulate a response based on the input
        resolve(`Result from ${endpoint} with input ${input}`);
      }, 1000); // Simulate 1-second delay
    });
  }
  // Chain promises to make sequential API calls
  apiCall('https://api.example.com/step1', 'Initial Input')
    .then((result1) => {
      console.log('First API call result:', result1);
      // Use result1 as input to the second API call
      return apiCall('https://api.example.com/step2', result1);
    })
    .then((result2) => {
      console.log('Second API call result:', result2);
      // Use result2 as input to the third API call
      return apiCall('https://api.example.com/step3', result2);
    })
    .then((result3) => {
      console.log('Third API call result:', result3);
      // You can continue chaining more API calls if needed
    })
    .catch((error) => {
      // Handle any error that occurs in the promise chain
      console.error('An error occurred:', error);
    });
  
    