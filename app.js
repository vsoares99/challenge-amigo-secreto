let amigos = [];

function adicionarAmigo(){
    let nomeAmigo = document.querySelector('input').value;

    if(nomeAmigo == ''){
        alert("Por favor, insira um nome.");
    }
    else if(amigos.includes(nomeAmigo)){
        alert("Não pode repetir o mesmo nome");
    }
    else{
        amigos.push(nomeAmigo);
    }
    console.log(amigos);
    limparCampo();
}

function limparCampo(){
    nomeAmigo = document.querySelector('input');
    nomeAmigo.value = '';
}