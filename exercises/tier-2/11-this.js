/*
 * Exercício 11 — Entendendo `this`
 * ---------------------------------
 * Objetivo: praticar diferenças entre métodos tradicionais e arrow functions.
 *
 * Tarefas:
 * 1. Complete `pessoa.cumprimentar` usando function normal que referencie this.nome.
 * 2. Observe `pessoaArrow.cumprimentar` e explique nos comentários por que não funciona.
 * 3. Implemente `criarComponente` retornando objeto com métodos handleClickNormal e handleClickArrow
 *    demonstrando a diferença de `this` (dica: retorne uma função que chama os métodos para testar).
 * 4. Faça `invocarComContexto(fn, contexto)` usar `Function.prototype.call` para garantir o this.
 */

const pessoa = {
  nome: "Matheus",
  cumprimentar: function () {
    // TODO: console.log usando this.nome
  },
};

const pessoaArrow = {
  nome: "João",
  cumprimentar: () => {
    // TODO: explique por que this aqui não aponta para pessoaArrow.
  },
};

function criarComponente() {
  return {
    nome: "Componente",
    handleClickNormal() {
      // TODO
    },
    handleClickArrow: () => {
      // TODO
    },
  };
}

function invocarComContexto(fn, contexto) {
  // TODO: use fn.call(contexto)
}

module.exports = {
  pessoa,
  pessoaArrow,
  criarComponente,
  invocarComContexto,
};
