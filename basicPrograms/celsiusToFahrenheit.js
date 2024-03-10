const prompt = require('prompt-sync')()

// celsius to fahrenheit ----------------------
const userInput1 = prompt("Enter Celsius: ")
function celsiusToFahrenheit(userData) {
	return ((9/5) * userData) + 32
}
console.log(celsiusToFahrenheit(userInput1))



// fahrenheit to celsius ----------------------

// const userInput2 = prompt("Enter Fahrenheit: ")
// function celsiusToFahrenheit(userData) {
// 	return ((userData - 32) * 5)/9
// }
// console.log(celsiusToFahrenheit(userInput2))