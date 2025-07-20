//
const name ={
    fn: "shree",
    ln:"singh"
}

let printfullName = function(hometown){
    console.log(this.fn +" "+ this.ln +" "+ hometown)
}
printfullName.call(name,"bihar")
printfullName.apply(name,["bihar"])


let my = printfullName.bind(name,"agra")
console.log(my)
my()