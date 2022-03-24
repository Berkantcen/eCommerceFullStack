import express from 'express'
import dotenv from 'dotenv'
import products from './data/products.js'
dotenv.config()
const PORT = process.env.PORT

const app = express()

app.get('/', (req, res) => {
  res.send('Api is working')
})

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/api/products/:id', (req, res) => {
  const product = products.find((product) => product._id === req.params.id)
  res.json(product)
})

app.listen(
  PORT,
  console.log(`Server is started as ${process.env.NODE_ENV} at PORT ${PORT}`)
)
