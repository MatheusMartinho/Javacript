/*
 * Exercício 03 — Loops
 * ---------------------
 * Objetivo: praticar for clássico, for...of e while.
 *
 * Tarefas:
 * 1. Implemente `gerarTabuada(numero, limite)` retornando um array com a tabuada do número até o limite.
 * 2. Complete `listarFilmes(filmes)` usando for...of para montar uma string numerada.
 * 3. Finalize `contarAte(limite)` utilizando while e retornando um array com os valores percorridos.
 */

function gerarTabuada(numero, limite) {
  let resultados = [];
  for(let i=0; i<=limite; i++){
    resultados.push(numero * i);
  }
  return resultados;
}

function listarFilmes(filmes) {
 let resultados = "";
 let indice = 1;
 for(const filme of filmes){
  resultados = resultados + `${indice}. ${filme}\n`;
  indice++;
 }
 return resultados.trim();
}

function contarAte(limite) {
  const lista = [];
  let atual = 0;
  while(atual <= limite){
    lista.push(atual);
    atual++
  }
  return lista;
}

console.log(gerarTabuada(2, 10));
console.log(listarFilmes(["Filme 1", "Filme 2", "Filme 3"]));
console.log(contarAte(10));
module.exports = { gerarTabuada, listarFilmes, contarAte };
