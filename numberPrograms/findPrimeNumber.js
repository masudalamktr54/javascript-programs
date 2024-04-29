const prompt = require('prompt-sync')()
const number1 = parseInt(prompt("Please Enter a Number, Where You want Prime Number? : "))
const number2 = parseInt(prompt("Please Enter a Number, Till you want Prime NUmber. : "))
const primeNumber = (num) => {
	if (num === 1) {
		console.log(`${num}, is neither Prime nor composite Number`)
	} else if (num > 1) {
		for (let i = 2; i < num; i++) {
			if (num % i === 0) {
				return false
			}
		}
		return true
	}
}

const primeSeries = (start, end) => {
	for (let i = start; i <= end; i++) {
		if (primeNumber(i)) {
			console.log(i)
		}
	}
}

primeSeries(number1, number2)