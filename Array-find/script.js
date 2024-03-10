console.log('Array find')

// Array find method: find an element in the array that matches a condition, most especially it returns the first value that certisfy the condition

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const value = numbers.find((number) => {
    return number > 6
})

console.log(value)

const states = ['Abia', 'Ogun', 'Oyo', 'Ekiti', 'Osun', 'Ondo']
const findState = states.find((state) => {
    return state.startsWith("O")
})

console.log(findState)

const countries = ['Nigeria', 'Ghana', 'America']
const findCountry = countries.find((country) =>{
    return country.startsWith('N')
})

console.log(findCountry)