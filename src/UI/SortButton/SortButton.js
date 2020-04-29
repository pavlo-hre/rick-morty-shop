import React from "react"
import {
  ButtonGroup,
  ToggleButton
} from "react-bootstrap"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSortAmountDown, faSortAmountDownAlt, faRandom} from '@fortawesome/free-solid-svg-icons'


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
        <FontAwesomeIcon icon={faRandom} className='ml-1'/>
      </ToggleButton>
      <ToggleButton
        variant="outline-secondary"
        type="radio"
        name="sort"
        value="asc"
        onChange={e => onClick(e.target.value)}
        checked={sortDir === 'asc'}
      >
        Цена
        <FontAwesomeIcon icon={faSortAmountDownAlt} className='ml-1'/>
      </ToggleButton>
      <ToggleButton
        variant="outline-secondary"
        type="radio"
        name="sort"
        value="desc"
        onChange={e => onClick(e.target.value)}
        checked={sortDir === 'desc'}
      >
        Цена
        <FontAwesomeIcon icon={faSortAmountDown} className='ml-1'/>
      </ToggleButton>
    </ButtonGroup>
  )
}

export default SortButton
