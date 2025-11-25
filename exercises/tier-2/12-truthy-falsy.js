/*
 * Exercício 12 — Truthy & Falsy
 * ------------------------------
 * Objetivo: entender quais valores são avaliados como falsy/truthy e usar operadores || e ??.
 */

const valoresParaTestar = [false, 0, "", null, undefined, NaN, [], {}, "JS", 123];

function avaliarValor(valor) {
  // TODO: retorne uma string "truthy" ou "falsy" baseada na coerção em if.
  return "";
}

function fallbackComOu(valor, fallback) {
  // TODO: retorne valor usando operador ||.
  return fallback;
}

function fallbackComNullish(valor, fallback) {
  // TODO: retorne valor usando ??.
  return fallback;
}

function limparListaNula(lista) {
  // TODO: remova itens que sejam null ou undefined.
  return [];
}

module.exports = {
  valoresParaTestar,
  avaliarValor,
  fallbackComOu,
  fallbackComNullish,
  limparListaNula,
};
