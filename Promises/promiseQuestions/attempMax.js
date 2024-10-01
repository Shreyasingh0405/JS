async function retryPromise(operation, maxRetries = 3, delay = 1000) {
    let attempt = 0;

    while (attempt < maxRetries) {
        try {
            // Attempt to execute the operation
            const result = await operation();
            return result; // Return the result if successful
        } catch (error) {
            attempt++;
            console.error(`Attempt ${attempt} failed: ${error.message}`);

            // If the maximum number of attempts has been reached, reject the promise
            if (attempt === maxRetries) {
                throw new Error(`Operation failed after ${maxRetries} attempts: ${error.message}`);
            }

            // Wait for a delay before the next retry
            await new Promise(res => setTimeout(res, delay));
        }
    }
}

// Example usage
const exampleOperation = async () => {
    // Simulate a random failure
    if (Math.random() < 0.5) {
        throw new Error('Random failure occurred');
    }
    return 'Operation succeeded';
};

// Retry the example operation with up to 5 retries
retryPromise(exampleOperation, 5, 1000)
    .then(result => console.log(result))
    .catch(error => console.error(error.message));
