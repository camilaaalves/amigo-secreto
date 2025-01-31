let listaAmigos = [];

function adicionarAmigo() {
    const nome = document.getElementById('amigo');

    if (!nome) {  
        console.error("Elemento com ID 'amigo' não encontrado.");
        return;  
    }

    let listaNomes = document.getElementById('listaAmigos');
    
    if (nome.value.trim() === '') {
        alert("Por favor, insira um nome antes de adicionar!");
        return;
    }

    listaAmigos.push(nome.value);

    // Atualiza a lista de amigos na tela
    if (listaNomes.textContent === '') {
        listaNomes.textContent = nome.value;
    } else {
        listaNomes.textContent += ', ' + nome.value;
    }

    nome.value = ''; 
    atualizarSorteio();
    atualizarLista();
}

function sortear() {
    if (listaAmigos.length == 0) {
        console.log('Esta lista está vazia');
        return;
    }

    // Embaralha a lista antes de sortear
    embaralhar(listaAmigos);

    let random = Math.floor(Math.random() * listaAmigos.length);
    console.log(listaAmigos[random]);

    exibirNaTela("resultado", `O amigo secreto sorteado foi: ${listaAmigos[random]}`);

    // Limpa a lista após o sorteio
    listaAmigos = [];
    atualizarListaDeAmigo();
}

function exibirNaTela(tag, texto) {
    let campo = document.getElementById(tag);
    campo.innerHTML = texto;
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    listaAmigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}

function excluirAmigo(index) {
    listaAmigos.splice(index, 1);
    atualizarSorteio();
    atualizarLista();
}

function atualizarSorteio() {
    let sorteio = document.getElementById('resultado');
    if (!sorteio) {
        console.error("Elemento com ID 'resultado' não encontrado.");
        return;
    }
    sorteio.innerHTML = ''; 
}

function atualizarListaDeAmigo() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = listaAmigos[i]; 
        lista.appendChild(li);
    }
}

function atualizarLista() {
    let listaNomes = document.getElementById('listaAmigos');
    listaNomes.innerHTML = '';

    listaAmigos.forEach((amigo, index) => {
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigo;

        let botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = "❌";
        botaoExcluir.onclick = () => excluirAmigo(index);

        paragrafo.appendChild(botaoExcluir);
        listaNomes.appendChild(paragrafo);
    });
}
