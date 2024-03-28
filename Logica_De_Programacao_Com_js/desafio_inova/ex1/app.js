// O Supervisor do Sando lhe solicitou que crie um programa que exiba uma mensagem 
// personalizada para todas as pessoas que visitam a empresa. O programa deve solicitar 
// o nome das visitas e imprimir uma mensagem de boas-vindas, da seguinte 
// forma: “Olá, [nome], seja bem-vindo(a) à nossa empresa”. 
// Caso o nome não seja fornecido, imprima a seguinte mensagem: “Desculpe, nenhum nome fornecido!”

var nome = prompt("Digite seu nome:");

if (nome) {
    alert("Olá, " + nome + ", seja bem-vindo(a) à nossa empresa");
} else {
    alert("Desculpe, nenhum nome fornecido!");
}