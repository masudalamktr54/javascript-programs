const prompt = require("prompt-sync")()
let num1 = parseInt(prompt("Please Enter a First Number: "))

if (num1 < 1) {
	console.log(`First Number is ${num1}: ${num1} is not a Natural Number`)
	return console.log(" please Enter a valid Number")
}

let num2 = parseInt(prompt("Please Enter a Second Number: ")
)
if (num2 < 1) {
	console.log(`Second Number is ${num2}: ${num2} is not a Natural Number`)
	return console.log(" please Enter a valid Number")
}

let sum = num1 + num2
console.log(`Sum of the Numbers: ${num1} + ${num2} = ${sum}`)