/*
 * Exercício 07 — Template Strings
 * --------------------------------
 * Objetivo: praticar interpolação e strings multilinha.
 *
 * Tarefas:
 * 1. Complete `criarMensagemUsuario` retornando uma mensagem amigável usando template string.
 * 2. Implemente `gerarCardHTML` recebendo um objeto { titulo, descricao, tags } e
 *    retornando HTML multilinha com as tags em lista não ordenada.
 * 3. Reescreva `concatAnterior` usando template string em `refatorarConcatenacao`.
 */

function criarMensagemUsuario(nome, cidade) {
  // TODO: retorne algo como "Olá, NOME! Como está o clima em CIDADE?"
  return "";
}

function gerarCardHTML({ titulo, descricao, tags = [] }) {
  // TODO: monte um bloco HTML multilinha com interpolação das propriedades e
  //       liste as tags dentro de <ul> -> <li>.
  return "";
}

const concatAnterior = "Meu nome é " + "__" + " e moro em " + "__";

function refatorarConcatenacao(nome, cidade) {
  // TODO: retorne a mesma ideia de concatAnterior, mas com template string.
  return "";
}

module.exports = {
  criarMensagemUsuario,
  gerarCardHTML,
  refatorarConcatenacao,
};
