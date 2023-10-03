const arr = [1, 2, 4, "hello", true]

var nums = arr.every(function(el) {
    return typeof el === "number"
})

var nums1 = arr.some(function(el) {
    return typeof el === "number"
})

var nums2 = arr.filter(function(el, i, arr1) {
    return el
})

var arr2 = []

arr.forEach(function(el, i) {
    if (typeof el === "number") {
        arr2.push(el)
    } 
})

var nums3 = arr.map(function(el, i, arr1) {
    if (typeof el === "number") {
        return el * el
    } else {
        return el
    }
    
})

console.log(nums)
console.log(nums1)
console.log(nums2)
console.log(arr2)
console.log(nums3)