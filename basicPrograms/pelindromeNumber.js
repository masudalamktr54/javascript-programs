function pelindromeNumber(Number) {
	const digits1 = Number.toString().split('').join('')
	const digits2 = Number.toString().split('').reverse().join('')

	if (digits1 === digits2) {
		console.log(`${Number} is a pelindrome Number`)
	} else {
		console.log(`${Number} is not a pelindrome Number`)
	}	
}
pelindromeNumber(12521)