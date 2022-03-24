import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
// CUSTOM ROUTES
import productRoutes from './routes/productRoutes.js'
dotenv.config()
const PORT = process.env.PORT
connectDB()
const app = express()

app.get('/', (req, res) => {
  res.send('Api is working')
})

// PRODUCT ROUTE
app.use('/api/products', productRoutes)

app.listen(
  PORT,
  console.log(
    `Server is started as ${process.env.NODE_ENV} at PORT ${PORT}`.yellow.bold
  )
)
