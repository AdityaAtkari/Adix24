const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length); // converting into string to use strings methods
console.log(balance.toFixed(1));

const anotherNumber = 123.899
console.log(anotherNumber.toPrecision(3))

const hundreds = 100000
console.log(hundreds.toLocaleString()) // by default it is US based

console.log(hundreds.toLocaleString('en-IN')) // now it give value according indian system

// xxxxxxxxxxxxxxxxxxx Maths xxxxxxxxxxxxxxxxxxxxx

console.log(Math); // (Math) it is object and has multiple properties
console.log(Math.abs(-4))
console.log(Math.round(5.2))  // behaves normal as per the system

console.log(Math.ceil(5.2))  // jara si bhi 5 se uppar rahi 6 le lega

console.log(Math.floor(5.8)) // 5 hi lega niche vali(lower value pe round off kar deta hai)

console.log(Math.max(2,5,8,7,9))

console.log(Math.min(2,5,8,7,9))

console.log(Math.random()) // always give random value between 0 and 1

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1)) + min)
