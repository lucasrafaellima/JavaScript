let arr = [1, 2, 3]
let arr2 = [4, 5, 6]

console.log(typeof arr.toString())
console.log(arr.join(" - "))
let arr3 = arr.concat(arr2)
console.log(arr3)

let arr4 = [].concat(arr3)
arr4[arr4.length] = "pao"

console.log(arr4)