/*
 * Exercício 09 — Destructuring & Spread
 * -------------------------------------
 * Objetivo: praticar destructuring em arrays/objetos e uso do spread para combinar dados.
 */

function extrairPrimeiros(valores) {
  // TODO: use array destructuring para pegar primeiro, segundo e resto.
  return { primeiro: undefined, segundo: undefined, resto: [] };
}

function combinarArrays(arr1, arr2) {
  // TODO: retorne novo array combinando os dois com spread.
  return [];
}

function juntarConfigs(defaults, overrides) {
  // TODO: retorne objeto mesclado (overrides vencem).
  return {};
}

function separarUsuario(usuario) {
  // TODO: retorne { nome, idade, outrosDados } usando object destructuring e rest.
  return { nome: "", idade: 0, outrosDados: {} };
}

module.exports = {
  extrairPrimeiros,
  combinarArrays,
  juntarConfigs,
  separarUsuario,
};
