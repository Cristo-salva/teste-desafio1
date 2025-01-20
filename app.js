//Altere o conteúdo da tag h1 com document.querySelector e atribua
//o seguinte texto: Hora do Desafio.
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Hora do desafio';

//Crie uma função que exiba no console a mensagem O botão foi clicado
//sempre que o botão Console for pressionado.
function clickConsole() {
    console.log('O botão foi clicado');
}

//Crie uma função que exiba um alerta com a mensagem:
//Eu amo JS, sempre que o botão Alerta for pressionado.
function clickAlerta() {
    alert('Eu amo JS');
}

//Crie uma função que é executada quando o botão prompt é clicado,
//perguntando o nome de uma cidade do Brasil.
//Em seguida, exiba um alerta com a mensagem concatenando a resposta
//com o texto: Estive em {cidade} e lembrei de você.
function clickPrompt() {
    let nome = prompt('Digite o nome de uma cidade do Brasil: ');
    alert(`Estive em ${nome} e lembrei de você.`);
}

//Ao clicar no botão soma, peça 2 números inteiros e exiba
//o resultado da soma em um alerta.
function clickSoma() {
    let n1 = parseInt(prompt('Digite um número inteiro: '));
    let n2 = parseInt(prompt('Digite outro número inteiro: '));
    let resultado = n1 + n2;
    alert(`A soma de ${n1} e ${n2} é igual a ${resultado}`);
}

//################## DESAFIO FUNÇÕES 1 ##########################

//Criar uma função que exibe "Olá, mundo!" no console.
// function boasVindas() {
//     console.log('Olá, mundo!');
// }
// boasVindas();

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
// function mostraNome(nome) {
//     console.log(`Olá, ${nome}!`);
// }
// mostraNome('Ediney');

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
// function dobro(numero) {
//     return 2 * numero;
// }
// let resultado = dobro(9);
// console.log(resultado);

//Criar uma função que recebe três números como parâmetros e retorna a média deles.
// function media(n1, n2, n3) {
//     return ((n1+n2+n3)/3);
// }

// let resultado = media(4,5,8);
// console.log(resultado);

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
// function maior(n1,n2) {
//     return n1 > n2 ? n1 : n2;
// }
// let result = maior(5,9)
// console.log(result);

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
// function multi(n1) {
//     return n1 * n1;
// }

// let result = multi(8);
// console.log(result);


