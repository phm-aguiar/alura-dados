let numeroSecreto = gerarNumeroAleatorio();
function exibir_texto_na_tela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.0 });
}

function limpar_campo() {
    document.querySelector('input').value = '';
}
let tentativas = 0;

function verificarChute() {
    tentativas++;
    let chute = parseInt(document.querySelector('input').value);
    if (chute == numeroSecreto) {
        let msg_tentativas = tentativas == 1 ? ' tentativa' : ' tentativas';
        exibir_texto_na_tela('h1', 'Parabéns!');
        exibir_texto_na_tela('p', 'Você acertou o número secreto em ' + tentativas + msg_tentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        return;
    }
    else if (chute > numeroSecreto) {
        exibir_texto_na_tela('p', 'O número secreto é menor');
    }
    else {
        exibir_texto_na_tela('p', 'O número secreto é maior');
    }
    limpar_campo();
    console.log('o botao foi clicado');
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 50 + 1);
}

function exibir_mensagem_inicio(titulo, mensagem) {
    exibir_texto_na_tela('h1', titulo);
    exibir_texto_na_tela('p', mensagem);
}

let mensagem = 'tente adivinhar o número secreto entre 1 e 50';
let titulo = 'Jogo do número secreto';

exibir_mensagem_inicio(titulo, mensagem);

function reiniciar_jogo() {
    tentativas = 0;
    numeroSecreto = gerarNumeroAleatorio();
    document.getElementById('reiniciar').setAttribute('disabled', 'disabled');
    limpar_campo();
    exibir_mensagem_inicio(titulo, mensagem);
}