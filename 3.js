let array=[1,2,3,4]
console.log(...array)


let array1 = [0,8,7,9]
const res = [...array , ...array1]
console.log(res)




const buf = Buffer.from("shree");
console.log(buf);  // <Buffer 48 65 6c 6c 6f>



const eventEmitter = require("node:events")
const eventemitter = new eventEmitter()
eventemitter.on("hello", (name)=>{
    console.log(`hello ${name}`)

})
eventemitter.emit("hello","reen")



const os = require('os');

console.log('Total Memory:', os.totalmem());
console.log('Free Memory:', os.freemem());
