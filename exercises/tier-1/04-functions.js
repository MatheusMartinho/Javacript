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
}

function subtrair(a, b) {
  // TODO
}

function multiplicar(a, b) {
  // TODO
}

function dividir(a, b) {
  // TODO: trate divisão por zero retornando null.
}

const somarArrow = (a, b) => {
  // TODO
};

const subtrairArrow = (a, b) => {
  // TODO
};

const multiplicarArrow = (a, b) => {
  // TODO
};

const dividirArrow = (a, b) => {
  // TODO
};

const cumprimentar = (nome = "Anônimo") => {
  // TODO: console.log com template string.
};

function calcular(operacao, a, b) {
  // TODO: valide que operacao é função e execute.
}

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
