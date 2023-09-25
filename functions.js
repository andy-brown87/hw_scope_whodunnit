// function sayHello(name){
//     return `Hello ${name}!`
// }
// console.log(sayHello('E66'))
// // how to define a function and display (call) it
// // E66 is the input in the 'name' parameter

function sayHello(greeting, name = "world!"){
    return `${greeting} ${name}!`
}
console.log(sayHello("Hello", "E66"))

// Anonymous function
var add = function(firstNumber, secondNumber) {
    return firstNumber + secondNumber
}
console.log("1 + 3 with add is: ", add(1,3))

// Arrow function (similar to anonymous function)
// returns everything after the '=>' (no need for return statement)
var multiply = (firstNumber, secondNumber) => firstNumber * secondNumber

console.log(multiply(6, 20))