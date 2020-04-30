import React, {useEffect} from "react"
import {compose} from "redux"
import {connect} from "react-redux"
import {Link, withRouter} from "react-router-dom"

import {
  Button,
  Card,
  Col,
  Container,
  Image,
  ListGroup,
  Row
} from "react-bootstrap"

import {setSelected} from "Redux/Actions/product"
import {addToCart} from "Redux/Actions/cart"
import {
  getOrders,
  getProducts,
  getSelectedProduct
} from "Redux/Selectors/selectors"
import {getProductsInCart} from "Helpers/cartHelper"


const ProductDetails = props => {
  const {detailInfo, orders, data, setSelected, match, addToCart} = props

  useEffect(() => {
    data.length && setSelected(+match.params.id)
  }, [data])

  return (
    <Container>
      <Row>
        <Col xs={12} md={6} lg={4} className='pb-4 text-center'>
          <Image src={detailInfo.image} rounded/>
        </Col>
        <Col>
          <Card>
            <Card.Header className='text-center'><h4>{detailInfo.name}</h4>
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item
                variant="light">Status: <strong>{detailInfo.status}</strong></ListGroup.Item>
              <ListGroup.Item
                variant="light">Gender: <strong>{detailInfo.gender}</strong></ListGroup.Item>
              <ListGroup.Item
                variant="light">Species: <strong>{detailInfo.species}</strong></ListGroup.Item>
              <ListGroup.Item
                variant="light">Location: <strong>{detailInfo.location}</strong></ListGroup.Item>
              <ListGroup.Item
                variant="light">Price: <strong>{detailInfo.price}</strong></ListGroup.Item>
            </ListGroup>
            {
              getProductsInCart(orders, detailInfo)
                ?
                <Link
                  to='/cart'
                  className='btn btn-warning my-4 w-50 align-self-center'
                >
                  Перейти в корзину
                </Link>
                :
                <Button
                  variant="success"
                  className='my-4 w-50 align-self-center'
                  onClick={() => addToCart(detailInfo)}
                >
                  Купить
                </Button>
            }
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

const mapStateToProps = state => ({
  orders: getOrders(state),
  data: getProducts(state),
  detailInfo: getSelectedProduct(state),
})

const mapDispatchToProps = {
  setSelected,
  addToCart
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps), withRouter)
(ProductDetails)
