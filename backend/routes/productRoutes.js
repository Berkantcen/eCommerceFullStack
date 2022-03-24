import express from 'express'
const router = express.Router()
import Product from '../models/productModel.js'
import AsyncHandler from 'express-async-handler'

// @desc   Get all products
// @route  GET /api/products
// @access Public
router.get(
  '/',
  AsyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
  })
)

// @desc   Get single product
// @route  GET /api/products/:id
// @access Public
router.get(
  '/:id',
  AsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
      res.json(product)
    } else {
      res.status(404).json({ msg: 'Product not found' })
    }
  })
)

export default router
