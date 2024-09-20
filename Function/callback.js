//A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

function homework(subject, callback) {
    console.log("start working")
    callback()
}
function work() {
    console.log("work done")
}
homework("math", work)

 //==(*****************===///)

console.log("heelo");
setTimeout(function () {
    console.log("hey");

}, 5000
)
console.log("go to hell")

//=================******************===================//

const cart =["shoes","earrings","pants"]
api.createOrder(cart,function(){
    api.proceedPayment(function(){
        api.showOrderSummary(function(){
            api.updateTheWallet()
        })
    })
})

//because of structure it is known as pyramid of doom.

//================************+++++++++??///////////
//call back hell:-
//when a function is passed as an arguments to another function,it becomes callback function but when this process continues and there are many callback insides another call back function which grows code horizontally insted of vertically.That mechanism is known as callback hell.

//Inversion Ofcontrol
//The callback function is passed another callback, due to which we loose control on our ConvolverNode.We donot know what happening behind the scene and the code became difficult to MediaStreamAudioDestinationNode.That process called inversion control.