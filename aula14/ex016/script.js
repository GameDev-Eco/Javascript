function contar(){
    var ini = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var pas = document.getElementById('txtpas')
    var res = document.querySelector('div#res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    }else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando passo 1')
            p = 1
        }
        if (i < f) {
            for (var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1f449}`
            }
        }else if (i > f) {
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }

    
}