/* 
2.  	Um Banco contratou-lhe para implementar uma operação no seu sistema que aplica a taxa de rendimento sobre o valor aplicado na poupança. 
Logo, o supervisor de TI pediu para implementar uma função que receba dois parâmetros: “CapitalAplicado” e “TempoDeAplicacao:
*/

/* 
a) Implemente um algoritmo que solicite ao usuário o valor, em dinheiro, aplicado e a quantidade de meses em aplicação, considerando que a taxa de juros, 
por mês, é de 0,6022%. Ao final, imprima o valor aplicado inicialmente, a quantidade de meses e o valor final 
com o acréscimo de juros, em “Template String”, da seguinte forma: A quantia de R$[CapitalAplicado] aplicada em [TempoDeAplicacao] meses,
 rendeu R$[ValorRendimento] a juros de [TaxaDeJuros]. Caso o valor informado for menor que 0 ou diferente de um número, 
o algoritmo deve apresentar uma alerta na tela com a seguinte mensagem: “Valor informado inválido! Por favor, informe o valor depositado na poupança”.
 Em seguida, solicite novamente ao cliente o valor aplicado na poupança e a quantidade de meses, até que o valor válido seja informado.
*/

function Operacao(CapitalAplicado, TempoDeAplicacao) { 
	// taxa de juros, por mês

	const TaxaDeJuros = 0.6022;
	// valor final com o acréscimo de juros
	const ValorRendimento = CapitalAplicado * (1 + TaxaDeJuros / 100) ** TempoDeAplicacao;
	let rendimento = ValorRendimento - CapitalAplicado;
	console.log(`A quantia de R$${CapitalAplicado} aplicada em ${TempoDeAplicacao} meses, rendeu R$${rendimento.toFixed(2)} a juros de ${TaxaDeJuros.toFixed(4)}%`);

}
let CapitalAplicado = parseFloat(prompt("Informe o valor aplicado na poupança:"));
while (CapitalAplicado < 0 || isNaN(CapitalAplicado)) {
	alert("Valor informado inválido! Por favor, informe o valor depositado na poupança");
	CapitalAplicado = parseFloat(prompt("Informe o valor aplicado na poupança:"));
}
let TempoDeAplicacao = parseInt(prompt("Informe a quantidade de meses em aplicação:"));

Operacao(CapitalAplicado, TempoDeAplicacao);