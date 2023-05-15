// Código para botão:
var erro = document.getElementById('erro');

function carregarDados() {

    // Data:
    var data = frmRegistro.data.value;
    if (data.trim() == '') {
        erro.style.color = 'red';
        erro.style.display = 'block';
        erro.textContent ='O campo data não pode estar vazio!';
    }else{
        var o = 10;
    }

    //Senha:
    var senha = frmRegistro.senha.value;
    let padrao6 = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[@#!$%]).{8,}$/;
    let correcao6 = padrao6.test(senha);
    if (correcao6 != true) {
        erro.style.display = 'block';
        erro.innerHTML = 'Preencha corretamente a senha';
    } else {
        var g = 10;
    }

    // Telefone:
    var telefone = frmRegistro.tel.value;
    let padrao5 = /\((\d{2})\)\s(\d{4,5})-(\d{4})/;
    let correcao5 = padrao5.test(telefone);
    if (correcao5 != true) {
        erro.style.display = 'block';
        erro.innerHTML = 'Preencha corretamente o Telefone';
    } else {
        var h = 10;
    }


    // Email:
    var email = frmRegistro.email.value;
    let padrao4 = /^[\w-\.]+@(gmail\.com|sesisp\.org\.br|hotmail\.com|[a-zA-Z0-9-]+\.[a-zA-Z]{2,3}\.br)$/;
    let correcao4 = padrao4.test(email);
    console.log(correcao4);
    if (correcao4 != true) {
        erro.style.display = 'block';
        erro.innerHTML = 'Preencha corretamente o Email';
    } else {
        var j = 10;
    }


    // UF:
    var uf = frmRegistro.uf.value;
    let padrao3 = /[A-Za-z]{2}/;
    let correcao3 = padrao3.test(uf);
    var maiuscula = uf.toUpperCase();
    document.getElementById('uf').value = maiuscula;
    if (correcao3 != true) {
        erro.style.display = 'block';
        erro.innerHTML = 'Preencha corretamente o UF';
    } else {
        var k = 10;
    }

    // Cidade:
    var cidade = frmRegistro.city.value;
    if (cidade.length < 3 || cidade.length > 50) {
        erro.style.display = 'block';
        erro.innerHTML = 'O nome da cidade deve ter mais de 3 caracteres e menos de 50 caracteres';
    } else {
        var l = 10;
    }

    // Endereço:
    var endereco = frmRegistro.End.value;
    if (endereco.length < 3 || endereco.length > 100) {
        erro.style.display = 'block';
        erro.innerHTML = 'O endereço deve ter mais de 3 caracteres e menos de 100 caracteres';
    } else {
        var ç = 10;
    }

    // Nome:
    var nome = frmRegistro.nome.value;
    if (nome.length < 3 || nome.length > 100) {

        erro.style.display = 'block';
        erro.innerHTML = 'O nome deve ter mais de 3 caracteres e menos de 100 caracteres';
    } else {
        var z = 10;
    }


    // Id:
    let id = frmRegistro.Id.value;
    let padrao = /\d/;
    let correcao = padrao.test(id);
    if (correcao != true) {
        erro.style.display = 'block';
        erro.innerHTML = 'Preencha corretamente seu ID';
    } else if (id < 0) {
        erro.style.display = 'block';
        erro.innerHTML = 'O ID não pode ser negativo';
    } else if (correcao == true) {
        var x = 10;
    }

    
    

    if (g == 10 & h == 10 & j == 10 & k == 10 & l == 10 & ç == 10 & z == 10 & x == 10 & o == 10) {
        erro.innerHTML = 'Cadastro realizado com sucesso';
        window.location.replace('cadastro-pet.html');
    }

}




function senhaForte() {
    var a = Math.random().toFixed(1) * 10;
    var b = Math.random().toFixed(1) * 10;
    var c = Math.random().toFixed(1) * 10;
    var d = Math.random().toFixed(1) * 10;
    var posicao = 0.15;
    var conteudo = '';
    var n1 = 0;
    var n2 = 0;
    var n3 = 0;
    var n4 = 0;
    var n5 = 0;
    var x = Math.random().toFixed(1) * 10;
    var numeros = 0;
    var maiusculas = '';
    var minusculas = '';
    var A = '';
    var b = '';
    var c = '';
    var d = '';
    var e = '';
    var f = '';
    var sinais = '';



    // Código para numero na frente, no meio esquerdo, meio direito e por último
    if (posicao < 0.25) {
        // Código para gerar número aleatório;
        n1 = Math.random().toFixed(1) * 10 + 1;
        n2 = Math.random().toFixed(1) * 10 + 1;
        n3 = Math.random().toFixed(1) * 10 + 1;
        n4 = Math.random().toFixed(1) * 10 + 1;
        n5 = Math.random().toFixed(1) * 10 + 1;
        // console.log(n1);
        // console.log(n2);
        numeros = n1 * n2 * n3 * n4 * n5;
        // console.log(numeros.toFixed(2));


        // Código  para gerar letra maiúsculas
        if (x <= 2) {
            A = 'H';
            B = 'O';
            C = 'W';
            D = 'Z';
            E = 'I';
            F = 'A';
            maiusculas = A + B + C + D + E + F;
            // console.log(maiusculas);
        }
        if (x > 2 & x < 4) {
            A = 'B';
            B = 'D';
            C = 'K';
            D = 'L';
            E = 'T';
            F = 'V';
            maiusculas = A + B + C + D + E + F;
            // console.log(maiusculas);
        } else if (x >= 4 & x < 6) {
            A = 'G';
            B = 'X';
            C = 'N';
            D = 'M';
            E = 'U';
            F = 'E';
            maiusculas = A + B + C + D + E + F;
            // console.log(maiusculas);

        } else if (x >= 6) {
            A = 'V';
            B = 'F';
            C = 'J';
            D = 'K';
            E = 'E';
            F = 'G';
            maiusculas = A + B + C + D + E + F;
            // console.log(maiusculas);
        }



        // Código  para gerar letra minúsculas
        if (x <= 2) {
            A = 'e';
            B = 'h';
            C = 's';
            D = 'g';
            E = 'o';
            F = 'p';
            minusculas = A + B + C + D + E + F;
            // console.log(minusculas);
        }
        if (x > 2 & x < 4) {
            A = 'a';
            B = 'm';
            C = 'o';
            D = 't';
            E = 'r';
            F = 'f';
            minusculas = A + B + C + D + E + F;
            // console.log(minusculas);
        } else if (x >= 4 & x < 6) {
            A = 's';
            B = 'p';
            C = 'g';
            D = 'n';
            E = 'm';
            F = 'q';
            minusculas = A + B + C + D + E + F;
            // console.log(minusculas);

        } else if (x >= 6) {
            A = 'i';
            B = 'e';
            C = 'r';
            D = 'k';
            E = 'b';
            F = 'u';
            minusculas = A + B + C + D + E + F;
            // console.log(minusculas);

        }


        // Código  para gerar caractéres especiais:

        if (x <= 2) {
            A = '!';
            B = '#';
            C = '@';
            D = '$';
            sinais = A + B + C + D;
            // console.log(sinais);
        }
        if (x > 2 & x < 4) {
            A = '$';
            B = '!';
            C = '$';
            D = '#';
            sinais = A + B + C + D;
            // console.log(sinais);
        } else if (x >= 4 & x < 6) {
            A = '@';
            B = '$';
            C = '!';
            D = '#';
            sinais = A + B + C + D;
            // console.log(sinais);

        } else if (x >= 6) {
            A = '#';
            B = '@';
            C = '$';
            D = '!';
            sinais = A + B + C + D;
            // console.log(sinais);

        }
        var senhafinal = numeros + maiusculas + minusculas + sinais;
        // console.log(senhafinal);
        document.getElementById('senha').value = senhafinal;
    }

}


function carregarDados2() {
    var select = document.getElementById('pet').value;
    // Tipo:
    if (select != "Outros") {
        var f = 10;
    }
    // Anos do PET:
    let Anos = frmRegistro.idadepet3.value;
    if (Anos.trim() > 100 || Anos.trim() < 0 || Anos.trim() == '') {
        erro.style.display = 'block';
        erro.innerHTML = 'Preencha o ano corretamente';
    } else {
        var a = 10;
        console.log(a);
    }
    // Meses do PET:
    let meses = frmRegistro.idadepet2.value;
    if (meses.trim() > 12 || meses.trim() < 0 || meses.trim() == '') {
        erro.style.display = 'block';
        erro.innerHTML = 'Preencha o mês corretamente';
    } else {
        var b = 10;
    }
    // Dias do PET:
    let dias = frmRegistro.idadepet1.value;
    if (dias.trim() > 30 || dias.trim() < 0 || dias.trim() == '') {
        erro.style.display = 'block';
        erro.innerHTML = 'Preencha o dia corretamente';
    } else {
        var c = 10;
    }
    // Nome:
    let nome = frmRegistro.petnome.value;
    if (nome.length < 3 || nome.length > 100) {
        erro.style.display = 'block';
        erro.innerHTML = 'O nome do PET deve ter mais de 3 caracteres e menos de 100 caracteres';
    } else {
        var d = 10;
    }



    // IDADE FINAL:
    let diasfinal = dias + " Dias";
    let mesesfinais = meses + " Meses";
    let anosfinais = Anos + " Anos";
    var conteudo1 = diasfinal + " " + mesesfinais + " " + anosfinais;


    // Colocando conteúdo na idade final:
    if (dias.trim() < 30 || dias.trim() > 0 || dias.trim() != '' & Anos.trim() < 100 || Anos.trim() > 0 || Anos.trim() != '' & meses.trim() < 12 || meses.trim() > 0 || meses.trim() != '') {
        document.getElementById('idadepet4').value = conteudo1;
        var e = 10;
    }

    if (a == 10 & b == 10 & c == 10 & d == 10 & e == 10 & f == 10) {
        erro.style.display = 'block';
        erro.innerHTML = 'Cadastro realizado com sucesso';
        window.location.replace('avatar.html');
    }
    if (a == 10 & b == 10 & c == 10 & d == 10 & e == 10 & f != 10) {
        let tipo = frmRegistro.qual.value;
        if (tipo.length < 3 || tipo.length > 100) {
            erro.style.display = 'block';
            erro.innerHTML = 'Preencha corretamente o Tipo do seu PET';
        } else {
            erro.style.display = 'block';
            erro.style.color = 'white';
            erro.innerHTML = 'Cadastro realizado com sucesso';
            window.location.replace('avatar.html');
        }
    }
}

function Dados() {
    var select = document.getElementById('pet').value;
    var div = document.getElementById('area');

    if (select == "Outros") {
        div.style.display = 'block';
    } else {
        div.style.display = 'none';
    }
}

function img1() {
    let user = document.getElementById('imagem-cadastro');
    let caminho = user.src;
    let arquivo = caminho.substring(caminho.lastIndexOf('/') + 1);
    user.src = 'Imagens/cachorro.png';
    let img2 = document.getElementById('img-logofalse');
    img2.style.backgroundColor = 'pink';
}
function img2() {
    let user = document.getElementById('imagem-cadastro');
    let caminho = user.src;
    let arquivo = caminho.substring(caminho.lastIndexOf('/') + 1);
    user.src = 'Imagens/gato.png';
    let img2 = document.getElementById('img-logofalse');
    img2.style.backgroundColor = 'green';
}
function img3() {
    let user = document.getElementById('imagem-cadastro');
    let caminho = user.src;
    let arquivo = caminho.substring(caminho.lastIndexOf('/') + 1);
    user.src = 'Imagens/papagaio.png';
}
function img4() {
    let user = document.getElementById('imagem-cadastro');
    let caminho = user.src;
    let arquivo = caminho.substring(caminho.lastIndexOf('/') + 1);
    user.src = 'Imagens/peixe.png';
}








