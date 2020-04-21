import React from "react"
import {Col, Container, Row} from "react-bootstrap"
import CardItem from "./Blocks/CardItem"
import {addToCart, setSelected} from "Redux/Actions/product"
import {connect} from "react-redux"
import {Loader} from "UI/Loader/Loader"


const Product = props => {
  const renderCards = (el, i) => (
    <Col key={el.id}>
      <CardItem
        card={el}
        index={i}
        onAddHandler={props.addToCart}/>
    </Col>
  )

  return (
    <Container>
      {props.loading
        ?
        <Loader/>
        :
        <Row xs={1} md={2} lg={3} xl={4}>
          {props.data.map((el, i) => renderCards(el, i))}
        </Row>
      }
    </Container>
  )
}
const mapStateToProps = store => ({
  data: store.product.data,
  loading: store.product.isLoading
})

export default connect(mapStateToProps,
  {addToCart})(Product)

