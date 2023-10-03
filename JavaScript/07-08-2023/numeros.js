let x = 2
let y = Math.random()
let raio = 4
let pi = Math.PI

let area = Math.pow(raio,2) * pi 

console.log("potencia: " + Math.pow(x,53))
console.log("aleatorio: " + y)
console.log("area circunferencia: " + area)

let zero = 0
let zer = -0

if (zero === zer) {
    console.log("zeros equivalentes")
}

let date = new Date(2023, 4, 23)

console.log(date.getMonth())
console.log(date.getDay())
console.log("data: " + date.toLocaleDateString(date))