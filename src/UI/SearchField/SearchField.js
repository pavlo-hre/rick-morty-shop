import React, {useState} from "react"
import {Form} from "react-bootstrap"

const SearchField = ({searchItem, resetSearch}) => {
  const [value, setValue] = useState('')
  const onSubmit = e => {
    if (e.key === 'Enter') {
      searchItem(e.target.value)
      setValue('')
      if (value === '') {
        resetSearch()
      }
    }
  }

  return (
    <Form.Control
      placeholder="Enter for search"
      value={value}
      onChange={e => setValue(e.target.value)}
      onKeyPress={onSubmit}/>
  )
}

export default SearchField
