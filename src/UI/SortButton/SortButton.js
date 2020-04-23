import React from "react"
import {Button, ButtonGroup} from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronUp, faChevronDown, faTimes} from '@fortawesome/free-solid-svg-icons'


const SortButton = props => {
  const {sortDir, onClick} = props
  return (
    <ButtonGroup>
      <Button
        variant="outline-secondary"
        onClick={() => onClick('asc')}
        disabled={sortDir === 'asc'}
      >
        <FontAwesomeIcon icon={faChevronUp} />
      </Button>
      <Button
        variant="outline-secondary"
        onClick={() => onClick('desc')}
        disabled={sortDir === 'desc'}
      >
        <FontAwesomeIcon icon={faChevronDown} />
      </Button>
      <Button
        variant="outline-secondary"
        onClick={() => onClick(null)}
        disabled={!sortDir}
      >
        <FontAwesomeIcon icon={faTimes} />
      </Button>
    </ButtonGroup>
  )
}

export default SortButton
