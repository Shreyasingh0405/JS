//print 1 to 5 in each 1s 

function print(){
    for(var i =1;i<=5;i++){
        setTimeout(function(){
            console.log(i)
 },i*1000)
    }
}
print()


// function print1(){
//     for(let i =1;i<=5;i++){
//         setTimeout(function(){
//             console.log(i)
//  },i*1000)
//     }
// }
// print1()


// function print2(){
//     for(var i =1;i<=5;i++){
//         function close(i){
//             setTimeout(function(){
//                 console.log(i)
//      },i*1000)
//         }
//         close(i)
//     }
// }
// print2()







// 🟩 Summary Table
// Function	Key Variable	Output	Why?
// print()	var	6 6 6 6 6	var is function-scoped, so all callbacks share the same i after the loop ends (i=6)
// print1()	let	1 2 3 4 5	let is block-scoped, so each iteration has a separate i
// // print2()	var + closure	1 2 3 4 5	Passing i to close(i) creates a new local variable for each callback (closure)