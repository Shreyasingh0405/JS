//1.  Write a function that returns a promise and resolves a message after a given delay. Chain several promises with different delays and log the messages in sequence.

function task(success, delay) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(success)
        }, delay)

    });
}
task("task 1 is running",1000)
    .then(function (result) {
        console.log(result)
        return task("task 2 is running",2000)
    }).then(function (result) {
        console.log(result)
        return task("task 3 is running",3000)
    }).then(function (result) {
        console.log(result)
        return task("task 4 is running",4000)
    }).then(function (result) {
        console.log(result)
    })
    .catch(function (error) {
        console.log(error)
    })
    .finally(function () {
        console.log("task succesfully run")
    })
