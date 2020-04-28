import React from "react"
import {Col, Form} from "react-bootstrap"
import SelectPageCount from "../../UI/SelectPageCount/SelectPageCount"
import {connect} from "react-redux";
import {
  searchItem,
  sortData
} from "../../Redux/Actions/product"
import {setCountOnPage} from '../../Redux/Actions/pages'
import SearchField from "../../UI/SearchField/SearchField"
import SortButton from "../../UI/SortButton/SortButton"
import {getProductCount} from "../../Redux/Selectors/selectors"

const SortControls = props => {
  return (
    <Form onSubmit={e => e.preventDefault()}>
      <Form.Row>
        <Col>
          <SearchField
            searchItem={props.searchItem}
            searchRequest={props.searchRequest}
          />
        </Col>
        <Col>
          <SortButton
            onClick={props.sortData}
            sortDir={props.sortDir}
          />
        </Col>
        <Col>
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
  searchRequest: state.product.searchRequest,
  sortDir: state.product.sortDir
})
export default connect(mapStateToProps,
  {setCountOnPage, searchItem, sortData})(SortControls)
