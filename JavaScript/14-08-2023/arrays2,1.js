const nomes = ["Lucas", "Pedro", "Alice", "Joao"]

let nomeOrdem = nomes.reduce(function(nomes, nomeAtual){
    let letra1 = nomeAtual[0]
    if (nomes[letra1]) {
        nomes[letra1]++
    } else {
        nomes[letra1] = 1
    }
    return nomes
},{})

console.log(nomeOrdem)