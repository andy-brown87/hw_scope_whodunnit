var name = "Bob"
// var to declare a variable for old javascript (don't use)

dayOfWeek = "Monday";
// Declerations to assign a variable
// line can be ended with ';' Javascript does it automatically though

name = "Steve"
console.log(name)

// Assign a variable and display it

console.log(typeof "Hello")
console.log(typeof 19)
console.log(typeof true)
console.log(typeof false)
// booleans in javascript are lower case
// 'typeof' displays variable type

console.log(1 + 2)
console.log(1 - 2)
console.log(2 * 2)
console.log(4 / 2)
console.log(2 ** 3)
console.log(3 % 2)
// mathematical operations

var nameOfPerson = "bob"
var stringOne = "I'm a string"
var stringTwo = 'I\'m a string'
var stringThree = `I'm a string, hello ${nameOfPerson}`
console.log(stringOne)
console.log(stringTwo)
console.log(stringThree)
// different ways of displaying a string (\' is instead of ')

console.log(null)
var MyVariable
console.log(MyVariable)
console.log(typeof NaN)
console.log(5 * "The string hello")
// null represents Undefined (nothing there)
// Nan shows an impossible function 

// if (boolean) {
    // code to be executed
// }

if (1 > 0){
    console.log("1 is greater than 0")
} else if (1==0){
    console.log("1 is equal to 0")
} else{
    console.log("1 is not greater than 0")
}
// how to set out if statements

if (null) {
    console.log("it's truthy")
} else {
    console.log("it's falsey")
}
// syntax for if statements

console.log(3 + "hello")
// javascript just displays what it thinks is right

console.log(2 ==2)
console.log(2 =="2")
console.log(2 ==="2")
// === displays whether the types are equal
// != is the same as writing 'Not equal to'


console.log((1 + 1 === 2) && (1+1 === 4))
console.log((1 + 1 === 2) || (1+1 === 4))
// '&&' and statement
// '||' or statement

