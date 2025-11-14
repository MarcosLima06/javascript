function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'

            if(idade >=0 && idade < 3){
                //Bebe
                img.setAttribute('src', '/bebe-menino.jpg')
            }else if (idade < 12){
                //Criança
                img.setAttribute('src', 'criança-menino.jpg')
            } else if (idade >12 && idade < 17){
                //jovem
                img.setAttribute('src', 'jovem-menino')
            
            }else if (idade < 50){
                //adulto
            }else {
                //idoso
            }

        } else if(fsex[1].checked){
            genero = 'Mulher'

            if(idade >=0 && idade < 3){
                //Bebe
                
            }else if (idade < 12){
                //Criança
            } else if (idade >12 && idade < 17){
                //jovem
            
            }else if (idade < 50){
                //adulto
            }else {
                //idoso
            }

        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        
    }
}