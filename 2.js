const promise = new Promise((resolve, reject) => {
    let success = true
    if (success) {
        resolve("success done")
    } else {

        reject("fails")
    }
})
promise.then((result) => {
    console.log("result", result)
}).catch((error) => {
    console.log("Error:", error);
});

