import React, {useEffect} from "react"
import {
  Button,
  Card,
  Col,
  Container,
  Image,
  ListGroup,
  Row
} from "react-bootstrap"
import {connect} from "react-redux"
import {Link, withRouter} from "react-router-dom"
import {compose} from "redux"
import {setSelected} from "Redux/Actions/product"


const ProductDetails = props => {
  const {detailInfo} = props

  useEffect(() => {
    props.data.length && props.setSelected(+props.match.params.id)
  }, [props.data])

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
            {detailInfo.inCart
              ? <Link
                to='/cart'
                className='btn btn-warning my-4 w-50 align-self-center'
              >
                Go to Cart
              </Link>
              :
              <Button
                variant="success"
                className='my-4 w-50 align-self-center'
                onClick={() => props.addToCart(detailInfo)}
              >Add to cart</Button>
            }
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
const mapStateToProps = store => ({
  data: store.product.data,
  detailInfo: store.product.selected,
})
export default compose(connect(mapStateToProps, {
  setSelected
}), withRouter)(ProductDetails)
