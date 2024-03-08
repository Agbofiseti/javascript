console.log('Arrays intro')


// In programming, uite often we will need an ordered collection, where we have a 1st, 2nd, 3rd element and so on. For example, we need that to store a list of something: users, items, elements etc.


// declaration of array
const months = ["january",'february','march','april']
console.log(months)

// array element are numbered, starting from 0
// we can get an element by its number in a square bracket

const books = ['pious wife', 'things fall apart', 'master return','futile endeavor']
console.log(books[2])

// we can replace an element in array
const books1 = ['pious wife', 'things fall apart', 'master return','futile endeavor']
books1[0] = "woman of Owu"
console.log(books1)

// add an element into an array
const books2 = ['pious wife', 'things fall apart', 'master return','futile endeavor']

books2[3] = 'woman of owu'
console.log(books2)

// array can store elements of any type

const values = ['apple', {name: 'ade'}]

