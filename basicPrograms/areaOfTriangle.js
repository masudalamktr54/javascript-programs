const prompt = require('prompt-sync')()
const base = prompt("Enter triangle Base ")
const height = prompt("Enter Triangle Height ")

const area = (base * height)/2
console.log(`Area of Triangle is: ${area}`)