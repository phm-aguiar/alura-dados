let numeros = [];
let numeroSecreto = gerarNumeroAleatorio();
numeros.push(numeroSecreto);
function exibir_texto_na_tela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.0 });
}

function limpar_campo() {
    document.querySelector('input').value = '';
}
let tentativas = 1;

function verificarChute() {
    let chute = parseInt(document.querySelector('input').value);
    if (chute == numeroSecreto) {
        let msg_tentativas = tentativas == 1 ? ' tentativa' : ' tentativas';
        exibir_texto_na_tela('h1', 'Parabéns!');
        exibir_texto_na_tela('p', 'Você acertou o número secreto em ' + tentativas + msg_tentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('new').removeAttribute('enabled');
        return;
    }
    else if (chute > numeroSecreto) {
        exibir_texto_na_tela('p', 'O número secreto é menor');
    }
    else {
        exibir_texto_na_tela('p', 'O número secreto é maior');
    }
    limpar_campo();
    tentativas++;
    console.log(numeros);
}

function gerarNumeroAleatorio() {
    let numero = parseInt(Math.random() * 50 + 1);
    if (numeros.length >= 50) {
        numeros = []; // Reinicia o array apenas quando atingir 50 números
    }
    if (numeros.includes(numero)) {
        return gerarNumeroAleatorio();
    }
    numeros.push(numero);
    return numero;
}


function exibir_mensagem_inicio(titulo, mensagem) {
    exibir_texto_na_tela('h1', titulo);
    exibir_texto_na_tela('p', mensagem);
}

let mensagem = 'tente adivinhar o número secreto entre 1 e 50';
let titulo = 'Jogo do número secreto';

exibir_mensagem_inicio(titulo, mensagem);

function reiniciar_jogo() {
    tentativas = 1;
    numeroSecreto = gerarNumeroAleatorio();
    document.getElementById('reiniciar').setAttribute('disabled', 'disabled');
    document.getElementById('new').setAttribute('enabled', 'enabled');
    limpar_campo();
    exibir_mensagem_inicio(titulo, mensagem);
    if (numeroSecreto in numeros) {
        numeroSecreto = gerarNumeroAleatorio();
    }
    numeros.push(numeroSecreto);
}