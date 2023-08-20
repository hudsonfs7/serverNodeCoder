const express = require('express')
const bd = require('./bd')
const bodyParser = require('body-parser')

const door = 3003
const app = express()
app.use(bodyParser.urlencoded({ Extended: true }))

app.get('/produtos', (req, res) => {
  res.send(bd.retornarProdutos())
})

app.get('/produtos/:id', (req, res) => {
  res.send(bd.retornarProduto(req.params.id))
})

app.post('/produtos', (req, res) => {
  const produto = bd.salvarProduto({
    name: req.body.name,
    price: req.body.price
  })
  res.send(produto)
})

app.put('/produtos/:id', (req, res) => {
  const produto = bd.salvarProduto({
    id: req.params.id,
    name: req.body.name,
    price: req.body.price
  })
  res.send(produto)
})

app.delete('/produtos/:id', (req, res) => {
  res.send(bd.deletarProduto(req.params.id))
})

app.listen(door, () => {
  console.log(`Server rodando na porta ${door}`)
})
