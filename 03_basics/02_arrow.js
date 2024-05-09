const user = {
    name: "Jaiyant Jakhar",
    price: 999,
    
    welcomeMessage: function(){
        console.log(`${this.name}, welome`)
    }
}

// user.welcomeMessage()
// user.name = "Jakhar"
// user.welcomeMessage()

console.log(this) // empty object in node environment

function fun1(){
    console.log(this) // but cannot use function variables or objects using "this" inside function
}

// fun1()

const fun2 = () => {
    console.log(this) // empty object
}

// fun2()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

const addTwo = (num1, num2) => (num1 + num2)

const GetObject = () => ({name: "Jaiyant Jakhar"})
// const GetObject = () => {return {name: "Jaiyant Jakhar"}}
// use () if {} are used to return implicitly or return explicitly

console.log(addTwo(3, 4))
console.log(GetObject())