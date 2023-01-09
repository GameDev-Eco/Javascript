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
        var img = document.createElement('img')
        img.setAttribute('img', 'foto')
        if (formSex[0].checked) {
            gen = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'fotomenino.png')
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'fotogaroto.png')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'fotoadulto.png')
            }else{
                //idoso
                img.setAttribute('src', 'fotoidoso.png')
            }
        }else{
            gen = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'fotomenina.png')
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'fotogarota.png')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'fotoadulta.png')
            }else{
                //idoso
                img.setAttribute('src', 'fotoidosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} de ${idade} anos.`
        img.style.padding = '15px'
        res.appendChild(img)
    }
}