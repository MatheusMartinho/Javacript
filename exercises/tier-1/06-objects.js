/*
 * Exercício 06 — Objetos
 * -----------------------
 * Objetivo: praticar criação, acesso, mutação, destructuring e spread.
 *
 * Tarefas:
 * 1. Complete `criarPessoa` retornando um objeto com nome, idade, cidade.
 * 2. Implemente `atualizarIdade(pessoa, novaIdade)` retornando NOVO objeto com idade atualizada.
 * 3. Em `extrairDados`, use destructuring para retornar { nome, idade }.
 * 4. Faça `mesclarConfiguracoes(defaults, overrides)` com spread (overrides vence).
 * 5. Complete `clonarComSobrenome` clonando pessoa e adicionando sobrenome.
 */

function criarPessoa(nome, idade, cidade) {
  // TODO
  return {};
}

function atualizarIdade(pessoa, novaIdade) {
  // TODO: não mutar objeto original.
  return pessoa;
}

function extrairDados(pessoa) {
  // TODO: use destructuring.
  return { nome: null, idade: null };
}

function mesclarConfiguracoes(defaults, overrides) {
  // TODO: use spread operator.
  return {};
}

function clonarComSobrenome(pessoa, sobrenome) {
  // TODO
  return {};
}

module.exports = {
  criarPessoa,
  atualizarIdade,
  extrairDados,
  mesclarConfiguracoes,
  clonarComSobrenome,
};
