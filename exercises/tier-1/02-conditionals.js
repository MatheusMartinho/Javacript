/*
 * Exercício 02 — Condicionais
 * ----------------------------
 * Objetivo: praticar if/else, else-if e operador ternário.
 *
 * Tarefas:
 * 1. Implemente `classificarNota` para retornar "A", "B" ou "C" baseado no valor.
 * 2. Complete `fizzBuzz` imprimindo os valores certos de 1 a `limite`.
 * 3. Use o operador ternário em `statusMaiorIdade` evitando if tradicional.
 */

function classificarNota(nota) {
  // TODO: retorne "A" para >= 9, "B" para >= 7, caso contrário "C".
  return "";
}

function fizzBuzz(limite = 20) {
  for (let numero = 1; numero <= limite; numero++) {
    // TODO: console.log("Fizz" para múltiplos de 3, "Buzz" para 5, "FizzBuzz" para ambos, caso contrário o número).
  }
}

function statusMaiorIdade(idade) {
  // TODO: retorne "Adulto" ou "Menor" usando apenas operador ternário.
  return "";
}

module.exports = { classificarNota, fizzBuzz, statusMaiorIdade };
