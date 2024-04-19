let numeroSecreto = gerarNumeroAleatorio();
function exibir_texto_na_tela(tag, texto) {
	let campo = document.querySelector(tag);
	campo.innerHTML = texto;
}

function verificarChute() {
	let chute = parseInt(document.querySelector('input').value);
	if (chute == numeroSecreto) {
		exibir_texto_na_tela('h1', 'Parabéns! Você acertou!');
	}
	else if (chute > numeroSecreto) {
		exibir_texto_na_tela('h1', 'O número secreto é menor');
	}
	else {
		exibir_texto_na_tela('h1', 'O número secreto é maior');
	}
	console.log('o botao foi clicado');
}

function gerarNumeroAleatorio() {
	return parseInt(Math.random() * 50 + 1);
}

exibir_texto_na_tela('h1', 'Jogo do número secreto');
exibir_texto_na_tela('p', 'Escolha um número entre 1 e 50');


alert(numeroSecreto);