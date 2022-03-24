import React from 'react'
import { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'
// COMPONENTS
import Product from '../components/Product'

const HomeScreen = () => {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const response = await axios.get('/api/products')
    setProducts(response.data)
  }

  useEffect(() => {
    getProducts()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
