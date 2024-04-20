function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = window.document.getElementById('txtano');
    var res = window.document.getElementById('res');

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/homem/bebê-menino.jpg');
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/homem/adulto.jpg');
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/homem/idoso.jpg');
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/mulher/bebê-menina.jpg');
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/mulher/adulta.jpg');
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/mulher/idosa.jpg');
            }
        }

        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`;
        res.appendChild(img);
    }
}
