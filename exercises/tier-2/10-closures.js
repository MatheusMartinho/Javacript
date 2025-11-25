/*
 * Exercício 10 — Closures
 * ------------------------
 * Objetivo: entender como funções internas mantêm acesso ao escopo externo.
 *
 * Tarefas:
 * 1. Complete `criarContador` retornando um objeto com métodos incrementar() e pegar().
 * 2. Implemente `criarLogger(prefixo)` retornando uma função que loga mensagens com o prefixo.
 * 3. Finalize `debounce(fn, delay)` criando e retornando uma função que só executa fn
 *    após ficar `delay` ms sem ser chamada.
 */

function criarContador() {
  // TODO: use variável privada count.
}

function criarLogger(prefixo = "LOG") {
  // TODO: retorne função que console.log(`[${prefixo}] mensagem`).
}

function debounce(fn, delay = 300) {
  // TODO: retorne função que usa setTimeout/clearTimeout e closures.
}

module.exports = {
  criarContador,
  criarLogger,
  debounce,
};
