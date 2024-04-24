let score = "33abc"

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)

console.log(typeof valueInNumber)
console.log(valueInNumber)

/* 
when converting into number
"33" => 33
"33abc" = NaN
null => 0
undefined => NaN
true => 1 and false => 0
*/

/*
when converting into boolean
1 -> true, 0 -> false
"" -> false, "af" -> true
*/

let someNumber = 1213
let toString = String(someNumber)

console.log(typeof toString)
console.log(toString)


