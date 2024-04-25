// Dates

let myDate = new Date()

// console.log(myDate)
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
console.log(myDate.toString())

// let myCreatedDate = new Date(2002, 10, 20)
// let myCreatedDate = new Date("2002-11-20")
let myCreatedDate = new Date("11-20-2002")

console.log(myCreatedDate.toDateString())

let myTimeStamp = Date.now()

console.log(myTimeStamp)
console.log(myCreatedDate.getTime())
console.log(Math.floor(myTimeStamp / 1000)) // converting to seconds

// we can do a lot of customizations with Date.toLocaleString()

console.log(myCreatedDate.toLocaleDateString("default", {
    weekday:"long"
}))

