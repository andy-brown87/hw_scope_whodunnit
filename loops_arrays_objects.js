var sports = ["football", "tennis", "rugby"]
console.log(sports.length)
// gets length of list

console.log(sports[0])
// gets the first property in list

sports.push("Muay Thai")
console.log("after we used push", sports)
// add to list

sports.pop("Muay Thai")
console.log("after we used pop", sports)
// removes from list

sports.unshift("Muay Thai")
console.log("after we used unshift", sports)
// adds to start of list

sports.shift()
console.log("after we used shift", sports)
// removes from the start


sports.splice(1, 1, "Muay Thai", "Lethwai")
console.log("after we used splice", sports)

// first number is position(index), second is how many tp delete, 
// third is what we're adding

for (var sportWeAreCurrentlyLoopingOver of sports){
    console.log(sportWeAreCurrentlyLoopingOver)
}
// for loop, first can be whatever second is what we're looping over

for (var i = 0; i<7; i ++){
    console.log("I'm looping!")
}
// for (initialiseCounter; condition; increment counter){
// }
// syntax for looping an amount of times
// i++ is everything in list
// i+= every other thing in list

var movie = {
    title:"It's a wonderful life",
    year: 1964,
    language:"Spanish",
    "subtitle-language": "English",
    ratings: {
        critic: 94, 
        audience: 42
    }
}
movie.runningTime = 100
console.log(movie)
console.log(movie.year)
// adds another property if put outside {}
// movie.year displays that property

movie.language = "English"
console.log(movie)
// changes the property

movie["subtitle-language"]

delete movie.language
console.log(movie)
// deletes that property

console.log(movie.ratings.critic)
// displays the array inside the array

for (var key in movie){
    var value = movie[key]
    console.log(`The ${key} is: ${value}`)
}
// displays all of the keys in the array

var keys =Object.keys(movie)
console.log(keys)
// displays all of the objects in the array
// [key:object]

