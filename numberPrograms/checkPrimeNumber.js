const prompt = require('prompt-sync')()
const number = prompt("Please Enter a Number: ")
let isPrime = true
const primeNumber = (num) => {
	if (num === 1) {
		console.log(`${num}, is neither Prime nor composite Number`)
	} else if (num > 1) {
		for (let i = 2; i < num; i++) {
			if (num % i === 0) {
				isPrime = false
				break
			}
		}

		if (isPrime) {
			console.log(`${num}, is a prime`)
		} else {
			console.log(`${num}, is not a prime`)
		}
	}
}

primeNumber(number)