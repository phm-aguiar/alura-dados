function alterarStatus(id) {
	let game = document.getElementById(`game-${id}`);
	let image = game.querySelector(`.dashboard__item__img`);
	let botao = game.querySelector(`.dashboard__item__button`);

	if (image.classList.contains('dashboard__item__img--rented')) {
		image.classList.remove('dashboard__item__img--rented');
		botao.classList.remove('dashboard__item__button--return');
		botao.textContent = 'Alugar';
	} else {
		image.classList.add('dashboard__item__img--rented');
		botao.classList.add('dashboard__item__button--return');
		botao.textContent = 'Devolver';
	}

}