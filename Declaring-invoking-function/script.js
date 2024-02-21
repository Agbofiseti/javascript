console.log("declaring-invoking-function")


// ways of declaring function

// 1- function declaration: it defines a named function

function name (parameter) {
    console.log('i am a function')
}
name ()


function sayI (name) {
    console.log(`hi, ${name}`)
}

sayI(`Habibullah`)

// 2-function expressions:it defines an anonymous function that is a function that has no name

let book = function () {
    console.log("i am a function expression")
}

book()

// 3- Arrow function: Is a shorter way of writing function expression.

const name1 = () => {
    console.log("i am an arrow function")
}

name1()

const team = (players) => {
    console.log(`we have ${players} players in the team`)
}

team(25)


const alphabets = (alphabets) => {
    console.log(`there are ${alphabets} alphabets in the novel`)
}
alphabets(1000000)