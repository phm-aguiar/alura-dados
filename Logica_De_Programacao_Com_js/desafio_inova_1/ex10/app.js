/* 
A Alura pretende aumentar o salário dos seus colaboradores e, para isso, propus a você a criação de um algoritmo que acrescente:
·         10%, se o salário for menor ou igual a R$ 2000;
·         5%, se for maior a R$ 5000 e menor que R$ 10000;
·         2%, se for maior  que R$10000 e menor que R$15000.
Após a operação, o algoritmo deve imprimir na tela o valor original antes do aumento e o valor com aumento.

*/

let salario = parseInt(prompt("Digite o salário: "));

let aumento = 0;

if (salario <= 2000) {
	aumento = 10;
}
else if (salario > 5000 && salario < 10000) {
	aumento = 5;
}
else if (salario > 10000 && salario < 15000) {
	aumento = 2;
}

let novoSalario = salario + (salario * aumento / 100);

alert(`Salário original: R$ ${salario.toFixed(2)}\nSalário com aumento: R$ ${novoSalario.toFixed(2)}`);