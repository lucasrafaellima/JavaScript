function value(x) {
    if (x) {
        return true
    } else {
        console.log(x)
        return false
    }
}

let v = parseInt(prompt("enter a value: "))
console.log(value(v))