// ordenação dos Livros por preço
let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');
btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPreco);
function ordenarLivrosPreco(){
    let livorsOrdenados = livros.sort((a, b)=>  a.preco - b.preco);
    exibirOsLivrosNaTela(livorsOrdenados);
};