const sequence = {
  _id: 1,
  get id() {
    return this._id++
  }
}
const produtos = {}

function salvarProduto(produto) {
  if (!produto.id) produto.id = sequence.id
  produtos[produto.id] = produto
  return produto
}

function retornarProduto(id) {
  return produtos[id] || {}
}

function retornarProdutos() {
  return Object.values(produtos)
}

function deletarProduto(id) {
  const produto = produtos[id]
  delete produtos[id]
  return produto
}

module.exports = {
  salvarProduto,
  retornarProduto,
  retornarProdutos,
  deletarProduto
}
