alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 42;
let tentativas = 3;
let index = 0;

console.log('Número secreto', numeroSecreto);
while (index < tentativas) {
	let chute = prompt('Escolha um número entre 1 e 50');
	if (chute == numeroSecreto) {
		alert(`Isso ai! Você descobriu o número secreto (${numeroSecreto})`);
		break;
	}
	else if (chute > numeroSecreto) {
		alert('O número secreto é menor');
	}
	else {
		alert('O número secreto é maior');
	}
	index++;
}

let semana = prompt('Digite o dia da semana');

if (semana == 'sabado' || semana == 'domingo') {
	alert('bom final de semana!');
}
else {
	alert('boa semana!');
}