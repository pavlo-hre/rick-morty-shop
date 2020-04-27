import React from "react"
import {Button, Form} from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes} from '@fortawesome/free-solid-svg-icons'

const SearchField = ({searchItem, searchRequest}) => {
  return (
    <div style={{position: "relative"}}>
      <Form.Control
        placeholder="Enter for search"
        value={searchRequest}
        onChange={e => searchItem(e.target.value)}
      />
      <Button
        style={{position: 'absolute', right: 0, top: 0, bottom: 0}}
        onClick={() => searchItem('')}
      variant='outline-secondary'
      >
        <FontAwesomeIcon icon={faTimes} />
      </Button>
    </div>
  )
}

export default SearchField
