let sorteio = document.getElementById('lista-sorteio');
amigos = [];
function adicionar() {
	nome = document.getElementById("nome-amigo").value;
	if (nome == "") {
		alert("Digite um nome!");
		return;
	}
	document.getElementById("nome-amigo").value = "";
	if(!amigos.includes(nome)) {
		amigos.push(nome);
		amigosht = document.getElementById("lista-amigos");
		amigosht.textContent = amigos.join(", ");
	}
	// amigos.push(nome);

	// amigosht = document.getElementById("lista-amigos");
	// amigosht.textContent = amigos.join(", ");
	// document.getElementById("nome-amigo").value = "";
}

function sortear() {
	embaralharArray(amigos);

	for (let i = 0; i < amigos.length; i++) {
		if (i == amigos.length - 1) {
			sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
		} else {
			sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
		}
	}
}

function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function reiniciar() {
	amigos = [];
	document.getElementById("lista-amigos").textContent = "";
	sorteio.innerHTML = "";


}