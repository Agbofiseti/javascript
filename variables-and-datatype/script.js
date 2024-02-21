
// data types
// there are few types of value, called data types.

// we can seperates data types into two groups;

// 1. Primitive data types:
// a. string:"welcome to string"
// b. Number:1 , 2 , 3 , 5
// c. Boolean: Boolean represent a logical entity and can only have two values; true or false
// d. Null: this types has only one value: null
// e. undefined: A variable that has not been assigned a value is undefined
// f. symbol: used as an identifier for object properties

// 2. Complex data types
//   Object: is the most important data types and forms the building of modern javascript.


// STRING as a datatype
// A string is a datatype used to represent text
const exampleString = "hello world"
console.log( typeof exampleString)

// types of strings

// 1. single qoutes

const singleQuote = 'single quote'
console.log(singleQuote)

// 2. Double quotes
const doubleQuote = "double quote"
console.log(doubleQuote)
// note:there is no difference between double and single quotes, they are also called simple string, they're not complex.

// backticks = ``

const backticks = `hello!!, ${doubleQuote}, ${singleQuote}`
console.log(backticks)

// note: backticks is a complex strings cus it provides extended functionality that allows us to embed variable and expressions into a string by wrapping them into a dollar sign $ and {}

const firstName = 'sodeeq'
const lastName = 'abdulmuhmin'
const name =`${firstName}, ${lastName}`
console.log(name)

const age =  20
const name1 = `my name is sodiq i am ${age} years old`
console.log(name1)

const add = `2 + 2`
console.log(add)

const add2 = `${2+3}`
console.log(add2)

// exercise

const name3 = "my name is abdullateef"
const school = "i attended ads grammar school ilobu osun state"
const town = "i am a native of Asi"


const data = `${name3}, ${school}, ${town}`
console.log(data)


const type = "my name is Titilope habibullahi ajibola"
const school2 = "i attended ilesha grammar school ilesha osun state"
const town1 = "i am a native of ilobu"

const type1 =`${type}, ${school2}, ${town1}`
console.log(type1)
