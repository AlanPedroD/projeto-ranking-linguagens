let linguagens = ['Javascript', 'TypeScript', 'PHP', 'Java', 'Node.js'];

function capitalizarArray(array) {
  return array.map(function(item) {
    return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
  });
}

function mostrarLinguagens() {
  const lista = document.getElementById('listaLinguagens');
  lista.innerHTML = '';

  // Usa a função para capitalizar cada linguagem
  const linguagensCapitalizadas = capitalizarArray(linguagens);

  linguagensCapitalizadas.forEach(function(linguagem) {
    const li = document.createElement('li');
    li.textContent = linguagem;
    lista.appendChild(li);
  });
}


function adicionarLinguagem() {
    const input = document.getElementById('inputNovaLinguagem');
    const nome = input.value.trim();
    if(nome){
    linguagens.push(nome);
    mostrarLinguagens();
    input.value = '';
    } else {
    alert('Digite o nome de uma linguagem!');
    }
}

function excluirLinguagem() {
    const input = document.getElementById('inputExcluirLinguagem');
    const nome = input.value.trim().toLowerCase();

    // const indice = linguagens.indexOf(nome);
    const indice = linguagens.findIndex(function(linguagem) {
        return linguagem.toLowerCase() === nome;
    });

    if(indice !== -1){
    linguagens.splice(indice, 1);
    mostrarLinguagens();
    input.value = '';
    } else {
    alert('Linguagem não encontrada!');
    }
}

function substituirLinguagem() {
    const antiga = document.getElementById('inputLinguagemAntiga').value.trim().toLowerCase();
    const nova = document.getElementById('inputLinguagemNova').value.trim();

    const indice = linguagens.findIndex(function(linguagem) {
        return linguagem.toLowerCase() === antiga;
    });

    // const indice = linguagens.indexOf(antiga);

    if(indice !== -1 && nova){
    linguagens[indice] = nova;
    mostrarLinguagens();
    document.getElementById('inputLinguagemAntiga').value = '';
    document.getElementById('inputLinguagemNova').value = '';
    } else {
    alert('Verifique os nomes informados!');
    }
}

mostrarLinguagens();
