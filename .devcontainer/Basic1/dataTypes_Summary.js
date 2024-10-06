//Primitive DataTypes

// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

const scoce= 100
const scorceValue = 100.3

const isloggedIn = false
const oustsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 3467890987645423465768798n
console.log(typeof bigNumber);


// Reference Type (Non-Primitive DataTypes)
// Array, Objects, functions => always return object 

const heros = ["saktiman", "naaraj", "doga"]
let obj = {
    name: "rahul",
    age: 22,
}

const myfunction = function(){
    console.log("Hello Word");
}

console.log(typeof myfunction);


