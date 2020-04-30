import React from "react"
import {Button, Form} from "react-bootstrap"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'

const SearchField = ({searchItem, searchQuery}) => {
  return (
    <div style={{position: "relative", marginBottom: 10}}>
      <Form.Control
        placeholder="Введите имя персонажа"
        value={searchQuery}
        onChange={e => searchItem(e.target.value)}
      />
      {
        searchQuery &&
        <Button
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            color: 'red',
          }}
          onClick={() => searchItem('')}
          variant='link'
        >
          <FontAwesomeIcon icon={faTimes}/>
        </Button>
      }
    </div>
  )
}

export default SearchField
