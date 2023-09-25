// Task: 20 minutes
// Declare a named function that takes an array of numbers, and returns the sum, 
// or total, of all of the numbers in the array.

// function addNumbers(firstNumber, secondNumber, thirdNumber){
//     return firstNumber + secondNumber + thirdNumber
// }
// console.log(addNumbers(1,2,3))

function calculateTotal(numbers) {
    var sum = 0
    for (var i = 0; i<numbers.length; i++) {
    sum += numbers[i]
    }
    for(var number of numbers)
    return sum
}
console.log(calculateTotal([10,3,2,4]))


// Define an anonymous function expression that takes two arguments:
// an object, for example, { name: 'Wojtek', age: 30 }
// a string, for exmaple, 'name'
// Your function should return true if the given string is a key on the given 
// object and false if the object does not have a key that matches the string. 
// Store this function in an appropriately named variable to invoke it.

var isKeyOf = function (object, stringToSearch) {
    for (var key in object) {
        return stringToSearch === key
    }
}

var person = {
    name: 'Wojtek',
    age: 30
}

var keyIsFound = isKeyOf(person, 'name');
var keyNotFound = isKeyOf(person, 'email');

console.log('keyIsFound - should be true:', keyIsFound);
console.log('keyNotFound - should be false:', keyNotFound);

