// // lexico scope
// var secretsFunction = function () {
//     var pinCode = [0, 0, 0, 0]
//     console.log('pinCode inside secretsFunction', pinCode)
// }
// // can only access var in this function (within these{})

// secretsFunction()
// console.log('pinCode outside secretsFunction', pinCode)
// // expect an error when it's a var 

// Let
// var filterNamesByFirstLetter = function (names, letter) {
//     var filteredNames = []
//     for (let name of names) {
//         if (name[0] === letter){
//             filteredNames.push(name)
//         }
//     }
//     return filteredNames
// }

// var students = ['Alice', 'Bob', 'Alyssia', 'Artem', 'Babs']
// var filteredStudents = filterNamesByFirstLetter(students, 'A')
// console.log('filteredStudents', filteredStudents)

// Variables declared by let are only available inside the 
// block where they're defined. Variables declared by var are 
// available throughout the function in which they're declared


// let calculateEnergy = function (mass) {
//     const speedOfLight = 299792458
//     return mass * speedOfLight **2
// }
// let energyOfMe = calculateEnergy(75)
// console.log('energyOfMe (if I had a mass of 75kg', energyOfMe)
// const means a variable cannot be reassigned


const song = {
    title:'Spread eagle across the bloc',
    artist: 'Death Grips'
}
console.log('song before mutation', song)
song.title = 'Spread eagle across the block'
console.log('song after mutation', song)

const songs = [
    song, 
    "Happy Birthday",
    "Jingle Bells"
]
console.log('songs array before mutation', songs)
songs[1] = 'Call Me Maybe'
songs.pop()
console.log('songs array after mutation', songs)
// deletes both songs and replaces with new song as [1] is second in the array