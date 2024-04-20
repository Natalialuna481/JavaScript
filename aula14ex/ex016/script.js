function executar() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p == 0) {
            p = 1
        }
        if (i < f) {
            res.innerHTML = `Contando: <br>`
            while (i <= f) {
                res.innerHTML += `${i} 👉`
                i += p
            }
        } else {
            res.innerHTML = `Contando: <br>`
            while (i >= f) {
                res.innerHTML += `${i} 👉`
                i -= p
            }
        }
        res.innerHTML += ` 🏁`
    }
}
