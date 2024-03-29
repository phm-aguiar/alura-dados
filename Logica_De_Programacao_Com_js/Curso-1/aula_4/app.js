alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt((Math.random() * 100 + 1)/2);
let tentativas = 5;
let index = 0;

console.log('Número secreto', numeroSecreto);
while (index < tentativas) {
    let chute = prompt('Escolha um número entre 1 e 50');
    if (chute == numeroSecreto)
        break;
    else if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}`);
    }
    else {
        alert(`O número secreto é maior que ${chute}`);
    }
    index++;
}

alert(`Isso ai! Você descobriu o número secreto (${numeroSecreto})`);
