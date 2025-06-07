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



    
    function tasking(success,delay){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve(success)
            },delay)
        })
    }
    tasking("one",1000)
    .then(function(re){
        console.log(re)
        return tasking("work done",2000)
    }).then(function(rem){
        console.log(rem)
        return tasking("work done 2",8000)
    }).then(function(remm){
        console.log(remm)
        return tasking("work done 3",5000)
    }).then(function(resul){
        console.log(resul)
    }).catch(function(error){
        console.log(error)
    }).finally(function(){
        console.log("task executed")
    })