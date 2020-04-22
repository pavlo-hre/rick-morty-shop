import React from "react"
import {Col, Form} from "react-bootstrap"
import SelectPageCount from "../../UI/SelectPageCount/SelectPageCount"
import {connect} from "react-redux";
import {
  fetchData,
  resetSearch,
  searchItem,
  setCountOnPage
} from "../../Redux/Actions/product"
import SearchField from "../../UI/SearchField/SearchField"

const SortControls = props => {
  return (
    <Form onSubmit={e => e.preventDefault()}>
      <Form.Row>
        <Col>
          <SearchField
            searchItem={props.searchItem}
            resetSearch={props.fetchData}
          />
        </Col>
        <Col>

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
const mapStateToProps = store => ({
  pageCount: store.product.pageCount
})
export default connect(mapStateToProps,
  {setCountOnPage, searchItem, fetchData})(SortControls)
