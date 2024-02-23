console.log('Arrow function')


// function name () {
//     console.log("i am a function declaration")
// };
// name ()

const name = () => {
    console.log("i am an arrow function")
}
name ()
// We can also return it instantly if we only have one thing to return
const square = (number) => number * number

const result = square(100)
console.log(result)

const square1 = (number) => {
    return number * number;
};
const result1 = square1(100);
console.log(result1);



const name3 = (add) => {
    return add * add;
};
const result4 = name3(10);
console.log(result4);

const name2 = (add) => add * add

const result5 = name2(10)
console.log(result5);