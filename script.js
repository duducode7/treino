const botoes = document.querySelectorAll(".botoes .btn");
const secoes = document.querySelectorAll(".secao");

botoes.forEach(botao => {
  botao.addEventListener("click", () => {

    // 1. Remove classe ativo de todos os botões
    botoes.forEach(b => b.classList.remove("ativo"));

    // 2. Ativa o botão clicado
    botao.classList.add("ativo");

    // 3. Esconde todas as seções
    secoes.forEach(sec => sec.classList.remove("ativa"));

    // 4. Mostra apenas a seção correspondente
    const alvo = botao.getAttribute("data-target");
    document.getElementById(alvo).classList.add("ativa");
  });
});
