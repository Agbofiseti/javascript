console.log('Array Filter')

// Filter method does as the name implies, it filter certain element from an array.

const numbers = [-10, 0, -2, 15, -36, 25]
const positiveNumbers = numbers.filter((number) =>{
    return number >= 0
})

console.log(positiveNumbers)

// example 2. A start up wants to reward the employees with 7 or more hours of overtime

var employeeData = [
    {
        name: 'Abdullateef',
        overtime: 5
    },
    {
        name: 'Habibullahi',
        overtime: 10
    },
    {
        name: 'Toyyib',
        overtime: 12
    },
    {
        name: 'Tijani',
        overtime: 5
    }
]

const employeesToReward = employeeData.filter((employee) => {
    return employee.overtime >= 7
})

console.log(employeesToReward)