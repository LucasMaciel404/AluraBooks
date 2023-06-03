const elementoParaInserir = document.getElementById('livros');
const elementoComValorTotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis');

function exibirOsLivrosNaTela(listaDeLivros){
    elementoParaInserir.innerHTML = ''; 
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = "";
    listaDeLivros.forEach(livro => {
      let disponnibilidade = verificarDisponibilidadeDoLivro(livro);
      elementoParaInserir.innerHTML += `<div class="livro">
      <img class="${disponnibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$: ${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
      </div>`;
    });
}
function verificarDisponibilidadeDoLivro(livro){
  return livro.quantidade > 0? 'livro_imagens' : 'livro_imagens indisponivel';
}