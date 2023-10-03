let v = 1
let v1 = -2
let v3 = 0
let r = v/0
let r2 = v1/0
let r3 = v3/0

console.log(r)
console.log(r2)
console.log(r3)

if (isNaN(r3) || r3 != r3) {
    console.log("is " + r3)
} else {
    console.log("isn't NaN")
}