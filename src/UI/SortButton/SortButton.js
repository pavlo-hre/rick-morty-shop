import React from "react"
import {
  ButtonGroup,
  ToggleButton
} from "react-bootstrap"


const SortButton = props => {
  const {sortDir, onClick} = props
  return (
    <ButtonGroup toggle>
      <ToggleButton
        variant="outline-secondary"
        type="radio"
        name="sort"
        value='all'
        onChange={() => onClick(null)}
        checked={!sortDir}
      >
        По умолчанию
      </ToggleButton>
      <ToggleButton
        variant="outline-secondary"
        type="radio"
        name="sort"
        value="asc"
        onChange={e => onClick(e.target.value)}
        checked={sortDir === 'asc'}
      >
        Сначала дешевые
      </ToggleButton>
      <ToggleButton
        variant="outline-secondary"
        type="radio"
        name="sort"
        value="desc"
        onChange={e => onClick(e.target.value)}
        checked={sortDir === 'desc'}
      >
        Сначала дорогие
      </ToggleButton>
    </ButtonGroup>
  )
}

export default SortButton
