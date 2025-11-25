/*
 * Exercício 14 — Optional Chaining & Nullish Coalescing
 * -----------------------------------------------------
 * Objetivo: acessar dados opcionais sem quebrar e fornecer defaults seguros.
 */

function getCidade(usuario) {
  // TODO: use optional chaining para retornar usuario.endereco.cidade ou undefined.
  return undefined;
}

function getPrimeiraLista(lista) {
  // TODO: retorne o primeiro elemento usando optional chaining.
  return undefined;
}

function executarSeExistir(usuario) {
  // TODO: chame usuario.cumprimentar?.()
}

function nomeComFallback(usuario) {
  // TODO: retorne usuario.nome ?? "Anônimo".
  return "";
}

module.exports = {
  getCidade,
  getPrimeiraLista,
  executarSeExistir,
  nomeComFallback,
};
