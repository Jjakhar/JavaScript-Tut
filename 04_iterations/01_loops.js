// for of loop
// gives value

const arr = [1, 2, 3, 4, 5]

// for(const i of arr){
//     console.log(i)
// }

// maps

const myMap = new Map()

myMap.set('IN', 'India')
myMap.set('UK', 'United Kingdom')
myMap.set('IN', 'India')

// console.log(myMap)

// for(const i of myMap){
//     console.log(i)
//     // console.log(i[0])
// }

// for(const [key, value] of myMap){
//     console.log(key, '=>', value)
// }

// for of loop on object
// objects are not iteratable using for of loops

// const myObj = {
//     game1: 'Bgmi',
//     game2: 'Spiderman'
// }

// console.log(myObj)

// for(const i of myObj){
//     console.log(i)
// }


// for in loop
// gives key

// const myObj2 = {
//     js: 'Javascript',
//     cpp: 'C plus plus',
//     swift: 'Swift by Apple'
// }

// console.log(myObj2)

// for(const key in myObj2){
//     console.log(key, '=>', myObj2[key])
// }


// for each loop

const coding = ['c', 'c++', 'python', 'js']

// coding.forEach( function (item) {
//     console.log(item)
// } )


// coding.forEach( (item) => {
//     console.log(item)
// } )

// function print(item){
//     console.log(item)
// }

// coding.forEach(print)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr)
// } )

const myCoding = [
    {
        name: 'javascript',
        ext: 'js'
    },
    {
        name: 'c plus plus',
        ext: 'cpp'
    },
    {
        name: 'python',
        ext: 'py'
    }
]

// console.log(myCoding)

myCoding.forEach((item) => {
    console.log(item.name)
})