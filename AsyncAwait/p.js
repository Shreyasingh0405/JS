function greet() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello, Sionara!")
        }, 3000)
    })
}
async function greetings() {
    try {
        console.log("waiting for response...")
let wait = await greet()
        console.log(wait);
    }
    catch (error) {
        console.log(error)
    }
}
greetings()
