import React from "react"
import {Container, Spinner} from "react-bootstrap";

export const Loader = () => (
  <div className='d-flex justify-content-center'>
    <Spinner animation="border"/>
  </div>
)
