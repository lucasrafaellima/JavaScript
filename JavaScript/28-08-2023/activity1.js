let any = prompt("type something: ")
let test = prompt("type again: ")

function reverseString(str) {
    let split = str.split("")
    let reverse = split.reverse()
    let join = reverse.join("")
    return join
}

console.log(reverseString(any))
console.log(reverseString(test))