let arr = [3, 4, 1, 8, 9, 11]

let j = 0
let reduce = arr.reduce(function(counter, current, i, value) {
    console.log(i)
    console.log(j++)
    return counter + current
})

console.log(reduce)