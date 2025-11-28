/*
 * Exercício 04 — Funções
 * -----------------------
 * Objetivo: praticar declarações tradicionais, arrow functions e funções sem retorno.
 *
 * Tarefas:
 * 1. Implemente `somar`, `subtrair`, `multiplicar`, `dividir` com function declaration.
 * 2. Reescreva essas funções em versões arrow (`const somarArrow = (a, b) => ...`).
 * 3. Complete `cumprimentar(nome = "Anônimo")` para logar mensagem usando template string.
 * 4. Crie `calcular(operacao, a, b)` que recebe uma função e a executa.
 */

function somar(a, b) {
  // TODO
  return a + b;
}

function subtrair(a, b) {
  // TODO
  return a - b;
}

function multiplicar(a, b) {
  // TODO
  return a * b;
}

function dividir(a, b) {
  // TODO: trate divisão por zero retornando null.
  return a / b;
}

const somarArrow = (a, b) => {
  // TODO
  return a + b;
};

const subtrairArrow = (a, b) => {
  // TODO
  return a - b;
};

const multiplicarArrow = (a, b) => {
  // TODO
  return a * b;
};

const dividirArrow = (a, b) => {
  // TODO
  return a / b;
};

const cumprimentar = (nome = "Anônimo") => {
  // TODO: console.log com template string.
  return (`Olá ${nome}, seja bem vindo!`);
};

function calcular(operacao, a, b) {
  // TODO: valide que operacao é função e execute.
  if(typeof operacao !== "function") {
    throw new Error("operacao precisa se uma funcao");
  }
  return operacao(a,b);
}
console.log(somar(2,5));
console.log(subtrair(5,2));
console.log(multiplicar(5,2));
console.log(dividir(6,2));
console.log(cumprimentar('Matheus'));
console.log(calcular(somar,5,5));

module.exports = {
  somar,
  subtrair,
  multiplicar,
  dividir,
  somarArrow,
  subtrairArrow,
  multiplicarArrow,
  dividirArrow,
  cumprimentar,
  calcular,
};
