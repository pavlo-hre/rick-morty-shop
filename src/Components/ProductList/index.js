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
  getActivePage, getIsLoading, getOrders, getPageData, getPages, searchProduct
} from "../../Redux/Selectors/selectors"
import {setCurrentPage} from "../../Redux/Actions/pages"
import {logOut} from "../../Redux/Actions/auth";
import SelectPageCount from "../../UI/SelectPageCount/SelectPageCount";

const Product = props => {

  const getProductsInCart = (cartData, product) => cartData.some(el => el.id === product.id)

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
        <>
          <Row>
            <Col md={2}>
              {/*<SideBarFilter/>*/}
            </Col>
            <Col md={10}>

              <SortControls/>

              <Row xs={1} md={2} lg={3} xl={4}>
                {props.data.map((el, i) => renderCards(el, i, props.orders))}
              </Row>
              {
                props.allData.length
                  ?
                  <Row>
                    <Col>
                      <PaginationList
                        activePage={props.activePage}
                        setActivePage={props.setCurrentPage}
                        pages={props.pages}
                      />
                    </Col>
                  </Row>
                  :
                  null
              }
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
  orders: getOrders(state),
  loading: getIsLoading(state),
  allData: searchProduct(state),

  reqResData: state.product.data,
  searchRequest: state.product.searchRequest
})

const mapDispatchToProps = {setCurrentPage, addToCart}

export default connect(mapStateToProps, mapDispatchToProps)(Product)

