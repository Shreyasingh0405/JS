const radius =[3,2,4,1]

const area= function(radius){
    return Math.PI * radius * radius
}


const circumference = function(radius){
    return 2* Math.PI * radius
}
 
let calculate = function(radius,logic){
    const output = []
    for (let i=0;i<radius.length;i++){
        output.push(logic(radius[i]))

    }
    return output
}

console.log(calculate(radius,area))
console.log(calculate(radius,circumference))