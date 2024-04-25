const myArr = [1, 2, 3, 4, 5]

const newArr = new Array("jaiyant", "jakhar")

// console.log(myArr[2])
// console.log(newArr[1])

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// unshift() for inserting at start of the array (same as push_fornt in c++)
// shift() for popint from start of the array (same as pop_front in c++)

// console.log(myArr)

// const joinArr = newArr.join() // join all array elements into a string
// console.log(newArr)
// console.log(joinArr)
// console.log(typeof joinArr)


// slice and splice

console.log("A ", myArr)

let sliceArr = myArr.slice(1, 3)
console.log(sliceArr)
console.log("B ", myArr)

let spliceArr = myArr.splice(1, 3)
console.log(spliceArr)
console.log("C ", myArr)

// slice does not include the second index but splice does also splice manipulates the original array