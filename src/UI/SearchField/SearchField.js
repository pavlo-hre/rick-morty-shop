import React from "react"
import {Form} from "react-bootstrap"

const SearchField = ({searchItem, searchRequest}) => {

  return (
    <Form.Control
      placeholder="Enter for search"
      value={searchRequest}
      onChange={e => searchItem(e.target.value)}
    />
  )
}

export default SearchField
