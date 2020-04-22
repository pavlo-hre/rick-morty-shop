import React from "react"
import {Col, Container, Row} from "react-bootstrap"
import CardItem from "./Blocks/CardItem"
import {addToCart} from "Redux/Actions/product"
import {connect} from "react-redux"
import {Loader} from "UI/Loader/Loader"
import PaginationList from "../../UI/Pagination/Pagination"
import {setCountOnPage, setCurrentPage} from "../../Redux/Actions/product"
import SortControls from "../SortControls/SortControls";


const Product = props => {
  const renderCards = (el, i) => (
    <Col key={el.id}>
      <CardItem
        card={el}
        index={i}
        onAddHandler={props.addToCart}/>
    </Col>
  )

  return (
    <Container>
      {props.loading
        ?
        <Loader/>
        :
        <>
          <SortControls/>
          <Row>
            <Col
              className='text-center mb-1'
              style={{height: 25}}
            >
              {props.searchRequest && `Characters found ${props.allData.length} `}
            </Col>
          </Row>
          <Row xs={1} md={2} lg={3} xl={4}>
            {props.data.map((el, i) => renderCards(el, i))}
          </Row>
          <Row>
            <PaginationList
              activePage={props.activePage}
              setActivePage={props.setCurrentPage}
              pages={props.pages}
            />
          </Row>
        </>
      }
    </Container>
  )
}
const mapStateToProps = store => ({
  allData: store.product.data,
  data: store.product.pageData,
  loading: store.product.isLoading,
  pages: store.product.pages,
  activePage: store.product.activePage,
  searchRequest: store.product.searchRequest
})

export default connect(mapStateToProps,
  {addToCart, setCurrentPage})(Product)

