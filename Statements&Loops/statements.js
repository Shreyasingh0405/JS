// if else condition 
let age = 17;
if (age >= 18) {
    console.log("User can play ddlc");
} else {
    console.log("User can play mario");
}

let num = 13;
if (num % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}

// // ternary operator 
let age11 = 4;
let drink1;

if(age11>=5){
    drink1 = "coffee";
}else{
    drink1 = "milk";
}
console.log(drink1);

//ternary operator / conditional operator 

let age2 = 3;
let drink = age2 >= 5 ? "coffee" : "milk";
console.log(drink);

// // and  or operator 
let firstName = "Harshit";
let age1 = 9;

if(firstName[0] === "H"){
    console.log("your name starts with H")
}

if(age1 > 18){
    console.log("you are above 18");
}

if(firstName[0] === "H" && age1>18){
    console.log("Name starts with H and above 18");
}else{
    console.log("inside else");
}

if(firstName[0] === "H" || age1>18){
    console.log("inside if");
}else{
    console.log("inside else");
}

// // nested if else

// // winning number 19 

// // 19 your guess is right 
// // 17 too low 
// // 20 too high 

let winningNumber = 19;
let userGuess = 19;
if(userGuess === winningNumber){
    console.log("Your guess is right!!");
}else{
    if(userGuess < winningNumber){
        console.log("too low !!!");
    }else{
        console.log("too high !!!");
    }
}

// // if 
// // else if 
// // else if 
// // else if 
// // else 

let tempInDegree = 4;

if(tempInDegree > 40){
    console.log("too hot");
}else if(tempInDegree > 30){
    console.log("lets go for swim");
}else if(tempInDegree > 20){
    console.log("weather is cool");
}else if(tempInDegree > 10){
    console.log("it is very cold outside");
}else{
    console.log("extremely cold");
}
console.log("hello");

