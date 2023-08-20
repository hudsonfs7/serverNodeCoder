const express = require('express')
const bd = require('./bd')
const bodyParser = require('body-parser')

const door = 3003
const app = express()
app.use(bodyParser.urlencoded({ Extended: true }))

app.get('/produtos', (req, res) => {
  res.send(bd.retornarProdutos())
})

app.get('/produtos:id', (req, res) => {
  res.send(bd.retornarProduto(req.params.id))
})

app.post('/produtos', (req, res) => {
  const produto = {
    name: req.body.name,
    preco: req.body.preco
  }
  res.send(produto)
})

app.listen(door, () => {
  console.log(`Server rodando na porta ${door}`)
})
