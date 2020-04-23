import React from "react"
import {Form} from "react-bootstrap"

const SelectPageCount = props => {
  const onSelect = e => {
    props.onSelect(+e.target.value)
  }
  return (

    <Form.Group className='d-flex justify-content-end'>
      <Form.Label className='mr-2'>Cards on page</Form.Label>
      <Form.Control
        onChange={onSelect}
        as="select"
        style={{width: 70}}
      >
        <option>12</option>
        <option>24</option>
        <option>48</option>
      </Form.Control>
    </Form.Group>

  )
}

export default SelectPageCount
