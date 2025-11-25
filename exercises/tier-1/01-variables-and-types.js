/*
 * Exercício 01 — Variáveis & Tipos
 * ---------------------------------
 * Objetivo: praticar declarações com let/const e reconhecer tipos primitivos x referência.
 *
 * Tarefas:
 * 1. Substitua os valores fictícios pelas suas próprias informações em `usuario`, garantindo que
 *    campos mutáveis usem `let` e campos imutáveis usem `const`.
 * 2. Complete a função `classificarTipo` retornando o texto correto baseado no tipo
 *    (`string`, `number`, `boolean`, `object`, `undefined`, `function`).
 * 3. Preencha `tiposBasicos` chamando `classificarTipo` para cada valor listado.
 *
 * Como testar:
 * - Rode `node 01-variables-and-types.js` e verifique o console.
 * - Adicione novos valores em `valoresExtras` e confira a classificação automaticamente.
 */

// 1. Ajuste as declarações abaixo seguindo as regras descritas no topo.
let usuario = {
  nome: "Matheus",
  idade: 26,
  cidade: "Sao Paulo",
};

const stackFavorita = "JavaScript";

// 2. Implemente esta função para retornar o tipo em formato de string
//    (use typeof e trate null/array como casos especiais se quiser ir além).
function classificarTipo(valor) {
  // TODO: substitua a linha abaixo pela lógica correta.
  if(valor == null) return "null";
  if(Array.isArray(valor)) return "array";
  return typeof valor;
}

// 3. Complete o array com as classificações retornadas por classificarTipo.
const tiposBasicos = [
    classificarTipo("string"),
    classificarTipo(123),
    classificarTipo(true),
    classificarTipo([1,2])
];

const valoresExtras = ["texto", 42, true, null, undefined, [1, 2], { a: 1 }];
const classificacoesExtras = valoresExtras.map(classificarTipo);

console.log("Usuário:", usuario);
console.log("Stack favorita:", stackFavorita);
console.log("Tipos básicos:", tiposBasicos);
console.log("Classificações extras:", classificacoesExtras);

module.exports = { usuario, stackFavorita, classificarTipo, tiposBasicos };
