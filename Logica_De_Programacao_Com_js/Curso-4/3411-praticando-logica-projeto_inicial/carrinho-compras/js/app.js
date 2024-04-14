let total_geral;
limpar();

function adicionar() {
	// recuperar valores nome quantidade e valores

	let produto = document.getElementById("produto").value;
	let quantidade = document.getElementById("quantidade");

	if (quantidade.value == "") {
		return;
	}

	let nproduto = produto.split(" - R$")[0];
	let valor = parseInt(produto.split(" - R$")[1]);
	let valor_total = valor * parseInt(quantidade.value);
	let carrinho = document.getElementById("lista-produtos");
	carrinho.innerHTML += `<section class="carrinho__produtos__produto">
	<span class="texto-azul">${quantidade.value}x</span> ${nproduto} <span class="texto-azul">R$${valor_total}</span>
  </section>`
	total_geral += valor_total;
	let total = document.getElementById("valor-total");
	total.textContent = `R$${total_geral}`;
	quantidade.value = "";
	// calcular o preço

}







function limpar() {
	total_geral = 0;
	document.getElementById("valor-total").textContent = `R$${total_geral}`;
	document.getElementById("lista-produtos").innerHTML = "";

}