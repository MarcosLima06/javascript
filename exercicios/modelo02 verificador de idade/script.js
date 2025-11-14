function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO]Verifique os dados e tente novamente')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')


        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 5){
                //Bebe
                img.setAttribute('src', 'imagens/bebe-menino.png')
                
            } else if (idade < 12){
                //Criança
                img.setAttribute('src', 'imagens/criança-menino.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'imagens/jovem-menino.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'imagens/adulto-homen.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idoso-homem.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 5){
                //Bebe
                img.setAttribute('src', 'imagens/bebe-menina.png')
                
            } else if (idade < 12){
                //Criança
                img.setAttribute('src', 'imagens/criança-menina.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'imagens/jovem-menina.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'imagens/adulta-mulher.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idoso-mulher.png')
            }

        }
        res.style.textAlign ='center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        
    }

}