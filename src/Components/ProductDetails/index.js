import React from "react"
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
import {withRouter} from "react-router-dom"
import {compose} from "redux"

const ProductDetails = ({detailInfo}) => {
  return (
    <Container>
      <Row>
        <Col>
          <Image src={detailInfo.image} rounded/>
        </Col>
        <Col>
          <Card >
            <Card.Header className='text-center'><h4>{detailInfo.name}</h4></Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item
                variant="light">Status: <strong>{detailInfo.status}</strong></ListGroup.Item>
              <ListGroup.Item
                variant="light">Gender: <strong>{detailInfo.gender}</strong></ListGroup.Item>
              <ListGroup.Item
                variant="light">Species: <strong>{detailInfo.species}</strong></ListGroup.Item>
              <ListGroup.Item
                variant="light">Location: <strong>{detailInfo.location}</strong></ListGroup.Item>
              <ListGroup.Item className='text-center'
                variant="danger" >Price: <strong>{detailInfo.price}</strong></ListGroup.Item>
            </ListGroup>
            <Button variant='success' className='mt-auto'>Buy now </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
const mapStateToProps = store => ({
  detailInfo: store.product.selected,
})
export default compose(connect(mapStateToProps), withRouter)(ProductDetails)
