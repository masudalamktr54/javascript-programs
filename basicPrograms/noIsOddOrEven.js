const prompt = require('prompt-sync')();
let userInput = prompt("Please enter a number ")
if (userInput % 2 === 0) {
	console.log(`${userInput} : is a Even number`)
} else {
	console.log(`${userInput} : is a odd number`)
}