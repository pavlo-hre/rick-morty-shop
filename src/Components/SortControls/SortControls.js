import React from "react"
import {Col, Form} from "react-bootstrap"
import {connect} from "react-redux"
import {
  sortData, searchItem
} from "../../Redux/Actions/filter"
import {setCountOnPage} from '../../Redux/Actions/pages'
import SearchField from "../../UI/SearchField/SearchField"
import SortButton from "../../UI/SortButton/SortButton"
import {
  getProductCount, getSearchQuery,
  getSortDirection, searchProduct, getFilterSettings
} from "../../Redux/Selectors/selectors"
import SearchAlert from "../../UI/SearchAlert/SearchAlert"


const SortControls = props => {
  return (
    <Form onSubmit={e => e.preventDefault()}>
      <Form.Row className='mb-1'>
        <Col xs={12} md={6}>
          <SearchField
            searchItem={props.searchItem}
            searchQuery={props.searchQuery}
          />
        </Col>
        <Col xs={12} md={6}>
          <SearchAlert
            count={props.data.length}
            query={props.searchQuery}
            filter={props.filter}
          />
        </Col>
      </Form.Row>
      <Form.Row className='mb-3'>
        <Col>
          <SortButton
            onClick={props.sortData}
            sortDir={props.sortDir}
          />
        </Col>
      </Form.Row>
    </Form>
  )
}
const mapStateToProps = state => ({
  pageCount: getProductCount(state),
  sortDir: getSortDirection(state),
  searchQuery: getSearchQuery(state),
  data: searchProduct(state),
  filter: getFilterSettings(state)
})
export default connect(mapStateToProps,
  {setCountOnPage, searchItem, sortData})(SortControls)
