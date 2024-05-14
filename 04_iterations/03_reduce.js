const nums = [1, 2, 3, 4, 5, 6, 7, 8]

console.log(nums)

const newNums = nums.map( (num) => num + 10)

console.log(newNums)

// chaining

// const chainNums = nums
//                   .map( (num) => num * 10)
//                   .map( (num) => num + 1)
//                   .filter( (num) => num > 40)

// console.log(chainNums)

const numsReduce = nums.reduce( (acc, currVal) => {
    // console.log(acc, ' ', currVal)
    return acc + currVal
}, 0 )

console.log(numsReduce)