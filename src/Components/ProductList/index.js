import React from "react"
import {Col, Container, Row} from "react-bootstrap"
import CardItem from "./Blocks/CardItem"
import {addToCart} from "Redux/Actions/cart"
import {connect} from "react-redux"
import {Loader} from "UI/Loader/Loader"
import PaginationList from "../../UI/Pagination/Pagination"

import SortControls from "../SortControls/SortControls";
import SideBarFilter from "../SideBarFilter/SideBarFilter";

import {
  getActivePage, getPageData, getPages,
  getProducts,
} from "../../Redux/Selectors/selectors"
import {setCurrentPage} from "../../Redux/Actions/pages"

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
            <PaginationList
              activePage={props.activePage}
              setActivePage={props.setCurrentPage}
              pages={props.pages}
            />
          </Row>
          <Row>
            <Col
              className='text-center mb-1'
              style={{height: 25}}
            >
              {props.searchRequest && `Characters found ${props.reqResData.length} `}
            </Col>
          </Row>
          <Row>
            <Col md={2}>
              {/*<SideBarFilter/>*/}
            </Col>
            <Col md={10}>
              <Row xs={1} md={2} lg={3} xl={4}>
                {props.data.map((el, i) => renderCards(el, i))}
              </Row>
            </Col>
          </Row>

        </>
      }
    </Container>
  )
}
const mapStateToProps = state => ({
  data: getPageData(state),
  pages: getPages(state),
  activePage: getActivePage(state),

  reqResData: state.product.data, loading: state.product.isLoading,
  searchRequest: state.product.searchRequest
})

const mapDispatchToProps = {setCurrentPage, addToCart}

export default connect(mapStateToProps, mapDispatchToProps)(Product)

