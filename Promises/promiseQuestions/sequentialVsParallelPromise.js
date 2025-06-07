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


