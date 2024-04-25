const name = "Jaiyant"
let repoCount = 10

// console.log(typeof name)
// console.log(name + repoCount + " hello") // not a good practise

// instead use this ` ` ->

// console.log(`My name if ${name} and repo count is ${repoCount}`)

// console.log(name.lenght) // undefind

const gameName = new String("bgmi") // it is a String type object and we can use properties and methods of the object such as length, toUpperCase, charAt etc...

console.log(gameName)
console.log(typeof gameName)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))
console.log(gameName[0])
console.log(gameName.indexOf('i')) // return the first index and -1 if char is not present
