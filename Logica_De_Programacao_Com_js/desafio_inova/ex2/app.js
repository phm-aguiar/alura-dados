// Suponha que você trabalha em um centro de atendimento e 
// foi solicitado um programa que peça ao usuário que informe
//  a sua idade e, em seguida, verificar se ele é um adulto ou 
// idoso, para gerar a prioridade em atendimento. 
// Crie um programa que se a pessoas tiver 60 anos ou 
// mais imprima na tela “Aguarde na fila de prioridade”, 
// caso contrário “Aguarde na fila normal”.


var idade = parseInt(prompt("Digite sua idade:"));

if (idade >= 60) {
	alert("Aguarde na fila de prioridade");
} 
else {
	alert("Aguarde na fila normal");
}