// AddTwoNumbers(3, 4) // can be accessed before initilization

function AddTwoNumbers(num1, num2){
    return num1 + num2
}

console.log(AddTwoNumbers(4, 3))

// rest operator ...

function CartPrice(...num){
    return num
}

console.log(CartPrice(200, 100, 500))


// Sum(3, 4) // cannot be accessed before initilization
const Sum = function(num1, num2){
    return num1 + num2
}

console.log(Sum(4, 5))
