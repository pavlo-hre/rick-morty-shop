import React, {useEffect, useState} from "react"
import axios from 'axios'
import {Col, Container, Row} from "react-bootstrap";
import {CardItem} from "./Blocks";

const Product = () => {
const [data, setData]= useState([])
useEffect(()=>{
  axios.get(`https://rick-morty-3c452.firebaseio.com/heroes.json`)
    .then(res=>setData(res.data['-M4hkpNGoQXhJjS4ymkS']))
    .catch(e=>console.log(e.message))
},[])

  const renderCards = el => (
    <Col key={el.id}>
      <CardItem card={el}/>
    </Col>
  )
  return (
    <Container bg={'dark'}>
      <Row xs={1} md={2} lg={3} xl={4}>
      {data.map(el=>renderCards(el))}
      </Row>
    </Container>
  )
}


export default Product
