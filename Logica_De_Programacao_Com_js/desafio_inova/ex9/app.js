/* 
A Clara criou um formulário para recolher as informações pessoais de seu cliente e deseja que a idade apareça na tela assim ele informe o ano de nascimento. 
Então, ela o solicitou a elaboração de um algoritmo que retorne a idade da pessoa, baseada no ano de nascimento fornecido. 
Crie um algoritmo que execute essa tarefa.
*/

let anoNascimento = NaN;
while (isNaN(anoNascimento) || anoNascimento < 1900 || anoNascimento > 2024) {
	anoNascimento = parseInt(prompt("Digite o ano de nascimento: "));
	if (isNaN(anoNascimento) || anoNascimento < 1900 || anoNascimento > 2024)
		alert("Digite um ano válido.");
}

let idade = 2024 - anoNascimento;

alert(`A idade da pessoa é ${idade} anos.`);
