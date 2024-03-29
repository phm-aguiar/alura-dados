let mensagem_de_boas_vindas = "Bem-vindo ao jogo de adivinhação!";
alert(mensagem_de_boas_vindas);

let numero_secreto = 42;

let numero_usuario = prompt("Digite um número entre 0 e 50:");

if (numero_secreto == numero_usuario) {
	console.log("Parabéns! Você acertou!");
}
else if (numero_usuario > numero_secreto) {
	console.log("O número secreto é menor!");
}
else {
	console.log("O número secreto é maior!");
}
