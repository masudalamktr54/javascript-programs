const prompt = require('prompt-sync')()
const number1 = parseInt(prompt("Please Enter a First Number? : "))
const number2 = parseInt(prompt("Please Enter a Second Number? : "))
const number3 = parseInt(prompt("Please Enter a Third Number? : "))
const threeNumbers = (num1, num2, num3) => {
	if (num1 > num2 && num1 > num3) {
		console.log(`Greatest Number is: ${num1} , This is Third Number.`)
	} else if (num2 > num1 && num2 > num3) {
		console.log(`Greatest Number is: ${num2} , This is Third Number.`)
	} else {
		console.log(`Greatest Number is: ${num3} , This is Third Number.`)
	}
}

threeNumbers(number1, number2, number3)