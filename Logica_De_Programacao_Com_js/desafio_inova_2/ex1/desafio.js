/* 
1.  	Elabore um algoritmo que contenha uma função chamada “Operacao”, a qual recebe 2 parâmetros e, após as operações, 
imprima a soma da exponenciação, o resto da divisão do primeiro pelo segundo e a subtração do segundo pelo primeiro.
*/

function Operacao(a, b) {
	
	// soma da exponenciação
	console.log(a ** b);
	// console.log(Math.pow(a, b));
	console.log((a+b) ** 2);
	// console.log(Math.pow(a+b, 2));
	console.log(a**2 + b**2);
	// resto da divisão do primeiro pelo segundo
	console.log(a % b);
	// subtração do segundo pelo primeiro
	console.log(b - a);
}

Operacao(2, 3); // 8, 25, 13 , 2, 1