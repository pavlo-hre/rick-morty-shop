import React from "react"
import {Alert, Col} from "react-bootstrap"

const SearchAlert = ({count, query, filter}) => (
  query || filter
    ?
    <Alert
      variant={count ? 'success' : 'danger'}
      className='mb-0 px-2 py-1'
      style={{minHeight: 40}}
    >
      {
        count
          ?
          <span>Найдено персонажей: <strong> {count} </strong></span>
          :
          <span> Совпадения не найдены</span>
      }
    </Alert>
    :
    null
)

export default SearchAlert
