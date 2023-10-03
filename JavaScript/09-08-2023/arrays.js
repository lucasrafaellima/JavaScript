let arr = [45, 2, 3, 20]

let test = arr.push("olá mundo", 33, 16, true)

console.log(test)
console.log(arr)

let lastItem = arr.pop()

console.log(lastItem)
console.log(arr)

let firstItem = arr.shift()
console.log(firstItem)
console.log(arr)

let secondItem = arr.unshift(2, 20)
console.log(secondItem)
console.log(arr)

let takeSlice = arr.slice(4, 7)
console.log(takeSlice)
console.log(arr)
