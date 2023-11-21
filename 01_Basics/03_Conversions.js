// *************** Number Conversion *********************
let num = 0
// console.log(num)
// console.log(typeof num)

num = String(num)
// console.log(typeof num)

num = Boolean(num)
/*
If number then -> True
Else -> False
*/
// console.log(num)


// ************** String Conversion ******************
 let str  = "33"
// console.log(typeof str)

str = Number(str)
/*
if string == number(0 to 9) then converts it to a number
   string == "67agc" then Nan

*/
// console.log(typeof str)


str = Boolean(str)
/*
if string is empty "" -> False 
else -> True
*/
// console.log(str)


//******************Boolean Conversion*********************
let bool1 = true
let bool2 = false

bool1 = Number(bool1)
bool2 = Number(bool2)
/*
if Boolean = true -> 1
else Boolean = false -> 0
*/
// console.log(bool1)
// console.log(bool2)

bool1 = String(bool1)
bool2 = String(bool2)
/*
if Boolean = true -> true
else Boolean = false -> false
*/
console.log( bool1)
console.log( bool2)