/*
 * Exercício 08 — Async/Await & Promises
 * --------------------------------------
 * Objetivo: praticar fetch fictício, Promise.all e tratamento de erros.
 *
 * Instruções:
 * - Use `fetch` ou `fakeFetch` (já incluso abaixo) para simular requisições.
 * - Utilize try/catch para tratar erros e sempre retorne dados úteis para testes.
 */

const FAKE_DB = {
  "/api/usuarios": [{ id: 1, nome: "Ana" }, { id: 2, nome: "Léo" }],
  "/api/posts": [{ id: 1, titulo: "Primeiro post" }],
};

function fakeFetch(url, delay = 300) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!FAKE_DB[url]) {
        reject(new Error(`404: ${url} não encontrado`));
      } else {
        resolve({ json: () => Promise.resolve(FAKE_DB[url]) });
      }
    }, delay);
  });
}

async function buscarUsuarios() {
  // TODO: usar fakeFetch com try/catch e retornar array de usuários.
}

async function buscarPosts() {
  // TODO: similar ao acima, retornando posts.
}

async function buscarTudoParalelo() {
  // TODO: use Promise.all para obter usuarios e posts juntos.
  // Retorne { usuarios, posts }.
}

async function buscarComFalha() {
  // TODO: faça uma chamada para rota inexistente e capture o erro,
  // retornando { erro: message }.
}

module.exports = {
  fakeFetch,
  buscarUsuarios,
  buscarPosts,
  buscarTudoParalelo,
  buscarComFalha,
};
