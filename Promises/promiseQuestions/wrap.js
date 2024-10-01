//Given a function that uses callbacks (e.g., setTimeout), write a wrapper that converts it into a function that returns a promise.

function one(){
    console.log("hello")
}
one()

function onePromise(){
    return new Promise((resolve)=>{
        console.log("hii")
        resolve()
    })
}
onePromise("test")
.then(()=>{
    console.log("work done")
})