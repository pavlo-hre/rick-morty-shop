import React, {useEffect, useState} from "react"
import {Col, Container, Row} from "react-bootstrap";
import CardItem from "./Blocks/CardItem";
import {addToCart, fetchData, setSelected} from "../../Redux/Actions/product";
import {connect} from "react-redux";


const Product = props => {
  const renderCards = (el,i) => (
    <Col key={el.id}>
      <CardItem
        card={el}
        index={i}
        onClickHandler={props.setSelected}
        onAddHandler={props.addToCart}/>
    </Col>
  )
  return (
    <Container>
      <Row xs={1} md={2} lg={3} xl={4}>
        {props.data.map((el,i) => renderCards(el,i))}
      </Row>
    </Container>
  )
}
const mapStateToProps = store => ({
  data: store.product.data
})

export default connect(mapStateToProps,
  {setSelected, addToCart})(Product)

