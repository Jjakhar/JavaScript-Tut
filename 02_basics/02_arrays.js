const marvelHeros = ["ironman", "thor", "doctor starnge"]
const dcHeros = ["superman", "wonder woman", "aquaman"]

// console.log(marvelHeros)
// console.log(dcHeros)

// marvelHeros.push(dcHeros)
// console.log(marvelHeros)

// const concatArr = marvelHeros.concat(dcHeros)
// console.log(concatArr)


// spread operator ...

let spreadArr = [...marvelHeros, ...dcHeros]
// console.log(spreadArr)
// console.log(typeof spreadArr)


// let nestedArr = [1, 2, [3, 4, [5, 6]], [7, 8], 9, 10]
// let flatendArr = nestedArr.flat(Infinity)
// console.log(nestedArr)
// console.log(flatendArr)


console.log(Array.isArray("Jaiyant Jakhar"))
console.log(Array.from("Jaiyant Jakhar"))
console.log(Array.from({name:"Jaiyant Jakhar"})) // interesting

let cnt1 = 12
let cnt2 = 23
let cnt3 = 33
let cntArr = Array.of(cnt1, cnt2, cnt3)
console.log(cntArr)
