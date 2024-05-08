const user = new Object() // singleton object

user.id = "123abc"
user.name = "Jaiyant"

// console.log(user)

const anotherUser = {
    email: "anotherUser@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Jaiyant",
            lastName: "Jakhar"
        }
    }
}

// console.log(anotherUser.fullName.userFullName.lastName)


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2) // first {} is target object remaining are source
const obj3 = {...obj1, ...obj2} // spread operator

// console.log(obj3)

// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))

// console.log(user.hasOwnProperty('idd'))


// destructuring object using {}

const newObj = {
    key: "value",
    bigKeyName: "welcome guys"
}

// console.log(newObj.bigKeyName)

const {bigKeyName} = newObj
console.log(bigKeyName)

const {bigKeyName: smallName} = newObj
console.log(smallName)