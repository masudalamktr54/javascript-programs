const prompt = require("prompt-sync")()
let val1 = prompt("Please Enter First Numbers: ")
let val2 = prompt("Please Enter Second Numbers: ")
// 1st logic------------------
// let temp
// temp = val1
// val1 = val2
// val2 = temp

// 2nd logic------------------
if (val1 === Number && val2 === Number) {
	val1 = val1 + val2
    val2 = val1 - val2
    val1 = val1 - val2
}

console.log(`Swap Number is: val1 = ${val2}, val2 = ${val1}`)