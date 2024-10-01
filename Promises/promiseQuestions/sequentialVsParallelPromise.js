function createTime(data,delay) {
    return new Promise(function (resolve) {
        setTimeout(() => {
           resolve (data)
        }, delay)
    })
}

const arrayPromise = [
    () => createTime("data 1",1000),
    () => createTime("data2",2000),
    () => createTime("data3",3000),
]

 function parallel(promises) {
    const start = Date.now();
    return Promise.all(promises.map(promise=>promise()))
    .then(function(result){
        const end = Date.now();
        console.log("parrallel result", result)
        console.log("Parallel execution time:", end - start, "ms");


    })
}

async function sequential(promises) {
    const results = []
    const start = Date.now();
    for (const promise of promises) {
        const result = await promise()
        results.push(result)
    }
    const end = Date.now(); // End time
    console.log("Sequential results:", results);
    console.log("Sequential execution time:", end - start, "ms");
}
parallel(arrayPromise)
sequential(arrayPromise)


  // Example usage:
  timeout(2000) // Delay of 2000 milliseconds (2 seconds)
    .then((message) => {
      console.log(message); // Outputs: Resolved after 2000 milliseconds
    });
  
    //Implement a promise chain where each step transforms the result and passes it to the next promise in the chain. For example, fetch user data, then fetch user posts, then process the posts.

    // Simulated asynchronous function to fetch user data
function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulated user data
            const userData = {
                id: userId,
                name: 'John Doe',
                age: 30,
            };
            resolve(userData);
        }, 1000); // Simulates network delay
    });
}

