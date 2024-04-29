const prompt = require('prompt-sync')()
const marks = parseInt(prompt("Please Enter Obtain Marks? : "))

function findGrade(marks) {
	if (marks > 80) {
		console.log(`Your marks is ${marks} and you have a grade :- "A"`)
	} else if (marks > 60 && marks <= 80) {
		console.log(`Your marks is ${marks} and you have a grade :- "B"`)
	} else if (marks > 50 && marks <= 60) {
		console.log(`Your marks is ${marks} and you have a grade :- "C"`)
	} else if (marks > 45 && marks <= 50) {
		console.log(`Your marks is ${marks} and you have a grade :- "D"`)
	} else if (marks > 25 && marks <= 45) {
		console.log(`Your marks is ${marks} and you have a grade :- "E"`)
	} else if (marks < 25) {
		console.log(`Your marks is ${marks} and you have a grade :- "F"`)
	}
}

findGrade(marks)