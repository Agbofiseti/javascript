console.log('parameters vs argument')

// parameters are used when defining a function , they are the names created in the function definition, parameters is like a variable that is only meaningful inside a function.
const sayI = (name, age) => {
    console.log(`${name}, is ${age} years old`)
}

// Arguments are real value passed when making a function call.
sayI ('adekunle', 18)

const student = (name, info) => {
    console.log(`${name} is a ${info} of dltafrica`)
}

student('Toyyib', 'cohort')



// Exercise

const student2 = (name, age, school, town, country) => {
    console.log(`${name} is a ${age} years old of ${school} in ${town} state ${country} `)
};

student2('Tolu' , '5', 'Ads', 'Oyo', 'Nigeria')




