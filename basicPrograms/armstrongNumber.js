function armstrongNumber(Number) {
	let digits = Number.toString().split('')
	let arrLength = digits.length
	let sum = digits.reduce(
		(acc, digit) => (acc + Math.pow(parseInt(digit),arrLength)),0)
	console.log(parseInt(digits))

	if (sum === Number) {
		console.log(`${Number} is a armstrong Number`)
	} else {
		console.log(`${Number} is not a armstrong Number`)
	}
}
armstrongNumber(153)