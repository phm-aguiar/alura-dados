/* 
c) Elabore um algoritmo que se o valor da poupança do cliente for maior que R$ 50.000,00 e menor ou igual R$100.000,00 e, 
se o tempo de aplicação for maior que 12 (meses) e menor ou igual a 24(meses), a taxa de juro de ser 5 %. 
Caso o tempo de aplicação for maior ou igual a 12 (meses) e menor ou igual a 24 (meses), a taxa de juros deverá ser de 10%. 
Por fim, imprima a mensagem na tela, em “Template String” da seguinte forma: “A poupança de  R$[CapitalAplicado] aplicada 
em [TempoDeAplicacao] meses, rendeu R$[ValorRendimento]”. Caso o valor informado for menor que 0 ou diferente de um número, 
o algoritmo deve apresentar uma alerta na tela com a seguinte mensagem: “Valor informado inválido! Por favor, informe o 
valor depositado na poupança!”. Em seguida, solicite novamente ao cliente o valor aplicado na poupança e a quantidade de 
meses, até que o valor válido seja informado.
*/

function Operacao(CapitalAplicado, TempoDeAplicacao, TaxaDeJuros) {
	// valor final com o acréscimo de juros
	const ValorRendimento = CapitalAplicado * (1 + TaxaDeJuros / 100) ** TempoDeAplicacao;
	let rendimento = ValorRendimento - CapitalAplicado;
	console.log(`A quantia de R$${CapitalAplicado} aplicada em ${TempoDeAplicacao} meses, rendeu R$${rendimento.toFixed(2)}`);
}

let CapitalAplicado = parseFloat(prompt("Informe o valor aplicado na poupança:"));
while (CapitalAplicado < 0 || isNaN(CapitalAplicado)) {
	alert("Valor informado inválido! Por favor, informe o valor depositado na poupança");
	CapitalAplicado = parseFloat(prompt("Informe o valor aplicado na poupança:"));
}
let TempoDeAplicacao = parseInt(prompt("Informe a quantidade de meses em aplicação:"));
while (TempoDeAplicacao < 0 || isNaN(TempoDeAplicacao)) {
	alert("Valor informado inválido! Por favor, informe a quantidade de meses em aplicação");
	TempoDeAplicacao = parseInt(prompt("Informe a quantidade de meses em aplicação:"));
}
let TaxaDeJuros = 0.6022;

if (CapitalAplicado >= 999.99 && CapitalAplicado <= 10000 && TempoDeAplicacao > 5 && TempoDeAplicacao < 12) {
	TaxaDeJuros = 2;
}
else if (CapitalAplicado > 50000 && CapitalAplicado <= 100000 && TempoDeAplicacao > 12 && TempoDeAplicacao <= 24) {
	TaxaDeJuros = 5;
}
else if (CapitalAplicado > 50000 && CapitalAplicado <= 100000 && TempoDeAplicacao > 24) { // errata no enunciado do desafio (TempoDeAplicacao > 24) foi um incremento para o desafio
	TaxaDeJuros = 10;
}

