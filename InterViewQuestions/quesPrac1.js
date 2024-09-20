// let a1 = new Array(2)
// console.log(a1) 
// //console.log(a1.length())
//  //0,1      
// let b1 = new Array(1,2,3,4)  // [1,2,3,4]
// console.log(b1) //2,3,4,5 or 0,1,2,3
// let c1 = new Array("1BHK")
// console.log(c1) //[1bhk]
// let a = "abc"
// console.log(a) //"abc"
// let b = new String("abc")
// console.log(b) //"abc"
// let c = "abcd"
// console.log(c.indexOf("c")) 
// console.log(c.indexOf(c)) 
// console.log(c.length)
// let d = "Hello World"
// let e = ["shree", "abc"]
// console.log(d.replace(e[1])) 
// console.log("World", e[0])
// console.log(d.replace("World",e[0]))

    var a=10
    console.log(a)
    var d = 14
    const b =10
    
    c=5  //global 

    //let c =11    //block 
    console.log(c) //print hoisting reference error

        let a1 = null
    console.log(a1)
    let y ={
        a:1
    }
    console.log(y.b)

//let abc =012
let avv = new String("abc");
console.log(avv)

let arrPush = [1,2,3,4]
const ppp=arrPush.push(2)
const ddd=arrPush.slice(0,5) //[1,2]
console.log(arrPush,ppp,ddd)

const z= arrPush.splice(1,1,"a","b")
console.log(arrPush)
console.log(z)

let str2 = "hello"
const strres= str2.slice(0,1)
console.log(strres)
