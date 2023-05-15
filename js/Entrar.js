function validandoDados(){
  var erro = document.getElementById('mensagem-erro');
  erro.innerHTML = ''
  erro.style.display = 'none'
  var msg = document.getElementById('mensagem-erro')
  var campok = true;

  ////////////

  var email = frmentrar.email.value;
  if (email.trim() == 'admin@teste.com.br'){
      console.log("O e-mail é válido!");   
  } else {
    console.log("O e-mail é inválido!");
    erro.style.display = 'block';
      msg.textContent ='O campo e-mail não pode estar vazio ou está errado';
      frmRegistro.inMail.focus();
      campok = false;
      return false;
  }

//////////////////////////////////////////////////////

    var senha = frmentrar.senha.value;
    console.log(senha);
    if (senha == '!@#ABC123def'){
        console.log("O senha é válido!");   
    } else {
      console.log("O senha é inválido!");
      erro.style.display = 'block';
      msg.textContent ='O campo senha não pode estar vazio ou está errado';
      frmRegistro.inSenha.focus();
      campok = false;
      return false;
    }

    if(campok==true){
      erro.style.backgroundColor = 'greenyellow';
      erro.style.color = 'white';
      erro.style.display = 'none';
      window.location.replace("index.html")
  }

}

function passandoPag() {
var erro = document.getElementById('mensagem-erro');
  erro.innerHTML = ''
  erro.style.display = 'none'
  var msg = document.getElementById('mensagem-erro')
  var campok = true;

if(campok){
  erro.style.backgroundColor = 'greenyellow';
      erro.style.color = 'white';
      erro.style.display = 'none';
  window.location.replace("cadastre-se.html")
}
}