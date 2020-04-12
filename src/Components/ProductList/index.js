import React, {useEffect, useState} from "react"
import axios from 'axios'
import {Col, Container, Row} from "react-bootstrap";
import {CardItem} from "./Blocks";

const Product = props => {

  const renderCards = el => (
    <Col key={el.id}>
      <CardItem card={el} onClick={props.onClick}/>
    </Col>
  )
  return (
    <Container>
      <Row xs={1} md={2} lg={3} xl={4}>
      {props.data.map(el=>renderCards(el))}
      </Row>
    </Container>
  )
}


export default Product
