/* 
A professora Sandra pretende automatizar o 
resultado da nota de um aluno de
ensino médio e solicitou-lhe que crie um programa
que receba três notas finais e que apareça 
para ela “Aprovado”, se a média estiver entre 7 e 10.  
Caso a média for menor que 7 e maior ou igual a 0, 
o programa deve imprimir na tela “Reprovado”.
*/

let nota1 = parseInt(prompt("Digite a primeira nota:"));
let nota2 = parseInt(prompt("Digite a segunda nota:"));
let nota3 = parseInt(prompt("Digite a terceira nota:"));
let media = (nota1 + nota2 + nota3) / 3;

if (nota1 >= 0 && nota1 <= 10 && nota2 >= 0 && nota2 <= 10 && nota3 >= 0 && nota3 <= 10) {

	if (media >= 7 && media <= 10) {
		alert("Aprovado");
	}
	else if (media < 7 && media >= 0) {
		alert("Reprovado");
	}
}
else {
	alert("Nota inválida");
}
