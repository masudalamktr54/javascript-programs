const prompt = require('prompt-sync')()
const number1 = parseInt(prompt("Please Enter a Number, For Factors? : "))

const findFactors = (num) => {
		for (let i = 1; i <= num; i++) {
			if (num % i === 0) {
				console.log(i)
			}
		}
	}

	findFactors(number1)