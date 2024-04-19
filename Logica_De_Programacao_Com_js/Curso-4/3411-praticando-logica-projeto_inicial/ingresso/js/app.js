function comprar() {
	let input = parseInt(document.getElementById("qtd").value);
	let tipo = document.getElementById("tipo-ingresso").value;
	let qtd_pista = document.getElementById("qtd-pista");
	let qtd_superior = document.getElementById("qtd-superior");
	let qtd_inferior = document.getElementById("qtd-inferior");
	if (tipo == "pista") {
		if (input > parseInt(qtd_pista.textContent)) {
			alert("Quantidade de ingressos indisponível!");
			return;
		}
		qtd_pista.textContent = parseInt(qtd_pista.textContent) - input;
	} else if (tipo == "superior") { 
		if (input > parseInt(qtd_superior.textContent)) {
			alert("Quantidade de ingressos indisponível!");
			return;
		}
		qtd_superior.textContent = parseInt(qtd_superior.textContent) - input;
	} else if (tipo == "inferior") {
		if (input > parseInt(qtd_inferior.textContent)) {
			alert("Quantidade de ingressos indisponível!");
			return;
		}
		qtd_inferior.textContent = parseInt(qtd_inferior.textContent) - input;
	}
}
