/* O seu primo pretende desenvolver um jogo de acerto para que o filho dele possa brincar, mas como ele não possui o conhecimento em programa, 
solicitou a sua ajuda, tendo em conta que você havia lhe dito que está fazendo o programa trilhas e aprendendo sobre o algoritmo e lógica de programação. 
Neste contexto, ele definiu as funcionalidades que gostaria que o jogo tenha:

- O programa deve criar um número secreto e solicitar ao usuário que chute um número entre 20 e 30;
- Se o número secreto for igual ao de chute, o programa deve exibir uma mensagem de acerto;
- Se o número secreto for diferente do número de chute, o programa deve exibir uma mensagem de erro, solicitando novamente um número entre 20 e 30;
- O programa deve oferecer 3 tentativas para o chute e, por fim, exibir uma mensagem de tentativas esgotadas e finalizar.

*/


function jogoAcerto() {
	let numeroSecreto = Math.floor(Math.random() * 11) + 20;
	console.log(numeroSecreto);
	let tentativas = 3;
	let chute = parseInt(prompt("Chute um número entre 20 e 30:"));
	while (tentativas > 0) {
		if (chute === numeroSecreto) {
			console.log("Parabéns! Você acertou!");
			break;
		} else {
			tentativas--;
			if (tentativas === 0) {
				console.log("Tentativas esgotadas!");
				break;
			}
			console.log("Você errou! Tente novamente.");
			chute = parseInt(prompt("Chute um número entre 20 e 30:"));
		}
	}
}

jogoAcerto();