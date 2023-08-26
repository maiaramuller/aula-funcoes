//Exercícios de interpretação de código
/*1.
a)10 e 50
b)irá aparecer nada
*/

/*2.
a)A função está fazendo com que retorne a string em letras minúsculas e determona que se caso encotre a palavra cenoura retorne true no console.
b)true,true,true
*/

//Exercícios de escrita de código

/*1.
//a)
const sobreMim = () => {
  let nome = prompt("Qual é o seu nome?");
  let idade = prompt("Qual é a sua idade?");
  let cidade = prompt("Qual é a sua cidade?");
  let sou = prompt("O que você faz no momento, estuda/trabalha?");

  console.log(
    `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${sou}.`
  );
};

sobreMim();


//b)

const sobreMim = (nome, idade, cidade, sou) => {
  console.log(
    `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${sou}.`
  );
};

sobreMim("Maiara", 22, "São Leopoldo", "estudante");
*/

//2.
/*a)
const recebaNumeros = (a, b) => {
  const soma = Number(a + b);
  console.log(soma);
};

recebaNumeros(22, 22);

b)
const recebaNumeros = (a, b) => {
  const bool = a >= b;
  console.log(`O primeiro número é maior que o segundo? ${bool}`);
};

recebaNumeros(22, 22);


//c)
const recebaNumero = (a) => {
  const resto = a % 2;
  const par = resto === 0;
  console.log(`O primeiro número é par? ${par}`);
};

recebaNumero(23);

d)
let mensagemUsuario = prompt("Insira um texto");

const recebaMensagem = (mensagem) => {
  const mensagemMaiuscula = mensagem.toUpperCase();
  console.log(`Tamanho da mensagem: ${mensagem.length}`);
  console.log(`Versão em maiúsculas: ${mensagemMaiuscula}`);
};

recebaMensagem(mensagemUsuario);
*/
/*3
const funcaoSoma = (a, b) => {
  const soma = Number(a) + Number(b);
};

const funcaoSubtracao = (a, b) => {
  const subtracao = Number(a - b);
};

const funcaoDivisao = (a, b) => {
  const divisao = Number(a / b);
};

const funcaoMultiplicacao = (a, b) => {
  const multiplicacao = Number(a * b);
};

let primeiroNumero = prompt("Digite um número:");
let segundoNumero = prompt("Digite outro número:");

const soma = funcaoSoma(primeiroNumero, segundoNumero);
const subtracao = funcaoSubtracao(primeiroNumero, segundoNumero);
const divisao = funcaoDivisao(primeiroNumero, segundoNumero);
const multiplicacao = funcaoMultiplicacao(primeiroNumero, segundoNumero);

console.log(`Números inseridos: ${primeiroNumero} e ${segundoNumero}`);
console.log(`Soma: ${soma}`);
console.log(`Diferença: ${subtracao}`);
console.log(`Multiplicação: ${multiplicacao}`);
console.log(`Divisão: ${divisao}`);
*/
