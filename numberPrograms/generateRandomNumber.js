function randomNumber(min, max) {
	return Math.floor((Math.random() * (1 + max - min)) + min)
}

console.log(randomNumber(1, 6))