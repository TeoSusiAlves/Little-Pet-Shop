function agendamento() {
    let cliente = document.getElementById('inCli').value;    
    let pet = document.getElementById('inPet').value;
    let hora = document.getElementById('inTime').value;
    let padrao = /\d{2}/;
    var correcao = padrao.exec(hora);
    let data = document.getElementById('inData').value;
    let erro = document.getElementById('mensagem-erro');
    erro.innerHTML = ''
    erro.style.display = 'none'
    //let msg = '';   //document.getElementById('mensagem-erro')
    let campok = true;

   

    if (cliente.trim() == '' || cliente.trim().length<5) {
        erro.style.color = 'red';
        erro.style.display = 'block';
        erro.textContent ='O campo cliente não pode estar vazio ou pequeno demais, cada campo deve ter no mínimo 3 caracteres!';
        document.getElementById('inCli').focus();
        campok = false;
        return false;
    }

    if (pet.trim() == '' || pet.trim().length<5) {
        erro.style.color = 'red';
        erro.style.display = 'block';
        erro.textContent ='O campo PET não pode estar vazio ou está pequeno demais, cada campo deve ter no mínimo 3 caracteres!';
        frmPet.inPet.focus('inPet');        
        campok = false;
        return false;
    }

    if (data.trim() == '') {
        erro.style.color = 'red';
        erro.style.display = 'block';
        erro.textContent ='O campo data não pode estar vazio!';
        frmData.inData.focus('inData');
        campok = false;
        return false;
    }

    if (hora.trim() == '') {
        erro.style.color = 'red';
        erro.style.display = 'block';
        erro.textContent ='O campo hora não pode estar vazio!';
        frmTIme.inTime.focus('inTime');
        campok = false;
        return false;
    }

    if (correcao[0] < 8 || correcao[0] > 18) {
        erro.style.color = 'red';
        erro.style.display = 'block';
        erro.textContent ='Adicione um horário válido, atendemos das 8:00 às 18:00 hrs';
        frmTIme.inTime.focus('inTime');
        campok = false;
        return false;
    }

    if(campok==true){
        erro.style.color = 'white';
        erro.style.display = 'block';
        erro.textContent ='Obrigado por preencher o formulário!';
        tabela();
    }
   
   
}

function tabela(){
    // let cliente = agendamentofrm.inCli.value;
    let cliente = document.getElementById('inCli').value;
    let pet = document.getElementById('inPet').value;
    let data = document.getElementById('inData').value;
    let hora = document.getElementById('inTime').value;
    let  tabela = document.getElementById('tabela');
    tabela.style.display = 'block';
    let linhas = document.getElementById('linhas');
    console.log(linhas);
    // let auxlinhas = '<tr>' + '<td>' + cliente + '</td>' + '<td>' + pet + '</td'> + '<td>' + data + '</td'> + '<td>' + hora + '</td>' + '</tr>';
    linhas.innerHTML += '<tr><td>' + cliente + '</td><td>' + pet + '</td><td>' + data + '</td><td>' + hora + '</td></tr>';
    // console.log('<tr><td>' + cliente + '</td><td>' + pet + '</td><td>' + data + '</td><td>' + hora + '</td></tr>');
    // linhas.style.display = 'block';
}