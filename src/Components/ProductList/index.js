import React, {useEffect, useState} from "react"
import {Col, Container, Row} from "react-bootstrap";
import CardItem from "./Blocks/CardItem";
import {fetchData, setSelected} from "../../Redux/Actions/Product";
import {connect} from "react-redux";

const Product = props => {
  const renderCards = el => (
    <Col key={el.id}>
      <CardItem card={el} onClickHandler={props.setSelected}/>
    </Col>
  )
  return (
    <Container>
      <Row xs={1} md={2} lg={3} xl={4}>
        {props.data.map(el => renderCards(el))}
      </Row>
    </Container>
  )
}
const mapStateToProps = store => ({
  data: store.product.data
})

export default connect(mapStateToProps,
  {setSelected})(Product)

