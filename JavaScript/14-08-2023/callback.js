function minhaFuncao(callback) {
    console.log("executando 'minhafuncao'")
    callback();
}

function minhaCallback() {
    console.log("executando 'minhaCallback'")
}

minhaFuncao(minhaCallback)