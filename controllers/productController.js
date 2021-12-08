import AsyncHandler from 'express-async-handler'
import Product from '../models/productModels.js'

//@desc Fetch all Products
//@route GET /api/products
//@access public route
export const getProducts = AsyncHandler(async (req, res) => {
  const products = await Product.find({})
  res.json(products)
})

//@desc Fetch single Product
//@route GET /api/products/:id
//@access public route

export const getProductById = AsyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product Not Found')
  }
})
