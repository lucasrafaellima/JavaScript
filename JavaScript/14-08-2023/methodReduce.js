const num1 = [1, 3, 4, 1, 4, 5, 3, 5, 8, 9];

let non_repeat = num1.reduce(function(non_repeat, numAtual) {
    if (non_repeat.indexof(numAtual) < 0) {
        non_repeat.push(numAtual)
    }
    return non_repeat 
}, [])