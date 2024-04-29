let arr = [1, 2, 3, 4, 5, 0, 7, 9, 6]
const missingNumber = (arr) => {
	const n = arr.length + 1
	const sumOfNum = (n * (n - 1)) / 2

	let sumOfArr = 0
	for (let i = 0; i < arr.length; i++) {
		sumOfArr = sumOfArr + arr[i]
	}
	return sumOfNum - sumOfArr
}
console.log("This is the Missing Number: ", missingNumber(arr))