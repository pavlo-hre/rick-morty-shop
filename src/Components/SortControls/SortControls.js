import React from "react"
import {Alert, Col, Form} from "react-bootstrap"
import SelectPageCount from "../../UI/SelectPageCount/SelectPageCount"
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
      <Form.Row>
        <Col xs={9} md={11}>
          <SortButton
            onClick={props.sortData}
            sortDir={props.sortDir}
          />
        </Col>
        <Col xs={3} md={1}>
          <SelectPageCount
            onSelect={props.setCountOnPage}
            pageCount={props.pageCount}
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
