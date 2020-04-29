import React from "react"
import {Alert, Col} from "react-bootstrap";

const SearchAlert = ({count, query}) => (
  query
  &&
  <Alert
    variant={count ? 'success' : 'danger'}
    className='mb-0 px-2 py-1'
    style={{minHeight: 40}}
  >
    Найдено персонажей:
    <strong> {count}</strong>
  </Alert>
)

export default SearchAlert
