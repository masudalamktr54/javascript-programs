const prompt = require('prompt-sync')()
const number1 = parseInt(prompt("Please Enter a First Number? : "))
const number2 = parseInt(prompt("Please Enter a Second Number? : "))
const threeNumbers = (num1, num2) => {
	if ((num1 % 10) == (num2 % 10)) {
		console.log(`This is the same last digits Number. The Number is: ${num1} and ${num2}`)
	} else {
		console.log(`This is the different last digits Number. The Number is: ${num1} and ${num2}`)
	}
}

threeNumbers(number1, number2)