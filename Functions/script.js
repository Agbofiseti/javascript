console.log("function intro")

// A javascript function is a block of code designed to perform a particular task.function are main building blocks of any program, they allow code to be called many times without repitition.

// declaration of function (defining a function)

// example 1
function square (number) {
    console.log("i am here for you")
    return number * number
}
// function calling

const result1 = square(10)
console.log(result1)

// example 2
function add (x) {
    console.log("its correct")
    return x + x
}

const result2 = add(2)
console.log(result2)


// exercise

// function divide (x) {
//     console.log("get it")
//     return x / x
// }
// const result3 = divide(4)
// console.log(result3)



// function minus (x) {
//     console.log("its error")
//     return x - x
// }
// const plus = minus(16)
// console.log(plus)

// correction
function divide (x, y) {
    console.log("divide the two numbers by itselves")
    return x / y
}

const result3 = divide(1000, 500)
console.log(result3)

function sub (a, b) {
    console.log("subtract the two number")
    return a - b
}
const result4 = sub(50, 20)
console.log(result4)