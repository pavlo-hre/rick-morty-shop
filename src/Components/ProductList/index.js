import React from "react"
import {Col, Container, Row} from "react-bootstrap"
import CardItem from "./Blocks/CardItem"
import {addToCart} from "Redux/Actions/cart"
import {connect} from "react-redux"
import {Loader} from "UI/Loader/Loader"
import PaginationList from "../../UI/Pagination/Pagination"

import SortControls from "../SortControls/SortControls"
import SideBarFilter from "../SideBarFilter/SideBarFilter"

import {
  getActivePage,
  getIsLoading,
  getOrders,
  getPageData,
  getPages,
  getProductCount,
  searchProduct
} from "../../Redux/Selectors/selectors"
import {setCountOnPage, setCurrentPage} from "../../Redux/Actions/pages"
import SelectPageCount from "../../UI/SelectPageCount/SelectPageCount"
import {getProductsInCart} from "../../Helpers/cartHelper"


const Product = props => {

  const renderCards = (el, i, orders) => {
    return <Col key={el.id}>
      <CardItem
        card={el}
        index={i}
        onAddHandler={props.addToCart}
        isProductInCart={getProductsInCart(orders, el)}
      />
    </Col>
  }

  return (
    <Container>
      {props.loading
        ?
        <Loader/>
        :
        <Row>
          <Col md={3} lg={2}>
            <SideBarFilter/>
          </Col>
          <Col md={9} lg={10}>
            <SortControls/>
            <Row xs={1} md={2} lg={3} xl={4}>
              {props.data.map((el, i) => renderCards(el, i, props.orders))}
            </Row>
            {
              props.allData.length > props.count
                ?
                <Row className='mb-5'>
                  <Col xs={9} md={10}>
                    <PaginationList
                      activePage={props.activePage}
                      setActivePage={props.setCurrentPage}
                      pages={props.pages}
                    />
                  </Col>
                  <Col xs={3} md={2}>
                    <SelectPageCount
                      onSelect={props.setCountOnPage}
                      count={props.count}
                    />
                  </Col>
                </Row>
                :
                null
            }
          </Col>
        </Row>
      }
    </Container>
  )
}
const mapStateToProps = state => ({
  data: getPageData(state),
  pages: getPages(state),
  activePage: getActivePage(state),
  orders: getOrders(state),
  loading: getIsLoading(state),
  allData: searchProduct(state),
  count: getProductCount(state)
})

const mapDispatchToProps = {setCurrentPage, addToCart, setCountOnPage}

export default connect(mapStateToProps, mapDispatchToProps)(Product)

