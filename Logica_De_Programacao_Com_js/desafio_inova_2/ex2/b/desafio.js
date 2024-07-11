/* 
b) Faça um algoritmo que, se o capital aplicado for maior ou igual a R$999,99 e menor ou igual R$10.000,00 e o 
tempo de aplicação for maior que 5 meses e menor que 12 meses, a taxa de rendimento deve ser 2%. 
O algoritmo deve solicitar ao cliente o valor do capital aplicado e o tempo de aplicação e, após 
a operação, o programa deve exibir na tela, o valor aplicado, a quantidade de meses em aplicação 
e o valor de rendimento em R$, utilizando o “Tamplate string”, da seguinte forma: 
A quantia de R$[CapitalAplicado] aplicada em [TempoDeAplicacao] meses, rendeu R$[ValorRendimento]. 
Caso o valor informado for menor que 0 ou diferente de um número, o algoritmo deve apresentar uma 
alerta na tela com a seguinte mensagem: “Valor informado inválido! Por favor, informe o valor depositado na poupança”. 
Em seguida, solicite novamente ao cliente o valor aplicado na poupança e a quantidade de meses, até que o valor válido seja informado.
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
Operacao(CapitalAplicado, TempoDeAplicacao, TaxaDeJuros);