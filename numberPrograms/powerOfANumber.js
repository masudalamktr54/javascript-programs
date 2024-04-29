const prompt = require('prompt-sync')()

// first method -------------------------------
const PowerNumber = (num) => {
	console.log(Math.pow(num, 2))
}
PowerNumber(25)


// second method -------------------------------

// const number = parseInt(prompt("Please Enter a Number? : "))
// const power = parseInt(prompt("Please Enter power? : "))
// const PowerNumber2 = (num) => {
// 	for (let i = 1; i <= power; i++) {
// 		num = num * number
// 	}
// 	console.log(num)
// }
// PowerNumber2(1)