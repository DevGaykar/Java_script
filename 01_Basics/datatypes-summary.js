/*
Data-Type of 
1.Primitive
 Int -> int
 String -> String
 Bool -> Boolean
 null -> Object
 undefined -> undefined
 Symbol -> Symbol
 Bigint -> bigInt 
2.Reference
 Array -> Object
 Object -> Object 
 Function -> Function
*/
// Primitive data-type
// 7 types are int,string,bool,Symbol,null,undefined,BigInt
let num = 45
let string = "Username"
let bool = true

let id1= Symbol(123)
let id2= Symbol(123)
console.log(id1 === id2);

let Temp = null
let email; //undefined

const bignumber = 23434542n
console.log(typeof bignumber)

// Non-primitive/Reference
// Object,Functions,Array

// Array
Fruits = ["Mango","Apple","WaterMelon"]
console.log( Fruits)

// Object
let emp= {
 name : "dev",
 id : 13,
}
// console.log(emp.name)
console.log(typeof emp)

// Functions
const greeting= function(){
    console.log("Hello World")
}
// console.log(typeof greeting)
greeting()

