import React from "react"
import {Button, ButtonGroup} from "react-bootstrap"


const SortButton = props => {
  const {sortDir, onClick, reset} = props
  return (
    <ButtonGroup>
      <Button
        variant="outline-secondary"
        onClick={() => onClick('asc')}
        disabled={sortDir === 'asc'}
      >
        ASC
      </Button>
      <Button
        variant="outline-secondary"
        onClick={() => onClick('desc')}
        disabled={sortDir === 'desc'}
      >
        DESC
      </Button>
      <Button
        variant="outline-secondary"
        onClick={reset}
        disabled={!sortDir}
      >
        X
      </Button>
    </ButtonGroup>
  )
}

export default SortButton
