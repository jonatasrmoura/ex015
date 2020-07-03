function verificar() {
    var data = new Date();
    var ano = data.getFullYear(); // Pega o ano atual
    var fAno = document.querySelector(`input#txtano`);
    var res = document.querySelector(`div#res`);

    /*verificar se o ano está vazio
    ou se ele é maior que o ano atual*/
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert(`Verifique os dados e tente novamente!`);
    } else {
        var fsex = document.getElementsByName(`radsex`);
        var idade = ano - Number(fAno.value);                   // Calcular idade
        var genero = '';
        var img = document.createElement('img'); // Colocar imagem dinamicamente no HTML pelo JS
        img.setAttribute('id', 'foto');          // Colocando ID para elemento dinamico

        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'img/menino.png');
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'img/jovemMas.png');
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'img/homem.png');
            } else {
                // Idoso
                img.setAttribute('src', 'img/idoso.png');
            };
        } else {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'img/menina.png');
            } else if (idade < 21) {
                // Jovem
                img.setAttribute(`src`, `img/jovemFem.png`);
            } else if (idade < 60) {
                // Adulto
                img.setAttribute(`src`, `img/mulher.png`);
            } else {
                // Idosa
                img.setAttribute(`src`, `img/idosa.png`);
            };
                
        };
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        // Aparecer a imagem com idade.
        res.appendChild(img);
    };
};