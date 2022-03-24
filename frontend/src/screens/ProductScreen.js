import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'

const ProductScreen = () => {
  const [product, setProduct] = useState({})
  const { id } = useParams()

  const getSingleProduct = async () => {
    const response = await axios.get(`/api/products/${id}`)
    setProduct(response.data)
  }

  useEffect(() => {
    getSingleProduct()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Link className='btn btn-ligth my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} fluid alt={product.name} />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            {/* NAME */}
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            {/* RATING */}
            <ListGroup.Item>
              <Rating
                rating={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price : ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description : {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>{product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={product.countInStock === 0 ? true : false}
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen
