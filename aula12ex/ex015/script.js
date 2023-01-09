function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('itxtAno')
    var res = document.querySelector('div#res')
    if (formAno.value.length == 0 || formAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var formSex = document.getElementsByName('radSex')
        var idade = ano - Number(formAno.value)
        var gen = ''
        if (formSex[0].checked) {
            gen = 'Homem'
        }else{
            gen = 'Mulher'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} de ${idade} anos.`
    }
}