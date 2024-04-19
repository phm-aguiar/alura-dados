function sortear() {
	let quantidade = parseInt(document.getElementById('quantidade').value);
	let de = parseInt(document.getElementById('de').value)
	let ate = parseInt(document.getElementById('ate').value)
	let numerosSorteados = [];
	let index = 0;
	while (index < quantidade) {
		let numeroSorteado = obterNumeroAleatorio(de, ate);
		if (!numerosSorteados.includes(numeroSorteado)) {
			numerosSorteados.push(numeroSorteado);
			index++;
		}
		if (numerosSorteados.length == ate - de + 1) {
			break;
		}


	}
	let resultado = document.getElementById('resultado');
	resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${numerosSorteados.join(', ')}</label>`;

	alterarStatusBotao();
}

function obterNumeroAleatorio(de, ate) {
	return Math.floor(Math.random() * (ate - de + 1)) + de;
}

function reiniciar() {
	document.getElementById('quantidade').value = '';
	document.getElementById('de').value = '';
	document.getElementById('ate').value = '';
	document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
	alterarStatusBotao();
}


function alterarStatusBotao() {
	let botao = document.getElementById('btn-reiniciar');
	let botaoSortear = document.getElementById('btn-sortear');
	if (botao.classList.contains('container__botao-desabilitado')) {
		botao.classList.remove('container__botao-desabilitado');
		botao.classList.add('container__botao');
	} else {
		botao.classList.remove('container__botao');
		botao.classList.add('container__botao-desabilitado');
	}
	if (botaoSortear.classList.contains('container__botao')) {
		botaoSortear.classList.remove('container__botao');
		botaoSortear.classList.add('container__botao-desabilitado');
	} else {
		botaoSortear.classList.remove('container__botao-desabilitado');
		botaoSortear.classList.add('container__botao');
	}
}


