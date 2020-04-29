import React from "react"
import {Col, Form} from "react-bootstrap"
import SelectPageCount from "../../UI/SelectPageCount/SelectPageCount"
import {connect} from "react-redux";
import {
  sortData
} from "../../Redux/Actions/filter"
import {setCountOnPage} from '../../Redux/Actions/pages'
import SearchField from "../../UI/SearchField/SearchField"
import SortButton from "../../UI/SortButton/SortButton"
import {
  getProductCount,
  getSortDirection
} from "../../Redux/Selectors/selectors"
import {searchItem} from "../../Redux/Actions/product";

const SortControls = props => {
  return (
    <Form onSubmit={e => e.preventDefault()}>
      <Form.Row className='mb-3'>
        <Col xs={12} md={6}>
          <SearchField
            searchItem={props.searchItem}
            searchRequest={props.searchRequest}
          />
        </Col>
      </Form.Row>
      <Form.Row>
        <Col xs={10}>
          <SortButton
            onClick={props.sortData}
            sortDir={props.sortDir}
          />
        </Col>
        <Col xs={2}>
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

  searchRequest: state.product.searchRequest,
})
export default connect(mapStateToProps,
  {setCountOnPage, searchItem, sortData})(SortControls)
