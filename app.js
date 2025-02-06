let amigos = [];

function adicionarAmigo(){
    let nomeAmigo = document.querySelector('input').value;

    if(nomeAmigo == ''){
        alert('Por favor, insira um nome.');
    }
    else if(amigos.includes(nomeAmigo)){
        alert(`Você já adicionou o nome ${nomeAmigo}. Em caso de amigos com mesmo nome, adicione o sobrenome ou coloque o apelido.`);
    }
    else{
        amigos.push(nomeAmigo);
    }
    limparCampo();
    exibirAmigos();
}

function exibirAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    let i = 0;
    let contarAmigos = 0;

    while(i < amigos.length){
        let itemLista = document.createElement('li');
        itemLista.textContent = amigos[i];
        listaAmigos.appendChild(itemLista);
        i++;
        contarAmigos++;
    }
    let palavraAmigo = contarAmigos > 1 ? 'Amigos' : 'Amigo';
    let campo = document.getElementById('contarAmigos');
    campo.innerHTML = `${contarAmigos + ' ' + palavraAmigo}`;
}

function limparCampo(){
    nomeAmigo = document.querySelector('input');
    nomeAmigo.value = '';
}

function sortearAmigo(){
    if (amigos.length == 0){
        document.getElementById('resultado').innerHTML = 'Não há amigos disponíveis para sortear.';
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById('resultado').innerHTML = `<li>Amigo sorteado é: ${amigoSorteado}</li>`;
}