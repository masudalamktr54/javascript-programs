const prompt = require('prompt-sync')();
let userInput = prompt("Please Enter a Number: ")
if (userInput > 0) {
	console.log(`${userInput} is a Positive Number`)
} else if(userInput < 0) {
	console.log(`${userInput} is a Negative Number`)
} else {
	console.log(`Number is a Zero`)
}