/* 
Um contador pretende automatizar a folha salarial dos seus funcionários para economizar mais tempo. 
Para isso, solicitou a você um um programa que some todos os salários em uma lista. 
Logo, implemente um algoritmo que receba do contador uma lista de salários e calcule a soma deles. 
Posteriormente ao cálculo, o algoritmo deve imprimir o salário total da folha de pagamento.
*/

let salarios = [];

while (true) {
	let salario = parseFloat(prompt("Digite o salário [0 para sair]: "));
	if (salario === 0) {
		break;
	}
	salarios.push(salario);
}

let soma = 0;

for (let i = 0; i < salarios.length; i++) {
	soma += salarios[i];
}

alert(`O salário total da folha de pagamento é R$ ${soma.toFixed(2)}`);