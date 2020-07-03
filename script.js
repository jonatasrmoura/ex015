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
        var fsex = document.getElementsByTagName(`radsex`);
        var idade = ano - Number(fAno.value);                   // Calcular idade
        var genero = ``;
        if (fsex[0].checked) {
            genero = `Homem`;
        } else if (fsex[1].checked) {
            genero = `Mulher`;
        };
        res.getElementsByClassName.TextAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    };
};