alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 42;
let tentativas = 3;
let index = 0;

console.log('Número secreto', numeroSecreto);
while (index < tentativas) {
    let chute = prompt('Escolha um número entre 1 e 50');
    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descobriu o número secreto (${numeroSecreto})`);
        break;
    }
    else if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}`);
    }
    else {
        alert(`O número secreto é maior que ${chute}`);
        index++;
    }
}


let qtdNumeros = prompt('Digite a quantidade de números para o cálculo da média:');
let soma = 0;
let contador = qtdNumeros;

while(contador > 0){
    let numero = parseInt(prompt('Digite o numero:'));
    soma += numero;
    contador--;
}

let media = soma / qtdNumeros;

console.log(media);
