console.log('Array Includes')
// The array includes checks if an array contains a certain value added to it and return a boolean true/false

const numbers = [1, 2, 3]
const result =numbers.includes(2)
console.log(result)

const animals = ['dog', 'cat', 'rabbit']
const pets = animals.includes('cat')
console.log(pets)

var bookshelf = [
    "little woman",
    "things fall apart",
    "woman of owu",
    "pious wife",

];
if (bookshelf.includes('pious wife') === true) {
    console.log('The book you were looking for was found')
}else{
    console.log('Not yet found, sorry')
}

const nigeria = ['Corruption', 'Theft', 'Plagiarm']
if (nigeria.includes('Corruption') === false) {
    console.log('Nigeria is bad')
}else{
    console.log('we are moving forward')
}