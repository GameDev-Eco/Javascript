function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    //var hora = 20
    
    if (hora < 12) {
        msg.innerHTML = `Bom dia!<br>Agora são <strong>${hora}:${minuto}</strong> `
        img.src = 'fotomanha.png'
        document.body.style.background = '#D4C1D4'
    }else if (hora < 18) {
        msg.innerHTML = `Boa tarde!<br>Agora são <strong>${hora}:${minuto}</strong> `
        img.src = 'fototarde.png'
        document.body.style.background = '#D68978'
    }else{
        msg.innerHTML = `Boa noite!<br>Agora são <strong>${hora}:${minuto}</strong> `
        img.src = 'fotonoite.png'
        document.body.style.background = '#213552'
    }
}
