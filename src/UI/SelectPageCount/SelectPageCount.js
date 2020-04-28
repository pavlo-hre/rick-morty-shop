import React from "react"
import {Form} from "react-bootstrap"

const SelectPageCount = props => {
  const onSelect = e => {
    props.onSelect(+e.target.value)
  }
  return (

    <Form.Group className='d-flex justify-content-end'>
      <Form.Control
        onChange={onSelect}
        as="select"
        style={{width: 70}}
      >
        <option value={12}>12</option>
        <option value={24}>24</option>
        <option value={48}>48</option>
      </Form.Control>
    </Form.Group>

  )
}

export default SelectPageCount
