// Variable Declaration and Initialization

// const name = "Sourav"
// console.log(name)

// let name = "JavaScript"
// //name = name + " is fun"
// name = `${name} is fun`
// console.log(name)

// const age = 25
// console.log("My Age is: " + age)



//********************** */


// Data Types in JavaScript
// let string1 = "Hello"
// let string2 = "World"
// let result = string1 + " " + string2
// console.log(result)

// let booleanValue = true
// console.log("The value of booleanValue is: " + booleanValue)

// let undefinedVariable
// console.log("The value of undefinedVariable is: " + undefinedVariable)


//********************** */


// Array in JavaScript
// let array = ["Ram", 2, true , 4, "Shyam"]
// console.log("The value of array is: " + array[2])


//********************** */



//Object in JavaScript
// let person = {
//     name: "Sourav",
//     age: 25,
//     isEmployee: true
// }
// console.log("The name of the person is: " + person.name)
// console.log("The age of the person is: " + person.age)
// console.log("Is the person an employee? " + person.isEmployee)



//********************** */


//function in JavaScript
// function greet(name) {
//     return "Hello, " + name + "!"
// }
// console.log(greet("Sourav"))


// //********************** */

// //Arrow Function in JavaScript
// const add = (a, b) => {
//     return a + b
// }
// console.log("The sum of 5 and 1 is: " + add(5, 1))

// const sayHi = (name) => {
//     return `Hi, ${name}!`
// }
// console.log(sayHi("Sourav"))


// const sayHello = (name , age) => {
//     console.log(`Hello, ${name}! You are ${age} years old.`)
// }
// sayHello("Sourav", 25)

// const multiply = (a, b) => a * b
// console.log("The product of 5 and 1 is: " + multiply(5, 1))

// const sayGoodbye = (name ,age) =>{
//     console.log(`Goodbye , ${name}`)
//     return age
// }
// const ageValue = sayGoodbye("Sourav", 25)
// console.log("The age value is: " +ageValue)


// const sayWelcome = (age) => {
//     age = 20
//     return age
// }
// const welcomeAge = sayWelcome()
// console.log("The welcome age is: " + welcomeAge)


//********************** */
//If-Else Statements in JavaScript
let age = 18
if(age >= 18){  
    console.log("You are an adult.")
} else {
    console.log("You are a minor.")
}


//********************** */

//Loops in JavaScript
for(let i = 0; i < 5; i++){
    console.log("The value of i is: " + i)
}

//********************** */

//Looping through Object Properties using for...in

const person = { name: "Alice", age: 22, city: "Delhi" };

for (let key in person) {
  console.log(person[key]);
}

const numbers = [1, 2, 3, 4, 5]
for (let i = 0; i < numbers.length; i++) {
    console.log("The number is: " + numbers[i])
}

//********************** */
//While Loop
let count = 0
while(count < 5) {
    console.log("Count is: " + count)
    count++
}

//********************** */
//Do...While Loop
let num = 0
do {
    console.log("Number in do-while: " + num)
    num++
} while(num < 3)
{
    console.log("This block executes after the do-while loop.")
}

//********************** */
//For...Of Loop (iterates over values directly)
const fruits = ["Apple", "Banana", "Orange"]
for (let fruit of fruits) {
    console.log("Fruit: " + fruit)
}


