// singleton
// Object.create

// object literals

const sym = Symbol("key1")

const jsUser = {
    name: "Jaiyant",
    "full name": "Jaiyant Jakhar",
    age: 22,
    location: "Delhi",
    [sym]: "symbol"
}

// console.log(jsUser.name)
// console.log(jsUser["location"])
// console.log(jsUser["full name"]) // full name cannot be accessed using . notation
// console.log(jsUser.sym) // cannot access symbol like this
// console.log(jsUser[sym])
// console.log(jsUser)


// Object.freeze(jsUser) // to freeze changes to object

jsUser.greeting = function(){
    console.log("Hello js user")
}

jsUser.greeting2 = function(){
    console.log(`Hello js user ${this["full name"]}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greeting2())

