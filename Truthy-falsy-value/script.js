console.log("Truthy and falsy values")

// in javascript we also have something called truthy and falsy values.
// Truthy expressions always evaluate to boolean true
// And falsy evaluate to boolean value false.

// The easiest way to understand the TRUTHY & FALSY values is to memories the falsy values which are six (6) in number;

// 1- false  2- 0  3- null  4- undefined  5- NaN  6- ""

if (false) {
    console.log("come in")
}else {
    console.log("go out")
}

const dogs = 8

if (dogs) {
    console.log('you have ${dogs} dogs')
}else {
    console.log("you have no dogs")
}

const cats = 10

if (cats < 11) {
    console.log('you have ${cats} cats')
}else {
    console.log('you have no cats')
}


if (false) {
    console.log("am in")
}else {
    console.log("am out")
}

if (0) {
    console.log("i have a ball")
}else {
    console.log("i have no ball")
}

if (null) {
    console.log("am in")
}else {
    console.log("am out")
}

if (undefined) {
    console.log("am out")
}else {
    console.log("am in")
}

if (NaN) {
    console.log("am in")
}else {
    console.log("am out")
}

if ("") {
    console.log("am out")
}else {
    console.log("am in")
}

